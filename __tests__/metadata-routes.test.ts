import { describe, expect, test } from "vitest";

import robots from "@/app/robots";
import sitemap from "@/app/sitemap";

describe("metadata routes", () => {
  test("allows public crawling and points to the sitemap", () => {
    expect(robots()).toEqual({
      rules: {
        userAgent: "*",
        allow: "/",
      },
      sitemap: "https://garygiam.com/sitemap.xml",
    });
  });

  test("returns only the approved MVP launch routes", () => {
    expect(sitemap()).toEqual([
      {
        url: "https://garygiam.com",
        lastModified: "2026-06-20",
      },
      {
        url: "https://garygiam.com/about",
        lastModified: "2026-06-20",
      },
      {
        url: "https://garygiam.com/companies",
        lastModified: "2026-06-20",
      },
      {
        url: "https://garygiam.com/media",
        lastModified: "2026-06-20",
      },
      {
        url: "https://garygiam.com/insights",
        lastModified: "2026-06-20",
      },
      {
        url: "https://garygiam.com/impact",
        lastModified: "2026-06-20",
      },
      {
        url: "https://garygiam.com/contact",
        lastModified: "2026-06-20",
      },
    ]);
  });
});
