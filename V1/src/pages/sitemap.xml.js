import { COLLECTIONS } from "../data/site.js";
import { PRODUCTS } from "../data/products.js";
import { absUrl } from "../data/seo.js";

const ROUTES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/collections", priority: "0.9", changefreq: "weekly" },
  ...COLLECTIONS.map((c) => ({ path: `/collections/${c.slug}`, priority: "0.8", changefreq: "weekly" })),
  ...PRODUCTS.map((p) => ({ path: `/pieces/${p.slug}`, priority: "0.7", changefreq: "monthly", images: p.images, title: p.name })),
  { path: "/diamonds-and-materials", priority: "0.7", changefreq: "monthly" },
  { path: "/our-story", priority: "0.6", changefreq: "monthly" },
  { path: "/contact", priority: "0.6", changefreq: "yearly" },
];

export function GET() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = ROUTES.map((r) => {
    const images = (r.images || [])
      .map((src) => `\n    <image:image><image:loc>${absUrl(src)}</image:loc><image:title>${r.title}</image:title></image:image>`)
      .join("");
    return `  <url>\n    <loc>${absUrl(r.path)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>${images}\n  </url>`;
  }).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
