<?php
/**
 * Render dinamico del blocco steps (processo numerato, griglia .pt-process).
 *
 * @var array    $attributes
 * @var string   $content
 * @var WP_Block $block
 */

if ( ! defined( 'ABSPATH' ) ) exit;

$mof_steps = array();
for ( $i = 1; $i <= 4; $i++ ) {
    // Salta gli step senza titolo: consente processi con meno di 4 passi.
    if ( isset( $attributes[ "step{$i}-title" ] ) && '' === trim( (string) $attributes[ "step{$i}-title" ] ) ) {
        continue;
    }
    $mof_steps[] = array(
        'title' => $attributes[ "step{$i}-title" ] ?? '',
        'desc'  => $attributes[ "step{$i}-desc" ] ?? '',
    );
}
$mof_lead = $attributes['lead'] ?? '';
?>
<section <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => 'section' ) ) ); ?>>
        <header class="section-head" data-reveal="">
          <p class="eyebrow"><?php echo wp_kses_post( $attributes['eyebrow'] ?? 'Come funziona' ); ?></p>
          <h2 class="section-title"><?php echo wp_kses_post( $attributes['title'] ?? 'Il percorso, passo dopo passo' ); ?></h2>
          <?php if ( '' !== trim( (string) $mof_lead ) ) : ?>
          <p class="section-lead"><?php echo wp_kses_post( $mof_lead ); ?></p>
          <?php endif; ?>
        </header>
        <div class="pt-process">
          <?php foreach ( $mof_steps as $mof_idx => $mof_step ) : ?>
          <div class="info-tile" data-reveal="" data-reveal-delay="<?php echo esc_attr( $mof_idx * 80 ); ?>">
            <p class="info-tile__num"><?php echo esc_html( sprintf( '%02d', $mof_idx + 1 ) ); ?></p>
            <h3 class="info-tile__title"><?php echo wp_kses_post( $mof_step['title'] ); ?></h3>
            <?php if ( '' !== trim( (string) $mof_step['desc'] ) ) : ?>
            <p class="info-tile__desc"><?php echo wp_kses_post( $mof_step['desc'] ); ?></p>
            <?php endif; ?>
          </div>
          <?php endforeach; ?>
        </div>
      </section>
