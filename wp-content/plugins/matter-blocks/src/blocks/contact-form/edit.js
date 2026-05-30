import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Editor del blocco matter/contact-form.
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
                    <TextControl
                        label={ __( 'Title', 'matter-blocks' ) }
                        value={ attributes['title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Lead', 'matter-blocks' ) }
                        value={ attributes['lead'] || '' }
                        onChange={ ( v ) => setAttributes( { 'lead': v } ) }
                    />
                    <TextControl
                        label={ __( 'Form Id', 'matter-blocks' ) }
                        value={ attributes['form-id'] || '' }
                        onChange={ ( v ) => setAttributes( { 'form-id': v } ) }
                    />
                    <TextControl
                        label={ __( 'Select Label', 'matter-blocks' ) }
                        value={ attributes['select-label'] || '' }
                        onChange={ ( v ) => setAttributes( { 'select-label': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Select Options', 'matter-blocks' ) }
                        value={ attributes['select-options'] || '' }
                        onChange={ ( v ) => setAttributes( { 'select-options': v } ) }
                    />
                    <TextControl
                        label={ __( 'Submit Label', 'matter-blocks' ) }
                        value={ attributes['submit-label'] || '' }
                        onChange={ ( v ) => setAttributes( { 'submit-label': v } ) }
                    />
                </PanelBody>
            </InspectorControls>
            <div { ...blockProps }>
                <ServerSideRender block="matter/contact-form" attributes={ attributes } />
            </div>
        </>
    );
}
