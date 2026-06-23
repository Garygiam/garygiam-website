import { EcosystemEntityCard } from "@/src/components/ecosystem/entity-card";
import { PageIntro } from "@/src/components/page-intro";
import { Container } from "@/src/components/ui/container";
import { content } from "@/src/content";
import { getEcosystemChildren, getEcosystemLayers } from "@/src/lib/ecosystem";

export default function CompaniesPage() {
  const ecosystemLayers = getEcosystemLayers(content.ventures);

  return (
    <div className="pb-10 sm:pb-16">
      <PageIntro eyebrow="Ecosystem" title="The ecosystem Gary Giam is building">
        <p>
          A mission-led ecosystem of businesses, institutions and initiatives
          designed to improve quality of life, create opportunities, and
          generate long-term impact.
        </p>
      </PageIntro>

      <Container>
        <section className="space-y-10">
          {ecosystemLayers.map((layer) => (
            <section key={layer.title}>
              <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a7a17]">
                  Strategic Layer
                </p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950">
                  {layer.title}
                </h2>
              </div>

              <div className="grid gap-5 lg:grid-cols-2">
                {layer.entities.map((entity) => (
                  <EcosystemEntityCard
                    key={entity.id}
                    entity={entity}
                    childrenEntities={getEcosystemChildren(content.ventures, entity.id)}
                  />
                ))}
              </div>
            </section>
          ))}
        </section>
      </Container>
    </div>
  );
}
