<?php
/**
 * Render dinamico del blocco intro.
 *
 * @var array    $attributes
 * @var string   $content
 * @var WP_Block $block
 */

if ( ! defined( 'ABSPATH' ) ) exit;
?>
<section <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => 'display-section' ) ) ); ?>>
          <div class="marquee" aria-hidden="true" data-reveal="">
            <div class="marquee__track">
              <span class="marquee__item"><span class="strong">Allenarsi</span> <span class="muted">bene</span></span>
              <span class="marquee__sep">●</span>
              <span class="marquee__item"><span class="strong">Stare</span> <span class="muted">meglio</span></span>
              <span class="marquee__sep">●</span>
              <span class="marquee__item"><span class="strong">Sentirsi</span> <span class="muted">seguiti</span></span>
              <span class="marquee__sep">●</span>
              <span class="marquee__item"><span class="strong">Allenarsi</span> <span class="muted">bene</span></span>
              <span class="marquee__sep">●</span>
              <span class="marquee__item"><span class="strong">Stare</span> <span class="muted">meglio</span></span>
              <span class="marquee__sep">●</span>
              <span class="marquee__item"><span class="strong">Sentirsi</span> <span class="muted">seguiti</span></span>
              <span class="marquee__sep">●</span>
            </div>
          </div>

          <p class="display-body" data-reveal="" data-reveal-delay="100"><?php echo wp_kses_post( $attributes['body'] ?? 'Matter nasce da un\'idea precisa: una palestra dovrebbe essere un
            luogo dove ci si conosce per nome, dove gli ambienti sono ordinati e
            dove nessuno resta senza una risposta quando ne ha bisogno.' ); ?></p>

          <?php if ( ! empty( $attributes['cta']['url'] ) ) : ?>
          <div class="social-row" data-reveal="" data-reveal-delay="200">
            <a class="btn-pill btn-pill--dark" href="<?php echo esc_url( $attributes['cta']['url'] ); ?>"><?php echo esc_html( $attributes['cta']['label'] ?? '' ); ?></a>
          </div>
          <?php endif; ?>
        </section>
