<?php
/**
 * Render dinamico del blocco pillars.
 *
 * @var array    $attributes
 * @var string   $content
 * @var WP_Block $block
 */

if ( ! defined( 'ABSPATH' ) ) exit;

$mof_pillars = array(
    array(
        'kicker' => $attributes['pillar1-kicker'] ?? '01',
        'title'  => $attributes['pillar1-title'] ?? 'Titolo del pilastro',
        'lead'   => $attributes['pillar1-lead'] ?? 'Descrizione sintetica del pilastro.',
        'list'   => $attributes['pillar1-list'] ?? "Primo punto\nSecondo punto\nTerzo punto",
        'delay'  => 0,
    ),
    array(
        'kicker' => $attributes['pillar2-kicker'] ?? '02',
        'title'  => $attributes['pillar2-title'] ?? 'Titolo del pilastro',
        'lead'   => $attributes['pillar2-lead'] ?? 'Descrizione sintetica del pilastro.',
        'list'   => $attributes['pillar2-list'] ?? "Primo punto\nSecondo punto\nTerzo punto",
        'delay'  => 120,
    ),
    array(
        'kicker' => $attributes['pillar3-kicker'] ?? '03',
        'title'  => $attributes['pillar3-title'] ?? 'Titolo del pilastro',
        'lead'   => $attributes['pillar3-lead'] ?? 'Descrizione sintetica del pilastro.',
        'list'   => $attributes['pillar3-list'] ?? "Primo punto\nSecondo punto\nTerzo punto",
        'delay'  => 240,
    ),
);
?>
<section <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => 'section' ) ) ); ?>>
        <header class="section-head" data-reveal="">
          <p class="eyebrow"><?php echo wp_kses_post( $attributes['eyebrow'] ?? 'Sezione' ); ?></p>
          <h2 class="section-title"><?php echo wp_kses_post( $attributes['title'] ?? 'Titolo della sezione' ); ?></h2>
          <p class="section-lead"><?php echo wp_kses_post( $attributes['lead'] ?? 'Breve introduzione alla sezione.' ); ?></p>
        </header>
        <div class="pillars-grid">
          <?php foreach ( $mof_pillars as $mof_p ) : ?>
          <article class="pillar" data-reveal="" data-reveal-delay="<?php echo esc_attr( $mof_p['delay'] ); ?>">
            <p class="pillar__kicker"><?php echo wp_kses_post( $mof_p['kicker'] ); ?></p>
            <h3 class="pillar__title"><?php echo wp_kses_post( $mof_p['title'] ); ?></h3>
            <p class="pillar__lead"><?php echo wp_kses_post( $mof_p['lead'] ); ?></p>
            <ul class="pillar__list">
              <?php
              foreach ( preg_split( '/\R+/', (string) $mof_p['list'] ) as $mof_li ) {
                  $mof_li = trim( $mof_li );
                  if ( '' === $mof_li ) {
                      continue;
                  }
                  echo '<li>' . wp_kses_post( $mof_li ) . '</li>';
              }
              ?>
            </ul>
          </article>
          <?php endforeach; ?>
        </div>
      </section>
