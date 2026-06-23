import type { Venture } from "@/src/content";

const LAYER_ORDER: Venture["ecosystemLayer"][] = [
  "Personal Wellbeing",
  "Decision Platforms",
  "Business Growth",
  "Community Impact",
  "Leadership Development",
  "Future Innovation",
];

export function getTopLevelEcosystemEntities(ventures: Venture[]) {
  return ventures.filter((venture) => !venture.parentId);
}

export function getEcosystemChildren(ventures: Venture[], parentId: string) {
  return ventures.filter((venture) => venture.parentId === parentId);
}

export function getEcosystemLayers(ventures: Venture[]) {
  const topLevel = getTopLevelEcosystemEntities(ventures);

  return LAYER_ORDER.map((title) => ({
    title,
    entities: topLevel.filter((venture) => venture.ecosystemLayer === title),
  })).filter((layer) => layer.entities.length > 0);
}
