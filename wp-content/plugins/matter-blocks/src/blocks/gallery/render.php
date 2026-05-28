<?php
/**
 * Render dinamico del blocco gallery.
 *
 * @var array    $attributes
 * @var string   $content
 * @var WP_Block $block
 */

if ( ! defined( 'ABSPATH' ) ) exit;
?>
<section <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => 'section' ) ) ); ?>>
          <header class="section-head" data-reveal="">
            <p class="eyebrow"><?php echo wp_kses_post( $attributes['eyebrow'] ?? 'I nostri spazi' ); ?></p>
            <h2 class="section-title"><?php echo wp_kses_post( $attributes['title'] ?? 'Ambienti pensati per ogni tipo di allenamento' ); ?></h2>
            <p class="section-lead"><?php echo wp_kses_post( $attributes['lead'] ?? 'Pesi liberi, area cardio, zona funzionale e macchinari isotonici.
              Spazi puliti, ordinati e organizzati per chi si allena con costanza.' ); ?></p>
          </header>
          <div class="spazi-tools">
            <button class="icon-btn carousel-prev" type="button" aria-label="Scorri indietro">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </button>
            <button class="icon-btn carousel-next" type="button" aria-label="Scorri avanti">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </button>
          </div>
          <div class="spazi-overflow" data-reveal="" data-reveal-delay="100">
            <div class="spazi-grid" id="carousel-spazi">
              <button class="spazi-card" type="button" aria-label="Apri foto: pesi liberi">
                <img src="<?php echo esc_url( $attributes['img-1']['url'] ?? 'https://images.pexels.com/photos/949132/pexels-photo-949132.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200' ); ?>" alt="<?php echo esc_attr( $attributes['img-1']['alt'] ?? 'Area pesi liberi con bilancieri e rastrelliere' ); ?>" loading="lazy">
                <p class="spazi-card__label"><?php echo wp_kses_post( $attributes['label-1'] ?? 'Pesi liberi' ); ?></p>
                <span class="spazi-card__expand" aria-hidden="true"><span class="material-symbols-rounded">open_in_full</span></span>
              </button>
              <button class="spazi-card" type="button" aria-label="Apri foto: zona cardio">
                <img src="<?php echo esc_url( $attributes['img-2']['url'] ?? 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200' ); ?>" alt="<?php echo esc_attr( $attributes['img-2']['alt'] ?? 'Zona cardio con tapis roulant ed ellittiche' ); ?>" loading="lazy">
                <p class="spazi-card__label"><?php echo wp_kses_post( $attributes['label-2'] ?? 'Zona cardio' ); ?></p>
                <span class="spazi-card__expand" aria-hidden="true"><span class="material-symbols-rounded">open_in_full</span></span>
              </button>
              <button class="spazi-card" type="button" aria-label="Apri foto: area funzionale">
                <img src="<?php echo esc_url( $attributes['img-3']['url'] ?? 'https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200' ); ?>" alt="<?php echo esc_attr( $attributes['img-3']['alt'] ?? 'Area funzionale con kettlebell e attrezzi a corpo libero' ); ?>" loading="lazy">
                <p class="spazi-card__label"><?php echo wp_kses_post( $attributes['label-3'] ?? 'Area funzionale' ); ?></p>
                <span class="spazi-card__expand" aria-hidden="true"><span class="material-symbols-rounded">open_in_full</span></span>
              </button>
              <button class="spazi-card" type="button" aria-label="Apri foto: macchinari isotonici">
                <img src="<?php echo esc_url( $attributes['img-4']['url'] ?? 'https://images.pexels.com/photos/3757957/pexels-photo-3757957.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200' ); ?>" alt="<?php echo esc_attr( $attributes['img-4']['alt'] ?? 'Macchinari isotonici per allenamento muscolare' ); ?>" loading="lazy">
                <p class="spazi-card__label"><?php echo wp_kses_post( $attributes['label-4'] ?? 'Macchinari isotonici' ); ?></p>
                <span class="spazi-card__expand" aria-hidden="true"><span class="material-symbols-rounded">open_in_full</span></span>
              </button>
              <?php if ( ! empty( $attributes['img-5']['url'] ) ) : ?>
              <button class="spazi-card" type="button" aria-label="<?php echo esc_attr( 'Apri foto: ' . ( $attributes['label-5'] ?? '' ) ); ?>">
                <img src="<?php echo esc_url( $attributes['img-5']['url'] ); ?>" alt="<?php echo esc_attr( $attributes['img-5']['alt'] ?? '' ); ?>" loading="lazy">
                <p class="spazi-card__label"><?php echo wp_kses_post( $attributes['label-5'] ?? '' ); ?></p>
                <span class="spazi-card__expand" aria-hidden="true"><span class="material-symbols-rounded">open_in_full</span></span>
              </button>
              <?php endif; ?>
            </div>
          </div>

          <div class="gallery-lightbox" id="spazi-lightbox" hidden="">
            <button class="gallery-lightbox__backdrop" type="button" aria-label="Chiudi galleria"></button>
            <div class="gallery-lightbox__inner" role="dialog" aria-modal="true" aria-label="Galleria spazi">
              <button class="gallery-lightbox__close" id="spazi-lightbox-close" type="button" aria-label="Chiudi"><span class="material-symbols-rounded">close</span></button>
              <button class="gallery-lightbox__nav gallery-lightbox__nav--prev" id="spazi-lightbox-prev" type="button" aria-label="Immagine precedente"><span class="material-symbols-rounded">chevron_left</span></button>
              <div class="gallery-lightbox__frame">
                <img id="spazi-lightbox-img" src="" alt="">
              </div>
              <button class="gallery-lightbox__nav gallery-lightbox__nav--next" id="spazi-lightbox-next" type="button" aria-label="Immagine successiva"><span class="material-symbols-rounded">chevron_right</span></button>
            </div>
          </div>
        </section>
