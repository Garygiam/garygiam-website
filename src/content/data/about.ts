import type { AboutOriginNarrative } from "../types/about-origin";

export const aboutOriginNarrative: AboutOriginNarrative = {
  question: {
    eyebrow: "About GEH",
    title: "Why GEH came into existence",
    prompt: "Why do so many organizations struggle to become stronger over time?",
    lead:
      "The answer did not emerge from one role, one company, or one industry. It emerged because the same organizational pattern kept appearing in different forms.",
  },
  search: {
    eyebrow: "The Search",
    title: "The same pattern kept appearing",
    lead:
      "Across different industries, different organizations, and different roles, the same pattern kept appearing: progress did not automatically create stronger organizations.",
    emotionalLayer:
      "He did not set out to build GEH from day one. The same organizational problem kept reappearing until it became impossible to ignore.",
  },
  discovery: {
    eyebrow: "The Discovery",
    title: "What the journey revealed",
    lead:
      "Each chapter matters here not as an achievement list, but as evidence of an organizational lesson that was still incomplete on its own.",
    chapters: [
      {
        id: "propertyguru",
        title: "PropertyGuru Malaysia",
        roleLabel: "Career Foundation",
        whatHappened:
          "Built experience in sales management, business development, revenue growth, team leadership, and market expansion.",
        organizationalPrinciple:
          "Growth alone does not create organizational strength.",
        whyNotEnough:
          "Commercial progress still depended on structures that did not automatically make the organization stronger over time.",
      },
      {
        id: "food-ink",
        title: "Food Ink Malaysia",
        roleLabel: "Founder Origin",
        whatHappened:
          "Founded an early food discovery and restaurant marketing platform that grew into a recognized community and later received Malaysia Website Awards 2016 Site of The Month (January).",
        organizationalPrinciple: "Platforms need resilient operating systems.",
        whyNotEnough:
          "Platform traction still exposed dependency on technology, control, and deeper operating resilience.",
      },
      {
        id: "technology-conflict",
        title: "Technology Conflict",
        roleLabel: "System Ownership",
        whatHappened:
          "The limits of platform-building became clearer when technology dependence and control questions affected durability.",
        organizationalPrinciple:
          "Control of knowledge and technology matters when building durable organizations.",
        whyNotEnough:
          "Ownership alone still did not solve the broader problem of organizational fragility across different contexts.",
      },
      {
        id: "ratatouille",
        title: "Ratatouille Gourmet",
        roleLabel: "Scaling Chapter",
        whatHappened:
          "Helped scale a small operation into a multi-outlet F&B group and received International Prestige Brand Awards 2020 Entrepreneur of the Year.",
        organizationalPrinciple: "Scaling exposes system weaknesses.",
        whyNotEnough:
          "Operational growth revealed that expansion does not guarantee stronger capability unless the system itself compounds.",
      },
      {
        id: "consulting",
        title: "Isaac G Consultancy",
        roleLabel: "Cross-Industry Pattern",
        whatHappened:
          "Worked with businesses across contexts through branding, business growth, and strategic execution.",
        organizationalPrinciple:
          "The same organizational problems repeat across industries.",
        whyNotEnough:
          "Pattern recognition clarified the problem, but the problem still needed a repeatable system-level response rather than isolated advisory work.",
      },
      {
        id: "impact-and-education",
        title: "Impact, Education, and Future Ventures",
        roleLabel: "Beyond Business",
        whatHappened:
          "Expanded into charity, education, wellbeing, technology, and future-oriented ventures where the same strengthening questions continued to appear.",
        organizationalPrinciple:
          "The same strengthening principles apply beyond business.",
        whyNotEnough:
          "At that point, the recurring lesson was larger than any one venture, role, or institution. It required its own operating-system frame.",
      },
    ],
  },
  modelGap: {
    eyebrow: "Why Existing Models Were Not Enough",
    title: "Why existing models were not enough",
    lead:
      "GEH did not emerge because consulting, branding, incubators, charities, or education were wrong. It emerged because they solved different problems.",
    models: [
      { name: "Consulting", focus: "Improves businesses" },
      { name: "Incubators", focus: "Launch startups" },
      { name: "Branding", focus: "Builds perception" },
      { name: "Accelerators", focus: "Increase growth" },
      { name: "Charities", focus: "Create impact" },
      { name: "Education", focus: "Develop people" },
    ],
  },
  conclusion: {
    eyebrow: "The Inevitable Conclusion",
    title: "Why GEH became inevitable",
    lead:
      "GEH became necessary because no existing model continuously strengthened organizations across all of those contexts.",
  },
  future: {
    eyebrow: "The Mission Continues",
    title: "The mission continues",
    lead:
      "GEH exists so future organizations do not have to learn those lessons the hard way.",
    bridgeCta: {
      label: "See GEH in practice",
      href: "/companies",
    },
  },
};
