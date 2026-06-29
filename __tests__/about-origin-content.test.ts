import { expect, test } from "vitest";

import { aboutOriginNarrative } from "@/src/content/data/about";

test("defines the PB13.2 about narrative as a chain of inevitability", () => {
  expect(aboutOriginNarrative.question.title).toBe(
    "Why GEH came into existence"
  );
  expect(aboutOriginNarrative.question.prompt).toBe(
    "Why do so many organizations struggle to become stronger over time?"
  );
  expect(aboutOriginNarrative.search.emotionalLayer).toBe(
    "He did not set out to build GEH from day one. The same organizational problem kept reappearing until it became impossible to ignore."
  );

  expect(aboutOriginNarrative.discovery.chapters).toHaveLength(6);
  expect(aboutOriginNarrative.discovery.chapters[0]).toMatchObject({
    title: "PropertyGuru Malaysia",
    whatHappened: expect.stringContaining("sales management"),
    organizationalPrinciple:
      "Growth alone does not create organizational strength.",
    whyNotEnough:
      "Commercial progress still depended on structures that did not automatically make the organization stronger over time.",
  });
  expect(aboutOriginNarrative.discovery.chapters[1]).toMatchObject({
    title: "Food Ink Malaysia",
    organizationalPrinciple: "Platforms need resilient operating systems.",
    whyNotEnough:
      "Platform traction still exposed dependency on technology, control, and deeper operating resilience.",
  });
  expect(aboutOriginNarrative.discovery.chapters[4]).toMatchObject({
    title: "Isaac G Consultancy",
    organizationalPrinciple:
      "The same organizational problems repeat across industries.",
  });

  expect(aboutOriginNarrative.modelGap.models).toEqual([
    expect.objectContaining({
      name: "Consulting",
      focus: "Improves businesses",
    }),
    expect.objectContaining({
      name: "Incubators",
      focus: "Launch startups",
    }),
    expect.objectContaining({
      name: "Branding",
      focus: "Builds perception",
    }),
    expect.objectContaining({
      name: "Accelerators",
      focus: "Increase growth",
    }),
    expect.objectContaining({
      name: "Charities",
      focus: "Create impact",
    }),
    expect.objectContaining({
      name: "Education",
      focus: "Develop people",
    }),
  ]);

  expect(aboutOriginNarrative.future.bridgeCta).toEqual({
    label: "See GEH in practice",
    href: "/companies",
  });
});
