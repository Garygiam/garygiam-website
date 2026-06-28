import { authorityMediaCoverage } from "./media-coverage";
import { authorityVentureMilestones } from "./venture-milestones";

export type HomepageProofSignal = {
  id: string;
  title: string;
  organizationStrengthening: string;
  sourceLabel: string;
  sourceUrl: string;
};

const HOMEPAGE_PROOF_SIGNAL_IDS = [
  "food-ink-malaysia-launch-2014",
  "barn-farmer-mco-initiative",
  "ratatouille-gourmet-restaurant-brand-of-the-year",
] as const;

const HOMEPAGE_PROOF_SIGNAL_DETAILS: Record<
  (typeof HOMEPAGE_PROOF_SIGNAL_IDS)[number],
  Pick<HomepageProofSignal, "title" | "organizationStrengthening">
> = {
  "food-ink-malaysia-launch-2014": {
    title: "Food Ink Malaysia turned early platform traction into recognized community capability",
    organizationStrengthening:
      "Shows that stronger platform logic can turn audience growth into durable market capability.",
  },
  "barn-farmer-mco-initiative": {
    title: "Barn Farmer converted restaurant disruption into community-support delivery under MCO",
    organizationStrengthening:
      "Shows that organizational responsiveness can be strengthened fast enough to serve people under real constraints.",
  },
  "ratatouille-gourmet-restaurant-brand-of-the-year": {
    title: "Ratatouille Gourmet scaled from a small operation into a multi-outlet F&B group",
    organizationStrengthening:
      "Shows that stronger commercial systems can compound into broader operating scale and verified recognition.",
  },
};

export function getHomepageProofSignals(): HomepageProofSignal[] {
  return HOMEPAGE_PROOF_SIGNAL_IDS.map((id) => {
    if (id === "barn-farmer-mco-initiative") {
      const mediaCoverage = authorityMediaCoverage.find((item) => item.id === id);

      if (!mediaCoverage) {
        throw new Error(`Missing homepage proof media coverage for ${id}`);
      }

      return {
        id: mediaCoverage.id,
        sourceLabel: mediaCoverage.sourceLabel,
        sourceUrl: mediaCoverage.sourceUrl,
        ...HOMEPAGE_PROOF_SIGNAL_DETAILS[id],
      };
    }

    const milestone = authorityVentureMilestones.find((item) => item.id === id);

    if (!milestone?.sourceLabel || !milestone.sourceUrl) {
      throw new Error(`Missing homepage proof milestone for ${id}`);
    }

    return {
      id: milestone.id,
      sourceLabel: milestone.sourceLabel,
      sourceUrl: milestone.sourceUrl,
      ...HOMEPAGE_PROOF_SIGNAL_DETAILS[id],
    };
  });
}
