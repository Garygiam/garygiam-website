export type Venture = {
  id: string;
  slug: string;
  name: string;
  summary: string;
  status: string;
  kind: "venture" | "institution" | "ecosystem" | "initiative" | "pillar";
  ecosystemLayer:
    | "Personal Wellbeing"
    | "Decision Platforms"
    | "Business Growth"
    | "Community Impact"
    | "Leadership Development"
    | "Future Innovation";
  impactPillar:
    | "Better Health & Confidence"
    | "Better Direction & Wellbeing"
    | "Better Everyday Decisions"
    | "Better Businesses"
    | "Stronger Communities"
    | "Future Leaders"
    | "Future Innovation";
  parentId?: string;
  category?: string;
  vision?: string;
  websiteUrl?: string;
};
