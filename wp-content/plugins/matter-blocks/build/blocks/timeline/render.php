<?php
/**
 * Render dinamico del blocco timeline.
 *
 * @var array    $attributes
 * @var string   $content
 * @var WP_Block $block
 */

if ( ! defined( 'ABSPATH' ) ) exit;

$mof_items = array(
    array(
        'year'  => $attributes['item1-year'] ?? 'Anno',
        'title' => $attributes['item1-title'] ?? 'Titolo della tappa',
        'text'  => $attributes['item1-text'] ?? 'Descrizione della tappa.',
    ),
    array(
        'year'  => $attributes['item2-year'] ?? 'Anno',
        'title' => $attributes['item2-title'] ?? 'Titolo della tappa',
        'text'  => $attributes['item2-text'] ?? 'Descrizione della tappa.',
    ),
    array(
        'year'  => $attributes['item3-year'] ?? 'Anno',
        'title' => $attributes['item3-title'] ?? 'Titolo della tappa',
        'text'  => $attributes['item3-text'] ?? 'Descrizione della tappa.',
    ),
    array(
        'year'  => $attributes['item4-year'] ?? 'Anno',
        'title' => $attributes['item4-title'] ?? 'Titolo della tappa',
        'text'  => $attributes['item4-text'] ?? 'Descrizione della tappa.',
    ),
);
?>
<section <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => 'section' ) ) ); ?>>
        <header class="section-head" data-reveal="">
          <p class="eyebrow"><?php echo wp_kses_post( $attributes['eyebrow'] ?? 'Sezione' ); ?></p>
          <h2 class="section-title"><?php echo wp_kses_post( $attributes['title'] ?? 'Titolo della sezione' ); ?></h2>
        </header>
        <div class="timeline" data-reveal="">
          <?php foreach ( $mof_items as $mof_it ) : ?>
          <div class="timeline-item">
            <p class="timeline-year"><?php echo wp_kses_post( $mof_it['year'] ); ?></p>
            <div class="timeline-content">
              <h3><?php echo wp_kses_post( $mof_it['title'] ); ?></h3>
              <p><?php echo wp_kses_post( $mof_it['text'] ); ?></p>
            </div>
          </div>
          <?php endforeach; ?>
        </div>
      </section>
