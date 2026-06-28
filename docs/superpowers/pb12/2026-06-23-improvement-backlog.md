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
