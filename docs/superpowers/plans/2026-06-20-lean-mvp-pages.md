# Lean MVP Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement lean, mobile-first `Home`, `About`, and `Companies` pages using only approved local content facts.

**Architecture:** Keep route files thin and server-rendered in the Next.js App Router. Reuse the existing shell and container, add at most one tiny shared page-heading helper if duplication is justified, and derive all displayed copy from the typed `content` object so no new claims are introduced.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS, Vitest, Testing Library, ESLint

---

## File Structure

- Modify: `app/page.tsx`
- Create: `app/about/page.tsx`
- Create: `app/companies/page.tsx`
- Create: `src/components/page-intro.tsx`
- Modify: `__tests__/page.test.tsx`
- Create: `__tests__/about-page.test.tsx`
- Create: `__tests__/companies-page.test.tsx`

## Task 1: Add focused route tests

**Files:**
- Modify: `__tests__/page.test.tsx`
- Create: `__tests__/about-page.test.tsx`
- Create: `__tests__/companies-page.test.tsx`

- [ ] **Step 1: Update the home test with route links and approved facts**

```tsx
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import Page from "@/app/page";

test("renders the lean home page with approved facts and route links", () => {
  render(<Page />);

  expect(
    screen.getByRole("heading", { level: 1, name: "Gary Giam" })
  ).toBeDefined();
  expect(screen.getByText("Digital headquarters")).toBeDefined();
  expect(screen.getByText("7 confirmed ventures")).toBeDefined();
  expect(
    screen.getByRole("link", { name: "About" }).getAttribute("href")
  ).toBe("/about");
  expect(
    screen.getByRole("link", { name: "Companies" }).getAttribute("href")
  ).toBe("/companies");
});
```

- [ ] **Step 2: Add a failing About route test**

```tsx
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import AboutPage from "@/app/about/page";

test("renders the about page with approved summary and facts", () => {
  render(<AboutPage />);

  expect(
    screen.getByRole("heading", { level: 1, name: "About Gary Giam" })
  ).toBeDefined();
  expect(screen.getByText("Entrepreneur and venture builder")).toBeDefined();
  expect(screen.getByText("PropertyGuru Malaysia")).toBeDefined();
  expect(screen.getByText("Yayasan TXJ Malaysia")).toBeDefined();
});
```

- [ ] **Step 3: Add a failing Companies route test**

```tsx
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import CompaniesPage from "@/app/companies/page";
import { content } from "@/src/content";

test("renders all confirmed ventures on the companies page", () => {
  render(<CompaniesPage />);

  expect(
    screen.getByRole("heading", { level: 1, name: "Companies" })
  ).toBeDefined();

  for (const venture of content.ventures) {
    expect(screen.getByText(venture.name)).toBeDefined();
  }
});
```

- [ ] **Step 4: Run the targeted tests to confirm missing routes fail**

Run: `npx vitest run __tests__/page.test.tsx __tests__/about-page.test.tsx __tests__/companies-page.test.tsx`
Expected: `about/page` and `companies/page` imports fail before implementation.

## Task 2: Implement the lean pages

**Files:**
- Modify: `app/page.tsx`
- Create: `app/about/page.tsx`
- Create: `app/companies/page.tsx`
- Create: `src/components/page-intro.tsx`

- [ ] **Step 1: Add one small shared intro component**

```tsx
import type { ReactNode } from "react";

import { Container } from "@/src/components/ui/container";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function PageIntro({ eyebrow, title, children }: PageIntroProps) {
  return (
    <section className="py-10 sm:py-16">
      <Container>
        <div className="rounded-[2rem] border border-black/10 bg-zinc-50 p-6 shadow-sm sm:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            {title}
          </h1>
          <div className="mt-4 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg">
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Update the home page**

```tsx
import Link from "next/link";

import { PageIntro } from "@/src/components/page-intro";
import { Container } from "@/src/components/ui/container";
import { content } from "@/src/content";

const confirmedVentures = content.ventures.filter(
  (venture) => venture.status === "confirmed"
).length;
const contactEmail = content.contactChannels.find(
  (channel) => channel.type === "email" && channel.url
);

export default function Home() {
  return (
    <div className="py-10 sm:py-16">
      <PageIntro eyebrow={content.site.tagline} title={content.person.name}>
        <p>{content.person.summary}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          {contactEmail?.url ? (
            <Link
              href={contactEmail.url}
              className="inline-flex w-fit items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white"
            >
              {contactEmail.value}
            </Link>
          ) : null}
          <Link
            href="/about"
            className="inline-flex w-fit items-center justify-center rounded-full border border-black/10 px-5 py-3 text-sm font-medium text-zinc-950"
          >
            About
          </Link>
          <Link
            href="/companies"
            className="inline-flex w-fit items-center justify-center rounded-full border border-black/10 px-5 py-3 text-sm font-medium text-zinc-950"
          >
            Companies
          </Link>
        </div>
      </PageIntro>

      <Container>
        <section className="grid gap-4 sm:grid-cols-3">
          <article className="rounded-3xl border border-black/10 bg-white p-5">
            <p className="text-sm font-medium text-zinc-500">Ventures</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">
              {confirmedVentures} confirmed ventures
            </p>
          </article>
          <article className="rounded-3xl border border-black/10 bg-white p-5">
            <p className="text-sm font-medium text-zinc-500">Recognition</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">
              {content.awards.length} award highlight
            </p>
          </article>
          <article className="rounded-3xl border border-black/10 bg-white p-5">
            <p className="text-sm font-medium text-zinc-500">Access</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">
              {content.contactChannels.length} contact paths
            </p>
          </article>
        </section>
      </Container>
    </div>
  );
}
```

- [ ] **Step 3: Add the About page**

```tsx
import { PageIntro } from "@/src/components/page-intro";
import { Container } from "@/src/components/ui/container";
import { content } from "@/src/content";

export default function AboutPage() {
  return (
    <div className="pb-10 sm:pb-16">
      <PageIntro eyebrow="About" title="About Gary Giam">
        <p>{content.person.role}</p>
        <p className="mt-4">{content.person.summary}</p>
      </PageIntro>

      <Container className="grid gap-4">
        <section className="rounded-3xl border border-black/10 bg-white p-6">
          <h2 className="text-lg font-semibold tracking-tight text-zinc-950">
            Approved facts
          </h2>
          <dl className="mt-4 grid gap-4 text-sm text-zinc-600">
            <div>
              <dt className="font-medium text-zinc-950">Career</dt>
              <dd className="mt-1">
                {content.careerMilestones[0]?.title}
              </dd>
            </div>
            <div>
              <dt className="font-medium text-zinc-950">Recognition</dt>
              <dd className="mt-1">{content.awards[0]?.title}</dd>
            </div>
            <div>
              <dt className="font-medium text-zinc-950">Impact</dt>
              <dd className="mt-1">{content.impactInitiatives[0]?.title}</dd>
            </div>
            <div>
              <dt className="font-medium text-zinc-950">Contact</dt>
              <dd className="mt-1">{content.contactChannels[1]?.value}</dd>
            </div>
          </dl>
        </section>
      </Container>
    </div>
  );
}
```

- [ ] **Step 4: Add the Companies page**

```tsx
import { PageIntro } from "@/src/components/page-intro";
import { Container } from "@/src/components/ui/container";
import { content } from "@/src/content";

export default function CompaniesPage() {
  return (
    <div className="pb-10 sm:pb-16">
      <PageIntro eyebrow="Companies" title="Companies">
        <p>
          Confirmed ventures currently included in the MVP content contract.
        </p>
      </PageIntro>

      <Container>
        <section className="grid gap-4">
          {content.ventures.map((venture) => (
            <article
              key={venture.id}
              className="rounded-3xl border border-black/10 bg-white p-6"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-lg font-semibold tracking-tight text-zinc-950">
                    {venture.name}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    {venture.summary}
                  </p>
                </div>
                <p className="w-fit rounded-full border border-black/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
                  {venture.status}
                </p>
              </div>
            </article>
          ))}
        </section>
      </Container>
    </div>
  );
}
```

## Task 3: Verify and lint

**Files:**
- Modify: recently edited files only

- [ ] **Step 1: Run the targeted tests**

Run: `npx vitest run __tests__/page.test.tsx __tests__/about-page.test.tsx __tests__/companies-page.test.tsx`
Expected: `3` passing test files.

- [ ] **Step 2: Run lint**

Run: `npm run lint`
Expected: ESLint exits with code `0`.

- [ ] **Step 3: Fix any diagnostics or lint issues introduced by the edits**

Run: `npm run lint`
Expected: still exits with code `0`.

## Self-Review Checklist

- Spec coverage:
  - lean home/about/companies pages: covered by Task 2
  - approved-facts-only content usage: enforced by `content`-driven rendering in Task 2
  - minimal sections/components: enforced by one shared intro helper and thin route files
  - mobile-first styling: preserved by existing utility patterns and single-column defaults
  - targeted tests and lint: covered by Tasks 1 and 3
- Placeholder scan:
  - no placeholder steps or undefined modules remain in the plan
- Type consistency:
  - all route files consume the existing `content` shape from `@/src/content`
