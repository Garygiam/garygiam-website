export type AboutOriginChapter = {
  id: string;
  title: string;
  roleLabel: string;
  whatHappened: string;
  organizationalPrinciple: string;
  whyNotEnough: string;
};

export type AboutModelGapItem = {
  name: string;
  focus: string;
};

export type AboutOriginNarrative = {
  question: {
    eyebrow: string;
    title: string;
    prompt: string;
    lead: string;
  };
  search: {
    eyebrow: string;
    title: string;
    lead: string;
    emotionalLayer: string;
  };
  discovery: {
    eyebrow: string;
    title: string;
    lead: string;
    chapters: AboutOriginChapter[];
  };
  modelGap: {
    eyebrow: string;
    title: string;
    lead: string;
    models: AboutModelGapItem[];
  };
  conclusion: {
    eyebrow: string;
    title: string;
    lead: string;
  };
  future: {
    eyebrow: string;
    title: string;
    lead: string;
    bridgeCta: {
      label: string;
      href: string;
    };
  };
};
