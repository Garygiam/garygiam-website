# Founder Favicon Revision Design

## Objective

Replace the current founder favicon artwork with a tighter `GG` monogram that closely follows the uploaded reference while keeping the existing favicon pipeline, metadata wiring, and favicon-only scope intact.

## Scope

This revision includes:

- replacing the current SVG source artwork
- regenerating the favicon output set from that SVG
- keeping the existing favicon file paths unchanged
- preserving the current metadata integration

This revision does not include:

- any website redesign
- any route or architecture changes
- any analytics changes
- any metadata structure changes beyond using the new artwork

## Current State

The site already has a favicon pipeline in place:

- source SVG at `src/assets/founder-favicon.svg`
- generation script at `scripts/generate-founder-favicons.mjs`
- generated outputs:
  - `app/favicon.ico`
  - `public/favicon-32x32.png`
  - `public/favicon-16x16.png`
  - `public/apple-touch-icon.png`
- metadata wiring already declared in `src/seo/metadata.ts`

The problem is purely visual: the current monogram design does not match the preferred founder aesthetic.

## Approved Direction

Use a **tight SVG recreation** based on the uploaded reference image.

That means:

- black rounded-square background
- bold gold `GG`
- tall, condensed, tightly spaced letterforms
- minimal, premium, founder-led aesthetic

The new artwork should feel:

- sharper
- cleaner
- more confident
- closer to the uploaded image

## Design Rules

### 1. Visual Structure

The favicon should use:

- a solid black or near-black rounded-square field
- a bold gold `GG` monogram centered vertically and horizontally
- no gradients
- no shadows
- no outlines
- no decorative effects

### 2. Monogram Style

The `GG` should be:

- thicker than the current version
- more condensed vertically
- tighter in spacing
- simplified enough to remain legible at `16x16`

This is not a corporate mark and should not look like venture branding. It should read as a strong founder monogram.

### 3. Fidelity Standard

The new favicon should be visually close to the uploaded reference, but rebuilt cleanly as SVG rather than traced as a rough image asset.

That means:

- preserve the overall look and proportions
- allow minor refinements that improve rendering clarity at small sizes
- prioritize crisp scaling over literal pixel-for-pixel tracing

## Technical Approach

Keep the existing implementation structure unchanged:

- update `src/assets/founder-favicon.svg`
- rerun `scripts/generate-founder-favicons.mjs`
- regenerate:
  - `app/favicon.ico`
  - `public/favicon-32x32.png`
  - `public/favicon-16x16.png`
  - `public/apple-touch-icon.png`
- keep `src/seo/metadata.ts` unchanged unless verification shows a path mismatch

## Verification

The revision is complete when:

- the generated favicon outputs are refreshed from the new SVG
- favicon metadata tests still pass
- the favicon assets resolve correctly
- the live favicon visually reflects the uploaded-style `GG` design

## Acceptance Criteria

- the favicon uses a tighter `GG` monogram matching the uploaded direction
- the black-and-gold founder look is preserved
- all favicon output files remain available at the existing paths
- no website redesign or non-favicon scope is introduced
