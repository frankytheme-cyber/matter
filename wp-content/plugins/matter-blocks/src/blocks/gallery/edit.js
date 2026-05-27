import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl, Button } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Editor del blocco matter/gallery.
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
                    <TextControl
                        label={ __( 'Label 1', 'matter-blocks' ) }
                        value={ attributes['label-1'] || '' }
                        onChange={ ( v ) => setAttributes( { 'label-1': v } ) }
                    />
                    <TextControl
                        label={ __( 'Label 2', 'matter-blocks' ) }
                        value={ attributes['label-2'] || '' }
                        onChange={ ( v ) => setAttributes( { 'label-2': v } ) }
                    />
                    <TextControl
                        label={ __( 'Label 3', 'matter-blocks' ) }
                        value={ attributes['label-3'] || '' }
                        onChange={ ( v ) => setAttributes( { 'label-3': v } ) }
                    />
                    <TextControl
                        label={ __( 'Label 4', 'matter-blocks' ) }
                        value={ attributes['label-4'] || '' }
                        onChange={ ( v ) => setAttributes( { 'label-4': v } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Immagini', 'matter-blocks' ) } initialOpen={ false }>
                    <p className="components-base-control__label">Img 1</p>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={ ( m ) => setAttributes( { 'img-1': { id: m.id, url: m.url, alt: m.alt || '' } } ) }
                            allowedTypes={ [ 'image' ] }
                            value={ attributes['img-1']?.id }
                            render={ ( { open } ) => (
                                <Button variant="secondary" onClick={ open }>
                                    { attributes['img-1']?.url ? __( 'Cambia immagine', 'matter-blocks' ) : __( 'Seleziona immagine', 'matter-blocks' ) }
                                </Button>
                            ) }
                        />
                    </MediaUploadCheck>
                    { attributes['img-1']?.url && (
                        <img src={ attributes['img-1'].url } alt="" style={ { maxWidth: '100%', height: 'auto', marginTop: '8px', borderRadius: '4px' } } />
                    ) }
                    <TextControl
                        label={ __( 'Img 1 — Testo alternativo', 'matter-blocks' ) }
                        value={ attributes['img-1']?.alt || '' }
                        onChange={ ( alt ) => setAttributes( { 'img-1': { ...attributes['img-1'], alt } } ) }
                    />
                    <p className="components-base-control__label">Img 2</p>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={ ( m ) => setAttributes( { 'img-2': { id: m.id, url: m.url, alt: m.alt || '' } } ) }
                            allowedTypes={ [ 'image' ] }
                            value={ attributes['img-2']?.id }
                            render={ ( { open } ) => (
                                <Button variant="secondary" onClick={ open }>
                                    { attributes['img-2']?.url ? __( 'Cambia immagine', 'matter-blocks' ) : __( 'Seleziona immagine', 'matter-blocks' ) }
                                </Button>
                            ) }
                        />
                    </MediaUploadCheck>
                    { attributes['img-2']?.url && (
                        <img src={ attributes['img-2'].url } alt="" style={ { maxWidth: '100%', height: 'auto', marginTop: '8px', borderRadius: '4px' } } />
                    ) }
                    <TextControl
                        label={ __( 'Img 2 — Testo alternativo', 'matter-blocks' ) }
                        value={ attributes['img-2']?.alt || '' }
                        onChange={ ( alt ) => setAttributes( { 'img-2': { ...attributes['img-2'], alt } } ) }
                    />
                    <p className="components-base-control__label">Img 3</p>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={ ( m ) => setAttributes( { 'img-3': { id: m.id, url: m.url, alt: m.alt || '' } } ) }
                            allowedTypes={ [ 'image' ] }
                            value={ attributes['img-3']?.id }
                            render={ ( { open } ) => (
                                <Button variant="secondary" onClick={ open }>
                                    { attributes['img-3']?.url ? __( 'Cambia immagine', 'matter-blocks' ) : __( 'Seleziona immagine', 'matter-blocks' ) }
                                </Button>
                            ) }
                        />
                    </MediaUploadCheck>
                    { attributes['img-3']?.url && (
                        <img src={ attributes['img-3'].url } alt="" style={ { maxWidth: '100%', height: 'auto', marginTop: '8px', borderRadius: '4px' } } />
                    ) }
                    <TextControl
                        label={ __( 'Img 3 — Testo alternativo', 'matter-blocks' ) }
                        value={ attributes['img-3']?.alt || '' }
                        onChange={ ( alt ) => setAttributes( { 'img-3': { ...attributes['img-3'], alt } } ) }
                    />
                    <p className="components-base-control__label">Img 4</p>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={ ( m ) => setAttributes( { 'img-4': { id: m.id, url: m.url, alt: m.alt || '' } } ) }
                            allowedTypes={ [ 'image' ] }
                            value={ attributes['img-4']?.id }
                            render={ ( { open } ) => (
                                <Button variant="secondary" onClick={ open }>
                                    { attributes['img-4']?.url ? __( 'Cambia immagine', 'matter-blocks' ) : __( 'Seleziona immagine', 'matter-blocks' ) }
                                </Button>
                            ) }
                        />
                    </MediaUploadCheck>
                    { attributes['img-4']?.url && (
                        <img src={ attributes['img-4'].url } alt="" style={ { maxWidth: '100%', height: 'auto', marginTop: '8px', borderRadius: '4px' } } />
                    ) }
                    <TextControl
                        label={ __( 'Img 4 — Testo alternativo', 'matter-blocks' ) }
                        value={ attributes['img-4']?.alt || '' }
                        onChange={ ( alt ) => setAttributes( { 'img-4': { ...attributes['img-4'], alt } } ) }
                    />
                </PanelBody>
            </InspectorControls>
            <div { ...blockProps }>
                <ServerSideRender block="matter/gallery" attributes={ attributes } />
            </div>
        </>
    );
}
