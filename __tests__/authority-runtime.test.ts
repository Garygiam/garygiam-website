import { expect, test } from "vitest";

import { getFeaturedAuthorityAwards } from "@/src/content/authority/runtime";

test("builds the launch awards from the authority vault in the intended runtime order", () => {
  expect(getFeaturedAuthorityAwards()).toEqual([
    expect.objectContaining({
      id: "international-prestige-brand-awards-2020-entrepreneur-of-the-year",
      title: "Entrepreneur of the Year",
      issuer: "International Prestige Brand Awards",
      sourceLabel: "TCL Magazine",
    }),
    expect.objectContaining({
      id: "malaysia-website-awards-2016-site-of-the-month",
      title: "Site of The Month (January)",
      issuer: "Malaysia Website Awards",
      sourceLabel: "Exabytes Malaysia",
    }),
  ]);
});
