<?php
/**
 * Struttura menu "Principale" (location primary) — generato da scripts/export-content.php.
 * Voci di tipo pagina (post_type). CTA "Inizia Ora" e "Lounge" restano fisse nel blocco site-header.
 */

return array(
    'name'     => 'Principale',
    'location' => 'primary',
    'items'    => array(
        array(
            'page_slug' => 'chi-siamo',
            'title' => 'Chi Siamo',
            'parent_page_slug' => '',
            'order' => 1,
        ),
        array(
            'page_slug' => 'servizi',
            'title' => 'Servizi',
            'parent_page_slug' => '',
            'order' => 2,
        ),
        array(
            'page_slug' => 'servizi',
            'title' => 'Servizi Matter',
            'parent_page_slug' => 'servizi',
            'order' => 3,
        ),
        array(
            'page_slug' => 'personal-training',
            'title' => 'Personal Training',
            'parent_page_slug' => 'servizi',
            'order' => 4,
        ),
        array(
            'page_slug' => 'percorsi-specializzati',
            'title' => 'Percorsi specializzati',
            'parent_page_slug' => 'servizi',
            'order' => 5,
        ),
        array(
            'page_slug' => 'sedi',
            'title' => 'Sedi',
            'parent_page_slug' => '',
            'order' => 6,
        ),
        array(
            'page_slug' => 'sedi',
            'title' => 'Panoramica sedi',
            'parent_page_slug' => 'sedi',
            'order' => 7,
        ),
        array(
            'page_slug' => 'pescantina',
            'title' => 'Settimo di Pescantina',
            'parent_page_slug' => 'sedi',
            'order' => 8,
        ),
        array(
            'page_slug' => 'bovolone',
            'title' => 'Bovolone',
            'parent_page_slug' => 'sedi',
            'order' => 9,
        ),
        array(
            'page_slug' => 'contatti',
            'title' => 'Contatti',
            'parent_page_slug' => '',
            'order' => 10,
        ),
    ),
);
