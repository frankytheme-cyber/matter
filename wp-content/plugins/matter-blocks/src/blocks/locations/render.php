<?php
/**
 * Render dinamico del blocco locations.
 *
 * @var array    $attributes
 * @var string   $content
 * @var WP_Block $block
 */

if ( ! defined( 'ABSPATH' ) ) exit;

// Variante sezione: "dark" (default, come in home) o "tint".
$mof_variant = ( 'tint' === ( $attributes['section-variant'] ?? 'dark' ) ) ? 'section--tint' : 'section--dark';
// L'header si mostra solo se è valorizzato il titolo (le pagine "elenco sedi"
// usano la sola griglia, senza intestazione).
$mof_has_head = '' !== trim( (string) ( $attributes['title'] ?? '' ) );
$mof_card1_url = $attributes['card1-url'] ?? '/sedi/pescantina/';
$mof_card2_url = $attributes['card2-url'] ?? '/sedi/bovolone/';
?>
<section <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => 'section ' . $mof_variant ) ) ); ?>>
          <?php if ( $mof_has_head ) : ?>
          <header class="section-head" data-reveal="">
            <p class="eyebrow"><?php echo wp_kses_post( $attributes['eyebrow'] ?? 'Le sedi' ); ?></p>
            <h2 class="section-title"><?php echo wp_kses_post( $attributes['title'] ); ?></h2>
            <?php if ( '' !== trim( (string) ( $attributes['lead'] ?? '' ) ) ) : ?>
            <p class="section-lead"><?php echo wp_kses_post( $attributes['lead'] ); ?></p>
            <?php endif; ?>
          </header>
          <?php endif; ?>
          <div class="loc-grid" data-reveal="">
            <a class="loc-card" href="<?php echo esc_url( $mof_card1_url ); ?>" data-reveal="" data-reveal-delay="0">
              <p class="loc-card__tag"><?php echo wp_kses_post( $attributes['card1-tag'] ?? 'Verona' ); ?></p>
              <div class="loc-card__media">
                <img src="<?php echo esc_url( $attributes['card1-img']['url'] ?? 'https://images.pexels.com/photos/28080/pexels-photo.jpg?auto=compress&amp;cs=tinysrgb&amp;w=1400' ); ?>" alt="<?php echo esc_attr( $attributes['card1-img']['alt'] ?? 'Settimo di Pescantina' ); ?>" loading="lazy">
                <h3 class="loc-card__name"><?php echo wp_kses_post( $attributes['card1-name'] ?? 'Settimo di Pescantina' ); ?></h3>
                <span class="card-arrow" aria-hidden="true"><span class="material-symbols-rounded">arrow_outward</span></span>
              </div>
            </a>
            <a class="loc-card" href="<?php echo esc_url( $mof_card2_url ); ?>" data-reveal="" data-reveal-delay="150">
              <p class="loc-card__tag"><?php echo wp_kses_post( $attributes['card2-tag'] ?? 'Verona' ); ?></p>
              <div class="loc-card__media">
                <img src="<?php echo esc_url( $attributes['card2-img']['url'] ?? 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1400' ); ?>" alt="<?php echo esc_attr( $attributes['card2-img']['alt'] ?? 'Bovolone' ); ?>" loading="lazy">
                <h3 class="loc-card__name"><?php echo wp_kses_post( $attributes['card2-name'] ?? 'Bovolone' ); ?></h3>
                <span class="card-arrow" aria-hidden="true"><span class="material-symbols-rounded">arrow_outward</span></span>
              </div>
            </a>
          </div>
        </section>
