import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck, MediaPlaceholder } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl, Button } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Editor del blocco matter/lounge-ritual.
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
                        label={ __( 'Slide1 Num', 'matter-blocks' ) }
                        value={ attributes['slide1-num'] || '' }
                        onChange={ ( v ) => setAttributes( { 'slide1-num': v } ) }
                    />
                    <TextControl
                        label={ __( 'Slide1 Kicker', 'matter-blocks' ) }
                        value={ attributes['slide1-kicker'] || '' }
                        onChange={ ( v ) => setAttributes( { 'slide1-kicker': v } ) }
                    />
                    <TextControl
                        label={ __( 'Slide1 Title', 'matter-blocks' ) }
                        value={ attributes['slide1-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'slide1-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Slide1 Desc', 'matter-blocks' ) }
                        value={ attributes['slide1-desc'] || '' }
                        onChange={ ( v ) => setAttributes( { 'slide1-desc': v } ) }
                    />
                    <TextControl
                        label={ __( 'Slide2 Num', 'matter-blocks' ) }
                        value={ attributes['slide2-num'] || '' }
                        onChange={ ( v ) => setAttributes( { 'slide2-num': v } ) }
                    />
                    <TextControl
                        label={ __( 'Slide2 Kicker', 'matter-blocks' ) }
                        value={ attributes['slide2-kicker'] || '' }
                        onChange={ ( v ) => setAttributes( { 'slide2-kicker': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Slide2 Title', 'matter-blocks' ) }
                        value={ attributes['slide2-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'slide2-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Slide2 Desc', 'matter-blocks' ) }
                        value={ attributes['slide2-desc'] || '' }
                        onChange={ ( v ) => setAttributes( { 'slide2-desc': v } ) }
                    />
                    <TextControl
                        label={ __( 'Slide3 Num', 'matter-blocks' ) }
                        value={ attributes['slide3-num'] || '' }
                        onChange={ ( v ) => setAttributes( { 'slide3-num': v } ) }
                    />
                    <TextControl
                        label={ __( 'Slide3 Kicker', 'matter-blocks' ) }
                        value={ attributes['slide3-kicker'] || '' }
                        onChange={ ( v ) => setAttributes( { 'slide3-kicker': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Slide3 Title', 'matter-blocks' ) }
                        value={ attributes['slide3-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'slide3-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Slide3 Desc', 'matter-blocks' ) }
                        value={ attributes['slide3-desc'] || '' }
                        onChange={ ( v ) => setAttributes( { 'slide3-desc': v } ) }
                    />
                    <TextControl
                        label={ __( 'Slide4 Num', 'matter-blocks' ) }
                        value={ attributes['slide4-num'] || '' }
                        onChange={ ( v ) => setAttributes( { 'slide4-num': v } ) }
                    />
                    <TextControl
                        label={ __( 'Slide4 Kicker', 'matter-blocks' ) }
                        value={ attributes['slide4-kicker'] || '' }
                        onChange={ ( v ) => setAttributes( { 'slide4-kicker': v } ) }
                    />
                    <TextControl
                        label={ __( 'Slide4 Title', 'matter-blocks' ) }
                        value={ attributes['slide4-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'slide4-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Slide4 Desc', 'matter-blocks' ) }
                        value={ attributes['slide4-desc'] || '' }
                        onChange={ ( v ) => setAttributes( { 'slide4-desc': v } ) }
                    />
                    <TextControl
                        label={ __( 'Slide5 Num', 'matter-blocks' ) }
                        value={ attributes['slide5-num'] || '' }
                        onChange={ ( v ) => setAttributes( { 'slide5-num': v } ) }
                    />
                    <TextControl
                        label={ __( 'Slide5 Kicker', 'matter-blocks' ) }
                        value={ attributes['slide5-kicker'] || '' }
                        onChange={ ( v ) => setAttributes( { 'slide5-kicker': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Slide5 Title', 'matter-blocks' ) }
                        value={ attributes['slide5-title'] || '' }
                        onChange={ ( v ) => setAttributes( { 'slide5-title': v } ) }
                    />
                    <TextareaControl
                        label={ __( 'Slide5 Desc', 'matter-blocks' ) }
                        value={ attributes['slide5-desc'] || '' }
                        onChange={ ( v ) => setAttributes( { 'slide5-desc': v } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Immagini', 'matter-blocks' ) } initialOpen={ false }>
                    <p className="components-base-control__label">Slide1 Img</p>
                    { ! attributes['slide1-img']?.url ? (
                        <MediaPlaceholder
                            onSelect={ ( m ) => setAttributes( { 'slide1-img': { url: m.url, alt: m.alt || '', id: m.id } } ) }
                            accept="image/*"
                            allowedTypes={ [ 'image' ] }
                            labels={ { title: __( 'Aggiungi immagine', 'matter-blocks' ) } }
                        />
                    ) : (
                        <>
                            <img src={ attributes['slide1-img'].url } alt="" style={ { maxWidth: '100%', height: 'auto', marginTop: '8px', borderRadius: '4px' } } />
                            <div style={ { display: 'flex', gap: '8px', marginTop: '8px' } }>
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={ ( m ) => setAttributes( { 'slide1-img': { url: m.url, alt: m.alt || '', id: m.id } } ) }
                                        allowedTypes={ [ 'image' ] }
                                        value={ attributes['slide1-img']?.id }
                                        render={ ( { open } ) => (
                                            <Button variant="secondary" onClick={ open }>{ __( 'Sostituisci', 'matter-blocks' ) }</Button>
                                        ) }
                                    />
                                </MediaUploadCheck>
                                <Button variant="tertiary" isDestructive onClick={ () => setAttributes( { 'slide1-img': { url: '', alt: '', id: 0 } } ) }>{ __( 'Rimuovi', 'matter-blocks' ) }</Button>
                            </div>
                            <TextControl
                                label={ __( 'Testo alternativo', 'matter-blocks' ) }
                                help={ __( 'Descrizione dell\'immagine per screen reader e SEO.', 'matter-blocks' ) }
                                value={ attributes['slide1-img']?.alt || '' }
                                onChange={ ( alt ) => setAttributes( { 'slide1-img': { ...attributes['slide1-img'], alt } } ) }
                                __nextHasNoMarginBottom
                            />
                        </>
                    ) }
                    <p className="components-base-control__label">Slide2 Img</p>
                    { ! attributes['slide2-img']?.url ? (
                        <MediaPlaceholder
                            onSelect={ ( m ) => setAttributes( { 'slide2-img': { url: m.url, alt: m.alt || '', id: m.id } } ) }
                            accept="image/*"
                            allowedTypes={ [ 'image' ] }
                            labels={ { title: __( 'Aggiungi immagine', 'matter-blocks' ) } }
                        />
                    ) : (
                        <>
                            <img src={ attributes['slide2-img'].url } alt="" style={ { maxWidth: '100%', height: 'auto', marginTop: '8px', borderRadius: '4px' } } />
                            <div style={ { display: 'flex', gap: '8px', marginTop: '8px' } }>
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={ ( m ) => setAttributes( { 'slide2-img': { url: m.url, alt: m.alt || '', id: m.id } } ) }
                                        allowedTypes={ [ 'image' ] }
                                        value={ attributes['slide2-img']?.id }
                                        render={ ( { open } ) => (
                                            <Button variant="secondary" onClick={ open }>{ __( 'Sostituisci', 'matter-blocks' ) }</Button>
                                        ) }
                                    />
                                </MediaUploadCheck>
                                <Button variant="tertiary" isDestructive onClick={ () => setAttributes( { 'slide2-img': { url: '', alt: '', id: 0 } } ) }>{ __( 'Rimuovi', 'matter-blocks' ) }</Button>
                            </div>
                            <TextControl
                                label={ __( 'Testo alternativo', 'matter-blocks' ) }
                                help={ __( 'Descrizione dell\'immagine per screen reader e SEO.', 'matter-blocks' ) }
                                value={ attributes['slide2-img']?.alt || '' }
                                onChange={ ( alt ) => setAttributes( { 'slide2-img': { ...attributes['slide2-img'], alt } } ) }
                                __nextHasNoMarginBottom
                            />
                        </>
                    ) }
                    <p className="components-base-control__label">Slide3 Img</p>
                    { ! attributes['slide3-img']?.url ? (
                        <MediaPlaceholder
                            onSelect={ ( m ) => setAttributes( { 'slide3-img': { url: m.url, alt: m.alt || '', id: m.id } } ) }
                            accept="image/*"
                            allowedTypes={ [ 'image' ] }
                            labels={ { title: __( 'Aggiungi immagine', 'matter-blocks' ) } }
                        />
                    ) : (
                        <>
                            <img src={ attributes['slide3-img'].url } alt="" style={ { maxWidth: '100%', height: 'auto', marginTop: '8px', borderRadius: '4px' } } />
                            <div style={ { display: 'flex', gap: '8px', marginTop: '8px' } }>
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={ ( m ) => setAttributes( { 'slide3-img': { url: m.url, alt: m.alt || '', id: m.id } } ) }
                                        allowedTypes={ [ 'image' ] }
                                        value={ attributes['slide3-img']?.id }
                                        render={ ( { open } ) => (
                                            <Button variant="secondary" onClick={ open }>{ __( 'Sostituisci', 'matter-blocks' ) }</Button>
                                        ) }
                                    />
                                </MediaUploadCheck>
                                <Button variant="tertiary" isDestructive onClick={ () => setAttributes( { 'slide3-img': { url: '', alt: '', id: 0 } } ) }>{ __( 'Rimuovi', 'matter-blocks' ) }</Button>
                            </div>
                            <TextControl
                                label={ __( 'Testo alternativo', 'matter-blocks' ) }
                                help={ __( 'Descrizione dell\'immagine per screen reader e SEO.', 'matter-blocks' ) }
                                value={ attributes['slide3-img']?.alt || '' }
                                onChange={ ( alt ) => setAttributes( { 'slide3-img': { ...attributes['slide3-img'], alt } } ) }
                                __nextHasNoMarginBottom
                            />
                        </>
                    ) }
                    <p className="components-base-control__label">Slide4 Img</p>
                    { ! attributes['slide4-img']?.url ? (
                        <MediaPlaceholder
                            onSelect={ ( m ) => setAttributes( { 'slide4-img': { url: m.url, alt: m.alt || '', id: m.id } } ) }
                            accept="image/*"
                            allowedTypes={ [ 'image' ] }
                            labels={ { title: __( 'Aggiungi immagine', 'matter-blocks' ) } }
                        />
                    ) : (
                        <>
                            <img src={ attributes['slide4-img'].url } alt="" style={ { maxWidth: '100%', height: 'auto', marginTop: '8px', borderRadius: '4px' } } />
                            <div style={ { display: 'flex', gap: '8px', marginTop: '8px' } }>
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={ ( m ) => setAttributes( { 'slide4-img': { url: m.url, alt: m.alt || '', id: m.id } } ) }
                                        allowedTypes={ [ 'image' ] }
                                        value={ attributes['slide4-img']?.id }
                                        render={ ( { open } ) => (
                                            <Button variant="secondary" onClick={ open }>{ __( 'Sostituisci', 'matter-blocks' ) }</Button>
                                        ) }
                                    />
                                </MediaUploadCheck>
                                <Button variant="tertiary" isDestructive onClick={ () => setAttributes( { 'slide4-img': { url: '', alt: '', id: 0 } } ) }>{ __( 'Rimuovi', 'matter-blocks' ) }</Button>
                            </div>
                            <TextControl
                                label={ __( 'Testo alternativo', 'matter-blocks' ) }
                                help={ __( 'Descrizione dell\'immagine per screen reader e SEO.', 'matter-blocks' ) }
                                value={ attributes['slide4-img']?.alt || '' }
                                onChange={ ( alt ) => setAttributes( { 'slide4-img': { ...attributes['slide4-img'], alt } } ) }
                                __nextHasNoMarginBottom
                            />
                        </>
                    ) }
                    <p className="components-base-control__label">Slide5 Img</p>
                    { ! attributes['slide5-img']?.url ? (
                        <MediaPlaceholder
                            onSelect={ ( m ) => setAttributes( { 'slide5-img': { url: m.url, alt: m.alt || '', id: m.id } } ) }
                            accept="image/*"
                            allowedTypes={ [ 'image' ] }
                            labels={ { title: __( 'Aggiungi immagine', 'matter-blocks' ) } }
                        />
                    ) : (
                        <>
                            <img src={ attributes['slide5-img'].url } alt="" style={ { maxWidth: '100%', height: 'auto', marginTop: '8px', borderRadius: '4px' } } />
                            <div style={ { display: 'flex', gap: '8px', marginTop: '8px' } }>
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={ ( m ) => setAttributes( { 'slide5-img': { url: m.url, alt: m.alt || '', id: m.id } } ) }
                                        allowedTypes={ [ 'image' ] }
                                        value={ attributes['slide5-img']?.id }
                                        render={ ( { open } ) => (
                                            <Button variant="secondary" onClick={ open }>{ __( 'Sostituisci', 'matter-blocks' ) }</Button>
                                        ) }
                                    />
                                </MediaUploadCheck>
                                <Button variant="tertiary" isDestructive onClick={ () => setAttributes( { 'slide5-img': { url: '', alt: '', id: 0 } } ) }>{ __( 'Rimuovi', 'matter-blocks' ) }</Button>
                            </div>
                            <TextControl
                                label={ __( 'Testo alternativo', 'matter-blocks' ) }
                                help={ __( 'Descrizione dell\'immagine per screen reader e SEO.', 'matter-blocks' ) }
                                value={ attributes['slide5-img']?.alt || '' }
                                onChange={ ( alt ) => setAttributes( { 'slide5-img': { ...attributes['slide5-img'], alt } } ) }
                                __nextHasNoMarginBottom
                            />
                        </>
                    ) }
                </PanelBody>
            </InspectorControls>
            <div { ...blockProps }>
                <ServerSideRender block="matter/lounge-ritual" attributes={ attributes } />
            </div>
        </>
    );
}
