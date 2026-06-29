import Link from "next/link";

import { ModelGapGrid } from "@/src/components/about/model-gap-grid";
import { OriginChapter } from "@/src/components/about/origin-chapter";
import { PageIntro } from "@/src/components/page-intro";
import { Container } from "@/src/components/ui/container";
import { aboutOriginNarrative } from "@/src/content";

export default function AboutPage() {
  return (
    <div className="pb-10 sm:pb-16">
      <PageIntro
        eyebrow={aboutOriginNarrative.question.eyebrow}
        title={aboutOriginNarrative.question.title}
      >
        <p className="text-xl font-medium text-zinc-950">
          {aboutOriginNarrative.question.prompt}
        </p>
        <p className="mt-4">
          {aboutOriginNarrative.question.lead}
        </p>
      </PageIntro>

      <Container>
        <div className="space-y-10">
          <section className="rounded-[2rem] border border-black/10 bg-white p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7a17]">
              {aboutOriginNarrative.search.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              {aboutOriginNarrative.search.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg">
              {aboutOriginNarrative.search.lead}
            </p>
            <div className="mt-6 rounded-[1.5rem] border border-black/10 bg-zinc-50 p-5">
              <p className="text-sm leading-7 text-zinc-700 sm:text-base">
                {aboutOriginNarrative.search.emotionalLayer}
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7a17]">
              {aboutOriginNarrative.discovery.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              {aboutOriginNarrative.discovery.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg">
              {aboutOriginNarrative.discovery.lead}
            </p>
            <div className="mt-8 space-y-5">
              {aboutOriginNarrative.discovery.chapters.map((chapter) => (
                <OriginChapter key={chapter.id} chapter={chapter} />
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-zinc-50 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7a17]">
              {aboutOriginNarrative.modelGap.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              {aboutOriginNarrative.modelGap.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg">
              {aboutOriginNarrative.modelGap.lead}
            </p>
            <ModelGapGrid items={aboutOriginNarrative.modelGap.models} />
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-zinc-950 p-6 text-white sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
              {aboutOriginNarrative.conclusion.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {aboutOriginNarrative.conclusion.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-200 sm:text-lg">
              {aboutOriginNarrative.conclusion.lead}
            </p>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7a17]">
              {aboutOriginNarrative.future.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              {aboutOriginNarrative.future.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg">
              {aboutOriginNarrative.future.lead}
            </p>
            <div className="mt-8">
              <Link
                href={aboutOriginNarrative.future.bridgeCta.href}
                className="inline-flex w-fit items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white"
              >
                {aboutOriginNarrative.future.bridgeCta.label}
              </Link>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
