import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Editor del blocco matter/lounge-number.
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
                    <TextControl
                        label={ __( 'Top Label', 'matter-blocks' ) }
                        value={ attributes['top-label'] || '' }
                        onChange={ ( v ) => setAttributes( { 'top-label': v } ) }
                    />
                    <TextControl
                        label={ __( 'Number', 'matter-blocks' ) }
                        value={ attributes['number'] || '' }
                        onChange={ ( v ) => setAttributes( { 'number': v } ) }
                    />
                    <TextControl
                        label={ __( 'Bottom Label', 'matter-blocks' ) }
                        value={ attributes['bottom-label'] || '' }
                        onChange={ ( v ) => setAttributes( { 'bottom-label': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Sub', 'matter-blocks' ) }
                        value={ attributes['sub'] || '' }
                        onChange={ ( v ) => setAttributes( { 'sub': v } ) }
                    />
                </PanelBody>
            </InspectorControls>
            <div { ...blockProps }>
                <ServerSideRender block="matter/lounge-number" attributes={ attributes } />
            </div>
        </>
    );
}
