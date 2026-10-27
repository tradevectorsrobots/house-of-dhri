# House of Dhri — To-do list

Last updated: 2026-10-28

Owners: **Ankur** · **Vidhi** · **Claude** (AI assistant, works from Ankur's machine)

> **V1 is frozen** (tag `v1.0`, 2026-10-28). No changes to the `V1/` code until it's unfrozen. It can still be deployed as it is. Tasks marked ⏸ need a code change and wait for the unfreeze, or move into V2.

---

## 1. Go live (in progress)

- [ ] **Send Vidhi the Cloudflare verification steps** (email draft is in Ankur's Gmail; WhatsApp text in chat)
  Owner: Ankur
- [ ] **Verify the Cloudflare account email** — click the link in the email from Cloudflare (or "Resend verification email" on dash.cloudflare.com)
  Owner: Vidhi · Blocks everything below in this section
- [ ] **Create the Cloudflare Pages project** from the GitHub repo — root `V1`, build `npm run build`, output `dist`
  Owner: Claude · Blocked by: Cloudflare email verification
- [ ] **Approve Cloudflare's access to the GitHub repo** (only `house-of-dhri`) when GitHub asks
  Owner: Ankur · Blocked by: Pages project setup
- [ ] **Connect `houseofdhri.com` and `www.houseofdhri.com`** to the site and remove the old Wix records (email records stay)
  Owner: Claude · Blocked by: first deploy
- [ ] **Check the live site** — HTTPS, `www` → main domain redirect, every page, sitemap, robots.txt, mobile
  Owner: Claude · Blocked by: domain connected

## 2. Google presence

- [ ] **Google Business Profile — decide the basics**
  Owner: Ankur
  - Storefront (customers visit an address) or service-area business (no showroom; address kept hidden)
  - Address Google will verify against (required even if hidden)
  - Primary category (e.g. Jewelry designer / Jewelry store) and extra categories
  - Phone (+91 70210 01862?), hours, service areas (cities from the SEO list)
  - Which Google account will own the profile (Vidhi as manager?)
- [ ] **Google Business Profile — prepare the content** — business description, services list, categories, photo set from the site, first posts
  Owner: Claude · After: basics decided
- [ ] **Google Business Profile — create and verify** at business.google.com (Google sends a code by video, phone or post)
  Owner: Ankur (Vidhi can be added as manager) · After: content ready
- [ ] **Google Search (Search Console)** — add `houseofdhri.com`, verify through Cloudflare DNS, submit `sitemap.xml`, request indexing of the home and collection pages
  Owner: Ankur (Google account) + Claude (DNS record, sitemap, indexing requests) · Blocked by: site live
- [ ] **Bing Webmaster Tools** — import from Search Console, submit sitemap
  Owner: Ankur + Claude · After: Search Console
- [ ] **Google Analytics (GA4) — create the property** for `houseofdhri.com` and share the Measurement ID (`G-…`)
  Owner: Ankur (Google account)
- [ ] **Google Analytics — add to the site** — tracking tag on every page, plus events for WhatsApp clicks, enquiry-form sends and quick-view opens
  Owner: Claude · After: Measurement ID · ⏸ On hold: V1 frozen
- [ ] **Google Analytics — link to Search Console** so search queries show up in Analytics
  Owner: Ankur · After: both set up
- [ ] **Cookie consent** — needed for Analytics if visitors from the UK/Europe are targeted; decide banner vs a cookie-free option (e.g. Cloudflare Web Analytics)
  Owner: Ankur (decide) → Claude (build) · ⏸ On hold: V1 frozen
- [ ] **Add social profile links** (Instagram etc.) to the site's structured data once they exist
  Owner: Ankur (send links) → Claude (add) · ⏸ On hold: V1 frozen

## 3. AI search engines & indexing

- [ ] **Allow AI search crawlers** — confirm Cloudflare's AI Crawl Control lets ChatGPT, Claude, Perplexity, Gemini, Copilot and Apple crawlers through (robots.txt already allows them)
  Owner: Claude · Blocked by: site live
- [ ] **Add `llms.txt`** (and `llms-full.txt`) — plain-language summary of the house, collections, pieces, materials and contact, generated with each build
  Owner: Claude · ⏸ On hold: V1 frozen
- [ ] **IndexNow** — key file plus an automatic ping on every deploy, so Bing (which feeds ChatGPT search and Copilot), Yandex and others pick up changes within hours
  Owner: Claude · Blocked by: site live · ⏸ On hold: V1 frozen
- [ ] **Check indexing** — after 1–2 weeks, confirm all 17 pages are indexed in Google and Bing, and test how ChatGPT, Perplexity and Gemini answer questions about House of Dhri
  Owner: Claude (report) + Ankur (review)

## 4. Enquiry inbox (Cloudflare D1)

- [ ] **Decide the details** — who gets notified of a new enquiry and how (email / WhatsApp), who can read the inbox, how long enquiries are kept, and whether the form should still open WhatsApp after sending
  Owner: Ankur
- [ ] **Create the D1 database** and enquiries table on Cloudflare
  Owner: Claude · Blocked by: Cloudflare email verification, Pages project
- [ ] **Build the form backend** — Pages Function that checks and saves each enquiry to D1, with Cloudflare Turnstile spam protection
  Owner: Claude · After: database · ⏸ On hold: V1 frozen
- [ ] **New-enquiry notification** to the chosen inbox
  Owner: Claude · After: decisions
- [ ] **Private enquiries view** (password-protected, not indexed) to read and mark enquiries
  Owner: Claude · After: backend · ⏸ On hold: V1 frozen
- [ ] **Privacy note** on the contact page saying what is stored and why (India DPDP Act; GDPR for UK/EU visitors)
  Owner: Ankur (approve wording) + Claude (draft) · ⏸ On hold: V1 frozen

## 5. Decisions needed

- [ ] **Natural diamonds, gold and silver** — mention them on the visible site, or remove them from the SEO structured data (Google expects the two to match)
  Owner: Ankur · ⏸ On hold: V1 frozen
- [ ] **Scrolled header** — keep blur-only (as in the reference) or add the dark background
  Owner: Ankur · ⏸ On hold: V1 frozen
- [ ] **@houseofdhri.com email** — confirm whether it's used; its GoDaddy records were kept as-is
  Owner: Ankur

## 6. Website V2

- [ ] **Brief for V2** — what should differ from V1 and why
  Owner: Ankur
- [ ] **Build V2** in `V2/`
  Owner: Claude · After: brief

## 7. Later

- [ ] **Move the domain registration from GoDaddy to Cloudflare** — allowed from about 15 Dec 2026; needs the transfer code from GoDaddy and a 1-year renewal payment
  Owner: Ankur
- [ ] **Compress large images** (hero and collection photos are 600–770 KB each) for faster mobile loading
  Owner: Claude · ⏸ On hold: V1 frozen

---

## Done

- [x] GitHub repo connected, V1 pushed to `main` — Claude (2026-10-28)
- [x] Domain DNS moved from GoDaddy to Cloudflare; Cloudflare shows the domain active — Claude + Ankur (2026-10-28)
- [x] Website V1 built and checked against the reference design — Claude (2026-10-28)
- [x] V1 frozen and tagged `v1.0` — Ankur + Claude (2026-10-28)
