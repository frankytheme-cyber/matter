import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, LinkControl } from '@wordpress/block-editor';
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
                        label={ __( 'Link — Testo', 'matter-blocks' ) }
                        value={ attributes['link']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'link': { ...attributes['link'], label: v } } ) }
                    />
                    <p className="components-base-control__label">{ __( 'Link — Link', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ { url: attributes['link']?.url || '', opensInNewTab: attributes['link']?.target === '_blank' } }
                        onChange={ ( v ) => setAttributes( { 'link': {
                            url: v?.url || '',
                            label: attributes['link']?.label || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                    <TextControl
                        label={ __( 'Link 2 — Testo', 'matter-blocks' ) }
                        value={ attributes['link-2']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'link-2': { ...attributes['link-2'], label: v } } ) }
                    />
                    <p className="components-base-control__label">{ __( 'Link 2 — Link', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ { url: attributes['link-2']?.url || '', opensInNewTab: attributes['link-2']?.target === '_blank' } }
                        onChange={ ( v ) => setAttributes( { 'link-2': {
                            url: v?.url || '',
                            label: attributes['link-2']?.label || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                    <TextControl
                        label={ __( 'Link 3 — Testo', 'matter-blocks' ) }
                        value={ attributes['link-3']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'link-3': { ...attributes['link-3'], label: v } } ) }
                    />
                    <p className="components-base-control__label">{ __( 'Link 3 — Link', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ { url: attributes['link-3']?.url || '', opensInNewTab: attributes['link-3']?.target === '_blank' } }
                        onChange={ ( v ) => setAttributes( { 'link-3': {
                            url: v?.url || '',
                            label: attributes['link-3']?.label || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                    <TextControl
                        label={ __( 'Link 4 — Testo', 'matter-blocks' ) }
                        value={ attributes['link-4']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'link-4': { ...attributes['link-4'], label: v } } ) }
                    />
                    <p className="components-base-control__label">{ __( 'Link 4 — Link', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ { url: attributes['link-4']?.url || '', opensInNewTab: attributes['link-4']?.target === '_blank' } }
                        onChange={ ( v ) => setAttributes( { 'link-4': {
                            url: v?.url || '',
                            label: attributes['link-4']?.label || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                    <TextControl
                        label={ __( 'Link 5 — Testo', 'matter-blocks' ) }
                        value={ attributes['link-5']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'link-5': { ...attributes['link-5'], label: v } } ) }
                    />
                    <p className="components-base-control__label">{ __( 'Link 5 — Link', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ { url: attributes['link-5']?.url || '', opensInNewTab: attributes['link-5']?.target === '_blank' } }
                        onChange={ ( v ) => setAttributes( { 'link-5': {
                            url: v?.url || '',
                            label: attributes['link-5']?.label || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                    <TextControl
                        label={ __( 'Link 6 — Testo', 'matter-blocks' ) }
                        value={ attributes['link-6']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'link-6': { ...attributes['link-6'], label: v } } ) }
                    />
                    <p className="components-base-control__label">{ __( 'Link 6 — Link', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ { url: attributes['link-6']?.url || '', opensInNewTab: attributes['link-6']?.target === '_blank' } }
                        onChange={ ( v ) => setAttributes( { 'link-6': {
                            url: v?.url || '',
                            label: attributes['link-6']?.label || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                    <TextControl
                        label={ __( 'Link 7 — Testo', 'matter-blocks' ) }
                        value={ attributes['link-7']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'link-7': { ...attributes['link-7'], label: v } } ) }
                    />
                    <p className="components-base-control__label">{ __( 'Link 7 — Link', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ { url: attributes['link-7']?.url || '', opensInNewTab: attributes['link-7']?.target === '_blank' } }
                        onChange={ ( v ) => setAttributes( { 'link-7': {
                            url: v?.url || '',
                            label: attributes['link-7']?.label || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                    <TextControl
                        label={ __( 'Link 8 — Testo', 'matter-blocks' ) }
                        value={ attributes['link-8']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'link-8': { ...attributes['link-8'], label: v } } ) }
                    />
                    <p className="components-base-control__label">{ __( 'Link 8 — Link', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ { url: attributes['link-8']?.url || '', opensInNewTab: attributes['link-8']?.target === '_blank' } }
                        onChange={ ( v ) => setAttributes( { 'link-8': {
                            url: v?.url || '',
                            label: attributes['link-8']?.label || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                    <TextControl
                        label={ __( 'Link 9 — Testo', 'matter-blocks' ) }
                        value={ attributes['link-9']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'link-9': { ...attributes['link-9'], label: v } } ) }
                    />
                    <p className="components-base-control__label">{ __( 'Link 9 — Link', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ { url: attributes['link-9']?.url || '', opensInNewTab: attributes['link-9']?.target === '_blank' } }
                        onChange={ ( v ) => setAttributes( { 'link-9': {
                            url: v?.url || '',
                            label: attributes['link-9']?.label || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                    <TextControl
                        label={ __( 'Link 10 — Testo', 'matter-blocks' ) }
                        value={ attributes['link-10']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'link-10': { ...attributes['link-10'], label: v } } ) }
                    />
                    <p className="components-base-control__label">{ __( 'Link 10 — Link', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ { url: attributes['link-10']?.url || '', opensInNewTab: attributes['link-10']?.target === '_blank' } }
                        onChange={ ( v ) => setAttributes( { 'link-10': {
                            url: v?.url || '',
                            label: attributes['link-10']?.label || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                    <TextControl
                        label={ __( 'Link 11 — Testo', 'matter-blocks' ) }
                        value={ attributes['link-11']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'link-11': { ...attributes['link-11'], label: v } } ) }
                    />
                    <p className="components-base-control__label">{ __( 'Link 11 — Link', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ { url: attributes['link-11']?.url || '', opensInNewTab: attributes['link-11']?.target === '_blank' } }
                        onChange={ ( v ) => setAttributes( { 'link-11': {
                            url: v?.url || '',
                            label: attributes['link-11']?.label || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                    <TextControl
                        label={ __( 'Link 12 — Testo', 'matter-blocks' ) }
                        value={ attributes['link-12']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'link-12': { ...attributes['link-12'], label: v } } ) }
                    />
                    <p className="components-base-control__label">{ __( 'Link 12 — Link', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ { url: attributes['link-12']?.url || '', opensInNewTab: attributes['link-12']?.target === '_blank' } }
                        onChange={ ( v ) => setAttributes( { 'link-12': {
                            url: v?.url || '',
                            label: attributes['link-12']?.label || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                    <TextControl
                        label={ __( 'Link 13 — Testo', 'matter-blocks' ) }
                        value={ attributes['link-13']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'link-13': { ...attributes['link-13'], label: v } } ) }
                    />
                    <p className="components-base-control__label">{ __( 'Link 13 — Link', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ { url: attributes['link-13']?.url || '', opensInNewTab: attributes['link-13']?.target === '_blank' } }
                        onChange={ ( v ) => setAttributes( { 'link-13': {
                            url: v?.url || '',
                            label: attributes['link-13']?.label || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                    <TextControl
                        label={ __( 'Link 14 — Testo', 'matter-blocks' ) }
                        value={ attributes['link-14']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'link-14': { ...attributes['link-14'], label: v } } ) }
                    />
                    <p className="components-base-control__label">{ __( 'Link 14 — Link', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ { url: attributes['link-14']?.url || '', opensInNewTab: attributes['link-14']?.target === '_blank' } }
                        onChange={ ( v ) => setAttributes( { 'link-14': {
                            url: v?.url || '',
                            label: attributes['link-14']?.label || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                    <TextControl
                        label={ __( 'Link 15 — Testo', 'matter-blocks' ) }
                        value={ attributes['link-15']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'link-15': { ...attributes['link-15'], label: v } } ) }
                    />
                    <p className="components-base-control__label">{ __( 'Link 15 — Link', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ { url: attributes['link-15']?.url || '', opensInNewTab: attributes['link-15']?.target === '_blank' } }
                        onChange={ ( v ) => setAttributes( { 'link-15': {
                            url: v?.url || '',
                            label: attributes['link-15']?.label || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                    <TextControl
                        label={ __( 'Link 16 — Testo', 'matter-blocks' ) }
                        value={ attributes['link-16']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'link-16': { ...attributes['link-16'], label: v } } ) }
                    />
                    <p className="components-base-control__label">{ __( 'Link 16 — Link', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ { url: attributes['link-16']?.url || '', opensInNewTab: attributes['link-16']?.target === '_blank' } }
                        onChange={ ( v ) => setAttributes( { 'link-16': {
                            url: v?.url || '',
                            label: attributes['link-16']?.label || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                    <TextControl
                        label={ __( 'Link 17 — Testo', 'matter-blocks' ) }
                        value={ attributes['link-17']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'link-17': { ...attributes['link-17'], label: v } } ) }
                    />
                    <p className="components-base-control__label">{ __( 'Link 17 — Link', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ { url: attributes['link-17']?.url || '', opensInNewTab: attributes['link-17']?.target === '_blank' } }
                        onChange={ ( v ) => setAttributes( { 'link-17': {
                            url: v?.url || '',
                            label: attributes['link-17']?.label || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                    <TextControl
                        label={ __( 'Link 18 — Testo', 'matter-blocks' ) }
                        value={ attributes['link-18']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'link-18': { ...attributes['link-18'], label: v } } ) }
                    />
                    <p className="components-base-control__label">{ __( 'Link 18 — Link', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ { url: attributes['link-18']?.url || '', opensInNewTab: attributes['link-18']?.target === '_blank' } }
                        onChange={ ( v ) => setAttributes( { 'link-18': {
                            url: v?.url || '',
                            label: attributes['link-18']?.label || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                </PanelBody>
            </InspectorControls>
            <div { ...blockProps }>
                <ServerSideRender block="matter/site-header" attributes={ attributes } />
            </div>
        </>
    );
}
