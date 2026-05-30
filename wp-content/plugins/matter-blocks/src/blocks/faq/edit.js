import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Editor del blocco matter/faq.
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
                    <TextareaControl
                        label={ __( 'Q1', 'matter-blocks' ) }
                        value={ attributes['q1'] || '' }
                        onChange={ ( v ) => setAttributes( { 'q1': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'A1', 'matter-blocks' ) }
                        value={ attributes['a1'] || '' }
                        onChange={ ( v ) => setAttributes( { 'a1': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Q2', 'matter-blocks' ) }
                        value={ attributes['q2'] || '' }
                        onChange={ ( v ) => setAttributes( { 'q2': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'A2', 'matter-blocks' ) }
                        value={ attributes['a2'] || '' }
                        onChange={ ( v ) => setAttributes( { 'a2': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Q3', 'matter-blocks' ) }
                        value={ attributes['q3'] || '' }
                        onChange={ ( v ) => setAttributes( { 'q3': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'A3', 'matter-blocks' ) }
                        value={ attributes['a3'] || '' }
                        onChange={ ( v ) => setAttributes( { 'a3': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Q4', 'matter-blocks' ) }
                        value={ attributes['q4'] || '' }
                        onChange={ ( v ) => setAttributes( { 'q4': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'A4', 'matter-blocks' ) }
                        value={ attributes['a4'] || '' }
                        onChange={ ( v ) => setAttributes( { 'a4': v } ) }
                    />
                </PanelBody>
            </InspectorControls>
            <div { ...blockProps }>
                <ServerSideRender block="matter/faq" attributes={ attributes } />
            </div>
        </>
    );
}
