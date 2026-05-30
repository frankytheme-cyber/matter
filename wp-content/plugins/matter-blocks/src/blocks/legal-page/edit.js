import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Editor del blocco matter/legal-page.
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
                        label={ __( 'Title Id', 'matter-blocks' ) }
                        value={ attributes['title-id'] || '' }
                        onChange={ ( v ) => setAttributes( { 'title-id': v } ) }
                    />
                    <TextControl
                        label={ __( 'Intro', 'matter-blocks' ) }
                        value={ attributes['intro'] || '' }
                        onChange={ ( v ) => setAttributes( { 'intro': v } ) }
                    />
                    <TextControl
                        label={ __( 'Meta', 'matter-blocks' ) }
                        value={ attributes['meta'] || '' }
                        onChange={ ( v ) => setAttributes( { 'meta': v } ) }
                    />
                    <TextControl
                        label={ __( 'Sec1 Heading', 'matter-blocks' ) }
                        value={ attributes['sec1-heading'] || '' }
                        onChange={ ( v ) => setAttributes( { 'sec1-heading': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Sec1 Body', 'matter-blocks' ) }
                        value={ attributes['sec1-body'] || '' }
                        onChange={ ( v ) => setAttributes( { 'sec1-body': v } ) }
                    />
                    <TextControl
                        label={ __( 'Sec2 Heading', 'matter-blocks' ) }
                        value={ attributes['sec2-heading'] || '' }
                        onChange={ ( v ) => setAttributes( { 'sec2-heading': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Sec2 Body', 'matter-blocks' ) }
                        value={ attributes['sec2-body'] || '' }
                        onChange={ ( v ) => setAttributes( { 'sec2-body': v } ) }
                    />
                    <TextControl
                        label={ __( 'Sec3 Heading', 'matter-blocks' ) }
                        value={ attributes['sec3-heading'] || '' }
                        onChange={ ( v ) => setAttributes( { 'sec3-heading': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Sec3 Body', 'matter-blocks' ) }
                        value={ attributes['sec3-body'] || '' }
                        onChange={ ( v ) => setAttributes( { 'sec3-body': v } ) }
                    />
                    <TextControl
                        label={ __( 'Sec4 Heading', 'matter-blocks' ) }
                        value={ attributes['sec4-heading'] || '' }
                        onChange={ ( v ) => setAttributes( { 'sec4-heading': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Sec4 Body', 'matter-blocks' ) }
                        value={ attributes['sec4-body'] || '' }
                        onChange={ ( v ) => setAttributes( { 'sec4-body': v } ) }
                    />
                    <TextControl
                        label={ __( 'Sec5 Heading', 'matter-blocks' ) }
                        value={ attributes['sec5-heading'] || '' }
                        onChange={ ( v ) => setAttributes( { 'sec5-heading': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Sec5 Body', 'matter-blocks' ) }
                        value={ attributes['sec5-body'] || '' }
                        onChange={ ( v ) => setAttributes( { 'sec5-body': v } ) }
                    />
                    <TextControl
                        label={ __( 'Sec6 Heading', 'matter-blocks' ) }
                        value={ attributes['sec6-heading'] || '' }
                        onChange={ ( v ) => setAttributes( { 'sec6-heading': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Sec6 Body', 'matter-blocks' ) }
                        value={ attributes['sec6-body'] || '' }
                        onChange={ ( v ) => setAttributes( { 'sec6-body': v } ) }
                    />
                    <TextControl
                        label={ __( 'Sec7 Heading', 'matter-blocks' ) }
                        value={ attributes['sec7-heading'] || '' }
                        onChange={ ( v ) => setAttributes( { 'sec7-heading': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Sec7 Body', 'matter-blocks' ) }
                        value={ attributes['sec7-body'] || '' }
                        onChange={ ( v ) => setAttributes( { 'sec7-body': v } ) }
                    />
                    <TextControl
                        label={ __( 'Sec8 Heading', 'matter-blocks' ) }
                        value={ attributes['sec8-heading'] || '' }
                        onChange={ ( v ) => setAttributes( { 'sec8-heading': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Sec8 Body', 'matter-blocks' ) }
                        value={ attributes['sec8-body'] || '' }
                        onChange={ ( v ) => setAttributes( { 'sec8-body': v } ) }
                    />
                </PanelBody>
            </InspectorControls>
            <div { ...blockProps }>
                <ServerSideRender block="matter/legal-page" attributes={ attributes } />
            </div>
        </>
    );
}
