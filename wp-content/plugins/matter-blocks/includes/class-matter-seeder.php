<?php
/**
 * Seeder dei contenuti del tema Matter of Fitness.
 *
 * Ricostruisce all'attivazione del tema (o su richiesta via WP-CLI) lo stato
 * "di fabbrica" del sito a partire dai file in seed/:
 *   - pagine (post_content a blocchi, gerarchia, template guscio "about")
 *   - front page statica
 *   - menu "Principale" (location primary)
 *   - form Contact Form 7 (delegato a seed-cf7.php se CF7 è attivo)
 *
 * Idempotente: di default crea solo ciò che manca (cerca le pagine per slug e il
 * menu per nome). Con $force = true riallinea i contenuti esistenti ai file seed/.
 *
 * Gli URL nei file content/ sono tokenizzati con {{HOME}} → sostituito con
 * l'URL del sito corrente al momento del seeding (portabilità tra domini).
 *
 * @package matter-blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/** Logger: usa WP_CLI se disponibile, altrimenti error_log. */
function mof_seed_log( $msg, $type = 'log' ) {
    if ( defined( 'WP_CLI' ) && WP_CLI ) {
        if ( 'warning' === $type ) {
            WP_CLI::warning( $msg );
        } elseif ( 'success' === $type ) {
            WP_CLI::success( $msg );
        } else {
            WP_CLI::log( $msg );
        }
    } else {
        error_log( '[matter-seed] ' . $msg );
    }
}

/** Trova una pagina per slug ed (eventuale) parent id. Ritorna l'oggetto o null. */
function mof_seed_find_page( $slug, $parent_id = 0 ) {
    $found = get_posts( array(
        'post_type'        => 'page',
        'name'             => $slug,
        'post_parent'      => $parent_id,
        'posts_per_page'   => 1,
        'post_status'      => 'any',
        'suppress_filters' => false,
    ) );
    return $found ? $found[0] : null;
}

/**
 * Esegue il seeding completo.
 *
 * @param bool $force Se true riallinea pagine/menu esistenti ai file seed/.
 * @return array Riepilogo (created/updated/skipped per pagine, stato menu/cf7).
 */
function matter_seed_content( $force = false ) {
    $seed_dir = dirname( __DIR__ ) . '/seed';
    $manifest = is_readable( $seed_dir . '/pages.php' ) ? include $seed_dir . '/pages.php' : array();
    if ( empty( $manifest ) ) {
        mof_seed_log( 'Manifest seed/pages.php mancante o vuoto. Nulla da fare.', 'warning' );
        return array( 'pages' => array(), 'menu' => 'skip', 'cf7' => 'skip' );
    }

    $home    = untrailingslashit( home_url() );
    $summary = array( 'created' => array(), 'updated' => array(), 'skipped' => array() );
    $slug_to_id = array();

    // --- Pagine (il manifest è ordinato: i parent precedono le figlie) ---
    foreach ( $manifest as $key => $row ) {
        $slug        = $row['slug'];
        $parent_id   = 0;
        if ( ! empty( $row['parent_slug'] ) && isset( $slug_to_id[ $row['parent_slug'] ] ) ) {
            $parent_id = $slug_to_id[ $row['parent_slug'] ];
        }

        $content_file = $seed_dir . '/content/' . $slug . '.html';
        $content      = is_readable( $content_file ) ? file_get_contents( $content_file ) : '';
        $content      = str_replace( '{{HOME}}', $home, $content );

        $existing = mof_seed_find_page( $slug, $parent_id );

        if ( $existing && ! $force ) {
            $slug_to_id[ $slug ] = $existing->ID;
            $summary['skipped'][] = $slug;
            mof_seed_log( "skip (esiste): {$slug} (id {$existing->ID})" );
            continue;
        }

        $postarr = array(
            'post_type'    => 'page',
            'post_status'  => 'publish',
            'post_title'   => $row['title'],
            'post_name'    => $slug,
            'post_content' => $content,
            'post_parent'  => $parent_id,
            'menu_order'   => (int) $row['menu_order'],
        );

        if ( $existing ) {
            $postarr['ID'] = $existing->ID;
            $id = wp_update_post( $postarr, true );
            $summary['updated'][] = $slug;
        } else {
            $id = wp_insert_post( $postarr, true );
            $summary['created'][] = $slug;
        }

        if ( is_wp_error( $id ) || ! $id ) {
            mof_seed_log( "errore su {$slug}: " . ( is_wp_error( $id ) ? $id->get_error_message() : 'id vuoto' ), 'warning' );
            continue;
        }

        $slug_to_id[ $slug ] = $id;

        // Template guscio (es. "about"); Home usa front-page.html automaticamente.
        if ( ! empty( $row['template'] ) ) {
            update_post_meta( $id, '_wp_page_template', $row['template'] );
        }

        mof_seed_log( ( $existing ? 'update' : 'create' ) . ": {$slug} (id {$id})" );
    }

    // --- Front page statica ---
    foreach ( $manifest as $row ) {
        if ( ! empty( $row['front_page'] ) && isset( $slug_to_id[ $row['slug'] ] ) ) {
            update_option( 'show_on_front', 'page' );
            update_option( 'page_on_front', $slug_to_id[ $row['slug'] ] );
            mof_seed_log( "front page: {$row['slug']} (id {$slug_to_id[ $row['slug'] ]})" );
            break;
        }
    }

    // --- Menu "Principale" ---
    $menu_status = mof_seed_menu( $seed_dir, $slug_to_id, $force );

    // --- Permalink /%postname%/ ---
    if ( '/%postname%/' !== get_option( 'permalink_structure' ) ) {
        update_option( 'permalink_structure', '/%postname%/' );
        mof_seed_log( 'permalink_structure → /%postname%/' );
    }
    flush_rewrite_rules( false );

    // --- Contact Form 7 (delegato; mappa via slug) ---
    $cf7_status = 'skip';
    $cf7_file   = dirname( __DIR__ ) . '/scripts/seed-cf7.php';
    if ( is_readable( $cf7_file ) ) {
        if ( ! defined( 'MOF_SEED_CF7_AS_LIB' ) ) {
            define( 'MOF_SEED_CF7_AS_LIB', true ); // evita l'auto-esecuzione standalone
        }
        require_once $cf7_file;
        if ( function_exists( 'mof_seed_cf7' ) ) {
            $cf7_status = mof_seed_cf7() ? 'ok' : 'cf7-assente';
        }
    }

    mof_seed_log( sprintf(
        'seed: %d create, %d aggiornate, %d saltate; menu=%s; cf7=%s',
        count( $summary['created'] ),
        count( $summary['updated'] ),
        count( $summary['skipped'] ),
        $menu_status,
        $cf7_status
    ), 'success' );

    return array( 'pages' => $summary, 'menu' => $menu_status, 'cf7' => $cf7_status );
}

/**
 * Crea/aggiorna il menu "Principale" e lo assegna alla location primary.
 * Idempotente: se il menu esiste e non $force, viene preservato.
 *
 * @return string 'created'|'rebuilt'|'skip'|'no-data'
 */
function mof_seed_menu( $seed_dir, array $slug_to_id, $force = false ) {
    $cfg = is_readable( $seed_dir . '/menu.php' ) ? include $seed_dir . '/menu.php' : array();
    if ( empty( $cfg['items'] ) ) {
        return 'no-data';
    }

    $existing = wp_get_nav_menu_object( $cfg['name'] );
    if ( $existing && ! $force ) {
        // Garantisci almeno l'assegnazione alla location.
        mof_seed_assign_menu_location( $existing->term_id, $cfg['location'] );
        return 'skip';
    }

    if ( $existing ) {
        // $force: svuota le voci esistenti e ricostruisci.
        $items = wp_get_nav_menu_items( $existing->term_id ) ?: array();
        foreach ( $items as $it ) {
            wp_delete_post( $it->ID, true );
        }
        $menu_id = $existing->term_id;
    } else {
        $menu_id = wp_create_nav_menu( $cfg['name'] );
        if ( is_wp_error( $menu_id ) ) {
            mof_seed_log( 'errore creazione menu: ' . $menu_id->get_error_message(), 'warning' );
            return 'no-data';
        }
    }

    // Le voci sono ordinate; i parent (top-level) precedono le figlie.
    $toplevel_item_id = array(); // page_slug => menu_item_id (solo top-level)
    foreach ( $cfg['items'] as $item ) {
        $page_id = isset( $slug_to_id[ $item['page_slug'] ] ) ? $slug_to_id[ $item['page_slug'] ] : 0;
        if ( ! $page_id ) {
            mof_seed_log( "voce menu saltata (pagina mancante): {$item['page_slug']}", 'warning' );
            continue;
        }
        $parent_item = 0;
        if ( ! empty( $item['parent_page_slug'] ) && isset( $toplevel_item_id[ $item['parent_page_slug'] ] ) ) {
            $parent_item = $toplevel_item_id[ $item['parent_page_slug'] ];
        }

        $item_id = wp_update_nav_menu_item( $menu_id, 0, array(
            'menu-item-title'     => $item['title'],
            'menu-item-object'    => 'page',
            'menu-item-object-id' => $page_id,
            'menu-item-type'      => 'post_type',
            'menu-item-status'    => 'publish',
            'menu-item-parent-id' => $parent_item,
            'menu-item-position'  => (int) $item['order'],
        ) );

        if ( ! is_wp_error( $item_id ) && empty( $item['parent_page_slug'] ) ) {
            $toplevel_item_id[ $item['page_slug'] ] = $item_id;
        }
    }

    mof_seed_assign_menu_location( $menu_id, $cfg['location'] );
    return $existing ? 'rebuilt' : 'created';
}

/** Assegna un menu a una location del tema corrente. */
function mof_seed_assign_menu_location( $menu_id, $location ) {
    $locations = get_theme_mod( 'nav_menu_locations', array() );
    if ( ! is_array( $locations ) ) {
        $locations = array();
    }
    $locations[ $location ] = (int) $menu_id;
    set_theme_mod( 'nav_menu_locations', $locations );
}

/**
 * Eseguito all'attivazione del tema o del plugin: seeding one-shot,
 * guardato dal flag matter_seed_done per non girare ad ogni richiesta.
 */
function matter_maybe_seed() {
    if ( get_option( 'matter_seed_done' ) ) {
        return;
    }
    matter_seed_content( false );
    update_option( 'matter_seed_done', 1 );
}
