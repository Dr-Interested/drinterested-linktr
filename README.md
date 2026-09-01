# Dr. Interested — Link in Bio (link.drinterested.org)

A standalone, SEO-optimized "link in bio" hub for [Dr. Interested](https://www.drinterested.org).
It is the short, memorable URL used in our social-media bios.

## How it relates to the main site

`link.drinterested.org` is the **canonical link-in-bio** and is **self-canonical** — every page
sets `rel="canonical"` to its own `link.drinterested.org` URL. It is tied to the main website as
a single entity through the shared Organization schema: the main site's `lib/seo-utils.ts` lists
`https://link.drinterested.org` in both `sameAs` and `hasPart`. The near-identical `/links` page
on the main site stays self-canonical too; search engines treat the two as one property rather
than as duplicates.

The link list lives in two places — keep them in sync. When the main site's
`components/links/links-client.tsx` changes, mirror it here in [`lib/site.ts`](lib/site.ts).

## What's in here

| Concern | File |
| --- | --- |
| Link list, tagline, policy links, `sameAs` profiles | [`lib/site.ts`](lib/site.ts) |
| Page UI (branded card, dark mode, a11y, reduced-motion) | [`components/links-client.tsx`](components/links-client.tsx) |
| Global `<head>` metadata, Open Graph, Twitter, canonical, icons | [`app/layout.tsx`](app/layout.tsx) |
| JSON-LD (`Organization`, `CollectionPage`, `ItemList`, `BreadcrumbList`) | [`lib/structured-data.ts`](lib/structured-data.ts) |
| `robots.txt` | [`app/robots.ts`](app/robots.ts) |
| `sitemap.xml` | [`app/sitemap.ts`](app/sitemap.ts) |
| PWA manifest (`/manifest.webmanifest`) | [`app/manifest.ts`](app/manifest.ts) |

## SEO checklist (post-deploy)

- Point the `link.drinterested.org` DNS/host at this Vercel project.
- In Google Search Console, add `link.drinterested.org` as a property and submit
  `https://link.drinterested.org/sitemap.xml`.
- Confirm the canonical resolves: `curl -s https://link.drinterested.org | grep canonical`
  should show `https://link.drinterested.org`.
- Confirm the main site's Organization schema (`lib/seo-utils.ts`) lists
  `https://link.drinterested.org` in both `sameAs` and `hasPart` so the two properties are
  linked as one entity.
- Validate structured data at <https://search.google.com/test/rich-results>.

## Develop

```bash
pnpm install
pnpm dev
```
