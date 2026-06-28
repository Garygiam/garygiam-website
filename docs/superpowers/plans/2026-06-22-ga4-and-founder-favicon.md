# GA4 and Founder Favicon Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add GA4 using the official Next.js integration, track the four approved homepage CTAs, add a founder favicon set, and deploy the update to production.

**Architecture:** Keep analytics global and server-first by loading `GoogleAnalytics` in the root layout, then isolate click tracking to one small client component so page files stay server components. Keep favicon work additive by generating the requested icon files from one committed SVG source and wiring them through existing root metadata.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, `@next/third-parties/google`, Vitest, Testing Library, Node build script, Vercel production deploy

---

## File Structure

- Modify: `package.json`
- Modify: `package-lock.json`
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`
- Modify: `src/seo/metadata.ts`
- Modify: `__tests__/page.test.tsx`
- Modify: `__tests__/seo-metadata.test.tsx`
- Create: `src/components/analytics/tracked-link.tsx`
- Create: `__tests__/layout-analytics.test.tsx`
- Create: `__tests__/tracked-link.test.tsx`
- Create: `src/assets/founder-favicon.svg`
- Create: `scripts/generate-founder-favicons.mjs`
- Update: `app/favicon.ico`
- Create: `public/favicon-32x32.png`
- Create: `public/favicon-16x16.png`
- Create: `public/apple-touch-icon.png`

## Task 1: Load GA4 Globally In The Root Layout

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Modify: `app/layout.tsx`
- Test: `__tests__/layout-analytics.test.tsx`

- [ ] **Step 1: Write the failing layout analytics test**

```tsx
import { render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";

vi.mock("@next/third-parties/google", () => ({
  GoogleAnalytics: ({ gaId }: { gaId: string }) => (
    <div data-testid="google-analytics" data-ga-id={gaId} />
  ),
}));

import RootLayout from "@/app/layout";

test("loads the GA4 integration once at the root layout", () => {
  render(
    <RootLayout>
      <div>Page Content</div>
    </RootLayout>
  );

  expect(screen.getByText("Page Content")).toBeDefined();
  expect(screen.getByTestId("google-analytics")).toBeDefined();
  expect(screen.getByTestId("google-analytics").getAttribute("data-ga-id")).toBe(
    "G-9GWPP5TZEF"
  );
});
```

- [ ] **Step 2: Run the new test to verify it fails**

Run:

```bash
npm test -- __tests__/layout-analytics.test.tsx
```

Expected: FAIL because `GoogleAnalytics` is not yet rendered from `app/layout.tsx`.

- [ ] **Step 3: Install the official Next.js GA package and add the root layout integration**

Run:

```bash
npm install @next/third-parties@latest
```

Update `app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Geist, Geist_Mono } from "next/font/google";

import {
  buildHomepageJsonLd,
  buildRootMetadata,
} from "@/src/seo/metadata";
import { SiteShell } from "@/src/components/site-shell";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = buildRootMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const homepageJsonLd = JSON.stringify(buildHomepageJsonLd());

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-zinc-950">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: homepageJsonLd }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
      <GoogleAnalytics gaId="G-9GWPP5TZEF" />
    </html>
  );
}
```

- [ ] **Step 4: Run the layout analytics test to verify it passes**

Run:

```bash
npm test -- __tests__/layout-analytics.test.tsx
```

Expected: PASS with one test confirming the root layout includes GA4.

- [ ] **Step 5: Commit the GA root layout integration**

```bash
git add package.json package-lock.json app/layout.tsx __tests__/layout-analytics.test.tsx
git commit -m "feat: add GA4 root layout integration"
```

## Task 2: Track Homepage CTA Clicks Without Converting Pages To Client Components

**Files:**
- Create: `src/components/analytics/tracked-link.tsx`
- Modify: `app/page.tsx`
- Test: `__tests__/tracked-link.test.tsx`
- Test: `__tests__/page.test.tsx`

- [ ] **Step 1: Write the failing tracked-link unit test**

Create `__tests__/tracked-link.test.tsx`:

```tsx
import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";

const sendGAEvent = vi.fn();

vi.mock("@next/third-parties/google", () => ({
  sendGAEvent: (...args: unknown[]) => sendGAEvent(...args),
}));

import { TrackedLink } from "@/src/components/analytics/tracked-link";

test("sends a GA4 CTA event before navigating", () => {
  render(
    <TrackedLink
      href="/companies"
      eventLabel="Explore Companies"
      eventLocation="home_hero"
      className="cta"
    >
      Explore Companies
    </TrackedLink>
  );

  fireEvent.click(screen.getByRole("link", { name: "Explore Companies" }));

  expect(sendGAEvent).toHaveBeenCalledWith("event", "cta_click", {
    cta_label: "Explore Companies",
    cta_destination: "/companies",
    cta_location: "home_hero",
  });
});
```

- [ ] **Step 2: Run the tracked-link test to verify it fails**

Run:

```bash
npm test -- __tests__/tracked-link.test.tsx
```

Expected: FAIL because `TrackedLink` does not exist yet.

- [ ] **Step 3: Implement the minimal tracked client component**

Create `src/components/analytics/tracked-link.tsx`:

```tsx
"use client";

import Link, { type LinkProps } from "next/link";
import { sendGAEvent } from "@next/third-parties/google";
import type { PropsWithChildren } from "react";

type TrackedLinkProps = PropsWithChildren<
  LinkProps & {
    className?: string;
    eventLabel: string;
    eventLocation: string;
  }
>;

export function TrackedLink({
  href,
  className,
  children,
  eventLabel,
  eventLocation,
  ...rest
}: TrackedLinkProps) {
  const destination = typeof href === "string" ? href : href.toString();

  return (
    <Link
      href={href}
      className={className}
      onClick={() =>
        sendGAEvent("event", "cta_click", {
          cta_label: eventLabel,
          cta_destination: destination,
          cta_location: eventLocation,
        })
      }
      {...rest}
    >
      {children}
    </Link>
  );
}
```

- [ ] **Step 4: Replace the four homepage CTA links with tracked links and extend the homepage test**

Update the `app/page.tsx` CTA usage:

```tsx
import { TrackedLink } from "@/src/components/analytics/tracked-link";
```

```tsx
<TrackedLink
  href="/companies"
  eventLabel="Explore Companies"
  eventLocation="home_hero"
  className="inline-flex w-fit items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white"
>
  Explore Companies
</TrackedLink>
<TrackedLink
  href="/about"
  eventLabel="About Gary"
  eventLocation="home_hero"
  className="inline-flex w-fit items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-zinc-950"
>
  About Gary
</TrackedLink>
<TrackedLink
  href="/about"
  eventLabel="Explore the Full Journey"
  eventLocation="home_journey"
  className="mt-5 inline-flex rounded-full border border-black/10 px-5 py-3 text-sm font-medium text-zinc-950"
>
  Explore the Full Journey
</TrackedLink>
<TrackedLink
  href={contactEmail.url}
  eventLabel="Contact Gary"
  eventLocation="home_contact"
  className="inline-flex w-fit items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white"
>
  Contact Gary
</TrackedLink>
```

Extend `__tests__/page.test.tsx` with CTA coverage:

```tsx
expect(
  screen.getByRole("link", { name: "Explore Companies" }).getAttribute("href")
).toBe("/companies");
expect(
  screen.getByRole("link", { name: "About Gary" }).getAttribute("href")
).toBe("/about");
expect(
  screen.getByRole("link", { name: "Explore the Full Journey" }).getAttribute("href")
).toBe("/about");
expect(
  screen.getByRole("link", { name: "Contact Gary" }).getAttribute("href")
).toBe("mailto:hello@garygiam.com");
```

- [ ] **Step 5: Run the CTA tracking tests and commit**

Run:

```bash
npm test -- __tests__/tracked-link.test.tsx __tests__/page.test.tsx
```

Expected: PASS with CTA event payloads locked and homepage links still rendering unchanged.

Commit:

```bash
git add src/components/analytics/tracked-link.tsx app/page.tsx __tests__/tracked-link.test.tsx __tests__/page.test.tsx
git commit -m "feat: track homepage CTA clicks in GA4"
```

## Task 3: Generate Founder Favicon Assets And Wire Metadata

**Files:**
- Create: `src/assets/founder-favicon.svg`
- Create: `scripts/generate-founder-favicons.mjs`
- Update: `app/favicon.ico`
- Create: `public/favicon-32x32.png`
- Create: `public/favicon-16x16.png`
- Create: `public/apple-touch-icon.png`
- Modify: `src/seo/metadata.ts`
- Test: `__tests__/seo-metadata.test.tsx`

- [ ] **Step 1: Write the failing favicon metadata test**

Extend `__tests__/seo-metadata.test.tsx`:

```tsx
import { existsSync } from "node:fs";
import path from "node:path";
```

```tsx
test("declares founder favicon metadata and generated assets", () => {
  const metadata = buildRootMetadata();
  const icons = metadata.icons;

  expect(icons).toEqual({
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  });

  expect(existsSync(path.join(process.cwd(), "app/favicon.ico"))).toBe(true);
  expect(existsSync(path.join(process.cwd(), "public/favicon-32x32.png"))).toBe(true);
  expect(existsSync(path.join(process.cwd(), "public/favicon-16x16.png"))).toBe(true);
  expect(existsSync(path.join(process.cwd(), "public/apple-touch-icon.png"))).toBe(true);
});
```

- [ ] **Step 2: Run the metadata test to verify it fails**

Run:

```bash
npm test -- __tests__/seo-metadata.test.tsx
```

Expected: FAIL because `buildRootMetadata()` does not yet declare `icons` and the new PNG assets do not yet exist.

- [ ] **Step 3: Add the monogram source, the generation script, and the metadata wiring**

Install build-only dependencies:

```bash
npm install -D sharp png-to-ico
```

Create `src/assets/founder-favicon.svg`:

```svg
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="112" fill="#111111"/>
  <path d="M166 166H270C316 166 348 194 348 236C348 274 320 302 278 306L348 392H292L227 311H214V392H166V166ZM214 206V274H264C290 274 302 262 302 240C302 218 288 206 262 206H214Z" fill="#D4AF37"/>
  <path d="M205 126H356V166H253C234 166 224 176 224 194C224 210 235 220 257 226L290 235C337 247 364 273 364 317C364 366 329 400 270 400H156V360H267C300 360 316 346 316 322C316 304 305 293 276 286L244 278C196 266 176 238 176 202C176 155 210 126 272 126H205Z" fill="#D4AF37"/>
</svg>
```

Create `scripts/generate-founder-favicons.mjs`:

```js
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import pngToIco from "png-to-ico";
import sharp from "sharp";

const root = process.cwd();
const source = path.join(root, "src/assets/founder-favicon.svg");
const publicDir = path.join(root, "public");
const appDir = path.join(root, "app");

const icon16 = path.join(publicDir, "favicon-16x16.png");
const icon32 = path.join(publicDir, "favicon-32x32.png");
const apple = path.join(publicDir, "apple-touch-icon.png");
const faviconIco = path.join(appDir, "favicon.ico");

await mkdir(publicDir, { recursive: true });
await mkdir(appDir, { recursive: true });

await sharp(source).resize(16, 16).png().toFile(icon16);
await sharp(source).resize(32, 32).png().toFile(icon32);
await sharp(source).resize(180, 180).png().toFile(apple);

const icoBuffer = await pngToIco([
  await readFile(icon16),
  await readFile(icon32),
  await readFile(apple),
]);

await writeFile(faviconIco, icoBuffer);
```

Run:

```bash
node scripts/generate-founder-favicons.mjs
```

Update `src/seo/metadata.ts`:

```ts
export function buildRootMetadata(): Metadata {
  const { seo, site } = content;

  return {
    metadataBase: new URL(SITE_ORIGIN),
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: "/",
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
    openGraph: {
      type: "website",
      url: SITE_ORIGIN,
      title: seo.title,
      description: seo.description,
      siteName: site.name,
      ...(seo.openGraphImage ? { images: [seo.openGraphImage] } : {}),
    },
    twitter: {
      card: seo.openGraphImage ? "summary_large_image" : "summary",
      title: seo.title,
      description: seo.description,
      ...(seo.openGraphImage ? { images: [seo.openGraphImage] } : {}),
    },
  };
}
```

- [ ] **Step 4: Run the favicon metadata test to verify it passes**

Run:

```bash
npm test -- __tests__/seo-metadata.test.tsx
```

Expected: PASS with metadata icons and generated asset files confirmed.

- [ ] **Step 5: Commit the favicon asset pipeline and metadata**

```bash
git add package.json package-lock.json src/assets/founder-favicon.svg scripts/generate-founder-favicons.mjs app/favicon.ico public/favicon-32x32.png public/favicon-16x16.png public/apple-touch-icon.png src/seo/metadata.ts __tests__/seo-metadata.test.tsx
git commit -m "feat: add founder favicon assets and metadata"
```

## Task 4: Verify Production Readiness, Deploy, And Confirm GA Requests

**Files:**
- No new source files
- Verify: `app/layout.tsx`
- Verify: `app/page.tsx`
- Verify: `src/seo/metadata.ts`
- Verify: production routes on Vercel

- [ ] **Step 1: Run the focused local verification suite**

Run:

```bash
npm test -- __tests__/layout-analytics.test.tsx __tests__/tracked-link.test.tsx __tests__/page.test.tsx __tests__/seo-metadata.test.tsx
npm run typecheck
npx eslint app/layout.tsx app/page.tsx src/components/analytics/tracked-link.tsx src/seo/metadata.ts __tests__/layout-analytics.test.tsx __tests__/tracked-link.test.tsx __tests__/page.test.tsx __tests__/seo-metadata.test.tsx
npm run build
```

Expected:

- all focused tests PASS
- typecheck PASS
- targeted lint PASS
- production build PASS

- [ ] **Step 2: Commit the verification pass if code changed during cleanup**

```bash
git status --short
```

Expected: clean working tree. If not clean because of intended cleanup only, commit with:

```bash
git add -A
git commit -m "chore: finalize GA4 and founder favicon rollout"
```

- [ ] **Step 3: Push `main` to trigger the Vercel production deploy**

Run:

```bash
git push origin main
```

Expected: push succeeds and Vercel auto-deploys the production build from `main`.

- [ ] **Step 4: Verify GA4 requests and page views in production**

Production checks:

```text
Open:
- https://garygiam.com/
- https://garygiam.com/about
- https://garygiam.com/companies
- https://garygiam.com/media
- https://garygiam.com/contact

Confirm in the browser network panel:
- gtag/js loads
- collect requests fire on first load
- collect requests fire after client-side route transitions
```

Expected: page-view collection traffic appears on all five verified routes.

- [ ] **Step 5: Verify CTA events and favicon behavior in production, then report**

Production checks:

```text
Click and verify network activity for:
- Explore Companies
- About Gary
- Explore the Full Journey
- Contact Gary

Confirm favicon behavior:
- browser tab icon updates
- bookmark-sized icon uses the GG monogram
- Apple touch icon resolves at /apple-touch-icon.png
```

Report:

```text
- production deployment URL
- push status
- GA request evidence
- user action needed: confirm events in GA4 Realtime / DebugView
```

Expected: production proves events are being sent, and GA4 UI confirms they are being received.

## Self-Review

- Spec coverage:
  - official Next.js GA4 integration: Task 1
  - automatic page views on launch routes: Task 1 + Task 4
  - four CTA events: Task 2 + Task 4
  - founder favicon asset set: Task 3
  - deployment and production verification: Task 4
- Placeholder scan:
  - removed favicon generation ambiguity by locking one SVG source file and one generation script
  - every task contains exact files, commands, and concrete code
- Type consistency:
  - `TrackedLink` uses `eventLabel` and `eventLocation` consistently
  - GA event payload keys remain `cta_label`, `cta_destination`, and `cta_location`
  - metadata icon paths match the generated file paths exactly
