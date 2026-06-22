export const AUTHORITY_VAULT_CATEGORIES = [
  "Awards",
  "Media Coverage",
  "Speaking Engagements",
  "Government / Corporate Recognition",
  "Venture Milestones",
  "Founder Highlights",
] as const;

export type AuthorityVaultCategory =
  (typeof AUTHORITY_VAULT_CATEGORIES)[number];

export type AuthorityAward = {
  id: string;
  category: "Awards";
  issuer: string;
  title: string;
  date: string;
  entity?: string;
  sourceLabel: string;
  sourceUrl: string;
  evidence?: string[];
};

export type AuthorityMediaCoverage = {
  id: string;
  category: "Media Coverage";
  outlet: string;
  title: string;
  context: string;
  publishedAt?: string;
  relatedEntity?: string;
  sourceLabel: string;
  sourceUrl: string;
};

export type FounderHighlight = {
  id: string;
  category: "Founder Highlights";
  title: string;
  period?: string;
  summary?: string;
};

export type VentureMilestone = {
  id: string;
  category: "Venture Milestones";
  venture: string;
  title: string;
  period: string;
  summary: string;
  sourceLabel?: string;
  sourceUrl?: string;
  relatedAuthorityIds?: string[];
};
