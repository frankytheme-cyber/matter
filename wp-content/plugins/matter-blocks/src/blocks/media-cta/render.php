<?php
/**
 * Render dinamico del blocco media-cta (banner .custom-cta con immagine + 1 bottone).
 *
 * @var array    $attributes
 * @var string   $content
 * @var WP_Block $block
 */

if ( ! defined( 'ABSPATH' ) ) exit;

$mof_img = $attributes['image'] ?? array();
$mof_cta = $attributes['cta'] ?? array();
?>
<section <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => 'section' ) ) ); ?>>
        <div class="custom-cta" data-reveal="">
          <div class="custom-cta__media">
            <img src="<?php echo esc_url( $mof_img['url'] ?? '' ); ?>" alt="<?php echo esc_attr( $mof_img['alt'] ?? '' ); ?>" loading="lazy">
          </div>
          <div class="custom-cta__body">
            <?php if ( '' !== trim( (string) ( $attributes['kicker'] ?? '' ) ) ) : ?>
            <p class="custom-cta__kicker"><?php echo wp_kses_post( $attributes['kicker'] ); ?></p>
            <?php endif; ?>
            <h2 class="custom-cta__title"><?php echo wp_kses_post( $attributes['title'] ?? '' ); ?></h2>
            <?php if ( '' !== trim( (string) ( $attributes['desc'] ?? '' ) ) ) : ?>
            <p class="custom-cta__desc"><?php echo wp_kses_post( $attributes['desc'] ); ?></p>
            <?php endif; ?>
            <?php if ( ! empty( $mof_cta['url'] ) ) : ?>
            <a class="btn-pill btn-pill--dark custom-cta__btn" href="<?php echo esc_url( $mof_cta['url'] ); ?>"<?php echo ( '_blank' === ( $mof_cta['target'] ?? '' ) ) ? ' target="_blank" rel="noopener"' : ''; ?>><?php echo esc_html( $mof_cta['label'] ?? '' ); ?></a>
            <?php endif; ?>
          </div>
        </div>
      </section>
