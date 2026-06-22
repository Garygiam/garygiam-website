import { readFileSync } from "node:fs";
import path from "node:path";

import { expect, test } from "vitest";

test("exports the GG monogram favicon source signature", () => {
  const svg = readFileSync(
    path.join(process.cwd(), "src/assets/founder-favicon.svg"),
    "utf8"
  );

  expect(svg).toContain('id="gg-monogram"');
});
