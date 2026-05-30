import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Editor del blocco matter/features.
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
                        label={ __( 'Layout', 'matter-blocks' ) }
                        value={ attributes['layout'] || '' }
                        onChange={ ( v ) => setAttributes( { 'layout': v } ) }
                    />
                    <TextControl
                        label={ __( 'Tile1 Icon', 'matter-blocks' ) }
                        value={ attributes['tile1-icon'] || '' }
                        onChange={ ( v ) => setAttributes( { 'tile1-icon': v } ) }
                    />
                    <TextControl
                        label={ __( 'Tile1 Title', 'matter-blocks' ) }
                        value={ attributes['tile1-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'tile1-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Tile1 Desc', 'matter-blocks' ) }
                        value={ attributes['tile1-desc'] || '' }
                        onChange={ ( v ) => setAttributes( { 'tile1-desc': v } ) }
                    />
                    <TextControl
                        label={ __( 'Tile2 Icon', 'matter-blocks' ) }
                        value={ attributes['tile2-icon'] || '' }
                        onChange={ ( v ) => setAttributes( { 'tile2-icon': v } ) }
                    />
                    <TextControl
                        label={ __( 'Tile2 Title', 'matter-blocks' ) }
                        value={ attributes['tile2-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'tile2-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Tile2 Desc', 'matter-blocks' ) }
                        value={ attributes['tile2-desc'] || '' }
                        onChange={ ( v ) => setAttributes( { 'tile2-desc': v } ) }
                    />
                    <TextControl
                        label={ __( 'Tile3 Icon', 'matter-blocks' ) }
                        value={ attributes['tile3-icon'] || '' }
                        onChange={ ( v ) => setAttributes( { 'tile3-icon': v } ) }
                    />
                    <TextControl
                        label={ __( 'Tile3 Title', 'matter-blocks' ) }
                        value={ attributes['tile3-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'tile3-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Tile3 Desc', 'matter-blocks' ) }
                        value={ attributes['tile3-desc'] || '' }
                        onChange={ ( v ) => setAttributes( { 'tile3-desc': v } ) }
                    />
                    <TextControl
                        label={ __( 'Tile4 Icon', 'matter-blocks' ) }
                        value={ attributes['tile4-icon'] || '' }
                        onChange={ ( v ) => setAttributes( { 'tile4-icon': v } ) }
                    />
                    <TextControl
                        label={ __( 'Tile4 Title', 'matter-blocks' ) }
                        value={ attributes['tile4-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'tile4-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Tile4 Desc', 'matter-blocks' ) }
                        value={ attributes['tile4-desc'] || '' }
                        onChange={ ( v ) => setAttributes( { 'tile4-desc': v } ) }
                    />
                </PanelBody>
            </InspectorControls>
            <div { ...blockProps }>
                <ServerSideRender block="matter/features" attributes={ attributes } />
            </div>
        </>
    );
}
