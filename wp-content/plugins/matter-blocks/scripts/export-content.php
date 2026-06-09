<?php
/**
 * Usa-e-getta: congela lo stato attuale (pagine + menu) nei file seed/ del plugin,
 * così il seeder può ricostruirli all'attivazione del tema su un'installazione pulita.
 *
 *   wp eval-file wp-content/plugins/matter-blocks/scripts/export-content.php
 *
 * Produce:
 *   seed/pages.php           manifest pagine (array PHP)
 *   seed/menu.php            struttura menu "Principale" (array PHP)
 *   seed/content/<slug>.html post_content tokenizzato ({{HOME}} al posto dell'URL del sito)
 *
 * Idempotente: rigenera i file ad ogni run.
 */

if ( ! defined( 'WP_CLI' ) || ! WP_CLI ) {
    echo "Eseguire via wp eval-file.\n";
    return;
}

$seed_dir    = dirname( __DIR__ ) . '/seed';
$content_dir = $seed_dir . '/content';
if ( ! is_dir( $content_dir ) ) {
    mkdir( $content_dir, 0755, true );
}

$home  = untrailingslashit( home_url() ); // es. http://localhost:8888/matter
$front = (int) get_option( 'page_on_front' );

// Slug delle pagine da esportare, nell'ordine logico. "Pagina di esempio" esclusa.
$slugs = array(
    'home',
    'chi-siamo',
    'servizi',
    'personal-training',
    'percorsi-specializzati',
    'sedi',
    'pescantina',
    'bovolone',
    'contatti',
    'matter-lounge',
    'privacy-policy',
    'cookie-policy',
    'self-guarding',
);

$manifest = array();

foreach ( $slugs as $slug ) {
    // get_page_by_path richiede il path completo per le figlie (sedi/pescantina).
    $page = get_page_by_path( $slug );
    if ( ! $page ) {
        // figlia: prova a cercarla per slug ignorando il parent
        $found = get_posts( array(
            'post_type'      => 'page',
            'name'           => $slug,
            'posts_per_page' => 1,
            'post_status'    => 'any',
        ) );
        $page = $found ? $found[0] : null;
    }
    if ( ! $page ) {
        WP_CLI::warning( "Pagina non trovata: {$slug}" );
        continue;
    }

    $parent_slug = '';
    if ( $page->post_parent ) {
        $parent = get_post( $page->post_parent );
        if ( $parent ) {
            $parent_slug = $parent->post_name;
        }
    }

    $template = (string) get_post_meta( $page->ID, '_wp_page_template', true );
    if ( 'default' === $template ) {
        $template = '';
    }

    // Tokenizza gli URL assoluti per portabilità.
    $content = str_replace( $home, '{{HOME}}', $page->post_content );
    file_put_contents( $content_dir . "/{$slug}.html", $content );

    $manifest[ $slug ] = array(
        'slug'        => $page->post_name,
        'title'       => $page->post_title,
        'parent_slug' => $parent_slug,
        'template'    => $template,
        'menu_order'  => (int) $page->menu_order,
        'front_page'  => ( $page->ID === $front ),
    );

    WP_CLI::log( "export: {$slug} (id {$page->ID}, parent '{$parent_slug}', tpl '{$template}')" );
}

// --- Manifest pagine ---
$pages_php = "<?php\n"
    . "/**\n"
    . " * Manifest pagine del tema Matter of Fitness — generato da scripts/export-content.php.\n"
    . " * Consumato da includes/class-matter-seeder.php. Non modificare a mano salvo necessità.\n"
    . " */\n\n"
    . "return " . mof_var_export( $manifest ) . ";\n";
file_put_contents( $seed_dir . '/pages.php', $pages_php );

// --- Menu "Principale" ---
$menu_items = array();
$menu       = wp_get_nav_menu_object( 'Principale' );
if ( $menu ) {
    $items   = wp_get_nav_menu_items( $menu->term_id ) ?: array();
    // mappa item_id -> object_id (page) e item_id -> page_slug per risolvere i parent
    $id_to_slug = array();
    foreach ( $items as $it ) {
        if ( 'post_type' === $it->type ) {
            $p = get_post( (int) $it->object_id );
            $id_to_slug[ $it->ID ] = $p ? $p->post_name : '';
        }
    }
    foreach ( $items as $it ) {
        if ( 'post_type' !== $it->type ) {
            continue; // solo voci di tipo pagina (CTA/Lounge sono fisse nel blocco)
        }
        $p = get_post( (int) $it->object_id );
        $menu_items[] = array(
            'page_slug'        => $p ? $p->post_name : '',
            'title'            => $it->title,
            'parent_page_slug' => $it->menu_item_parent && isset( $id_to_slug[ $it->menu_item_parent ] )
                ? $id_to_slug[ $it->menu_item_parent ]
                : '',
            'order'            => (int) $it->menu_order,
        );
    }
}

$menu_php = "<?php\n"
    . "/**\n"
    . " * Struttura menu \"Principale\" (location primary) — generato da scripts/export-content.php.\n"
    . " * Voci di tipo pagina (post_type). CTA \"Inizia Ora\" e \"Lounge\" restano fisse nel blocco site-header.\n"
    . " */\n\n"
    . "return array(\n"
    . "    'name'     => 'Principale',\n"
    . "    'location' => 'primary',\n"
    . "    'items'    => " . mof_var_export( $menu_items, 1 ) . ",\n"
    . ");\n";
file_put_contents( $seed_dir . '/menu.php', $menu_php );

WP_CLI::success( count( $manifest ) . " pagine + " . count( $menu_items ) . " voci menu esportate in seed/." );

/** var_export pulito (array short syntax) per file leggibili. */
function mof_var_export( $var, $indent = 0 ) {
    $pad = str_repeat( '    ', $indent );
    if ( is_array( $var ) ) {
        $is_list = array_keys( $var ) === range( 0, count( $var ) - 1 );
        $out = "array(\n";
        foreach ( $var as $k => $v ) {
            $key = $is_list ? '' : var_export( $k, true ) . ' => ';
            $out .= $pad . '    ' . $key . mof_var_export( $v, $indent + 1 ) . ",\n";
        }
        $out .= $pad . ')';
        return $out;
    }
    return var_export( $var, true );
}
