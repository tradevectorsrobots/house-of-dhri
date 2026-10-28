# House of Dhri — Website V2

An original static Astro site for House of Dhri: custom jewellery design, diamond sourcing and in house making.
Only the brand name and logo come from the earlier design; layout, colours, type, copy and page structure are new.

## Commands

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # builds to dist/, then checks the copy rules
npm run preview   # serve dist/ locally
node scripts/image-prompts.mjs   # regenerate IMAGE-PROMPTS.md
```

Requires Node 22.23 or newer.

## Design system

| Token | Hex | Use |
|---|---|---|
| Panna (emerald) | `#0E3B32` | Hero, header, footer, dark sections |
| Pearl | `#EEF0EC` | Page background |
| Ink | `#14231E` | Text |
| Sona (gold) | `#C9A55C` | Drawing lines, rules, logo |
| Manik (ruby) | `#9C1C47` | The one accent: actions and selected states on light backgrounds |
| Mist | `#DCE2DE` | Quiet panels |

Type: Fraunces (display, soft axis on) and Hanken Grotesk (text), self hosted through Fontsource.
Signature element: the home hero lets visitors drag between a gold drawing and the finished ring.

## Pages

`/`, `/bespoke/`, `/engagement-and-couple-rings/`, `/collections/` and `/collections/{modern,art,classical,traditional}/`,
`/diamonds-and-certification/`, `/our-story/`, `/contact/`, plus `404.html`, `sitemap.xml`, `robots.txt`.

## Content

- `src/data/site.js` — contact details, navigation, cities, jewellery types
- `src/data/designs.js` — the four styles and every design idea shown
- `src/data/faqs.js` — FAQs (also published as FAQPage structured data)
- `src/data/images.js` — every photo, its alt text, source and replacement brief (see IMAGE-PROMPTS.md)
- `src/data/seo.js` — JewelryStore, Organization, Product, FAQPage and breadcrumb structured data

## Copy rules

Plain English, no dashes of any kind in visible copy, and no "AI" words (elevate, testament, seamless and so on).
`scripts/check-copy.mjs` runs after every build and fails it if a page breaks these rules.

## Hosting

The build uses folder style pages (`bespoke/index.html`), so it works on any static host without rewrite rules.

- GoDaddy / Apache: upload the contents of `dist/`. `public/.htaccess` adds the 404 page, HTTPS redirect and caching.
- Cloudflare Pages: root `V2`, build `npm run build`, output `dist`. `public/_headers` sets caching.

## Enquiries

The contact form has no server: it opens WhatsApp with the enquiry written out. Saving enquiries to a Cloudflare D1
database is on the to-do list.
