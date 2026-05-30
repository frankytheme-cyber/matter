import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextareaControl } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Editor del blocco matter/about-intro.
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
                    <TextareaControl
                        label={ __( 'Lead', 'matter-blocks' ) }
                        value={ attributes['lead'] || '' }
                        onChange={ ( v ) => setAttributes( { 'lead': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Body', 'matter-blocks' ) }
                        value={ attributes['body'] || '' }
                        onChange={ ( v ) => setAttributes( { 'body': v } ) }
                    />
                </PanelBody>
            </InspectorControls>
            <div { ...blockProps }>
                <ServerSideRender block="matter/about-intro" attributes={ attributes } />
            </div>
        </>
    );
}
