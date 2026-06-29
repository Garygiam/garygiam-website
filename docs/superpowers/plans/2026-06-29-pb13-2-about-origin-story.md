# PB13.2 About Origin Story Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the `About` page as the origin story of `GEH`, showing how Gary's journey revealed the recurring organizational problem, why existing models were not enough, and why `GEH` became the inevitable conclusion.

**Architecture:** Keep the approved constitutional architecture exactly as written and implement it through a dedicated About-page narrative data model rather than overloading the generic `careerMilestones` array. The page should remain route-thin, use one short lesson per chapter, add a restrained emotional layer about persistence, and end with a bridge into `Companies` so the site reads as one continuous GEH narrative.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, Vitest, Testing Library, ESLint

---

## File Structure

- Modify: `__tests__/about-page.test.tsx`
  - Replace the founder-journey contract with the PB13.2 About-origin contract.
- Create: `__tests__/about-origin-content.test.ts`
  - Lock the About narrative data model, including the three-question chapter rule and the bridge into `Companies`.
- Modify: `app/about/page.tsx`
  - Rebuild the page around the approved five-section origin structure.
- Create: `src/content/types/about-origin.ts`
  - Define the structured About-page narrative types.
- Create: `src/content/data/about.ts`
  - Store the PB13.2 About-page narrative content.
- Modify: `src/content/index.ts`
  - Export the About narrative data and types for route consumption.
- Create: `src/components/about/origin-chapter.tsx`
  - Render one short chapter with `what happened`, `organizational principle`, and `why it wasn't enough`.
- Create: `src/components/about/model-gap-grid.tsx`
  - Render Section 3.5 with calm differentiation from existing models.
- Create: `docs/superpowers/pb13/2026-06-29-about-origin-knowledge-harvest.md`
  - Capture what held during PB13.2.
- Create: `docs/superpowers/pb13/2026-06-29-about-origin-promotion-review.md`
  - Classify reusable and local narrative patterns.
- Create: `docs/superpowers/pb13/2026-06-29-about-origin-ceo-checkpoint-summary.md`
  - Freeze the tranche after verification, production verification, and field validation readiness.

## Task 1: Lock The PB13.2 About Contract In Tests

**Files:**
- Modify: `__tests__/about-page.test.tsx`
- Create: `__tests__/about-origin-content.test.ts`

- [ ] **Step 1: Replace the route test with the PB13.2 About origin contract**

Update `__tests__/about-page.test.tsx` to:

```tsx
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import AboutPage from "@/app/about/page";

test("renders the about page as the origin story of GEH", () => {
  render(<AboutPage />);

  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "Why GEH came into existence",
    })
  ).toBeDefined();
  expect(
    screen.getByText(
      "Why do so many organizations struggle to become stronger over time?"
    )
  ).toBeDefined();
  expect(
    screen.getByText(
      "He did not set out to build GEH from day one. The same organizational problem kept reappearing until it became impossible to ignore."
    )
  ).toBeDefined();

  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "The same pattern kept appearing",
    })
  ).toBeDefined();
  expect(
    screen.getByText(
      "Across different industries, different organizations, and different roles, the same pattern kept appearing: progress did not automatically create stronger organizations."
    )
  ).toBeDefined();

  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "What the journey revealed",
    })
  ).toBeDefined();
  expect(screen.getByText("PropertyGuru Malaysia")).toBeDefined();
  expect(
    screen.getByText("Growth alone does not create organizational strength.")
  ).toBeDefined();
  expect(screen.getByText("Food Ink Malaysia")).toBeDefined();
  expect(
    screen.getByText("Platforms need resilient operating systems.")
  ).toBeDefined();
  expect(screen.getByText("Isaac G Consultancy")).toBeDefined();
  expect(
    screen.getByText("The same organizational problems repeat across industries.")
  ).toBeDefined();

  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "Why existing models were not enough",
    })
  ).toBeDefined();
  expect(
    screen.getByText(
      "GEH did not emerge because consulting, branding, incubators, charities, or education were wrong. It emerged because they solved different problems."
    )
  ).toBeDefined();

  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "Why GEH became inevitable",
    })
  ).toBeDefined();
  expect(
    screen.getByText(
      "GEH became necessary because no existing model continuously strengthened organizations across all of those contexts."
    )
  ).toBeDefined();

  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "The mission continues",
    })
  ).toBeDefined();
  expect(
    screen.getByText(
      "GEH exists so future organizations do not have to learn those lessons the hard way."
    )
  ).toBeDefined();
  expect(
    screen.getByRole("link", { name: "See GEH in practice" }).getAttribute("href")
  ).toBe("/companies");

  expect(
    screen.queryByRole("heading", {
      level: 1,
      name: "How Gary Giam got here",
    })
  ).toBeNull();
});
```

- [ ] **Step 2: Add a content-model test for the About origin narrative**

Create `__tests__/about-origin-content.test.ts`:

```ts
import { expect, test } from "vitest";

import { aboutOriginNarrative } from "@/src/content/data/about";

test("defines the PB13.2 about narrative as a chain of inevitability", () => {
  expect(aboutOriginNarrative.question.title).toBe(
    "Why GEH came into existence"
  );
  expect(aboutOriginNarrative.question.prompt).toBe(
    "Why do so many organizations struggle to become stronger over time?"
  );
  expect(aboutOriginNarrative.search.emotionalLayer).toBe(
    "He did not set out to build GEH from day one. The same organizational problem kept reappearing until it became impossible to ignore."
  );

  expect(aboutOriginNarrative.discovery.chapters).toHaveLength(6);
  expect(aboutOriginNarrative.discovery.chapters[0]).toMatchObject({
    title: "PropertyGuru Malaysia",
    whatHappened: expect.stringContaining("sales management"),
    organizationalPrinciple:
      "Growth alone does not create organizational strength.",
    whyNotEnough:
      "Commercial progress still depended on structures that did not automatically make the organization stronger over time.",
  });
  expect(aboutOriginNarrative.discovery.chapters[1]).toMatchObject({
    title: "Food Ink Malaysia",
    organizationalPrinciple: "Platforms need resilient operating systems.",
    whyNotEnough:
      "Platform traction still exposed dependency on technology, control, and deeper operating resilience.",
  });
  expect(aboutOriginNarrative.discovery.chapters[4]).toMatchObject({
    title: "Isaac G Consultancy",
    organizationalPrinciple:
      "The same organizational problems repeat across industries.",
  });

  expect(aboutOriginNarrative.modelGap.models).toEqual([
    expect.objectContaining({
      name: "Consulting",
      focus: "Improves businesses",
    }),
    expect.objectContaining({
      name: "Incubators",
      focus: "Launch startups",
    }),
    expect.objectContaining({
      name: "Branding",
      focus: "Builds perception",
    }),
    expect.objectContaining({
      name: "Accelerators",
      focus: "Increase growth",
    }),
    expect.objectContaining({
      name: "Charities",
      focus: "Create impact",
    }),
    expect.objectContaining({
      name: "Education",
      focus: "Develop people",
    }),
  ]);

  expect(aboutOriginNarrative.future.bridgeCta).toEqual({
    label: "See GEH in practice",
    href: "/companies",
  });
});
```

- [ ] **Step 3: Run the About-focused tests and verify RED**

Run:

```bash
npm test -- __tests__/about-page.test.tsx __tests__/about-origin-content.test.ts
```

Expected:

- both tests fail
- failures point to missing About narrative data, old `About` page framing, and old heading / copy

- [ ] **Step 4: Commit the red-phase About contract**

```bash
git add __tests__/about-page.test.tsx __tests__/about-origin-content.test.ts
git commit -m "test: lock PB13.2 about origin contract"
```

## Task 2: Add Dedicated About Narrative Data

**Files:**
- Create: `src/content/types/about-origin.ts`
- Create: `src/content/data/about.ts`
- Modify: `src/content/index.ts`

- [ ] **Step 1: Define the About narrative types**

Create `src/content/types/about-origin.ts`:

```ts
export type AboutOriginChapter = {
  id: string;
  title: string;
  roleLabel: string;
  whatHappened: string;
  organizationalPrinciple: string;
  whyNotEnough: string;
};

export type AboutModelGapItem = {
  name: string;
  focus: string;
};

export type AboutOriginNarrative = {
  question: {
    eyebrow: string;
    title: string;
    prompt: string;
    lead: string;
  };
  search: {
    eyebrow: string;
    title: string;
    lead: string;
    emotionalLayer: string;
  };
  discovery: {
    eyebrow: string;
    title: string;
    lead: string;
    chapters: AboutOriginChapter[];
  };
  modelGap: {
    eyebrow: string;
    title: string;
    lead: string;
    models: AboutModelGapItem[];
  };
  conclusion: {
    eyebrow: string;
    title: string;
    lead: string;
  };
  future: {
    eyebrow: string;
    title: string;
    lead: string;
    bridgeCta: {
      label: string;
      href: string;
    };
  };
};
```

- [ ] **Step 2: Create the About narrative data file**

Create `src/content/data/about.ts`:

```ts
import type { AboutOriginNarrative } from "../types/about-origin";

export const aboutOriginNarrative: AboutOriginNarrative = {
  question: {
    eyebrow: "About GEH",
    title: "Why GEH came into existence",
    prompt: "Why do so many organizations struggle to become stronger over time?",
    lead:
      "The answer did not emerge from one role, one company, or one industry. It emerged because the same organizational pattern kept appearing in different forms.",
  },
  search: {
    eyebrow: "The Search",
    title: "The same pattern kept appearing",
    lead:
      "Across different industries, different organizations, and different roles, the same pattern kept appearing: progress did not automatically create stronger organizations.",
    emotionalLayer:
      "He did not set out to build GEH from day one. The same organizational problem kept reappearing until it became impossible to ignore.",
  },
  discovery: {
    eyebrow: "The Discovery",
    title: "What the journey revealed",
    lead:
      "Each chapter matters here not as an achievement list, but as evidence of an organizational lesson that was still incomplete on its own.",
    chapters: [
      {
        id: "propertyguru",
        title: "PropertyGuru Malaysia",
        roleLabel: "Career Foundation",
        whatHappened:
          "Built experience in sales management, business development, revenue growth, team leadership, and market expansion.",
        organizationalPrinciple:
          "Growth alone does not create organizational strength.",
        whyNotEnough:
          "Commercial progress still depended on structures that did not automatically make the organization stronger over time.",
      },
      {
        id: "food-ink",
        title: "Food Ink Malaysia",
        roleLabel: "Founder Origin",
        whatHappened:
          "Founded an early food discovery and restaurant marketing platform that grew into a recognized community and later received Malaysia Website Awards 2016 Site of The Month (January).",
        organizationalPrinciple: "Platforms need resilient operating systems.",
        whyNotEnough:
          "Platform traction still exposed dependency on technology, control, and deeper operating resilience.",
      },
      {
        id: "technology-conflict",
        title: "Technology Conflict",
        roleLabel: "System Ownership",
        whatHappened:
          "The limits of platform-building became clearer when technology dependence and control questions affected durability.",
        organizationalPrinciple:
          "Control of knowledge and technology matters when building durable organizations.",
        whyNotEnough:
          "Ownership alone still did not solve the broader problem of organizational fragility across different contexts.",
      },
      {
        id: "ratatouille",
        title: "Ratatouille Gourmet",
        roleLabel: "Scaling Chapter",
        whatHappened:
          "Helped scale a small operation into a multi-outlet F&B group and received International Prestige Brand Awards 2020 Entrepreneur of the Year.",
        organizationalPrinciple: "Scaling exposes system weaknesses.",
        whyNotEnough:
          "Operational growth revealed that expansion does not guarantee stronger capability unless the system itself compounds.",
      },
      {
        id: "consulting",
        title: "Isaac G Consultancy",
        roleLabel: "Cross-Industry Pattern",
        whatHappened:
          "Worked with businesses across contexts through branding, business growth, and strategic execution.",
        organizationalPrinciple:
          "The same organizational problems repeat across industries.",
        whyNotEnough:
          "Pattern recognition clarified the problem, but the problem still needed a repeatable system-level response rather than isolated advisory work.",
      },
      {
        id: "impact-and-education",
        title: "Impact, Education, and Future Ventures",
        roleLabel: "Beyond Business",
        whatHappened:
          "Expanded into charity, education, wellbeing, technology, and future-oriented ventures where the same strengthening questions continued to appear.",
        organizationalPrinciple:
          "The same strengthening principles apply beyond business.",
        whyNotEnough:
          "At that point, the recurring lesson was larger than any one venture, role, or institution. It required its own operating-system frame.",
      },
    ],
  },
  modelGap: {
    eyebrow: "Why Existing Models Were Not Enough",
    title: "Why existing models were not enough",
    lead:
      "GEH did not emerge because consulting, branding, incubators, charities, or education were wrong. It emerged because they solved different problems.",
    models: [
      { name: "Consulting", focus: "Improves businesses" },
      { name: "Incubators", focus: "Launch startups" },
      { name: "Branding", focus: "Builds perception" },
      { name: "Accelerators", focus: "Increase growth" },
      { name: "Charities", focus: "Create impact" },
      { name: "Education", focus: "Develop people" },
    ],
  },
  conclusion: {
    eyebrow: "The Inevitable Conclusion",
    title: "Why GEH became inevitable",
    lead:
      "GEH became necessary because no existing model continuously strengthened organizations across all of those contexts. The recurring problem sat above the individual models, so the answer also had to sit above them.",
  },
  future: {
    eyebrow: "The Mission Continues",
    title: "The mission continues",
    lead:
      "GEH exists so future organizations do not have to learn those lessons the hard way. What began as repeated experience now becomes a public system that can help future organizations become stronger than the last.",
    bridgeCta: {
      label: "See GEH in practice",
      href: "/companies",
    },
  },
};
```

- [ ] **Step 3: Export the About narrative from the root content index**

Add these lines to `src/content/index.ts`:

```ts
export { aboutOriginNarrative } from "./data/about";
export type {
  AboutModelGapItem,
  AboutOriginChapter,
  AboutOriginNarrative,
} from "./types/about-origin";
```

- [ ] **Step 4: Run the data-focused test and verify GREEN**

Run:

```bash
npm test -- __tests__/about-origin-content.test.ts
```

Expected:

- `PASS`

- [ ] **Step 5: Commit the About narrative data layer**

```bash
git add src/content/types/about-origin.ts src/content/data/about.ts src/content/index.ts __tests__/about-origin-content.test.ts
git commit -m "feat: add PB13.2 about narrative data"
```

## Task 3: Build Reusable About Components

**Files:**
- Create: `src/components/about/origin-chapter.tsx`
- Create: `src/components/about/model-gap-grid.tsx`

- [ ] **Step 1: Create the origin chapter component**

Create `src/components/about/origin-chapter.tsx`:

```tsx
import type { AboutOriginChapter } from "@/src/content";

type OriginChapterProps = {
  chapter: AboutOriginChapter;
};

export function OriginChapter({ chapter }: OriginChapterProps) {
  return (
    <article className="rounded-[1.75rem] border border-black/10 bg-white p-6 sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a7a17]">
        {chapter.roleLabel}
      </p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
        {chapter.title}
      </h3>

      <div className="mt-5 space-y-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
            What Happened
          </p>
          <p className="mt-2 text-sm leading-7 text-zinc-700 sm:text-base">
            {chapter.whatHappened}
          </p>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
            Organizational Principle
          </p>
          <p className="mt-2 text-sm leading-7 text-zinc-950 sm:text-base">
            {chapter.organizationalPrinciple}
          </p>
        </div>

        <div className="rounded-[1.25rem] border border-black/10 bg-zinc-50 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
            Why It Wasn't Enough
          </p>
          <p className="mt-2 text-sm leading-7 text-zinc-700 sm:text-base">
            {chapter.whyNotEnough}
          </p>
        </div>
      </div>
    </article>
  );
}
```

- [ ] **Step 2: Create the model-gap grid**

Create `src/components/about/model-gap-grid.tsx`:

```tsx
import type { AboutModelGapItem } from "@/src/content";

type ModelGapGridProps = {
  items: AboutModelGapItem[];
};

export function ModelGapGrid({ items }: ModelGapGridProps) {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.name}
          className="rounded-[1.5rem] border border-black/10 bg-white p-5"
        >
          <h3 className="text-lg font-semibold tracking-tight text-zinc-950">
            {item.name}
          </h3>
          <p className="mt-3 text-sm leading-7 text-zinc-700">{item.focus}</p>
        </article>
      ))}
    </div>
  );
}
```

- [ ] **Step 3: Run a quick type-aware test pass**

Run:

```bash
npm test -- __tests__/about-origin-content.test.ts
```

Expected:

- `PASS`

- [ ] **Step 4: Commit the reusable About components**

```bash
git add src/components/about/origin-chapter.tsx src/components/about/model-gap-grid.tsx
git commit -m "feat: add PB13.2 about narrative components"
```

## Task 4: Implement The About Origin Story Page

**Files:**
- Modify: `app/about/page.tsx`
- Test: `__tests__/about-page.test.tsx`

- [ ] **Step 1: Rewrite the About route around the approved section logic**

Update `app/about/page.tsx` to:

```tsx
import Link from "next/link";

import { ModelGapGrid } from "@/src/components/about/model-gap-grid";
import { OriginChapter } from "@/src/components/about/origin-chapter";
import { PageIntro } from "@/src/components/page-intro";
import { Container } from "@/src/components/ui/container";
import { aboutOriginNarrative } from "@/src/content";

export default function AboutPage() {
  return (
    <div className="pb-10 sm:pb-16">
      <PageIntro
        eyebrow={aboutOriginNarrative.question.eyebrow}
        title={aboutOriginNarrative.question.title}
      >
        <p className="text-xl font-medium text-zinc-950">
          {aboutOriginNarrative.question.prompt}
        </p>
        <p className="mt-4">{aboutOriginNarrative.question.lead}</p>
      </PageIntro>

      <Container>
        <div className="space-y-10">
          <section className="rounded-[2rem] border border-black/10 bg-white p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7a17]">
              {aboutOriginNarrative.search.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              {aboutOriginNarrative.search.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg">
              {aboutOriginNarrative.search.lead}
            </p>
            <div className="mt-6 rounded-[1.5rem] border border-black/10 bg-zinc-50 p-5">
              <p className="text-sm leading-7 text-zinc-700 sm:text-base">
                {aboutOriginNarrative.search.emotionalLayer}
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7a17]">
              {aboutOriginNarrative.discovery.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              {aboutOriginNarrative.discovery.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg">
              {aboutOriginNarrative.discovery.lead}
            </p>
            <div className="mt-8 space-y-5">
              {aboutOriginNarrative.discovery.chapters.map((chapter) => (
                <OriginChapter key={chapter.id} chapter={chapter} />
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-zinc-50 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7a17]">
              {aboutOriginNarrative.modelGap.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              {aboutOriginNarrative.modelGap.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg">
              {aboutOriginNarrative.modelGap.lead}
            </p>
            <ModelGapGrid items={aboutOriginNarrative.modelGap.models} />
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-zinc-950 p-6 text-white sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
              {aboutOriginNarrative.conclusion.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {aboutOriginNarrative.conclusion.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-200 sm:text-lg">
              {aboutOriginNarrative.conclusion.lead}
            </p>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7a17]">
              {aboutOriginNarrative.future.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              {aboutOriginNarrative.future.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg">
              {aboutOriginNarrative.future.lead}
            </p>
            <div className="mt-8">
              <Link
                href={aboutOriginNarrative.future.bridgeCta.href}
                className="inline-flex w-fit items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white"
              >
                {aboutOriginNarrative.future.bridgeCta.label}
              </Link>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
```

- [ ] **Step 2: Run the About tests and verify GREEN**

Run:

```bash
npm test -- __tests__/about-page.test.tsx __tests__/about-origin-content.test.ts
```

Expected:

- both tests pass

- [ ] **Step 3: Run the nearby regression suite**

Run:

```bash
npm test -- __tests__/about-page.test.tsx __tests__/about-origin-content.test.ts __tests__/page.test.tsx __tests__/homepage-validation.test.tsx __tests__/companies-page.test.tsx __tests__/media-page.test.tsx __tests__/content-contract.test.ts
```

Expected:

- all tests pass
- homepage and adjacent route contracts remain unchanged

- [ ] **Step 4: Commit the About route implementation**

```bash
git add app/about/page.tsx __tests__/about-page.test.tsx
git commit -m "feat: implement PB13.2 about origin story"
```

## Task 5: Run The PB13.2 Verification Baseline

**Files:**
- Verify only: `app/about/page.tsx`
- Verify only: `src/content/data/about.ts`
- Verify only: `src/content/types/about-origin.ts`
- Verify only: `src/components/about/origin-chapter.tsx`
- Verify only: `src/components/about/model-gap-grid.tsx`
- Verify only: `__tests__/about-page.test.tsx`
- Verify only: `__tests__/about-origin-content.test.ts`

- [ ] **Step 1: Run the complete PB13.2 verification commands**

Run:

```bash
npm test -- __tests__/about-page.test.tsx __tests__/about-origin-content.test.ts __tests__/page.test.tsx __tests__/homepage-validation.test.tsx __tests__/companies-page.test.tsx __tests__/media-page.test.tsx __tests__/content-contract.test.ts __tests__/seo-metadata.test.tsx
npx eslint app/about/page.tsx src/content/data/about.ts src/content/types/about-origin.ts src/components/about/origin-chapter.tsx src/components/about/model-gap-grid.tsx __tests__/about-page.test.tsx __tests__/about-origin-content.test.ts
npm run typecheck
npm run build
```

Expected:

- tests pass
- ESLint passes
- TypeScript passes
- build succeeds

- [ ] **Step 2: Capture the pre-closeout repo state**

Run:

```bash
git status --short
```

Expected:

- only intended PB13.2 files remain modified before closeout docs are written

## Task 6: Production Verification And Field Validation Readiness

**Files:**
- Verify only: live `https://www.garygiam.com/about`
- Verify only: live `https://www.garygiam.com/`
- Verify only: live `https://www.garygiam.com/companies`

- [ ] **Step 1: Push the approved PB13.2 implementation**

Run:

```bash
git push origin main
```

Expected:

- push succeeds

- [ ] **Step 2: Verify the live production About page**

Run:

```bash
curl -s https://www.garygiam.com/about | grep -o "Why GEH came into existence\|Why existing models were not enough\|See GEH in practice" | head -n 10
```

Expected:

- all three PB13.2 markers appear

- [ ] **Step 3: Verify no homepage or companies regression in production**

Run:

```bash
curl -s https://www.garygiam.com/ | grep -o "GEH HEADQUARTERS\|What the ventures prove about GEH" | head -n 10
curl -s https://www.garygiam.com/companies | grep -o "The ecosystem Gary Giam is building\|Deputy Chairman" | head -n 10
```

Expected:

- homepage still shows PB13.1 markers
- companies still shows `Deputy Chairman`

- [ ] **Step 4: Prepare Field Validation readiness note**

Record in the checkpoint summary that:

- technical verification passed
- production verification passed
- field validation is ready
- no later tranche may begin until the field review, harvest, and CEO approval are complete

## Task 7: Write The PB13.2 Knowledge Harvest

**Files:**
- Create: `docs/superpowers/pb13/2026-06-29-about-origin-knowledge-harvest.md`

- [ ] **Step 1: Write the Knowledge Harvest**

Create `docs/superpowers/pb13/2026-06-29-about-origin-knowledge-harvest.md`:

```md
# PB13.2 About Origin Knowledge Harvest

Date: 2026-06-29
Programme: PB13 — GEH Public Narrative Implementation
Tranche: 2 — About

## What Held

- `GEH` as protagonist: the page stayed focused on why `GEH` came into existence rather than drifting into founder-profile positioning.
- Question-led opening: beginning with the recurring problem created relevance before biography appeared.
- One chapter, one core lesson: short chapters maintained narrative momentum and prevented the page from becoming a dense milestone archive.
- Emotional persistence without dramatization: the restrained search layer made Gary's continued pursuit believable without turning the page into personal drama.
- Bridge into `Companies`: the ending created clear momentum into how `GEH` expresses itself in practice.

## What Strengthened

- Why `GEH` exists: the page made `GEH` feel like the necessary answer to a recurring organizational problem, not a personal brand invention.
- Why existing models were not enough: Section 3.5 differentiated prior models calmly and showed that they solved different problems rather than being incorrect.
- Why Gary kept searching: the emotional layer clarified that the repeated appearance of the same problem, not ambition for another venture, kept the search alive.

## What Remains Deferred

- deeper company-level system mapping reserved for `Companies`: PB13.2 points toward expression, but detailed venture-system mapping remains a later tranche responsibility.
- proof expansion reserved for `Media`: the About page explains the origin of `GEH`, but broader public proof still belongs to the authority tranche.
- GEH thinking-system expansion reserved for `Insights`: the page introduces the origin logic without turning into a full GEH theory surface.

## Reusable Learnings

- narrative patterns reusable across GaryGiam.com: question-led entry, one-lesson-per-chapter sequencing, and calm differentiation from adjacent models are reusable patterns for later GEH narrative surfaces.
- what remains About-local: the exact biography-to-thesis chain and the personal persistence layer remain specific to the origin-story function of the About page.

## Verification Notes

- Tests: passed.
- ESLint: passed.
- TypeScript: passed.
- Build: passed.
- Production Verification: passed.
- Field Validation readiness: confirmed after production matched the approved PB13.2 implementation.
```

- [ ] **Step 2: Commit the Knowledge Harvest**

```bash
git add docs/superpowers/pb13/2026-06-29-about-origin-knowledge-harvest.md
git commit -m "docs: capture PB13.2 about knowledge harvest"
```

## Task 8: Write The PB13.2 Promotion Review

**Files:**
- Create: `docs/superpowers/pb13/2026-06-29-about-origin-promotion-review.md`

- [ ] **Step 1: Write the Promotion Review**

Create `docs/superpowers/pb13/2026-06-29-about-origin-promotion-review.md`:

```md
# PB13.2 About Origin Promotion Review

Date: 2026-06-29
Programme: PB13 — GEH Public Narrative Implementation
Tranche: 2 — About

## Review Purpose

This review classifies what PB13.2 discovered without reopening Narrative Architecture v1 or PB13.1.

## Items

### Question-Led Origin Framing

- Classification: `Reusable across GaryGiam.com`
- Evidence: the page became category-relevant once it opened with the organizational question instead of founder biography.
- Reuse Decision: reuse question-led entry for future explanatory GEH pages where the category must feel necessary before it is described.

### Three-Question Chapter Rule

- Classification: `Future GEH pattern candidate`
- Evidence: requiring each chapter to answer what happened, what principle emerged, and why it was not enough created a clean chain of inevitability rather than disconnected milestones.
- Reuse Decision: preserve the rule for future GEH origin, case-study, or institutional-history pages and evaluate broader standardization later.

### Emotional Persistence Layer

- Classification: `Reusable across GaryGiam.com`
- Evidence: a restrained explanation of why Gary kept searching made the origin feel authentic without turning the page into emotional biography.
- Reuse Decision: reuse this pattern selectively wherever founder or operator persistence needs to support category credibility without becoming self-dramatizing.

### Existing-Models Gap Section

- Classification: `Future GEH pattern candidate`
- Evidence: calmly explaining why adjacent models solved different problems made `GEH` feel additive and necessary rather than adversarial.
- Reuse Decision: test this pattern again in future category-creation surfaces before promoting it beyond GaryGiam.com.

### Bridge-To-Next-Page Ending

- Classification: `Reusable across GaryGiam.com`
- Evidence: ending with a bridge into `Companies` made the site read as a continuous narrative rather than isolated route experiences.
- Reuse Decision: preserve bridge-to-next-page endings as a cross-route pattern where page sequence matters to GEH understanding.
```

- [ ] **Step 2: Commit the Promotion Review**

```bash
git add docs/superpowers/pb13/2026-06-29-about-origin-promotion-review.md
git commit -m "docs: add PB13.2 about promotion review"
```

## Task 9: Write The PB13.2 CEO Checkpoint Summary And Freeze

**Files:**
- Create: `docs/superpowers/pb13/2026-06-29-about-origin-ceo-checkpoint-summary.md`

- [ ] **Step 1: Write the CEO checkpoint summary**

Create `docs/superpowers/pb13/2026-06-29-about-origin-ceo-checkpoint-summary.md`:

```md
# PB13.2 About Origin CEO Checkpoint Summary

Date: 2026-06-29
Programme: PB13 — GEH Public Narrative Implementation
Tranche: 2 — About
Status: Pause for CEO review

## Completed

- About origin implementation completed
- Verification baseline executed
- Production Verification completed
- Field Validation readiness confirmed
- Knowledge Harvest completed
- Promotion Review completed

## Tranche Outcomes

- `GEH` remains protagonist: the page explains the birth of the system, not the importance of the founder.
- Gary's journey functions as evidence: each chapter shows what happened, what principle emerged, and why the lesson still led to the next one.
- existing models were differentiated without criticism: the page explains that prior models solved different problems and therefore did not eliminate the need for `GEH`.
- accumulated learning was turned into a public asset: the ending positions `GEH` as a way for future organizations to benefit from lessons that would otherwise remain trapped in one founder's experience.
- bridge into `Companies` established: the page ends by moving visitors naturally into how `GEH` expresses itself in practice.

## Verification Summary

- Tests: passed.
- ESLint: passed.
- TypeScript: passed.
- Build: passed.
- Production Verification: passed.

## Freeze Rule

Implementation pauses here.

No later PB13 tranche may begin until field validation, harvest, CEO approval, and freeze requirements are satisfied.
```

- [ ] **Step 2: Commit the CEO checkpoint summary**

```bash
git add docs/superpowers/pb13/2026-06-29-about-origin-ceo-checkpoint-summary.md
git commit -m "docs: add PB13.2 about checkpoint summary"
```

- [ ] **Step 3: Confirm the tranche freeze state**

Run:

```bash
git status --short
```

Expected:

- PB13.2 is complete except for the already-approved temporary `.superpowers/` directory
- no later tranche work has started
- implementation stops here pending CEO approval

## Self-Review

- Spec coverage:
  - problem-question opening: Tasks 1, 2, and 4
  - `GEH` as protagonist: Tasks 1, 2, and 4
  - three-question chapter rule: Tasks 1, 2, and 4
  - Section 3.5 existing-models layer: Tasks 1, 2, and 4
  - emotional persistence layer: Tasks 1, 2, and 4
  - short chapters / one core lesson: Task 2 data model and Task 4 rendering
  - bridge into `Companies`: Tasks 1, 2, and 4
  - verification, production verification, and freeze: Tasks 5 through 9
- Placeholder scan:
  - all code-bearing steps include explicit code
  - all verification steps include exact commands and expected outcomes
  - no `TBD`, `TODO`, or deferred implementation placeholders remain inside the plan
- Type consistency:
  - `aboutOriginNarrative` is defined in Task 2 and consumed in Task 4
  - `AboutOriginChapter` and `AboutModelGapItem` are defined before component usage
  - bridge CTA fields match the route implementation and tests
