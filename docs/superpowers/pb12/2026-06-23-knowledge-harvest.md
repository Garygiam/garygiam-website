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
