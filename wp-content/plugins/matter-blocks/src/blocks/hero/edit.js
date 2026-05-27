import { __ } from '@wordpress/i18n';
import { MediaUpload, MediaUploadCheck, RichText, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Button, TextControl } from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
    const blockProps = useBlockProps( { className: 'hero hero--overlay' } );

    return (
        <>
            <InspectorControls>
                <PanelBody title={ __( 'Cta Primary - URL', 'matter-blocks' ) }>
                    <TextControl
                        label={ __( 'URL', 'matter-blocks' ) }
                        value={ attributes['cta-primary']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'cta-primary': { ...attributes['cta-primary'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['cta-primary']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'cta-primary': { ...attributes['cta-primary'], target } } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Cta Secondary - URL', 'matter-blocks' ) }>
                    <TextControl
                        label={ __( 'URL', 'matter-blocks' ) }
                        value={ attributes['cta-secondary']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'cta-secondary': { ...attributes['cta-secondary'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['cta-secondary']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'cta-secondary': { ...attributes['cta-secondary'], target } } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Image', 'matter-blocks' ) } initialOpen={ true }>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={ ( media ) => setAttributes( { image: { id: media.id, url: media.url, alt: media.alt || '' } } ) }
                            allowedTypes={ [ 'image' ] }
                            value={ attributes.image?.id }
                            render={ ( { open } ) => (
                                <Button variant="secondary" onClick={ open }>
                                    { attributes.image?.url ? __( 'Cambia media', 'matter-blocks' ) : __( 'Seleziona media', 'matter-blocks' ) }
                                </Button>
                            ) }
                        />
                    </MediaUploadCheck>
                </PanelBody>
            </InspectorControls>
            <section { ...blockProps }>
            <RichText
                tagName="h1"
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
                tagName="a"
                value={ attributes['cta-primary']?.label || '' }
                onChange={ ( label ) => setAttributes( { 'cta-primary': { ...attributes['cta-primary'], label } } ) }
                placeholder={ __( 'cta-primary label…', 'matter-blocks' ) }
            />
            <RichText
                tagName="a"
                value={ attributes['cta-secondary']?.label || '' }
                onChange={ ( label ) => setAttributes( { 'cta-secondary': { ...attributes['cta-secondary'], label } } ) }
                placeholder={ __( 'cta-secondary label…', 'matter-blocks' ) }
            />
            { attributes.image?.url && (
                <img src={ attributes.image.url } alt={ attributes.image.alt || '' } />
            ) }
            </section>
        </>
    );
}
