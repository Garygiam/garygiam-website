import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import Page from "@/app/page";

test("renders the PB13.1 homepage so GEH feels like the logical conclusion", () => {
  render(<Page />);

  expect(screen.getByRole("heading", { level: 1, name: "Gary Giam" })).toBeDefined();
  expect(screen.getByText("GEH HEADQUARTERS")).toBeDefined();
  expect(
    screen.getByText("Architect of an entrepreneurial operating system")
  ).toBeDefined();

  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "Most ventures can solve a problem once. Far fewer become stronger every time they do.",
    })
  ).toBeDefined();
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
    screen.getByRole("heading", {
      level: 2,
      name: "GEH is an entrepreneurial operating system.",
    })
  ).toBeDefined();
  expect(
    screen.getByText(
      "If the real problem is organizational fragility, another founder profile, company list, or consulting label is not enough. A new category is required."
    )
  ).toBeDefined();
  expect(
    screen.getByText(
      "GEH is that category: a repeatable system designed to help organizations become stronger, more coherent, and more capable every time they solve a meaningful problem."
    )
  ).toBeDefined();

  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "How GEH works differently",
    })
  ).toBeDefined();
  expect(
    screen.getByText(
      "GEH is an entrepreneurial operating system: a repeatable system for building organizations that become stronger, more coherent, and more capable each time they solve a meaningful problem, rather than remaining isolated ventures dependent on one-off founder effort."
    )
  ).toBeDefined();

  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "What the ventures prove about GEH",
    })
  ).toBeDefined();
  expect(
    screen.getByText(
      "The ventures matter because each one tests whether a stronger operating system can create stronger capability, clearer decisions, and more durable outcomes in a different context."
    )
  ).toBeDefined();
  expect(
    screen.getByText(
      "Proves that stronger positioning and sharper systems improve business capability, not just campaign output."
    )
  ).toBeDefined();
  expect(
    screen.getByText(
      "Proves that leadership development becomes stronger when education, strategy, and community are organized institutionally."
    )
  ).toBeDefined();
  expect(
    screen.getByText(
      "Food Ink Malaysia turned early platform traction into recognized community capability"
    )
  ).toBeDefined();
  expect(
    screen.getByText(
      "Barn Farmer converted restaurant disruption into community-support delivery under MCO"
    )
  ).toBeDefined();

  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "Why GEH matters now",
    })
  ).toBeDefined();
  expect(
    screen.getByRole("link", { name: "Partner with GEH" }).getAttribute("href")
  ).toBe("/contact");
});
