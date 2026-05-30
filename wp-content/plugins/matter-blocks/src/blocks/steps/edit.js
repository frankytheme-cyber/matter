import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Editor del blocco matter/steps.
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
                        label={ __( 'Step1 Title', 'matter-blocks' ) }
                        value={ attributes['step1-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'step1-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Step1 Desc', 'matter-blocks' ) }
                        value={ attributes['step1-desc'] || '' }
                        onChange={ ( v ) => setAttributes( { 'step1-desc': v } ) }
                    />
                    <TextControl
                        label={ __( 'Step2 Title', 'matter-blocks' ) }
                        value={ attributes['step2-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'step2-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Step2 Desc', 'matter-blocks' ) }
                        value={ attributes['step2-desc'] || '' }
                        onChange={ ( v ) => setAttributes( { 'step2-desc': v } ) }
                    />
                    <TextControl
                        label={ __( 'Step3 Title', 'matter-blocks' ) }
                        value={ attributes['step3-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'step3-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Step3 Desc', 'matter-blocks' ) }
                        value={ attributes['step3-desc'] || '' }
                        onChange={ ( v ) => setAttributes( { 'step3-desc': v } ) }
                    />
                    <TextControl
                        label={ __( 'Step4 Title', 'matter-blocks' ) }
                        value={ attributes['step4-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'step4-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Step4 Desc', 'matter-blocks' ) }
                        value={ attributes['step4-desc'] || '' }
                        onChange={ ( v ) => setAttributes( { 'step4-desc': v } ) }
                    />
                </PanelBody>
            </InspectorControls>
            <div { ...blockProps }>
                <ServerSideRender block="matter/steps" attributes={ attributes } />
            </div>
        </>
    );
}
