import Link from "next/link";

import { PageIntro } from "@/src/components/page-intro";
import { Container } from "@/src/components/ui/container";
import { content } from "@/src/content";

export default function AboutPage() {
  return (
    <div className="pb-10 sm:pb-16">
      <PageIntro eyebrow="About Gary" title="How Gary Giam got here">
        <p>{content.person.headline}</p>
        <p className="mt-4">
          From building digital platforms and brands to developing ventures
          across wellness, consulting, philanthropy, technology and future
          industries, Gary Giam continues to build interconnected businesses
          designed for long-term value and impact.
        </p>
        <p className="mt-4">
          The founder journey behind the ecosystem is defined by progression:
          building digital platforms, developing commercial depth, shaping
          brands and ventures, and expanding into impact, technology, and
          future industries.
        </p>
      </PageIntro>

      <Container>
        <section className="rounded-[2rem] border border-black/10 bg-white p-6 sm:p-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7a17]">
              Founder Journey
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              A progression across platforms, brand, ventures, and impact
            </h2>
          </div>
          <div className="mt-8 space-y-8 border-l border-black/10 pl-6">
            {content.careerMilestones.map((milestone) => (
              <article key={milestone.id} className="relative">
                <span className="absolute -left-[1.9rem] top-2 h-3 w-3 rounded-full bg-[#d4af37]" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  {milestone.period}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">
                  {milestone.organization}
                </h3>
                <p className="mt-2 text-sm font-medium text-zinc-700">
                  {milestone.role}
                </p>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-600 sm:text-base">
                  {milestone.summary}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/companies"
              className="inline-flex w-fit items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white"
            >
              Explore Companies
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-fit items-center justify-center rounded-full border border-black/10 px-5 py-3 text-sm font-medium text-zinc-950"
            >
              Contact Gary
            </Link>
          </div>
        </section>
      </Container>
    </div>
  );
}
