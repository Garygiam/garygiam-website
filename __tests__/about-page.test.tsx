import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import AboutPage from "@/app/about/page";

test("renders the about page as the full founder journey narrative", () => {
  render(<AboutPage />);

  expect(
    screen.getByRole("heading", { level: 1, name: "How Gary Giam got here" })
  ).toBeDefined();
  expect(
    screen.getByText(
      "From building digital platforms and brands to developing ventures across wellness, consulting, philanthropy, technology and future industries, Gary Giam continues to build interconnected businesses designed for long-term value and impact."
    )
  ).toBeDefined();
  expect(
    screen.getByText(
      "Business Development and Sales Leadership"
    )
  ).toBeDefined();
  expect(
    screen.getByText(
      "Developed experience in sales management, business development, revenue growth, team leadership, and market expansion."
    )
  ).toBeDefined();
  expect(screen.getByText("Food Ink Malaysia")).toBeDefined();
  expect(screen.getByText("Founder (2014).")).toBeDefined();
  expect(
    screen.getByText(/Founded Food Ink Malaysia in 2014/)
  ).toBeDefined();
  expect(screen.getByText("PropertyGuru Malaysia")).toBeDefined();
  expect(screen.getByText("Isaac G Consultancy")).toBeDefined();
  expect(screen.getByText("Ratatouille Gourmet")).toBeDefined();
  expect(screen.getByText("Co-Founder and Marketing Director.")).toBeDefined();
  expect(screen.getByText("Belleco Skin Beaute")).toBeDefined();
  expect(screen.getByText("Celestial Yuan")).toBeDefined();
  expect(screen.getByText("PropertyGuru Malaysia")).toBeDefined();
  expect(screen.getByText("Yayasan TXJ Malaysia")).toBeDefined();
  expect(screen.getByText("Inkco")).toBeDefined();
  expect(screen.getByText("G-Space")).toBeDefined();
  expect(screen.getByText("Digital Platform Builder | Brand Strategist | Venture Builder | Ecosystem Architect")).toBeDefined();

  const propertyGuruHeading = screen.getByRole("heading", {
    level: 3,
    name: "PropertyGuru Malaysia",
  });
  const foodInkHeading = screen.getByRole("heading", {
    level: 3,
    name: "Food Ink Malaysia",
  });

  expect(
    propertyGuruHeading.compareDocumentPosition(foodInkHeading) &
      Node.DOCUMENT_POSITION_FOLLOWING
  ).toBeTruthy();
});
