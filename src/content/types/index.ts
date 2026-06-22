export type { Site } from "./site";
export type { Person } from "./person";
export type { Venture } from "./ventures";
export type { CareerMilestone } from "./career-milestones";
export type { Award } from "./awards";
export type { MediaItem } from "./media-items";
export type { SpeakingItem } from "./speaking-items";
export type { InsightArticle } from "./insight-articles";
export type { ImpactInitiative } from "./impact-initiatives";
export type { ContactChannel } from "./contact-channels";
export type { Seo } from "./seo";

import type { Award } from "./awards";
import type { CareerMilestone } from "./career-milestones";
import type { ContactChannel } from "./contact-channels";
import type { ImpactInitiative } from "./impact-initiatives";
import type { InsightArticle } from "./insight-articles";
import type { MediaItem } from "./media-items";
import type { Person } from "./person";
import type { Seo } from "./seo";
import type { Site } from "./site";
import type { SpeakingItem } from "./speaking-items";
import type { Venture } from "./ventures";

export type ContentModel = {
  site: Site;
  person: Person;
  ventures: Venture[];
  careerMilestones: CareerMilestone[];
  awards: Award[];
  mediaItems: MediaItem[];
  speakingItems: SpeakingItem[];
  insightArticles: InsightArticle[];
  impactInitiatives: ImpactInitiative[];
  contactChannels: ContactChannel[];
  seo: Seo;
};
