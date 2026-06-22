import { existsSync } from "node:fs";
import path from "node:path";

import { describe, expect, test } from "vitest";

import {
  MVP_LAUNCH_PATHS,
  SITE_ORIGIN,
  buildHomepageJsonLd,
  buildRootMetadata,
} from "@/src/seo/metadata";

describe("launch-page metadata", () => {
  test("normalizes the site origin and fixed MVP launch paths", () => {
    expect(SITE_ORIGIN).toBe("https://garygiam.com");
    expect(MVP_LAUNCH_PATHS).toEqual([
      "/",
      "/about",
      "/companies",
      "/media",
      "/insights",
      "/impact",
      "/contact",
    ]);
  });

  test("builds lightweight homepage schema graph", () => {
    expect(buildHomepageJsonLd()).toEqual(
      expect.objectContaining({
        "@context": "https://schema.org",
        "@graph": expect.arrayContaining([
          expect.objectContaining({
            "@type": "WebSite",
            name: "Gary Giam",
            url: "https://garygiam.com",
          }),
          expect.objectContaining({
            "@type": "Person",
            name: "Gary Giam",
            jobTitle:
              "Digital Platform Builder | Brand Strategist | Venture Builder | Ecosystem Architect",
            url: "https://garygiam.com",
          }),
        ]),
      })
    );
  });

  test("exports root metadata for the MVP launch page", () => {
    const metadata = buildRootMetadata();

    expect(metadata.title).toBe("Gary Giam | Digital Headquarters");
    expect(metadata.description).toBe(
      "Official digital headquarters for Gary Giam, connecting confirmed ventures, recognition, impact, and contact channels."
    );
    expect(metadata.metadataBase?.toString()).toBe("https://garygiam.com/");
    expect(metadata.alternates?.canonical).toBe("/");
  });

  test("declares founder favicon metadata and generated assets", () => {
    const metadata = buildRootMetadata();
    const icons = metadata.icons;

    expect(icons).toEqual({
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    });

    expect(existsSync(path.join(process.cwd(), "app/favicon.ico"))).toBe(true);
    expect(existsSync(path.join(process.cwd(), "public/favicon-32x32.png"))).toBe(
      true
    );
    expect(existsSync(path.join(process.cwd(), "public/favicon-16x16.png"))).toBe(
      true
    );
    expect(
      existsSync(path.join(process.cwd(), "public/apple-touch-icon.png"))
    ).toBe(true);
  });

  test("serializes JSON-LD for layout injection", () => {
    const jsonLd = JSON.stringify(buildHomepageJsonLd());

    expect(jsonLd).toContain('"@context":"https://schema.org"');
    expect(jsonLd).toContain('"@type":"WebSite"');
    expect(jsonLd).toContain('"@type":"Person"');
    expect(jsonLd).toContain('"Gary Giam"');
  });
});
