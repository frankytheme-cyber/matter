import { __ } from '@wordpress/i18n';
import { MediaUpload, MediaUploadCheck, RichText, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Button, TextControl } from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
    const blockProps = useBlockProps( { className: 'section' } );

    return (
        <>
            <InspectorControls>
                <PanelBody title={ __( 'Row1 Img', 'matter-blocks' ) } initialOpen={ true }>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={ ( media ) => setAttributes( { 'row1-img': { id: media.id, url: media.url, alt: media.alt || '' } } ) }
                            allowedTypes={ [ 'image' ] }
                            value={ attributes['row1-img']?.id }
                            render={ ( { open } ) => (
                                <Button variant="secondary" onClick={ open }>
                                    { attributes['row1-img']?.url ? __( 'Cambia media', 'matter-blocks' ) : __( 'Seleziona media', 'matter-blocks' ) }
                                </Button>
                            ) }
                        />
                    </MediaUploadCheck>
                </PanelBody>
                <PanelBody title={ __( 'Row2 Img', 'matter-blocks' ) } initialOpen={ true }>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={ ( media ) => setAttributes( { 'row2-img': { id: media.id, url: media.url, alt: media.alt || '' } } ) }
                            allowedTypes={ [ 'image' ] }
                            value={ attributes['row2-img']?.id }
                            render={ ( { open } ) => (
                                <Button variant="secondary" onClick={ open }>
                                    { attributes['row2-img']?.url ? __( 'Cambia media', 'matter-blocks' ) : __( 'Seleziona media', 'matter-blocks' ) }
                                </Button>
                            ) }
                        />
                    </MediaUploadCheck>
                </PanelBody>
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
            { attributes['row1-img']?.url && (
                <img src={ attributes['row1-img'].url } alt={ attributes['row1-img'].alt || '' } />
            ) }
            <RichText
                tagName="p"
                value={ attributes['row1-kicker'] }
                onChange={ ( v ) => setAttributes( { 'row1-kicker': v } ) }
                placeholder={ __( 'row1-kicker…', 'matter-blocks' ) }
            />
            <RichText
                tagName="h3"
                value={ attributes['row1-title'] }
                onChange={ ( v ) => setAttributes( { 'row1-title': v } ) }
                placeholder={ __( 'row1-title…', 'matter-blocks' ) }
            />
            <RichText
                tagName="p"
                value={ attributes['row1-desc'] }
                onChange={ ( v ) => setAttributes( { 'row1-desc': v } ) }
                placeholder={ __( 'row1-desc…', 'matter-blocks' ) }
            />
            { attributes['row2-img']?.url && (
                <img src={ attributes['row2-img'].url } alt={ attributes['row2-img'].alt || '' } />
            ) }
            <RichText
                tagName="p"
                value={ attributes['row2-kicker'] }
                onChange={ ( v ) => setAttributes( { 'row2-kicker': v } ) }
                placeholder={ __( 'row2-kicker…', 'matter-blocks' ) }
            />
            <RichText
                tagName="h3"
                value={ attributes['row2-title'] }
                onChange={ ( v ) => setAttributes( { 'row2-title': v } ) }
                placeholder={ __( 'row2-title…', 'matter-blocks' ) }
            />
            <RichText
                tagName="p"
                value={ attributes['row2-desc'] }
                onChange={ ( v ) => setAttributes( { 'row2-desc': v } ) }
                placeholder={ __( 'row2-desc…', 'matter-blocks' ) }
            />
            <RichText
                tagName="p"
                value={ attributes['cta-kicker'] }
                onChange={ ( v ) => setAttributes( { 'cta-kicker': v } ) }
                placeholder={ __( 'cta-kicker…', 'matter-blocks' ) }
            />
            <RichText
                tagName="h3"
                value={ attributes['cta-title'] }
                onChange={ ( v ) => setAttributes( { 'cta-title': v } ) }
                placeholder={ __( 'cta-title…', 'matter-blocks' ) }
            />
            <RichText
                tagName="p"
                value={ attributes['cta-desc'] }
                onChange={ ( v ) => setAttributes( { 'cta-desc': v } ) }
                placeholder={ __( 'cta-desc…', 'matter-blocks' ) }
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
            </section>
        </>
    );
}
