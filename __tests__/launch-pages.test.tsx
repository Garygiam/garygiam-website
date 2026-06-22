import { render, screen, within } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import ContactPage from "@/app/contact/page";
import ImpactPage from "@/app/impact/page";
import InsightsPage from "@/app/insights/page";
import MediaPage from "@/app/media/page";

describe("launch pages", () => {
  test("renders the media page as a recognition-led trust page", () => {
    render(<MediaPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Why the profile deserves trust" })
    ).toBeDefined();
    expect(screen.getByText("Entrepreneur of the Year")).toBeDefined();
    expect(screen.getByText("International Prestige Brand Awards 2020")).toBeDefined();
    expect(screen.getByText("Malaysia Website Awards 2016")).toBeDefined();
    expect(screen.getByText("Site of The Month (January)")).toBeDefined();
    expect(
      screen.getAllByRole("link", { name: "View source" })[0]?.getAttribute("href")
    ).toBe("https://www.tclmagazine.com/ipba2020-entrepreneur-gary-giam-2/");
    expect(
      screen.getAllByRole("link", { name: "View source" })[1]?.getAttribute("href")
    ).toBe("https://www.exabytes.my/blog/malaysia-website-awards-2016/");
  });

  test("renders the insights page without archive or detail links", () => {
    const { container } = render(<InsightsPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Insights" })
    ).toBeDefined();
    expect(screen.getByText("Gary Giam")).toBeDefined();
    expect(
      screen.getByText(
        "Founder profile content is limited to approved launch facts in the current MVP dataset."
      )
    ).toBeDefined();
    expect(within(container).queryByRole("link")).toBeNull();
  });

  test("renders the impact page with the approved initiative", () => {
    render(<ImpactPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Impact" })
    ).toBeDefined();
    expect(screen.getByText("Yayasan TXJ Malaysia")).toBeDefined();
    expect(screen.getByText("Community impact")).toBeDefined();
  });

  test("renders the contact page with approved contact paths", () => {
    render(<ContactPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Contact" })
    ).toBeDefined();
    expect(screen.getByText("LinkedIn")).toBeDefined();
    expect(screen.getByText("General Enquiries")).toBeDefined();
    expect(
      screen
        .getByRole("link", { name: "hello@garygiam.com" })
        .getAttribute("href")
    ).toBe("mailto:hello@garygiam.com");
  });
});
