# PB13.1 Homepage Evidence Refinement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refine the homepage so visitors recognize an already-felt organizational reality, understand why current approaches fail, and experience `GEH` as the inevitable solution supported by organizational-strengthening proof.

**Architecture:** Keep the existing homepage route, section order, and emotional progression intact. Refine the structured homepage narrative, add a homepage-only authority proof projection, and update the proof layer so ventures and public evidence show organizational strengthening without changing frozen routes like `Media`, `About`, `Insights`, or `Impact`.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, Vitest, Testing Library, ESLint

---

## File Structure

- Modify: `docs/superpowers/specs/2026-06-28-pb13-1-homepage-evidence-refinement-design.md`
  - Add the approved `Inevitability Rule` before implementation begins.
- Modify: `__tests__/page.test.tsx`
  - Replace the homepage contract assertions with PB13.1 necessity and system-proof expectations.
- Modify: `__tests__/homepage-validation.test.tsx`
  - Tighten the acceptance checklist around inevitability, organizational strengthening, and action clarity.
- Modify: `__tests__/content-contract.test.ts`
  - Lock the `HMIOSS` title correction to `Deputy Chairman`.
- Create: `__tests__/homepage-proof-runtime.test.ts`
  - Lock the homepage-only proof projection to verified authority evidence.
- Create: `src/content/authority/homepage.ts`
  - Project verified transformation evidence from the authority vault for homepage-only use.
- Modify: `src/content/authority/index.ts`
  - Re-export the homepage proof helper.
- Modify: `src/content/index.ts`
  - Re-export the homepage proof helper for existing `@/src/content` imports.
- Modify: `src/content/data/homepage.ts`
  - Refine the narrative content with observable reality, failure-of-current-approaches, inevitability, and system-led proof statements.
- Modify: `src/content/data/portfolio.ts`
  - Correct `HMIOSS` to `Deputy Chairman`.
- Modify: `src/components/ecosystem/entity-card.tsx`
  - Add optional homepage-only proof text support without changing default behavior for other routes.
- Modify: `app/page.tsx`
  - Render the refined necessity bridge, venture proof statements, and transformation-proof signals.
- Create: `docs/superpowers/pb13/2026-06-28-homepage-evidence-refinement-knowledge-harvest.md`
  - Capture what held and what refined the category more effectively.
- Create: `docs/superpowers/pb13/2026-06-28-homepage-evidence-refinement-promotion-review.md`
  - Classify reusable findings from PB13.1.
- Create: `docs/superpowers/pb13/2026-06-28-homepage-evidence-refinement-ceo-checkpoint-summary.md`
  - Freeze the refinement tranche after verification.

## Task 1: Add The Inevitability Rule To The Approved Spec

**Files:**
- Modify: `docs/superpowers/specs/2026-06-28-pb13-1-homepage-evidence-refinement-design.md`

- [ ] **Step 1: Add the approved constitutional rule to the written spec**

Insert this block immediately after the section that lists the four-step necessity sequence:

```md
## Inevitability Rule

The homepage should not ask visitors to believe `GEH`.

It should help visitors recognize a recurring organizational reality so that `GEH` becomes the inevitable conclusion rather than the homepage's opinion.

Every refinement should therefore:

- reduce explanation
- increase recognition

The category succeeds when visitors feel they have discovered why `GEH` is necessary rather than being told it is important.
```

- [ ] **Step 2: Review the spec diff to confirm no other content changed**

Run:

```bash
git diff -- docs/superpowers/specs/2026-06-28-pb13-1-homepage-evidence-refinement-design.md
```

Expected:

- only the `Inevitability Rule` block appears in the diff

- [ ] **Step 3: Commit the final spec amendment**

```bash
git add docs/superpowers/specs/2026-06-28-pb13-1-homepage-evidence-refinement-design.md
git commit -m "docs: add PB13.1 inevitability rule"
```

## Task 2: Lock The PB13.1 Refinement Contract In Tests

**Files:**
- Modify: `__tests__/page.test.tsx`
- Modify: `__tests__/homepage-validation.test.tsx`
- Modify: `__tests__/content-contract.test.ts`
- Create: `__tests__/homepage-proof-runtime.test.ts`

- [ ] **Step 1: Replace the homepage contract test with PB13.1 inevitability assertions**

Update `__tests__/page.test.tsx` to:

```tsx
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import Page from "@/app/page";

test("renders the PB13.1 homepage so GEH feels like the logical conclusion", () => {
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
      "Organizations often gain momentum faster than they gain strength. Growth creates complexity, dependence, and fragility faster than most systems are built to absorb it."
    )
  ).toBeDefined();
  expect(
    screen.getByText(
      "Most company-building approaches optimize for launch, growth, or visibility. Far fewer are designed to make the organization itself stronger each time it solves a meaningful problem."
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
      "If the real problem is organizational fragility, another founder profile, company list, or consulting label is not enough. A new category is required."
    )
  ).toBeDefined();
  expect(
    screen.getByText(
      "GEH is that category: a repeatable system designed to help organizations become stronger, more coherent, and more capable every time they solve a meaningful problem."
    )
  ).toBeDefined();

  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "How GEH works differently",
    })
  ).toBeDefined();

  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "What the ventures prove about GEH",
    })
  ).toBeDefined();
  expect(
    screen.getByText(
      "The ventures matter because each one tests whether a stronger operating system can create stronger capability, clearer decisions, and more durable outcomes in a different context."
    )
  ).toBeDefined();
  expect(
    screen.getByText(
      "Proves that stronger positioning and sharper systems improve business capability, not just campaign output."
    )
  ).toBeDefined();
  expect(
    screen.getByText(
      "Proves that leadership development becomes stronger when education, strategy, and community are organized institutionally."
    )
  ).toBeDefined();

  expect(
    screen.getByText(
      "Food Ink Malaysia turned early platform traction into recognized community capability"
    )
  ).toBeDefined();
  expect(
    screen.getByText(
      "Barn Farmer converted restaurant disruption into community-support delivery under MCO"
    )
  ).toBeDefined();

  expect(
    screen.getByRole("link", { name: "Partner with GEH" }).getAttribute("href")
  ).toBe("/contact");
}
```

- [ ] **Step 2: Tighten the acceptance checklist test around inevitability and proof**

Update `__tests__/homepage-validation.test.tsx` to:

```tsx
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import Page from "@/app/page";

test("passes the PB13.1 homepage inevitability and proof checklist", () => {
  render(<Page />);

  expect(
    screen.getByText(
      "Organizations often gain momentum faster than they gain strength. Growth creates complexity, dependence, and fragility faster than most systems are built to absorb it."
    )
  ).toBeDefined();
  expect(
    screen.getByText(
      "Most company-building approaches optimize for launch, growth, or visibility. Far fewer are designed to make the organization itself stronger each time it solves a meaningful problem."
    )
  ).toBeDefined();
  expect(
    screen.getByText(
      "If the real problem is organizational fragility, another founder profile, company list, or consulting label is not enough. A new category is required."
    )
  ).toBeDefined();

  expect(
    screen.getByText("GEH is an entrepreneurial operating system.")
  ).toBeDefined();
  expect(
    screen.getByText("What the ventures prove about GEH")
  ).toBeDefined();
  expect(
    screen.getByText(
      "Proves that community impact grows stronger when initiatives are organized through sustained support systems."
    )
  ).toBeDefined();
  expect(
    screen.getByText(
      "Shows that organizational responsiveness can be strengthened fast enough to serve people under real constraints."
    )
  ).toBeDefined();

  expect(screen.getByText("Why GEH matters now")).toBeDefined();
  expect(screen.getByRole("link", { name: "Partner with GEH" })).toBeDefined();

  expect(
    screen.queryByText("Building Across Industries. Driven By One Mission.")
  ).toBeNull();
});
```

- [ ] **Step 3: Lock the HMIOSS appointment correction in the content contract**

Update the `HMIOSS` assertion in `__tests__/content-contract.test.ts` to:

```ts
expect(content.ventures.find((venture) => venture.name === "HMIOSS")).toMatchObject({
  kind: "institution",
  ecosystemLayer: "Leadership Development",
  impactPillar: "Future Leaders",
  summary: "Strategic leadership and education institution.",
  vision: expect.stringContaining("Deputy Chairman"),
  status: "Strategic Initiative",
});
```

- [ ] **Step 4: Add a focused runtime test for homepage proof projection**

Create `__tests__/homepage-proof-runtime.test.ts`:

```ts
import { expect, test } from "vitest";

import { getHomepageProofSignals } from "@/src/content/authority";

test("builds the PB13.1 homepage proof signals from verified transformation evidence", () => {
  expect(getHomepageProofSignals()).toEqual([
    {
      id: "food-ink-malaysia-launch-2014",
      title: "Food Ink Malaysia turned early platform traction into recognized community capability",
      organizationStrengthening:
        "Shows that stronger platform logic can turn audience growth into durable market capability.",
      sourceLabel: "Exabytes Malaysia",
      sourceUrl: "https://www.exabytes.my/blog/malaysia-website-awards-2016/",
    },
    {
      id: "barn-farmer-mco-initiative",
      title: "Barn Farmer converted restaurant disruption into community-support delivery under MCO",
      organizationStrengthening:
        "Shows that organizational responsiveness can be strengthened fast enough to serve people under real constraints.",
      sourceLabel: "The Star",
      sourceUrl:
        "https://www.thestar.com.my/news/nation/2020/04/07/restaurateurs-branch-into-produce-delivery",
    },
    {
      id: "ratatouille-gourmet-restaurant-brand-of-the-year",
      title: "Ratatouille Gourmet scaled from a small operation into a multi-outlet F&B group",
      organizationStrengthening:
        "Shows that stronger commercial systems can compound into broader operating scale and verified recognition.",
      sourceLabel: "TCL Magazine",
      sourceUrl: "https://www.tclmagazine.com/ipba2020-brand-ratatouille-gourmet-2/",
    },
  ]);
});
```

- [ ] **Step 5: Run the focused refinement tests to verify they fail**

Run:

```bash
npm test -- __tests__/page.test.tsx __tests__/homepage-validation.test.tsx __tests__/content-contract.test.ts __tests__/homepage-proof-runtime.test.ts
```

Expected:

- all or most tests fail
- failures point to missing PB13.1 copy, missing homepage proof helper, and the still-incorrect `HMIOSS` appointment

- [ ] **Step 6: Commit the red-phase refinement contract**

```bash
git add __tests__/page.test.tsx __tests__/homepage-validation.test.tsx __tests__/content-contract.test.ts __tests__/homepage-proof-runtime.test.ts
git commit -m "test: lock PB13.1 homepage refinement contract"
```

## Task 3: Add Homepage-Only Transformation Proof Projection And Refined Narrative Data

**Files:**
- Create: `src/content/authority/homepage.ts`
- Modify: `src/content/authority/index.ts`
- Modify: `src/content/index.ts`
- Modify: `src/content/data/homepage.ts`

- [ ] **Step 1: Create a homepage-only authority proof helper**

Create `src/content/authority/homepage.ts`:

```ts
import { authorityMediaCoverage } from "./media-coverage";
import { authorityVentureMilestones } from "./venture-milestones";

export type HomepageProofSignal = {
  id: string;
  title: string;
  organizationStrengthening: string;
  sourceLabel: string;
  sourceUrl: string;
};

const HOMEPAGE_PROOF_SIGNAL_IDS = [
  "food-ink-malaysia-launch-2014",
  "barn-farmer-mco-initiative",
  "ratatouille-gourmet-restaurant-brand-of-the-year",
] as const;

const HOMEPAGE_PROOF_SIGNAL_DETAILS: Record<
  (typeof HOMEPAGE_PROOF_SIGNAL_IDS)[number],
  Pick<HomepageProofSignal, "title" | "organizationStrengthening">
> = {
  "food-ink-malaysia-launch-2014": {
    title: "Food Ink Malaysia turned early platform traction into recognized community capability",
    organizationStrengthening:
      "Shows that stronger platform logic can turn audience growth into durable market capability.",
  },
  "barn-farmer-mco-initiative": {
    title: "Barn Farmer converted restaurant disruption into community-support delivery under MCO",
    organizationStrengthening:
      "Shows that organizational responsiveness can be strengthened fast enough to serve people under real constraints.",
  },
  "ratatouille-gourmet-restaurant-brand-of-the-year": {
    title: "Ratatouille Gourmet scaled from a small operation into a multi-outlet F&B group",
    organizationStrengthening:
      "Shows that stronger commercial systems can compound into broader operating scale and verified recognition.",
  },
};

export function getHomepageProofSignals(): HomepageProofSignal[] {
  return HOMEPAGE_PROOF_SIGNAL_IDS.map((id) => {
    if (id === "barn-farmer-mco-initiative") {
      const mediaCoverage = authorityMediaCoverage.find((item) => item.id === id);

      if (!mediaCoverage) {
        throw new Error(`Missing homepage proof media coverage for ${id}`);
      }

      return {
        id: mediaCoverage.id,
        sourceLabel: mediaCoverage.sourceLabel,
        sourceUrl: mediaCoverage.sourceUrl,
        ...HOMEPAGE_PROOF_SIGNAL_DETAILS[id],
      };
    }

    const milestone = authorityVentureMilestones.find((item) => item.id === id);

    if (!milestone?.sourceLabel || !milestone.sourceUrl) {
      throw new Error(`Missing homepage proof milestone for ${id}`);
    }

    return {
      id: milestone.id,
      sourceLabel: milestone.sourceLabel,
      sourceUrl: milestone.sourceUrl,
      ...HOMEPAGE_PROOF_SIGNAL_DETAILS[id],
    };
  });
}
```

- [ ] **Step 2: Re-export the helper from the authority index**

Add this line to `src/content/authority/index.ts`:

```ts
export { getHomepageProofSignals, type HomepageProofSignal } from "./homepage";
```

- [ ] **Step 3: Re-export the helper from the root content index**

Add these lines to `src/content/index.ts`:

```ts
export { getHomepageProofSignals } from "./authority";
export type { HomepageProofSignal } from "./authority";
```

- [ ] **Step 4: Refine the homepage narrative content**

Update `src/content/data/homepage.ts` to:

```ts
export const homepageNarrative = {
  hero: {
    eyebrow: "GEH HEADQUARTERS",
    headline: "Architect of an entrepreneurial operating system",
    lead:
      "Most ventures can solve a problem once. Far fewer become stronger every time they do.",
    supporting:
      "Organizations often gain momentum faster than they gain strength. Growth creates complexity, dependence, and fragility faster than most systems are built to absorb it.",
    failureTitle: "Why current approaches keep falling short",
    failureLead:
      "Most company-building approaches optimize for launch, growth, or visibility. Far fewer are designed to make the organization itself stronger each time it solves a meaningful problem.",
    realitySignals: [
      "Traction often grows faster than capability.",
      "Founders remain the operating system for too long.",
      "Solving one problem rarely makes the organization stronger at solving the next.",
    ],
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
    necessity:
      "If the real problem is organizational fragility, another founder profile, company list, or consulting label is not enough. A new category is required.",
    description:
      "GEH is that category: a repeatable system designed to help organizations become stronger, more coherent, and more capable every time they solve a meaningful problem.",
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
    title: "What the ventures prove about GEH",
    description:
      "The ventures matter because each one tests whether a stronger operating system can create stronger capability, clearer decisions, and more durable outcomes in a different context.",
    organizationalStrengtheningLabel: "What this proves",
    organizationProofByVentureId: {
      "belleco-skin-beaute":
        "Proves that trust, consistency, and repeatable service delivery can strengthen personal-wellbeing outcomes.",
      "celestial-yuan":
        "Proves that clearer guidance can be modernized into a more coherent and accessible operating model.",
      inkco:
        "Proves that better decisions can be systemized across everyday categories instead of solved as isolated products.",
      "isaac-g-consultancy":
        "Proves that stronger positioning and sharper systems improve business capability, not just campaign output.",
      "yayasan-txj-malaysia":
        "Proves that community impact grows stronger when initiatives are organized through sustained support systems.",
      hmioss:
        "Proves that leadership development becomes stronger when education, strategy, and community are organized institutionally.",
      "g-space":
        "Proves that future capability can be cultivated intentionally before markets fully mature.",
    } satisfies Record<string, string>,
    authorityTitle: "What the public proof shows",
    authorityDescription:
      "Recognition, media coverage, and verified milestones matter here because they show organizational strengthening in public, not just private theory.",
  },
  future: {
    eyebrow: "The Future",
    title: "Why GEH matters now",
    description:
      "GEH matters because the long-term goal is larger than one founder site or one set of ventures. The aim is to make organizational strengthening a visible entrepreneurial discipline, so that solving a problem makes the organization stronger each time.",
    actionTitle: "What to do next",
    actions: [
      {
        label: "Understand the GEH Ecosystem",
        href: "/companies",
        eventLabel: "Understand the GEH Ecosystem",
        eventLocation: "home_future",
      },
      {
        label: "Review GEH Proof & Authority",
        href: "/media",
        eventLabel: "Review GEH Proof & Authority",
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

- [ ] **Step 5: Run the refinement test subset and confirm only page wiring remains**

Run:

```bash
npm test -- __tests__/homepage-proof-runtime.test.ts __tests__/content-contract.test.ts
```

Expected:

- the proof runtime test still fails until the new helper is exported
- the content contract test still fails until `HMIOSS` is corrected

- [ ] **Step 6: Commit the new refinement data layer**

```bash
git add src/content/authority/homepage.ts src/content/authority/index.ts src/content/index.ts src/content/data/homepage.ts
git commit -m "feat: add PB13.1 homepage refinement data"
```

## Task 4: Correct Factual Integrity And Implement The Necessity Bridge

**Files:**
- Modify: `src/content/data/portfolio.ts`
- Modify: `app/page.tsx`

- [ ] **Step 1: Correct the HMIOSS appointment in the runtime content model**

Update the `HMIOSS` venture in `src/content/data/portfolio.ts` to:

```ts
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
    "Develop future leaders through education, strategic thinking, research, and community engagement, with Gary Giam serving as Deputy Chairman.",
},
```

- [ ] **Step 2: Render the inevitability bridge in the hero section**

In `app/page.tsx`, update the hero section to add the failure block directly under the supporting copy and CTAs:

```tsx
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
            <div className="mt-8 rounded-[1.5rem] border border-black/10 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a7a17]">
                {homepageNarrative.hero.failureTitle}
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-700 sm:text-base">
                {homepageNarrative.hero.failureLead}
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {homepageNarrative.hero.realitySignals.map((signal) => (
                  <article
                    key={signal}
                    className="rounded-[1.25rem] border border-black/10 bg-zinc-50 px-4 py-4"
                  >
                    <p className="text-sm leading-6 text-zinc-700">{signal}</p>
                  </article>
                ))}
              </div>
            </div>
```

- [ ] **Step 3: Make the category block land as the logical conclusion**

Update the category section description in `app/page.tsx` to:

```tsx
          <SectionHeading
            eyebrow={homepageNarrative.category.eyebrow}
            title={homepageNarrative.category.title}
            description={
              <>
                <p>{homepageNarrative.category.necessity}</p>
                <p className="mt-4">{homepageNarrative.category.description}</p>
              </>
            }
          />
```

- [ ] **Step 4: Run the focused tests to confirm the top-half refinement passes**

Run:

```bash
npm test -- __tests__/page.test.tsx __tests__/homepage-validation.test.tsx __tests__/content-contract.test.ts
```

Expected:

- inevitability and HMIOSS assertions pass
- remaining failures, if any, are limited to the proof layer

- [ ] **Step 5: Commit the necessity bridge and factual correction**

```bash
git add src/content/data/portfolio.ts app/page.tsx
git commit -m "feat: refine PB13.1 homepage necessity bridge"
```

## Task 5: Reframe The Proof Layer Around Organizational Strengthening

**Files:**
- Modify: `src/components/ecosystem/entity-card.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Add optional proof text support to the shared ecosystem card**

Update `src/components/ecosystem/entity-card.tsx` to:

```tsx
import Link from "next/link";

import type { Venture } from "@/src/content";

type EcosystemEntityCardProps = {
  entity: Venture;
  childrenEntities?: Venture[];
  proofLabel?: string;
  proofStatement?: string;
};

export function EcosystemEntityCard({
  entity,
  childrenEntities = [],
  proofLabel,
  proofStatement,
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

      {proofStatement ? (
        <div className="mt-5 rounded-[1.25rem] border border-black/10 bg-zinc-50 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
            {proofLabel ?? "What this proves"}
          </p>
          <p className="mt-2 text-sm leading-6 text-zinc-700">{proofStatement}</p>
        </div>
      ) : null}

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

- [ ] **Step 2: Wire the system-led proof statements and transformation signals into the homepage**

In `app/page.tsx`, update the imports and proof/authority sections to:

```tsx
import {
  authorityMediaCoverage,
  content,
  getHomepageProofSignals,
} from "@/src/content";

const homepageProofSignals = getHomepageProofSignals();
```

Then update the proof section mapping:

```tsx
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {ecosystemCards.map(({ entity, children }) => (
              <EcosystemEntityCard
                key={entity.id}
                entity={entity}
                childrenEntities={children}
                proofLabel={homepageNarrative.proof.organizationalStrengtheningLabel}
                proofStatement={
                  homepageNarrative.proof.organizationProofByVentureId[entity.id]
                }
              />
            ))}
          </div>
```

Then add the transformation-proof signals under the existing authority grid:

```tsx
          <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            {/* existing recognition and featured media blocks stay in place */}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {homepageProofSignals.map((signal) => (
              <article
                key={signal.id}
                className="rounded-[1.5rem] border border-black/10 bg-zinc-50 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  Transformation Signal
                </p>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-zinc-950">
                  {signal.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-700">
                  {signal.organizationStrengthening}
                </p>
                <Link
                  href={signal.sourceUrl}
                  className="mt-5 inline-flex rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-zinc-950"
                >
                  Source: {signal.sourceLabel}
                </Link>
              </article>
            ))}
          </div>
```

- [ ] **Step 3: Run the homepage refinement suite and confirm it passes**

Run:

```bash
npm test -- __tests__/page.test.tsx __tests__/homepage-validation.test.tsx __tests__/content-contract.test.ts __tests__/homepage-proof-runtime.test.ts
```

Expected:

- all four tests pass

- [ ] **Step 4: Run the nearby regression suite**

Run:

```bash
npm test -- __tests__/page.test.tsx __tests__/homepage-validation.test.tsx __tests__/homepage-proof-runtime.test.ts __tests__/content-contract.test.ts __tests__/companies-page.test.tsx __tests__/media-page.test.tsx __tests__/seo-metadata.test.tsx __tests__/founder-portrait.test.tsx
```

Expected:

- all eight files pass
- the homepage proof refinement does not change the frozen `Media` route behavior

- [ ] **Step 5: Commit the system-proof refinement**

```bash
git add src/components/ecosystem/entity-card.tsx app/page.tsx
git commit -m "feat: reframe PB13.1 homepage proof layer"
```

## Task 6: Run The PB13.1 Verification Baseline

**Files:**
- Verify only: `app/page.tsx`
- Verify only: `src/content/data/homepage.ts`
- Verify only: `src/content/data/portfolio.ts`
- Verify only: `src/content/authority/homepage.ts`
- Verify only: `src/components/ecosystem/entity-card.tsx`
- Verify only: `__tests__/page.test.tsx`
- Verify only: `__tests__/homepage-validation.test.tsx`
- Verify only: `__tests__/content-contract.test.ts`
- Verify only: `__tests__/homepage-proof-runtime.test.ts`

- [ ] **Step 1: Run the complete PB13.1 verification commands**

Run:

```bash
npm test -- __tests__/page.test.tsx __tests__/homepage-validation.test.tsx __tests__/homepage-proof-runtime.test.ts __tests__/content-contract.test.ts __tests__/companies-page.test.tsx __tests__/media-page.test.tsx __tests__/seo-metadata.test.tsx __tests__/founder-portrait.test.tsx
npx eslint app/page.tsx src/content/data/homepage.ts src/content/data/portfolio.ts src/content/authority/homepage.ts src/components/ecosystem/entity-card.tsx __tests__/page.test.tsx __tests__/homepage-validation.test.tsx __tests__/content-contract.test.ts __tests__/homepage-proof-runtime.test.ts
npm run typecheck
npm run build
```

Expected:

- tests pass
- ESLint passes
- TypeScript passes
- build succeeds

- [ ] **Step 2: Capture the final repo state before closeout docs**

Run:

```bash
git status --short
```

Expected:

- only intended PB13.1 homepage refinement files remain modified before closeout docs are written

## Task 7: Write The PB13.1 Knowledge Harvest

**Files:**
- Create: `docs/superpowers/pb13/2026-06-28-homepage-evidence-refinement-knowledge-harvest.md`

- [ ] **Step 1: Write the Knowledge Harvest**

Create `docs/superpowers/pb13/2026-06-28-homepage-evidence-refinement-knowledge-harvest.md`:

```md
# PB13.1 Homepage Evidence Refinement Knowledge Harvest

Date: 2026-06-28
Programme: PB13 — GEH Public Narrative Implementation
Tranche: 1.1 — Homepage Evidence Refinement

## What Held

- Problem recognition before category naming:
- Inevitability over persuasion:
- System-led proof clarity:
- Organizational-strengthening evidence:

## What Strengthened

- The bridge from observable reality to category necessity:
- The understanding of Gary as architect:
- The understanding of ventures as proof:

## What Remains Deferred

- `Insights` as `GEH Thinking Center`:
- `Impact` as `GEH Outcomes Center`:
- deeper case-study proof reserved for later PB13 tranches:

## Reusable Learnings

- Narrative patterns reusable across GaryGiam.com:
- Proof patterns reusable across GaryGiam.com:
- What remains homepage-local:

## Verification Notes

- Tests:
- ESLint:
- TypeScript:
- Build:
```

- [ ] **Step 2: Commit the Knowledge Harvest**

```bash
git add docs/superpowers/pb13/2026-06-28-homepage-evidence-refinement-knowledge-harvest.md
git commit -m "docs: capture PB13.1 homepage knowledge harvest"
```

## Task 8: Write The PB13.1 Promotion Review

**Files:**
- Create: `docs/superpowers/pb13/2026-06-28-homepage-evidence-refinement-promotion-review.md`

- [ ] **Step 1: Write the Promotion Review**

Create `docs/superpowers/pb13/2026-06-28-homepage-evidence-refinement-promotion-review.md`:

```md
# PB13.1 Homepage Evidence Refinement Promotion Review

Date: 2026-06-28
Programme: PB13 — GEH Public Narrative Implementation
Tranche: 1.1 — Homepage Evidence Refinement

## Review Purpose

This review classifies what PB13.1 discovered without reopening PB13 Tranche 1 or changing GEH Narrative Architecture v1.

## Items

### Inevitability Bridge

- Classification:
- Evidence:
- Reuse Decision:

### System-Led Venture Proof

- Classification:
- Evidence:
- Reuse Decision:

### Transformation-Signal Proof Projection

- Classification:
- Evidence:
- Reuse Decision:

### Factual Integrity Correction

- Classification:
- Evidence:
- Reuse Decision:

### Future Direction Notes For Insights / Impact

- Classification:
- Evidence:
- Reuse Decision:
```

- [ ] **Step 2: Commit the Promotion Review**

```bash
git add docs/superpowers/pb13/2026-06-28-homepage-evidence-refinement-promotion-review.md
git commit -m "docs: add PB13.1 homepage promotion review"
```

## Task 9: Write The PB13.1 CEO Checkpoint Summary And Freeze

**Files:**
- Create: `docs/superpowers/pb13/2026-06-28-homepage-evidence-refinement-ceo-checkpoint-summary.md`

- [ ] **Step 1: Write the CEO checkpoint summary**

Create `docs/superpowers/pb13/2026-06-28-homepage-evidence-refinement-ceo-checkpoint-summary.md`:

```md
# PB13.1 Homepage Evidence Refinement CEO Checkpoint Summary

Date: 2026-06-28
Programme: PB13 — GEH Public Narrative Implementation
Tranche: 1.1 — Homepage Evidence Refinement
Status: Pause for CEO review

## Completed

- Homepage refinement implemented within PB13.1 boundaries
- Verification baseline executed
- Knowledge Harvest completed
- Promotion Review completed

## Refinement Outcomes

- Necessity before category:
- System-led proof:
- Transformation over association:
- Factual integrity:

## Verification Summary

- Tests:
- ESLint:
- TypeScript:
- Build:

## Freeze Rule

Implementation pauses here.

No About implementation may begin until PB13.1 is approved and frozen.
```

- [ ] **Step 2: Commit the CEO checkpoint summary**

```bash
git add docs/superpowers/pb13/2026-06-28-homepage-evidence-refinement-ceo-checkpoint-summary.md
git commit -m "docs: add PB13.1 homepage checkpoint summary"
```

- [ ] **Step 3: Confirm the tranche freeze state**

Run:

```bash
git status --short
```

Expected:

- PB13.1 is complete except for the already-approved temporary `.superpowers/` directory
- `About` work has not started
- implementation stops here pending CEO approval

## Self-Review

- Spec coverage:
  - `Inevitability Rule`: Tasks 1, 2, and 4
  - `P0 — Category Necessity`: Tasks 2, 3, and 4
  - `P0 — System-led Proof`: Tasks 2, 3, and 5
  - `P1 — Transformation Over Association`: Tasks 3 and 5
  - `P1 — Factual Integrity`: Tasks 2 and 4
  - `P2 — Future Tranche Preparation`: Tasks 7 and 8
  - homepage-only boundary: Tasks 3, 4, 5, and 9
  - verification and freeze: Tasks 6 through 9
- Placeholder scan:
  - all code-bearing steps include exact snippets
  - all verification steps include exact commands and expected outcomes
  - no TBD or deferred implementation placeholders remain inside the plan
- Type consistency:
  - `getHomepageProofSignals()` is introduced in Task 3 and consumed in Task 5
  - `organizationProofByVentureId` keys match existing top-level venture ids
  - `proofLabel` and `proofStatement` are defined and consumed consistently
