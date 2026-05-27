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
    const blockProps = useBlockProps();

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
