import { describe, expect, test } from "vitest";

import {
  AUTHORITY_VAULT_CATEGORIES,
  authorityAwards,
  authorityFounderHighlights,
  authorityMediaCoverage,
  authorityVentureMilestones,
} from "@/src/content/authority";

describe("authority vault", () => {
  test("defines the future authority categories as a single source of truth", () => {
    expect(AUTHORITY_VAULT_CATEGORIES).toEqual([
      "Awards",
      "Media Coverage",
      "Speaking Engagements",
      "Government / Corporate Recognition",
      "Venture Milestones",
      "Founder Highlights",
    ]);
  });

  test("stores the initial verified awards dataset", () => {
    expect(authorityAwards).toHaveLength(3);
    expect(authorityAwards[0]).toMatchObject({
      issuer: "Malaysia Website Awards",
      title: "Site of The Month (January)",
      entity: "Gary Giam / Food Ink / foodink.com.my",
      sourceUrl: "https://www.exabytes.my/blog/malaysia-website-awards-2016/",
    });
    expect(authorityAwards[1]).toMatchObject({
      issuer: "International Prestige Brand Awards",
      title: "Entrepreneur of the Year",
      sourceUrl:
        "https://www.tclmagazine.com/ipba2020-entrepreneur-gary-giam-2/",
    });
    expect(authorityAwards[2]).toMatchObject({
      issuer: "International Prestige Brand Awards",
      title: "Restaurant Brand of the Year",
      entity: "Ratatouille Gourmet",
      sourceUrl:
        "https://www.tclmagazine.com/ipba2020-brand-ratatouille-gourmet-2/",
    });
  });

  test("stores the initial verified media coverage dataset", () => {
    expect(authorityMediaCoverage).toEqual([
      expect.objectContaining({
        outlet: "The Star",
        title: "Restaurateurs branch into produce delivery",
        sourceUrl:
          "https://www.thestar.com.my/news/nation/2020/04/07/restaurateurs-branch-into-produce-delivery",
      }),
    ]);
  });

  test("stores the initial founder highlights and venture milestones datasets", () => {
    expect(authorityFounderHighlights.map((highlight) => highlight.title)).toEqual([
      "PropertyGuru Malaysia",
      "Food Ink Malaysia (2014)",
      "Malaysia Website Awards 2016",
      "Isaac G Consultancy",
      "Ratatouille Gourmet",
      "International Prestige Brand Awards 2020",
      "Barn Farmer (MCO Initiative)",
      "Belleco Skin Beaute",
      "Celestial Yuan",
      "Yayasan TXJ Malaysia",
      "Inkco",
      "G-Space",
    ]);

    expect(authorityVentureMilestones).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          venture: "Food Ink Malaysia",
          period: "2014",
        }),
        expect.objectContaining({
          venture: "Barn Farmer",
          title: "MCO produce delivery initiative",
        }),
        expect.objectContaining({
          venture: "Ratatouille Gourmet",
          title: "Restaurant Brand of the Year",
        }),
      ])
    );
  });
});
