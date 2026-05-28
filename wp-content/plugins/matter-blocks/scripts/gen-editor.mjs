#!/usr/bin/env node
/**
 * gen-editor.mjs — Rigenera src/blocks/*\/edit.js per ogni blocco.
 *
 * Strategia: anteprima FEDELE via <ServerSideRender> (il canvas renderizza il
 * vero render.php) + modifica di testi/immagini/link nei pannelli della
 * InspectorControls (barra laterale).
 *
 * Gli attributi vengono classificati dalla forma del default in block.json:
 *   - type "string"                         -> campo testo (Textarea se lungo)
 *   - type "object" con chiave `label`      -> link (url + label + target)
 *   - type "object" con chiave `alt`        -> immagine (MediaUpload + alt)
 *
 * I nomi attributo con trattino si usano SOLO in bracket notation
 * (attributes['cta-primary']) per non rompere il build.
 *
 * Uso:  node scripts/gen-editor.mjs
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname( fileURLToPath( import.meta.url ) );
const blocksDir = join( scriptDir, '..', 'src', 'blocks' );
const TD = 'matter-blocks';

/** Nome attributo -> etichetta leggibile. */
function humanize( key ) {
	return key
		.replace( /[-_]/g, ' ' )
		.replace( /\b\w/g, ( c ) => c.toUpperCase() );
}

/** È un testo lungo (da rendere come Textarea)? */
function isLongText( key, def ) {
	const d = typeof def.default === 'string' ? def.default : '';
	if ( d.length > 40 ) return true;
	return /(^|-)(lead|desc|body|text)(-|$)/.test( key ) || /^[qa]\d+$/.test( key );
}

/** Classifica gli attributi del blocco. */
function classify( attributes ) {
	const texts = [];
	const links = [];
	const images = [];
	for ( const [ key, def ] of Object.entries( attributes || {} ) ) {
		if ( def.type === 'string' ) {
			texts.push( { key, long: isLongText( key, def ) } );
		} else if ( def.type === 'object' ) {
			const dflt = def.default || {};
			if ( 'label' in dflt ) links.push( { key } );
			else if ( 'alt' in dflt ) images.push( { key } );
			else texts.push( { key, long: false } ); // fallback prudente
		}
	}
	return { texts, links, images };
}

function textControl( { key, long } ) {
	const Comp = long ? 'TextareaControl' : 'TextControl';
	return `                    <${ Comp }
                        label={ __( '${ humanize( key ) }', '${ TD }' ) }
                        value={ attributes['${ key }'] || '' }
                        onChange={ ( v ) => setAttributes( { '${ key }': v } ) }
                    />`;
}

function linkControls( { key } ) {
	const label = humanize( key );
	return `                    <TextControl
                        label={ __( '${ label } — Testo', '${ TD }' ) }
                        value={ attributes['${ key }']?.label || '' }
                        onChange={ ( v ) => setAttributes( { '${ key }': { ...attributes['${ key }'], label: v } } ) }
                    />
                    <p className="components-base-control__label">{ __( '${ label } — Link', '${ TD }' ) }</p>
                    <LinkControl
                        value={ { url: attributes['${ key }']?.url || '', opensInNewTab: attributes['${ key }']?.target === '_blank' } }
                        onChange={ ( v ) => setAttributes( { '${ key }': {
                            url: v?.url || '',
                            label: attributes['${ key }']?.label || '',
                            target: v?.opensInNewTab ? '_blank' : ''
                        } } ) }
                        settings={ [ { id: 'opensInNewTab', title: __( 'Apri in una nuova scheda', '${ TD }' ) } ] }
                    />`;
}

function imageControls( { key } ) {
	const label = humanize( key );
	return `                    <p className="components-base-control__label">${ label }</p>
                    { ! attributes['${ key }']?.url ? (
                        <MediaPlaceholder
                            onSelect={ ( m ) => setAttributes( { '${ key }': { url: m.url, alt: m.alt || '', id: m.id } } ) }
                            accept="image/*"
                            allowedTypes={ [ 'image' ] }
                            labels={ { title: __( 'Aggiungi immagine', '${ TD }' ) } }
                        />
                    ) : (
                        <>
                            <img src={ attributes['${ key }'].url } alt="" style={ { maxWidth: '100%', height: 'auto', marginTop: '8px', borderRadius: '4px' } } />
                            <div style={ { display: 'flex', gap: '8px', marginTop: '8px' } }>
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={ ( m ) => setAttributes( { '${ key }': { url: m.url, alt: m.alt || '', id: m.id } } ) }
                                        allowedTypes={ [ 'image' ] }
                                        value={ attributes['${ key }']?.id }
                                        render={ ( { open } ) => (
                                            <Button variant="secondary" onClick={ open }>{ __( 'Sostituisci', '${ TD }' ) }</Button>
                                        ) }
                                    />
                                </MediaUploadCheck>
                                <Button variant="tertiary" isDestructive onClick={ () => setAttributes( { '${ key }': { url: '', alt: '', id: 0 } } ) }>{ __( 'Rimuovi', '${ TD }' ) }</Button>
                            </div>
                        </>
                    ) }
                    <TextControl
                        label={ __( '${ label } — Testo alternativo', '${ TD }' ) }
                        value={ attributes['${ key }']?.alt || '' }
                        onChange={ ( alt ) => setAttributes( { '${ key }': { ...attributes['${ key }'], alt } } ) }
                    />`;
}

function buildEdit( blockName, { texts, links, images } ) {
	// Import dinamici in base ai controlli usati.
	const beImports = [ 'useBlockProps', 'InspectorControls' ];
	const compImports = [ 'PanelBody' ];
	if ( texts.length ) {
		if ( texts.some( ( t ) => ! t.long ) ) compImports.push( 'TextControl' );
		if ( texts.some( ( t ) => t.long ) ) compImports.push( 'TextareaControl' );
	}
	if ( links.length ) {
		beImports.push( 'LinkControl' );
		if ( ! compImports.includes( 'TextControl' ) ) compImports.push( 'TextControl' );
	}
	if ( images.length ) {
		beImports.push( 'MediaUpload', 'MediaUploadCheck', 'MediaPlaceholder' );
		compImports.push( 'Button' );
		if ( ! compImports.includes( 'TextControl' ) ) compImports.push( 'TextControl' );
	}

	const panels = [];
	if ( texts.length ) {
		panels.push(
			`                <PanelBody title={ __( 'Testi', '${ TD }' ) } initialOpen={ true }>
${ texts.map( textControl ).join( '\n' ) }
                </PanelBody>`
		);
	}
	if ( images.length ) {
		panels.push(
			`                <PanelBody title={ __( 'Immagini', '${ TD }' ) } initialOpen={ false }>
${ images.map( imageControls ).join( '\n' ) }
                </PanelBody>`
		);
	}
	if ( links.length ) {
		panels.push(
			`                <PanelBody title={ __( 'Link', '${ TD }' ) } initialOpen={ false }>
${ links.map( linkControls ).join( '\n' ) }
                </PanelBody>`
		);
	}

	const beLine = `import { ${ beImports.join( ', ' ) } } from '@wordpress/block-editor';`;
	const compLine = compImports.length
		? `import { ${ compImports.join( ', ' ) } } from '@wordpress/components';`
		: '';

	return `import { __ } from '@wordpress/i18n';
${ beLine }
${ compLine }
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Editor del blocco ${ blockName }.
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
${ panels.join( '\n' ) }
            </InspectorControls>
            <div { ...blockProps }>
                <ServerSideRender block="${ blockName }" attributes={ attributes } />
            </div>
        </>
    );
}
`;
}

// --- main ---
let count = 0;
for ( const name of readdirSync( blocksDir ) ) {
	const blockJsonPath = join( blocksDir, name, 'block.json' );
	const editPath = join( blocksDir, name, 'edit.js' );
	if ( ! existsSync( blockJsonPath ) ) continue;

	const meta = JSON.parse( readFileSync( blockJsonPath, 'utf8' ) );
	const buckets = classify( meta.attributes );
	const code = buildEdit( meta.name, buckets );
	writeFileSync( editPath, code, 'utf8' );
	count++;
	console.log(
		`  ✓ ${ meta.name } — ${ buckets.texts.length } testi, ${ buckets.images.length } immagini, ${ buckets.links.length } link`
	);
}
console.log( `gen-editor: rigenerati ${ count } edit.js` );
