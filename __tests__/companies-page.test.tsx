import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import CompaniesPage from "@/app/companies/page";
import { content } from "@/src/content";

test("renders the ecosystem portfolio with category and vision details", () => {
  render(<CompaniesPage />);

  expect(
    screen.getByRole("heading", { level: 1, name: "What Gary Giam is building" })
  ).toBeDefined();

  for (const venture of content.ventures) {
    expect(screen.getByText(venture.name)).toBeDefined();
    expect(screen.getAllByText(venture.category ?? "").length).toBeGreaterThan(0);
    expect(screen.getByText(venture.vision ?? "")).toBeDefined();
  }

  expect(screen.getAllByText("Metaphysics").length).toBeGreaterThan(0);
  expect(screen.getByText("Celestial Yuan")).toBeDefined();
  expect(screen.getAllByText("Space & Future Industries").length).toBeGreaterThan(0);
  expect(screen.getByText("G-Space")).toBeDefined();
});
