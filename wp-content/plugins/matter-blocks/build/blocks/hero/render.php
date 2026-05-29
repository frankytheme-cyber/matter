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
              <?php
              $mof_p_url = $attributes['cta-primary']['url'] ?? '/sedi/pescantina/';
              $mof_s_url = $attributes['cta-secondary']['url'] ?? '/contatti/';
              if ( ! empty( $mof_p_url ) || ! empty( $mof_s_url ) ) :
              ?>
              <div class="hero__actions">
                <?php if ( ! empty( $mof_p_url ) ) : ?>
                <a class="btn-pill btn-pill--light" href="<?php echo esc_url( $mof_p_url ); ?>"><?php echo esc_html( $attributes['cta-primary']['label'] ?? 'Scegli la Sede' ); ?></a>
                <?php endif; ?>
                <?php if ( ! empty( $mof_s_url ) ) : ?>
                <a class="btn-pill btn-pill--outline" href="<?php echo esc_url( $mof_s_url ); ?>"><?php echo esc_html( $attributes['cta-secondary']['label'] ?? 'Contattaci' ); ?></a>
                <?php endif; ?>
              </div>
              <?php endif; ?>
            </div>
            <div class="hero__visual" id="hero-visual">
              <img src="<?php echo esc_url( $attributes['image']['url'] ?? 'https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1800' ); ?>" alt="<?php echo esc_attr( $attributes['image']['alt'] ?? 'Sala training Matter of Fitness con macchinari professionali e ambiente luminoso' ); ?>" loading="eager" fetchpriority="high">
            </div>
          </div>
        </section>
