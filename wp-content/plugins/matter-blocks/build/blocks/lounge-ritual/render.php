<?php
/**
 * Render dinamico del blocco lounge-ritual (slider pinnato .lng-rite).
 *
 * Struttura e attributi data-* allineati a main.js (data-rite / data-slide /
 * data-rite-count / data-rite-fill / data-rite-dots / data-dot).
 *
 * @var array    $attributes
 * @var string   $content
 * @var WP_Block $block
 */

if ( ! defined( 'ABSPATH' ) ) exit;

$mof_slides = array();
for ( $i = 1; $i <= 5; $i++ ) {
    if ( '' === trim( (string) ( $attributes[ "slide{$i}-title" ] ?? '' ) ) ) {
        continue;
    }
    $mof_slides[] = array(
        'img'    => $attributes[ "slide{$i}-img" ] ?? array(),
        'num'    => $attributes[ "slide{$i}-num" ] ?? '',
        'kicker' => $attributes[ "slide{$i}-kicker" ] ?? '',
        'title'  => $attributes[ "slide{$i}-title" ] ?? '',
        'desc'   => $attributes[ "slide{$i}-desc" ] ?? '',
    );
}
$mof_count = count( $mof_slides );
?>
<section <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => 'lng-rite' ) ) ); ?> aria-label="Il rituale Matter Lounge">
        <div class="lng-rite__pin" data-rite>
          <div class="lng-rite__viewport">
            <div class="lng-rite__track" data-rite-track>
              <?php foreach ( $mof_slides as $mof_idx => $mof_s ) : ?>
              <article class="lng-slide<?php echo ( 0 === $mof_idx ) ? ' is-active' : ''; ?>" data-slide>
                <div class="lng-slide__media"><img src="<?php echo esc_url( $mof_s['img']['url'] ?? '' ); ?>" alt="<?php echo esc_attr( $mof_s['img']['alt'] ?? '' ); ?>" loading="lazy"></div>
                <div class="lng-slide__inner">
                  <div class="lng-slide__copy">
                    <p class="lng-slide__num"><?php echo wp_kses_post( $mof_s['num'] ); ?></p>
                    <p class="lng-slide__kicker"><?php echo wp_kses_post( $mof_s['kicker'] ); ?></p>
                    <h3 class="lng-slide__title"><?php echo wp_kses_post( $mof_s['title'] ); ?></h3>
                    <p class="lng-slide__desc"><?php echo wp_kses_post( $mof_s['desc'] ); ?></p>
                  </div>
                  <div class="lng-slide__decor" aria-hidden="true"></div>
                </div>
              </article>
              <?php endforeach; ?>
            </div>

            <div class="lng-rite__progress" aria-hidden="true">
              <span class="lng-rite__count" data-rite-count>01 — <?php echo esc_html( sprintf( '%02d', max( 1, $mof_count ) ) ); ?></span>
              <div class="lng-rite__bar"><div class="lng-rite__bar-fill" data-rite-fill></div></div>
              <span class="lng-rite__hint">scorri</span>
              <div class="lng-rite__dots" data-rite-dots>
                <?php for ( $mof_d = 0; $mof_d < $mof_count; $mof_d++ ) : ?>
                <button type="button" class="lng-rite__dot<?php echo ( 0 === $mof_d ) ? ' is-active' : ''; ?>" data-dot="<?php echo esc_attr( $mof_d ); ?>" aria-label="Slide <?php echo esc_attr( $mof_d + 1 ); ?>"></button>
                <?php endfor; ?>
              </div>
            </div>
            <span class="lng-rite__swipe" aria-hidden="true">scorri</span>
          </div>
        </div>
      </section>
