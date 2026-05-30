import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Editor del blocco matter/timeline.
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
                        label={ __( 'Item1 Year', 'matter-blocks' ) }
                        value={ attributes['item1-year'] || '' }
                        onChange={ ( v ) => setAttributes( { 'item1-year': v } ) }
                    />
                    <TextControl
                        label={ __( 'Item1 Title', 'matter-blocks' ) }
                        value={ attributes['item1-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'item1-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Item1 Text', 'matter-blocks' ) }
                        value={ attributes['item1-text'] || '' }
                        onChange={ ( v ) => setAttributes( { 'item1-text': v } ) }
                    />
                    <TextControl
                        label={ __( 'Item2 Year', 'matter-blocks' ) }
                        value={ attributes['item2-year'] || '' }
                        onChange={ ( v ) => setAttributes( { 'item2-year': v } ) }
                    />
                    <TextControl
                        label={ __( 'Item2 Title', 'matter-blocks' ) }
                        value={ attributes['item2-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'item2-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Item2 Text', 'matter-blocks' ) }
                        value={ attributes['item2-text'] || '' }
                        onChange={ ( v ) => setAttributes( { 'item2-text': v } ) }
                    />
                    <TextControl
                        label={ __( 'Item3 Year', 'matter-blocks' ) }
                        value={ attributes['item3-year'] || '' }
                        onChange={ ( v ) => setAttributes( { 'item3-year': v } ) }
                    />
                    <TextControl
                        label={ __( 'Item3 Title', 'matter-blocks' ) }
                        value={ attributes['item3-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'item3-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Item3 Text', 'matter-blocks' ) }
                        value={ attributes['item3-text'] || '' }
                        onChange={ ( v ) => setAttributes( { 'item3-text': v } ) }
                    />
                    <TextControl
                        label={ __( 'Item4 Year', 'matter-blocks' ) }
                        value={ attributes['item4-year'] || '' }
                        onChange={ ( v ) => setAttributes( { 'item4-year': v } ) }
                    />
                    <TextControl
                        label={ __( 'Item4 Title', 'matter-blocks' ) }
                        value={ attributes['item4-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'item4-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Item4 Text', 'matter-blocks' ) }
                        value={ attributes['item4-text'] || '' }
                        onChange={ ( v ) => setAttributes( { 'item4-text': v } ) }
                    />
                </PanelBody>
            </InspectorControls>
            <div { ...blockProps }>
                <ServerSideRender block="matter/timeline" attributes={ attributes } />
            </div>
        </>
    );
}
