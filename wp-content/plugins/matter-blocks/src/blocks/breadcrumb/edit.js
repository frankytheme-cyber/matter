import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Editor del blocco matter/breadcrumb.
 *
 * Anteprima fedele al frontend via ServerSideRender (render.php).
 * Testi, immagini e link si modificano nei pannelli della barra laterale.
 * Generato da scripts/gen-editor.mjs — non modificare a mano.
 */
export default function Edit( { attributes, setAttributes } ) {
    // 'mof-ssr-preview': nell'editor disattiva l'interazione su link/form/iframe
    // dell'anteprima ServerSideRender (vedi editor.css) → cliccare un link non
    // naviga via, il blocco resta selezionabile.
    const blockProps = useBlockProps( { className: 'mof-ssr-preview' } );

    return (
        <>
            <InspectorControls>
                <PanelBody title={ __( 'Testi', 'matter-blocks' ) } initialOpen={ true }>
                    <TextControl
                        label={ __( 'Home Url', 'matter-blocks' ) }
                        value={ attributes['home-url'] || '' }
                        onChange={ ( v ) => setAttributes( { 'home-url': v } ) }
                    />
                    <TextControl
                        label={ __( 'Parent Label', 'matter-blocks' ) }
                        value={ attributes['parent-label'] || '' }
                        onChange={ ( v ) => setAttributes( { 'parent-label': v } ) }
                    />
                    <TextControl
                        label={ __( 'Parent Url', 'matter-blocks' ) }
                        value={ attributes['parent-url'] || '' }
                        onChange={ ( v ) => setAttributes( { 'parent-url': v } ) }
                    />
                    <TextControl
                        label={ __( 'Current', 'matter-blocks' ) }
                        value={ attributes['current'] || '' }
                        onChange={ ( v ) => setAttributes( { 'current': v } ) }
                    />
                </PanelBody>
            </InspectorControls>
            <div { ...blockProps }>
                <ServerSideRender block="matter/breadcrumb" attributes={ attributes } />
            </div>
        </>
    );
}
