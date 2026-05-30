<?php
/**
 * Render dinamico del blocco legal-page (layout .text-page).
 *
 * Header (eyebrow, titolo h1, intro, meta) + fino a 8 sezioni h2 + corpo HTML.
 * Il corpo accetta markup (p, ul/li, strong, a) filtrato con wp_kses_post.
 *
 * @var array    $attributes
 * @var string   $content
 * @var WP_Block $block
 */

if ( ! defined( 'ABSPATH' ) ) exit;

$mof_title_id = sanitize_html_class( $attributes['title-id'] ?? 'text-page-title' );

$mof_sections = array();
for ( $i = 1; $i <= 8; $i++ ) {
    if ( '' === trim( (string) ( $attributes[ "sec{$i}-heading" ] ?? '' ) ) ) {
        continue;
    }
    $mof_sections[] = array(
        'heading' => $attributes[ "sec{$i}-heading" ],
        'body'    => $attributes[ "sec{$i}-body" ] ?? '',
    );
}
?>
<section <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => 'section section--tint text-page' ) ) ); ?> aria-labelledby="<?php echo esc_attr( $mof_title_id ); ?>">
        <div class="text-page__inner">
          <header class="text-page__header">
            <p class="eyebrow"><?php echo wp_kses_post( $attributes['eyebrow'] ?? 'Legal' ); ?></p>
            <h1 id="<?php echo esc_attr( $mof_title_id ); ?>" class="section-title text-page__title"><?php echo wp_kses_post( $attributes['title'] ?? '' ); ?></h1>
            <?php if ( '' !== trim( (string) ( $attributes['intro'] ?? '' ) ) ) : ?>
            <p class="text-page__intro"><?php echo wp_kses_post( $attributes['intro'] ); ?></p>
            <?php endif; ?>
            <?php if ( '' !== trim( (string) ( $attributes['meta'] ?? '' ) ) ) : ?>
            <p class="text-page__meta"><?php echo wp_kses_post( $attributes['meta'] ); ?></p>
            <?php endif; ?>
          </header>
          <div class="text-page__sections">
            <?php foreach ( $mof_sections as $mof_idx => $mof_sec ) :
                $mof_hid = 'text-page-sec-' . ( $mof_idx + 1 ) . '-heading'; ?>
            <section class="text-page__block" aria-labelledby="<?php echo esc_attr( $mof_hid ); ?>">
              <h2 id="<?php echo esc_attr( $mof_hid ); ?>" class="text-page__heading"><?php echo wp_kses_post( $mof_sec['heading'] ); ?></h2>
              <?php echo wp_kses_post( $mof_sec['body'] ); ?>
            </section>
            <?php endforeach; ?>
          </div>
        </div>
      </section>
