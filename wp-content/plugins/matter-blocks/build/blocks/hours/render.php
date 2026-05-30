<?php
/**
 * Render dinamico del blocco hours (tabella orari, .orari-table).
 *
 * Ogni colonna: titolo + righe "Giorno | Orario" (una per riga; il valore
 * orario può contenere link mailto/tel).
 *
 * @var array    $attributes
 * @var string   $content
 * @var WP_Block $block
 */

if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Stampa un blocco orari (titolo + righe giorno/orario).
 */
if ( ! function_exists( 'mof_hours_block' ) ) :
function mof_hours_block( $title, $rows ) {
    echo '<div class="orari-block">';
    echo '<h3 class="orari-block__title">' . wp_kses_post( $title ) . '</h3>';
    foreach ( preg_split( '/\R+/', (string) $rows ) as $mof_row ) {
        $mof_row = trim( $mof_row );
        if ( '' === $mof_row ) {
            continue;
        }
        $mof_parts = array_map( 'trim', explode( '|', $mof_row, 2 ) );
        $mof_day   = $mof_parts[0] ?? '';
        $mof_time  = $mof_parts[1] ?? '';
        echo '<div class="orari-row"><span class="orari-row__day">' . wp_kses_post( $mof_day ) . '</span><span class="orari-row__time">' . wp_kses_post( $mof_time ) . '</span></div>';
    }
    echo '</div>';
}
endif;
?>
<section <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => 'section' ) ) ); ?>>
        <header class="section-head" data-reveal="">
          <p class="eyebrow"><?php echo wp_kses_post( $attributes['eyebrow'] ?? 'Orari' ); ?></p>
          <h2 class="section-title"><?php echo wp_kses_post( $attributes['title'] ?? 'Quando siamo aperti' ); ?></h2>
        </header>
        <div class="orari-table" data-reveal="">
          <?php
          mof_hours_block( $attributes['block1-title'] ?? '', $attributes['block1-rows'] ?? '' );
          mof_hours_block( $attributes['block2-title'] ?? '', $attributes['block2-rows'] ?? '' );
          ?>
        </div>
      </section>
