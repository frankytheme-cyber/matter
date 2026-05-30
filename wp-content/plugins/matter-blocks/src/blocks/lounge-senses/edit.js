import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Editor del blocco matter/lounge-senses.
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
                    <TextareaControl
                        label={ __( 'Title', 'matter-blocks' ) }
                        value={ attributes['title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Sense1 Title', 'matter-blocks' ) }
                        value={ attributes['sense1-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'sense1-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Sense1 Desc', 'matter-blocks' ) }
                        value={ attributes['sense1-desc'] || '' }
                        onChange={ ( v ) => setAttributes( { 'sense1-desc': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Sense2 Title', 'matter-blocks' ) }
                        value={ attributes['sense2-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'sense2-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Sense2 Desc', 'matter-blocks' ) }
                        value={ attributes['sense2-desc'] || '' }
                        onChange={ ( v ) => setAttributes( { 'sense2-desc': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Sense3 Title', 'matter-blocks' ) }
                        value={ attributes['sense3-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'sense3-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Sense3 Desc', 'matter-blocks' ) }
                        value={ attributes['sense3-desc'] || '' }
                        onChange={ ( v ) => setAttributes( { 'sense3-desc': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Sense4 Title', 'matter-blocks' ) }
                        value={ attributes['sense4-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'sense4-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Sense4 Desc', 'matter-blocks' ) }
                        value={ attributes['sense4-desc'] || '' }
                        onChange={ ( v ) => setAttributes( { 'sense4-desc': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Sense5 Title', 'matter-blocks' ) }
                        value={ attributes['sense5-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'sense5-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Sense5 Desc', 'matter-blocks' ) }
                        value={ attributes['sense5-desc'] || '' }
                        onChange={ ( v ) => setAttributes( { 'sense5-desc': v } ) }
                    />
                    <TextControl
                        label={ __( 'Sense6 Title', 'matter-blocks' ) }
                        value={ attributes['sense6-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'sense6-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Sense6 Desc', 'matter-blocks' ) }
                        value={ attributes['sense6-desc'] || '' }
                        onChange={ ( v ) => setAttributes( { 'sense6-desc': v } ) }
                    />
                </PanelBody>
            </InspectorControls>
            <div { ...blockProps }>
                <ServerSideRender block="matter/lounge-senses" attributes={ attributes } />
            </div>
        </>
    );
}
