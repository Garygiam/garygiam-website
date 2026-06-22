import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { SiteShell } from "@/src/components/site-shell";

describe("SiteShell", () => {
  test("renders the shared shell, primary navigation, and footer contact", () => {
    render(
      <SiteShell>
        <div>Inner content</div>
      </SiteShell>
    );

    expect(
      screen.getByRole("link", { name: "Skip to main content" }).getAttribute("href")
    ).toBe("#main-content");
    expect(
      screen
        .getByRole("link", { name: "Gary Giam Digital Headquarters" })
        .getAttribute("href")
    ).toBe("/");
    expect(screen.getByRole("navigation", { name: "Primary" })).toBeDefined();
    expect(screen.getByRole("link", { name: "Companies" }).getAttribute("href")).toBe(
      "/companies"
    );
    expect(
      screen
        .getByRole("link", { name: "Contact General Enquiries" })
        .getAttribute("href")
    ).toBe("mailto:hello@garygiam.com");
    expect(screen.getByText("Inner content")).toBeDefined();
    expect(screen.getByText("garygiam.com")).toBeDefined();
  });
});
