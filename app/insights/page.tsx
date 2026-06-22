import { PageIntro } from "@/src/components/page-intro";
import { Container } from "@/src/components/ui/container";
import { content } from "@/src/content";

export default function InsightsPage() {
  return (
    <div className="pb-10 sm:pb-16">
      <PageIntro eyebrow="Insights" title="Insights">
        <p>Approved insights currently surfaced in the lean MVP experience.</p>
      </PageIntro>

      <Container>
        <section className="grid gap-4">
          {content.insightArticles.map((article) => (
            <article
              key={article.id}
              className="rounded-3xl border border-black/10 bg-white p-6"
            >
              <h2 className="text-lg font-semibold tracking-tight text-zinc-950">
                {article.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {article.summary}
              </p>
              {article.publishedAt ? (
                <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
                  {article.publishedAt}
                </p>
              ) : null}
            </article>
          ))}
        </section>
      </Container>
    </div>
  );
}
