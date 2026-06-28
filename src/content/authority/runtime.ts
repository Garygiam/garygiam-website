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
