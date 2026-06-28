# Ecosystem Positioning Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition `GaryGiam.com` from a founder-with-multiple-companies presentation into a mission-led ecosystem website across Home and Companies while preserving the approved North Star.

**Architecture:** Keep the current routes and SEO structure intact while expanding the existing `ventures` content model so it can represent ventures, institutions, ecosystem parents, and child pillars. Add one small ecosystem helper module and one reusable ecosystem card component so Home and Companies can present the same mission-led data without duplicating grouping logic.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS, Vitest, Testing Library

---

## File Structure

- Modify: `src/content/types/ventures.ts`
- Modify: `src/content/data/portfolio.ts`
- Create: `src/lib/ecosystem.ts`
- Create: `src/components/ecosystem/entity-card.tsx`
- Modify: `app/page.tsx`
- Modify: `app/companies/page.tsx`
- Modify: `__tests__/content-contract.test.ts`
- Modify: `__tests__/page.test.tsx`
- Modify: `__tests__/companies-page.test.tsx`
- Create: `__tests__/ecosystem-helpers.test.ts`

## Task 1: Expand The Content Model For Mission-Led Ecosystem Entities

**Files:**
- Modify: `src/content/types/ventures.ts`
- Modify: `src/content/data/portfolio.ts`
- Test: `__tests__/content-contract.test.ts`

- [ ] **Step 1: Write the failing content-contract test**

Update `__tests__/content-contract.test.ts` by replacing the existing venture assertions with:

```ts
    expect(content.ventures).toHaveLength(12);
    expect(content.ventures.map((venture) => venture.name)).toEqual([
      "Belleco Skin Beaute",
      "Celestial Yuan",
      "Inkco",
      "Food Ink",
      "Beauty Ink",
      "Drive Ink",
      "Stay Ink",
      "Travel Ink",
      "Isaac G Consultancy",
      "Yayasan TXJ Malaysia",
      "HMIOSS",
      "G-Space",
    ]);

    expect(content.ventures.find((venture) => venture.name === "Inkco")).toMatchObject({
      kind: "ecosystem",
      ecosystemLayer: "Decision Platforms",
      impactPillar: "Better Everyday Decisions",
      status: "Building",
    });

    expect(content.ventures.find((venture) => venture.name === "Food Ink")).toMatchObject({
      parentId: "inkco",
      kind: "pillar",
      ecosystemLayer: "Decision Platforms",
      impactPillar: "Better Everyday Decisions",
    });

    expect(content.ventures.find((venture) => venture.name === "HMIOSS")).toMatchObject({
      kind: "institution",
      ecosystemLayer: "Leadership Development",
      impactPillar: "Future Leaders",
      summary: "Strategic leadership and education institution.",
      vision: expect.stringContaining("Deputy President"),
      status: "Strategic Initiative",
    });

    expect(content.ventures.find((venture) => venture.name === "G-Space")).toMatchObject({
      ecosystemLayer: "Future Innovation",
      impactPillar: "Future Innovation",
      status: "Future Initiative",
    });
```

- [ ] **Step 2: Run the focused test to verify it fails**

Run:

```bash
npm test -- __tests__/content-contract.test.ts
```

Expected: FAIL because the current venture array only contains six entities and the new fields do not exist yet.

- [ ] **Step 3: Add the new venture fields and replace the venture dataset**

Update `src/content/types/ventures.ts`:

```ts
export type Venture = {
  id: string;
  slug: string;
  name: string;
  summary: string;
  status: string;
  kind: "venture" | "institution" | "ecosystem" | "initiative" | "pillar";
  ecosystemLayer:
    | "Personal Wellbeing"
    | "Decision Platforms"
    | "Business Growth"
    | "Community Impact"
    | "Leadership Development"
    | "Future Innovation";
  impactPillar:
    | "Better Health & Confidence"
    | "Better Direction & Wellbeing"
    | "Better Everyday Decisions"
    | "Better Businesses"
    | "Stronger Communities"
    | "Future Leaders"
    | "Future Innovation";
  parentId?: string;
  category?: string;
  vision?: string;
  websiteUrl?: string;
};
```

Replace the `ventures` array in `src/content/data/portfolio.ts` with:

```ts
  ventures: [
    {
      id: "belleco-skin-beaute",
      slug: "belleco-skin-beaute",
      name: "Belleco Skin Beaute",
      summary: "Helping people look better, feel more confident and age gracefully.",
      status: "Active",
      kind: "venture",
      ecosystemLayer: "Personal Wellbeing",
      impactPillar: "Better Health & Confidence",
      category: "Wellness",
      vision:
        "Deliver high-trust wellbeing experiences that improve confidence, self-image, and long-term personal care.",
    },
    {
      id: "celestial-yuan",
      slug: "celestial-yuan",
      name: "Celestial Yuan",
      summary: "Helping individuals create greater clarity, confidence and life direction.",
      status: "Active",
      kind: "venture",
      ecosystemLayer: "Personal Wellbeing",
      impactPillar: "Better Direction & Wellbeing",
      category: "Metaphysics",
      vision:
        "Help people navigate life with greater clarity, confidence, and practical direction through modernized guidance.",
    },
    {
      id: "inkco",
      slug: "inkco",
      name: "Inkco",
      summary: "Parent ecosystem for decision platforms that help people navigate everyday life choices.",
      status: "Building",
      kind: "ecosystem",
      ecosystemLayer: "Decision Platforms",
      impactPillar: "Better Everyday Decisions",
      category: "Technology",
      vision:
        "Build an interconnected ecosystem of platforms that help people make better everyday decisions across food, beauty, mobility, living, and travel.",
    },
    {
      id: "food-ink",
      slug: "food-ink",
      name: "Food Ink",
      summary: "Helping people make better food decisions.",
      status: "Rebuilding",
      kind: "pillar",
      parentId: "inkco",
      ecosystemLayer: "Decision Platforms",
      impactPillar: "Better Everyday Decisions",
      category: "Food",
      vision: "Guide people toward better food choices through trusted discovery and recommendation experiences.",
    },
    {
      id: "beauty-ink",
      slug: "beauty-ink",
      name: "Beauty Ink",
      summary: "Helping people make better beauty decisions.",
      status: "Building",
      kind: "pillar",
      parentId: "inkco",
      ecosystemLayer: "Decision Platforms",
      impactPillar: "Better Everyday Decisions",
      category: "Beauty",
      vision: "Support better beauty and personal care decisions through curated insight and practical guidance.",
    },
    {
      id: "drive-ink",
      slug: "drive-ink",
      name: "Drive Ink",
      summary: "Helping people make better mobility decisions.",
      status: "Building",
      kind: "pillar",
      parentId: "inkco",
      ecosystemLayer: "Decision Platforms",
      impactPillar: "Better Everyday Decisions",
      category: "Mobility",
      vision: "Improve everyday mobility decisions with clearer options, guidance, and decision support.",
    },
    {
      id: "stay-ink",
      slug: "stay-ink",
      name: "Stay Ink",
      summary: "Helping people make better living decisions.",
      status: "Coming Soon",
      kind: "pillar",
      parentId: "inkco",
      ecosystemLayer: "Decision Platforms",
      impactPillar: "Better Everyday Decisions",
      category: "Living",
      vision: "Make living and stay-related choices easier through trusted recommendations and practical tools.",
    },
    {
      id: "travel-ink",
      slug: "travel-ink",
      name: "Travel Ink",
      summary: "Helping people make better travel decisions.",
      status: "Coming Soon",
      kind: "pillar",
      parentId: "inkco",
      ecosystemLayer: "Decision Platforms",
      impactPillar: "Better Everyday Decisions",
      category: "Travel",
      vision: "Help people travel with better decisions, clearer options, and more confidence.",
    },
    {
      id: "isaac-g-consultancy",
      slug: "isaac-g-consultancy",
      name: "Isaac G Consultancy",
      summary: "Helping businesses grow through branding, technology, AI and strategic execution.",
      status: "Active",
      kind: "venture",
      ecosystemLayer: "Business Growth",
      impactPillar: "Better Businesses",
      category: "Consulting",
      vision:
        "Help businesses grow through stronger positioning, better systems, and sharper strategic execution.",
    },
    {
      id: "yayasan-txj-malaysia",
      slug: "yayasan-txj-malaysia",
      name: "Yayasan TXJ Malaysia",
      summary: "Supporting communities through charitable initiatives and social impact programmes.",
      status: "Active",
      kind: "initiative",
      ecosystemLayer: "Community Impact",
      impactPillar: "Stronger Communities",
      category: "Philanthropy",
      vision:
        "Develop stronger communities through structured charitable work, support systems, and sustained social impact.",
    },
    {
      id: "hmioss",
      slug: "hmioss",
      name: "HMIOSS",
      summary: "Strategic leadership and education institution.",
      status: "Strategic Initiative",
      kind: "institution",
      ecosystemLayer: "Leadership Development",
      impactPillar: "Future Leaders",
      category: "Education",
      vision:
        "Develop future leaders through education, strategic thinking, research, and community engagement, with Gary Giam serving as Deputy President.",
    },
    {
      id: "g-space",
      slug: "g-space",
      name: "G-Space",
      summary: "Promoting innovation, future technologies, STEM and space-related initiatives.",
      status: "Future Initiative",
      kind: "initiative",
      ecosystemLayer: "Future Innovation",
      impactPillar: "Future Innovation",
      category: "Space & Future Industries",
      vision:
        "Promote future capability through innovation, frontier thinking, STEM, and space-related initiatives.",
    },
  ],
```

- [ ] **Step 4: Run the content-contract test to verify it passes**

Run:

```bash
npm test -- __tests__/content-contract.test.ts
```

Expected: PASS with the expanded ecosystem entity model.

- [ ] **Step 5: Commit the content-model expansion**

```bash
git add src/content/types/ventures.ts src/content/data/portfolio.ts __tests__/content-contract.test.ts
git commit -m "feat: expand ecosystem content entities"
```

## Task 2: Add Shared Ecosystem Grouping Logic And Reusable Card Rendering

**Files:**
- Create: `src/lib/ecosystem.ts`
- Create: `src/components/ecosystem/entity-card.tsx`
- Test: `__tests__/ecosystem-helpers.test.ts`

- [ ] **Step 1: Write the failing ecosystem helper test**

Create `__tests__/ecosystem-helpers.test.ts`:

```ts
import { describe, expect, test } from "vitest";

import { content } from "@/src/content";
import {
  getEcosystemChildren,
  getEcosystemLayers,
  getTopLevelEcosystemEntities,
} from "@/src/lib/ecosystem";

describe("ecosystem helpers", () => {
  test("returns top-level entities without child pillars", () => {
    const entities = getTopLevelEcosystemEntities(content.ventures);

    expect(entities.map((entity) => entity.name)).toEqual([
      "Belleco Skin Beaute",
      "Celestial Yuan",
      "Inkco",
      "Isaac G Consultancy",
      "Yayasan TXJ Malaysia",
      "HMIOSS",
      "G-Space",
    ]);
  });

  test("returns Inkco child pillars in content order", () => {
    const inkco = content.ventures.find((venture) => venture.id === "inkco");

    expect(inkco).toBeDefined();
    expect(getEcosystemChildren(content.ventures, "inkco").map((entity) => entity.name)).toEqual([
      "Food Ink",
      "Beauty Ink",
      "Drive Ink",
      "Stay Ink",
      "Travel Ink",
    ]);
  });

  test("groups top-level entities by ecosystem layer", () => {
    const layers = getEcosystemLayers(content.ventures);

    expect(layers.map((layer) => layer.title)).toEqual([
      "Personal Wellbeing",
      "Decision Platforms",
      "Business Growth",
      "Community Impact",
      "Leadership Development",
      "Future Innovation",
    ]);
  });
});
```

- [ ] **Step 2: Run the helper test to verify it fails**

Run:

```bash
npm test -- __tests__/ecosystem-helpers.test.ts
```

Expected: FAIL because `src/lib/ecosystem.ts` does not exist yet.

- [ ] **Step 3: Implement the helper module and reusable card**

Create `src/lib/ecosystem.ts`:

```ts
import type { Venture } from "@/src/content";

const LAYER_ORDER: Venture["ecosystemLayer"][] = [
  "Personal Wellbeing",
  "Decision Platforms",
  "Business Growth",
  "Community Impact",
  "Leadership Development",
  "Future Innovation",
];

export function getTopLevelEcosystemEntities(ventures: Venture[]) {
  return ventures.filter((venture) => !venture.parentId);
}

export function getEcosystemChildren(ventures: Venture[], parentId: string) {
  return ventures.filter((venture) => venture.parentId === parentId);
}

export function getEcosystemLayers(ventures: Venture[]) {
  const topLevel = getTopLevelEcosystemEntities(ventures);

  return LAYER_ORDER.map((title) => ({
    title,
    entities: topLevel.filter((venture) => venture.ecosystemLayer === title),
  })).filter((layer) => layer.entities.length > 0);
}
```

Create `src/components/ecosystem/entity-card.tsx`:

```tsx
import Link from "next/link";

import type { Venture } from "@/src/content";

type EcosystemEntityCardProps = {
  entity: Venture;
  childrenEntities?: Venture[];
};

export function EcosystemEntityCard({
  entity,
  childrenEntities = [],
}: EcosystemEntityCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-black/10 bg-white p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a7a17]">
            {entity.impactPillar}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
            {entity.name}
          </h3>
        </div>
        <span className="rounded-full border border-black/10 bg-zinc-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-500">
          {entity.status}
        </span>
      </div>

      <p className="mt-4 text-sm leading-7 text-zinc-600 sm:text-base">
        {entity.summary}
      </p>
      <p className="mt-4 text-sm leading-7 text-zinc-700 sm:text-base">
        {entity.vision}
      </p>

      {childrenEntities.length > 0 ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {childrenEntities.map((child) => (
            <span
              key={child.id}
              className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-zinc-700"
            >
              {child.name}
            </span>
          ))}
        </div>
      ) : null}

      {entity.websiteUrl ? (
        <Link
          href={entity.websiteUrl}
          className="mt-6 inline-flex w-fit items-center justify-center rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-zinc-950"
        >
          Visit Website
        </Link>
      ) : null}
    </article>
  );
}
```

- [ ] **Step 4: Run the helper test to verify it passes**

Run:

```bash
npm test -- __tests__/ecosystem-helpers.test.ts
```

Expected: PASS with the ecosystem grouping rules locked.

- [ ] **Step 5: Commit the ecosystem helper layer**

```bash
git add src/lib/ecosystem.ts src/components/ecosystem/entity-card.tsx __tests__/ecosystem-helpers.test.ts
git commit -m "feat: add ecosystem grouping helpers"
```

## Task 3: Rebuild The Homepage Story As Founder → Ecosystem → Meaning → Proof

**Files:**
- Modify: `app/page.tsx`
- Test: `__tests__/page.test.tsx`

- [ ] **Step 1: Write the failing homepage test**

Update `__tests__/page.test.tsx` with the new homepage assertions:

```tsx
  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "Building Across Industries. Driven By One Mission.",
    })
  ).toBeDefined();
  expect(
    screen.getByText(
      "Gary Giam is building an ecosystem of businesses, institutions and initiatives that help people make better decisions, improve their lives and create opportunities for future generations."
    )
  ).toBeDefined();
  expect(screen.getByText("Better Everyday Decisions")).toBeDefined();
  expect(screen.getByText("Inkco")).toBeDefined();
  expect(screen.getByText("Food Ink")).toBeDefined();
  expect(screen.getByText("HMIOSS")).toBeDefined();
  expect(screen.getByText("Future Innovation")).toBeDefined();
  expect(screen.getByRole("heading", { level: 2, name: "Why I Build" })).toBeDefined();
  expect(
    screen.getByText(
      "The goal was never simply to build companies."
    )
  ).toBeDefined();
  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "Recognition & Impact",
    })
  ).toBeDefined();
```

- [ ] **Step 2: Run the homepage test to verify it fails**

Run:

```bash
npm test -- __tests__/page.test.tsx
```

Expected: FAIL because the current homepage still uses the old ecosystem and proof presentation.

- [ ] **Step 3: Rewrite the homepage ecosystem, meaning, and proof sections**

In `app/page.tsx`, add the ecosystem helpers:

```tsx
import { EcosystemEntityCard } from "@/src/components/ecosystem/entity-card";
import {
  getEcosystemChildren,
  getTopLevelEcosystemEntities,
} from "@/src/lib/ecosystem";
```

Add helper data near the constants:

```tsx
const topLevelEcosystemEntities = getTopLevelEcosystemEntities(content.ventures);
const ecosystemCards = topLevelEcosystemEntities.map((entity) => ({
  entity,
  children: getEcosystemChildren(content.ventures, entity.id),
}));
```

Replace the current homepage ecosystem section with:

```tsx
        <section className="mt-14">
          <SectionHeading
            eyebrow="Ecosystem"
            title="Building Across Industries. Driven By One Mission."
            description={
              <p>
                Each entity serves a different role, but all contribute toward a
                shared mission of creating meaningful and sustainable impact.
              </p>
            }
          />

          <div className="mt-8 flex justify-center">
            <div className="max-w-4xl rounded-[1.75rem] border border-[#d4af37]/40 bg-zinc-950 px-6 py-7 text-center text-white sm:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d4af37]">
                Shared Mission
              </p>
              <p className="mt-4 text-base leading-8 text-zinc-100 sm:text-lg">
                Gary Giam is building an ecosystem of businesses, institutions and
                initiatives that help people make better decisions, improve their
                lives and create opportunities for future generations.
              </p>
            </div>
          </div>

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
```

Insert a separate `Why I Build` section immediately after it:

```tsx
        <section className="mt-14 rounded-[1.75rem] border border-black/10 bg-zinc-50 px-6 py-10 sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a7a17]">
            Why I Build
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            A mission behind the ecosystem
          </h2>
          <div className="mt-6 max-w-4xl space-y-5 text-base leading-8 text-zinc-700 sm:text-lg">
            <p>The goal was never simply to build companies.</p>
            <p>
              The goal is to build platforms, businesses, institutions and
              communities that help people make better decisions, improve their
              lives and create opportunities for future generations.
            </p>
            <p>
              Each entity serves a different role, but all contribute toward a
              shared mission of creating meaningful and sustainable impact.
            </p>
          </div>
        </section>
```

Rename the current proof section heading:

```tsx
        <section className="mt-14">
          <SectionHeading eyebrow="Proof" title="Recognition & Impact" />
```

- [ ] **Step 4: Run the homepage test to verify it passes**

Run:

```bash
npm test -- __tests__/page.test.tsx
```

Expected: PASS with the new homepage story order and ecosystem narrative.

- [ ] **Step 5: Commit the homepage execution**

```bash
git add app/page.tsx __tests__/page.test.tsx
git commit -m "feat: reposition homepage around ecosystem mission"
```

## Task 4: Turn The Companies Page Into A Companies / Ecosystem Index

**Files:**
- Modify: `app/companies/page.tsx`
- Modify: `__tests__/companies-page.test.tsx`

- [ ] **Step 1: Write the failing companies-page test**

Replace `__tests__/companies-page.test.tsx` with:

```tsx
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import CompaniesPage from "@/app/companies/page";

test("renders the ecosystem index grouped by strategic layer", () => {
  render(<CompaniesPage />);

  expect(
    screen.getByRole("heading", { level: 1, name: "The ecosystem Gary Giam is building" })
  ).toBeDefined();
  expect(screen.getByText("Personal Wellbeing")).toBeDefined();
  expect(screen.getByText("Decision Platforms")).toBeDefined();
  expect(screen.getByText("Business Growth")).toBeDefined();
  expect(screen.getByText("Community Impact")).toBeDefined();
  expect(screen.getByText("Leadership Development")).toBeDefined();
  expect(screen.getByText("Future Innovation")).toBeDefined();
  expect(screen.getByText("Inkco")).toBeDefined();
  expect(screen.getByText("Food Ink")).toBeDefined();
  expect(screen.getByText("Travel Ink")).toBeDefined();
  expect(screen.getByText("HMIOSS")).toBeDefined();
  expect(screen.getAllByText("Strategic Initiative").length).toBeGreaterThan(0);
  expect(screen.getAllByText("Future Initiative").length).toBeGreaterThan(0);
});
```

- [ ] **Step 2: Run the companies-page test to verify it fails**

Run:

```bash
npm test -- __tests__/companies-page.test.tsx
```

Expected: FAIL because the current page still renders a founder portfolio view with no strategic layers.

- [ ] **Step 3: Rebuild the Companies page around the ecosystem architecture**

Update `app/companies/page.tsx`:

```tsx
import { PageIntro } from "@/src/components/page-intro";
import { EcosystemEntityCard } from "@/src/components/ecosystem/entity-card";
import { Container } from "@/src/components/ui/container";
import { content } from "@/src/content";
import { getEcosystemChildren, getEcosystemLayers } from "@/src/lib/ecosystem";
```

Replace the page component body with:

```tsx
export default function CompaniesPage() {
  const ecosystemLayers = getEcosystemLayers(content.ventures);

  return (
    <div className="pb-10 sm:pb-16">
      <PageIntro eyebrow="Ecosystem" title="The ecosystem Gary Giam is building">
        <p>
          A mission-led ecosystem of businesses, institutions and initiatives
          designed to improve quality of life, create opportunities, and generate
          long-term impact.
        </p>
      </PageIntro>

      <Container>
        <section className="space-y-10">
          {ecosystemLayers.map((layer) => (
            <section key={layer.title}>
              <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a7a17]">
                  Strategic Layer
                </p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950">
                  {layer.title}
                </h2>
              </div>

              <div className="grid gap-5 lg:grid-cols-2">
                {layer.entities.map((entity) => (
                  <EcosystemEntityCard
                    key={entity.id}
                    entity={entity}
                    childrenEntities={getEcosystemChildren(content.ventures, entity.id)}
                  />
                ))}
              </div>
            </section>
          ))}
        </section>
      </Container>
    </div>
  );
}
```

- [ ] **Step 4: Run the companies-page test to verify it passes**

Run:

```bash
npm test -- __tests__/companies-page.test.tsx
```

Expected: PASS with the new Companies / Ecosystem grouping and child-pillars visible.

- [ ] **Step 5: Commit the Companies page update**

```bash
git add app/companies/page.tsx __tests__/companies-page.test.tsx
git commit -m "feat: reframe companies page as ecosystem index"
```

## Task 5: Run End-To-End Verification For The Approved Positioning Update

**Files:**
- Verify only: `app/page.tsx`
- Verify only: `app/companies/page.tsx`
- Verify only: `src/content/data/portfolio.ts`
- Verify only: `src/lib/ecosystem.ts`
- Verify only: `src/components/ecosystem/entity-card.tsx`

- [ ] **Step 1: Run the focused ecosystem suite**

Run:

```bash
npm test -- __tests__/content-contract.test.ts __tests__/ecosystem-helpers.test.ts __tests__/page.test.tsx __tests__/companies-page.test.tsx
```

Expected: PASS with the content model, helper layer, homepage, and companies page all green.

- [ ] **Step 2: Run typecheck and targeted lint**

Run:

```bash
npm run typecheck
npx eslint app/page.tsx app/companies/page.tsx src/content/types/ventures.ts src/content/data/portfolio.ts src/lib/ecosystem.ts src/components/ecosystem/entity-card.tsx __tests__/content-contract.test.ts __tests__/ecosystem-helpers.test.ts __tests__/page.test.tsx __tests__/companies-page.test.tsx
```

Expected:

- `tsc --noEmit` passes
- targeted ESLint passes

- [ ] **Step 3: Run the production build**

Run:

```bash
npm run build
```

Expected: PASS with the current route structure unchanged and the updated mission-led presentation compiled successfully.

- [ ] **Step 4: Commit the final verification pass**

Run:

```bash
git status --short
```

If verification introduced no new code changes, expect only the clean worktree. If there are intended cleanup edits, commit them with:

```bash
git add -A
git commit -m "chore: finalize ecosystem positioning rollout"
```

- [ ] **Step 5: Push and confirm live rollout**

Run:

```bash
git push origin main
```

Expected: push succeeds and Vercel deploys the updated homepage and Companies / Ecosystem experience from `main`.

## Self-Review

- Spec coverage:
  - North Star and mission-led framing: Task 3
  - ecosystem entity expansion and statuses: Task 1
  - hybrid mission-led ecosystem section: Task 3
  - separate `Why I Build` section: Task 3
  - `Recognition & Impact` proof framing: Task 3
  - Companies / Ecosystem presentation: Task 4
  - ecosystem integrity and future-ready structure: Task 1 + Task 2
- Placeholder scan:
  - every task includes exact files, commands, and code snippets
  - no placeholder implementation steps remain
- Type consistency:
  - `Venture` fields used throughout are `kind`, `ecosystemLayer`, `impactPillar`, `parentId`, and `status`
  - helper names are consistent across test, implementation, and page usage
