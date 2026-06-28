export const homepageNarrative = {
  hero: {
    eyebrow: "GEH HEADQUARTERS",
    headline: "Architect of an entrepreneurial operating system",
    lead:
      "Most ventures can solve a problem once. Far fewer become stronger every time they do.",
    supporting:
      "Organizations often gain momentum faster than they gain strength. Growth creates complexity, dependence, and fragility faster than most systems are built to absorb it.",
    failureTitle: "Why current approaches keep falling short",
    failureLead:
      "Most company-building approaches optimize for launch, growth, or visibility. Far fewer are designed to make the organization itself stronger each time it solves a meaningful problem.",
    realitySignals: [
      "Traction often grows faster than capability.",
      "Founders remain the operating system for too long.",
      "Solving one problem rarely makes the organization stronger at solving the next.",
    ],
    primaryCta: {
      label: "Explore the GEH Ecosystem",
      href: "/companies",
      eventLabel: "Explore the GEH Ecosystem",
      eventLocation: "home_problem",
    },
    secondaryCta: {
      label: "View Proof & Authority",
      href: "/media",
      eventLabel: "View Proof & Authority",
      eventLocation: "home_problem",
    },
  },
  category: {
    eyebrow: "The Category",
    title: "GEH is an entrepreneurial operating system.",
    necessity:
      "If the real problem is organizational fragility, another founder profile, company list, or consulting label is not enough. A new category is required.",
    description:
      "GEH is that category: a repeatable system designed to help organizations become stronger, more coherent, and more capable every time they solve a meaningful problem.",
    mentalModel: [
      "Gary is not just building companies.",
      "Gary is building a system that continuously creates stronger organizations.",
      "The ventures are expressions of the operating system, not unrelated outputs.",
    ],
  },
  operatingSystem: {
    eyebrow: "The Operating System",
    title: "How GEH works differently",
    canonicalDefinition:
      "GEH is an entrepreneurial operating system: a repeatable system for building organizations that become stronger, more coherent, and more capable each time they solve a meaningful problem, rather than remaining isolated ventures dependent on one-off founder effort.",
    principles: [
      {
        title: "Systems over improvisation",
        description:
          "GEH prioritizes durable operating logic instead of relying on opportunistic execution or founder heroics.",
      },
      {
        title: "Strengthening over expansion",
        description:
          "GEH is designed to make organizations stronger, not simply larger or more numerous.",
      },
      {
        title: "Compounding over isolated wins",
        description:
          "Each solved problem should improve the capability of the organization to solve the next one.",
      },
    ],
    founderReason:
      "Gary is building GEH because his work across platforms, businesses, consulting, philanthropy, and future-oriented ventures points to one underlying thesis: stronger systems create stronger organizations, and stronger organizations create stronger long-term outcomes.",
  },
  proof: {
    eyebrow: "The Proof",
    title: "What the ventures prove about GEH",
    description:
      "The ventures matter because each one tests whether a stronger operating system can create stronger capability, clearer decisions, and more durable outcomes in a different context.",
    organizationalStrengtheningLabel: "What this proves",
    organizationProofByVentureId: {
      "belleco-skin-beaute":
        "Proves that trust, consistency, and repeatable service delivery can strengthen personal-wellbeing outcomes.",
      "celestial-yuan":
        "Proves that clearer guidance can be modernized into a more coherent and accessible operating model.",
      inkco:
        "Proves that better decisions can be systemized across everyday categories instead of solved as isolated products.",
      "isaac-g-consultancy":
        "Proves that stronger positioning and sharper systems improve business capability, not just campaign output.",
      "yayasan-txj-malaysia":
        "Proves that community impact grows stronger when initiatives are organized through sustained support systems.",
      hmioss:
        "Proves that leadership development becomes stronger when education, strategy, and community are organized institutionally.",
      "g-space":
        "Proves that future capability can be cultivated intentionally before markets fully mature.",
    } as Record<string, string>,
    authorityTitle: "What the public proof shows",
    authorityDescription:
      "Recognition, media coverage, and verified milestones matter here because they show organizational strengthening in public, not just private theory.",
  },
  future: {
    eyebrow: "The Future",
    title: "Why GEH matters now",
    description:
      "GEH matters because the long-term goal is larger than one founder site or one set of ventures. The aim is to make organizational strengthening a visible entrepreneurial discipline, so that solving a problem makes the organization stronger each time.",
    actionTitle: "What to do next",
    actions: [
      {
        label: "Understand the GEH Ecosystem",
        href: "/companies",
        eventLabel: "Understand the GEH Ecosystem",
        eventLocation: "home_future",
      },
      {
        label: "Review GEH Proof & Authority",
        href: "/media",
        eventLabel: "Review GEH Proof & Authority",
        eventLocation: "home_future",
      },
      {
        label: "Partner with GEH",
        href: "/contact",
        eventLabel: "Partner with GEH",
        eventLocation: "home_future",
      },
    ],
  },
} as const;
