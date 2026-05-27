# matter-blocks

Plugin WordPress generato con la skill `html-to-blocks`.

## Blocchi inclusi

- `matter/site-header`
- `matter/hero`
- `matter/intro`
- `matter/gallery`
- `matter/services`
- `matter/paths`
- `matter/partners`
- `matter/testimonials`
- `matter/locations`
- `matter/faq`
- `matter/site-footer`

Namespace: `matter`.

## Build & install

```bash
npm install
npm run build
```

Poi attiva il plugin da **wp-admin → Plugins**.

## Sviluppo

- `npm run start` — watcher di sviluppo (hot reload del build).
- `npm run format` — formatta JS/CSS secondo lo standard WordPress.
- `npm run lint:js` — lint JavaScript.

## Struttura

```
matter-blocks/
├── matter-blocks.php       # entry point: registra blocchi + enqueue shared CSS
├── src/
│   ├── shared.css      # regole CSS non BEM-scoped
│   └── blocks/
│       └── <nome>/
│           ├── block.json
│           ├── index.js
│           ├── edit.js
│           ├── render.php
│           └── style.css
└── build/              # generato da wp-scripts (NON modificare a mano)
```

## Modificare un blocco

Per modifiche al markup, edita `src/blocks/<nome>/render.php`. Il render è
**dinamico**: nessuna deprecation necessaria.

Per aggiungere attributi editabili:

1. Aggiungi l'attributo in `src/blocks/<nome>/block.json` (sezione `attributes`).
2. Aggiungi il controllo corrispondente in `src/blocks/<nome>/edit.js`.
3. Usa l'attributo in `src/blocks/<nome>/render.php` con escape appropriato.

## Rigenerare da HTML

Se il template HTML sorgente cambia, rigenera i blocchi con la skill
`html-to-blocks`. ATTENZIONE: la rigenerazione sovrascrive `src/blocks/*`.
Fai backup di eventuali modifiche manuali prima di rigenerare.
