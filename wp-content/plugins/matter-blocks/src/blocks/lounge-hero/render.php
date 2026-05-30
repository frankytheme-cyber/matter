<?php
/**
 * Render dinamico del blocco lounge-hero (hero immersivo Matter Lounge).
 *
 * Il titolo viene spezzato in parole (.word) per lo stile; l'ultima parola
 * accentata è in `accent-word`. Il whisper ha data-word-reveal (animato da main.js).
 *
 * @var array    $attributes
 * @var string   $content
 * @var WP_Block $block
 */

if ( ! defined( 'ABSPATH' ) ) exit;

$mof_img    = $attributes['image'] ?? array();
$mof_words  = preg_split( '/\s+/', trim( (string) ( $attributes['title'] ?? '' ) ) );
$mof_accent = trim( (string) ( $attributes['accent-word'] ?? '' ) );
?>
<section <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => 'page-hero-secondary page-hero-secondary--lounge' ) ) ); ?> aria-label="Matter Lounge">
        <div class="page-hero-secondary__shell">
          <div class="page-hero-secondary__grid">
            <div class="page-hero-secondary__copy">
              <p class="page-hero-secondary__eyebrow"><?php echo wp_kses_post( $attributes['eyebrow'] ?? 'Matter Lounge' ); ?></p>
              <h1 class="page-hero-secondary__title lng-title-words">
                <?php foreach ( $mof_words as $mof_w ) : if ( '' === $mof_w ) { continue; } ?>
                <span class="word"><?php echo esc_html( $mof_w ); ?></span>
                <?php endforeach; ?>
                <?php if ( '' !== $mof_accent ) : ?>
                <span class="word"><span class="accent"><?php echo esc_html( $mof_accent ); ?></span></span>
                <?php endif; ?>
              </h1>
              <p class="page-hero-secondary__lead"><?php echo wp_kses_post( $attributes['lead'] ?? '' ); ?></p>
            </div>
            <div class="page-hero-secondary__collage" aria-hidden="true">
              <img src="<?php echo esc_url( $mof_img['url'] ?? '' ); ?>" alt="" loading="eager" fetchpriority="high">
            </div>
          </div>
        </div>
        <?php if ( '' !== trim( (string) ( $attributes['whisper'] ?? '' ) ) ) : ?>
        <div class="lng-whisper">
          <p class="lng-whisper__text" data-word-reveal><?php echo wp_kses_post( $attributes['whisper'] ); ?></p>
        </div>
        <?php endif; ?>
      </section>
