<?php
/**
 * Plugin Name: Matter Blocks
 * Description: Blocchi Gutenberg generati con html-to-blocks.
 * Version: 0.1.0
 * Requires at least: 6.9
 * Requires PHP: 7.2
 * Text Domain: matter-blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Seeder dei contenuti del tema (pagine, menu, front page, form CF7).
 * Carica la libreria e aggancia i trigger di seeding "di fabbrica".
 */
require_once __DIR__ . '/includes/class-matter-seeder.php';

// Seeding one-shot quando si attiva il tema o (questo) plugin.
add_action( 'after_switch_theme', 'matter_maybe_seed' );
register_activation_hook( __FILE__, 'matter_maybe_seed' );

// Comando WP-CLI: `wp matter seed [--force]` per ri-eseguire/forzare il seeding.
if ( defined( 'WP_CLI' ) && WP_CLI ) {
    WP_CLI::add_command( 'matter seed', function ( $args, $assoc_args ) {
        $force = isset( $assoc_args['force'] );
        matter_seed_content( $force );
        update_option( 'matter_seed_done', 1 );
    } );
}

/**
 * Registra ogni blocco trovato in build/blocks/*.
 */
add_action( 'init', function () {
    $blocks_dir = __DIR__ . '/build/blocks';
    if ( ! is_dir( $blocks_dir ) ) {
        return;
    }
    foreach ( glob( $blocks_dir . '/*', GLOB_ONLYDIR ) as $block_path ) {
        if ( file_exists( $block_path . '/block.json' ) ) {
            register_block_type( $block_path );
        }
    }
} );

/**
 * Enqueue dello shared CSS (regole non BEM-scoped) sia editor sia frontend.
 */
add_action( 'enqueue_block_assets', function () {
    $shared = __DIR__ . '/build/shared.css';
    if ( file_exists( $shared ) ) {
        wp_enqueue_style(
            'matter-blocks-shared',
            plugin_dir_url( __FILE__ ) . 'build/shared.css',
            array(),
            filemtime( $shared )
        );
    }
} );

/**
 * Aggiunge una categoria custom per il block inserter.
 */
add_filter( 'block_categories_all', function ( $categories ) {
    $slug = 'matter';
    foreach ( $categories as $cat ) {
        if ( $cat['slug'] === $slug ) {
            return $categories;
        }
    }
    return array_merge(
        $categories,
        array( array(
            'slug'  => $slug,
            'title' => 'Matter of Fitness',
        ) )
    );
} );

/**
 * Registra la location di menu usata dall'header (blocco matter/site-header).
 * Registrare una location riattiva anche la schermata "Aspetto → Menu".
 */
add_action( 'after_setup_theme', function () {
    register_nav_menu( 'primary', __( 'Navigazione principale (header)', 'matter-blocks' ) );
} );

/**
 * Integrazione Contact Form 7 nel blocco matter/contact-form.
 *
 * Il blocco, quando ha l'attributo `cf7-id`, renderizza un form CF7 via
 * shortcode (vedi contact-form/render.php). Questi due filtri agiscono SOLO
 * mentre il blocco sta renderizzando il form (flag $GLOBALS['mof_cf7_in_block']):
 *  - aggiungono al <form> di CF7 le classi del tema (.contact-form--centered);
 *  - disattivano l'autop di CF7, che altrimenti inserirebbe <p>/<br> spuri nel
 *    markup BEM (.form-row/.form-group) scritto a mano nel template del form.
 */
add_filter( 'wpcf7_form_class_attr', function ( $class ) {
    if ( ! empty( $GLOBALS['mof_cf7_in_block'] ) ) {
        $class .= ' contact-form contact-form--centered';
    }
    return $class;
} );
add_filter( 'wpcf7_autop_or_not', function ( $enabled ) {
    return empty( $GLOBALS['mof_cf7_in_block'] ) ? $enabled : false;
} );

/**
 * Walker che riproduce il markup del menu della demo, senza <ul>/<li>:
 *  - desktop: voce semplice = <a>; voce con figli = .nav-item--dropdown >
 *    button.nav-item__trigger + div.nav-dropdown (gestito da main.js via classi);
 *  - mobile: voce semplice = <a>; voce con figli = <details.mobile-nav__accordion>.
 * Il container (<nav class="nav-list"> / #menu-mobile) è fornito da render.php.
 */
if ( ! class_exists( 'Matter_Nav_Walker' ) ) {
    class Matter_Nav_Walker extends Walker_Nav_Menu {
        /** @var string 'desktop'|'mobile' */
        protected $mode;
        /** @var array<int,bool> id voce => ha figli */
        protected $item_has_children = array();
        /** @var string id del pannello dropdown corrente (per aria-controls) */
        protected $panel_id = '';

        public function __construct( $mode = 'desktop' ) {
            $this->mode = ( 'mobile' === $mode ) ? 'mobile' : 'desktop';
        }

        /** Registra in modo affidabile quali voci hanno figli. */
        public function display_element( $element, &$children_elements, $max_depth, $depth, $args, &$output ) {
            if ( $element ) {
                $id = $element->{$this->db_fields['id']};
                $this->item_has_children[ $id ] = ! empty( $children_elements[ $id ] );
            }
            parent::display_element( $element, $children_elements, $max_depth, $depth, $args, $output );
        }

        public function start_lvl( &$output, $depth = 0, $args = null ) {
            if ( 'desktop' === $this->mode ) {
                $output .= '<div class="nav-dropdown" id="' . esc_attr( $this->panel_id ) . '" hidden>';
            }
            // mobile: i figli vanno direttamente dentro <details>, nessun wrapper.
        }

        public function end_lvl( &$output, $depth = 0, $args = null ) {
            if ( 'desktop' === $this->mode ) {
                $output .= '</div>';
            }
        }

        public function start_el( &$output, $item, $depth = 0, $args = null, $id = 0 ) {
            $has_children = ! empty( $this->item_has_children[ $item->ID ] );
            $url          = ! empty( $item->url ) ? $item->url : '#';
            $title        = $item->title;

            // Stato attivo: voce corrente (aria-current) o ramo che contiene
            // la pagina corrente (per evidenziare il trigger del dropdown).
            $is_current = ! empty( $item->current );
            $is_branch  = $is_current || ! empty( $item->current_item_parent ) || ! empty( $item->current_item_ancestor );

            if ( 0 === $depth && $has_children ) {
                $this->panel_id = 'nav-menu-' . (int) $item->ID . '-panel';
                $active_class   = $is_branch ? ' is-active' : '';
                if ( 'desktop' === $this->mode ) {
                    $output .= '<div class="nav-item--dropdown" data-nav-dropdown="">';
                    $output .= '<button type="button" class="nav-item__trigger' . $active_class . '"' . ( $is_branch ? ' aria-current="true"' : '' ) . ' aria-expanded="false" aria-controls="' . esc_attr( $this->panel_id ) . '" aria-haspopup="true">';
                    $output .= esc_html( $title );
                    $output .= '<span class="material-symbols-rounded nav-item__caret" aria-hidden="true">expand_more</span>';
                    $output .= '</button>';
                } else {
                    $output .= '<details class="mobile-nav__accordion' . $active_class . '"' . ( $is_branch ? ' open' : '' ) . '><summary>';
                    $output .= esc_html( $title );
                    $output .= '<span class="material-symbols-rounded nav-caret-rotate" aria-hidden="true">expand_more</span>';
                    $output .= '</summary>';
                }
            } else {
                $aria_current = $is_current ? ' aria-current="page"' : '';
                $output      .= '<a href="' . esc_url( $url ) . '"' . $aria_current . '>' . esc_html( $title ) . '</a>';
            }
        }

        public function end_el( &$output, $item, $depth = 0, $args = null ) {
            if ( 0 === $depth && ! empty( $this->item_has_children[ $item->ID ] ) ) {
                $output .= ( 'desktop' === $this->mode ) ? '</div>' : '</details>';
            }
        }
    }
}
