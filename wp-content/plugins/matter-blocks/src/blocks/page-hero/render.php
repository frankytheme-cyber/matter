<?php
/**
 * Render dinamico del blocco page-hero (hero secondario di pagina interna).
 *
 * @var array    $attributes
 * @var string   $content
 * @var WP_Block $block
 */

if ( ! defined( 'ABSPATH' ) ) exit;
?>
<section <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => 'page-hero-secondary' ) ) ); ?> aria-label="Introduzione">
        <div class="page-hero-secondary__shell">
          <div class="page-hero-secondary__grid">
            <div class="page-hero-secondary__copy">
              <p class="page-hero-secondary__eyebrow"><?php echo wp_kses_post( $attributes['eyebrow'] ?? 'Sezione' ); ?></p>
              <h1 class="page-hero-secondary__title"><?php echo wp_kses_post( $attributes['title'] ?? 'Titolo della pagina' ); ?></h1>
              <p class="page-hero-secondary__lead"><?php echo wp_kses_post( $attributes['lead'] ?? 'Breve testo introduttivo che presenta la pagina.' ); ?></p>
            </div>
            <div class="page-hero-secondary__collage">
              <img src="<?php echo esc_url( $attributes['image']['url'] ?? 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80' ); ?>" alt="<?php echo esc_attr( $attributes['image']['alt'] ?? '' ); ?>" loading="eager" fetchpriority="high">
            </div>
          </div>
        </div>
      </section>
