import { expect, test } from "vitest";

import { getHomepageProofSignals } from "@/src/content/authority";

test("builds the PB13.1 homepage proof signals from verified transformation evidence", () => {
  expect(getHomepageProofSignals()).toEqual([
    {
      id: "food-ink-malaysia-launch-2014",
      title: "Food Ink Malaysia turned early platform traction into recognized community capability",
      organizationStrengthening:
        "Shows that stronger platform logic can turn audience growth into durable market capability.",
      sourceLabel: "Exabytes Malaysia",
      sourceUrl: "https://www.exabytes.my/blog/malaysia-website-awards-2016/",
    },
    {
      id: "barn-farmer-mco-initiative",
      title: "Barn Farmer converted restaurant disruption into community-support delivery under MCO",
      organizationStrengthening:
        "Shows that organizational responsiveness can be strengthened fast enough to serve people under real constraints.",
      sourceLabel: "The Star",
      sourceUrl:
        "https://www.thestar.com.my/news/nation/2020/04/07/restaurateurs-branch-into-produce-delivery",
    },
    {
      id: "ratatouille-gourmet-restaurant-brand-of-the-year",
      title: "Ratatouille Gourmet scaled from a small operation into a multi-outlet F&B group",
      organizationStrengthening:
        "Shows that stronger commercial systems can compound into broader operating scale and verified recognition.",
      sourceLabel: "TCL Magazine",
      sourceUrl: "https://www.tclmagazine.com/ipba2020-brand-ratatouille-gourmet-2/",
    },
  ]);
});
