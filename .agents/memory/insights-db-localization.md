---
name: Insights/blog DB localization & routing
description: How the public Insights surfaces map bilingual content and routes onto DB posts that only have English slugs.
---

# Insights/blog: DB posts, localization, and routing

The public Insights/blog surfaces (home Insights section, InsightsPage, ArticlePage) are DB-driven via `GET /api/posts` and `GET /api/posts/:slug`. Content is bilingual via paired columns (`titleEn`/`titleFr`, `bodyEn`/`bodyFr`, etc.); `client/src/lib/posts.ts#localizePost(post, "en"|"fr")` flattens a post for the active language.

## Slugs are English-only, but FR routes exist
- DB posts have a single `slug` (English). There is **no** `slugFr` column.
- App.tsx defines both `/insights/:slug` and `/fr/publications/:slug`, both rendering `ArticlePage`.
- **Rule:** locale-aware links reuse the *same English slug* — `isFr ? /fr/publications/${slug} : /insights/${slug}`. The language toggle is independent of the URL (LanguageContext, not the route, decides EN/FR).
- **Why:** earlier hardcoded data had a `slugFr`; the DB schema dropped it. Linking FR cards to the English slug under the `/fr/publications` path keeps locale parity without needing a second slug.

## Article body is HTML; TOC is derived, not stored
- `bodyEn`/`bodyFr` are HTML blobs (built in `server/seedPosts.ts` from sections → `<p class="lead">`, `<h2>`, `<blockquote>`, `<aside class="callout">`).
- Rendered via `client/src/lib/sanitizeHtml.ts` (DOMPurify allowlist) + `dangerouslySetInnerHTML` inside `.article-prose` (styles in `index.css`).
- The article sidebar table-of-contents is generated at render time by parsing `<h2>` elements out of the sanitized HTML (DOMParser, assign slugified ids, IntersectionObserver scroll-spy) — there is no stored `sections` array anymore.
- **How to apply:** any change to the seed body structure (heading levels, tags) must stay within the sanitizer allowlist or content silently disappears; the TOC only reflects `<h2>`.

## Legacy copy files still in use
- `client/src/data/insightsCopy.ts` still provides page chrome (hero/eyebrow/filter/CTA strings) — do NOT delete it. `articles.ts` was the old hardcoded article data source (no longer the data source) but may still be imported by other chrome.
