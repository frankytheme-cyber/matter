import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function Edit( { attributes, setAttributes } ) {
    const blockProps = useBlockProps( { className: 'section section--dark' } );

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
            <RichText
                tagName="span"
                value={ attributes.q1 }
                onChange={ ( v ) => setAttributes( { q1: v } ) }
                placeholder={ __( 'q1…', 'matter-blocks' ) }
            />
            <RichText
                tagName="div"
                value={ attributes.a1 }
                onChange={ ( v ) => setAttributes( { a1: v } ) }
                placeholder={ __( 'a1…', 'matter-blocks' ) }
            />
            <RichText
                tagName="span"
                value={ attributes.q2 }
                onChange={ ( v ) => setAttributes( { q2: v } ) }
                placeholder={ __( 'q2…', 'matter-blocks' ) }
            />
            <RichText
                tagName="div"
                value={ attributes.a2 }
                onChange={ ( v ) => setAttributes( { a2: v } ) }
                placeholder={ __( 'a2…', 'matter-blocks' ) }
            />
            <RichText
                tagName="span"
                value={ attributes.q3 }
                onChange={ ( v ) => setAttributes( { q3: v } ) }
                placeholder={ __( 'q3…', 'matter-blocks' ) }
            />
            <RichText
                tagName="div"
                value={ attributes.a3 }
                onChange={ ( v ) => setAttributes( { a3: v } ) }
                placeholder={ __( 'a3…', 'matter-blocks' ) }
            />
            <RichText
                tagName="span"
                value={ attributes.q4 }
                onChange={ ( v ) => setAttributes( { q4: v } ) }
                placeholder={ __( 'q4…', 'matter-blocks' ) }
            />
            <RichText
                tagName="div"
                value={ attributes.a4 }
                onChange={ ( v ) => setAttributes( { a4: v } ) }
                placeholder={ __( 'a4…', 'matter-blocks' ) }
            />
            </section>
        </>
    );
}
