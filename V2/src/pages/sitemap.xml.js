import { STYLES } from "../data/designs.js";
import { abs } from "../data/seo.js";

const PAGES = [
  ["/", "1.0", "weekly"],
  ["/engagement-and-couple-rings/", "0.9", "weekly"],
  ["/bespoke/", "0.9", "monthly"],
  ["/collections/", "0.9", "weekly"],
  ...STYLES.map((s) => [`/collections/${s.slug}/`, "0.8", "weekly"]),
  ["/diamonds-and-certification/", "0.8", "monthly"],
  ["/our-story/", "0.6", "monthly"],
  ["/contact/", "0.7", "yearly"],
];

export function GET() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const body = PAGES.map(
    ([path, priority, freq]) =>
      `  <url>\n    <loc>${abs(path)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${freq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`,
  ).join("\n");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
