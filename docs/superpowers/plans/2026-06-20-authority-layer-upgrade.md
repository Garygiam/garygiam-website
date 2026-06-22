# Authority Layer Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade the Home, About, Companies, and Media pages into a stronger founder authority experience without changing the approved architecture or SEO foundations.

**Architecture:** Keep the existing App Router structure, shared shell, and typed content model intact. Enrich the current content records with approved presentation data, add only the small UI components needed for the authority layer, and update the four target pages plus their tests.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS, Vitest, Testing Library, ESLint

---

## File Structure

- Modify: `src/content/types/person.ts`
- Modify: `src/content/types/ventures.ts`
- Modify: `src/content/types/career-milestones.ts`
- Modify: `src/content/types/awards.ts`
- Modify: `src/content/data/portfolio.ts`
- Create: `src/lib/portrait.ts`
- Create: `src/components/founder-portrait.tsx`
- Create: `src/components/section-heading.tsx`
- Modify: `app/page.tsx`
- Modify: `app/about/page.tsx`
- Modify: `app/companies/page.tsx`
- Modify: `app/media/page.tsx`
- Modify: `app/globals.css`
- Modify: `__tests__/page.test.tsx`
- Modify: `__tests__/about-page.test.tsx`
- Modify: `__tests__/companies-page.test.tsx`
- Modify: `__tests__/launch-pages.test.tsx`
- Create: `__tests__/founder-portrait.test.tsx`

## Guardrails

- Do not change routes.
- Do not add archives or detail pages.
- Do not change the SEO foundation shape.
- Do not introduce unnecessary animations.
- Keep the implementation mobile-first and portrait-ready.

## Task 1: Enrich the approved content records

**Files:**
- Modify: `src/content/types/person.ts`
- Modify: `src/content/types/ventures.ts`
- Modify: `src/content/types/career-milestones.ts`
- Modify: `src/content/types/awards.ts`
- Modify: `src/content/data/portfolio.ts`
- Test: `__tests__/content-contract.test.ts`

- [ ] Write the failing content assertions for portrait path, six ecosystem ventures, timeline richness, and updated recognition source.
- [ ] Run `npm run test -- __tests__/content-contract.test.ts` and verify the new assertions fail for the expected missing fields or values.
- [ ] Add only the fields needed for the authority layer:
  - `person.headline`
  - `person.heroCopy`
  - `person.portraitPath`
  - `person.philosophyTitle`
  - `person.philosophyText`
  - `ventures.category`
  - `ventures.vision`
  - `careerMilestones.period`
  - `careerMilestones.role`
  - `awards.sourceUrl`
- [ ] Update `portfolio.ts` with the approved facts only, including the six-venture ecosystem list and the full founder journey timeline.
- [ ] Run `npm run test -- __tests__/content-contract.test.ts` and verify it passes.

## Task 2: Add portrait-ready and section-heading primitives

**Files:**
- Create: `src/lib/portrait.ts`
- Create: `src/components/founder-portrait.tsx`
- Create: `src/components/section-heading.tsx`
- Test: `__tests__/founder-portrait.test.tsx`

- [ ] Write a failing portrait test that verifies the component keeps a stable hero frame and fallback copy when `public/images/gary-giam-portrait.jpg` is not present.
- [ ] Run `npm run test -- __tests__/founder-portrait.test.tsx` and verify it fails because the component does not exist yet.
- [ ] Implement a tiny server-safe portrait helper that checks whether `public/images/gary-giam-portrait.jpg` exists.
- [ ] Implement `FounderPortrait` so it renders a premium portrait frame with `next/image` when the file exists and a graceful authority fallback when it does not.
- [ ] Implement `SectionHeading` only if it removes clear duplication across Home, Companies, and Media.
- [ ] Run `npm run test -- __tests__/founder-portrait.test.tsx` and verify it passes.

## Task 3: Upgrade the Home page into the authority gateway

**Files:**
- Modify: `app/page.tsx`
- Modify: `__tests__/page.test.tsx`

- [ ] Rewrite the home-page test first so it expects:
  - the founder authority hero
  - portrait frame or fallback
  - `Explore Companies`
  - `About Gary`
  - `Building Across Industries`
  - recognition before philosophy
  - `Small Knife Cut Big Tree`
  - `Explore the Full Journey`
- [ ] Run `npm run test -- __tests__/page.test.tsx` and verify it fails for the expected missing content.
- [ ] Implement the new home narrative order:
  - hero
  - Building Across Industries
  - recognition
  - philosophy
  - journey preview
  - contact CTA
- [ ] Make the desktop hero two-column and keep mobile copy-first with the portrait still visible.
- [ ] Run `npm run test -- __tests__/page.test.tsx` and verify it passes.

## Task 4: Turn About into the emotional center

**Files:**
- Modify: `app/about/page.tsx`
- Modify: `__tests__/about-page.test.tsx`

- [ ] Rewrite the about-page test first so it expects:
  - founder narrative framing
  - single-column timeline
  - PropertyGuru Malaysia through G-Space
  - Ratatouille Gourmet recognition significance
- [ ] Run `npm run test -- __tests__/about-page.test.tsx` and verify it fails.
- [ ] Implement the narrative About page with the full vertical founder journey timeline and strong spacing between milestones.
- [ ] Ensure each milestone shows period, organization, role, and significance.
- [ ] Run `npm run test -- __tests__/about-page.test.tsx` and verify it passes.

## Task 5: Upgrade Companies and Media & Recognition

**Files:**
- Modify: `app/companies/page.tsx`
- Modify: `app/media/page.tsx`
- Modify: `__tests__/companies-page.test.tsx`
- Modify: `__tests__/launch-pages.test.tsx`

- [ ] Update the companies-page test first so it expects category, vision, and omission of website buttons when links are absent.
- [ ] Update the media-page test first so it expects the TCL Magazine source link and stronger recognition framing.
- [ ] Run `npm run test -- __tests__/companies-page.test.tsx __tests__/launch-pages.test.tsx` and verify the relevant assertions fail.
- [ ] Implement the Companies page as a premium ecosystem portfolio with six approved ventures only, category labels, descriptions, visions, and optional website buttons.
- [ ] Implement the Media page as a tighter recognition page with the award at the top and the approved TCL Magazine source link.
- [ ] Run `npm run test -- __tests__/companies-page.test.tsx __tests__/launch-pages.test.tsx` and verify they pass.

## Task 6: Final visual polish and verification

**Files:**
- Modify: `app/globals.css`
- Test: all existing tests

- [ ] Add the minimum CSS needed to improve typography hierarchy, spacing rhythm, gold accent usage, and section transitions without introducing new animation behavior.
- [ ] Verify the portrait and timeline stay readable on mobile-first layouts.
- [ ] Run `npm run test`.
- [ ] Run `npm run lint`.
- [ ] Run `npm run typecheck`.
- [ ] Run `npm run build`.

## Self-Review Checklist

- Spec coverage:
  - hero portrait, ecosystem clarity, recognition order, philosophy block, journey preview, About emotional center, Companies ecosystem portfolio, and Media trust framing are all covered by Tasks 1 to 6.
- Placeholder scan:
  - no placeholders, no TODO markers, and no “implement later” steps remain.
- Type consistency:
  - authority-layer fields are introduced in Task 1 and used consistently in Tasks 2 to 5.
