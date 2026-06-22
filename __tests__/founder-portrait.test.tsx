import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import { FounderPortrait } from "@/src/components/founder-portrait";

test("renders a stable authority fallback when the portrait file is unavailable", () => {
  render(
    <FounderPortrait
      available={false}
      src="/images/gary-giam-portrait.jpg"
      alt="Portrait of Gary Giam"
      name="Gary Giam"
    />
  );

  expect(screen.getByText("Founder Portrait")).toBeDefined();
  expect(screen.getByText("Gary Giam")).toBeDefined();
});
