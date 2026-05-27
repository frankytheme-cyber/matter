import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Button, TextControl } from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
    const blockProps = useBlockProps( { className: '' } );

    return (
        <>
            <InspectorControls>
                <PanelBody title={ __( 'Link - URL', 'matter-blocks' ) }>
                    <TextControl
                        label={ __( 'URL', 'matter-blocks' ) }
                        value={ attributes.link?.url || '' }
                        onChange={ ( url ) => setAttributes( { link: { ...attributes.link, url } } ) }
                    />
                    <TextControl
                        label={ __( 'Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes.link?.target || '' }
                        onChange={ ( target ) => setAttributes( { link: { ...attributes.link, target } } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Link 2 - URL', 'matter-blocks' ) }>
                    <TextControl
                        label={ __( 'URL', 'matter-blocks' ) }
                        value={ attributes['link-2']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'link-2': { ...attributes['link-2'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['link-2']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'link-2': { ...attributes['link-2'], target } } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Link 3 - URL', 'matter-blocks' ) }>
                    <TextControl
                        label={ __( 'URL', 'matter-blocks' ) }
                        value={ attributes['link-3']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'link-3': { ...attributes['link-3'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['link-3']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'link-3': { ...attributes['link-3'], target } } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Link 4 - URL', 'matter-blocks' ) }>
                    <TextControl
                        label={ __( 'URL', 'matter-blocks' ) }
                        value={ attributes['link-4']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'link-4': { ...attributes['link-4'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['link-4']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'link-4': { ...attributes['link-4'], target } } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Link 5 - URL', 'matter-blocks' ) }>
                    <TextControl
                        label={ __( 'URL', 'matter-blocks' ) }
                        value={ attributes['link-5']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'link-5': { ...attributes['link-5'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['link-5']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'link-5': { ...attributes['link-5'], target } } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Link 6 - URL', 'matter-blocks' ) }>
                    <TextControl
                        label={ __( 'URL', 'matter-blocks' ) }
                        value={ attributes['link-6']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'link-6': { ...attributes['link-6'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['link-6']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'link-6': { ...attributes['link-6'], target } } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Link 7 - URL', 'matter-blocks' ) }>
                    <TextControl
                        label={ __( 'URL', 'matter-blocks' ) }
                        value={ attributes['link-7']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'link-7': { ...attributes['link-7'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['link-7']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'link-7': { ...attributes['link-7'], target } } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Link 8 - URL', 'matter-blocks' ) }>
                    <TextControl
                        label={ __( 'URL', 'matter-blocks' ) }
                        value={ attributes['link-8']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'link-8': { ...attributes['link-8'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['link-8']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'link-8': { ...attributes['link-8'], target } } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Link 9 - URL', 'matter-blocks' ) }>
                    <TextControl
                        label={ __( 'URL', 'matter-blocks' ) }
                        value={ attributes['link-9']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'link-9': { ...attributes['link-9'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['link-9']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'link-9': { ...attributes['link-9'], target } } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Link 10 - URL', 'matter-blocks' ) }>
                    <TextControl
                        label={ __( 'URL', 'matter-blocks' ) }
                        value={ attributes['link-10']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'link-10': { ...attributes['link-10'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['link-10']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'link-10': { ...attributes['link-10'], target } } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Link 11 - URL', 'matter-blocks' ) }>
                    <TextControl
                        label={ __( 'URL', 'matter-blocks' ) }
                        value={ attributes['link-11']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'link-11': { ...attributes['link-11'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['link-11']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'link-11': { ...attributes['link-11'], target } } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Link 12 - URL', 'matter-blocks' ) }>
                    <TextControl
                        label={ __( 'URL', 'matter-blocks' ) }
                        value={ attributes['link-12']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'link-12': { ...attributes['link-12'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['link-12']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'link-12': { ...attributes['link-12'], target } } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Link 13 - URL', 'matter-blocks' ) }>
                    <TextControl
                        label={ __( 'URL', 'matter-blocks' ) }
                        value={ attributes['link-13']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'link-13': { ...attributes['link-13'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['link-13']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'link-13': { ...attributes['link-13'], target } } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Link 14 - URL', 'matter-blocks' ) }>
                    <TextControl
                        label={ __( 'URL', 'matter-blocks' ) }
                        value={ attributes['link-14']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'link-14': { ...attributes['link-14'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['link-14']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'link-14': { ...attributes['link-14'], target } } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Link 15 - URL', 'matter-blocks' ) }>
                    <TextControl
                        label={ __( 'URL', 'matter-blocks' ) }
                        value={ attributes['link-15']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'link-15': { ...attributes['link-15'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['link-15']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'link-15': { ...attributes['link-15'], target } } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Link 16 - URL', 'matter-blocks' ) }>
                    <TextControl
                        label={ __( 'URL', 'matter-blocks' ) }
                        value={ attributes['link-16']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'link-16': { ...attributes['link-16'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['link-16']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'link-16': { ...attributes['link-16'], target } } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Link 17 - URL', 'matter-blocks' ) }>
                    <TextControl
                        label={ __( 'URL', 'matter-blocks' ) }
                        value={ attributes['link-17']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'link-17': { ...attributes['link-17'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['link-17']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'link-17': { ...attributes['link-17'], target } } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Link 18 - URL', 'matter-blocks' ) }>
                    <TextControl
                        label={ __( 'URL', 'matter-blocks' ) }
                        value={ attributes['link-18']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'link-18': { ...attributes['link-18'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['link-18']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'link-18': { ...attributes['link-18'], target } } ) }
                    />
                </PanelBody>
            </InspectorControls>
            <div { ...blockProps }>
            <RichText
                tagName="a"
                value={ attributes.link?.label || '' }
                onChange={ ( label ) => setAttributes( { link: { ...attributes.link, label } } ) }
                placeholder={ __( 'link label…', 'matter-blocks' ) }
            />
            <RichText
                tagName="a"
                value={ attributes['link-2']?.label || '' }
                onChange={ ( label ) => setAttributes( { 'link-2': { ...attributes['link-2'], label } } ) }
                placeholder={ __( 'link-2 label…', 'matter-blocks' ) }
            />
            <RichText
                tagName="a"
                value={ attributes['link-3']?.label || '' }
                onChange={ ( label ) => setAttributes( { 'link-3': { ...attributes['link-3'], label } } ) }
                placeholder={ __( 'link-3 label…', 'matter-blocks' ) }
            />
            <RichText
                tagName="a"
                value={ attributes['link-4']?.label || '' }
                onChange={ ( label ) => setAttributes( { 'link-4': { ...attributes['link-4'], label } } ) }
                placeholder={ __( 'link-4 label…', 'matter-blocks' ) }
            />
            <RichText
                tagName="a"
                value={ attributes['link-5']?.label || '' }
                onChange={ ( label ) => setAttributes( { 'link-5': { ...attributes['link-5'], label } } ) }
                placeholder={ __( 'link-5 label…', 'matter-blocks' ) }
            />
            <RichText
                tagName="a"
                value={ attributes['link-6']?.label || '' }
                onChange={ ( label ) => setAttributes( { 'link-6': { ...attributes['link-6'], label } } ) }
                placeholder={ __( 'link-6 label…', 'matter-blocks' ) }
            />
            <RichText
                tagName="a"
                value={ attributes['link-7']?.label || '' }
                onChange={ ( label ) => setAttributes( { 'link-7': { ...attributes['link-7'], label } } ) }
                placeholder={ __( 'link-7 label…', 'matter-blocks' ) }
            />
            <RichText
                tagName="a"
                value={ attributes['link-8']?.label || '' }
                onChange={ ( label ) => setAttributes( { 'link-8': { ...attributes['link-8'], label } } ) }
                placeholder={ __( 'link-8 label…', 'matter-blocks' ) }
            />
            <RichText
                tagName="a"
                value={ attributes['link-9']?.label || '' }
                onChange={ ( label ) => setAttributes( { 'link-9': { ...attributes['link-9'], label } } ) }
                placeholder={ __( 'link-9 label…', 'matter-blocks' ) }
            />
            <RichText
                tagName="a"
                value={ attributes['link-10']?.label || '' }
                onChange={ ( label ) => setAttributes( { 'link-10': { ...attributes['link-10'], label } } ) }
                placeholder={ __( 'link-10 label…', 'matter-blocks' ) }
            />
            <RichText
                tagName="a"
                value={ attributes['link-11']?.label || '' }
                onChange={ ( label ) => setAttributes( { 'link-11': { ...attributes['link-11'], label } } ) }
                placeholder={ __( 'link-11 label…', 'matter-blocks' ) }
            />
            <RichText
                tagName="a"
                value={ attributes['link-12']?.label || '' }
                onChange={ ( label ) => setAttributes( { 'link-12': { ...attributes['link-12'], label } } ) }
                placeholder={ __( 'link-12 label…', 'matter-blocks' ) }
            />
            <RichText
                tagName="a"
                value={ attributes['link-13']?.label || '' }
                onChange={ ( label ) => setAttributes( { 'link-13': { ...attributes['link-13'], label } } ) }
                placeholder={ __( 'link-13 label…', 'matter-blocks' ) }
            />
            <RichText
                tagName="a"
                value={ attributes['link-14']?.label || '' }
                onChange={ ( label ) => setAttributes( { 'link-14': { ...attributes['link-14'], label } } ) }
                placeholder={ __( 'link-14 label…', 'matter-blocks' ) }
            />
            <RichText
                tagName="a"
                value={ attributes['link-15']?.label || '' }
                onChange={ ( label ) => setAttributes( { 'link-15': { ...attributes['link-15'], label } } ) }
                placeholder={ __( 'link-15 label…', 'matter-blocks' ) }
            />
            <RichText
                tagName="a"
                value={ attributes['link-16']?.label || '' }
                onChange={ ( label ) => setAttributes( { 'link-16': { ...attributes['link-16'], label } } ) }
                placeholder={ __( 'link-16 label…', 'matter-blocks' ) }
            />
            <RichText
                tagName="a"
                value={ attributes['link-17']?.label || '' }
                onChange={ ( label ) => setAttributes( { 'link-17': { ...attributes['link-17'], label } } ) }
                placeholder={ __( 'link-17 label…', 'matter-blocks' ) }
            />
            <RichText
                tagName="a"
                value={ attributes['link-18']?.label || '' }
                onChange={ ( label ) => setAttributes( { 'link-18': { ...attributes['link-18'], label } } ) }
                placeholder={ __( 'link-18 label…', 'matter-blocks' ) }
            />
            </div>
        </>
    );
}
