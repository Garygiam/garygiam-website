export type Award = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  summary?: string;
  sourceUrl?: string;
  sourceLabel?: string;
  assetLabels?: string[];
};
