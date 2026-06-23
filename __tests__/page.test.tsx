import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import Page from "@/app/page";

test("renders the ecosystem-led homepage story and proof section", () => {
  render(<Page />);

  expect(screen.getByText("ENTREPRENEUR & ECOSYSTEM BUILDER")).toBeDefined();
  expect(
    screen.getByRole("heading", { level: 1, name: "Gary Giam" })
  ).toBeDefined();
  expect(
    screen.getByText(
      "Entrepreneur | Venture Builder | Ecosystem Architect"
    )
  ).toBeDefined();
  expect(
    screen.getByText(
      "Building an interconnected ecosystem spanning wellness, consulting, philanthropy, technology, and future industries — designed to create long-term value, impact, and innovation."
    )
  ).toBeDefined();
  expect(screen.getByText("7 Ecosystem Entities")).toBeDefined();
  expect(screen.getByAltText("Portrait of Gary Giam")).toBeDefined();
  expect(
    screen.queryByText(
      "Recipient of International Prestige Brand Awards 2020 Entrepreneur of the Year."
    )
  ).toBeNull();
  expect(
    screen.getByRole("link", { name: "Explore Companies" }).getAttribute("href")
  ).toBe("/companies");
  expect(
    screen.getByRole("link", { name: "About Gary" }).getAttribute("href")
  ).toBe("/about");
  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "Building Across Industries. Driven By One Mission.",
    })
  ).toBeDefined();
  expect(
    screen.getByText(
      "Gary Giam is building an ecosystem of businesses, institutions and initiatives that help people make better decisions, improve their lives and create opportunities for future generations."
    )
  ).toBeDefined();
  expect(screen.getByText("Better Everyday Decisions")).toBeDefined();
  expect(screen.getAllByText("Inkco").length).toBeGreaterThan(0);
  expect(screen.getAllByText("Food Ink").length).toBeGreaterThan(0);
  expect(screen.getByText("HMIOSS")).toBeDefined();
  expect(screen.getByText("Future Innovation")).toBeDefined();
  expect(
    screen.getByRole("heading", { level: 2, name: "Why I Build" })
  ).toBeDefined();
  expect(
    screen.getByText("The goal was never simply to build companies.")
  ).toBeDefined();
  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "Recognition & Impact",
    })
  ).toBeDefined();
  expect(
    screen
      .getByRole("link", { name: "Explore the Full Journey" })
      .getAttribute("href")
  ).toBe("/about");
  expect(
    screen.getByRole("link", { name: "Contact Gary" }).getAttribute("href")
  ).toBe("mailto:hello@garygiam.com");
});
