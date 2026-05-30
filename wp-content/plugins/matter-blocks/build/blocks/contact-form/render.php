<?php
/**
 * Render dinamico del blocco contact-form (.contact-form--centered).
 *
 * Form mockup (action="#"): nome, cognome, email, telefono, sede,
 * select configurabile (interesse/oggetto) e messaggio. Gli id dei campi
 * sono suffissati con `form-id` per restare univoci se il form compare
 * più volte nel sito.
 *
 * @var array    $attributes
 * @var string   $content
 * @var WP_Block $block
 */

if ( ! defined( 'ABSPATH' ) ) exit;

$mof_fid    = sanitize_html_class( $attributes['form-id'] ?? 'contact' );
$mof_lead   = $attributes['lead'] ?? '';
$mof_sel    = $attributes['select-label'] ?? 'Mi interessa';
$mof_submit = $attributes['submit-label'] ?? 'Invia richiesta';
?>
<section <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => 'section' ) ) ); ?>>
        <header class="section-head" data-reveal="">
          <p class="eyebrow"><?php echo wp_kses_post( $attributes['eyebrow'] ?? 'Scrivici' ); ?></p>
          <h2 class="section-title"><?php echo wp_kses_post( $attributes['title'] ?? 'Scrivici' ); ?></h2>
          <?php if ( '' !== trim( (string) $mof_lead ) ) : ?>
          <p class="section-lead"><?php echo wp_kses_post( $mof_lead ); ?></p>
          <?php endif; ?>
        </header>
        <form class="contact-form contact-form--centered" data-reveal="" action="#" method="post" aria-describedby="form-help-<?php echo esc_attr( $mof_fid ); ?>">
          <p id="form-help-<?php echo esc_attr( $mof_fid ); ?>" class="sr-only">I campi contrassegnati con asterisco sono obbligatori.</p>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="nome-<?php echo esc_attr( $mof_fid ); ?>">Nome <span aria-hidden="true">*</span></label>
              <input class="form-input" type="text" id="nome-<?php echo esc_attr( $mof_fid ); ?>" name="nome" autocomplete="given-name" required aria-required="true">
            </div>
            <div class="form-group">
              <label class="form-label" for="cognome-<?php echo esc_attr( $mof_fid ); ?>">Cognome <span aria-hidden="true">*</span></label>
              <input class="form-input" type="text" id="cognome-<?php echo esc_attr( $mof_fid ); ?>" name="cognome" autocomplete="family-name" required aria-required="true">
            </div>
          </div>
          <div class="form-group">
            <label class="form-label" for="email-<?php echo esc_attr( $mof_fid ); ?>">Email <span aria-hidden="true">*</span></label>
            <input class="form-input" type="email" id="email-<?php echo esc_attr( $mof_fid ); ?>" name="email" autocomplete="email" required aria-required="true">
          </div>
          <div class="form-group">
            <label class="form-label" for="telefono-<?php echo esc_attr( $mof_fid ); ?>">Telefono <span class="form-label__hint">(facoltativo)</span></label>
            <input class="form-input" type="tel" id="telefono-<?php echo esc_attr( $mof_fid ); ?>" name="telefono" autocomplete="tel">
          </div>
          <div class="form-group">
            <label class="form-label" for="sede-<?php echo esc_attr( $mof_fid ); ?>">Sede di riferimento <span aria-hidden="true">*</span></label>
            <select class="form-input" id="sede-<?php echo esc_attr( $mof_fid ); ?>" name="sede" required aria-required="true">
              <option value="" selected>Seleziona la sede</option>
              <option value="marketing-collaborazioni">Marketing e collaborazioni</option>
              <option value="pescantina">Settimo di Pescantina</option>
              <option value="bovolone">Bovolone</option>
            </select>
          </div>
          <?php if ( '' !== trim( (string) $mof_sel ) ) : ?>
          <div class="form-group">
            <label class="form-label" for="interesse-<?php echo esc_attr( $mof_fid ); ?>"><?php echo esc_html( $mof_sel ); ?></label>
            <select class="form-input" id="interesse-<?php echo esc_attr( $mof_fid ); ?>" name="interesse">
              <option value="">Seleziona un'opzione</option>
              <?php foreach ( preg_split( '/\R+/', (string) ( $attributes['select-options'] ?? '' ) ) as $mof_opt ) :
                  $mof_opt = trim( $mof_opt );
                  if ( '' === $mof_opt ) {
                      continue;
                  } ?>
              <option><?php echo esc_html( $mof_opt ); ?></option>
              <?php endforeach; ?>
            </select>
          </div>
          <?php endif; ?>
          <div class="form-group">
            <label class="form-label" for="messaggio-<?php echo esc_attr( $mof_fid ); ?>">Messaggio <span aria-hidden="true">*</span></label>
            <textarea class="form-textarea" id="messaggio-<?php echo esc_attr( $mof_fid ); ?>" name="messaggio" required aria-required="true"></textarea>
          </div>
          <button class="btn-pill btn-pill--dark u-btn-full" type="submit"><?php echo esc_html( $mof_submit ); ?></button>
        </form>
      </section>
