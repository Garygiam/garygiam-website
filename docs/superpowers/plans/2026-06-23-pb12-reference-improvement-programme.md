# PB12 Reference Improvement Programme Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Validate `GaryGiam.com` against the external PB11 constitutional baseline, classify every improvement candidate, implement only the top `Reference Quality` fixes, capture a `Knowledge Harvest`, and stop at the CEO checkpoint.

**Architecture:** Use a docs-first execution sequence. First write the PB12 validation, backlog, and promotion-review artifacts inside the repository so the benchmark reasoning is auditable. Then implement only the two strongest reference-quality fixes already supported by repository evidence: make the runtime awards derive from the authority vault single source of truth, and make benchmark asset contracts truthful by matching the declared portrait file and removing the nonexistent Open Graph image declaration.

**Tech Stack:** Markdown, Next.js 16 App Router, TypeScript, Vitest, Testing Library, ESLint

---

## File Structure

- Create: `docs/superpowers/pb12/2026-06-23-reference-validation.md`
- Create: `docs/superpowers/pb12/2026-06-23-improvement-backlog.md`
- Create: `docs/superpowers/pb12/2026-06-23-promotion-review.md`
- Create: `docs/superpowers/pb12/2026-06-23-knowledge-harvest.md`
- Create: `docs/superpowers/pb12/2026-06-23-ceo-checkpoint-summary.md`
- Create: `src/content/authority/runtime.ts`
- Modify: `src/content/authority/index.ts`
- Modify: `src/content/data/portfolio.ts`
- Create: `__tests__/authority-runtime.test.ts`
- Create: `__tests__/reference-asset-contracts.test.ts`
- Create: `__tests__/media-page.test.tsx`
- Create: `public/images/gary-giam-portrait.jpg`

## Task 1: Write The PB12 Validation Report

**Files:**
- Create: `docs/superpowers/pb12/2026-06-23-reference-validation.md`

- [ ] **Step 1: Create the PB12 docs directory**

Run:

```bash
mkdir -p docs/superpowers/pb12
```

Expected: the `docs/superpowers/pb12` directory exists.

- [ ] **Step 2: Write the validation report from the external PB11 baseline**

Create `docs/superpowers/pb12/2026-06-23-reference-validation.md` with:

```md
# PB12 Reference Validation

Date: 2026-06-23
Programme: PB12 — GEH Reference Improvement Programme
PB11 Baseline: `/Users/garygiam/Desktop/PB11-evolution-framework-package`
Repository Under Evaluation: `/Users/garygiam/Desktop/GG`

## Baseline Rules Applied

- PB11 is the constitutional reference for this programme.
- `GEH Core` remains unchanged during PB12.
- `GaryGiam.com` may generate evidence, but may not redefine `GEH Core` by itself.
- reusable candidates may be identified, but not promoted.
- evidence determines promotion, not convenience.

## Repository Findings

### Finding 1 — Runtime authority awards are duplicated outside the authority vault

- Evidence:
  - `src/content/authority/awards.ts` contains the verified award dataset, including one richer authority-only record that is absent from runtime launch content.
  - `src/content/data/portfolio.ts` defines a separate `content.awards` array manually.
  - `app/page.tsx` and `app/media/page.tsx` consume `content.awards` at runtime.
- Interpretation:
  - the benchmark repo contains two award sources with different scope and no explicit projection layer.
- PB11 relevance:
  - this weakens benchmark evidence discipline and muddies the boundary between local evidence and governed reusable assets.

### Finding 2 — The configured portrait contract is truthful only because of extension fallback

- Evidence:
  - `content.person.portraitPath` is `/images/gary-giam-portrait.jpg`.
  - the repository currently contains `public/images/gary-giam-portrait.png`, not the configured `.jpg`.
  - `src/lib/portrait.ts` resolves alternate extensions automatically.
- Interpretation:
  - the benchmark works, but only because fallback logic hides a contract mismatch.
- PB11 relevance:
  - reference implementations should make declared asset contracts truthful, not merely recoverable.

### Finding 3 — Metadata declares a missing Open Graph image

- Evidence:
  - `src/content/data/portfolio.ts` sets `seo.openGraphImage` to `https://garygiam.com/og-image.jpg`.
  - the repository contains no `og-image.*` asset.
  - `src/seo/metadata.ts` emits Open Graph and Twitter images when `openGraphImage` exists.
- Interpretation:
  - the benchmark currently publishes a false metadata contract.
- PB11 relevance:
  - a benchmark instance should not encode broken inheritable defaults.

### Finding 4 — The authority vault is richer than the runtime site, but the relationship is not explicit

- Evidence:
  - `src/content/authority/awards.ts` contains three verified awards.
  - runtime launch content intentionally surfaces only two awards.
  - no file currently explains how authority-vault data becomes launch-runtime data.
- Interpretation:
  - curation exists, but the curation rule is implicit rather than governed.
- PB11 relevance:
  - this is a candidate benchmark pattern that should be made explicit and test-backed.

## Validation Outcome

- strongest `Reference Quality` candidates:
  - align runtime awards with the authority-vault single source of truth
  - make benchmark asset contracts truthful
- strongest `Factory Candidate` signal:
  - an explicit authority-vault-to-runtime projection pattern
- items requiring deferral:
  - new Open Graph asset generation
  - broader milestone normalization across the About page and authority vault
```

- [ ] **Step 3: Review the validation report for scope drift**

Run:

```bash
sed -n '1,220p' docs/superpowers/pb12/2026-06-23-reference-validation.md
```

Expected: the file contains only PB11-grounded findings and no implementation instructions.

- [ ] **Step 4: Commit the validation report**

```bash
git add docs/superpowers/pb12/2026-06-23-reference-validation.md
git commit -m "docs: add PB12 reference validation"
```

## Task 2: Build The Backlog And Promotion Review

**Files:**
- Create: `docs/superpowers/pb12/2026-06-23-improvement-backlog.md`
- Create: `docs/superpowers/pb12/2026-06-23-promotion-review.md`

- [ ] **Step 1: Write the grouped improvement backlog**

Create `docs/superpowers/pb12/2026-06-23-improvement-backlog.md` with:

```md
# PB12 Improvement Backlog

Date: 2026-06-23
Programme: PB12 — GEH Reference Improvement Programme

## Reference Quality

### PB12-RQ-001 — Align runtime awards with the authority vault

- Problem: runtime launch awards are duplicated manually in `content.awards` instead of being projected from the authority vault.
- Reference Value: a benchmark instance should demonstrate one evidence source with an explicit runtime projection layer.
- Supporting Evidence:
  - `src/content/authority/awards.ts`
  - `src/content/data/portfolio.ts`
  - `app/page.tsx`
  - `app/media/page.tsx`
- Promotion Candidate: `GEH Core`
- Success Metric:
  - the launch runtime still shows the same two awards
  - the launch order stays stable
  - runtime awards are derived from the authority vault rather than duplicated manually

### PB12-RQ-002 — Make benchmark asset contracts truthful

- Problem: the configured portrait file does not exist at the declared path, and metadata declares a missing Open Graph image.
- Reference Value: a benchmark instance should not rely on hidden recovery behavior or publish missing asset URLs.
- Supporting Evidence:
  - `src/content/data/portfolio.ts`
  - `src/lib/portrait.ts`
  - `src/seo/metadata.ts`
  - `public/images/gary-giam-portrait.png`
- Promotion Candidate: `GEH Core`
- Success Metric:
  - `public/images/gary-giam-portrait.jpg` exists
  - the configured portrait path resolves without extension fallback
  - metadata stops declaring a missing Open Graph image

## Factory Candidates

### PB12-FC-001 — Authority-vault runtime projection pattern

- Problem: the repo has no bounded adapter pattern for turning authority-vault records into launch-runtime records.
- Reference Value: if generalized, this could become a reusable GEH content projection pattern.
- Supporting Evidence:
  - `src/content/authority/awards.ts`
  - `src/content/data/portfolio.ts`
- Promotion Candidate: `Factory`
- Success Metric:
  - runtime curation logic becomes explicit, bounded, and test-backed
  - the pattern is documented as a candidate rather than promoted

## GaryGiam.com Improvements

### PB12-LI-001 — Align About timeline content with authority-vault milestone data

- Problem: milestone data exists in both the runtime content model and the authority vault, but the normalization boundary is unresolved.
- Reference Value: useful locally, but not yet strong enough for inheritable default treatment.
- Supporting Evidence:
  - `src/content/data/portfolio.ts`
  - `src/content/authority/founder-highlights.ts`
  - `src/content/authority/venture-milestones.ts`
- Promotion Candidate: `Local`
- Success Metric:
  - a future programme can reconcile timeline and authority sources without losing narrative quality

## Deferred

### PB12-D-001 — Add a governed Open Graph image asset pipeline

- Problem: the benchmark has no real OG image asset.
- Reference Value: desirable, but not required to remove the current false metadata contract.
- Supporting Evidence:
  - `src/content/data/portfolio.ts`
  - `src/seo/metadata.ts`
  - missing `og-image.*` file in the repository
- Promotion Candidate: `Local`
- Success Metric:
  - deferred until asset policy, design direction, and cross-context reuse value are explicit
```

- [ ] **Step 2: Write the promotion review with the Reference Test**

Create `docs/superpowers/pb12/2026-06-23-promotion-review.md` with:

```md
# PB12 Promotion Review

Date: 2026-06-23
Programme: PB12 — GEH Reference Improvement Programme

## Reference Test

If a new GEH Instance were installed tomorrow, would we want it to inherit this improvement by default?

- If yes, it is `Reference Quality` or at least a `Factory Candidate`.
- If no, it remains a `Local Improvement`.
- If evidence or authorization is insufficient, it is `Deferred`.

## Item Classification

| Item | Backlog Group | Primary Classification | Why |
| --- | --- | --- | --- |
| `PB12-RQ-001` | `Reference Quality` | `Reference Quality` | The benchmark should inherit single-source authority evidence by default. |
| `PB12-RQ-002` | `Reference Quality` | `Reference Quality` | Truthful asset contracts are a default benchmark expectation, not local polish. |
| `PB12-FC-001` | `Factory Candidates` | `Factory Candidate` | The projection layer is bounded and reusable-looking, but has only one real context today. |
| `PB12-LI-001` | `GaryGiam.com Improvements` | `Local Improvement` | The About-page timeline remains too narrative-specific for default inheritance. |
| `PB12-D-001` | `Deferred` | `Deferred` | Removing the false asset contract is ready now; designing a governed OG system is not. |

## Implementation Gate

Only `PB12-RQ-001` and `PB12-RQ-002` may proceed into implementation during this PB12 tranche.
```

- [ ] **Step 3: Review that every backlog item has a classification**

Run:

```bash
grep -n "Primary Classification\\|PB12-" docs/superpowers/pb12/2026-06-23-promotion-review.md
```

Expected: every backlog item appears exactly once in the promotion review.

- [ ] **Step 4: Commit the backlog and promotion review**

```bash
git add docs/superpowers/pb12/2026-06-23-improvement-backlog.md docs/superpowers/pb12/2026-06-23-promotion-review.md
git commit -m "docs: add PB12 backlog and promotion review"
```

## Task 3: Implement PB12-RQ-001 With A Runtime Authority Projection Layer

**Files:**
- Create: `src/content/authority/runtime.ts`
- Modify: `src/content/authority/index.ts`
- Modify: `src/content/data/portfolio.ts`
- Create: `__tests__/authority-runtime.test.ts`
- Create: `__tests__/media-page.test.tsx`
- Test: `__tests__/content-contract.test.ts`

- [ ] **Step 1: Write the failing authority-runtime and media-page tests**

Create `__tests__/authority-runtime.test.ts`:

```ts
import { expect, test } from "vitest";

import { getFeaturedAuthorityAwards } from "@/src/content/authority/runtime";

test("builds the launch awards from the authority vault in the intended runtime order", () => {
  expect(getFeaturedAuthorityAwards()).toEqual([
    expect.objectContaining({
      id: "international-prestige-brand-awards-2020-entrepreneur-of-the-year",
      title: "Entrepreneur of the Year",
      issuer: "International Prestige Brand Awards",
      sourceLabel: "TCL Magazine",
    }),
    expect.objectContaining({
      id: "malaysia-website-awards-2016-site-of-the-month",
      title: "Site of The Month (January)",
      issuer: "Malaysia Website Awards",
      sourceLabel: "Exabytes Malaysia",
    }),
  ]);
});
```

Create `__tests__/media-page.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import MediaPage from "@/app/media/page";

test("renders only the curated launch awards from the authority-backed runtime content", () => {
  render(<MediaPage />);

  expect(
    screen.getByRole("heading", { level: 1, name: "Why the profile deserves trust" })
  ).toBeDefined();
  expect(screen.getByText("Entrepreneur of the Year")).toBeDefined();
  expect(screen.getByText("Site of The Month (January)")).toBeDefined();
  expect(screen.queryByText("Restaurant Brand of the Year")).toBeNull();
});
```

- [ ] **Step 2: Run the tests to verify the new authority helper is missing**

Run:

```bash
npm test -- __tests__/authority-runtime.test.ts __tests__/media-page.test.tsx
```

Expected: FAIL because `@/src/content/authority/runtime` does not exist yet.

- [ ] **Step 3: Create the runtime projection helper and wire it into the content model**

Create `src/content/authority/runtime.ts`:

```ts
import type { Award } from "../types/awards";
import { authorityAwards } from "./awards";

const FEATURED_AUTHORITY_AWARD_IDS = [
  "international-prestige-brand-awards-2020-entrepreneur-of-the-year",
  "malaysia-website-awards-2016-site-of-the-month",
] as const;

const FEATURED_AUTHORITY_AWARD_DETAILS: Record<
  string,
  Pick<Award, "summary" | "assetLabels">
> = {
  "international-prestige-brand-awards-2020-entrepreneur-of-the-year": {
    summary: "Approved recognition tied to the MVP launch inputs.",
    assetLabels: [
      "International Prestige Brand Awards 2020 photos",
      "Founder recognition imagery",
    ],
  },
  "malaysia-website-awards-2016-site-of-the-month": {
    summary:
      "Recognition listing for Gary Giam // Food Ink // foodink.com.my, reinforcing the early digital platform-building chapter behind the broader ecosystem story.",
    assetLabels: [
      "Malaysia Website Awards 2016 certificate",
      "Malaysia Website Awards event photos",
      "Event presentation photos",
    ],
  },
};

export function getFeaturedAuthorityAwards(): Award[] {
  const order = new Map(
    FEATURED_AUTHORITY_AWARD_IDS.map((id, index) => [id, index])
  );

  return authorityAwards
    .filter((award) => award.id in FEATURED_AUTHORITY_AWARD_DETAILS)
    .sort((left, right) => order.get(left.id)! - order.get(right.id)!)
    .map((award) => ({
      id: award.id,
      title: award.title,
      issuer: award.issuer,
      date: award.date,
      sourceUrl: award.sourceUrl,
      sourceLabel: award.sourceLabel,
      ...FEATURED_AUTHORITY_AWARD_DETAILS[award.id],
    }));
}
```

Update `src/content/authority/index.ts`:

```ts
export { authorityAwards } from "./awards";
export { authorityMediaCoverage } from "./media-coverage";
export { authorityFounderHighlights } from "./founder-highlights";
export { authorityVentureMilestones } from "./venture-milestones";
export { getFeaturedAuthorityAwards } from "./runtime";
export {
  AUTHORITY_VAULT_CATEGORIES,
  type AuthorityAward,
  type AuthorityMediaCoverage,
  type AuthorityVaultCategory,
  type FounderHighlight,
  type VentureMilestone,
} from "./types";
```

Update the top of `src/content/data/portfolio.ts`:

```ts
import { getFeaturedAuthorityAwards } from "../authority/runtime";
import type { ContentModel } from "../types";
```

Replace the `awards` block in `src/content/data/portfolio.ts` with:

```ts
  awards: getFeaturedAuthorityAwards(),
```

- [ ] **Step 4: Run the focused tests to verify the projection is now real and stable**

Run:

```bash
npm test -- __tests__/authority-runtime.test.ts __tests__/media-page.test.tsx __tests__/content-contract.test.ts __tests__/page.test.tsx
```

Expected: PASS with the authority-vault-backed runtime award slice still rendering the same launch behavior.

- [ ] **Step 5: Commit PB12-RQ-001**

```bash
git add src/content/authority/runtime.ts src/content/authority/index.ts src/content/data/portfolio.ts __tests__/authority-runtime.test.ts __tests__/media-page.test.tsx
git commit -m "feat: align runtime awards with authority vault"
```

## Task 4: Implement PB12-RQ-002 By Making Asset Contracts Truthful

**Files:**
- Create: `public/images/gary-giam-portrait.jpg`
- Modify: `src/content/data/portfolio.ts`
- Create: `__tests__/reference-asset-contracts.test.ts`

- [ ] **Step 1: Write the failing reference asset-contract tests**

Create `__tests__/reference-asset-contracts.test.ts`:

```ts
import { existsSync } from "node:fs";
import path from "node:path";

import { expect, test } from "vitest";

import { content } from "@/src/content";
import { resolvePortraitSource } from "@/src/lib/portrait";
import { buildRootMetadata } from "@/src/seo/metadata";

test("keeps the configured portrait contract truthful for the benchmark repo", () => {
  expect(content.person.portraitPath).toBe("/images/gary-giam-portrait.jpg");
  expect(resolvePortraitSource(content.person.portraitPath!)).toBe(
    "/images/gary-giam-portrait.jpg"
  );
  expect(
    existsSync(path.join(process.cwd(), "public/images/gary-giam-portrait.jpg"))
  ).toBe(true);
});

test("does not declare a missing open graph image asset", () => {
  const metadata = buildRootMetadata();

  expect(metadata.openGraph?.images).toBeUndefined();
  expect(metadata.twitter?.images).toBeUndefined();
});
```

- [ ] **Step 2: Run the tests to verify the asset contract is currently false**

Run:

```bash
npm test -- __tests__/reference-asset-contracts.test.ts
```

Expected: FAIL because the `.jpg` portrait asset does not exist yet and the metadata still emits `og-image.jpg`.

- [ ] **Step 3: Create the canonical portrait file and remove the false Open Graph declaration**

Run the image conversion:

```bash
node --input-type=module -e "import sharp from 'sharp'; await sharp('public/images/gary-giam-portrait.png').jpeg({ quality: 92 }).toFile('public/images/gary-giam-portrait.jpg')"
```

Update the `seo` block in `src/content/data/portfolio.ts` to:

```ts
  seo: {
    title: "Gary Giam | Digital Headquarters",
    description:
      "Official digital headquarters for Gary Giam, connecting confirmed ventures, recognition, impact, and contact channels.",
    canonicalUrl: "https://garygiam.com",
  },
```

- [ ] **Step 4: Run the focused verification for the benchmark asset contracts**

Run:

```bash
npm test -- __tests__/reference-asset-contracts.test.ts __tests__/seo-metadata.test.tsx __tests__/founder-portrait.test.tsx
```

Expected: PASS with the declared portrait path now truthful and metadata no longer publishing a missing OG asset.

- [ ] **Step 5: Commit PB12-RQ-002**

```bash
git add public/images/gary-giam-portrait.jpg src/content/data/portfolio.ts __tests__/reference-asset-contracts.test.ts
git commit -m "fix: make reference asset contracts truthful"
```

## Task 5: Capture The Knowledge Harvest And CEO Checkpoint

**Files:**
- Create: `docs/superpowers/pb12/2026-06-23-knowledge-harvest.md`
- Create: `docs/superpowers/pb12/2026-06-23-ceo-checkpoint-summary.md`

- [ ] **Step 1: Write the Knowledge Harvest**

Create `docs/superpowers/pb12/2026-06-23-knowledge-harvest.md` with:

```md
# PB12 Knowledge Harvest

Date: 2026-06-23
Programme: PB12 — GEH Reference Improvement Programme

## Observations

- benchmark repositories lose trust when runtime content duplicates governed evidence stores without an explicit projection layer
- fallback logic is useful for resilience, but it should not hide false benchmark contracts
- removing a false inheritable default is higher priority than inventing a prettier but ungoverned replacement

## Implemented Reference Quality Changes

### PB12-RQ-001

- Change: runtime awards now derive from the authority vault through an explicit projection helper
- Why it mattered: the benchmark now demonstrates one evidence source and one curated runtime slice
- What appears reusable: an authority-vault-to-runtime projection pattern
- What remains local: the exact launch curation list still reflects GaryGiam.com launch scope
- What may later promote: the projection pattern may later qualify as a `Factory Candidate` or `GEH Core Candidate` with more contexts

### PB12-RQ-002

- Change: the declared portrait asset now exists as configured, and metadata no longer declares a missing Open Graph image
- Why it mattered: the benchmark now avoids false inheritable asset contracts
- What appears reusable: truthful asset-contract discipline for reference repos
- What remains local: a future designed Open Graph image system
- What may later promote: contract-truthfulness rules may later support GEH Core guidance if repeated across multiple instances
```

- [ ] **Step 2: Write the CEO checkpoint summary**

Create `docs/superpowers/pb12/2026-06-23-ceo-checkpoint-summary.md` with:

```md
# PB12 CEO Checkpoint Summary

Date: 2026-06-23
Programme: PB12 — GEH Reference Improvement Programme
Status: Pause for CEO review

## Completed In This Tranche

- PB11 baseline validated against the current repository
- grouped backlog created
- Promotion Review completed for every backlog item
- `Reference Quality` tranche 1 completed:
  - `PB12-RQ-001`
  - `PB12-RQ-002`
- Knowledge Harvest captured

## What Did Not Happen

- `GEH Core` was not modified
- no `Factory Candidate` was promoted
- no `GEH Core Candidate` was promoted
- no `Local Improvement` outside the approved reference tranche was implemented

## Ready For Review

- `docs/superpowers/pb12/2026-06-23-reference-validation.md`
- `docs/superpowers/pb12/2026-06-23-improvement-backlog.md`
- `docs/superpowers/pb12/2026-06-23-promotion-review.md`
- `docs/superpowers/pb12/2026-06-23-knowledge-harvest.md`
```

- [ ] **Step 3: Commit the harvest and checkpoint docs**

```bash
git add docs/superpowers/pb12/2026-06-23-knowledge-harvest.md docs/superpowers/pb12/2026-06-23-ceo-checkpoint-summary.md
git commit -m "docs: capture PB12 knowledge harvest"
```

## Task 6: Final Verification And Pause

**Files:**
- Verify only: `docs/superpowers/pb12/2026-06-23-reference-validation.md`
- Verify only: `docs/superpowers/pb12/2026-06-23-improvement-backlog.md`
- Verify only: `docs/superpowers/pb12/2026-06-23-promotion-review.md`
- Verify only: `src/content/authority/runtime.ts`
- Verify only: `src/content/data/portfolio.ts`
- Verify only: `public/images/gary-giam-portrait.jpg`
- Verify only: `docs/superpowers/pb12/2026-06-23-knowledge-harvest.md`
- Verify only: `docs/superpowers/pb12/2026-06-23-ceo-checkpoint-summary.md`

- [ ] **Step 1: Run the focused PB12 verification suite**

Run:

```bash
npm test -- __tests__/authority-runtime.test.ts __tests__/media-page.test.tsx __tests__/reference-asset-contracts.test.ts __tests__/content-contract.test.ts __tests__/page.test.tsx __tests__/seo-metadata.test.tsx __tests__/founder-portrait.test.tsx
```

Expected: PASS with both `Reference Quality` changes green.

- [ ] **Step 2: Run typecheck and targeted lint**

Run:

```bash
npm run typecheck
npx eslint src/content/authority/runtime.ts src/content/authority/index.ts src/content/data/portfolio.ts __tests__/authority-runtime.test.ts __tests__/media-page.test.tsx __tests__/reference-asset-contracts.test.ts
```

Expected:

- `tsc --noEmit` passes
- targeted ESLint passes

- [ ] **Step 3: Review git status and stop for CEO review**

Run:

```bash
git status --short
```

Expected: only the intended PB12 files are modified or committed, and the programme pauses here without entering the next backlog group.

## Self-Review

- Spec coverage:
  - external PB11 baseline usage: Task 1
  - grouped backlog: Task 2
  - `Step 3.5 — Promotion Review`: Task 2
  - `Reference Value Statement`: Task 2
  - `Reference Test`: Task 2
  - implement highest-priority `Reference Quality` items only: Tasks 3 and 4
  - `Knowledge Harvest`: Task 5
  - CEO checkpoint pause: Tasks 5 and 6
- Placeholder scan:
  - every created document has explicit initial contents
  - every code task includes concrete files and commands
  - no `TBD`, `TODO`, or “similar to previous task” shortcuts remain
- Type consistency:
  - runtime awards continue to use the existing `Award` shape
  - authority-vault source data remains `AuthorityAward`
  - promotion labels remain classification-only and do not imply canonical promotion
