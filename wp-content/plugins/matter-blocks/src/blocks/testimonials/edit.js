import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function Edit( { attributes, setAttributes } ) {
    const blockProps = useBlockProps( { className: 'section' } );

    return (
        <>
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
            </section>
        </>
    );
}
