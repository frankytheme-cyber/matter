import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, LinkControl, MediaUpload, MediaUploadCheck, MediaPlaceholder } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl, Button } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Editor del blocco matter/paths.
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
                        label={ __( 'Row1 Kicker', 'matter-blocks' ) }
                        value={ attributes['row1-kicker'] || '' }
                        onChange={ ( v ) => setAttributes( { 'row1-kicker': v } ) }
                    />
                    <TextControl
                        label={ __( 'Row1 Title', 'matter-blocks' ) }
                        value={ attributes['row1-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'row1-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Row1 Desc', 'matter-blocks' ) }
                        value={ attributes['row1-desc'] || '' }
                        onChange={ ( v ) => setAttributes( { 'row1-desc': v } ) }
                    />
                    <TextControl
                        label={ __( 'Row1 List', 'matter-blocks' ) }
                        value={ attributes['row1-list'] || '' }
                        onChange={ ( v ) => setAttributes( { 'row1-list': v } ) }
                    />
                    <TextControl
                        label={ __( 'Row2 Kicker', 'matter-blocks' ) }
                        value={ attributes['row2-kicker'] || '' }
                        onChange={ ( v ) => setAttributes( { 'row2-kicker': v } ) }
                    />
                    <TextControl
                        label={ __( 'Row2 Title', 'matter-blocks' ) }
                        value={ attributes['row2-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'row2-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Row2 Desc', 'matter-blocks' ) }
                        value={ attributes['row2-desc'] || '' }
                        onChange={ ( v ) => setAttributes( { 'row2-desc': v } ) }
                    />
                    <TextControl
                        label={ __( 'Row2 List', 'matter-blocks' ) }
                        value={ attributes['row2-list'] || '' }
                        onChange={ ( v ) => setAttributes( { 'row2-list': v } ) }
                    />
                    <TextControl
                        label={ __( 'Row3 Kicker', 'matter-blocks' ) }
                        value={ attributes['row3-kicker'] || '' }
                        onChange={ ( v ) => setAttributes( { 'row3-kicker': v } ) }
                    />
                    <TextControl
                        label={ __( 'Row3 Title', 'matter-blocks' ) }
                        value={ attributes['row3-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'row3-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Row3 Desc', 'matter-blocks' ) }
                        value={ attributes['row3-desc'] || '' }
                        onChange={ ( v ) => setAttributes( { 'row3-desc': v } ) }
                    />
                    <TextControl
                        label={ __( 'Row3 List', 'matter-blocks' ) }
                        value={ attributes['row3-list'] || '' }
                        onChange={ ( v ) => setAttributes( { 'row3-list': v } ) }
                    />
                    <TextControl
                        label={ __( 'Cta Kicker', 'matter-blocks' ) }
                        value={ attributes['cta-kicker'] || '' }
                        onChange={ ( v ) => setAttributes( { 'cta-kicker': v } ) }
                    />
                    <TextControl
                        label={ __( 'Cta Title', 'matter-blocks' ) }
                        value={ attributes['cta-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'cta-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Cta Desc', 'matter-blocks' ) }
                        value={ attributes['cta-desc'] || '' }
                        onChange={ ( v ) => setAttributes( { 'cta-desc': v } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Immagini', 'matter-blocks' ) } initialOpen={ false }>
                    <p className="components-base-control__label">Row1 Img</p>
                    { ! attributes['row1-img']?.url ? (
                        <MediaPlaceholder
                            onSelect={ ( m ) => setAttributes( { 'row1-img': { url: m.url, alt: m.alt || '', id: m.id } } ) }
                            accept="image/*"
                            allowedTypes={ [ 'image' ] }
                            labels={ { title: __( 'Aggiungi immagine', 'matter-blocks' ) } }
                        />
                    ) : (
                        <>
                            <img src={ attributes['row1-img'].url } alt="" style={ { maxWidth: '100%', height: 'auto', marginTop: '8px', borderRadius: '4px' } } />
                            <div style={ { display: 'flex', gap: '8px', marginTop: '8px' } }>
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={ ( m ) => setAttributes( { 'row1-img': { url: m.url, alt: m.alt || '', id: m.id } } ) }
                                        allowedTypes={ [ 'image' ] }
                                        value={ attributes['row1-img']?.id }
                                        render={ ( { open } ) => (
                                            <Button variant="secondary" onClick={ open }>{ __( 'Sostituisci', 'matter-blocks' ) }</Button>
                                        ) }
                                    />
                                </MediaUploadCheck>
                                <Button variant="tertiary" isDestructive onClick={ () => setAttributes( { 'row1-img': { url: '', alt: '', id: 0 } } ) }>{ __( 'Rimuovi', 'matter-blocks' ) }</Button>
                            </div>
                            <TextControl
                                label={ __( 'Testo alternativo', 'matter-blocks' ) }
                                help={ __( 'Descrizione dell\'immagine per screen reader e SEO.', 'matter-blocks' ) }
                                value={ attributes['row1-img']?.alt || '' }
                                onChange={ ( alt ) => setAttributes( { 'row1-img': { ...attributes['row1-img'], alt } } ) }
                                __nextHasNoMarginBottom
                            />
                        </>
                    ) }
                    <p className="components-base-control__label">Row2 Img</p>
                    { ! attributes['row2-img']?.url ? (
                        <MediaPlaceholder
                            onSelect={ ( m ) => setAttributes( { 'row2-img': { url: m.url, alt: m.alt || '', id: m.id } } ) }
                            accept="image/*"
                            allowedTypes={ [ 'image' ] }
                            labels={ { title: __( 'Aggiungi immagine', 'matter-blocks' ) } }
                        />
                    ) : (
                        <>
                            <img src={ attributes['row2-img'].url } alt="" style={ { maxWidth: '100%', height: 'auto', marginTop: '8px', borderRadius: '4px' } } />
                            <div style={ { display: 'flex', gap: '8px', marginTop: '8px' } }>
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={ ( m ) => setAttributes( { 'row2-img': { url: m.url, alt: m.alt || '', id: m.id } } ) }
                                        allowedTypes={ [ 'image' ] }
                                        value={ attributes['row2-img']?.id }
                                        render={ ( { open } ) => (
                                            <Button variant="secondary" onClick={ open }>{ __( 'Sostituisci', 'matter-blocks' ) }</Button>
                                        ) }
                                    />
                                </MediaUploadCheck>
                                <Button variant="tertiary" isDestructive onClick={ () => setAttributes( { 'row2-img': { url: '', alt: '', id: 0 } } ) }>{ __( 'Rimuovi', 'matter-blocks' ) }</Button>
                            </div>
                            <TextControl
                                label={ __( 'Testo alternativo', 'matter-blocks' ) }
                                help={ __( 'Descrizione dell\'immagine per screen reader e SEO.', 'matter-blocks' ) }
                                value={ attributes['row2-img']?.alt || '' }
                                onChange={ ( alt ) => setAttributes( { 'row2-img': { ...attributes['row2-img'], alt } } ) }
                                __nextHasNoMarginBottom
                            />
                        </>
                    ) }
                    <p className="components-base-control__label">Row3 Img</p>
                    { ! attributes['row3-img']?.url ? (
                        <MediaPlaceholder
                            onSelect={ ( m ) => setAttributes( { 'row3-img': { url: m.url, alt: m.alt || '', id: m.id } } ) }
                            accept="image/*"
                            allowedTypes={ [ 'image' ] }
                            labels={ { title: __( 'Aggiungi immagine', 'matter-blocks' ) } }
                        />
                    ) : (
                        <>
                            <img src={ attributes['row3-img'].url } alt="" style={ { maxWidth: '100%', height: 'auto', marginTop: '8px', borderRadius: '4px' } } />
                            <div style={ { display: 'flex', gap: '8px', marginTop: '8px' } }>
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={ ( m ) => setAttributes( { 'row3-img': { url: m.url, alt: m.alt || '', id: m.id } } ) }
                                        allowedTypes={ [ 'image' ] }
                                        value={ attributes['row3-img']?.id }
                                        render={ ( { open } ) => (
                                            <Button variant="secondary" onClick={ open }>{ __( 'Sostituisci', 'matter-blocks' ) }</Button>
                                        ) }
                                    />
                                </MediaUploadCheck>
                                <Button variant="tertiary" isDestructive onClick={ () => setAttributes( { 'row3-img': { url: '', alt: '', id: 0 } } ) }>{ __( 'Rimuovi', 'matter-blocks' ) }</Button>
                            </div>
                            <TextControl
                                label={ __( 'Testo alternativo', 'matter-blocks' ) }
                                help={ __( 'Descrizione dell\'immagine per screen reader e SEO.', 'matter-blocks' ) }
                                value={ attributes['row3-img']?.alt || '' }
                                onChange={ ( alt ) => setAttributes( { 'row3-img': { ...attributes['row3-img'], alt } } ) }
                                __nextHasNoMarginBottom
                            />
                        </>
                    ) }
                </PanelBody>
                <PanelBody title={ __( 'Link', 'matter-blocks' ) } initialOpen={ false }>
                    <p className="components-base-control__label">{ __( 'Cta Primary', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ {
                            url: attributes['cta-primary']?.url || '',
                            title: attributes['cta-primary']?.label || '',
                            opensInNewTab: attributes['cta-primary']?.target === '_blank'
                        } }
                        onChange={ ( v ) => setAttributes( { 'cta-primary': {
                            url: v?.url || '',
                            label: v?.title || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                        hasTextControl={ true }
                        forceIsEditingLink={ true }
                        hasRichPreviews={ false }
                    />
                    <p className="components-base-control__label">{ __( 'Cta Secondary', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ {
                            url: attributes['cta-secondary']?.url || '',
                            title: attributes['cta-secondary']?.label || '',
                            opensInNewTab: attributes['cta-secondary']?.target === '_blank'
                        } }
                        onChange={ ( v ) => setAttributes( { 'cta-secondary': {
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
                <ServerSideRender block="matter/paths" attributes={ attributes } />
            </div>
        </>
    );
}
