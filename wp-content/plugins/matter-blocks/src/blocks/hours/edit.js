import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Editor del blocco matter/hours.
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
                        label={ __( 'Eyebrow', 'matter-blocks' ) }
                        value={ attributes['eyebrow'] || '' }
                        onChange={ ( v ) => setAttributes( { 'eyebrow': v } ) }
                    />
                    <TextControl
                        label={ __( 'Title', 'matter-blocks' ) }
                        value={ attributes['title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'title': v } ) }
                    />
                    <TextControl
                        label={ __( 'Block1 Title', 'matter-blocks' ) }
                        value={ attributes['block1-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'block1-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Block1 Rows', 'matter-blocks' ) }
                        value={ attributes['block1-rows'] || '' }
                        onChange={ ( v ) => setAttributes( { 'block1-rows': v } ) }
                    />
                    <TextControl
                        label={ __( 'Block2 Title', 'matter-blocks' ) }
                        value={ attributes['block2-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'block2-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Block2 Rows', 'matter-blocks' ) }
                        value={ attributes['block2-rows'] || '' }
                        onChange={ ( v ) => setAttributes( { 'block2-rows': v } ) }
                    />
                </PanelBody>
            </InspectorControls>
            <div { ...blockProps }>
                <ServerSideRender block="matter/hours" attributes={ attributes } />
            </div>
        </>
    );
}
