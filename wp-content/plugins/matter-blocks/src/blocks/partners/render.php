<?php
/**
 * Render dinamico del blocco partners.
 *
 * @var array    $attributes
 * @var string   $content
 * @var WP_Block $block
 */

if ( ! defined( 'ABSPATH' ) ) exit;
?>
<section <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => 'section section--tint' ) ) ); ?>>
          <header class="section-head" data-reveal="">
            <p class="eyebrow"><?php echo wp_kses_post( $attributes['eyebrow'] ?? 'I nostri partner' ); ?></p>
            <h2 class="section-title"><?php echo wp_kses_post( $attributes['title'] ?? 'Una rete di professionisti per il tuo benessere' ); ?></h2>
            <p class="section-lead"><?php echo wp_kses_post( $attributes['lead'] ?? 'Collaboriamo con specialisti esterni che integrano il lavoro in
              sala. Quando serve un parere fisioterapico o nutrizionale, sai a
              chi rivolgerti.' ); ?></p>
          </header>
          <div class="pro-grid" data-reveal="">
            <a class="pro-card" href="/servizi/#professionisti-esterni" data-reveal="" data-reveal-delay="0">
              <p class="pro-card__tag"><?php echo wp_kses_post( $attributes['card1-tag'] ?? 'Fisioterapista' ); ?></p>
              <div class="pro-card__media">
                <img src="<?php echo esc_url( $attributes['card1-img']['url'] ?? 'https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1400' ); ?>" alt="<?php echo esc_attr( $attributes['card1-img']['alt'] ?? 'Dott. Marco Bianchi, fisioterapista partner' ); ?>" loading="lazy">
                <h3 class="pro-card__name"><?php echo wp_kses_post( $attributes['card1-name'] ?? 'Dott. Marco Bianchi' ); ?></h3>
                <span class="card-arrow" aria-hidden="true"><span class="material-symbols-rounded">arrow_outward</span></span>
              </div>
            </a>
            <a class="pro-card" href="/servizi/#professionisti-esterni" data-reveal="" data-reveal-delay="150">
              <p class="pro-card__tag"><?php echo wp_kses_post( $attributes['card2-tag'] ?? 'Dietologo / Nutrizionista' ); ?></p>
              <div class="pro-card__media">
                <img src="<?php echo esc_url( $attributes['card2-img']['url'] ?? 'https://images.pexels.com/photos/8844393/pexels-photo-8844393.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1400' ); ?>" alt="<?php echo esc_attr( $attributes['card2-img']['alt'] ?? 'Dott.ssa Laura Rossi, dietologa nutrizionista partner' ); ?>" loading="lazy">
                <h3 class="pro-card__name"><?php echo wp_kses_post( $attributes['card2-name'] ?? 'Dott.ssa Laura Rossi' ); ?></h3>
                <span class="card-arrow" aria-hidden="true"><span class="material-symbols-rounded">arrow_outward</span></span>
              </div>
            </a>
          </div>
        </section>
