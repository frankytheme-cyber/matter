<?php
/**
 * Render dinamico del blocco features (griglia di info-tile).
 *
 * @var array    $attributes
 * @var string   $content
 * @var WP_Block $block
 */

if ( ! defined( 'ABSPATH' ) ) exit;

$mof_tiles = array();
for ( $i = 1; $i <= 4; $i++ ) {
    $mof_tiles[] = array(
        'icon'  => $attributes[ "tile{$i}-icon" ] ?? 'check_circle',
        'title' => $attributes[ "tile{$i}-title" ] ?? 'Titolo caratteristica',
        'desc'  => $attributes[ "tile{$i}-desc" ] ?? 'Descrizione sintetica della caratteristica.',
    );
}
$mof_lead = $attributes['lead'] ?? '';
?>
<section <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => 'section' ) ) ); ?>>
        <header class="section-head" data-reveal="">
          <p class="eyebrow"><?php echo wp_kses_post( $attributes['eyebrow'] ?? 'Sezione' ); ?></p>
          <h2 class="section-title"><?php echo wp_kses_post( $attributes['title'] ?? 'Titolo della sezione' ); ?></h2>
          <?php if ( '' !== trim( (string) $mof_lead ) ) : ?>
          <p class="section-lead"><?php echo wp_kses_post( $mof_lead ); ?></p>
          <?php endif; ?>
        </header>
        <div class="features-grid" data-reveal="">
          <?php foreach ( $mof_tiles as $mof_t ) : ?>
          <div class="info-tile">
            <span class="info-tile__icon material-symbols-rounded" aria-hidden="true"><?php echo esc_html( $mof_t['icon'] ); ?></span>
            <h3 class="info-tile__title"><?php echo wp_kses_post( $mof_t['title'] ); ?></h3>
            <p class="info-tile__desc"><?php echo wp_kses_post( $mof_t['desc'] ); ?></p>
          </div>
          <?php endforeach; ?>
        </div>
      </section>
