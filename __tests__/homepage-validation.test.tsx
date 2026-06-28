import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import Page from "@/app/page";

test("passes the PB13 homepage acceptance checklist", () => {
  render(<Page />);

  expect(
    screen.getByText(
      "GEH exists to solve a recurring organizational problem: promising ventures often build momentum without building the systems, coherence, and strength required to compound over time."
    )
  ).toBeDefined();

  expect(
    screen.getByText("GEH is an entrepreneurial operating system.")
  ).toBeDefined();

  expect(
    screen.getByText(
      "GEH is an entrepreneurial operating system: a repeatable system for building organizations that become stronger, more coherent, and more capable each time they solve a meaningful problem, rather than remaining isolated ventures dependent on one-off founder effort."
    )
  ).toBeDefined();

  expect(screen.getAllByText("Inkco").length).toBeGreaterThan(0);
  expect(screen.getByText("The Star")).toBeDefined();

  expect(screen.getByText("Why GEH matters now")).toBeDefined();

  expect(screen.getByRole("link", { name: "Partner with GEH" })).toBeDefined();

  expect(screen.queryByText("ENTREPRENEUR & ECOSYSTEM BUILDER")).toBeNull();
});
