<?php
/**
 * Render dinamico del blocco map (.sede-map: embed + pannello contatti).
 *
 * @var array    $attributes
 * @var string   $content
 * @var WP_Block $block
 */

if ( ! defined( 'ABSPATH' ) ) exit;

$mof_phone = trim( (string) ( $attributes['phone'] ?? '' ) );
$mof_tel   = preg_replace( '/[^\d+]/', '', $mof_phone );
$mof_email = trim( (string) ( $attributes['email'] ?? '' ) );
$mof_embed = $attributes['embed-url'] ?? '';
?>
<section <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => 'section' ) ) ); ?>>
        <header class="section-head" data-reveal="">
          <p class="eyebrow"><?php echo wp_kses_post( $attributes['eyebrow'] ?? 'Dove siamo' ); ?></p>
          <h2 class="section-title"><?php echo wp_kses_post( $attributes['title'] ?? 'Trovaci sulla mappa' ); ?></h2>
        </header>
        <div class="sede-map" data-reveal="">
          <?php if ( '' !== trim( (string) $mof_embed ) ) : ?>
          <div class="sede-map__embed">
            <iframe title="Google Maps — <?php echo esc_attr( $attributes['info-title'] ?? '' ); ?>" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" src="<?php echo esc_url( $mof_embed ); ?>"></iframe>
          </div>
          <?php endif; ?>
          <div class="sede-map__info">
            <p class="sede-map__kicker"><?php echo wp_kses_post( $attributes['info-kicker'] ?? 'Sede' ); ?></p>
            <h3 class="sede-map__title"><?php echo wp_kses_post( $attributes['info-title'] ?? '' ); ?></h3>
            <?php if ( '' !== trim( (string) ( $attributes['address'] ?? '' ) ) ) : ?>
            <div class="contact-detail">
              <span class="material-symbols-rounded u-icon-teal">location_on</span>
              <span><?php echo wp_kses_post( $attributes['address'] ); ?></span>
            </div>
            <?php endif; ?>
            <?php if ( '' !== $mof_phone ) : ?>
            <div class="contact-detail">
              <span class="material-symbols-rounded u-icon-teal">call</span>
              <a href="tel:<?php echo esc_attr( $mof_tel ); ?>"><?php echo esc_html( $mof_phone ); ?></a>
            </div>
            <?php endif; ?>
            <?php if ( '' !== $mof_email ) : ?>
            <div class="contact-detail">
              <span class="material-symbols-rounded u-icon-teal">mail</span>
              <a href="mailto:<?php echo esc_attr( $mof_email ); ?>"><?php echo esc_html( $mof_email ); ?></a>
            </div>
            <?php endif; ?>
            <?php if ( '' !== trim( (string) ( $attributes['schedule'] ?? '' ) ) ) : ?>
            <div class="contact-detail contact-detail--schedule">
              <span class="material-symbols-rounded u-icon-teal">schedule</span>
              <span class="contact-detail__schedule">
                <?php foreach ( preg_split( '/\R+/', (string) $attributes['schedule'] ) as $mof_row ) :
                    $mof_row = trim( $mof_row );
                    if ( '' === $mof_row ) {
                        continue;
                    }
                    $mof_parts = array_map( 'trim', explode( '|', $mof_row, 2 ) ); ?>
                <span class="contact-detail__schedule-row">
                  <span class="contact-detail__schedule-day"><?php echo esc_html( $mof_parts[0] ?? '' ); ?></span>
                  <span class="contact-detail__schedule-time"><?php echo esc_html( $mof_parts[1] ?? '' ); ?></span>
                </span>
                <?php endforeach; ?>
              </span>
            </div>
            <?php endif; ?>
            <?php if ( ! empty( $attributes['maps-url'] ) ) : ?>
            <a class="btn-pill btn-pill--dark u-self-start-auto" href="<?php echo esc_url( $attributes['maps-url'] ); ?>" target="_blank" rel="noopener noreferrer"><?php echo esc_html( $attributes['maps-label'] ?? 'Apri in Google Maps' ); ?></a>
            <?php endif; ?>
          </div>
        </div>
      </section>
