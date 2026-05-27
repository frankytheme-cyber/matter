<?php
/**
 * Matter of Fitness theme functions
 *
 * Generato da html-to-theme. Il tema è principalmente dichiarativo (theme.json +
 * templates HTML). Questo file aggiunge solo il minimo indispensabile:
 *
 * - admin_notice se il plugin companion "matter-blocks" non è attivo
 * - enqueue opzionale di uno stylesheet globale
 *
 * @package matter
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Notifica l'admin se il plugin companion dei blocchi non è attivo.
 * Senza di esso i blocchi custom referenziati nei template non verranno renderizzati.
 */
add_action(
	'admin_notices',
	function () {
		if ( ! function_exists( 'is_plugin_active' ) ) {
			include_once ABSPATH . 'wp-admin/includes/plugin.php';
		}
		$plugin_slug = 'matter-blocks';
		$active      = false;
		foreach ( (array) get_option( 'active_plugins', array() ) as $p ) {
			if ( strpos( $p, $plugin_slug . '/' ) === 0 ) {
				$active = true;
				break;
			}
		}
		if ( ! $active ) {
			printf(
				'<div class="notice notice-warning"><p>%s</p></div>',
				esc_html(
					sprintf(
						/* translators: %s: plugin slug */
						__( 'Il plugin companion "%s" non è attivo. I blocchi custom del tema Matter of Fitness non verranno renderizzati finché non lo attivi.', 'matter' ),
						$plugin_slug
					)
				)
			);
		}
	}
);

/**
 * Carica il textdomain del tema e registra il CSS sorgente per l'editor.
 */
add_action(
	'after_setup_theme',
	function () {
		load_theme_textdomain( 'matter', get_template_directory() . '/languages' );

		// Necessario affinché add_editor_style() venga caricato nell'editor a blocchi.
		add_theme_support( 'editor-styles' );

		// CSS sorgente + web fonts (Google Sans + Material Symbols) nell'editor,
		// così i blocchi nel Site Editor appaiono stilizzati come in frontend.
		add_editor_style(
			array(
				'assets/css/source.css',
				// Override solo-editor: mostra gli elementi [data-reveal] (main.js non gira nell'editor).
				'assets/css/editor.css',
				'https://fonts.googleapis.com/css2?family=Google+Sans+Code:ital,wght,MONO@0,300..800,1;1,300..800,1&family=Google+Sans+Flex:opsz,wght@6..144,1..1000&display=swap',
				'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,400,0,0',
			)
		);
	}
);

/**
 * Enqueue del CSS sorgente del tema (copiato dal mockup HTML) in frontend.
 * I design tokens (:root{--*}) vivono in theme.json; qui carichiamo il resto
 * delle regole: reset, componenti BEM, layout, @media dark/variation.
 */
add_action(
	'wp_enqueue_scripts',
	function () {
		$handle = 'matter-source';
		$rel    = 'assets/css/source.css';
		$abs    = get_theme_file_path( $rel );
		if ( file_exists( $abs ) ) {
			wp_enqueue_style(
				$handle,
				get_theme_file_uri( $rel ),
				array(),
				filemtime( $abs )
			);
		}

		// Web fonts usati dal design (Google Sans + Material Symbols).
		wp_enqueue_style(
			'matter-fonts',
			'https://fonts.googleapis.com/css2?family=Google+Sans+Code:ital,wght,MONO@0,300..800,1;1,300..800,1&family=Google+Sans+Flex:opsz,wght@6..144,1..1000&display=swap',
			array(),
			null
		);
		wp_enqueue_style(
			'matter-material-symbols',
			'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,400,0,0',
			array(),
			null
		);

		// Interazioni del tema: nav dropdown, menu mobile, caroselli, accordion,
		// lightbox galleria, animazioni reveal. Caricato in footer con defer.
		$js_rel = 'assets/js/main.js';
		$js_abs = get_theme_file_path( $js_rel );
		if ( file_exists( $js_abs ) ) {
			wp_enqueue_script(
				'matter-main',
				get_theme_file_uri( $js_rel ),
				array(),
				filemtime( $js_abs ),
				array(
					'strategy'  => 'defer',
					'in_footer' => true,
				)
			);
		}
	}
);

/**
 * Preconnect agli host dei font per ridurre la latenza del primo render.
 */
add_filter(
	'wp_resource_hints',
	function ( $hints, $relation_type ) {
		if ( 'preconnect' === $relation_type ) {
			$hints[] = 'https://fonts.googleapis.com';
			$hints[] = array(
				'href'        => 'https://fonts.gstatic.com',
				'crossorigin' => 'anonymous',
			);
		}
		return $hints;
	},
	10,
	2
);
