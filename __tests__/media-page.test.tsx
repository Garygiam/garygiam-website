import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import MediaPage from "@/app/media/page";

test("renders only the curated launch awards from the authority-backed runtime content", () => {
  render(<MediaPage />);

  expect(
    screen.getByRole("heading", { level: 1, name: "Why the profile deserves trust" })
  ).toBeDefined();
  expect(screen.getByText("Entrepreneur of the Year")).toBeDefined();
  expect(screen.getByText("Site of The Month (January)")).toBeDefined();
  expect(screen.queryByText("Restaurant Brand of the Year")).toBeNull();
});
