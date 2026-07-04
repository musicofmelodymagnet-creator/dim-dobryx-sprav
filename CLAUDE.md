# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Official website for **БО МБФ "Дім Добрих Справ"** (House of Good Deeds), a Ukrainian charitable foundation. Deployed via GitHub Pages at `dimdsprav.pp.ua`.

## Development

There is no build step for HTML/JS. Open `index.html` directly in a browser, or run a local HTTP server:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

No package.json, no bundler. All HTML/JS lives in `index.html`.

**CSS**: Tailwind is precompiled into `assets/tailwind.css` (no CDN at runtime). After adding or removing Tailwind utility classes in `index.html`, rebuild it:

```bash
npx tailwindcss@3.4.17 -c tailwind.config.js -i tailwind-input.css -o assets/tailwind.css --minify
```

## Architecture

**Single-file SPA** — all HTML, CSS, and JavaScript is in `index.html` (~1600 lines). Structure inside:

- `<style>` tag — custom CSS with CSS variables (`--green-dark`, `--green-mid`, `--gold`) and section-specific styles
- `assets/tailwind.css` — compiled Tailwind (theme in `tailwind.config.js`: custom `primary` palette + Nunito/Cormorant Garamond fonts)
- `<body>` sections in order: `#home` → stats → `#about` → video → `#services` → `#donate` → `#gallery` → `#documents` → `#contact` → footer
- `<script>` tag at bottom — all JS (~400 lines), no imports

### Key JS Patterns

**i18n** — translations object at top of `<script>` with 250+ keys for `uk`/`en`. `switchLang(lang)` updates all `data-i18n`, `data-i18n-html`, and `data-i18n-placeholder` attributes. Language is persisted in `localStorage`.

**Contact obfuscation** — phone and email are NOT in HTML source. They're assembled at runtime for elements with `data-obf="phone"` / `data-obf="email"` to prevent bot scraping.

**Expandable gallery** — 12 photos are always in the DOM; the rest are injected via `DocumentFragment` when the user clicks "Show all". Grid tiles use WebP thumbnails from `media/gallery/thumbs/` (`thumbOf()` maps original → thumb); the lightbox loads full-size JPG originals. Lightbox uses keyboard navigation (←/→/Escape).

**Scroll animations** — three IntersectionObservers: scroll-reveal for sections, animated stat counters, and video scale-up on reveal.

### Content Security Policy

Defined in a `<meta>` tag. When adding new external resources (fonts, scripts, CDN links), the CSP must be updated to allow the new origin.

## Media & Docs

- `media/gallery/` — 162 numbered JPG files used in the gallery section (two `photo_2023-07-13*` files are the fund's logo and are excluded from the gallery)
- `media/gallery/thumbs/` — 480px WebP thumbnails, one per gallery JPG. Regenerate with PIL if photos are added (quality 72, longest side 480)
- `media/hero-photo.webp`, `media/og-image.jpg`, `media/video-poster.jpg` — generated hero/social/poster assets
- `media/*.mp4` — hero video (lazy-loaded: `preload="none"` + poster, played via IntersectionObserver)
- `docs/` — PDF organization documents (Statut, Vipiska, Vityag) and `schet.jpg` (bank account for donations)

## Deployment

Push to `main` branch — GitHub Pages deploys automatically. The `CNAME` file sets the custom domain. No CI/CD configuration needed.
