// Fails the build if visible copy breaks the house writing rules:
// no dashes of any kind (em, en, or a hyphen joining words), and none of the banned "AI" words.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const DIST = fileURLToPath(new URL("../dist/", import.meta.url));

const BANNED = [
  "elevate", "elevated", "elevates", "elevating", "testament", "beacon", "symphony", "delve", "delves", "delving",
  "tapestry", "unparalleled", "redefine", "redefines", "redefining", "seamless", "seamlessly", "curated", "exquisite",
  "meticulous", "meticulously", "embark", "unlock", "realm", "nestled", "captivating", "timeless", "elegance",
];
const PHRASES = ["bespoke craftsmanship meets timeless elegance"];

const files = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith(".html")) files.push(p);
  }
};
walk(DIST);

const decode = (s) =>
  s.replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)));

const problems = [];
for (const file of files) {
  const html = readFileSync(file, "utf8");
  const chunks = [];
  // attribute text people see or hear
  for (const m of html.matchAll(/\s(?:alt|aria-label|title|placeholder)="([^"]*)"/g)) chunks.push(m[1]);
  for (const m of html.matchAll(/<meta\s+(?:name|property)="(?:description|og:title|og:description|twitter:title|twitter:description)"\s+content="([^"]*)"/g)) chunks.push(m[1]);
  for (const m of html.matchAll(/<title>([^<]*)<\/title>/g)) chunks.push(m[1]);
  // body text, without code and markup
  const body = html
    .replace(/<head>[\s\S]*?<\/head>/i, " ")
    .replace(/<(script|style|svg|template)\b[\s\S]*?<\/\1>/gi, " ")
    .replace(/<[^>]+>/g, "\n");
  chunks.push(...body.split("\n"));

  for (const raw of chunks) {
    const text = decode(raw).trim();
    if (!text) continue;
    const where = relative(DIST, file);
    if (/[‒–—―−]/.test(text)) problems.push(`${where}: dash in "${text}"`);
    if (/\p{L}-\p{L}|\s-\s|\s-$|^-\s/u.test(text)) problems.push(`${where}: hyphen in "${text}"`);
    const lower = text.toLowerCase();
    for (const w of BANNED) if (new RegExp(`\\b${w}\\b`, "i").test(lower)) problems.push(`${where}: banned word "${w}" in "${text}"`);
    for (const p of PHRASES) if (lower.includes(p)) problems.push(`${where}: banned phrase in "${text}"`);
  }
}

const unique = [...new Set(problems)];
if (unique.length) {
  console.error(`\nCopy check failed (${unique.length}):`);
  for (const p of unique) console.error(" - " + p);
  process.exit(1);
}
console.log(`Copy check passed: ${files.length} pages, no dashes or banned words.`);
