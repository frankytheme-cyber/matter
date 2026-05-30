import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, LinkControl, MediaUpload, MediaUploadCheck, MediaPlaceholder } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl, Button } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Editor del blocco matter/media-cta.
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
                    <TextControl
                        label={ __( 'Kicker', 'matter-blocks' ) }
                        value={ attributes['kicker'] || '' }
                        onChange={ ( v ) => setAttributes( { 'kicker': v } ) }
                    />
                    <TextControl
                        label={ __( 'Title', 'matter-blocks' ) }
                        value={ attributes['title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Desc', 'matter-blocks' ) }
                        value={ attributes['desc'] || '' }
                        onChange={ ( v ) => setAttributes( { 'desc': v } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Immagini', 'matter-blocks' ) } initialOpen={ false }>
                    <p className="components-base-control__label">Image</p>
                    { ! attributes['image']?.url ? (
                        <MediaPlaceholder
                            onSelect={ ( m ) => setAttributes( { 'image': { url: m.url, alt: m.alt || '', id: m.id } } ) }
                            accept="image/*"
                            allowedTypes={ [ 'image' ] }
                            labels={ { title: __( 'Aggiungi immagine', 'matter-blocks' ) } }
                        />
                    ) : (
                        <>
                            <img src={ attributes['image'].url } alt="" style={ { maxWidth: '100%', height: 'auto', marginTop: '8px', borderRadius: '4px' } } />
                            <div style={ { display: 'flex', gap: '8px', marginTop: '8px' } }>
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={ ( m ) => setAttributes( { 'image': { url: m.url, alt: m.alt || '', id: m.id } } ) }
                                        allowedTypes={ [ 'image' ] }
                                        value={ attributes['image']?.id }
                                        render={ ( { open } ) => (
                                            <Button variant="secondary" onClick={ open }>{ __( 'Sostituisci', 'matter-blocks' ) }</Button>
                                        ) }
                                    />
                                </MediaUploadCheck>
                                <Button variant="tertiary" isDestructive onClick={ () => setAttributes( { 'image': { url: '', alt: '', id: 0 } } ) }>{ __( 'Rimuovi', 'matter-blocks' ) }</Button>
                            </div>
                            <TextControl
                                label={ __( 'Testo alternativo', 'matter-blocks' ) }
                                help={ __( 'Descrizione dell\'immagine per screen reader e SEO.', 'matter-blocks' ) }
                                value={ attributes['image']?.alt || '' }
                                onChange={ ( alt ) => setAttributes( { 'image': { ...attributes['image'], alt } } ) }
                                __nextHasNoMarginBottom
                            />
                        </>
                    ) }
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
                <ServerSideRender block="matter/media-cta" attributes={ attributes } />
            </div>
        </>
    );
}
