# PB13 Homepage Knowledge Harvest

Date: 2026-06-28
Programme: PB13 — GEH Public Narrative Implementation
Tranche: 1 — Homepage

## What Held

- Problem-first sequencing: leading with recognizable organizational pain made the homepage feel like a narrative journey instead of a founder profile or venture directory.
- Category clarity: naming `GEH` explicitly as an entrepreneurial operating system gave the homepage one dominant message rather than several competing impressions.
- Operating-system differentiation: the canonical definition plus three principle blocks clarified why `GEH` is different without trying to explain the whole system on the homepage.
- Proof coherence: showing ventures as expressions of the system, then reinforcing them with authority proof, supported belief without collapsing back into a portfolio-only story.
- Action clarity: the final CTA cluster gives visitors three clear next steps aligned to curiosity, proof, and partnership rather than generic navigation.

## What Was Weaker Than Expected

- Narrative confusion points: the homepage still relies on later tranches to deepen the relationship between founder journey, venture evidence, and public proof.
- Proof gaps: the authority layer is strong enough to support belief, but it remains intentionally selective and does not yet provide the fuller case-study depth reserved for `About`, `Companies`, and `Media`.
- CTA friction: duplicate CTA labels initially blurred the action layer and created test ambiguity, which confirmed that each narrative stage needs distinct action language.

## Reusable Learnings

- Shared narrative patterns that should carry into About: start with an immediately recognizable problem, then move from category understanding to founder motivation rather than beginning with biography.
- Shared proof patterns that should carry into Companies or Media / Authority: separate venture-expression proof from authority proof so the system is validated by both operating evidence and public evidence.
- Shared CTA or engagement patterns that should carry into Contact: use distinct intent-specific CTA labels so each destination reinforces the visitor journey instead of repeating generic calls to action.

## Local-Only Learnings

- Homepage-specific presentation decisions that should not yet be generalized: the exact section pacing, the `GEH HEADQUARTERS` framing, and the current split between homepage proof density and curiosity are homepage-pilot choices that still need validation in later tranches.

## Verification Notes

- Tests: passed for the homepage narrative contract, homepage acceptance checklist, and the nearby regression suite covering content contracts, companies, media, SEO metadata, and founder portrait behavior.
- ESLint: passed for `app/page.tsx`, `src/content/data/homepage.ts`, `__tests__/page.test.tsx`, and `__tests__/homepage-validation.test.tsx`.
- TypeScript: passed via the full repository typecheck baseline.
- Build: passed via the production build baseline.
