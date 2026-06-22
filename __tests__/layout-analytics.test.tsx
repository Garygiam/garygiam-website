import { renderToStaticMarkup } from "react-dom/server";
import { expect, test, vi } from "vitest";

vi.mock("@next/third-parties/google", () => ({
  GoogleAnalytics: ({ gaId }: { gaId: string }) => (
    <div data-testid="google-analytics" data-ga-id={gaId} />
  ),
}));

vi.mock("next/font/google", () => ({
  Geist: () => ({ variable: "--font-geist-sans" }),
  Geist_Mono: () => ({ variable: "--font-geist-mono" }),
}));

import RootLayout from "@/app/layout";

test("loads the GA4 integration once at the root layout", () => {
  const markup = renderToStaticMarkup(
    <RootLayout>
      <div>Page Content</div>
    </RootLayout>
  );

  expect(markup).toContain("Page Content");
  expect(markup).toContain('data-testid="google-analytics"');
  expect(markup).toContain('data-ga-id="G-9GWPP5TZEF"');
});
