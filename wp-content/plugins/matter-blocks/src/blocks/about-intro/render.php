<?php
/**
 * Render dinamico del blocco about-intro.
 *
 * @var array    $attributes
 * @var string   $content
 * @var WP_Block $block
 */

if ( ! defined( 'ABSPATH' ) ) exit;

$mof_about_body = $attributes['body'] ?? "Primo paragrafo del corpo del testo.\nSecondo paragrafo del corpo del testo.";
?>
<section <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => 'section section--tint' ) ) ); ?>>
        <div class="about-grid" data-reveal="">
          <p class="about-lead"><?php echo wp_kses_post( $attributes['lead'] ?? 'Frase di apertura in evidenza.' ); ?></p>
          <div class="about-body">
            <?php
            foreach ( preg_split( '/\R+/', (string) $mof_about_body ) as $mof_para ) {
                $mof_para = trim( $mof_para );
                if ( '' === $mof_para ) {
                    continue;
                }
                echo '<p>' . wp_kses_post( $mof_para ) . '</p>';
            }
            ?>
          </div>
        </div>
      </section>
