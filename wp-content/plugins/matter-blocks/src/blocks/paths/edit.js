import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl, Button } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Editor del blocco matter/paths.
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
                        label={ __( 'Lead', 'matter-blocks' ) }
                        value={ attributes['lead'] || '' }
                        onChange={ ( v ) => setAttributes( { 'lead': v } ) }
                    />
                    <TextControl
                        label={ __( 'Row1 Kicker', 'matter-blocks' ) }
                        value={ attributes['row1-kicker'] || '' }
                        onChange={ ( v ) => setAttributes( { 'row1-kicker': v } ) }
                    />
                    <TextControl
                        label={ __( 'Row1 Title', 'matter-blocks' ) }
                        value={ attributes['row1-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'row1-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Row1 Desc', 'matter-blocks' ) }
                        value={ attributes['row1-desc'] || '' }
                        onChange={ ( v ) => setAttributes( { 'row1-desc': v } ) }
                    />
                    <TextControl
                        label={ __( 'Row2 Kicker', 'matter-blocks' ) }
                        value={ attributes['row2-kicker'] || '' }
                        onChange={ ( v ) => setAttributes( { 'row2-kicker': v } ) }
                    />
                    <TextControl
                        label={ __( 'Row2 Title', 'matter-blocks' ) }
                        value={ attributes['row2-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'row2-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Row2 Desc', 'matter-blocks' ) }
                        value={ attributes['row2-desc'] || '' }
                        onChange={ ( v ) => setAttributes( { 'row2-desc': v } ) }
                    />
                    <TextControl
                        label={ __( 'Cta Kicker', 'matter-blocks' ) }
                        value={ attributes['cta-kicker'] || '' }
                        onChange={ ( v ) => setAttributes( { 'cta-kicker': v } ) }
                    />
                    <TextControl
                        label={ __( 'Cta Title', 'matter-blocks' ) }
                        value={ attributes['cta-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'cta-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Cta Desc', 'matter-blocks' ) }
                        value={ attributes['cta-desc'] || '' }
                        onChange={ ( v ) => setAttributes( { 'cta-desc': v } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Immagini', 'matter-blocks' ) } initialOpen={ false }>
                    <p className="components-base-control__label">Row1 Img</p>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={ ( m ) => setAttributes( { 'row1-img': { id: m.id, url: m.url, alt: m.alt || '' } } ) }
                            allowedTypes={ [ 'image' ] }
                            value={ attributes['row1-img']?.id }
                            render={ ( { open } ) => (
                                <Button variant="secondary" onClick={ open }>
                                    { attributes['row1-img']?.url ? __( 'Cambia immagine', 'matter-blocks' ) : __( 'Seleziona immagine', 'matter-blocks' ) }
                                </Button>
                            ) }
                        />
                    </MediaUploadCheck>
                    { attributes['row1-img']?.url && (
                        <img src={ attributes['row1-img'].url } alt="" style={ { maxWidth: '100%', height: 'auto', marginTop: '8px', borderRadius: '4px' } } />
                    ) }
                    <TextControl
                        label={ __( 'Row1 Img — Testo alternativo', 'matter-blocks' ) }
                        value={ attributes['row1-img']?.alt || '' }
                        onChange={ ( alt ) => setAttributes( { 'row1-img': { ...attributes['row1-img'], alt } } ) }
                    />
                    <p className="components-base-control__label">Row2 Img</p>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={ ( m ) => setAttributes( { 'row2-img': { id: m.id, url: m.url, alt: m.alt || '' } } ) }
                            allowedTypes={ [ 'image' ] }
                            value={ attributes['row2-img']?.id }
                            render={ ( { open } ) => (
                                <Button variant="secondary" onClick={ open }>
                                    { attributes['row2-img']?.url ? __( 'Cambia immagine', 'matter-blocks' ) : __( 'Seleziona immagine', 'matter-blocks' ) }
                                </Button>
                            ) }
                        />
                    </MediaUploadCheck>
                    { attributes['row2-img']?.url && (
                        <img src={ attributes['row2-img'].url } alt="" style={ { maxWidth: '100%', height: 'auto', marginTop: '8px', borderRadius: '4px' } } />
                    ) }
                    <TextControl
                        label={ __( 'Row2 Img — Testo alternativo', 'matter-blocks' ) }
                        value={ attributes['row2-img']?.alt || '' }
                        onChange={ ( alt ) => setAttributes( { 'row2-img': { ...attributes['row2-img'], alt } } ) }
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
                <ServerSideRender block="matter/paths" attributes={ attributes } />
            </div>
        </>
    );
}
