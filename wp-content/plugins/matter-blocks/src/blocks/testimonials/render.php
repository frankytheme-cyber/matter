<?php
/**
 * Render dinamico del blocco testimonials.
 *
 * @var array    $attributes
 * @var string   $content
 * @var WP_Block $block
 */

if ( ! defined( 'ABSPATH' ) ) exit;
?>
<section <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => 'section' ) ) ); ?>>
          <header class="section-head" data-reveal="">
            <p class="eyebrow"><?php echo wp_kses_post( $attributes['eyebrow'] ?? 'Recensioni dei soci' ); ?></p>
            <h2 class="section-title"><?php echo wp_kses_post( $attributes['title'] ?? 'Cosa dicono di noi' ); ?></h2>
          </header>
          <div class="spazi-tools">
            <button class="icon-btn testimonials-prev" type="button" aria-label="Scorri indietro">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </button>
            <button class="icon-btn testimonials-next" type="button" aria-label="Scorri avanti">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </button>
          </div>
          <div class="spazi-overflow">
            <div class="spazi-grid" id="carousel-testimonials">
              <article class="testimonial">
                <div class="stars" aria-label="5 su 5">★★★★★</div>
                <blockquote>
                  "Palestra nuova, molto pulita e ben attrezzata. La differenza vera
                  la fa lo staff: presente, competente e mai invasivo."
                </blockquote>
                <div class="testimonial__divider"></div>
                <footer class="testimonial__author">
                  <cite>Massimo</cite>
                  <span class="role">Recensione pubblica</span>
                </footer>
              </article>
              <article class="testimonial">
                <div class="stars" aria-label="5 su 5">★★★★★</div>
                <blockquote>
                  "Ambiente moderno e curato, attrezzature di livello e clima
                  tranquillo. Finalmente una palestra dove ci si allena bene senza caos."
                </blockquote>
                <div class="testimonial__divider"></div>
                <footer class="testimonial__author">
                  <cite>Michele N.</cite>
                  <span class="role">Recensione pubblica</span>
                </footer>
              </article>
              <article class="testimonial">
                <div class="stars" aria-label="5 su 5">★★★★★</div>
                <blockquote>
                  "Ero abituata alle grandi catene 24/7: qui ho trovato più attenzione,
                  più ordine e un vero senso di comunità."
                </blockquote>
                <div class="testimonial__divider"></div>
                <footer class="testimonial__author">
                  <cite>Elena L.</cite>
                  <span class="role">Recensione pubblica</span>
                </footer>
              </article>
              <article class="testimonial">
                <div class="stars" aria-label="5 su 5">★★★★★</div>
                <blockquote>
                  "Staff disponibile, macchinari recenti e sala organizzata molto bene:
                  consigliata sia a chi inizia sia a chi si allena da anni."
                </blockquote>
                <div class="testimonial__divider"></div>
                <footer class="testimonial__author">
                  <cite>Riccardo D.</cite>
                  <span class="role">Recensione pubblica</span>
                </footer>
              </article>
            </div>
          </div>
        </section>
