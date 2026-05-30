import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Editor del blocco matter/map.
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
                        label={ __( 'Embed Url', 'matter-blocks' ) }
                        value={ attributes['embed-url'] || '' }
                        onChange={ ( v ) => setAttributes( { 'embed-url': v } ) }
                    />
                    <TextControl
                        label={ __( 'Info Kicker', 'matter-blocks' ) }
                        value={ attributes['info-kicker'] || '' }
                        onChange={ ( v ) => setAttributes( { 'info-kicker': v } ) }
                    />
                    <TextControl
                        label={ __( 'Info Title', 'matter-blocks' ) }
                        value={ attributes['info-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'info-title': v } ) }
                    />
                    <TextControl
                        label={ __( 'Address', 'matter-blocks' ) }
                        value={ attributes['address'] || '' }
                        onChange={ ( v ) => setAttributes( { 'address': v } ) }
                    />
                    <TextControl
                        label={ __( 'Phone', 'matter-blocks' ) }
                        value={ attributes['phone'] || '' }
                        onChange={ ( v ) => setAttributes( { 'phone': v } ) }
                    />
                    <TextControl
                        label={ __( 'Email', 'matter-blocks' ) }
                        value={ attributes['email'] || '' }
                        onChange={ ( v ) => setAttributes( { 'email': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Schedule', 'matter-blocks' ) }
                        value={ attributes['schedule'] || '' }
                        onChange={ ( v ) => setAttributes( { 'schedule': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Maps Url', 'matter-blocks' ) }
                        value={ attributes['maps-url'] || '' }
                        onChange={ ( v ) => setAttributes( { 'maps-url': v } ) }
                    />
                    <TextControl
                        label={ __( 'Maps Label', 'matter-blocks' ) }
                        value={ attributes['maps-label'] || '' }
                        onChange={ ( v ) => setAttributes( { 'maps-label': v } ) }
                    />
                </PanelBody>
            </InspectorControls>
            <div { ...blockProps }>
                <ServerSideRender block="matter/map" attributes={ attributes } />
            </div>
        </>
    );
}
