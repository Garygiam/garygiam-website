import type { MetadataRoute } from "next";

import {
  MVP_LAUNCH_PATHS,
  MVP_LAST_MODIFIED,
  buildAbsoluteUrl,
} from "@/src/seo/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  return MVP_LAUNCH_PATHS.map((path) => ({
    url: buildAbsoluteUrl(path),
    lastModified: MVP_LAST_MODIFIED,
  }));
}
