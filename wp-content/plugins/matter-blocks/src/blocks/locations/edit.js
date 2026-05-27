import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl, Button } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Editor del blocco matter/locations.
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
                        label={ __( 'Card1 Tag', 'matter-blocks' ) }
                        value={ attributes['card1-tag'] || '' }
                        onChange={ ( v ) => setAttributes( { 'card1-tag': v } ) }
                    />
                    <TextControl
                        label={ __( 'Card1 Name', 'matter-blocks' ) }
                        value={ attributes['card1-name'] || '' }
                        onChange={ ( v ) => setAttributes( { 'card1-name': v } ) }
                    />
                    <TextControl
                        label={ __( 'Card2 Tag', 'matter-blocks' ) }
                        value={ attributes['card2-tag'] || '' }
                        onChange={ ( v ) => setAttributes( { 'card2-tag': v } ) }
                    />
                    <TextControl
                        label={ __( 'Card2 Name', 'matter-blocks' ) }
                        value={ attributes['card2-name'] || '' }
                        onChange={ ( v ) => setAttributes( { 'card2-name': v } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Immagini', 'matter-blocks' ) } initialOpen={ false }>
                    <p className="components-base-control__label">Card1 Img</p>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={ ( m ) => setAttributes( { 'card1-img': { id: m.id, url: m.url, alt: m.alt || '' } } ) }
                            allowedTypes={ [ 'image' ] }
                            value={ attributes['card1-img']?.id }
                            render={ ( { open } ) => (
                                <Button variant="secondary" onClick={ open }>
                                    { attributes['card1-img']?.url ? __( 'Cambia immagine', 'matter-blocks' ) : __( 'Seleziona immagine', 'matter-blocks' ) }
                                </Button>
                            ) }
                        />
                    </MediaUploadCheck>
                    { attributes['card1-img']?.url && (
                        <img src={ attributes['card1-img'].url } alt="" style={ { maxWidth: '100%', height: 'auto', marginTop: '8px', borderRadius: '4px' } } />
                    ) }
                    <TextControl
                        label={ __( 'Card1 Img — Testo alternativo', 'matter-blocks' ) }
                        value={ attributes['card1-img']?.alt || '' }
                        onChange={ ( alt ) => setAttributes( { 'card1-img': { ...attributes['card1-img'], alt } } ) }
                    />
                    <p className="components-base-control__label">Card2 Img</p>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={ ( m ) => setAttributes( { 'card2-img': { id: m.id, url: m.url, alt: m.alt || '' } } ) }
                            allowedTypes={ [ 'image' ] }
                            value={ attributes['card2-img']?.id }
                            render={ ( { open } ) => (
                                <Button variant="secondary" onClick={ open }>
                                    { attributes['card2-img']?.url ? __( 'Cambia immagine', 'matter-blocks' ) : __( 'Seleziona immagine', 'matter-blocks' ) }
                                </Button>
                            ) }
                        />
                    </MediaUploadCheck>
                    { attributes['card2-img']?.url && (
                        <img src={ attributes['card2-img'].url } alt="" style={ { maxWidth: '100%', height: 'auto', marginTop: '8px', borderRadius: '4px' } } />
                    ) }
                    <TextControl
                        label={ __( 'Card2 Img — Testo alternativo', 'matter-blocks' ) }
                        value={ attributes['card2-img']?.alt || '' }
                        onChange={ ( alt ) => setAttributes( { 'card2-img': { ...attributes['card2-img'], alt } } ) }
                    />
                </PanelBody>
            </InspectorControls>
            <div { ...blockProps }>
                <ServerSideRender block="matter/locations" attributes={ attributes } />
            </div>
        </>
    );
}
