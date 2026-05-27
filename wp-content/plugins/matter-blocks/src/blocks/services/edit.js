import { __ } from '@wordpress/i18n';
import { MediaUpload, MediaUploadCheck, RichText, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Button, TextControl } from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
    const blockProps = useBlockProps( { className: 'section section--tint' } );

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
                <PanelBody title={ __( 'Card1 Cta - URL', 'matter-blocks' ) }>
                    <TextControl
                        label={ __( 'URL', 'matter-blocks' ) }
                        value={ attributes['card1-cta']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'card1-cta': { ...attributes['card1-cta'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['card1-cta']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'card1-cta': { ...attributes['card1-cta'], target } } ) }
                    />
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
                <PanelBody title={ __( 'Card2 Cta - URL', 'matter-blocks' ) }>
                    <TextControl
                        label={ __( 'URL', 'matter-blocks' ) }
                        value={ attributes['card2-cta']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'card2-cta': { ...attributes['card2-cta'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['card2-cta']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'card2-cta': { ...attributes['card2-cta'], target } } ) }
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
            { attributes['card1-img']?.url && (
                <img src={ attributes['card1-img'].url } alt={ attributes['card1-img'].alt || '' } />
            ) }
            <RichText
                tagName="p"
                value={ attributes['card1-kicker'] }
                onChange={ ( v ) => setAttributes( { 'card1-kicker': v } ) }
                placeholder={ __( 'card1-kicker…', 'matter-blocks' ) }
            />
            <RichText
                tagName="h3"
                value={ attributes['card1-title'] }
                onChange={ ( v ) => setAttributes( { 'card1-title': v } ) }
                placeholder={ __( 'card1-title…', 'matter-blocks' ) }
            />
            <RichText
                tagName="p"
                value={ attributes['card1-desc'] }
                onChange={ ( v ) => setAttributes( { 'card1-desc': v } ) }
                placeholder={ __( 'card1-desc…', 'matter-blocks' ) }
            />
            <RichText
                tagName="a"
                value={ attributes['card1-cta']?.label || '' }
                onChange={ ( label ) => setAttributes( { 'card1-cta': { ...attributes['card1-cta'], label } } ) }
                placeholder={ __( 'card1-cta label…', 'matter-blocks' ) }
            />
            { attributes['card2-img']?.url && (
                <img src={ attributes['card2-img'].url } alt={ attributes['card2-img'].alt || '' } />
            ) }
            <RichText
                tagName="p"
                value={ attributes['card2-kicker'] }
                onChange={ ( v ) => setAttributes( { 'card2-kicker': v } ) }
                placeholder={ __( 'card2-kicker…', 'matter-blocks' ) }
            />
            <RichText
                tagName="h3"
                value={ attributes['card2-title'] }
                onChange={ ( v ) => setAttributes( { 'card2-title': v } ) }
                placeholder={ __( 'card2-title…', 'matter-blocks' ) }
            />
            <RichText
                tagName="p"
                value={ attributes['card2-desc'] }
                onChange={ ( v ) => setAttributes( { 'card2-desc': v } ) }
                placeholder={ __( 'card2-desc…', 'matter-blocks' ) }
            />
            <RichText
                tagName="a"
                value={ attributes['card2-cta']?.label || '' }
                onChange={ ( label ) => setAttributes( { 'card2-cta': { ...attributes['card2-cta'], label } } ) }
                placeholder={ __( 'card2-cta label…', 'matter-blocks' ) }
            />
            </section>
        </>
    );
}
