# PB13 Homepage Pilot Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the PB13 Homepage pilot so a first-time visitor understands the GEH problem, category, operating-system difference, proof model, future relevance, and next action without introducing a competing founder-only or portfolio-only narrative.

**Architecture:** Reuse the existing homepage route, portrait, section heading, ecosystem card, analytics links, and authority data wherever possible. Move the new homepage narrative into a dedicated structured content module, then rebuild `app/page.tsx` around the frozen GEH Narrative Architecture v1 and the approved PB13 Homepage section order. Treat the homepage as the pilot tranche, then freeze after verification, Knowledge Harvest, Promotion Review, and CEO checkpoint docs are complete.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, Vitest, Testing Library, ESLint

---

## File Structure

- Create: `src/content/data/homepage.ts`
- Modify: `app/page.tsx`
- Modify: `__tests__/page.test.tsx`
- Create: `__tests__/homepage-validation.test.tsx`
- Create: `docs/superpowers/pb13/2026-06-28-homepage-knowledge-harvest.md`
- Create: `docs/superpowers/pb13/2026-06-28-homepage-promotion-review.md`
- Create: `docs/superpowers/pb13/2026-06-28-homepage-ceo-checkpoint-summary.md`

## Acceptance Checklist

The implemented homepage must satisfy this checklist before the tranche can close:

- `Problem`: Is the pain immediately recognizable?
- `Category`: Does the visitor understand `GEH`?
- `Operating System`: Does the visitor understand why `GEH` is different?
- `Proof`: Do the ventures validate the system?
- `Future`: Does the visitor understand why this matters?
- `Action`: Does the visitor know what to do next?
- `Narrative Integrity`: Does every major section reinforce `GEH` as an entrepreneurial operating system rather than reverting to a founder-only or portfolio-only story?

## Task 1: Lock The Homepage Narrative Contract In Tests

**Files:**
- Modify: `__tests__/page.test.tsx`
- Create: `__tests__/homepage-validation.test.tsx`

- [ ] **Step 1: Replace the current homepage story test with the PB13 narrative contract**

Replace `__tests__/page.test.tsx` with:

```tsx
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import Page from "@/app/page";

test("renders the PB13 homepage as the public headquarters of GEH", () => {
  render(<Page />);

  expect(screen.getByRole("heading", { level: 1, name: "Gary Giam" })).toBeDefined();
  expect(screen.getByText("GEH HEADQUARTERS")).toBeDefined();
  expect(
    screen.getByText("Architect of an entrepreneurial operating system")
  ).toBeDefined();

  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "Most ventures can solve a problem once. Far fewer become stronger every time they do.",
    })
  ).toBeDefined();
  expect(
    screen.getByText(
      "GEH exists to solve a recurring organizational problem: promising ventures often build momentum without building the systems, coherence, and strength required to compound over time."
    )
  ).toBeDefined();

  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "GEH is an entrepreneurial operating system.",
    })
  ).toBeDefined();
  expect(
    screen.getByText(
      "It is the category for a repeatable system designed to help organizations become stronger, more coherent, and more capable every time they solve a meaningful problem."
    )
  ).toBeDefined();

  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "How GEH works differently",
    })
  ).toBeDefined();
  expect(
    screen.getByText(
      "GEH is an entrepreneurial operating system: a repeatable system for building organizations that become stronger, more coherent, and more capable each time they solve a meaningful problem, rather than remaining isolated ventures dependent on one-off founder effort."
    )
  ).toBeDefined();

  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "The ventures exist to validate the system",
    })
  ).toBeDefined();
  expect(screen.getAllByText("Inkco").length).toBeGreaterThan(0);
  expect(screen.getByText("HMIOSS")).toBeDefined();
  expect(screen.getByText("The Star")).toBeDefined();

  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "Why GEH matters now",
    })
  ).toBeDefined();
  expect(
    screen.getByRole("link", { name: "Explore the GEH Ecosystem" }).getAttribute("href")
  ).toBe("/companies");
  expect(
    screen.getByRole("link", { name: "View Proof & Authority" }).getAttribute("href")
  ).toBe("/media");
  expect(
    screen.getByRole("link", { name: "Partner with GEH" }).getAttribute("href")
  ).toBe("/contact");

  expect(
    screen.queryByRole("heading", {
      level: 2,
      name: "Building Across Industries. Driven By One Mission.",
    })
  ).toBeNull();
  expect(screen.queryByRole("heading", { level: 2, name: "Why I Build" })).toBeNull();
});
```

- [ ] **Step 2: Add the tranche acceptance-checklist test**

Create `__tests__/homepage-validation.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import Page from "@/app/page";

test("passes the PB13 homepage acceptance checklist", () => {
  render(<Page />);

  expect(
    screen.getByText(
      "GEH exists to solve a recurring organizational problem: promising ventures often build momentum without building the systems, coherence, and strength required to compound over time."
    )
  ).toBeDefined();

  expect(
    screen.getByText("GEH is an entrepreneurial operating system.")
  ).toBeDefined();

  expect(
    screen.getByText(
      "GEH is an entrepreneurial operating system: a repeatable system for building organizations that become stronger, more coherent, and more capable each time they solve a meaningful problem, rather than remaining isolated ventures dependent on one-off founder effort."
    )
  ).toBeDefined();

  expect(screen.getAllByText("Inkco").length).toBeGreaterThan(0);
  expect(screen.getByText("The Star")).toBeDefined();

  expect(screen.getByText("Why GEH matters now")).toBeDefined();

  expect(screen.getByRole("link", { name: "Partner with GEH" })).toBeDefined();

  expect(
    screen.queryByText("ENTREPRENEUR & ECOSYSTEM BUILDER")
  ).toBeNull();
});
```

- [ ] **Step 3: Run the focused homepage tests to verify they fail for the right reason**

Run:

```bash
npm test -- __tests__/page.test.tsx __tests__/homepage-validation.test.tsx
```

Expected:

- both tests fail
- failure is caused by missing PB13 headings/copy and the still-present legacy homepage narrative

- [ ] **Step 4: Commit the red-phase contract tests**

```bash
git add __tests__/page.test.tsx __tests__/homepage-validation.test.tsx
git commit -m "test: lock PB13 homepage narrative contract"
```

## Task 2: Add Structured Homepage Narrative Content

**Files:**
- Create: `src/content/data/homepage.ts`

- [ ] **Step 1: Create the homepage narrative data module**

Create `src/content/data/homepage.ts`:

```ts
export const homepageNarrative = {
  hero: {
    eyebrow: "GEH HEADQUARTERS",
    headline: "Architect of an entrepreneurial operating system",
    lead:
      "Most ventures can solve a problem once. Far fewer become stronger every time they do.",
    supporting:
      "GEH exists to solve a recurring organizational problem: promising ventures often build momentum without building the systems, coherence, and strength required to compound over time.",
    primaryCta: {
      label: "Explore the GEH Ecosystem",
      href: "/companies",
      eventLabel: "Explore the GEH Ecosystem",
      eventLocation: "home_problem",
    },
    secondaryCta: {
      label: "View Proof & Authority",
      href: "/media",
      eventLabel: "View Proof & Authority",
      eventLocation: "home_problem",
    },
  },
  category: {
    eyebrow: "The Category",
    title: "GEH is an entrepreneurial operating system.",
    description:
      "It is the category for a repeatable system designed to help organizations become stronger, more coherent, and more capable every time they solve a meaningful problem.",
    mentalModel: [
      "Gary is not just building companies.",
      "Gary is building a system that continuously creates stronger organizations.",
      "The ventures are expressions of the operating system, not unrelated outputs.",
    ],
  },
  operatingSystem: {
    eyebrow: "The Operating System",
    title: "How GEH works differently",
    canonicalDefinition:
      "GEH is an entrepreneurial operating system: a repeatable system for building organizations that become stronger, more coherent, and more capable each time they solve a meaningful problem, rather than remaining isolated ventures dependent on one-off founder effort.",
    principles: [
      {
        title: "Systems over improvisation",
        description:
          "GEH prioritizes durable operating logic instead of relying on opportunistic execution or founder heroics.",
      },
      {
        title: "Strengthening over expansion",
        description:
          "GEH is designed to make organizations stronger, not simply larger or more numerous.",
      },
      {
        title: "Compounding over isolated wins",
        description:
          "Each solved problem should improve the capability of the organization to solve the next one.",
      },
    ],
    founderReason:
      "Gary is building GEH because his work across platforms, businesses, consulting, philanthropy, and future-oriented ventures points to one underlying thesis: stronger systems create stronger organizations, and stronger organizations create stronger long-term outcomes.",
  },
  proof: {
    eyebrow: "The Proof",
    title: "The ventures exist to validate the system",
    description:
      "Each entity expresses GEH in a different context, but all of them test the same question: can a stronger operating system create a stronger organization?",
    authorityTitle: "Why the proof matters",
    authorityDescription:
      "Recognition, media coverage, and founder milestones matter here because they help show that the system is producing visible outcomes rather than remaining a private theory.",
  },
  future: {
    eyebrow: "The Future",
    title: "Why GEH matters now",
    description:
      "GEH matters because the long-term goal is larger than one founder site or one set of ventures. The aim is to make organizational strengthening a visible entrepreneurial discipline, so that solving a problem makes the organization stronger each time.",
    actionTitle: "What to do next",
    actions: [
      {
        label: "Explore the GEH Ecosystem",
        href: "/companies",
        eventLabel: "Explore the GEH Ecosystem",
        eventLocation: "home_future",
      },
      {
        label: "View Proof & Authority",
        href: "/media",
        eventLabel: "View Proof & Authority",
        eventLocation: "home_future",
      },
      {
        label: "Partner with GEH",
        href: "/contact",
        eventLabel: "Partner with GEH",
        eventLocation: "home_future",
      },
    ],
  },
} as const;
```

- [ ] **Step 2: Run the same focused tests and confirm they still fail**

Run:

```bash
npm test -- __tests__/page.test.tsx __tests__/homepage-validation.test.tsx
```

Expected:

- tests still fail because the page has not been wired to the new narrative module yet

- [ ] **Step 3: Commit the content module**

```bash
git add src/content/data/homepage.ts
git commit -m "feat: add PB13 homepage narrative content"
```

## Task 3: Implement Problem, Category, And Operating System On The Homepage

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Update the homepage imports and top-level data setup**

In `app/page.tsx`, replace the imports block with:

```tsx
import Link from "next/link";

import { TrackedLink } from "@/src/components/analytics/tracked-link";
import { EcosystemEntityCard } from "@/src/components/ecosystem/entity-card";
import { FounderPortrait } from "@/src/components/founder-portrait";
import { SectionHeading } from "@/src/components/section-heading";
import { Container } from "@/src/components/ui/container";
import {
  authorityMediaCoverage,
  content,
} from "@/src/content";
import { homepageNarrative } from "@/src/content/data/homepage";
import {
  getEcosystemChildren,
  getTopLevelEcosystemEntities,
} from "@/src/lib/ecosystem";
import { resolvePortraitSource } from "@/src/lib/portrait";
```

Replace the current homepage constants with:

```tsx
const contactEmail = content.contactChannels.find(
  (channel) => channel.type === "email" && channel.url
);
const portraitSrc = content.person.portraitPath
  ? resolvePortraitSource(content.person.portraitPath)
  : null;
const portraitAvailable = Boolean(portraitSrc);
const topLevelEcosystemEntities = getTopLevelEcosystemEntities(content.ventures);
const ecosystemCards = topLevelEcosystemEntities.map((entity) => ({
  entity,
  children: getEcosystemChildren(content.ventures, entity.id),
}));
const featuredMediaCoverage = authorityMediaCoverage[0];
```

- [ ] **Step 2: Replace the hero, category, and operating-system sections**

In `app/page.tsx`, replace the current hero, stats strip, ecosystem intro, and `Why I Build` section with:

```tsx
        <section className="grid gap-8 rounded-[2rem] border border-black/10 bg-zinc-50 p-6 shadow-[0_24px_60px_rgba(17,17,17,0.06)] sm:p-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.8fr)] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7a17]">
              {homepageNarrative.hero.eyebrow}
            </p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl">
              {content.person.name}
            </h1>
            <p className="mt-4 max-w-3xl text-lg font-medium text-zinc-950 sm:text-xl">
              {homepageNarrative.hero.headline}
            </p>
            <h2 className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              {homepageNarrative.hero.lead}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
              {homepageNarrative.hero.supporting}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <TrackedLink
                href={homepageNarrative.hero.primaryCta.href}
                eventLabel={homepageNarrative.hero.primaryCta.eventLabel}
                eventLocation={homepageNarrative.hero.primaryCta.eventLocation}
                className="inline-flex w-fit items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white"
              >
                {homepageNarrative.hero.primaryCta.label}
              </TrackedLink>
              <TrackedLink
                href={homepageNarrative.hero.secondaryCta.href}
                eventLabel={homepageNarrative.hero.secondaryCta.eventLabel}
                eventLocation={homepageNarrative.hero.secondaryCta.eventLocation}
                className="inline-flex w-fit items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-zinc-950"
              >
                {homepageNarrative.hero.secondaryCta.label}
              </TrackedLink>
            </div>
          </div>
          <FounderPortrait
            available={portraitAvailable}
            src={
              portraitSrc ??
              content.person.portraitPath ??
              "/images/gary-giam-portrait.jpg"
            }
            alt="Portrait of Gary Giam"
            name={content.person.name}
          />
        </section>

        <section className="mt-14">
          <SectionHeading
            eyebrow={homepageNarrative.category.eyebrow}
            title={homepageNarrative.category.title}
            description={<p>{homepageNarrative.category.description}</p>}
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {homepageNarrative.category.mentalModel.map((item) => (
              <article
                key={item}
                className="rounded-[1.5rem] border border-black/10 bg-white p-5"
              >
                <p className="text-sm leading-7 text-zinc-700">{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-[1.75rem] border border-black/10 bg-zinc-950 px-6 py-10 text-white sm:px-10">
          <SectionHeading
            eyebrow={homepageNarrative.operatingSystem.eyebrow}
            title={homepageNarrative.operatingSystem.title}
            description={
              <p className="text-zinc-200">
                {homepageNarrative.operatingSystem.canonicalDefinition}
              </p>
            }
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {homepageNarrative.operatingSystem.principles.map((principle) => (
              <article
                key={principle.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
              >
                <h3 className="text-lg font-semibold text-white">{principle.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-200">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-4xl text-base leading-8 text-zinc-200 sm:text-lg">
            {homepageNarrative.operatingSystem.founderReason}
          </p>
        </section>
```

- [ ] **Step 3: Run the focused tests to confirm the top-half narrative is now in place**

Run:

```bash
npm test -- __tests__/page.test.tsx __tests__/homepage-validation.test.tsx
```

Expected:

- some assertions may still fail because the proof and future sections are not yet updated
- the failures should now be limited to the remaining sections rather than the problem/category/system copy

- [ ] **Step 4: Commit the top-half homepage narrative**

```bash
git add app/page.tsx
git commit -m "feat: implement PB13 homepage narrative foundation"
```

## Task 4: Implement Proof, Future, And Action On The Homepage

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace the current proof, journey, and contact sections with PB13 proof/future sections**

In `app/page.tsx`, replace everything from the current ecosystem-card section downward with:

```tsx
        <section className="mt-14">
          <SectionHeading
            eyebrow={homepageNarrative.proof.eyebrow}
            title={homepageNarrative.proof.title}
            description={<p>{homepageNarrative.proof.description}</p>}
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {ecosystemCards.map(({ entity, children }) => (
              <EcosystemEntityCard
                key={entity.id}
                entity={entity}
                childrenEntities={children}
              />
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-[1.75rem] border border-black/10 bg-white p-6 sm:p-8">
          <SectionHeading
            eyebrow="Authority"
            title={homepageNarrative.proof.authorityTitle}
            description={<p>{homepageNarrative.proof.authorityDescription}</p>}
          />
          <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <div className="rounded-[1.5rem] border border-black/10 bg-zinc-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a7a17]">
                Recognition
              </p>
              <div className="mt-4 space-y-4">
                {content.awards.map((award) => (
                  <article key={award.id}>
                    <h3 className="text-lg font-semibold text-zinc-950">
                      {award.issuer} {award.date}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-zinc-700">{award.title}</p>
                  </article>
                ))}
              </div>
            </div>

            {featuredMediaCoverage ? (
              <div className="rounded-[1.5rem] border border-black/10 bg-zinc-950 p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d4af37]">
                  Media Coverage
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  {featuredMediaCoverage.outlet}
                </h3>
                <p className="mt-3 text-base font-medium text-white">
                  {featuredMediaCoverage.title}
                </p>
                <p className="mt-4 text-sm leading-7 text-zinc-200">
                  {featuredMediaCoverage.context}
                </p>
                <Link
                  href={featuredMediaCoverage.sourceUrl}
                  className="mt-6 inline-flex rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white"
                >
                  View source
                </Link>
              </div>
            ) : null}
          </div>
        </section>

        <section className="mt-14 rounded-[1.75rem] border border-black/10 bg-zinc-50 px-6 py-10 sm:px-10">
          <SectionHeading
            eyebrow={homepageNarrative.future.eyebrow}
            title={homepageNarrative.future.title}
            description={<p>{homepageNarrative.future.description}</p>}
          />
          <div className="mt-8 rounded-[1.5rem] border border-black/10 bg-white p-6">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
              {homepageNarrative.future.actionTitle}
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {homepageNarrative.future.actions.map((action) => (
                <TrackedLink
                  key={action.label}
                  href={action.href}
                  eventLabel={action.eventLabel}
                  eventLocation={action.eventLocation}
                  className="inline-flex w-fit items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-zinc-950"
                >
                  {action.label}
                </TrackedLink>
              ))}
            </div>
          </div>
        </section>
```

- [ ] **Step 2: Run the full homepage-focused PB13 suite and verify it passes**

Run:

```bash
npm test -- __tests__/page.test.tsx __tests__/homepage-validation.test.tsx
```

Expected:

- both homepage PB13 tests pass

- [ ] **Step 3: Run the broader nearby regression suite**

Run:

```bash
npm test -- __tests__/page.test.tsx __tests__/homepage-validation.test.tsx __tests__/content-contract.test.ts __tests__/companies-page.test.tsx __tests__/media-page.test.tsx
```

Expected:

- all five files pass
- homepage changes do not break the existing ecosystem and media surfaces

- [ ] **Step 4: Commit the proof and future implementation**

```bash
git add app/page.tsx
git commit -m "feat: complete PB13 homepage pilot"
```

## Task 5: Run The Homepage Verification Baseline

**Files:**
- Verify only: `app/page.tsx`
- Verify only: `src/content/data/homepage.ts`
- Verify only: `__tests__/page.test.tsx`
- Verify only: `__tests__/homepage-validation.test.tsx`

- [ ] **Step 1: Run the complete homepage verification baseline**

Run:

```bash
npm test -- __tests__/page.test.tsx __tests__/homepage-validation.test.tsx __tests__/content-contract.test.ts __tests__/companies-page.test.tsx __tests__/media-page.test.tsx __tests__/seo-metadata.test.tsx __tests__/founder-portrait.test.tsx
npx eslint app/page.tsx src/content/data/homepage.ts __tests__/page.test.tsx __tests__/homepage-validation.test.tsx
npm run typecheck
npm run build
```

Expected:

- tests pass
- ESLint passes
- TypeScript passes
- build succeeds

- [ ] **Step 2: Capture the final homepage repo state**

Run:

```bash
git status --short
```

Expected:

- only intended homepage-tranche files remain modified before the closing docs are written

## Task 6: Produce The Homepage Knowledge Harvest

**Files:**
- Create: `docs/superpowers/pb13/2026-06-28-homepage-knowledge-harvest.md`

- [ ] **Step 1: Write the Homepage Knowledge Harvest**

Create `docs/superpowers/pb13/2026-06-28-homepage-knowledge-harvest.md` with this structure, replacing each evidence line with the actual observed result from the implemented homepage and Task 5 verification:

```md
# PB13 Homepage Knowledge Harvest

Date: 2026-06-28
Programme: PB13 — GEH Public Narrative Implementation
Tranche: 1 — Homepage

## What Held

- Problem-first sequencing:
- Category clarity:
- Operating-system differentiation:
- Proof coherence:
- Action clarity:

## What Was Weaker Than Expected

- Narrative confusion points:
- Proof gaps:
- CTA friction:

## Reusable Learnings

- Shared narrative patterns that should carry into About:
- Shared proof patterns that should carry into Companies or Media / Authority:
- Shared CTA or engagement patterns that should carry into Contact:

## Local-Only Learnings

- Homepage-specific presentation decisions that should not yet be generalized:

## Verification Notes

- Tests:
- ESLint:
- TypeScript:
- Build:
```

- [ ] **Step 2: Commit the Knowledge Harvest**

```bash
git add docs/superpowers/pb13/2026-06-28-homepage-knowledge-harvest.md
git commit -m "docs: capture PB13 homepage knowledge harvest"
```

## Task 7: Produce The Homepage Promotion Review

**Files:**
- Create: `docs/superpowers/pb13/2026-06-28-homepage-promotion-review.md`

- [ ] **Step 1: Write the Homepage Promotion Review**

Create `docs/superpowers/pb13/2026-06-28-homepage-promotion-review.md` with this structure, classifying every major homepage discovery after implementation:

```md
# PB13 Homepage Promotion Review

Date: 2026-06-28
Programme: PB13 — GEH Public Narrative Implementation
Tranche: 1 — Homepage

## Review Purpose

This review does not modify GEH Narrative Architecture v1.

It classifies implementation discoveries as:

- Homepage-local only
- Reusable across GaryGiam.com
- Future GEH pattern candidate

## Items

### Homepage Problem Frame

- Classification:
- Evidence:
- Reuse Decision:

### Homepage Category Definition Block

- Classification:
- Evidence:
- Reuse Decision:

### Homepage Operating-System Principle Layer

- Classification:
- Evidence:
- Reuse Decision:

### Homepage Proof Through Venture Expression

- Classification:
- Evidence:
- Reuse Decision:

### Homepage Future / Action Framework

- Classification:
- Evidence:
- Reuse Decision:
```

- [ ] **Step 2: Commit the Promotion Review**

```bash
git add docs/superpowers/pb13/2026-06-28-homepage-promotion-review.md
git commit -m "docs: add PB13 homepage promotion review"
```

## Task 8: Produce The Homepage CEO Checkpoint Summary And Freeze

**Files:**
- Create: `docs/superpowers/pb13/2026-06-28-homepage-ceo-checkpoint-summary.md`

- [ ] **Step 1: Write the Homepage CEO checkpoint summary**

Create `docs/superpowers/pb13/2026-06-28-homepage-ceo-checkpoint-summary.md` with:

```md
# PB13 Homepage CEO Checkpoint Summary

Date: 2026-06-28
Programme: PB13 — GEH Public Narrative Implementation
Tranche: 1 — Homepage
Status: Pause for CEO review

## Completed

- Homepage implemented against the frozen GEH Narrative Architecture v1
- Homepage verification baseline executed
- Homepage Knowledge Harvest completed
- Homepage Promotion Review completed

## Homepage Acceptance Checklist

- Problem:
- Category:
- Operating System:
- Proof:
- Future:
- Action:
- Narrative Integrity:

## Verification Summary

- Tests:
- ESLint:
- TypeScript:
- Build:

## Freeze Rule

Implementation pauses here.

The next tranche may not begin until:

- Knowledge Harvest is completed
- Promotion Review is completed
- CEO approves continuation
```

- [ ] **Step 2: Commit the CEO checkpoint summary**

```bash
git add docs/superpowers/pb13/2026-06-28-homepage-ceo-checkpoint-summary.md
git commit -m "docs: add PB13 homepage checkpoint summary"
```

- [ ] **Step 3: Confirm the tranche freeze state**

Run:

```bash
git status --short
```

Expected:

- the homepage tranche is complete
- no About-tranche work has started
- implementation stops here pending CEO approval

## Self-Review

- Spec coverage:
  - frozen GEH Narrative Architecture v1 inheritance: Tasks 2, 3, and 4
  - homepage-only pilot scope: Tasks 1 through 8
  - no Tranche 2 work: Task 8 freeze state
  - verification baseline: Task 5
  - Knowledge Harvest: Task 6
  - Promotion Review: Task 7
  - CEO checkpoint and freeze rule: Task 8
  - primary success criterion: Tasks 1, 4, and 5
- Placeholder scan:
  - homepage code and tests are fully specified
  - post-implementation summary docs use fixed headings and required evidence fields rather than vague TODO markers
- Type consistency:
  - homepage narrative data lives in `src/content/data/homepage.ts`
  - `app/page.tsx` remains the route implementation
  - `TrackedLink`, `SectionHeading`, `EcosystemEntityCard`, and `FounderPortrait` remain reused rather than replaced
