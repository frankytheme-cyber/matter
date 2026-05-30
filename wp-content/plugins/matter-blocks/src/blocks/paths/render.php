<?php
/**
 * Render dinamico del blocco paths.
 *
 * @var array    $attributes
 * @var string   $content
 * @var WP_Block $block
 */

if ( ! defined( 'ABSPATH' ) ) exit;

// Se l'utente non ha impostato un anchor sul blocco, applichiamo l'id
// "percorsi-specializzati": gli stili della CTA finale (centratura, bottoni
// verdi pieni) nel CSS sorgente sono scoped sotto questo id.
$mof_paths_id_attr = empty( $attributes['anchor'] ) ? ' id="percorsi-specializzati"' : '';

// Costruisce l'elenco delle feature-row. row1/row2 hanno default "home";
// row3 è opzionale e viene resa solo se ha un titolo. Ogni row può avere una
// bullet-list (stringa, una voce per riga) resa solo se valorizzata.
$mof_rows = array(
    array(
        'img'    => $attributes['row1-img'] ?? array(),
        'img_default' => 'https://images.pexels.com/photos/4720248/pexels-photo-4720248.jpeg?auto=compress&cs=tinysrgb&w=900',
        'alt_default' => 'Valutazione e programmazione in sala',
        'kicker' => $attributes['row1-kicker'] ?? 'Valutazione',
        'title'  => $attributes['row1-title'] ?? 'Si parte da come stai oggi',
        'desc'   => $attributes['row1-desc'] ?? 'Colloquio, anamnesi e test tecnici definiscono il punto di partenza. Il programma si aggiorna con check-in ogni quattro o sei settimane.',
        'list'   => $attributes['row1-list'] ?? '',
    ),
    array(
        'img'    => $attributes['row2-img'] ?? array(),
        'img_default' => 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=900',
        'alt_default' => 'Allenamento guidato in sala',
        'kicker' => $attributes['row2-kicker'] ?? 'Percorsi',
        'title'  => $attributes['row2-title'] ?? 'Quattro linee di lavoro',
        'desc'   => $attributes['row2-desc'] ?? 'Posturale, post parto, condizionamento e pre-agonistico. Se serve, costruiamo un percorso dedicato.',
        'list'   => $attributes['row2-list'] ?? '',
    ),
);

// row3 opzionale.
if ( ! empty( $attributes['row3-title'] ) ) {
    $mof_rows[] = array(
        'img'    => $attributes['row3-img'] ?? array(),
        'img_default' => '',
        'alt_default' => '',
        'kicker' => $attributes['row3-kicker'] ?? '',
        'title'  => $attributes['row3-title'],
        'desc'   => $attributes['row3-desc'] ?? '',
        'list'   => $attributes['row3-list'] ?? '',
    );
}
?>
<section <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => 'section' ) ) ); ?><?php echo $mof_paths_id_attr; ?> aria-labelledby="percorsi-specializzati-title">
          <header class="section-head" data-reveal="">
            <p class="eyebrow"><?php echo wp_kses_post( $attributes['eyebrow'] ?? 'Programmazione' ); ?></p>
            <h2 id="percorsi-specializzati-title" class="section-title"><?php echo wp_kses_post( $attributes['title'] ?? 'Percorsi specializzati' ); ?></h2>
            <p class="section-lead"><?php echo wp_kses_post( $attributes['lead'] ?? 'Programmi su misura per obiettivi precisi: postura, post parto,
              condizionamento e preparazione sportiva.' ); ?></p>
          </header>
          <div class="feature-rows" data-reveal="">
            <?php foreach ( $mof_rows as $mof_i => $mof_row ) : ?>
            <div class="feature-row<?php echo ( $mof_i % 2 === 1 ) ? ' feature-row--reverse' : ''; ?>" data-reveal="">
              <div class="feature-row__media">
                <img src="<?php echo esc_url( ! empty( $mof_row['img']['url'] ) ? $mof_row['img']['url'] : $mof_row['img_default'] ); ?>" alt="<?php echo esc_attr( ! empty( $mof_row['img']['alt'] ) ? $mof_row['img']['alt'] : $mof_row['alt_default'] ); ?>" loading="lazy">
              </div>
              <div class="feature-row__body">
                <?php if ( '' !== trim( (string) $mof_row['kicker'] ) ) : ?>
                <p class="feature-row__kicker"><?php echo wp_kses_post( $mof_row['kicker'] ); ?></p>
                <?php endif; ?>
                <h3 class="feature-row__title"><?php echo wp_kses_post( $mof_row['title'] ); ?></h3>
                <?php if ( '' !== trim( (string) $mof_row['desc'] ) ) : ?>
                <p class="feature-row__desc"><?php echo wp_kses_post( $mof_row['desc'] ); ?></p>
                <?php endif; ?>
                <?php if ( '' !== trim( (string) $mof_row['list'] ) ) : ?>
                <ul class="feature-row__list">
                  <?php foreach ( preg_split( '/\R+/', (string) $mof_row['list'] ) as $mof_li ) :
                      $mof_li = trim( $mof_li );
                      if ( '' === $mof_li ) {
                          continue;
                      } ?>
                  <li><?php echo wp_kses_post( $mof_li ); ?></li>
                  <?php endforeach; ?>
                </ul>
                <?php endif; ?>
              </div>
            </div>
            <?php endforeach; ?>
          </div>
          <?php if ( ! empty( $attributes['cta-title'] ) ) : ?>
          <div class="custom-cta percorsi-cta-finale" data-reveal="" data-reveal-delay="120">
            <div class="custom-cta__body">
              <p class="custom-cta__kicker"><?php echo wp_kses_post( $attributes['cta-kicker'] ?? 'Approfondimento' ); ?></p>
              <h3 class="custom-cta__title"><?php echo wp_kses_post( $attributes['cta-title'] ?? 'Scegli il percorso più adatto a te' ); ?></h3>
              <p class="custom-cta__desc"><?php echo wp_kses_post( $attributes['cta-desc'] ?? 'Nella pagina dedicata trovi tutti i percorsi specializzati con obiettivi,
                modalità di lavoro e indicazioni pratiche per capire da dove partire.' ); ?></p>
              <div class="custom-cta__actions">
                <?php if ( ! empty( $attributes['cta-primary']['url'] ) ) : ?>
                <a class="btn-pill btn-pill--light custom-cta__btn" href="<?php echo esc_url( $attributes['cta-primary']['url'] ); ?>"><?php echo esc_html( $attributes['cta-primary']['label'] ?? '' ); ?></a>
                <?php endif; ?>
                <?php if ( ! empty( $attributes['cta-secondary']['url'] ) ) : ?>
                <a class="btn-pill btn-pill--outline custom-cta__btn" href="<?php echo esc_url( $attributes['cta-secondary']['url'] ); ?>"><?php echo esc_html( $attributes['cta-secondary']['label'] ?? '' ); ?></a>
                <?php endif; ?>
              </div>
            </div>
          </div>
          <?php endif; ?>
        </section>
