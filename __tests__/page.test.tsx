import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import Page from "@/app/page";

test("renders the PB13 homepage as the public headquarters of GEH", () => {
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
      "GEH exists to solve a recurring organizational problem: promising ventures often build momentum without building the systems, coherence, and strength required to compound over time."
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
      "It is the category for a repeatable system designed to help organizations become stronger, more coherent, and more capable every time they solve a meaningful problem."
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
      name: "The ventures exist to validate the system",
    })
  ).toBeDefined();
  expect(screen.getAllByText("Inkco").length).toBeGreaterThan(0);
  expect(screen.getByText("HMIOSS")).toBeDefined();
  expect(screen.getByText("The Star")).toBeDefined();

  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "Why GEH matters now",
    })
  ).toBeDefined();
  expect(
    screen.getByRole("link", { name: "Explore the GEH Ecosystem" }).getAttribute("href")
  ).toBe("/companies");
  expect(
    screen.getByRole("link", { name: "View Proof & Authority" }).getAttribute("href")
  ).toBe("/media");
  expect(
    screen.getByRole("link", { name: "Partner with GEH" }).getAttribute("href")
  ).toBe("/contact");

  expect(
    screen.queryByRole("heading", {
      level: 2,
      name: "Building Across Industries. Driven By One Mission.",
    })
  ).toBeNull();
  expect(screen.queryByRole("heading", { level: 2, name: "Why I Build" })).toBeNull();
});
