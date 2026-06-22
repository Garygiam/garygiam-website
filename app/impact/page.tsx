import { PageIntro } from "@/src/components/page-intro";
import { Container } from "@/src/components/ui/container";
import { content } from "@/src/content";

export default function ImpactPage() {
  return (
    <div className="pb-10 sm:pb-16">
      <PageIntro eyebrow="Impact" title="Impact">
        <p>Approved impact initiatives included in the MVP launch scope.</p>
      </PageIntro>

      <Container>
        <section className="grid gap-4">
          {content.impactInitiatives.map((initiative) => (
            <article
              key={initiative.id}
              className="rounded-3xl border border-black/10 bg-white p-6"
            >
              <div className="flex flex-col gap-3">
                <div>
                  <h2 className="text-lg font-semibold tracking-tight text-zinc-950">
                    {initiative.title}
                  </h2>
                  {initiative.focusArea ? (
                    <p className="mt-1 text-sm font-medium text-zinc-500">
                      {initiative.focusArea}
                    </p>
                  ) : null}
                </div>
                <p className="text-sm leading-6 text-zinc-600">
                  {initiative.summary}
                </p>
              </div>
            </article>
          ))}
        </section>
      </Container>
    </div>
  );
}
