import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, LinkControl, MediaUpload, MediaUploadCheck, MediaPlaceholder } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl, Button } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Editor del blocco matter/services.
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
                        label={ __( 'Card1 Kicker', 'matter-blocks' ) }
                        value={ attributes['card1-kicker'] || '' }
                        onChange={ ( v ) => setAttributes( { 'card1-kicker': v } ) }
                    />
                    <TextControl
                        label={ __( 'Card1 Title', 'matter-blocks' ) }
                        value={ attributes['card1-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'card1-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Card1 Desc', 'matter-blocks' ) }
                        value={ attributes['card1-desc'] || '' }
                        onChange={ ( v ) => setAttributes( { 'card1-desc': v } ) }
                    />
                    <TextControl
                        label={ __( 'Card2 Kicker', 'matter-blocks' ) }
                        value={ attributes['card2-kicker'] || '' }
                        onChange={ ( v ) => setAttributes( { 'card2-kicker': v } ) }
                    />
                    <TextControl
                        label={ __( 'Card2 Title', 'matter-blocks' ) }
                        value={ attributes['card2-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'card2-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Card2 Desc', 'matter-blocks' ) }
                        value={ attributes['card2-desc'] || '' }
                        onChange={ ( v ) => setAttributes( { 'card2-desc': v } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Immagini', 'matter-blocks' ) } initialOpen={ false }>
                    <p className="components-base-control__label">Card1 Img</p>
                    { ! attributes['card1-img']?.url ? (
                        <MediaPlaceholder
                            onSelect={ ( m ) => setAttributes( { 'card1-img': { url: m.url, alt: m.alt || '', id: m.id } } ) }
                            accept="image/*"
                            allowedTypes={ [ 'image' ] }
                            labels={ { title: __( 'Aggiungi immagine', 'matter-blocks' ) } }
                        />
                    ) : (
                        <>
                            <img src={ attributes['card1-img'].url } alt="" style={ { maxWidth: '100%', height: 'auto', marginTop: '8px', borderRadius: '4px' } } />
                            <div style={ { display: 'flex', gap: '8px', marginTop: '8px' } }>
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={ ( m ) => setAttributes( { 'card1-img': { url: m.url, alt: m.alt || '', id: m.id } } ) }
                                        allowedTypes={ [ 'image' ] }
                                        value={ attributes['card1-img']?.id }
                                        render={ ( { open } ) => (
                                            <Button variant="secondary" onClick={ open }>{ __( 'Sostituisci', 'matter-blocks' ) }</Button>
                                        ) }
                                    />
                                </MediaUploadCheck>
                                <Button variant="tertiary" isDestructive onClick={ () => setAttributes( { 'card1-img': { url: '', alt: '', id: 0 } } ) }>{ __( 'Rimuovi', 'matter-blocks' ) }</Button>
                            </div>
                        </>
                    ) }
                    <TextControl
                        label={ __( 'Card1 Img — Testo alternativo', 'matter-blocks' ) }
                        value={ attributes['card1-img']?.alt || '' }
                        onChange={ ( alt ) => setAttributes( { 'card1-img': { ...attributes['card1-img'], alt } } ) }
                    />
                    <p className="components-base-control__label">Card2 Img</p>
                    { ! attributes['card2-img']?.url ? (
                        <MediaPlaceholder
                            onSelect={ ( m ) => setAttributes( { 'card2-img': { url: m.url, alt: m.alt || '', id: m.id } } ) }
                            accept="image/*"
                            allowedTypes={ [ 'image' ] }
                            labels={ { title: __( 'Aggiungi immagine', 'matter-blocks' ) } }
                        />
                    ) : (
                        <>
                            <img src={ attributes['card2-img'].url } alt="" style={ { maxWidth: '100%', height: 'auto', marginTop: '8px', borderRadius: '4px' } } />
                            <div style={ { display: 'flex', gap: '8px', marginTop: '8px' } }>
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={ ( m ) => setAttributes( { 'card2-img': { url: m.url, alt: m.alt || '', id: m.id } } ) }
                                        allowedTypes={ [ 'image' ] }
                                        value={ attributes['card2-img']?.id }
                                        render={ ( { open } ) => (
                                            <Button variant="secondary" onClick={ open }>{ __( 'Sostituisci', 'matter-blocks' ) }</Button>
                                        ) }
                                    />
                                </MediaUploadCheck>
                                <Button variant="tertiary" isDestructive onClick={ () => setAttributes( { 'card2-img': { url: '', alt: '', id: 0 } } ) }>{ __( 'Rimuovi', 'matter-blocks' ) }</Button>
                            </div>
                        </>
                    ) }
                    <TextControl
                        label={ __( 'Card2 Img — Testo alternativo', 'matter-blocks' ) }
                        value={ attributes['card2-img']?.alt || '' }
                        onChange={ ( alt ) => setAttributes( { 'card2-img': { ...attributes['card2-img'], alt } } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Link', 'matter-blocks' ) } initialOpen={ false }>
                    <TextControl
                        label={ __( 'Card1 Cta — Testo', 'matter-blocks' ) }
                        value={ attributes['card1-cta']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'card1-cta': { ...attributes['card1-cta'], label: v } } ) }
                    />
                    <p className="components-base-control__label">{ __( 'Card1 Cta — Link', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ { url: attributes['card1-cta']?.url || '', opensInNewTab: attributes['card1-cta']?.target === '_blank' } }
                        onChange={ ( v ) => setAttributes( { 'card1-cta': {
                            url: v?.url || '',
                            label: attributes['card1-cta']?.label || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                    />
                    <TextControl
                        label={ __( 'Card2 Cta — Testo', 'matter-blocks' ) }
                        value={ attributes['card2-cta']?.label || '' }
                        onChange={ ( v ) => setAttributes( { 'card2-cta': { ...attributes['card2-cta'], label: v } } ) }
                    />
                    <p className="components-base-control__label">{ __( 'Card2 Cta — Link', 'matter-blocks' ) }</p>
                    <LinkControl
                        value={ { url: attributes['card2-cta']?.url || '', opensInNewTab: attributes['card2-cta']?.target === '_blank' } }
                        onChange={ ( v ) => setAttributes( { 'card2-cta': {
                            url: v?.url || '',
                            label: attributes['card2-cta']?.label || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', 'matter-blocks' ) } ] }
                    />
                </PanelBody>
            </InspectorControls>
            <div { ...blockProps }>
                <ServerSideRender block="matter/services" attributes={ attributes } />
            </div>
        </>
    );
}
