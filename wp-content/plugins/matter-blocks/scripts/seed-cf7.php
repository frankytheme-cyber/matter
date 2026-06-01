<?php
/**
 * Crea/aggiorna 3 form Contact Form 7 (Pescantina, Bovolone, Contatti) con il
 * markup BEM del tema, e li collega ai blocchi matter/contact-form nelle pagine
 * 35/36/37 impostando l'attributo cf7-id. Idempotente sui titoli.
 */

if ( ! class_exists( 'WPCF7_ContactForm' ) ) {
    echo "CF7 non disponibile\n";
    return;
}

/** Template form CF7 con classi del tema. $select = 'interesse'|'oggetto'. */
function mof_cf7_form_template( $select_name, $select_label, array $select_opts ) {
    $opts = '';
    foreach ( $select_opts as $o ) {
        $opts .= ' "' . $o . '"';
    }
    $tpl  = '<div class="form-row">' . "\n";
    $tpl .= '  <div class="form-group">' . "\n";
    $tpl .= '    <label class="form-label" for="cf-nome">Nome <span aria-hidden="true">*</span></label>' . "\n";
    $tpl .= '    [text* nome id:cf-nome class:form-input autocomplete:given-name]' . "\n";
    $tpl .= '  </div>' . "\n";
    $tpl .= '  <div class="form-group">' . "\n";
    $tpl .= '    <label class="form-label" for="cf-cognome">Cognome <span aria-hidden="true">*</span></label>' . "\n";
    $tpl .= '    [text* cognome id:cf-cognome class:form-input autocomplete:family-name]' . "\n";
    $tpl .= '  </div>' . "\n";
    $tpl .= '</div>' . "\n";
    $tpl .= '<div class="form-group">' . "\n";
    $tpl .= '  <label class="form-label" for="cf-email">Email <span aria-hidden="true">*</span></label>' . "\n";
    $tpl .= '  [email* email id:cf-email class:form-input autocomplete:email]' . "\n";
    $tpl .= '</div>' . "\n";
    $tpl .= '<div class="form-group">' . "\n";
    $tpl .= '  <label class="form-label" for="cf-tel">Telefono <span class="form-label__hint">(facoltativo)</span></label>' . "\n";
    $tpl .= '  [tel telefono id:cf-tel class:form-input autocomplete:tel]' . "\n";
    $tpl .= '</div>' . "\n";
    $tpl .= '<div class="form-group">' . "\n";
    $tpl .= '  <label class="form-label" for="cf-sede">Sede di riferimento <span aria-hidden="true">*</span></label>' . "\n";
    $tpl .= '  [select* sede id:cf-sede class:form-input first_as_label "Seleziona la sede" "Settimo di Pescantina" "Bovolone" "Marketing e collaborazioni"]' . "\n";
    $tpl .= '</div>' . "\n";
    $tpl .= '<div class="form-group">' . "\n";
    $tpl .= '  <label class="form-label" for="cf-sel">' . $select_label . '</label>' . "\n";
    $tpl .= '  [select ' . $select_name . ' id:cf-sel class:form-input first_as_label "Seleziona un\'opzione"' . $opts . ']' . "\n";
    $tpl .= '</div>' . "\n";
    $tpl .= '<div class="form-group">' . "\n";
    $tpl .= '  <label class="form-label" for="cf-msg">Messaggio <span aria-hidden="true">*</span></label>' . "\n";
    $tpl .= '  [textarea* messaggio id:cf-msg class:form-textarea]' . "\n";
    $tpl .= '</div>' . "\n";
    $tpl .= '[submit class:btn-pill class:btn-pill--dark class:u-btn-full "Invia richiesta"]' . "\n";
    return $tpl;
}

/** Crea (o riusa per titolo) un form CF7 e ne restituisce l'ID. */
function mof_cf7_upsert( $title, $form, $recipient, $select_name, $select_label ) {
    // riusa se esiste già un form con questo titolo
    $existing = get_posts( array(
        'post_type'      => 'wpcf7_contact_form',
        'title'          => $title,
        'posts_per_page' => 1,
        'fields'         => 'ids',
        'post_status'    => 'any',
    ) );
    $cf = ! empty( $existing )
        ? WPCF7_ContactForm::get_instance( $existing[0] )
        : WPCF7_ContactForm::get_template( array( 'locale' => 'it_IT' ) );

    $mail = $cf->prop( 'mail' );
    if ( ! is_array( $mail ) ) {
        $mail = array();
    }
    $mail['active']             = true;
    $mail['recipient']          = $recipient;
    $mail['subject']            = 'Matter of Fitness — nuova richiesta (' . $title . ')';
    $mail['sender']             = '[_site_title] <wordpress@' . wp_parse_url( home_url(), PHP_URL_HOST ) . '>';
    $mail['additional_headers'] = "Reply-To: [email]";
    $mail['body']               = "Hai ricevuto una nuova richiesta dal sito.\n\n"
        . "Nome: [nome] [cognome]\nEmail: [email]\nTelefono: [telefono]\n"
        . "Sede: [sede]\n" . $select_label . ": [" . $select_name . "]\n\n"
        . "Messaggio:\n[messaggio]\n\n-- \nInviato dal modulo Matter of Fitness ([_url]).";

    $cf->set_title( $title );
    $cf->set_properties( array(
        'form' => $form,
        'mail' => $mail,
    ) );
    return $cf->save();
}

$select_pesc = array( 'Abbonamento sala', 'Personal training', 'Percorsi specializzati', 'Prova gratuita', 'Altro' );
$select_ogg  = array( 'Informazioni generali', 'Stampa e media', 'Partnership', 'Candidatura', 'Altro' );

$forms = array(
    35 => array(
        'title'     => 'Contatti — Settimo di Pescantina',
        'recipient' => 'info@matteroffitness.it',
        'select'    => array( 'interesse', 'Mi interessa', $select_pesc ),
    ),
    36 => array(
        'title'     => 'Contatti — Bovolone',
        'recipient' => 'matterbovolone@gmail.com',
        'select'    => array( 'interesse', 'Mi interessa', $select_pesc ),
    ),
    37 => array(
        'title'     => 'Contatti — Richieste generali',
        'recipient' => 'info@matteroffitness.it',
        'select'    => array( 'oggetto', 'Oggetto', $select_ogg ),
    ),
);

foreach ( $forms as $page_id => $f ) {
    list( $sname, $slabel, $sopts ) = $f['select'];
    $tpl = mof_cf7_form_template( $sname, $slabel, $sopts );
    $cf7_id = mof_cf7_upsert( $f['title'], $tpl, $f['recipient'], $sname, $slabel );
    echo "Form CF7 \"{$f['title']}\" => id {$cf7_id} (pagina {$page_id})\n";

    // collega l'ID al blocco matter/contact-form nel post_content della pagina
    $post = get_post( $page_id );
    if ( ! $post ) {
        echo "  ! pagina {$page_id} non trovata\n";
        continue;
    }
    $content = $post->post_content;
    // inserisci/aggiorna "cf7-id":<id> nel primo blocco matter/contact-form
    if ( preg_match( '/<!--\s*wp:matter\/contact-form\s*(\{.*?\})?\s*\/-->/s', $content, $m ) ) {
        $attrs = array();
        if ( ! empty( $m[1] ) ) {
            $attrs = json_decode( $m[1], true );
            if ( ! is_array( $attrs ) ) {
                $attrs = array();
            }
        }
        $attrs['cf7-id'] = (string) $cf7_id;
        $new_block = '<!-- wp:matter/contact-form ' . wp_json_encode( $attrs, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE ) . ' /-->';
        $new_content = str_replace( $m[0], $new_block, $content );
        wp_update_post( array( 'ID' => $page_id, 'post_content' => $new_content ) );
        echo "  ok: cf7-id={$cf7_id} collegato al blocco (pagina {$page_id})\n";
    } else {
        echo "  ! blocco matter/contact-form non trovato nella pagina {$page_id}\n";
    }
}
echo "FATTO\n";
