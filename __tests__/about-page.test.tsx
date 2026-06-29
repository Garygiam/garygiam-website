import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import AboutPage from "@/app/about/page";

test("renders the about page as the origin story of GEH", () => {
  render(<AboutPage />);

  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "Why GEH came into existence",
    })
  ).toBeDefined();
  expect(
    screen.getByText(
      "Why do so many organizations struggle to become stronger over time?"
    )
  ).toBeDefined();
  expect(
    screen.getByText(
      "He did not set out to build GEH from day one. The same organizational problem kept reappearing until it became impossible to ignore."
    )
  ).toBeDefined();

  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "The same pattern kept appearing",
    })
  ).toBeDefined();
  expect(
    screen.getByText(
      "Across different industries, different organizations, and different roles, the same pattern kept appearing: progress did not automatically create stronger organizations."
    )
  ).toBeDefined();

  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "What the journey revealed",
    })
  ).toBeDefined();
  expect(screen.getByText("PropertyGuru Malaysia")).toBeDefined();
  expect(
    screen.getByText("Growth alone does not create organizational strength.")
  ).toBeDefined();
  expect(screen.getByText("Food Ink Malaysia")).toBeDefined();
  expect(
    screen.getByText("Platforms need resilient operating systems.")
  ).toBeDefined();
  expect(screen.getByText("Isaac G Consultancy")).toBeDefined();
  expect(
    screen.getByText("The same organizational problems repeat across industries.")
  ).toBeDefined();

  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "Why existing models were not enough",
    })
  ).toBeDefined();
  expect(
    screen.getByText(
      "GEH did not emerge because consulting, branding, incubators, charities, or education were wrong. It emerged because they solved different problems."
    )
  ).toBeDefined();

  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "Why GEH became inevitable",
    })
  ).toBeDefined();
  expect(
    screen.getByText(
      "GEH became necessary because no existing model continuously strengthened organizations across all of those contexts."
    )
  ).toBeDefined();

  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "The mission continues",
    })
  ).toBeDefined();
  expect(
    screen.getByText(
      "GEH exists so future organizations do not have to learn those lessons the hard way."
    )
  ).toBeDefined();
  expect(
    screen.getByRole("link", { name: "See GEH in practice" }).getAttribute("href")
  ).toBe("/companies");

  expect(
    screen.queryByRole("heading", {
      level: 1,
      name: "How Gary Giam got here",
    })
  ).toBeNull();
});
