import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, LinkControl, MediaUpload, MediaUploadCheck, MediaPlaceholder } from '@wordpress/block-editor';
import { PanelBody, TextareaControl, TextControl, Button } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Editor del blocco matter/hero.
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
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
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
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                </PanelBody>
            </InspectorControls>
            <div { ...blockProps }>
                <ServerSideRender block="matter/hero" attributes={ attributes } />
            </div>
        </>
    );
}
