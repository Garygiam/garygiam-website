import Link from "next/link";

import { TrackedLink } from "@/src/components/analytics/tracked-link";
import { EcosystemEntityCard } from "@/src/components/ecosystem/entity-card";
import { FounderPortrait } from "@/src/components/founder-portrait";
import { SectionHeading } from "@/src/components/section-heading";
import { Container } from "@/src/components/ui/container";
import {
  authorityMediaCoverage,
  content,
} from "@/src/content";
import { homepageNarrative } from "@/src/content/data/homepage";
import {
  getEcosystemChildren,
  getTopLevelEcosystemEntities,
} from "@/src/lib/ecosystem";
import { resolvePortraitSource } from "@/src/lib/portrait";

const portraitSrc = content.person.portraitPath
  ? resolvePortraitSource(content.person.portraitPath)
  : null;
const portraitAvailable = Boolean(portraitSrc);
const topLevelEcosystemEntities = getTopLevelEcosystemEntities(content.ventures);
const ecosystemCards = topLevelEcosystemEntities.map((entity) => ({
  entity,
  children: getEcosystemChildren(content.ventures, entity.id),
}));
const featuredMediaCoverage = authorityMediaCoverage[0];

export default function Home() {
  return (
    <div className="pb-14 pt-8 sm:pb-20 sm:pt-12">
      <Container>
        <section className="grid gap-8 rounded-[2rem] border border-black/10 bg-zinc-50 p-6 shadow-[0_24px_60px_rgba(17,17,17,0.06)] sm:p-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.8fr)] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7a17]">
              {homepageNarrative.hero.eyebrow}
            </p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl">
              {content.person.name}
            </h1>
            <p className="mt-4 max-w-3xl text-lg font-medium text-zinc-950 sm:text-xl">
              {homepageNarrative.hero.headline}
            </p>
            <h2 className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              {homepageNarrative.hero.lead}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
              {homepageNarrative.hero.supporting}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <TrackedLink
                href={homepageNarrative.hero.primaryCta.href}
                eventLabel={homepageNarrative.hero.primaryCta.eventLabel}
                eventLocation={homepageNarrative.hero.primaryCta.eventLocation}
                className="inline-flex w-fit items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white"
              >
                {homepageNarrative.hero.primaryCta.label}
              </TrackedLink>
              <TrackedLink
                href={homepageNarrative.hero.secondaryCta.href}
                eventLabel={homepageNarrative.hero.secondaryCta.eventLabel}
                eventLocation={homepageNarrative.hero.secondaryCta.eventLocation}
                className="inline-flex w-fit items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-zinc-950"
              >
                {homepageNarrative.hero.secondaryCta.label}
              </TrackedLink>
            </div>
          </div>
          <FounderPortrait
            available={portraitAvailable}
            src={
              portraitSrc ??
              content.person.portraitPath ??
              "/images/gary-giam-portrait.jpg"
            }
            alt="Portrait of Gary Giam"
            name={content.person.name}
          />
        </section>

        <section className="mt-14">
          <SectionHeading
            eyebrow={homepageNarrative.category.eyebrow}
            title={homepageNarrative.category.title}
            description={<p>{homepageNarrative.category.description}</p>}
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {homepageNarrative.category.mentalModel.map((item) => (
              <article
                key={item}
                className="rounded-[1.5rem] border border-black/10 bg-white p-5"
              >
                <p className="text-sm leading-7 text-zinc-700">{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-[1.75rem] border border-black/10 bg-zinc-950 px-6 py-10 text-white sm:px-10">
          <SectionHeading
            eyebrow={homepageNarrative.operatingSystem.eyebrow}
            title={homepageNarrative.operatingSystem.title}
            description={
              <p className="text-zinc-200">
                {homepageNarrative.operatingSystem.canonicalDefinition}
              </p>
            }
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {homepageNarrative.operatingSystem.principles.map((principle) => (
              <article
                key={principle.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
              >
                <h3 className="text-lg font-semibold text-white">{principle.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-200">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-4xl text-base leading-8 text-zinc-200 sm:text-lg">
            {homepageNarrative.operatingSystem.founderReason}
          </p>
        </section>

        <section className="mt-14">
          <SectionHeading
            eyebrow={homepageNarrative.proof.eyebrow}
            title={homepageNarrative.proof.title}
            description={<p>{homepageNarrative.proof.description}</p>}
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {ecosystemCards.map(({ entity, children }) => (
              <EcosystemEntityCard
                key={entity.id}
                entity={entity}
                childrenEntities={children}
              />
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-[1.75rem] border border-black/10 bg-white p-6 sm:p-8">
          <SectionHeading
            eyebrow="Authority"
            title={homepageNarrative.proof.authorityTitle}
            description={<p>{homepageNarrative.proof.authorityDescription}</p>}
          />
          <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <div className="rounded-[1.5rem] border border-black/10 bg-zinc-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a7a17]">
                Recognition
              </p>
              <div className="mt-4 space-y-4">
                {content.awards.map((award) => (
                  <article key={award.id}>
                    <h3 className="text-lg font-semibold text-zinc-950">
                      {award.issuer} {award.date}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-zinc-700">{award.title}</p>
                  </article>
                ))}
              </div>
            </div>

            {featuredMediaCoverage ? (
              <div className="rounded-[1.5rem] border border-black/10 bg-zinc-950 p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d4af37]">
                  Media Coverage
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  {featuredMediaCoverage.outlet}
                </h3>
                <p className="mt-3 text-base font-medium text-white">
                  {featuredMediaCoverage.title}
                </p>
                <p className="mt-4 text-sm leading-7 text-zinc-200">
                  {featuredMediaCoverage.context}
                </p>
                <Link
                  href={featuredMediaCoverage.sourceUrl}
                  className="mt-6 inline-flex rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white"
                >
                  View source
                </Link>
              </div>
            ) : null}
          </div>
        </section>

        <section className="mt-14 rounded-[1.75rem] border border-black/10 bg-zinc-50 px-6 py-10 sm:px-10">
          <SectionHeading
            eyebrow={homepageNarrative.future.eyebrow}
            title={homepageNarrative.future.title}
            description={<p>{homepageNarrative.future.description}</p>}
          />
          <div className="mt-8 rounded-[1.5rem] border border-black/10 bg-white p-6">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
              {homepageNarrative.future.actionTitle}
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {homepageNarrative.future.actions.map((action) => (
                <TrackedLink
                  key={action.label}
                  href={action.href}
                  eventLabel={action.eventLabel}
                  eventLocation={action.eventLocation}
                  className="inline-flex w-fit items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-zinc-950"
                >
                  {action.label}
                </TrackedLink>
              ))}
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
