import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Editor del blocco matter/pillars.
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
                        label={ __( 'Pillar1 Kicker', 'matter-blocks' ) }
                        value={ attributes['pillar1-kicker'] || '' }
                        onChange={ ( v ) => setAttributes( { 'pillar1-kicker': v } ) }
                    />
                    <TextControl
                        label={ __( 'Pillar1 Title', 'matter-blocks' ) }
                        value={ attributes['pillar1-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'pillar1-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Pillar1 Lead', 'matter-blocks' ) }
                        value={ attributes['pillar1-lead'] || '' }
                        onChange={ ( v ) => setAttributes( { 'pillar1-lead': v } ) }
                    />
                    <TextControl
                        label={ __( 'Pillar1 List', 'matter-blocks' ) }
                        value={ attributes['pillar1-list'] || '' }
                        onChange={ ( v ) => setAttributes( { 'pillar1-list': v } ) }
                    />
                    <TextControl
                        label={ __( 'Pillar2 Kicker', 'matter-blocks' ) }
                        value={ attributes['pillar2-kicker'] || '' }
                        onChange={ ( v ) => setAttributes( { 'pillar2-kicker': v } ) }
                    />
                    <TextControl
                        label={ __( 'Pillar2 Title', 'matter-blocks' ) }
                        value={ attributes['pillar2-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'pillar2-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Pillar2 Lead', 'matter-blocks' ) }
                        value={ attributes['pillar2-lead'] || '' }
                        onChange={ ( v ) => setAttributes( { 'pillar2-lead': v } ) }
                    />
                    <TextControl
                        label={ __( 'Pillar2 List', 'matter-blocks' ) }
                        value={ attributes['pillar2-list'] || '' }
                        onChange={ ( v ) => setAttributes( { 'pillar2-list': v } ) }
                    />
                    <TextControl
                        label={ __( 'Pillar3 Kicker', 'matter-blocks' ) }
                        value={ attributes['pillar3-kicker'] || '' }
                        onChange={ ( v ) => setAttributes( { 'pillar3-kicker': v } ) }
                    />
                    <TextControl
                        label={ __( 'Pillar3 Title', 'matter-blocks' ) }
                        value={ attributes['pillar3-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'pillar3-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Pillar3 Lead', 'matter-blocks' ) }
                        value={ attributes['pillar3-lead'] || '' }
                        onChange={ ( v ) => setAttributes( { 'pillar3-lead': v } ) }
                    />
                    <TextControl
                        label={ __( 'Pillar3 List', 'matter-blocks' ) }
                        value={ attributes['pillar3-list'] || '' }
                        onChange={ ( v ) => setAttributes( { 'pillar3-list': v } ) }
                    />
                </PanelBody>
            </InspectorControls>
            <div { ...blockProps }>
                <ServerSideRender block="matter/pillars" attributes={ attributes } />
            </div>
        </>
    );
}
