# MVP Content Contract Design

**Date:** 2026-06-20

**Goal**

Add a minimal, typed local content model for the approved MVP entities so the current scaffold has a stable content contract that is easy to replace with a CMS later.

**Approved MVP Entities**

- `site`
- `person`
- `ventures`
- `careerMilestones`
- `awards`
- `mediaItems`
- `speakingItems`
- `insightArticles`
- `impactInitiatives`
- `contactChannels`
- `seo`

**Constraints**

- Use the current Next.js scaffold as-is.
- Implement types, files, and tests only.
- Keep the solution simple and MVP-only.
- Do not add CMS SDKs, adapters, loaders, fetchers, or UI features.
- Run targeted tests and lint after implementation.

**Recommended Approach**

Use split entity type files, one local content data module, one aggregation module, and one contract test file.

This keeps responsibilities small and clear:

- entity definitions live in focused files
- local MVP content lives in one portable data module
- public exports stay centralized
- tests validate the content contract instead of the UI

This is CMS-ready because the types stay transport-friendly and can be reused later by a CMS mapping layer without changing consumers.

**File Structure**

- Create `content/types/site.ts`
- Create `content/types/person.ts`
- Create `content/types/ventures.ts`
- Create `content/types/career-milestones.ts`
- Create `content/types/awards.ts`
- Create `content/types/media-items.ts`
- Create `content/types/speaking-items.ts`
- Create `content/types/insight-articles.ts`
- Create `content/types/impact-initiatives.ts`
- Create `content/types/contact-channels.ts`
- Create `content/types/seo.ts`
- Create `content/types/index.ts`
- Create `content/data/portfolio.ts`
- Create `content/index.ts`
- Create `__tests__/content-contract.test.ts`

**Type Design**

Each entity gets a dedicated exported type. The top-level content object is represented by a `ContentModel` type exported from `content/types/index.ts`.

The root contract is:

```ts
type ContentModel = {
  site: Site;
  person: Person;
  ventures: Venture[];
  careerMilestones: CareerMilestone[];
  awards: Award[];
  mediaItems: MediaItem[];
  speakingItems: SpeakingItem[];
  insightArticles: InsightArticle[];
  impactInitiatives: ImpactInitiative[];
  contactChannels: ContactChannel[];
  seo: Seo;
};
```

Types stay CMS-friendly by using plain serializable fields:

- strings for titles, labels, summaries, slugs, and URLs
- optional strings for fields that may be absent in MVP
- boolean flags only where useful
- arrays for repeatable entities
- ISO-like date strings instead of `Date` objects

No React nodes, functions, class instances, or framework-specific fields will be part of the contract.

**Local Data Design**

`content/data/portfolio.ts` will export a single `content` object typed as `ContentModel`.

This file will contain one minimal record or small set of records per approved entity, only enough to satisfy the MVP contract and tests.

The data file is intentionally local and static. It is a stand-in for future CMS content, not a permanent fetching strategy.

**Public Exports**

`content/index.ts` will export:

- the `content` object
- the `ContentModel` type
- all entity types needed by consumers

This gives the app one stable import surface.

**Contract Tests**

`__tests__/content-contract.test.ts` will validate the content contract directly.

The tests will check:

- the root `content` export exists
- all approved top-level keys exist
- singleton sections are defined
- collection sections are arrays
- representative records expose their required identity fields
- the local data object conforms to `ContentModel`

These tests are intentionally narrow. They verify the shape and minimum viable completeness of the content model without adding business logic.

**Non-Goals**

- No CMS integration
- No schema validation library
- No runtime parsing layer
- No route or page rendering changes
- No helper utilities beyond simple exports
- No additional entities beyond the approved MVP list

**Implementation Notes**

- Keep file names ASCII and consistent with the existing scaffold.
- Prefer small, focused files over a single large content file.
- Preserve the current app page and existing page test unless a small adjustment is required.
- Run only targeted tests for the new content contract plus lint for repository verification.

**Testing Plan**

- Run `npm test -- __tests__/content-contract.test.ts`
- If the script form does not accept a path argument cleanly, run `npx vitest run __tests__/content-contract.test.ts`
- Run `npm run lint`

**Success Criteria**

- All approved MVP entities have explicit types.
- A single typed local content object exists.
- Public exports are easy to consume from one module.
- Contract tests pass.
- Lint passes.
- No extra features are introduced.
