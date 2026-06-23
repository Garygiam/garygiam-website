import { describe, expect, test } from "vitest";

import { content } from "@/src/content";
import {
  getEcosystemChildren,
  getEcosystemLayers,
  getTopLevelEcosystemEntities,
} from "@/src/lib/ecosystem";

describe("ecosystem helpers", () => {
  test("returns top-level entities without child pillars", () => {
    const entities = getTopLevelEcosystemEntities(content.ventures);

    expect(entities.map((entity) => entity.name)).toEqual([
      "Belleco Skin Beaute",
      "Celestial Yuan",
      "Inkco",
      "Isaac G Consultancy",
      "Yayasan TXJ Malaysia",
      "HMIOSS",
      "G-Space",
    ]);
  });

  test("returns Inkco child pillars in content order", () => {
    const inkco = content.ventures.find((venture) => venture.id === "inkco");

    expect(inkco).toBeDefined();
    expect(
      getEcosystemChildren(content.ventures, "inkco").map((entity) => entity.name)
    ).toEqual(["Food Ink", "Beauty Ink", "Drive Ink", "Stay Ink", "Travel Ink"]);
  });

  test("groups top-level entities by ecosystem layer", () => {
    const layers = getEcosystemLayers(content.ventures);

    expect(layers.map((layer) => layer.title)).toEqual([
      "Personal Wellbeing",
      "Decision Platforms",
      "Business Growth",
      "Community Impact",
      "Leadership Development",
      "Future Innovation",
    ]);
  });
});
