import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import {
  buildHomepageJsonLd,
  buildRootMetadata,
} from "@/src/seo/metadata";
import { SiteShell } from "@/src/components/site-shell";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = buildRootMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const homepageJsonLd = JSON.stringify(buildHomepageJsonLd());

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-zinc-950">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: homepageJsonLd }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
      <GoogleAnalytics gaId="G-9GWPP5TZEF" />
    </html>
  );
}
