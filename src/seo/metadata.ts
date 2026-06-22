import type { Metadata } from "next";

import { content } from "@/src/content";

export const SITE_ORIGIN = new URL(content.seo.canonicalUrl).origin;

export const MVP_LAUNCH_PATHS = [
  "/",
  "/about",
  "/companies",
  "/media",
  "/insights",
  "/impact",
  "/contact",
] as const;

export const MVP_LAST_MODIFIED = "2026-06-20";

export function buildAbsoluteUrl(path: string): string {
  return path === "/" ? SITE_ORIGIN : `${SITE_ORIGIN}${path}`;
}

export function buildRootMetadata(): Metadata {
  const { seo, site } = content;

  return {
    metadataBase: new URL(SITE_ORIGIN),
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: "/",
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
    openGraph: {
      type: "website",
      url: SITE_ORIGIN,
      title: seo.title,
      description: seo.description,
      siteName: site.name,
      ...(seo.openGraphImage ? { images: [seo.openGraphImage] } : {}),
    },
    twitter: {
      card: seo.openGraphImage ? "summary_large_image" : "summary",
      title: seo.title,
      description: seo.description,
      ...(seo.openGraphImage ? { images: [seo.openGraphImage] } : {}),
    },
  };
}

type JsonLdGraph = {
  "@context": "https://schema.org";
  "@graph": Array<Record<string, unknown>>;
};

export function buildHomepageJsonLd(): JsonLdGraph {
  const socialUrls = content.contactChannels
    .map((channel) => channel.url)
    .filter((url): url is string => Boolean(url));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_ORIGIN}#website`,
        name: content.site.name,
        url: SITE_ORIGIN,
        description: content.seo.description,
        inLanguage: content.site.defaultLocale ?? "en",
      },
      {
        "@type": "Person",
        "@id": `${SITE_ORIGIN}#person`,
        name: content.person.name,
        url: SITE_ORIGIN,
        description: content.person.summary,
        jobTitle: content.person.role,
        ...(socialUrls.length > 0 ? { sameAs: socialUrls } : {}),
      },
    ],
  };
}
