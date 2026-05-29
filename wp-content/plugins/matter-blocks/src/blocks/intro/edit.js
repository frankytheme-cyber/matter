import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, LinkControl } from '@wordpress/block-editor';
import { PanelBody, TextareaControl } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Editor del blocco matter/intro.
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
                    <TextareaControl
                        label={ __( 'Body', 'matter-blocks' ) }
                        value={ attributes['body'] || '' }
                        onChange={ ( v ) => setAttributes( { 'body': v } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Link', 'matter-blocks' ) } initialOpen={ false }>
                    <p className="components-base-control__label">{ __( 'Cta', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ {
                            url: attributes['cta']?.url || '',
                            title: attributes['cta']?.label || '',
                            opensInNewTab: attributes['cta']?.target === '_blank'
                        } }
                        onChange={ ( v ) => setAttributes( { 'cta': {
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
                <ServerSideRender block="matter/intro" attributes={ attributes } />
            </div>
        </>
    );
}
