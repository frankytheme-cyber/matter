import { __ } from '@wordpress/i18n';
import { MediaUpload, MediaUploadCheck, RichText, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Button, TextControl } from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
    const blockProps = useBlockProps( { className: 'section section--dark' } );

    return (
        <>
            <InspectorControls>
                <PanelBody title={ __( 'Card1 Img', 'matter-blocks' ) } initialOpen={ true }>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={ ( media ) => setAttributes( { 'card1-img': { id: media.id, url: media.url, alt: media.alt || '' } } ) }
                            allowedTypes={ [ 'image' ] }
                            value={ attributes['card1-img']?.id }
                            render={ ( { open } ) => (
                                <Button variant="secondary" onClick={ open }>
                                    { attributes['card1-img']?.url ? __( 'Cambia media', 'matter-blocks' ) : __( 'Seleziona media', 'matter-blocks' ) }
                                </Button>
                            ) }
                        />
                    </MediaUploadCheck>
                </PanelBody>
                <PanelBody title={ __( 'Card2 Img', 'matter-blocks' ) } initialOpen={ true }>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={ ( media ) => setAttributes( { 'card2-img': { id: media.id, url: media.url, alt: media.alt || '' } } ) }
                            allowedTypes={ [ 'image' ] }
                            value={ attributes['card2-img']?.id }
                            render={ ( { open } ) => (
                                <Button variant="secondary" onClick={ open }>
                                    { attributes['card2-img']?.url ? __( 'Cambia media', 'matter-blocks' ) : __( 'Seleziona media', 'matter-blocks' ) }
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
            <RichText
                tagName="p"
                value={ attributes['card1-tag'] }
                onChange={ ( v ) => setAttributes( { 'card1-tag': v } ) }
                placeholder={ __( 'card1-tag…', 'matter-blocks' ) }
            />
            { attributes['card1-img']?.url && (
                <img src={ attributes['card1-img'].url } alt={ attributes['card1-img'].alt || '' } />
            ) }
            <RichText
                tagName="h3"
                value={ attributes['card1-name'] }
                onChange={ ( v ) => setAttributes( { 'card1-name': v } ) }
                placeholder={ __( 'card1-name…', 'matter-blocks' ) }
            />
            <RichText
                tagName="p"
                value={ attributes['card2-tag'] }
                onChange={ ( v ) => setAttributes( { 'card2-tag': v } ) }
                placeholder={ __( 'card2-tag…', 'matter-blocks' ) }
            />
            { attributes['card2-img']?.url && (
                <img src={ attributes['card2-img'].url } alt={ attributes['card2-img'].alt || '' } />
            ) }
            <RichText
                tagName="h3"
                value={ attributes['card2-name'] }
                onChange={ ( v ) => setAttributes( { 'card2-name': v } ) }
                placeholder={ __( 'card2-name…', 'matter-blocks' ) }
            />
            </section>
        </>
    );
}
