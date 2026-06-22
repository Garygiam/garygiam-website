# GaryGiam.com Digital Headquarters Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a premium, factual, SEO-ready, mobile-first digital headquarters for Gary Giam using a modular authority-platform architecture with CMS-ready static content.

**Architecture:** Use Next.js App Router with typed local content entities, thin route files, reusable section components, isolated SEO/schema utilities, and asset fallback patterns so version 1 launches lean while future CMS and ecosystem expansion require minimal refactoring. The MVP launch includes public authority pages only, but the internal content model supports future media, speaking, publishing, press, and venture expansion.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS, Framer Motion, Vitest, Testing Library, ESLint

---

## Implementation Guardrails

- Build only the MVP launch scope.
- Do not implement Investor Relations, Venture Detail Pages, Ecosystem Map, Ask Gary AI, Press Kit Downloads, Speaking Archive, or Media Archive in version 1.
- Create architecture hooks for future expansion only where they are lightweight and directly support the MVP content model.
- Prioritize launch speed over feature completeness.
- Keep the codebase simple, maintainable, and easy to reason about.
- Avoid over-engineering and remove any component that does not clearly improve the launch experience.
- Prioritize mobile usability over desktop-only visual effects.
- Prioritize performance and SEO over animation.
- Use production-grade patterns, but do not add complexity that version 1 does not need.
- Ship a clean authority website first, then expand later.

## Success Metric

- A visitor understands who Gary Giam is, what companies he is involved in, and how to contact him within 30 seconds.

## File Structure

### Workspace and tooling

- Create: `package.json`
- Create: `package-lock.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `eslint.config.mjs`
- Create: `vitest.config.ts`
- Create: `README.md`

### App routes

- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `src/app/about/page.tsx`
- Create: `src/app/companies/page.tsx`
- Create: `src/app/media/page.tsx`
- Create: `src/app/insights/page.tsx`
- Create: `src/app/impact/page.tsx`
- Create: `src/app/contact/page.tsx`
- Create: `src/app/globals.css`
- Create: `src/app/robots.ts`
- Create: `src/app/sitemap.ts`
- Create: `src/app/icon.png`

### Content layer

- Create: `src/content/types.ts`
- Create: `src/content/site.ts`
- Create: `src/content/person.ts`
- Create: `src/content/ventures.ts`
- Create: `src/content/careerMilestones.ts`
- Create: `src/content/awards.ts`
- Create: `src/content/mediaItems.ts`
- Create: `src/content/speakingItems.ts`
- Create: `src/content/insightArticles.ts`
- Create: `src/content/impactInitiatives.ts`
- Create: `src/content/contactChannels.ts`

### Content helpers and SEO

- Create: `src/lib/content/selectors.ts`
- Create: `src/lib/seo/metadata.ts`
- Create: `src/lib/schema/person.ts`
- Create: `src/lib/schema/organization.ts`
- Create: `src/lib/schema/article.ts`
- Create: `src/lib/schema/breadcrumb.ts`
- Create: `src/lib/schema/index.ts`

### Shared UI

- Create: `src/components/ui/Container.tsx`
- Create: `src/components/ui/PageHero.tsx`
- Create: `src/components/ui/SectionHeading.tsx`
- Create: `src/components/ui/StatPill.tsx`
- Create: `src/components/ui/BrandMark.tsx`
- Create: `src/components/ui/LinkButton.tsx`
- Create: `src/components/ui/EntityMeta.tsx`
- Create: `src/components/layout/SiteHeader.tsx`
- Create: `src/components/layout/SiteFooter.tsx`

### Section components

- Create: `src/components/sections/HomeHeroSection.tsx`
- Create: `src/components/sections/EcosystemOverviewSection.tsx`
- Create: `src/components/sections/SelectedVenturesSection.tsx`
- Create: `src/components/sections/FounderTimelineSection.tsx`
- Create: `src/components/sections/RecognitionSection.tsx`
- Create: `src/components/sections/ImpactPreviewSection.tsx`
- Create: `src/components/sections/CompaniesGridSection.tsx`
- Create: `src/components/sections/MediaHubSection.tsx`
- Create: `src/components/sections/InsightsIndexSection.tsx`
- Create: `src/components/sections/ContactIntentSection.tsx`

### Tests

- Create: `src/content/content-contract.test.ts`
- Create: `src/lib/seo/metadata.test.ts`
- Create: `src/lib/schema/schema.test.ts`
- Create: `src/app/routes.test.tsx`
- Create: `src/components/sections/asset-fallbacks.test.tsx`

## Task 1: Scaffold the Next.js authority-platform workspace

**Files:**
- Create: `package.json`
- Create: `package-lock.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `eslint.config.mjs`
- Create: `src/app/page.tsx`
- Create: `src/app/globals.css`

- [ ] **Step 1: Scaffold a fresh Next.js app in a temporary lowercase directory**

```bash
npm create next-app@latest garygiam-site -- \
  --ts \
  --eslint \
  --tailwind \
  --app \
  --src-dir \
  --use-npm \
  --import-alias "@/*"
```

- [ ] **Step 2: Merge the scaffold into the current repo without touching instruction files**

```bash
rsync -a garygiam-site/ /Users/garygiam/Desktop/GG/ \
  --exclude .git \
  --exclude AGENTS.md \
  --exclude CLAUDE.md
rm -rf garygiam-site
```

- [ ] **Step 3: Install the launch dependencies and test stack**

```bash
npm install framer-motion
npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/dom vite-tsconfig-paths
```

- [ ] **Step 4: Read the current Next.js layout and metadata docs before editing**

```bash
sed -n '1,220p' node_modules/next/dist/docs/01-app/01-getting-started/03-layouts-and-pages.md
sed -n '1,220p' node_modules/next/dist/docs/01-app/01-getting-started/14-metadata-and-og-images.md
```

- [ ] **Step 5: Verify the scaffold and commit**

Run: `npm run lint`
Expected: `eslint` exits with code `0`

```bash
git add package.json package-lock.json tsconfig.json next.config.ts eslint.config.mjs src/app
git commit -m "chore: scaffold Next.js authority platform"
```

## Task 2: Build the typed content contracts and local structured data

**Files:**
- Create: `src/content/types.ts`
- Create: `src/content/site.ts`
- Create: `src/content/person.ts`
- Create: `src/content/ventures.ts`
- Create: `src/content/careerMilestones.ts`
- Create: `src/content/awards.ts`
- Create: `src/content/mediaItems.ts`
- Create: `src/content/speakingItems.ts`
- Create: `src/content/insightArticles.ts`
- Create: `src/content/impactInitiatives.ts`
- Create: `src/content/contactChannels.ts`
- Test: `src/content/content-contract.test.ts`

- [ ] **Step 1: Write the failing content-contract test**

```ts
import { describe, expect, it } from "vitest";

import { awards } from "@/content/awards";
import { contactChannels } from "@/content/contactChannels";
import { careerMilestones } from "@/content/careerMilestones";
import { impactInitiatives } from "@/content/impactInitiatives";
import { insightArticles } from "@/content/insightArticles";
import { mediaItems } from "@/content/mediaItems";
import { person } from "@/content/person";
import { siteConfig } from "@/content/site";
import { speakingItems } from "@/content/speakingItems";
import { ventures } from "@/content/ventures";

describe("authority platform content contract", () => {
  it("defines the core founder identity", () => {
    expect(person.fullName).toBe("Gary Giam");
    expect(person.headline).toContain("Entrepreneur");
    expect(person.values.length).toBeGreaterThanOrEqual(5);
  });

  it("includes the launch ventures and award", () => {
    expect(ventures.map((venture) => venture.name)).toEqual(
      expect.arrayContaining([
        "Belleco Skin Beaute",
        "Celestial Yuan",
        "Isaac G Consultancy",
        "Yayasan TXJ Malaysia",
        "Inkco",
        "G-Space",
      ]),
    );
    expect(awards.map((award) => award.title)).toContain("Entrepreneur of the Year");
  });

  it("supports optional assets without breaking the data model", () => {
    expect(ventures.every((venture) => "logo" in venture)).toBe(true);
    expect(mediaItems.every((item) => "image" in item)).toBe(true);
    expect(speakingItems.every((item) => "image" in item)).toBe(true);
  });

  it("includes SEO and contact foundations", () => {
    expect(siteConfig.siteUrl).toBe("https://garygiam.com");
    expect(contactChannels.length).toBeGreaterThan(0);
    expect(careerMilestones.length).toBeGreaterThan(0);
    expect(impactInitiatives.length).toBeGreaterThan(0);
    expect(insightArticles.length).toBeGreaterThan(0);
  });
});
```

- [ ] **Step 2: Run the test to verify the contract fails**

Run: `npm run test -- src/content/content-contract.test.ts`
Expected: FAIL because the content files do not exist yet

- [ ] **Step 3: Implement the typed entities and content modules**

```ts
// src/content/types.ts
export type Asset = {
  src?: string;
  alt?: string;
};

export type SeoFields = {
  pageTitle: string;
  metaDescription: string;
  canonicalPath: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  keywords?: string[];
};

export type SiteConfig = {
  name: string;
  domain: string;
  siteUrl: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultOgImage: string;
};

export type Person = {
  fullName: string;
  headline: string;
  shortBio: string;
  fullBio: string;
  values: string[];
  philosophyTitle: string;
  philosophyStatement: string;
  portrait: Asset;
  linkedinUrl?: string;
  seoKeywords: string[];
};

export type Venture = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  vision: string;
  websiteUrl?: string;
  logo: Asset;
  industry: string;
  status: "active" | "future";
  featured: boolean;
  relationshipToGary: string;
};
```

```ts
// src/content/site.ts
import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  name: "Gary Giam",
  domain: "garygiam.com",
  siteUrl: "https://garygiam.com",
  defaultTitle: "Gary Giam | Digital Headquarters",
  defaultDescription:
    "Entrepreneur, venture builder, branding strategist, and ecosystem architect building ventures across wellness, consulting, technology, philanthropy, and future industries.",
  defaultOgImage: "/og/gary-giam-og.jpg",
};
```

```ts
// src/content/person.ts
import type { Person } from "./types";

export const person: Person = {
  fullName: "Gary Giam",
  headline: "Entrepreneur | Venture Builder | Branding Strategist | Ecosystem Architect",
  shortBio:
    "Gary Giam builds companies, communities, and future opportunities through innovation, branding, technology, and impact.",
  fullBio:
    "Gary Giam is an entrepreneur, venture builder, branding strategist, ecosystem architect, founder, business growth leader, and community impact advocate. His work spans wellness, consulting, technology, philanthropy, and future-facing ventures.",
  values: ["Integrity", "Growth", "Innovation", "Service", "Impact"],
  philosophyTitle: "Small Knife Cut Big Tree",
  philosophyStatement:
    "Leverage creativity, technology, AI, and strategic thinking to achieve outsized results.",
  portrait: {
    src: "/images/gary-giam-portrait.jpg",
    alt: "Portrait of Gary Giam",
  },
  linkedinUrl: "https://www.linkedin.com/in/garygiam",
  seoKeywords: [
    "Gary Giam",
    "Gary Giam Malaysia",
    "Gary Giam Entrepreneur",
    "Gary Giam Founder",
  ],
};
```

```ts
// src/content/ventures.ts
import type { Venture } from "./types";

export const ventures: Venture[] = [
  {
    id: "belleco",
    slug: "belleco-skin-beaute",
    name: "Belleco Skin Beaute",
    shortDescription: "Premium skin transformation and age reversal center.",
    vision: "Build trust-led transformation experiences through premium wellness care.",
    websiteUrl: undefined,
    logo: {},
    industry: "Wellness",
    status: "active",
    featured: true,
    relationshipToGary: "Co-Founder",
  },
  {
    id: "celestial-yuan",
    slug: "celestial-yuan",
    name: "Celestial Yuan",
    shortDescription: "Modernizing Sheng Ji Feng Shui through innovation and accessibility.",
    vision: "Translate traditional wisdom into a modern, accessible growth framework.",
    websiteUrl: undefined,
    logo: {},
    industry: "Consulting",
    status: "active",
    featured: true,
    relationshipToGary: "CEO & Co-Founder",
  },
  {
    id: "isaac-g-consultancy",
    slug: "isaac-g-consultancy",
    name: "Isaac G Consultancy",
    shortDescription: "Branding, digital transformation, and business growth consulting.",
    vision: "Help brands grow with clearer positioning and digital momentum.",
    websiteUrl: undefined,
    logo: {},
    industry: "Consulting",
    status: "active",
    featured: true,
    relationshipToGary: "Founder",
  },
  {
    id: "yayasan-txj",
    slug: "yayasan-txj-malaysia",
    name: "Yayasan TXJ Malaysia",
    shortDescription: "Charitable initiatives and community impact platform.",
    vision: "Create meaningful community support and long-term social impact.",
    websiteUrl: undefined,
    logo: {},
    industry: "Philanthropy",
    status: "active",
    featured: true,
    relationshipToGary: "Deputy Chairman",
  },
  {
    id: "inkco",
    slug: "inkco",
    name: "Inkco",
    shortDescription: "Future AI-powered lifestyle ecosystem.",
    vision: "Build practical AI-enabled experiences for daily life and modern growth.",
    websiteUrl: undefined,
    logo: {},
    industry: "Technology",
    status: "future",
    featured: true,
    relationshipToGary: "Founder",
  },
  {
    id: "g-space",
    slug: "g-space",
    name: "G-Space",
    shortDescription: "Future-focused space ecosystem initiative.",
    vision: "Explore future ecosystem opportunities with long-horizon strategic thinking.",
    websiteUrl: undefined,
    logo: {},
    industry: "Future Industries",
    status: "future",
    featured: true,
    relationshipToGary: "Founder",
  },
];
```

```ts
// src/content/awards.ts
export const awards = [
  {
    id: "ipba-2020",
    title: "Entrepreneur of the Year",
    issuer: "International Prestige Brand Awards",
    year: 2020,
    summary: "Recognized at the International Prestige Brand Awards 2020.",
    relatedOrganization: "Ratatouille Gourmet",
    graphic: {},
    featured: true,
  },
];
```

```ts
// src/content/careerMilestones.ts
export const careerMilestones = [
  {
    id: "propertyguru",
    title: "PropertyGuru Malaysia",
    organization: "PropertyGuru Malaysia",
    role: "Leadership role in business development and sales",
    period: "Career milestone",
    summary: "Built commercial and business development experience in a major property platform environment.",
    milestoneType: "career",
    relatedVentureSlug: undefined,
    featured: true,
  },
];
```

```ts
// src/content/mediaItems.ts
export const mediaItems = [
  {
    id: "award-mention",
    title: "Recognition placeholder",
    outlet: "Future media layer",
    format: "award",
    publishedAt: "2020-01-01",
    summary: "Reserved for verified media, interviews, podcasts, and articles.",
    url: undefined,
    image: {},
    status: "planned",
    featured: true,
  },
];
```

```ts
// src/content/speakingItems.ts
export const speakingItems = [
  {
    id: "speaking-placeholder",
    title: "Speaking architecture ready",
    eventName: "Future speaking layer",
    format: "keynote",
    date: "2026-01-01",
    location: "Malaysia",
    summary: "Reserved for verified speaking engagements.",
    url: undefined,
    image: {},
    status: "planned",
    featured: true,
  },
];
```

```ts
// src/content/insightArticles.ts
export const insightArticles = [
  {
    id: "founder-systems",
    slug: "founder-systems-for-modern-growth",
    title: "Founder Systems for Modern Growth",
    excerpt: "A future-ready editorial placeholder for entrepreneurship, branding, leadership, and AI insights.",
    category: "Entrepreneurship",
    publishedAt: "2026-06-13",
    readingTime: "5 min read",
    author: "Gary Giam",
    coverImage: {},
    seo: {
      pageTitle: "Founder Systems for Modern Growth",
      metaDescription: "Editorial placeholder for future founder insights.",
      canonicalPath: "/insights/founder-systems-for-modern-growth",
    },
    status: "draft",
    featured: true,
  },
];
```

```ts
// src/content/impactInitiatives.ts
export const impactInitiatives = [
  {
    id: "yayasan-spotlight",
    title: "Yayasan TXJ Malaysia",
    organization: "Yayasan TXJ Malaysia",
    summary: "A premium impact layer for charitable initiatives, community support, and service.",
    impactType: "Community",
    location: "Malaysia",
    relatedLink: undefined,
    image: {},
    featured: true,
  },
];
```

```ts
// src/content/contactChannels.ts
export const contactChannels = [
  {
    id: "linkedin",
    label: "LinkedIn",
    type: "social",
    value: "Gary Giam",
    href: "https://www.linkedin.com/in/garygiam",
    purposeTags: ["media", "partnerships", "collaboration"],
    featured: true,
  },
  {
    id: "general-email",
    label: "General Enquiries",
    type: "email",
    value: "hello@garygiam.com",
    href: "mailto:hello@garygiam.com",
    purposeTags: ["partnerships", "speaking", "media"],
    featured: true,
  },
];
```

- [ ] **Step 4: Run the contract test to verify it passes**

Run: `npm run test -- src/content/content-contract.test.ts`
Expected: PASS with `1` passing test file

- [ ] **Step 5: Commit the content model foundation**

```bash
git add src/content src/content/content-contract.test.ts
git commit -m "feat: add structured authority platform content model"
```

## Task 3: Add metadata, schema, and route-safe SEO utilities

**Files:**
- Create: `src/lib/seo/metadata.ts`
- Create: `src/lib/schema/person.ts`
- Create: `src/lib/schema/organization.ts`
- Create: `src/lib/schema/article.ts`
- Create: `src/lib/schema/breadcrumb.ts`
- Create: `src/lib/schema/index.ts`
- Create: `src/app/robots.ts`
- Create: `src/app/sitemap.ts`
- Test: `src/lib/seo/metadata.test.ts`
- Test: `src/lib/schema/schema.test.ts`

- [ ] **Step 1: Write the failing metadata and schema tests**

```ts
// src/lib/seo/metadata.test.ts
import { describe, expect, it } from "vitest";

import { buildPageMetadata } from "@/lib/seo/metadata";

describe("buildPageMetadata", () => {
  it("builds canonical metadata for authority pages", () => {
    const metadata = buildPageMetadata({
      title: "Companies",
      description: "Explore the Gary Giam ecosystem of ventures and initiatives.",
      path: "/companies",
    });

    expect(metadata.title).toBe("Companies | Gary Giam");
    expect(metadata.openGraph?.url).toBe("https://garygiam.com/companies");
  });
});
```

```ts
// src/lib/schema/schema.test.ts
import { describe, expect, it } from "vitest";

import { buildPersonSchema } from "@/lib/schema/person";

describe("buildPersonSchema", () => {
  it("returns a schema.org person with related organizations", () => {
    const schema = buildPersonSchema();

    expect(schema["@type"]).toBe("Person");
    expect(schema.name).toBe("Gary Giam");
    expect(Array.isArray(schema.affiliation)).toBe(true);
  });
});
```

- [ ] **Step 2: Run the tests to verify the SEO utilities do not exist yet**

Run: `npm run test -- src/lib/seo/metadata.test.ts src/lib/schema/schema.test.ts`
Expected: FAIL because the SEO and schema modules are missing

- [ ] **Step 3: Implement the metadata and schema layer**

```ts
// src/lib/seo/metadata.ts
import type { Metadata } from "next";

import { siteConfig } from "@/content/site";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
}: MetadataInput): Metadata {
  const url = `${siteConfig.siteUrl}${path}`;

  return {
    title: `${title} | Gary Giam`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Gary Giam`,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [{ url: siteConfig.defaultOgImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Gary Giam`,
      description,
      images: [siteConfig.defaultOgImage],
    },
  };
}
```

```ts
// src/lib/schema/person.ts
import { person } from "@/content/person";
import { ventures } from "@/content/ventures";

export function buildPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.fullName,
    description: person.fullBio,
    image: `${person.portrait.src}`,
    url: "https://garygiam.com",
    sameAs: person.linkedinUrl ? [person.linkedinUrl] : [],
    affiliation: ventures.map((venture) => ({
      "@type": "Organization",
      name: venture.name,
      url: venture.websiteUrl,
    })),
  };
}
```

```ts
// src/lib/schema/breadcrumb.ts
export function buildBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
```

```ts
// src/app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://garygiam.com/sitemap.xml",
  };
}
```

```ts
// src/app/sitemap.ts
import type { MetadataRoute } from "next";

const routes = ["", "/about", "/companies", "/media", "/insights", "/impact", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://garygiam.com${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
```

- [ ] **Step 4: Run the SEO and schema tests to verify they pass**

Run: `npm run test -- src/lib/seo/metadata.test.ts src/lib/schema/schema.test.ts`
Expected: PASS with `2` passing test files

- [ ] **Step 5: Commit the SEO foundation**

```bash
git add src/lib/seo src/lib/schema src/app/robots.ts src/app/sitemap.ts src/lib/seo/metadata.test.ts src/lib/schema/schema.test.ts
git commit -m "feat: add metadata and schema foundation"
```

## Task 4: Build the shared layout, shell, and premium design primitives

**Files:**
- Create: `src/components/ui/Container.tsx`
- Create: `src/components/ui/PageHero.tsx`
- Create: `src/components/ui/SectionHeading.tsx`
- Create: `src/components/ui/BrandMark.tsx`
- Create: `src/components/ui/LinkButton.tsx`
- Create: `src/components/layout/SiteHeader.tsx`
- Create: `src/components/layout/SiteFooter.tsx`
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`
- Test: `src/app/routes.test.tsx`

- [ ] **Step 1: Write the failing route-shell test**

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/font/google", () => ({
  Geist: () => ({ variable: "font-sans" }),
  Geist_Mono: () => ({ variable: "font-mono" }),
}));

import RootLayout from "@/app/layout";

describe("RootLayout", () => {
  it("renders the authority platform shell", () => {
    const view = render(
      <RootLayout>
        <div>Page content</div>
      </RootLayout>,
    );

    expect(view.container.querySelector("header")).not.toBeNull();
    expect(screen.getByText("Gary Giam")).toBeInTheDocument();
    expect(view.container.querySelector("footer")).not.toBeNull();
  });
});
```

- [ ] **Step 2: Run the shell test to confirm the scaffold layout is insufficient**

Run: `npm run test -- src/app/routes.test.tsx`
Expected: FAIL because the branded shell and components are missing

- [ ] **Step 3: Implement the premium shell primitives and layout**

```tsx
// src/components/layout/SiteHeader.tsx
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/companies", label: "Companies" },
  { href: "/media", label: "Media" },
  { href: "/insights", label: "Insights" },
  { href: "/impact", label: "Impact" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container shell-row">
        <Link href="/" className="site-brand">
          Gary Giam
        </Link>
        <nav aria-label="Primary">
          <ul className="site-nav">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
```

```tsx
// src/components/layout/SiteFooter.tsx
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="eyebrow">Digital Headquarters</p>
          <h2>Gary Giam</h2>
        </div>
        <p className="footer-copy">
          Premium authority platform connecting ventures, impact, insights, and media.
        </p>
      </div>
    </footer>
  );
}
```

```tsx
// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { buildPageMetadata } from "@/lib/seo/metadata";

import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = buildPageMetadata({
  title: "Digital Headquarters",
  description:
    "Official digital headquarters for Gary Giam, connecting ventures, insights, media, and impact.",
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
```

```css
/* src/app/globals.css */
@import "tailwindcss";

:root {
  --color-bg: #ffffff;
  --color-fg: #111111;
  --color-accent: #d4af37;
  --color-border: rgba(17, 17, 17, 0.12);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  color: var(--color-fg);
  background: var(--color-bg);
  font-family: var(--font-sans), Arial, sans-serif;
}

.container {
  width: min(1160px, calc(100vw - 2rem));
  margin: 0 auto;
}

.site-header,
.site-footer {
  border-color: var(--color-border);
}
```

- [ ] **Step 4: Run the shell test and lint**

Run: `npm run test -- src/app/routes.test.tsx && npm run lint`
Expected: PASS for the route shell test and no ESLint errors

- [ ] **Step 5: Commit the shared shell**

```bash
git add src/components/layout src/components/ui src/app/layout.tsx src/app/globals.css src/app/routes.test.tsx
git commit -m "feat: add shared authority platform shell"
```

## Task 5: Implement the homepage, About, and Companies experience

**Files:**
- Create: `src/lib/content/selectors.ts`
- Create: `src/components/sections/HomeHeroSection.tsx`
- Create: `src/components/sections/EcosystemOverviewSection.tsx`
- Create: `src/components/sections/SelectedVenturesSection.tsx`
- Create: `src/components/sections/FounderTimelineSection.tsx`
- Create: `src/components/sections/CompaniesGridSection.tsx`
- Modify: `src/app/page.tsx`
- Create: `src/app/about/page.tsx`
- Create: `src/app/companies/page.tsx`
- Test: `src/components/sections/asset-fallbacks.test.tsx`

- [ ] **Step 1: Write the failing fallback and company-card test**

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { CompaniesGridSection } from "@/components/sections/CompaniesGridSection";
import { ventures } from "@/content/ventures";

describe("CompaniesGridSection", () => {
  it("renders a typography-first fallback when a logo is missing", () => {
    render(<CompaniesGridSection ventures={ventures} />);

    expect(screen.getByText("Belleco Skin Beaute")).toBeInTheDocument();
    expect(screen.getByText("Co-Founder")).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run the fallback test to verify the section is missing**

Run: `npm run test -- src/components/sections/asset-fallbacks.test.tsx`
Expected: FAIL because the section component does not exist yet

- [ ] **Step 3: Implement the selectors and first page sections**

```ts
// src/lib/content/selectors.ts
import { awards } from "@/content/awards";
import { careerMilestones } from "@/content/careerMilestones";
import { impactInitiatives } from "@/content/impactInitiatives";
import { insightArticles } from "@/content/insightArticles";
import { ventures } from "@/content/ventures";

export const featuredVentures = ventures.filter((venture) => venture.featured);
export const featuredAwards = awards.filter((award) => award.featured);
export const featuredMilestones = careerMilestones.filter((milestone) => milestone.featured);
export const featuredImpactInitiatives = impactInitiatives.filter((initiative) => initiative.featured);
export const featuredInsights = insightArticles.filter((article) => article.featured);
```

```tsx
// src/components/sections/CompaniesGridSection.tsx
import Link from "next/link";

import type { Venture } from "@/content/types";

export function CompaniesGridSection({ ventures }: { ventures: Venture[] }) {
  return (
    <section className="section">
      <div className="container card-grid">
        {ventures.map((venture) => (
          <article key={venture.id} className="brand-card">
            <div className="brand-lockup">
              {venture.logo.src ? (
                <img src={venture.logo.src} alt={venture.logo.alt ?? venture.name} />
              ) : (
                <div className="brand-mark-fallback" aria-hidden="true">
                  {venture.name.slice(0, 2).toUpperCase()}
                </div>
              )}
              <div>
                <p className="eyebrow">{venture.relationshipToGary}</p>
                <h3>{venture.name}</h3>
              </div>
            </div>
            <p>{venture.shortDescription}</p>
            {venture.websiteUrl ? <Link href={venture.websiteUrl}>Visit website</Link> : null}
          </article>
        ))}
      </div>
    </section>
  );
}
```

```tsx
// src/app/page.tsx
import { featuredAwards, featuredImpactInitiatives, featuredVentures } from "@/lib/content/selectors";
import { person } from "@/content/person";
import { CompaniesGridSection } from "@/components/sections/CompaniesGridSection";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Digital Headquarters</p>
          <h1>{person.fullName}</h1>
          <p>{person.headline}</p>
          <p>{person.shortBio}</p>
        </div>
      </section>
      <CompaniesGridSection ventures={featuredVentures} />
      <section className="section">
        <div className="container">
          <h2>Recognition</h2>
          <p>{featuredAwards[0]?.title}</p>
          <h2>Impact</h2>
          <p>{featuredImpactInitiatives[0]?.title}</p>
        </div>
      </section>
    </>
  );
}
```

```tsx
// keep the homepage intentionally fast to scan:
// 1. who Gary Giam is
// 2. what ventures he is involved in
// 3. how to continue or make contact
```

```tsx
// src/app/about/page.tsx
import { person } from "@/content/person";
import { featuredMilestones } from "@/lib/content/selectors";

export default function AboutPage() {
  return (
    <section className="page">
      <div className="container">
        <p className="eyebrow">About Gary</p>
        <h1>{person.fullName}</h1>
        <p>{person.fullBio}</p>
        <ul>
          {featuredMilestones.map((milestone) => (
            <li key={milestone.id}>
              <strong>{milestone.organization}</strong> — {milestone.role}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
```

```tsx
// src/app/companies/page.tsx
import { CompaniesGridSection } from "@/components/sections/CompaniesGridSection";
import { ventures } from "@/content/ventures";

export default function CompaniesPage() {
  return <CompaniesGridSection ventures={ventures} />;
}
```

- [ ] **Step 4: Run the fallback test and a route smoke test**

Run: `npm run test -- src/components/sections/asset-fallbacks.test.tsx src/app/routes.test.tsx`
Expected: PASS with both test files green

- [ ] **Step 5: Commit the first public pages**

```bash
git add src/lib/content/selectors.ts src/components/sections src/app/page.tsx src/app/about/page.tsx src/app/companies/page.tsx src/components/sections/asset-fallbacks.test.tsx
git commit -m "feat: add home about and companies experience"
```

## Task 6: Implement Media, Insights, Impact, and Contact pages with future-ready empty states

**Files:**
- Create: `src/components/sections/RecognitionSection.tsx`
- Create: `src/components/sections/MediaHubSection.tsx`
- Create: `src/components/sections/InsightsIndexSection.tsx`
- Create: `src/components/sections/ImpactPreviewSection.tsx`
- Create: `src/components/sections/ContactIntentSection.tsx`
- Create: `src/app/media/page.tsx`
- Create: `src/app/insights/page.tsx`
- Create: `src/app/impact/page.tsx`
- Create: `src/app/contact/page.tsx`
- Modify: `src/app/routes.test.tsx`

- [ ] **Step 1: Extend the failing route smoke test for the remaining pages**

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ContactPage from "@/app/contact/page";
import ImpactPage from "@/app/impact/page";
import InsightsPage from "@/app/insights/page";
import MediaPage from "@/app/media/page";

describe("secondary authority routes", () => {
  it("renders the media page", () => {
    render(<MediaPage />);
    expect(screen.getByText(/Media & Recognition/i)).toBeInTheDocument();
  });

  it("renders the insights page", () => {
    render(<InsightsPage />);
    expect(screen.getByText(/Insights/i)).toBeInTheDocument();
  });

  it("renders the impact page", () => {
    render(<ImpactPage />);
    expect(screen.getByText(/Impact/i)).toBeInTheDocument();
  });

  it("renders the contact page", () => {
    render(<ContactPage />);
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run the route test to confirm the pages are not built yet**

Run: `npm run test -- src/app/routes.test.tsx`
Expected: FAIL because the new route modules do not exist yet

- [ ] **Step 3: Implement the remaining public MVP pages**

```tsx
// src/components/sections/MediaHubSection.tsx
import { awards } from "@/content/awards";
import { mediaItems } from "@/content/mediaItems";
import { speakingItems } from "@/content/speakingItems";

export function MediaHubSection() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Media & Recognition</p>
        <h1>Credibility, recognition, and future media visibility</h1>
        <h2>Awards</h2>
        {awards.map((award) => (
          <article key={award.id}>
            <h3>{award.title}</h3>
            <p>{award.issuer}</p>
          </article>
        ))}
        <h2>Editorial architecture</h2>
        <p>{mediaItems[0]?.summary}</p>
        <p>{speakingItems[0]?.summary}</p>
      </div>
    </section>
  );
}
```

```ts
// guardrail: do not create archive routes, detail routes, downloadable press assets,
// investor relations pages, or AI features in this task.
```

```tsx
// src/components/sections/InsightsIndexSection.tsx
import { insightArticles } from "@/content/insightArticles";

export function InsightsIndexSection() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Insights</p>
        <h1>Editorial clarity for entrepreneurship, branding, leadership, and AI</h1>
        {insightArticles.map((article) => (
          <article key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
```

```tsx
// src/components/sections/ContactIntentSection.tsx
import { contactChannels } from "@/content/contactChannels";

export function ContactIntentSection() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Contact</p>
        <h1>Business partnerships, speaking, media, and collaboration</h1>
        <ul>
          {contactChannels.map((channel) => (
            <li key={channel.id}>
              <a href={channel.href}>{channel.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
```

```tsx
// src/app/media/page.tsx
import { MediaHubSection } from "@/components/sections/MediaHubSection";

export default function MediaPage() {
  return <MediaHubSection />;
}
```

```tsx
// src/app/insights/page.tsx
import { InsightsIndexSection } from "@/components/sections/InsightsIndexSection";

export default function InsightsPage() {
  return <InsightsIndexSection />;
}
```

```tsx
// src/app/impact/page.tsx
import { impactInitiatives } from "@/content/impactInitiatives";

export default function ImpactPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Impact</p>
        <h1>Community, service, and long-term social contribution</h1>
        {impactInitiatives.map((initiative) => (
          <article key={initiative.id}>
            <h2>{initiative.title}</h2>
            <p>{initiative.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
```

```tsx
// src/app/contact/page.tsx
import { ContactIntentSection } from "@/components/sections/ContactIntentSection";

export default function ContactPage() {
  return <ContactIntentSection />;
}
```

- [ ] **Step 4: Run the full route smoke test**

Run: `npm run test -- src/app/routes.test.tsx`
Expected: PASS with the route smoke suite green

- [ ] **Step 5: Commit the secondary pages**

```bash
git add src/components/sections src/app/media/page.tsx src/app/insights/page.tsx src/app/impact/page.tsx src/app/contact/page.tsx src/app/routes.test.tsx
git commit -m "feat: add media insights impact and contact pages"
```

## Task 7: Finalize polish, performance, and launch validation

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`
- Modify: `README.md`
- Test: all existing tests

- [ ] **Step 1: Add the final accessibility and visual polish changes**

```css
/* append to src/app/globals.css */
.skip-link {
  position: absolute;
  left: 1rem;
  top: -4rem;
  background: #111111;
  color: #ffffff;
  padding: 0.75rem 1rem;
}

.skip-link:focus-visible {
  top: 1rem;
}

a:focus-visible,
button:focus-visible {
  outline: 2px solid #d4af37;
  outline-offset: 4px;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```

- [ ] **Step 2: Verify all tests pass**

Run: `npm run test`
Expected: PASS with all content, route, SEO, and fallback tests green

- [ ] **Step 3: Verify typing, linting, and production build**

Run: `npm run lint && npx tsc -p tsconfig.json --noEmit && npm run build`
Expected: all commands exit with code `0`

- [ ] **Step 4: Document the local run flow**

```md
<!-- append to README.md -->
## Local Development

```bash
npm install
npm run dev -- --port 3002
```

Open `http://localhost:3002`.

## Content Model

Structured launch content lives in `src/content/`.
Reusable sections live in `src/components/sections/`.
SEO and schema logic live in `src/lib/seo/` and `src/lib/schema/`.
```

- [ ] **Step 5: Commit the launch-ready platform**

```bash
git add src/app/globals.css src/app/layout.tsx README.md
git commit -m "feat: finalize GaryGiam authority platform MVP"
```

## Self-Review Checklist

- Spec coverage:
  - platform architecture: covered by Tasks 1 to 7
  - typed local content entities: covered by Task 2
  - reusable sections and thin routes: covered by Tasks 4 to 6
  - optional asset fallbacks: covered by Task 5
  - SEO and schema foundation: covered by Task 3
  - MVP launch pages: covered by Tasks 5 and 6
  - performance and launch validation: covered by Task 7
  - MVP-only constraint and excluded features: enforced by the Implementation Guardrails section and Task 6 notes
  - 30-second clarity success metric: reinforced by the homepage composition guidance in Task 5
- Placeholder scan:
  - removed placeholder tokens and ambiguous "later" steps from the executable path
  - every task includes concrete file paths, commands, and code blocks
- Type consistency:
  - content entities use the same names from the spec: `site`, `person`, `ventures`, `careerMilestones`, `awards`, `mediaItems`, `speakingItems`, `insightArticles`, `impactInitiatives`, `contactChannels`, `seo`
