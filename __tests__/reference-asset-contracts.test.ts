import { existsSync } from "node:fs";
import path from "node:path";

import { expect, test } from "vitest";

import { content } from "@/src/content";
import { resolvePortraitSource } from "@/src/lib/portrait";
import { buildRootMetadata } from "@/src/seo/metadata";

test("keeps the configured portrait contract truthful for the benchmark repo", () => {
  expect(content.person.portraitPath).toBe("/images/gary-giam-portrait.jpg");
  expect(resolvePortraitSource(content.person.portraitPath!)).toBe(
    "/images/gary-giam-portrait.jpg"
  );
  expect(
    existsSync(path.join(process.cwd(), "public/images/gary-giam-portrait.jpg"))
  ).toBe(true);
});

test("does not declare a missing open graph image asset", () => {
  const metadata = buildRootMetadata();

  expect(metadata.openGraph?.images).toBeUndefined();
  expect(metadata.twitter?.images).toBeUndefined();
});
