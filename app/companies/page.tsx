import { PageIntro } from "@/src/components/page-intro";
import { Container } from "@/src/components/ui/container";
import { content } from "@/src/content";
import Link from "next/link";

export default function CompaniesPage() {
  return (
    <div className="pb-10 sm:pb-16">
      <PageIntro eyebrow="Companies" title="What Gary Giam is building">
        <p>
          A founder portfolio spanning consulting, wellness, philanthropy,
          technology, and future industries.
        </p>
      </PageIntro>

      <Container>
        <section className="grid gap-5 lg:grid-cols-2">
          {content.ventures.map((venture) => (
            <article
              key={venture.id}
              className="rounded-[1.75rem] border border-black/10 bg-white p-6 sm:p-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a7a17]">
                {venture.category}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                {venture.name}
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600 sm:text-base">
                {venture.summary}
              </p>
              <p className="mt-5 text-sm leading-7 text-zinc-700 sm:text-base">
                {venture.vision}
              </p>
              {venture.websiteUrl ? (
                <Link
                  href={venture.websiteUrl}
                  className="mt-6 inline-flex w-fit items-center justify-center rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-zinc-950"
                >
                  Visit Website
                </Link>
              ) : null}
              <p className="mt-6 text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
                Founder portfolio
              </p>
            </article>
          ))}
        </section>
      </Container>
    </div>
  );
}
