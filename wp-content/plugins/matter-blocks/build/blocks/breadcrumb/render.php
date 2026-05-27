<?php
/**
 * Render dinamico del blocco breadcrumb.
 *
 * @var array    $attributes
 * @var string   $content
 * @var WP_Block $block
 */

if ( ! defined( 'ABSPATH' ) ) exit;
?>
<nav <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => 'breadcrumb-wrap' ) ) ); ?> aria-label="Percorso di navigazione">
      <ol class="breadcrumb">
        <li class="breadcrumb__item">
          <a class="breadcrumb__link" href="<?php echo esc_url( $attributes['home-url'] ?? '/' ); ?>">Home</a>
        </li>
        <li class="breadcrumb__item breadcrumb__item--current" aria-current="page"><?php echo esc_html( $attributes['current'] ?? 'Pagina corrente' ); ?></li>
      </ol>
    </nav>
