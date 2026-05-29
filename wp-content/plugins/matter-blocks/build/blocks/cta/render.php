<?php
/**
 * Render dinamico del blocco cta (banda CTA su fondo scuro).
 *
 * @var array    $attributes
 * @var string   $content
 * @var WP_Block $block
 */

if ( ! defined( 'ABSPATH' ) ) exit;

$mof_p_url    = $attributes['cta-primary']['url'] ?? '';
$mof_p_label  = $attributes['cta-primary']['label'] ?? '';
$mof_p_target = ! empty( $attributes['cta-primary']['target'] ) ? ' target="' . esc_attr( $attributes['cta-primary']['target'] ) . '" rel="noopener"' : '';
$mof_s_url    = $attributes['cta-secondary']['url'] ?? '';
$mof_s_label  = $attributes['cta-secondary']['label'] ?? '';
$mof_s_target = ! empty( $attributes['cta-secondary']['target'] ) ? ' target="' . esc_attr( $attributes['cta-secondary']['target'] ) . '" rel="noopener"' : '';
$mof_has_actions = ! empty( $mof_p_url ) || ! empty( $mof_s_url );
?>
<section <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => 'section section--dark' ) ) ); ?>>
        <div class="u-cta-stack" data-reveal="">
          <h2 class="section-title u-on-dark"><?php echo wp_kses_post( $attributes['title'] ?? 'Titolo della call to action' ); ?></h2>
          <p class="section-lead u-on-dark-muted"><?php echo wp_kses_post( $attributes['lead'] ?? 'Testo che invita le persone a compiere un\'azione.' ); ?></p>
          <?php if ( $mof_has_actions ) : ?>
          <div class="u-cta-actions">
            <?php if ( ! empty( $mof_p_url ) ) : ?>
            <a class="btn-pill btn-pill--light" href="<?php echo esc_url( $mof_p_url ); ?>"<?php echo $mof_p_target; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>><?php echo esc_html( $mof_p_label ); ?></a>
            <?php endif; ?>
            <?php if ( ! empty( $mof_s_url ) ) : ?>
            <a class="btn-pill btn-pill--outline" href="<?php echo esc_url( $mof_s_url ); ?>"<?php echo $mof_s_target; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>><?php echo esc_html( $mof_s_label ); ?></a>
            <?php endif; ?>
          </div>
          <?php endif; ?>
        </div>
      </section>
