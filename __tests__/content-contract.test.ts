import { describe, expect, test } from "vitest";

import { content, type ContentModel } from "@/src/content";

describe("MVP content contract", () => {
  test("exports the approved top-level entities", () => {
    const keys = Object.keys(content).sort();

    expect(keys).toEqual([
      "awards",
      "careerMilestones",
      "contactChannels",
      "impactInitiatives",
      "insightArticles",
      "mediaItems",
      "person",
      "seo",
      "site",
      "speakingItems",
      "ventures",
    ]);
  });

  test("defines singleton sections and collection sections", () => {
    expect(content.site).toBeDefined();
    expect(content.person).toBeDefined();
    expect(content.seo).toBeDefined();

    expect(Array.isArray(content.ventures)).toBe(true);
    expect(Array.isArray(content.careerMilestones)).toBe(true);
    expect(Array.isArray(content.awards)).toBe(true);
    expect(Array.isArray(content.mediaItems)).toBe(true);
    expect(Array.isArray(content.speakingItems)).toBe(true);
    expect(Array.isArray(content.insightArticles)).toBe(true);
    expect(Array.isArray(content.impactInitiatives)).toBe(true);
    expect(Array.isArray(content.contactChannels)).toBe(true);
  });

  test("includes the authority-layer founder and ecosystem fields", () => {
    expect(content.site.name).toBeTruthy();
    expect(content.person.name).toBeTruthy();
    expect(content.person.slug).toBeTruthy();
    expect(content.seo.title).toBeTruthy();
    expect(content.person.headline).toBe(
      "Digital Platform Builder | Brand Strategist | Venture Builder | Ecosystem Architect"
    );
    expect(content.person.portraitPath).toBe("/images/gary-giam-portrait.jpg");
    expect(content.person.philosophyTitle).toBe("Small Knife Cut Big Tree");

    expect(content.ventures).toHaveLength(12);
    expect(content.ventures.map((venture) => venture.name)).toEqual([
      "Belleco Skin Beaute",
      "Celestial Yuan",
      "Inkco",
      "Food Ink",
      "Beauty Ink",
      "Drive Ink",
      "Stay Ink",
      "Travel Ink",
      "Isaac G Consultancy",
      "Yayasan TXJ Malaysia",
      "HMIOSS",
      "G-Space",
    ]);

    expect(content.ventures.find((venture) => venture.name === "Inkco")).toMatchObject({
      kind: "ecosystem",
      ecosystemLayer: "Decision Platforms",
      impactPillar: "Better Everyday Decisions",
      status: "Building",
    });

    expect(content.ventures.find((venture) => venture.name === "Food Ink")).toMatchObject({
      parentId: "inkco",
      kind: "pillar",
      ecosystemLayer: "Decision Platforms",
      impactPillar: "Better Everyday Decisions",
    });

    expect(content.ventures.find((venture) => venture.name === "HMIOSS")).toMatchObject({
      kind: "institution",
      ecosystemLayer: "Leadership Development",
      impactPillar: "Future Leaders",
      summary: "Strategic leadership and education institution.",
      vision: expect.stringContaining("Deputy President"),
      status: "Strategic Initiative",
    });

    expect(content.careerMilestones).toHaveLength(9);
    expect(content.careerMilestones[0]).toMatchObject({
      id: expect.any(String),
      organization: "PropertyGuru Malaysia",
      period: "Career Foundation",
      role: "Business Development and Sales Leadership",
    });
    expect(content.careerMilestones[1]).toMatchObject({
      id: expect.any(String),
      organization: "Food Ink Malaysia",
      role: "Founder (2014).",
      summary: expect.stringContaining("Founded Food Ink Malaysia in 2014"),
    });
    expect(content.careerMilestones[3]).toMatchObject({
      organization: "Ratatouille Gourmet",
      role: "Co-Founder and Marketing Director.",
    });

    expect(content.awards[0]).toMatchObject({
      id: expect.any(String),
      title: expect.any(String),
      sourceUrl:
        "https://www.tclmagazine.com/ipba2020-entrepreneur-gary-giam-2/",
    });
    expect(content.awards[1]).toMatchObject({
      id: expect.any(String),
      title: "Site of The Month (January)",
      sourceUrl: "https://www.exabytes.my/blog/malaysia-website-awards-2016/",
    });
    expect(content.ventures.find((venture) => venture.name === "G-Space")).toMatchObject({
      ecosystemLayer: "Future Innovation",
      impactPillar: "Future Innovation",
      status: "Future Initiative",
    });

    expect(content.mediaItems[0]).toMatchObject({
      id: expect.any(String),
      title: "Entrepreneur of the Year",
      url: "https://www.tclmagazine.com/ipba2020-entrepreneur-gary-giam-2/",
    });

    expect(content.speakingItems[0]).toMatchObject({
      id: expect.any(String),
      title: expect.any(String),
    });

    expect(content.insightArticles[0]).toMatchObject({
      id: expect.any(String),
      slug: expect.any(String),
      title: expect.any(String),
    });

    expect(content.impactInitiatives[0]).toMatchObject({
      id: expect.any(String),
      title: expect.any(String),
    });

    expect(content.contactChannels[0]).toMatchObject({
      id: expect.any(String),
      label: expect.any(String),
      value: expect.any(String),
    });
  });

  test("matches the ContentModel type", () => {
    const typedContent: ContentModel = content;

    expect(typedContent).toBe(content);
  });
});
