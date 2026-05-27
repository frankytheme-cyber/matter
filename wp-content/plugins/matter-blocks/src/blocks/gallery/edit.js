import { __ } from '@wordpress/i18n';
import { MediaUpload, MediaUploadCheck, RichText, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Button, TextControl } from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
    const blockProps = useBlockProps( { className: 'section' } );

    return (
        <>
            <InspectorControls>
                <PanelBody title={ __( 'Img 1', 'matter-blocks' ) } initialOpen={ true }>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={ ( media ) => setAttributes( { 'img-1': { id: media.id, url: media.url, alt: media.alt || '' } } ) }
                            allowedTypes={ [ 'image' ] }
                            value={ attributes['img-1']?.id }
                            render={ ( { open } ) => (
                                <Button variant="secondary" onClick={ open }>
                                    { attributes['img-1']?.url ? __( 'Cambia media', 'matter-blocks' ) : __( 'Seleziona media', 'matter-blocks' ) }
                                </Button>
                            ) }
                        />
                    </MediaUploadCheck>
                </PanelBody>
                <PanelBody title={ __( 'Img 2', 'matter-blocks' ) } initialOpen={ true }>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={ ( media ) => setAttributes( { 'img-2': { id: media.id, url: media.url, alt: media.alt || '' } } ) }
                            allowedTypes={ [ 'image' ] }
                            value={ attributes['img-2']?.id }
                            render={ ( { open } ) => (
                                <Button variant="secondary" onClick={ open }>
                                    { attributes['img-2']?.url ? __( 'Cambia media', 'matter-blocks' ) : __( 'Seleziona media', 'matter-blocks' ) }
                                </Button>
                            ) }
                        />
                    </MediaUploadCheck>
                </PanelBody>
                <PanelBody title={ __( 'Img 3', 'matter-blocks' ) } initialOpen={ true }>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={ ( media ) => setAttributes( { 'img-3': { id: media.id, url: media.url, alt: media.alt || '' } } ) }
                            allowedTypes={ [ 'image' ] }
                            value={ attributes['img-3']?.id }
                            render={ ( { open } ) => (
                                <Button variant="secondary" onClick={ open }>
                                    { attributes['img-3']?.url ? __( 'Cambia media', 'matter-blocks' ) : __( 'Seleziona media', 'matter-blocks' ) }
                                </Button>
                            ) }
                        />
                    </MediaUploadCheck>
                </PanelBody>
                <PanelBody title={ __( 'Img 4', 'matter-blocks' ) } initialOpen={ true }>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={ ( media ) => setAttributes( { 'img-4': { id: media.id, url: media.url, alt: media.alt || '' } } ) }
                            allowedTypes={ [ 'image' ] }
                            value={ attributes['img-4']?.id }
                            render={ ( { open } ) => (
                                <Button variant="secondary" onClick={ open }>
                                    { attributes['img-4']?.url ? __( 'Cambia media', 'matter-blocks' ) : __( 'Seleziona media', 'matter-blocks' ) }
                                </Button>
                            ) }
                        />
                    </MediaUploadCheck>
                </PanelBody>
            </InspectorControls>
            <section { ...blockProps }>
            <RichText
                tagName="p"
                value={ attributes.eyebrow }
                onChange={ ( v ) => setAttributes( { eyebrow: v } ) }
                placeholder={ __( 'eyebrow…', 'matter-blocks' ) }
            />
            <RichText
                tagName="h2"
                value={ attributes.title }
                onChange={ ( v ) => setAttributes( { title: v } ) }
                placeholder={ __( 'title…', 'matter-blocks' ) }
            />
            <RichText
                tagName="p"
                value={ attributes.lead }
                onChange={ ( v ) => setAttributes( { lead: v } ) }
                placeholder={ __( 'lead…', 'matter-blocks' ) }
            />
            { attributes['img-1']?.url && (
                <img src={ attributes['img-1'].url } alt={ attributes['img-1'].alt || '' } />
            ) }
            <RichText
                tagName="p"
                value={ attributes['label-1'] }
                onChange={ ( v ) => setAttributes( { 'label-1': v } ) }
                placeholder={ __( 'label-1…', 'matter-blocks' ) }
            />
            { attributes['img-2']?.url && (
                <img src={ attributes['img-2'].url } alt={ attributes['img-2'].alt || '' } />
            ) }
            <RichText
                tagName="p"
                value={ attributes['label-2'] }
                onChange={ ( v ) => setAttributes( { 'label-2': v } ) }
                placeholder={ __( 'label-2…', 'matter-blocks' ) }
            />
            { attributes['img-3']?.url && (
                <img src={ attributes['img-3'].url } alt={ attributes['img-3'].alt || '' } />
            ) }
            <RichText
                tagName="p"
                value={ attributes['label-3'] }
                onChange={ ( v ) => setAttributes( { 'label-3': v } ) }
                placeholder={ __( 'label-3…', 'matter-blocks' ) }
            />
            { attributes['img-4']?.url && (
                <img src={ attributes['img-4'].url } alt={ attributes['img-4'].alt || '' } />
            ) }
            <RichText
                tagName="p"
                value={ attributes['label-4'] }
                onChange={ ( v ) => setAttributes( { 'label-4': v } ) }
                placeholder={ __( 'label-4…', 'matter-blocks' ) }
            />
            <RichText
                tagName="button"
                value={ attributes['spazi-lightbox-close'] }
                onChange={ ( v ) => setAttributes( { 'spazi-lightbox-close': v } ) }
                placeholder={ __( 'spazi-lightbox-close…', 'matter-blocks' ) }
            />
            <RichText
                tagName="button"
                value={ attributes['spazi-lightbox-prev'] }
                onChange={ ( v ) => setAttributes( { 'spazi-lightbox-prev': v } ) }
                placeholder={ __( 'spazi-lightbox-prev…', 'matter-blocks' ) }
            />
            <RichText
                tagName="button"
                value={ attributes['spazi-lightbox-next'] }
                onChange={ ( v ) => setAttributes( { 'spazi-lightbox-next': v } ) }
                placeholder={ __( 'spazi-lightbox-next…', 'matter-blocks' ) }
            />
            </section>
        </>
    );
}
