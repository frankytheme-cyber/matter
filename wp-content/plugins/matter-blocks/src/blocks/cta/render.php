<?php
/**
 * Render dinamico del blocco cta (banda CTA su fondo scuro).
 *
 * @var array    $attributes
 * @var string   $content
 * @var WP_Block $block
 */

if ( ! defined( 'ABSPATH' ) ) exit;

$mof_p_target = ! empty( $attributes['cta-primary']['target'] ) ? ' target="' . esc_attr( $attributes['cta-primary']['target'] ) . '" rel="noopener"' : '';
$mof_s_target = ! empty( $attributes['cta-secondary']['target'] ) ? ' target="' . esc_attr( $attributes['cta-secondary']['target'] ) . '" rel="noopener"' : '';
?>
<section <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => 'section section--dark' ) ) ); ?>>
        <div class="u-cta-stack" data-reveal="">
          <h2 class="section-title u-on-dark"><?php echo wp_kses_post( $attributes['title'] ?? 'Titolo della call to action' ); ?></h2>
          <p class="section-lead u-on-dark-muted"><?php echo wp_kses_post( $attributes['lead'] ?? 'Testo che invita le persone a compiere un\'azione.' ); ?></p>
          <div class="u-cta-actions">
            <a class="btn-pill btn-pill--light" href="<?php echo esc_url( $attributes['cta-primary']['url'] ?? '#' ); ?>"<?php echo $mof_p_target; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>><?php echo esc_html( $attributes['cta-primary']['label'] ?? 'Pulsante primario' ); ?></a>
            <a class="btn-pill btn-pill--outline" href="<?php echo esc_url( $attributes['cta-secondary']['url'] ?? '#' ); ?>"<?php echo $mof_s_target; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>><?php echo esc_html( $attributes['cta-secondary']['label'] ?? 'Pulsante secondario' ); ?></a>
          </div>
        </div>
      </section>
