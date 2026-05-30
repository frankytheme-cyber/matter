<?php
/**
 * Render dinamico del blocco lounge-senses (carosello .lng-senses-slider).
 *
 * Frecce e carosello agganciati da main.js tramite #carousel-lounge-senses +
 * .lounge-senses-prev / .lounge-senses-next.
 *
 * @var array    $attributes
 * @var string   $content
 * @var WP_Block $block
 */

if ( ! defined( 'ABSPATH' ) ) exit;

$mof_senses = array();
for ( $i = 1; $i <= 6; $i++ ) {
    if ( '' === trim( (string) ( $attributes[ "sense{$i}-title" ] ?? '' ) ) ) {
        continue;
    }
    $mof_senses[] = array(
        'title' => $attributes[ "sense{$i}-title" ],
        'desc'  => $attributes[ "sense{$i}-desc" ] ?? '',
    );
}
?>
<section <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => 'section' ) ) ); ?>>
        <div class="section-head" data-reveal="">
          <p class="eyebrow"><?php echo wp_kses_post( $attributes['eyebrow'] ?? 'I dettagli' ); ?></p>
          <h2 class="section-title"><?php echo wp_kses_post( $attributes['title'] ?? '' ); ?></h2>
        </div>

        <div class="spazi-tools">
          <button class="icon-btn lounge-senses-prev" type="button" aria-label="Scorri indietro dettagli lounge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <button class="icon-btn lounge-senses-next" type="button" aria-label="Scorri avanti dettagli lounge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>

        <div class="lng-senses-overflow" data-reveal="">
          <div class="lng-senses-slider" id="carousel-lounge-senses">
            <?php foreach ( $mof_senses as $mof_s ) : ?>
            <article class="lng-sense">
              <div>
                <h3 class="lng-sense__title"><?php echo wp_kses_post( $mof_s['title'] ); ?></h3>
                <p class="lng-sense__desc"><?php echo wp_kses_post( $mof_s['desc'] ); ?></p>
              </div>
            </article>
            <?php endforeach; ?>
          </div>
        </div>
      </section>
