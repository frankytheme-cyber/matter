<?php
/**
 * Render dinamico del blocco cards-carousel (carosello di service-card).
 *
 * La nav frecce è agganciata da main.js tramite #carousel-percorsi +
 * .carousel-prev / .carousel-next.
 *
 * @var array    $attributes
 * @var string   $content
 * @var WP_Block $block
 */

if ( ! defined( 'ABSPATH' ) ) exit;

$mof_cards = array();
for ( $i = 1; $i <= 4; $i++ ) {
    // Salta le card senza titolo.
    if ( isset( $attributes[ "card{$i}-title" ] ) && '' === trim( (string) $attributes[ "card{$i}-title" ] ) ) {
        continue;
    }
    $mof_cards[] = array(
        'img'    => $attributes[ "card{$i}-img" ] ?? array(),
        'kicker' => $attributes[ "card{$i}-kicker" ] ?? '',
        'title'  => $attributes[ "card{$i}-title" ] ?? '',
        'desc'   => $attributes[ "card{$i}-desc" ] ?? '',
        'cta'    => $attributes[ "card{$i}-cta" ] ?? array(),
    );
}
$mof_lead = $attributes['lead'] ?? '';
?>
<section <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => 'section' ) ) ); ?>>
        <header class="section-head" data-reveal="">
          <p class="eyebrow"><?php echo wp_kses_post( $attributes['eyebrow'] ?? 'I percorsi' ); ?></p>
          <h2 class="section-title"><?php echo wp_kses_post( $attributes['title'] ?? 'Quattro percorsi, un solo metodo' ); ?></h2>
          <?php if ( '' !== trim( (string) $mof_lead ) ) : ?>
          <p class="section-lead"><?php echo wp_kses_post( $mof_lead ); ?></p>
          <?php endif; ?>
        </header>
        <div class="spazi-tools" data-reveal="">
          <button class="icon-btn carousel-prev" type="button" aria-label="Scorri indietro">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <button class="icon-btn carousel-next" type="button" aria-label="Scorri avanti">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
        <div class="spazi-overflow" data-reveal="">
          <div class="percorsi-grid" id="carousel-percorsi">
            <?php foreach ( $mof_cards as $mof_card ) : ?>
            <article class="service-card">
              <div class="service-card__img">
                <img src="<?php echo esc_url( $mof_card['img']['url'] ?? '' ); ?>" alt="<?php echo esc_attr( $mof_card['img']['alt'] ?? '' ); ?>" loading="lazy">
              </div>
              <div class="service-card__body">
                <?php if ( '' !== trim( (string) $mof_card['kicker'] ) ) : ?>
                <p class="service-card__kicker"><?php echo wp_kses_post( $mof_card['kicker'] ); ?></p>
                <?php endif; ?>
                <h3 class="service-card__title"><?php echo wp_kses_post( $mof_card['title'] ); ?></h3>
                <?php if ( '' !== trim( (string) $mof_card['desc'] ) ) : ?>
                <p class="service-card__desc"><?php echo wp_kses_post( $mof_card['desc'] ); ?></p>
                <?php endif; ?>
                <?php if ( ! empty( $mof_card['cta']['url'] ) ) : ?>
                <a class="btn-pill btn-pill--dark service-card__cta" href="<?php echo esc_url( $mof_card['cta']['url'] ); ?>"<?php echo ( '_blank' === ( $mof_card['cta']['target'] ?? '' ) ) ? ' target="_blank" rel="noopener"' : ''; ?>><?php echo esc_html( $mof_card['cta']['label'] ?? '' ); ?></a>
                <?php endif; ?>
              </div>
            </article>
            <?php endforeach; ?>
          </div>
        </div>
      </section>
