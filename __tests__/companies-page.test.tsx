import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import CompaniesPage from "@/app/companies/page";

test("renders the ecosystem index grouped by strategic layer", () => {
  render(<CompaniesPage />);

  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "The ecosystem Gary Giam is building",
    })
  ).toBeDefined();
  expect(
    screen.getByRole("heading", { level: 2, name: "Personal Wellbeing" })
  ).toBeDefined();
  expect(
    screen.getByRole("heading", { level: 2, name: "Decision Platforms" })
  ).toBeDefined();
  expect(
    screen.getByRole("heading", { level: 2, name: "Business Growth" })
  ).toBeDefined();
  expect(
    screen.getByRole("heading", { level: 2, name: "Community Impact" })
  ).toBeDefined();
  expect(
    screen.getByRole("heading", { level: 2, name: "Leadership Development" })
  ).toBeDefined();
  expect(
    screen.getByRole("heading", { level: 2, name: "Future Innovation" })
  ).toBeDefined();
  expect(screen.getByText("Inkco")).toBeDefined();
  expect(screen.getByText("Food Ink")).toBeDefined();
  expect(screen.getByText("Travel Ink")).toBeDefined();
  expect(screen.getByText("HMIOSS")).toBeDefined();
  expect(screen.getAllByText("Strategic Initiative").length).toBeGreaterThan(0);
  expect(screen.getAllByText("Future Initiative").length).toBeGreaterThan(0);
});
