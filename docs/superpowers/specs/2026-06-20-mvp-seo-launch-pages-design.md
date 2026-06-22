# MVP SEO Launch Pages Design

**Date:** 2026-06-20

**Goal**

Add lightweight metadata and schema utilities for MVP launch pages, plus `robots.txt` and `sitemap.xml` generation for a fixed set of public routes.

**Approved MVP Routes**

- `/`
- `/about`
- `/companies`
- `/media`
- `/insights`
- `/impact`
- `/contact`

**Constraints**

- Keep the implementation MVP-only and lightweight.
- Use the current Next.js 16 App Router file conventions.
- Do not add archives, detail routes, dynamic route generation, or CMS integration.
- Reuse the existing local typed content as the metadata source of truth.
- Run targeted tests and lint after implementation.

**Recommended Approach**

Use one small shared metadata utility module and two App Router metadata files:

- `app/layout.tsx` for root metadata and homepage JSON-LD
- `app/robots.ts` for crawler rules
- `app/sitemap.ts` for the fixed public route list
- one shared utility module for base URL, launch paths, metadata shaping, and lightweight schema generation

This approach keeps the launch-page SEO logic centralized without introducing a larger route metadata system.

**Approach Options**

**Option 1: Shared utility module with thin route files**

Create a focused utility module that exposes:

- a normalized site origin
- the fixed MVP launch paths
- a helper for root metadata values
- a helper for lightweight homepage JSON-LD

Then keep `layout`, `robots`, and `sitemap` as thin consumers.

This is the recommended option because it avoids duplication while staying very small.

**Option 2: Inline everything in each file**

Place metadata logic directly in `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts`.

This uses fewer files, but the domain, route list, and SEO rules become duplicated across multiple entry points.

**Option 3: Build a fuller per-route SEO configuration system**

Introduce route-level metadata definitions and richer schema support for future page growth.

This would be flexible, but it is heavier than the MVP requires and creates unnecessary maintenance cost before the routes exist.

**File Changes**

- Update `app/layout.tsx`
- Create `app/robots.ts`
- Create `app/sitemap.ts`
- Create `src/seo/metadata.ts`
- Create focused tests for metadata helpers and route outputs

**Metadata Design**

`app/layout.tsx` will stop using starter metadata and instead derive a typed `Metadata` object from the existing `content.site` and `content.seo` values.

The metadata will stay intentionally small:

- `metadataBase`
- `title`
- `description`
- `alternates.canonical`
- basic Open Graph fields
- basic Twitter card fields if an OG image exists

No per-page metadata map will be introduced in this MVP because the route files do not exist yet and the requirement is limited to launch readiness.

**Schema Design**

The layout will inject one small JSON-LD payload for the homepage context only.

The schema will be limited to:

- `WebSite`
- `Person`
- `Organization`

The utility will build these from existing content fields only. It will not infer unsupported claims, archive structures, breadcrumbs, article schema, or collection schema.

**Robots Design**

`app/robots.ts` will return:

- allow crawling for `/`
- the sitemap URL
- the host value if it can be derived cleanly from the base site URL

No user-agent-specific rules, crawl delays, or private path exclusions will be added because they are not required for the current MVP.

**Sitemap Design**

`app/sitemap.ts` will return a fixed `MetadataRoute.Sitemap` array for these routes only:

- `/`
- `/about`
- `/companies`
- `/media`
- `/insights`
- `/impact`
- `/contact`

Each entry will use the shared site origin. A shared `lastModified` timestamp is acceptable for MVP launch pages. No archive or per-record URLs will be emitted.

**Testing Plan**

Add focused tests that verify:

- the normalized site origin and fixed launch paths
- the lightweight schema payload shape
- the `robots()` output points to the sitemap and allows public crawling
- the `sitemap()` output contains exactly the approved launch routes

Run:

- `npx vitest run` for the new targeted tests
- `npm run lint`

**Non-Goals**

- No archive URLs
- No venture detail URLs
- No article detail URLs
- No runtime fetching
- No CMS adapters
- No rich SEO framework
- No page UI changes beyond the layout metadata and script injection

**Success Criteria**

- Root metadata is no longer starter content.
- Lightweight JSON-LD is emitted from the root layout.
- `app/robots.ts` generates a valid public robots response.
- `app/sitemap.ts` generates exactly the approved launch URLs.
- Targeted tests pass.
- Lint passes.
