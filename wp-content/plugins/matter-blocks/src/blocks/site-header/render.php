<?php
/**
 * Render dinamico del blocco site-header.
 *
 * La navigazione principale (Chi Siamo, Servizi+sottovoci, Sedi+sottovoci,
 * Contatti) è gestita da un menu WordPress (location "primary", Aspetto → Menu)
 * tramite Matter_Nav_Walker. Restano fissi nel blocco: il pulsante "Inizia Ora"
 * (nav-cta) e il bottone "Lounge" (nav-lounge) a destra.
 *
 * @var array    $attributes
 * @var string   $content
 * @var WP_Block $block
 */

if ( ! defined( 'ABSPATH' ) ) exit;

$mof_cta_url    = esc_url( home_url( '/contatti/' ) . '#scrivici' );
$mof_lounge_url = esc_url( home_url( '/matter-lounge/' ) );
$mof_logo_src   = esc_url( get_template_directory_uri() . '/assets/img/logo-matter.svg' );
$mof_lounge_src = esc_url( get_template_directory_uri() . '/assets/img/lounge-mark.svg' );

$mof_menu_args = array(
    'theme_location' => 'primary',
    'container'      => false,
    'items_wrap'     => '%3$s',
    'depth'          => 2,
    'fallback_cb'    => false,
);
?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes( array() ) ); ?>>
          <a class="sr-only" href="#main">Vai al contenuto</a>

          <header class="site-header">
            <div class="nav-bar">
              <a class="nav-logo" href="<?php echo esc_url( home_url( '/' ) ); ?>" aria-label="Matter of Fitness — Home"><img src="<?php echo $mof_logo_src; ?>" alt="Matter of Fitness"></a>
              <nav class="nav-list" aria-label="Principale">
                <?php
                if ( class_exists( 'Matter_Nav_Walker' ) ) {
                    wp_nav_menu( array_merge( $mof_menu_args, array( 'walker' => new Matter_Nav_Walker( 'desktop' ) ) ) );
                }
                ?>
                <a class="nav-cta" href="<?php echo $mof_cta_url; ?>">Inizia Ora</a>
                <a class="nav-lounge" href="<?php echo $mof_lounge_url; ?>" aria-label="Matter Lounge"><img class="nav-lounge__mark" src="<?php echo $mof_lounge_src; ?>" alt="Matter">Lounge</a>
              </nav>
              <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="menu-mobile" aria-label="Apri menu">
                <span></span><span></span><span></span>
              </button>
            </div>
          </header>

          <div id="menu-mobile" class="mobile-nav" hidden="">
            <?php
            if ( class_exists( 'Matter_Nav_Walker' ) ) {
                wp_nav_menu( array_merge( $mof_menu_args, array( 'walker' => new Matter_Nav_Walker( 'mobile' ) ) ) );
            }
            ?>
            <a class="nav-lounge" href="<?php echo $mof_lounge_url; ?>" aria-label="Matter Lounge"><img class="nav-lounge__mark" src="<?php echo $mof_lounge_src; ?>" alt="Matter">Lounge</a>
            <a class="nav-cta" href="<?php echo $mof_cta_url; ?>">Inizia Ora</a>
          </div>
        </div>
