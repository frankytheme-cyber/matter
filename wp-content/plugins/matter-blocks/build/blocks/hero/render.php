<?php
/**
 * Render dinamico del blocco hero.
 *
 * @var array    $attributes
 * @var string   $content
 * @var WP_Block $block
 */

if ( ! defined( 'ABSPATH' ) ) exit;
?>
<section <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => 'hero hero--overlay' ) ) ); ?>>
          <div class="hero__card" id="hero-card">
            <div class="hero__copy" id="hero-copy">
              <div class="hero__text-container">
                <h1 class="hero__title"><?php echo wp_kses_post( $attributes['title'] ?? 'Una palestra dove si viene per allenarsi e stare bene.' ); ?></h1>
                <p class="hero__lead"><?php echo wp_kses_post( $attributes['lead'] ?? 'A <a class="u-inline-link" href="/sedi/pescantina/">Settimo di Pescantina</a> e a
                  <a class="u-inline-link" href="/sedi/bovolone/">Bovolone</a>, in provincia di Verona.
                  Ambienti curati, attrezzature professionali e uno staff che
                  conosce ogni socio per nome. Scopri i <a class="u-inline-link" href="/servizi/">servizi in palestra</a>.' ); ?></p>
              </div>
              <div class="hero__actions">
                <a class="btn-pill btn-pill--light" href="<?php echo esc_url( $attributes['cta-primary']['url'] ?? '/sedi/pescantina/' ); ?>"><?php echo esc_html( $attributes['cta-primary']['label'] ?? 'Scegli la Sede' ); ?></a>
                <a class="btn-pill btn-pill--outline" href="<?php echo esc_url( $attributes['cta-secondary']['url'] ?? '/contatti/' ); ?>"><?php echo esc_html( $attributes['cta-secondary']['label'] ?? 'Contattaci' ); ?></a>
              </div>
            </div>
            <div class="hero__visual" id="hero-visual">
              <img src="<?php echo esc_url( $attributes['image']['url'] ?? 'https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1800' ); ?>" alt="<?php echo esc_attr( $attributes['image']['alt'] ?? 'Sala training Matter of Fitness con macchinari professionali e ambiente luminoso' ); ?>" loading="eager" fetchpriority="high">
            </div>
          </div>
        </section>
