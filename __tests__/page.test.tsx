import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import Page from "@/app/page";

test("renders the authority home page narrative and calls to action", () => {
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
  expect(
    screen.getByText(
      "A portfolio of ventures spanning wellness, consulting, philanthropy, technology, and future industries, united by a shared focus on growth, innovation, and long-term impact."
    )
  ).toBeDefined();
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
    screen.getByRole("heading", { level: 2, name: "Building Across Industries" })
  ).toBeDefined();
  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "Verified recognition",
    })
  ).toBeDefined();
  expect(screen.getByText("Entrepreneur of the Year")).toBeDefined();
  expect(screen.getByText("Malaysia Website Awards 2016")).toBeDefined();
  expect(screen.getByText("Site of The Month (January)")).toBeDefined();
  expect(
    screen
      .getByRole("link", { name: "View All Recognition" })
      .getAttribute("href")
  ).toBe("/media");
  expect(screen.getByText("Founded Food Ink in 2014")).toBeDefined();
  expect(screen.getByText("6 Ventures")).toBeDefined();
  expect(screen.getByText("2 Verified Recognitions")).toBeDefined();
  expect(screen.getByText("10+ Years Building Businesses")).toBeDefined();
  expect(screen.getByText("Small Knife Cut Big Tree")).toBeDefined();
  expect(screen.getByText("PropertyGuru Malaysia")).toBeDefined();
  expect(screen.getByText("Food Ink")).toBeDefined();
  expect(screen.getAllByText("Isaac G Consultancy").length).toBeGreaterThan(0);
  expect(screen.getAllByText("Belleco Skin Beaute").length).toBeGreaterThan(0);
  expect(screen.getAllByText("Yayasan TXJ Malaysia").length).toBeGreaterThan(0);
  expect(screen.getAllByText("Inkco").length).toBeGreaterThan(0);
  const propertyGuruPreview = screen.getByText("PropertyGuru Malaysia");
  const foodInkPreview = screen.getByText("Food Ink");
  expect(
    propertyGuruPreview.compareDocumentPosition(foodInkPreview) &
      Node.DOCUMENT_POSITION_FOLLOWING
  ).toBeTruthy();
  expect(
    screen
      .getByRole("link", { name: "Explore the Full Journey" })
      .getAttribute("href")
  ).toBe("/about");
  expect(
    screen.getByRole("link", { name: "Contact Gary" }).getAttribute("href")
  ).toBe("mailto:hello@garygiam.com");
});
