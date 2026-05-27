import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Button, TextControl } from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
    const blockProps = useBlockProps( { className: 'display-section' } );

    return (
        <>
            <InspectorControls>
                <PanelBody title={ __( 'Cta - URL', 'matter-blocks' ) }>
                    <TextControl
                        label={ __( 'URL', 'matter-blocks' ) }
                        value={ attributes.cta?.url || '' }
                        onChange={ ( url ) => setAttributes( { cta: { ...attributes.cta, url } } ) }
                    />
                    <TextControl
                        label={ __( 'Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes.cta?.target || '' }
                        onChange={ ( target ) => setAttributes( { cta: { ...attributes.cta, target } } ) }
                    />
                </PanelBody>
            </InspectorControls>
            <section { ...blockProps }>
            <RichText
                tagName="p"
                value={ attributes.body }
                onChange={ ( v ) => setAttributes( { body: v } ) }
                placeholder={ __( 'body…', 'matter-blocks' ) }
            />
            <RichText
                tagName="a"
                value={ attributes.cta?.label || '' }
                onChange={ ( label ) => setAttributes( { cta: { ...attributes.cta, label } } ) }
                placeholder={ __( 'cta label…', 'matter-blocks' ) }
            />
            </section>
        </>
    );
}
