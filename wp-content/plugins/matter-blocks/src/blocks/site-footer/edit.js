import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, LinkControl } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Editor del blocco matter/site-footer.
 *
 * Anteprima fedele al frontend via ServerSideRender (render.php).
 * Testi, immagini e link si modificano nei pannelli della barra laterale.
 * Generato da scripts/gen-editor.mjs — non modificare a mano.
 */
export default function Edit( { attributes, setAttributes } ) {
    // 'mof-ssr-preview': nell'editor disattiva l'interazione su link/form/iframe
    // dell'anteprima ServerSideRender (vedi editor.css) → cliccare un link non
    // naviga via, il blocco resta selezionabile.
    const blockProps = useBlockProps( { className: 'mof-ssr-preview' } );

    return (
        <>
            <InspectorControls>
                <PanelBody title={ __( 'Testi', 'matter-blocks' ) } initialOpen={ true }>
                    <TextareaControl
                        label={ __( 'Brand Text', 'matter-blocks' ) }
                        value={ attributes['brand-text'] || '' }
                        onChange={ ( v ) => setAttributes( { 'brand-text': v } ) }
                    />
                    <TextControl
                        label={ __( 'Heading', 'matter-blocks' ) }
                        value={ attributes['heading'] || '' }
                        onChange={ ( v ) => setAttributes( { 'heading': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Text', 'matter-blocks' ) }
                        value={ attributes['text'] || '' }
                        onChange={ ( v ) => setAttributes( { 'text': v } ) }
                    />
                    <TextControl
                        label={ __( 'Heading 2', 'matter-blocks' ) }
                        value={ attributes['heading-2'] || '' }
                        onChange={ ( v ) => setAttributes( { 'heading-2': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Text 2', 'matter-blocks' ) }
                        value={ attributes['text-2'] || '' }
                        onChange={ ( v ) => setAttributes( { 'text-2': v } ) }
                    />
                    <TextControl
                        label={ __( 'Heading 3', 'matter-blocks' ) }
                        value={ attributes['heading-3'] || '' }
                        onChange={ ( v ) => setAttributes( { 'heading-3': v } ) }
                    />
                    <TextControl
                        label={ __( 'Heading 4', 'matter-blocks' ) }
                        value={ attributes['heading-4'] || '' }
                        onChange={ ( v ) => setAttributes( { 'heading-4': v } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Link', 'matter-blocks' ) } initialOpen={ false }>
                    <p className="components-base-control__label">{ __( 'Link', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ {
                            url: attributes['link']?.url || '',
                            title: attributes['link']?.label || '',
                            opensInNewTab: attributes['link']?.target === '_blank'
                        } }
                        onChange={ ( v ) => setAttributes( { 'link': {
                            url: v?.url || '',
                            label: v?.title || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        hasTextControl={ true }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                    <p className="components-base-control__label">{ __( 'Link 2', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ {
                            url: attributes['link-2']?.url || '',
                            title: attributes['link-2']?.label || '',
                            opensInNewTab: attributes['link-2']?.target === '_blank'
                        } }
                        onChange={ ( v ) => setAttributes( { 'link-2': {
                            url: v?.url || '',
                            label: v?.title || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        hasTextControl={ true }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                    <p className="components-base-control__label">{ __( 'Link 3', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ {
                            url: attributes['link-3']?.url || '',
                            title: attributes['link-3']?.label || '',
                            opensInNewTab: attributes['link-3']?.target === '_blank'
                        } }
                        onChange={ ( v ) => setAttributes( { 'link-3': {
                            url: v?.url || '',
                            label: v?.title || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        hasTextControl={ true }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                    <p className="components-base-control__label">{ __( 'Link 4', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ {
                            url: attributes['link-4']?.url || '',
                            title: attributes['link-4']?.label || '',
                            opensInNewTab: attributes['link-4']?.target === '_blank'
                        } }
                        onChange={ ( v ) => setAttributes( { 'link-4': {
                            url: v?.url || '',
                            label: v?.title || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        hasTextControl={ true }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                    <p className="components-base-control__label">{ __( 'Link 5', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ {
                            url: attributes['link-5']?.url || '',
                            title: attributes['link-5']?.label || '',
                            opensInNewTab: attributes['link-5']?.target === '_blank'
                        } }
                        onChange={ ( v ) => setAttributes( { 'link-5': {
                            url: v?.url || '',
                            label: v?.title || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        hasTextControl={ true }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                    <p className="components-base-control__label">{ __( 'Link 6', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ {
                            url: attributes['link-6']?.url || '',
                            title: attributes['link-6']?.label || '',
                            opensInNewTab: attributes['link-6']?.target === '_blank'
                        } }
                        onChange={ ( v ) => setAttributes( { 'link-6': {
                            url: v?.url || '',
                            label: v?.title || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        hasTextControl={ true }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                    <p className="components-base-control__label">{ __( 'Link 7', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ {
                            url: attributes['link-7']?.url || '',
                            title: attributes['link-7']?.label || '',
                            opensInNewTab: attributes['link-7']?.target === '_blank'
                        } }
                        onChange={ ( v ) => setAttributes( { 'link-7': {
                            url: v?.url || '',
                            label: v?.title || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        hasTextControl={ true }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                    <p className="components-base-control__label">{ __( 'Link 8', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ {
                            url: attributes['link-8']?.url || '',
                            title: attributes['link-8']?.label || '',
                            opensInNewTab: attributes['link-8']?.target === '_blank'
                        } }
                        onChange={ ( v ) => setAttributes( { 'link-8': {
                            url: v?.url || '',
                            label: v?.title || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        hasTextControl={ true }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                    <p className="components-base-control__label">{ __( 'Link 9', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ {
                            url: attributes['link-9']?.url || '',
                            title: attributes['link-9']?.label || '',
                            opensInNewTab: attributes['link-9']?.target === '_blank'
                        } }
                        onChange={ ( v ) => setAttributes( { 'link-9': {
                            url: v?.url || '',
                            label: v?.title || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        hasTextControl={ true }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                    <p className="components-base-control__label">{ __( 'Link 10', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ {
                            url: attributes['link-10']?.url || '',
                            title: attributes['link-10']?.label || '',
                            opensInNewTab: attributes['link-10']?.target === '_blank'
                        } }
                        onChange={ ( v ) => setAttributes( { 'link-10': {
                            url: v?.url || '',
                            label: v?.title || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        hasTextControl={ true }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                    <p className="components-base-control__label">{ __( 'Link 11', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ {
                            url: attributes['link-11']?.url || '',
                            title: attributes['link-11']?.label || '',
                            opensInNewTab: attributes['link-11']?.target === '_blank'
                        } }
                        onChange={ ( v ) => setAttributes( { 'link-11': {
                            url: v?.url || '',
                            label: v?.title || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        hasTextControl={ true }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                    <p className="components-base-control__label">{ __( 'Link 12', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ {
                            url: attributes['link-12']?.url || '',
                            title: attributes['link-12']?.label || '',
                            opensInNewTab: attributes['link-12']?.target === '_blank'
                        } }
                        onChange={ ( v ) => setAttributes( { 'link-12': {
                            url: v?.url || '',
                            label: v?.title || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        hasTextControl={ true }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                    <p className="components-base-control__label">{ __( 'Link 13', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ {
                            url: attributes['link-13']?.url || '',
                            title: attributes['link-13']?.label || '',
                            opensInNewTab: attributes['link-13']?.target === '_blank'
                        } }
                        onChange={ ( v ) => setAttributes( { 'link-13': {
                            url: v?.url || '',
                            label: v?.title || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        hasTextControl={ true }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                    <p className="components-base-control__label">{ __( 'Link 14', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ {
                            url: attributes['link-14']?.url || '',
                            title: attributes['link-14']?.label || '',
                            opensInNewTab: attributes['link-14']?.target === '_blank'
                        } }
                        onChange={ ( v ) => setAttributes( { 'link-14': {
                            url: v?.url || '',
                            label: v?.title || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        hasTextControl={ true }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                    <p className="components-base-control__label">{ __( 'Link 15', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ {
                            url: attributes['link-15']?.url || '',
                            title: attributes['link-15']?.label || '',
                            opensInNewTab: attributes['link-15']?.target === '_blank'
                        } }
                        onChange={ ( v ) => setAttributes( { 'link-15': {
                            url: v?.url || '',
                            label: v?.title || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        hasTextControl={ true }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                    <p className="components-base-control__label">{ __( 'Link 16', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ {
                            url: attributes['link-16']?.url || '',
                            title: attributes['link-16']?.label || '',
                            opensInNewTab: attributes['link-16']?.target === '_blank'
                        } }
                        onChange={ ( v ) => setAttributes( { 'link-16': {
                            url: v?.url || '',
                            label: v?.title || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        hasTextControl={ true }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                    <p className="components-base-control__label">{ __( 'Link 17', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ {
                            url: attributes['link-17']?.url || '',
                            title: attributes['link-17']?.label || '',
                            opensInNewTab: attributes['link-17']?.target === '_blank'
                        } }
                        onChange={ ( v ) => setAttributes( { 'link-17': {
                            url: v?.url || '',
                            label: v?.title || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        hasTextControl={ true }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                </PanelBody>
            </InspectorControls>
            <div { ...blockProps }>
                <ServerSideRender block="matter/site-footer" attributes={ attributes } />
            </div>
        </>
    );
}
