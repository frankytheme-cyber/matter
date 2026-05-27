<?php
/**
 * Render dinamico del blocco site-header.
 *
 * @var array    $attributes
 * @var string   $content
 * @var WP_Block $block
 */

if ( ! defined( 'ABSPATH' ) ) exit;
?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes( array() ) ); ?>>
          <a class="sr-only" href="#main">Vai al contenuto</a>

          <header class="site-header">
            <div class="nav-bar">
              <a class="nav-logo" href="/" aria-label="Matter of Fitness — Home"><img src="<?php echo esc_url( get_template_directory_uri() . '/assets/img/logo-matter.svg' ); ?>" alt="Matter of Fitness"></a>
              <nav class="nav-list" aria-label="Principale">
                <a href="<?php echo esc_url( $attributes['link-18']['url'] ?? '/contatti/#scrivici' ); ?>"><?php echo esc_html( $attributes['link-18']['label'] ?? 'Inizia Ora' ); ?></a>
                <div class="nav-item--dropdown" data-nav-dropdown="">
                  <button type="button" class="nav-item__trigger" id="nav-servizi-btn" aria-expanded="false" aria-controls="nav-servizi-panel" aria-haspopup="true">
                    Servizi
                    <span class="material-symbols-rounded nav-item__caret" aria-hidden="true">expand_more</span>
                  </button>
                  <div class="nav-dropdown" id="nav-servizi-panel" hidden="">
                    <a href="/servizi/">Servizi Matter</a>
                    <a href="/servizi/personal-training/">Personal Training</a>
                    <a href="/servizi/percorsi-specializzati/">Percorsi specializzati</a>
                  </div>
                </div>
                <div class="nav-item--dropdown" data-nav-dropdown="">
                  <button type="button" class="nav-item__trigger" id="nav-sedi-btn" aria-expanded="false" aria-controls="nav-sedi-panel" aria-haspopup="true">
                    Sedi
                    <span class="material-symbols-rounded nav-item__caret" aria-hidden="true">expand_more</span>
                  </button>
                  <div class="nav-dropdown" id="nav-sedi-panel" hidden="">
                    <a href="/sedi/">Panoramica sedi</a>
                    <a href="/sedi/pescantina/">Settimo di Pescantina</a>
                    <a href="/sedi/bovolone/">Bovolone</a>
                  </div>
                </div>
                <a href="/contatti/">Contatti</a>
                <a class="nav-cta" href="/contatti/#scrivici">Inizia Ora</a>
                <a class="nav-lounge" href="/matter-lounge/" aria-label="Matter Lounge"><img class="nav-lounge__mark" src="<?php echo esc_url( get_template_directory_uri() . '/assets/img/lounge-mark.svg' ); ?>" alt="Matter">Lounge</a>
              </nav>
              <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="menu-mobile" aria-label="Apri menu">
                <span></span><span></span><span></span>
              </button>
            </div>
          </header>

          <div id="menu-mobile" class="mobile-nav" hidden="">
            <a href="/chi-siamo/">Chi Siamo</a>
            <details class="mobile-nav__accordion">
              <summary>
                Servizi
                <span class="material-symbols-rounded nav-caret-rotate" aria-hidden="true">expand_more</span>
              </summary>
              <a href="/servizi/">Servizi Matter</a>
              <a href="/servizi/personal-training/">Personal Training</a>
              <a href="/servizi/percorsi-specializzati/">Percorsi specializzati</a>
            </details>
            <details class="mobile-nav__accordion">
              <summary>
                Sedi
                <span class="material-symbols-rounded nav-caret-rotate" aria-hidden="true">expand_more</span>
              </summary>
              <a href="/sedi/">Panoramica sedi</a>
              <a href="/sedi/pescantina/">Settimo di Pescantina</a>
              <a href="/sedi/bovolone/">Bovolone</a>
            </details>
            <a href="/contatti/">Contatti</a>
            <a class="nav-lounge" href="/matter-lounge/" aria-label="Matter Lounge"><img class="nav-lounge__mark" src="<?php echo esc_url( get_template_directory_uri() . '/assets/img/lounge-mark.svg' ); ?>" alt="Matter">Lounge</a>
            <a class="nav-cta" href="/contatti/#scrivici">Inizia Ora</a>
          </div>
        </div>
