import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, LinkControl } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Editor del blocco matter/lounge-invite.
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
                        label={ __( 'Lead', 'matter-blocks' ) }
                        value={ attributes['lead'] || '' }
                        onChange={ ( v ) => setAttributes( { 'lead': v } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Link', 'matter-blocks' ) } initialOpen={ false }>
                    <p className="components-base-control__label">{ __( 'Cta1', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ {
                            url: attributes['cta1']?.url || '',
                            title: attributes['cta1']?.label || '',
                            opensInNewTab: attributes['cta1']?.target === '_blank'
                        } }
                        onChange={ ( v ) => setAttributes( { 'cta1': {
                            url: v?.url || '',
                            label: v?.title || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        hasTextControl={ true }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                    <p className="components-base-control__label">{ __( 'Cta2', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ {
                            url: attributes['cta2']?.url || '',
                            title: attributes['cta2']?.label || '',
                            opensInNewTab: attributes['cta2']?.target === '_blank'
                        } }
                        onChange={ ( v ) => setAttributes( { 'cta2': {
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
                <ServerSideRender block="matter/lounge-invite" attributes={ attributes } />
            </div>
        </>
    );
}
