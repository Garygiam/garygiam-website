import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import Page from "@/app/page";

test("passes the PB13.1 homepage inevitability and proof checklist", () => {
  render(<Page />);

  expect(
    screen.getByText(
      "Organizations often gain momentum faster than they gain strength. Growth creates complexity, dependence, and fragility faster than most systems are built to absorb it."
    )
  ).toBeDefined();
  expect(
    screen.getByText(
      "Most company-building approaches optimize for launch, growth, or visibility. Far fewer are designed to make the organization itself stronger each time it solves a meaningful problem."
    )
  ).toBeDefined();
  expect(
    screen.getByText(
      "If the real problem is organizational fragility, another founder profile, company list, or consulting label is not enough. A new category is required."
    )
  ).toBeDefined();

  expect(
    screen.getByText("GEH is an entrepreneurial operating system.")
  ).toBeDefined();
  expect(
    screen.getByText("What the ventures prove about GEH")
  ).toBeDefined();
  expect(
    screen.getByText(
      "Proves that community impact grows stronger when initiatives are organized through sustained support systems."
    )
  ).toBeDefined();
  expect(
    screen.getByText(
      "Shows that organizational responsiveness can be strengthened fast enough to serve people under real constraints."
    )
  ).toBeDefined();
  expect(screen.getByText("Why GEH matters now")).toBeDefined();
  expect(screen.getByRole("link", { name: "Partner with GEH" })).toBeDefined();
  expect(screen.queryByText("Building Across Industries. Driven By One Mission.")).toBeNull();
});
