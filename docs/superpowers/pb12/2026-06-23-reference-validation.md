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
