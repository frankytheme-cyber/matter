import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Editor del blocco matter/intro.
 *
 * Anteprima fedele al frontend via ServerSideRender (render.php).
 * Testi, immagini e link si modificano nei pannelli della barra laterale.
 * Generato da scripts/gen-editor.mjs — non modificare a mano.
 */
export default function Edit( { attributes, setAttributes } ) {
    const blockProps = useBlockProps();

    return (
        <>
            <InspectorControls>
                <PanelBody title={ __( 'Testi', 'matter-blocks' ) } initialOpen={ true }>
                    <TextareaControl
                        label={ __( 'Body', 'matter-blocks' ) }
                        value={ attributes['body'] || '' }
                        onChange={ ( v ) => setAttributes( { 'body': v } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Link', 'matter-blocks' ) } initialOpen={ false }>
                    <TextControl
                        label={ __( 'Cta — URL', 'matter-blocks' ) }
                        value={ attributes['cta']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'cta': { ...attributes['cta'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Cta — Testo', 'matter-blocks' ) }
                        value={ attributes['cta']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'cta': { ...attributes['cta'], label: v } } ) }
                    />
                    <TextControl
                        label={ __( 'Cta — Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['cta']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'cta': { ...attributes['cta'], target } } ) }
                    />
                </PanelBody>
            </InspectorControls>
            <div { ...blockProps }>
                <ServerSideRender block="matter/intro" attributes={ attributes } />
            </div>
        </>
    );
}
