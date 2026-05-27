<?php
/**
 * Render dinamico del blocco services.
 *
 * @var array    $attributes
 * @var string   $content
 * @var WP_Block $block
 */

if ( ! defined( 'ABSPATH' ) ) exit;
?>
<section <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => 'section section--tint' ) ) ); ?>>
          <header class="section-head" data-reveal="">
            <p class="eyebrow"><?php echo wp_kses_post( $attributes['eyebrow'] ?? 'Cosa offriamo' ); ?></p>
            <h2 class="section-title"><?php echo wp_kses_post( $attributes['title'] ?? 'Le nostre proposte di allenamento' ); ?></h2>
            <p class="section-lead"><?php echo wp_kses_post( $attributes['lead'] ?? 'Lavoro tecnico individuale, percorsi specializzati e check-in
              periodici per misurare i progressi e correggere la rotta quando
              serve.' ); ?></p>
          </header>
          <div class="services-grid services-grid--duo">
            <article class="service-card" id="personal" data-reveal="" data-reveal-delay="0">
              <div class="service-card__img">
                <img src="<?php echo esc_url( $attributes['card1-img']['url'] ?? 'https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200' ); ?>" alt="<?php echo esc_attr( $attributes['card1-img']['alt'] ?? '' ); ?>" loading="lazy">
              </div>
              <div class="service-card__body">
                <p class="service-card__kicker"><?php echo wp_kses_post( $attributes['card1-kicker'] ?? '1:1 dedicato' ); ?></p>
                <h3 class="service-card__title"><?php echo wp_kses_post( $attributes['card1-title'] ?? 'Personal Training' ); ?></h3>
                <span class="service-card__divider" aria-hidden="true"></span>
                <p class="service-card__desc"><?php echo wp_kses_post( $attributes['card1-desc'] ?? 'Sessioni individuali con un trainer dedicato. Valutazione
                  iniziale, programma periodizzato e aggiornamenti ogni quattro
                  o sei settimane.' ); ?></p>
                <a class="btn-pill btn-pill--dark service-card__cta" href="<?php echo esc_url( $attributes['card1-cta']['url'] ?? '/servizi/personal-training/' ); ?>"><?php echo esc_html( $attributes['card1-cta']['label'] ?? 'Vedi Personal Training' ); ?></a>
              </div>
            </article>
            <article class="service-card" data-reveal="" data-reveal-delay="120">
              <div class="service-card__img">
                <img src="<?php echo esc_url( $attributes['card2-img']['url'] ?? 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200' ); ?>" alt="<?php echo esc_attr( $attributes['card2-img']['alt'] ?? '' ); ?>" loading="lazy">
              </div>
              <div class="service-card__body">
                <p class="service-card__kicker"><?php echo wp_kses_post( $attributes['card2-kicker'] ?? 'Partner esterni' ); ?></p>
                <h3 class="service-card__title"><?php echo wp_kses_post( $attributes['card2-title'] ?? 'Rete di professionisti' ); ?></h3>
                <span class="service-card__divider" aria-hidden="true"></span>
                <p class="service-card__desc"><?php echo wp_kses_post( $attributes['card2-desc'] ?? 'Collaboriamo con fisioterapisti e nutrizionisti esterni che
                  completano il lavoro in sala con recupero, prevenzione e
                  consulenza alimentare.' ); ?></p>
                <a class="btn-pill btn-pill--dark service-card__cta" href="<?php echo esc_url( $attributes['card2-cta']['url'] ?? '/servizi/' ); ?>"><?php echo esc_html( $attributes['card2-cta']['label'] ?? 'Tutti i servizi' ); ?></a>
              </div>
            </article>
          </div>
        </section>
