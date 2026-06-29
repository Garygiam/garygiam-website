# PB13.2 — About Page Origin Story Design

Date: 2026-06-29
Status: Approved in conversation, written for review
Scope: About page design only

## Objective

Design PB13.2 so the `About` page becomes the origin story of `GEH`, not the biography of Gary.

The page should answer one central question:

`How did Gary's journey inevitably lead to the creation of GEH?`

The visitor should leave understanding why `GEH` exists, not simply knowing more about Gary.

## Constitutional Baseline

PB13.2 inherits, and may not alter, these frozen baselines:

- [2026-06-28-geh-narrative-architecture-v1-design.md](file:///Users/garygiam/Desktop/GG/docs/superpowers/specs/2026-06-28-geh-narrative-architecture-v1-design.md)
- [2026-06-28-pb13-geh-public-narrative-implementation-design.md](file:///Users/garygiam/Desktop/GG/docs/superpowers/specs/2026-06-28-pb13-geh-public-narrative-implementation-design.md)

PB13.2 also inherits the strongest usable learnings from PB13.1:

- recognition over explanation
- inevitability over persuasion
- system-led proof over venture listing
- transformation over association

## Governing Strategic Role

The page hierarchy should now operate like this:

- Homepage: `GEH` must exist.
- About: this is why `GEH` came into existence.
- Companies: this is how `GEH` expresses itself.
- Media: this is the evidence that `GEH` works.
- Insights: this is how `GEH` thinks.
- Contact: this is how people participate in `GEH`.

Within that system, the `About` page must keep `GEH` as the protagonist.

Gary's journey is not the hero of the page.

Gary's journey is the evidence that reveals why `GEH` became inevitable.

## Core Design Decision

PB13.2 should use an `inevitable thesis` structure, not a biography-first or timeline-first structure.

The page should not begin with:

- who Gary is
- a list of roles
- a chronology of achievements

It should begin with the question that makes the journey relevant:

`Why do so many organizations struggle to become stronger over time?`

That question makes the page about a real and recurring organizational reality before Gary appears as the observer, builder, and eventual architect of the answer.

## Mission

Reframe the `About` page as the explanatory origin of `GEH`.

It should show that across different industries, organizations, ventures, and roles, the same organizational pattern kept appearing, and that `GEH` emerged because no existing frame adequately solved that recurring problem.

## Narrative Role

The `About` page should answer:

- why the recurring organizational problem kept mattering
- how Gary encountered the same pattern in multiple contexts
- what organizational truths each chapter revealed
- why those truths made `GEH` necessary
- why the mission now continues beyond biography

## Constitutional Rule

Every chapter in the journey must answer two questions:

1. What happened?
2. What organizational principle emerged?

If a milestone answers only Question 1, it remains biography.

If it answers both, it becomes part of the origin story of `GEH`.

## Section Logic

PB13.2 should use this five-section structure.

### Section 1 — The Question

Purpose:

- begin with the recurring problem, not with Gary
- give every visitor a reason to continue reading
- establish that the page exists to explain the origin of `GEH`, not merely the founder profile

Required opening question:

- why do so many organizations struggle to become stronger over time?

Required narrative outcome:

- visitors should understand that the page is investigating a recurring organizational pattern
- they should feel curiosity about the origin of the answer, not just interest in a founder biography

### Section 2 — The Search

Purpose:

- reframe Gary's journey as a search across different industries, organizations, and roles
- make the chapters read as repeated observations of the same problem

Required framing:

- not “Gary worked here”
- but “across different industries, different organizations, and different roles, the same pattern kept appearing”

Required narrative outcome:

- visitors should understand that the journey matters because it revealed repetition, not because it accumulated titles

### Section 3 — The Discovery

Purpose:

- connect each major chapter to the organizational truth it revealed
- make milestones function as evidence instead of achievement bullets

Required chapter logic:

Each chapter should answer:

- what happened
- what organizational principle emerged

Illustrative chapter mapping:

- `PropertyGuru`: growth alone does not create organizational strength
- `Food Ink`: platforms need resilient operating systems
- technology conflict: control of knowledge and technology matters
- `Ratatouille Gourmet`: scaling exposes system weaknesses
- consulting: the same organizational problems repeat across industries
- charity and education: the same strengthening principles apply beyond business

Required narrative outcome:

- visitors should begin to see that the journey was revealing one thesis in multiple forms

### Section 4 — The Inevitable Conclusion

Purpose:

- show where `GEH` is born conceptually
- make it clear that `GEH` did not emerge because Gary wanted another company or another label

Required logic:

- the recurring problem kept appearing
- existing approaches did not solve it adequately
- no existing system fully answered it
- therefore `GEH` became the logical consequence

Required narrative outcome:

- visitors should feel that `GEH` was discovered as a necessary system, not invented as a branding move

### Section 5 — The Mission Continues

Purpose:

- end by looking forward
- connect the page back into the wider site
- create momentum into `Companies`, `Media`, `Insights`, and `Contact`

Required future logic:

- `GEH` is not the destination
- it is the beginning of a system that should make every future organization stronger than the last

Required narrative outcome:

- visitors should leave with forward motion and category momentum rather than with the feeling that the story has ended in biography

## Narrative Inheritance

PB13.2 must still strengthen the five-layer public architecture:

1. The Problem
2. The Category
3. The Operating System
4. The Proof
5. The Future

The `About` page does not need to repeat the homepage structure mechanically.

But it must still reinforce:

- the recurring problem
- the necessity of the category
- Gary as architect of the operating system
- journey chapters as proof of discovery
- the future direction of the mission

## Design Consequences

PB13.2 should likely move away from a simple milestone timeline as the page's dominant logic.

The timeline may still exist, but only as supporting structure within a larger argumentative narrative.

The page should prioritize:

- question-led progression
- observation and pattern recognition
- chapter-to-principle linkage
- inevitability of `GEH`
- forward mission continuity

The page should avoid:

- resume energy
- founder-credential stacking
- isolated achievements without principle
- chronology that does not advance category understanding

## Content Model Consequences

PB13.2 will likely require more structured narrative data than the current `careerMilestones` array alone provides.

The current milestone model is sufficient for:

- period
- organization
- role
- summary

But PB13.2 will likely also need fields such as:

- chapter thesis
- organizational principle
- why this chapter matters to the origin of `GEH`
- transition logic into the next chapter

This is a design implication only.

The exact data-model decision should be made in the implementation plan, not here.

## Dependencies

- Homepage category framing must already be live and field-validated enough to support a system-first reading
- PB13 and PB13.1 Knowledge Harvests should inform which inevitability and proof patterns already work
- existing career-milestone facts remain the factual backbone, but must be reframed through the `GEH` origin logic

## Success Criteria

PB13.2 design is successful when:

- the page begins with the problem-question rather than with biography
- `GEH` remains the protagonist of the page
- Gary's journey reads as evidence of discovery rather than a list of achievements
- each major chapter answers both what happened and what organizational principle emerged
- the page makes `GEH` feel inevitable rather than merely interesting
- the ending creates forward momentum into the rest of the site
- the page strengthens category understanding more than personal-profile understanding

## Non-Goals

PB13.2 does not:

- redesign unrelated routes
- reopen Homepage or PB13.1
- turn `About` into a manifesto
- write final implementation copy in this design document
- modify `GEH Narrative Architecture v1`
- begin implementation before CEO approval of programme design and plan
