import { SITE_URL } from "../data/site.js";

const AGENTS = [
  "Googlebot", "Bingbot", "GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot",
  "PerplexityBot", "Google-Extended", "Applebot", "Applebot-Extended", "meta-externalagent",
  "facebookexternalhit", "Twitterbot", "Amazonbot", "CCBot",
];

export function GET() {
  const body = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /api/",
    "Disallow: /admin",
    "",
    ...AGENTS.map((a) => `User-agent: ${a}`),
    "Allow: /",
    "Disallow: /api/",
    "Disallow: /admin",
    "",
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
