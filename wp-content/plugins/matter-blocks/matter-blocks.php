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
