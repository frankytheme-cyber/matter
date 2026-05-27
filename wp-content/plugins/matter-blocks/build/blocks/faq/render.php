<?php
/**
 * Render dinamico del blocco faq.
 *
 * @var array    $attributes
 * @var string   $content
 * @var WP_Block $block
 */

if ( ! defined( 'ABSPATH' ) ) exit;
?>
<section <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => 'section section--dark' ) ) ); ?>>
          <header class="section-head" data-reveal="">
            <p class="eyebrow"><?php echo wp_kses_post( $attributes['eyebrow'] ?? 'FAQ' ); ?></p>
            <h2 class="section-title"><?php echo wp_kses_post( $attributes['title'] ?? 'Domande frequenti' ); ?></h2>
          </header>
          <div class="faq-grid" id="faq-accordion" data-reveal="" data-reveal-delay="100">
            <div class="faq-item">
              <h3 class="faq-item__q">
                <button class="faq-item__trigger" type="button" aria-expanded="false">
                  <span><?php echo wp_kses_post( $attributes['q1'] ?? 'Posso fare una prova prima di sottoscrivere l\'abbonamento?' ); ?></span>
                  <span class="material-symbols-rounded faq-item__icon" aria-hidden="true">add</span>
                </button>
              </h3>
              <div class="faq-item__a"><?php echo wp_kses_post( $attributes['a1'] ?? 'Sì. Organizziamo ingressi prova su appuntamento per farti
                conoscere la sala, il team e il modo in cui lavoriamo, senza
                impegno.' ); ?></div>
            </div>
            <div class="faq-item">
              <h3 class="faq-item__q">
                <button class="faq-item__trigger" type="button" aria-expanded="false">
                  <span><?php echo wp_kses_post( $attributes['q2'] ?? 'La palestra è affollata negli orari di punta?' ); ?></span>
                  <span class="material-symbols-rounded faq-item__icon" aria-hidden="true">add</span>
                </button>
              </h3>
              <div class="faq-item__a"><?php echo wp_kses_post( $attributes['a2'] ?? 'Le ore di maggiore affluenza sono di norma il tardo pomeriggio,
                tra le 18:00 e le 20:00. Mattino presto e prima serata sono i
                momenti più tranquilli per allenarsi senza attese ai macchinari.' ); ?></div>
            </div>
            <div class="faq-item">
              <h3 class="faq-item__q">
                <button class="faq-item__trigger" type="button" aria-expanded="false">
                  <span><?php echo wp_kses_post( $attributes['q3'] ?? 'Avete assistenza in sala anche senza personal training?' ); ?></span>
                  <span class="material-symbols-rounded faq-item__icon" aria-hidden="true">add</span>
                </button>
              </h3>
              <div class="faq-item__a"><?php echo wp_kses_post( $attributes['a3'] ?? 'Sì. Durante l\'orario di apertura è sempre presente un istruttore
                qualificato in sala, disponibile per chiarimenti tecnici,
                correzioni sull\'esecuzione e consigli sul percorso.' ); ?></div>
            </div>
            <div class="faq-item">
              <h3 class="faq-item__q">
                <button class="faq-item__trigger" type="button" aria-expanded="false">
                  <span><?php echo wp_kses_post( $attributes['q4'] ?? 'Che ambiente trovo in sala?' ); ?></span>
                  <span class="material-symbols-rounded faq-item__icon" aria-hidden="true">add</span>
                </button>
              </h3>
              <div class="faq-item__a"><?php echo wp_kses_post( $attributes['a4'] ?? 'Ambienti puliti e ordinati, con attrezzature recenti e
                manutenute. Pulizia quotidiana di sale e spogliatoi, gestione
                attenta degli spazi comuni.' ); ?></div>
            </div>
          </div>
        </section>
