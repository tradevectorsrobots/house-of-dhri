# House of Dhri — Website V1

Static Astro build of the House of Dhri site (8 page types, 17 routes), recreated from the Emergent preview design.

## Commands

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve dist/ locally
```

Requires Node 22.23 or newer.

## Structure

- `src/pages/` — one file per route; `collections/[slug]` and `pieces/[slug]` are generated from data
- `src/data/` — collections and contact details (`site.js`), pieces (`products.js`), SEO/structured data (`seo.js`)
- `src/components/` — shared sections; `home/` holds the home page sections
- `src/scripts/site.js` — all client behaviour (smooth scroll, reveals, menu, quick view, gallery, FAQ, enquiry form)
- `src/styles/global.css` — brand styles and the animation layer
- `public/` — images, logos, icons

Build output uses clean URLs without trailing slashes (`/collections` → `collections.html`), plus `sitemap.xml`, `robots.txt` and `404.html`.

## Deploying (Cloudflare Pages)

- Root directory: `V1`
- Build command: `npm run build`
- Output directory: `dist`

## Notes

- The enquiry form has no backend: on submit it opens WhatsApp with the enquiry written out.
- Animations only hide content once JavaScript has loaded, so pages stay readable without it.
