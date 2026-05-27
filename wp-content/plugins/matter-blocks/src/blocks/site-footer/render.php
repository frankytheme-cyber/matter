<?php
/**
 * Render dinamico del blocco site-footer.
 *
 * @var array    $attributes
 * @var string   $content
 * @var WP_Block $block
 */

if ( ! defined( 'ABSPATH' ) ) exit;
?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes( array() ) ); ?>>
          <footer class="site-footer" id="contatti">
            <div class="footer-inner">
              <div class="footer-brand">
                <a class="footer-brand__logo" href="/" aria-label="Matter of Fitness — Home"><img src="<?php echo esc_url( get_template_directory_uri() . '/assets/img/logo-matter.svg' ); ?>" alt="Matter of Fitness"></a>
                <p><?php echo wp_kses_post( $attributes['text-2'] ?? 'Via Dossi, 2<br>37051 Bovolone (VR)' ); ?></p>
                <a href="mailto:info@matteroffitness.it">info@matteroffitness.it</a>
                <a href="tel:+393471610051">+39 347 161 0051</a>
                <a href="https://matteroffitness.it">matteroffitness.it</a>
              </div>
              <div class="footer-col">
                <h4><?php echo wp_kses_post( $attributes['heading-4'] ?? 'Cosa offriamo' ); ?></h4>
                <p>Via Enzo Natta, 38<br>37026 Settimo (VR)</p>
                <ul>
                  <li><a href="<?php echo esc_url( $attributes['link-17']['url'] ?? '/cookie-policy/' ); ?>"><?php echo esc_html( $attributes['link-17']['label'] ?? 'Cookie Policy' ); ?></a></li>
                  <li><a href="/sedi/pescantina/#contatti">Contatti sede</a></li>
                  <li><a href="/sedi/pescantina/#mappa">Mappa e indicazioni</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h4>Bovolone</h4>
                <p>Via Dossi, 2<br>37051 Bovolone (VR)</p>
                <ul>
                  <li><a href="/sedi/bovolone/">Scheda sede</a></li>
                  <li><a href="/sedi/bovolone/#contatti">Contatti sede</a></li>
                  <li><a href="/sedi/bovolone/#mappa">Mappa e indicazioni</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h4>Sito</h4>
                <ul>
                  <li><a href="/servizi/">Servizi</a></li>
                  <li><a href="/sedi/">Le sedi</a></li>
                  <li><a href="/contatti/">Contatti</a></li>
                  <li><a href="/chi-siamo/">Chi siamo</a></li>
                  <li><a href="/matter-lounge/">Matter Lounge</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h4>Cosa offriamo</h4>
                <ul>
                  <li><a href="/servizi/">Servizi Matter</a></li>
                  <li><a href="/servizi/personal-training/">Personal training</a></li>
                  <li><a href="/servizi/percorsi-specializzati/">Percorsi specializzati</a></li>
                </ul>
              </div>
            </div>
            <div class="footer-meta">
              <span>© 2026 Matter of Fitness. Tutti i diritti riservati.</span>
              <a href="/self-guarding/">Self Guarding</a>
              <a href="/privacy-policy/">Privacy Policy</a>
              <a href="/cookie-policy/">Cookie Policy</a>
            </div>
          </footer>
        </div>
