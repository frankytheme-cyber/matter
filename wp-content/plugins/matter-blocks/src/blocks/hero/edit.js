import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl, Button } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Editor del blocco matter/hero.
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
                <PanelBody title={ __( 'Immagini', 'matter-blocks' ) } initialOpen={ false }>
                    <p className="components-base-control__label">Image</p>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={ ( m ) => setAttributes( { 'image': { id: m.id, url: m.url, alt: m.alt || '' } } ) }
                            allowedTypes={ [ 'image' ] }
                            value={ attributes['image']?.id }
                            render={ ( { open } ) => (
                                <Button variant="secondary" onClick={ open }>
                                    { attributes['image']?.url ? __( 'Cambia immagine', 'matter-blocks' ) : __( 'Seleziona immagine', 'matter-blocks' ) }
                                </Button>
                            ) }
                        />
                    </MediaUploadCheck>
                    { attributes['image']?.url && (
                        <img src={ attributes['image'].url } alt="" style={ { maxWidth: '100%', height: 'auto', marginTop: '8px', borderRadius: '4px' } } />
                    ) }
                    <TextControl
                        label={ __( 'Image — Testo alternativo', 'matter-blocks' ) }
                        value={ attributes['image']?.alt || '' }
                        onChange={ ( alt ) => setAttributes( { 'image': { ...attributes['image'], alt } } ) }
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
                <ServerSideRender block="matter/hero" attributes={ attributes } />
            </div>
        </>
    );
}
