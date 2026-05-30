<?php
/**
 * Render dinamico del blocco equipment (.macchinari-grid).
 *
 * Voci: una per riga, formato "icona | nome".
 *
 * @var array    $attributes
 * @var string   $content
 * @var WP_Block $block
 */

if ( ! defined( 'ABSPATH' ) ) exit;

$mof_items = array();
foreach ( preg_split( '/\R+/', (string) ( $attributes['items'] ?? '' ) ) as $mof_line ) {
    $mof_line = trim( $mof_line );
    if ( '' === $mof_line ) {
        continue;
    }
    $mof_parts = array_map( 'trim', explode( '|', $mof_line, 2 ) );
    $mof_items[] = array(
        'icon' => $mof_parts[0] ?? 'fitness_center',
        'name' => $mof_parts[1] ?? '',
    );
}
$mof_lead = $attributes['lead'] ?? '';
?>
<section <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => 'section' ) ) ); ?>>
        <header class="section-head" data-reveal="">
          <p class="eyebrow"><?php echo wp_kses_post( $attributes['eyebrow'] ?? 'Servizi della sede' ); ?></p>
          <h2 class="section-title"><?php echo wp_kses_post( $attributes['title'] ?? 'Attrezzature disponibili' ); ?></h2>
          <?php if ( '' !== trim( (string) $mof_lead ) ) : ?>
          <p class="section-lead"><?php echo wp_kses_post( $mof_lead ); ?></p>
          <?php endif; ?>
        </header>
        <div class="macchinari-grid" data-reveal="">
          <?php foreach ( $mof_items as $mof_idx => $mof_item ) : ?>
          <div class="macchina-item" data-reveal="" data-reveal-delay="<?php echo esc_attr( ( $mof_idx % 3 ) * 60 ); ?>">
            <span class="macchina-item__icon material-symbols-rounded"><?php echo esc_html( $mof_item['icon'] ); ?></span>
            <p class="macchina-item__name"><?php echo wp_kses_post( $mof_item['name'] ); ?></p>
          </div>
          <?php endforeach; ?>
        </div>
      </section>
