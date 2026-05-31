# matter-blocks

Plugin companion del block theme **`matter`** (Matter of Fitness): blocchi Gutenberg
**dinamici** (`render.php` + `ServerSideRender`). Senza questo plugin attivo i
template del tema non renderizzano nulla.

Namespace blocchi: `matter`. Categoria editor: **Matter**.

> Gli stili NON vivono qui: tutto il CSS è in `themes/matter/assets/css/source.css`
> (caricato sia in frontend sia nell'editor). Questo plugin contiene solo struttura
> e logica di render dei blocchi.

## Catalogo blocchi (31)

**Generici** (contenuto via attributi, default neutri):
`breadcrumb` (livello padre opzionale `parent-label`/`parent-url`), `page-hero`
(con `address` opzionale), `cta`, `features` (`layout:"tri"` → griglia 3 colonne),
`about-intro`, `pillars`, `timeline`, `steps` (processo numerato 01–04),
`media-cta`, `legal-page` (pagina testuale `.text-page`, fino a 8 sezioni).

**Con default "home"** (override via attributi):
`hero`, `intro`, `gallery` (carosello + lightbox, fino a 5 img), `services`
(2 card + `footer-lead` opzionale), `paths` (fino a 3 feature-row + bullet-list),
`cards-carousel` (carosello di service-card), `partners`, `testimonials`,
`locations` (`section-variant` dark/tint, header condizionale, url card), `faq`.

**Sede / contatti**:
`hours` (tabella orari), `equipment` (griglia attrezzature), `map` (embed Google
Maps + contatti), `contact-form` (modulo mockup `action="#"`, id univoci via `form-id`).

**Matter Lounge** (bespoke, animazioni in `main.js` agganciate per selettore):
`lounge-hero`, `lounge-ritual` (slider pinnato), `lounge-number` (counter),
`lounge-senses` (carosello), `lounge-invite`.

**Strutturali**:
`site-header` (nav da menu WP via `Matter_Nav_Walker` + CTA/Lounge fissi),
`site-footer`.

## Build & install

```bash
npm install
npm run build
```

Poi attiva il plugin da **wp-admin → Plugin**. Dopo il build conviene svuotare la
cache: `wp cache flush`.

## Pipeline di modifica di un blocco (IMPORTANTE)

```bash
# 1) modifica a mano SOLO block.json e render.php del blocco
#    src/blocks/<nome>/{block.json, render.php}

# 2) rigenera gli edit.js da block.json (NON editare edit.js a mano!)
npm run gen:editor        # = node scripts/gen-editor.mjs

# 3) compila
npm run build

# 4) svuota la cache
wp cache flush
```

⚠️ **`src/blocks/*/edit.js` è generato** da `scripts/gen-editor.mjs` e viene
**sovrascritto** ad ogni run: non modificarlo a mano. Il generator classifica gli
attributi dal `block.json`:

- `type: "string"` → `TextControl` (o `TextareaControl` se lungo / chiave
  `lead|desc|body|text`);
- `type: "object"` con chiave `label` nel default → controllo **link**
  (`LinkControl` nativo: testo + URL + "apri in nuova scheda");
- `type: "object"` con chiave `alt` nel default → controllo **immagine**
  (`MediaPlaceholder` / `MediaUpload` + testo alternativo).

L'anteprima usa `ServerSideRender` (mostra il vero `render.php`). Il wrapper ha la
classe `mof-ssr-preview`: nell'editor link/form/iframe non sono interattivi
(regola in `themes/matter/assets/css/editor.css`), così cliccando un link non si
naviga via dalla pagina.

## Convenzione architetturale

Un blocco è una **struttura con default neutri**; il contenuto reale di una pagina
si passa come **attributi nel block comment** (nel `post_content` della pagina). Le
pagine interne usano il template guscio **"About"** del tema. Vedi `CLAUDE.md` alla
radice del repo per il quadro completo (catalogo, stato pagine, gotcha).

## Sviluppo

- `npm run start` — watcher di sviluppo (rebuild automatico).
- `npm run gen:editor` — rigenera gli `edit.js`.
- `npm run format` — formatta JS/CSS (standard WordPress).
- `npm run lint:js` — lint JavaScript.
- `npm run plugin-zip` — crea lo zip distribuibile del plugin.

## Struttura

```
matter-blocks/
├── matter-blocks.php          # entry point: registra i blocchi da build/blocks/*,
│                              # categoria editor, location menu + Matter_Nav_Walker
├── scripts/
│   └── gen-editor.mjs         # rigenera src/blocks/*/edit.js da block.json
├── src/
│   └── blocks/
│       └── <nome>/
│           ├── block.json     # metadati + attributi (a mano)
│           ├── render.php     # render dinamico (a mano)
│           ├── edit.js        # GENERATO da gen-editor.mjs (non editare)
│           └── index.js       # boilerplate registerBlockType
└── build/                     # generato da wp-scripts (NON modificare a mano);
                               # il plugin registra i blocchi da qui
```

## Rigenerare da HTML

I blocchi sono nati dalla skill `html-to-blocks` a partire dai mockup in
`source/matter/`. Da allora il catalogo è stato esteso a mano (nuovi blocchi e
attributi). **Non** rigenerare da zero con la skill: sovrascriverebbe `src/blocks/*`
perdendo le modifiche. Per nuovi blocchi, crea a mano `block.json` + `render.php`
(+ copia un `index.js` esistente) e lancia la pipeline qui sopra.
