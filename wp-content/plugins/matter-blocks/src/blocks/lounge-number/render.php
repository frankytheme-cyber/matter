<?php
/**
 * Render dinamico del blocco lounge-number (.lng-twenty, conteggio animato).
 *
 * @var array    $attributes
 * @var string   $content
 * @var WP_Block $block
 */

if ( ! defined( 'ABSPATH' ) ) exit;

$mof_num = trim( (string) ( $attributes['number'] ?? '20' ) );
?>
<section <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => 'section' ) ) ); ?>>
        <div class="lng-twenty">
          <p class="eyebrow lng-reveal"><?php echo wp_kses_post( $attributes['top-label'] ?? '' ); ?></p>
          <p class="lng-twenty__num lng-reveal" data-count-to="<?php echo esc_attr( $mof_num ); ?>"><?php echo esc_html( $mof_num ); ?></p>
          <p class="eyebrow lng-reveal"><?php echo wp_kses_post( $attributes['bottom-label'] ?? '' ); ?></p>
          <p class="lng-twenty__sub lng-twenty__sub--spaced lng-reveal"><?php echo wp_kses_post( $attributes['sub'] ?? '' ); ?></p>
        </div>
      </section>
