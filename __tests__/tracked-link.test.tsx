import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";

const sendGAEvent = vi.fn();

vi.mock("@next/third-parties/google", () => ({
  sendGAEvent: (...args: unknown[]) => sendGAEvent(...args),
}));

import { TrackedLink } from "@/src/components/analytics/tracked-link";

test("sends a GA4 CTA event before navigating", () => {
  render(
    <TrackedLink
      href="/companies"
      eventLabel="Explore Companies"
      eventLocation="home_hero"
      className="cta"
      onClick={(event) => event.preventDefault()}
    >
      Explore Companies
    </TrackedLink>
  );

  fireEvent.click(screen.getByRole("link", { name: "Explore Companies" }));

  expect(sendGAEvent).toHaveBeenCalledWith("event", "cta_click", {
    cta_label: "Explore Companies",
    cta_destination: "/companies",
    cta_location: "home_hero",
  });
});
