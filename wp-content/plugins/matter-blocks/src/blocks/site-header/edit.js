import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Editor del blocco matter/site-header.
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
                <PanelBody title={ __( 'Link', 'matter-blocks' ) } initialOpen={ false }>
                    <TextControl
                        label={ __( 'Link — URL', 'matter-blocks' ) }
                        value={ attributes['link']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'link': { ...attributes['link'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Link — Testo', 'matter-blocks' ) }
                        value={ attributes['link']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'link': { ...attributes['link'], label: v } } ) }
                    />
                    <TextControl
                        label={ __( 'Link — Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['link']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'link': { ...attributes['link'], target } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 2 — URL', 'matter-blocks' ) }
                        value={ attributes['link-2']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'link-2': { ...attributes['link-2'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 2 — Testo', 'matter-blocks' ) }
                        value={ attributes['link-2']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'link-2': { ...attributes['link-2'], label: v } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 2 — Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['link-2']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'link-2': { ...attributes['link-2'], target } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 3 — URL', 'matter-blocks' ) }
                        value={ attributes['link-3']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'link-3': { ...attributes['link-3'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 3 — Testo', 'matter-blocks' ) }
                        value={ attributes['link-3']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'link-3': { ...attributes['link-3'], label: v } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 3 — Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['link-3']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'link-3': { ...attributes['link-3'], target } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 4 — URL', 'matter-blocks' ) }
                        value={ attributes['link-4']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'link-4': { ...attributes['link-4'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 4 — Testo', 'matter-blocks' ) }
                        value={ attributes['link-4']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'link-4': { ...attributes['link-4'], label: v } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 4 — Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['link-4']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'link-4': { ...attributes['link-4'], target } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 5 — URL', 'matter-blocks' ) }
                        value={ attributes['link-5']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'link-5': { ...attributes['link-5'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 5 — Testo', 'matter-blocks' ) }
                        value={ attributes['link-5']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'link-5': { ...attributes['link-5'], label: v } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 5 — Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['link-5']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'link-5': { ...attributes['link-5'], target } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 6 — URL', 'matter-blocks' ) }
                        value={ attributes['link-6']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'link-6': { ...attributes['link-6'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 6 — Testo', 'matter-blocks' ) }
                        value={ attributes['link-6']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'link-6': { ...attributes['link-6'], label: v } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 6 — Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['link-6']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'link-6': { ...attributes['link-6'], target } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 7 — URL', 'matter-blocks' ) }
                        value={ attributes['link-7']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'link-7': { ...attributes['link-7'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 7 — Testo', 'matter-blocks' ) }
                        value={ attributes['link-7']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'link-7': { ...attributes['link-7'], label: v } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 7 — Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['link-7']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'link-7': { ...attributes['link-7'], target } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 8 — URL', 'matter-blocks' ) }
                        value={ attributes['link-8']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'link-8': { ...attributes['link-8'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 8 — Testo', 'matter-blocks' ) }
                        value={ attributes['link-8']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'link-8': { ...attributes['link-8'], label: v } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 8 — Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['link-8']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'link-8': { ...attributes['link-8'], target } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 9 — URL', 'matter-blocks' ) }
                        value={ attributes['link-9']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'link-9': { ...attributes['link-9'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 9 — Testo', 'matter-blocks' ) }
                        value={ attributes['link-9']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'link-9': { ...attributes['link-9'], label: v } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 9 — Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['link-9']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'link-9': { ...attributes['link-9'], target } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 10 — URL', 'matter-blocks' ) }
                        value={ attributes['link-10']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'link-10': { ...attributes['link-10'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 10 — Testo', 'matter-blocks' ) }
                        value={ attributes['link-10']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'link-10': { ...attributes['link-10'], label: v } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 10 — Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['link-10']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'link-10': { ...attributes['link-10'], target } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 11 — URL', 'matter-blocks' ) }
                        value={ attributes['link-11']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'link-11': { ...attributes['link-11'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 11 — Testo', 'matter-blocks' ) }
                        value={ attributes['link-11']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'link-11': { ...attributes['link-11'], label: v } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 11 — Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['link-11']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'link-11': { ...attributes['link-11'], target } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 12 — URL', 'matter-blocks' ) }
                        value={ attributes['link-12']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'link-12': { ...attributes['link-12'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 12 — Testo', 'matter-blocks' ) }
                        value={ attributes['link-12']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'link-12': { ...attributes['link-12'], label: v } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 12 — Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['link-12']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'link-12': { ...attributes['link-12'], target } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 13 — URL', 'matter-blocks' ) }
                        value={ attributes['link-13']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'link-13': { ...attributes['link-13'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 13 — Testo', 'matter-blocks' ) }
                        value={ attributes['link-13']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'link-13': { ...attributes['link-13'], label: v } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 13 — Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['link-13']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'link-13': { ...attributes['link-13'], target } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 14 — URL', 'matter-blocks' ) }
                        value={ attributes['link-14']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'link-14': { ...attributes['link-14'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 14 — Testo', 'matter-blocks' ) }
                        value={ attributes['link-14']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'link-14': { ...attributes['link-14'], label: v } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 14 — Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['link-14']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'link-14': { ...attributes['link-14'], target } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 15 — URL', 'matter-blocks' ) }
                        value={ attributes['link-15']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'link-15': { ...attributes['link-15'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 15 — Testo', 'matter-blocks' ) }
                        value={ attributes['link-15']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'link-15': { ...attributes['link-15'], label: v } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 15 — Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['link-15']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'link-15': { ...attributes['link-15'], target } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 16 — URL', 'matter-blocks' ) }
                        value={ attributes['link-16']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'link-16': { ...attributes['link-16'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 16 — Testo', 'matter-blocks' ) }
                        value={ attributes['link-16']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'link-16': { ...attributes['link-16'], label: v } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 16 — Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['link-16']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'link-16': { ...attributes['link-16'], target } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 17 — URL', 'matter-blocks' ) }
                        value={ attributes['link-17']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'link-17': { ...attributes['link-17'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 17 — Testo', 'matter-blocks' ) }
                        value={ attributes['link-17']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'link-17': { ...attributes['link-17'], label: v } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 17 — Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['link-17']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'link-17': { ...attributes['link-17'], target } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 18 — URL', 'matter-blocks' ) }
                        value={ attributes['link-18']?.url || '' }
                        onChange={ ( url ) => setAttributes( { 'link-18': { ...attributes['link-18'], url } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 18 — Testo', 'matter-blocks' ) }
                        value={ attributes['link-18']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'link-18': { ...attributes['link-18'], label: v } } ) }
                    />
                    <TextControl
                        label={ __( 'Link 18 — Target (es. _blank)', 'matter-blocks' ) }
                        value={ attributes['link-18']?.target || '' }
                        onChange={ ( target ) => setAttributes( { 'link-18': { ...attributes['link-18'], target } } ) }
                    />
                </PanelBody>
            </InspectorControls>
            <div { ...blockProps }>
                <ServerSideRender block="matter/site-header" attributes={ attributes } />
            </div>
        </>
    );
}
