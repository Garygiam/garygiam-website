import Link from "next/link";

import { PageIntro } from "@/src/components/page-intro";
import { Container } from "@/src/components/ui/container";
import { content } from "@/src/content";

export default function MediaPage() {
  return (
    <div className="pb-10 sm:pb-16">
      <PageIntro eyebrow="Recognition" title="Why the profile deserves trust">
        <p>
          Confirmed recognition is presented here as a focused trust signal,
          anchored by verified sources and founder history rather than broad
          media claims.
        </p>
      </PageIntro>

      <Container>
        <section className="space-y-5">
          {content.awards.map((award) => (
            <article
              key={award.id}
              className="rounded-[1.75rem] border border-black/10 bg-white p-6 sm:p-8"
            >
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(240px,0.7fr)]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a7a17]">
                    Recognition
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">
                    {award.issuer} {award.date}
                  </h2>
                  <p className="mt-4 text-lg font-medium text-zinc-950">
                    {award.title}
                  </p>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-600 sm:text-base">
                    {award.summary}
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Link
                      href={award.sourceUrl ?? "#"}
                      className="inline-flex w-fit items-center justify-center rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-zinc-950"
                    >
                      View source
                    </Link>
                    <p className="text-sm text-zinc-500">
                      Source: {award.sourceLabel ?? "Verified source"}
                    </p>
                  </div>
                </div>

                {award.assetLabels?.length ? (
                  <aside className="rounded-[1.5rem] border border-black/10 bg-zinc-50 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                      Recognition Assets
                    </p>
                    <p className="mt-3 text-sm font-medium text-zinc-950">
                      Prepared for clean certificate and event imagery placement.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {award.assetLabels.map((label) => (
                        <span
                          key={label}
                          className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-zinc-700"
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                  </aside>
                ) : null}
              </div>
            </article>
          ))}
        </section>
      </Container>
    </div>
  );
}
