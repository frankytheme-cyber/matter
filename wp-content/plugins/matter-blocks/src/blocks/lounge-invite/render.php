<?php
/**
 * Render dinamico del blocco lounge-invite (CTA finale .section--dark Lounge).
 *
 * @var array    $attributes
 * @var string   $content
 * @var WP_Block $block
 */

if ( ! defined( 'ABSPATH' ) ) exit;

$mof_cta1 = $attributes['cta1'] ?? array();
$mof_cta2 = $attributes['cta2'] ?? array();
?>
<section <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => 'section section--dark' ) ) ); ?>>
        <div class="section-head" data-reveal="">
          <p class="eyebrow"><?php echo wp_kses_post( $attributes['eyebrow'] ?? 'Su invito' ); ?></p>
          <h2 class="section-title"><?php echo wp_kses_post( $attributes['title'] ?? '' ); ?></h2>
          <?php if ( '' !== trim( (string) ( $attributes['lead'] ?? '' ) ) ) : ?>
          <p class="section-lead"><?php echo wp_kses_post( $attributes['lead'] ); ?></p>
          <?php endif; ?>
        </div>
        <div class="lng-cta-actions" data-reveal="">
          <?php if ( ! empty( $mof_cta1['url'] ) ) : ?>
          <a class="btn-pill btn-pill--light" href="<?php echo esc_url( $mof_cta1['url'] ); ?>"<?php echo ( '_blank' === ( $mof_cta1['target'] ?? '' ) ) ? ' target="_blank" rel="noopener"' : ''; ?>><?php echo esc_html( $mof_cta1['label'] ?? '' ); ?></a>
          <?php endif; ?>
          <?php if ( ! empty( $mof_cta2['url'] ) ) : ?>
          <a class="btn-pill btn-pill--light" href="<?php echo esc_url( $mof_cta2['url'] ); ?>"<?php echo ( '_blank' === ( $mof_cta2['target'] ?? '' ) ) ? ' target="_blank" rel="noopener"' : ''; ?>><?php echo esc_html( $mof_cta2['label'] ?? '' ); ?></a>
          <?php endif; ?>
        </div>
      </section>
