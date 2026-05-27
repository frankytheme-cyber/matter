import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Editor del blocco matter/cta.
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
                        label={ __( 'Title', 'matter-blocks' ) }
                        value={ attributes['title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Lead', 'matter-blocks' ) }
                        value={ attributes['lead'] || '' }
                        onChange={ ( v ) => setAttributes( { 'lead': v } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Link', 'matter-blocks' ) } initialOpen={ false }>
                    <TextControl
                        label={ __( 'Cta Primary — URL', 'matter-blocks' ) }
                        value={ attributes['cta-primary']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'cta-primary': { ...attributes['cta-primary'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Cta Primary — Testo', 'matter-blocks' ) }
                        value={ attributes['cta-primary']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'cta-primary': { ...attributes['cta-primary'], label: v } } ) }
                    />
                    <TextControl
                        label={ __( 'Cta Primary — Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['cta-primary']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'cta-primary': { ...attributes['cta-primary'], target } } ) }
                    />
                    <TextControl
                        label={ __( 'Cta Secondary — URL', 'matter-blocks' ) }
                        value={ attributes['cta-secondary']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'cta-secondary': { ...attributes['cta-secondary'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Cta Secondary — Testo', 'matter-blocks' ) }
                        value={ attributes['cta-secondary']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'cta-secondary': { ...attributes['cta-secondary'], label: v } } ) }
                    />
                    <TextControl
                        label={ __( 'Cta Secondary — Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['cta-secondary']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'cta-secondary': { ...attributes['cta-secondary'], target } } ) }
                    />
                </PanelBody>
            </InspectorControls>
            <div { ...blockProps }>
                <ServerSideRender block="matter/cta" attributes={ attributes } />
            </div>
        </>
    );
}
