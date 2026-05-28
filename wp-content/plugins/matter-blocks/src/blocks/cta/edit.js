import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, LinkControl } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Editor del blocco matter/cta.
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
                    <TextControl
                        label={ __( 'Cta Primary — Testo', 'matter-blocks' ) }
                        value={ attributes['cta-primary']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'cta-primary': { ...attributes['cta-primary'], label: v } } ) }
                    />
                    <p className="components-base-control__label">{ __( 'Cta Primary — Link', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ { url: attributes['cta-primary']?.url || '', opensInNewTab: attributes['cta-primary']?.target === '_blank' } }
                        onChange={ ( v ) => setAttributes( { 'cta-primary': {
                            url: v?.url || '',
                            label: attributes['cta-primary']?.label || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                    />
                    <TextControl
                        label={ __( 'Cta Secondary — Testo', 'matter-blocks' ) }
                        value={ attributes['cta-secondary']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'cta-secondary': { ...attributes['cta-secondary'], label: v } } ) }
                    />
                    <p className="components-base-control__label">{ __( 'Cta Secondary — Link', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ { url: attributes['cta-secondary']?.url || '', opensInNewTab: attributes['cta-secondary']?.target === '_blank' } }
                        onChange={ ( v ) => setAttributes( { 'cta-secondary': {
                            url: v?.url || '',
                            label: attributes['cta-secondary']?.label || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                    />
                </PanelBody>
            </InspectorControls>
            <div { ...blockProps }>
                <ServerSideRender block="matter/cta" attributes={ attributes } />
            </div>
        </>
    );
}
