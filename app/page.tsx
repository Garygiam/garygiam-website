import Link from "next/link";

import { TrackedLink } from "@/src/components/analytics/tracked-link";
import { EcosystemEntityCard } from "@/src/components/ecosystem/entity-card";
import { FounderPortrait } from "@/src/components/founder-portrait";
import { SectionHeading } from "@/src/components/section-heading";
import { Container } from "@/src/components/ui/container";
import { content } from "@/src/content";
import {
  getEcosystemChildren,
  getTopLevelEcosystemEntities,
} from "@/src/lib/ecosystem";
import { resolvePortraitSource } from "@/src/lib/portrait";

const contactEmail = content.contactChannels.find(
  (channel) => channel.type === "email" && channel.url
);
const portraitSrc = content.person.portraitPath
  ? resolvePortraitSource(content.person.portraitPath)
  : null;
const portraitAvailable = Boolean(portraitSrc);
const journeyPreview = [
  "PropertyGuru Malaysia",
  "Food Ink",
  "Isaac G Consultancy",
  "Ratatouille Gourmet",
  "Belleco Skin Beaute",
  "Celestial Yuan",
  "Yayasan TXJ Malaysia",
  "Inkco",
  "G-Space",
];
const homeHeadline = "Entrepreneur | Venture Builder | Ecosystem Architect";
const homeEyebrow = "ENTREPRENEUR & ECOSYSTEM BUILDER";
const homeSupportingCopy =
  "Building an interconnected ecosystem spanning wellness, consulting, philanthropy, technology, and future industries — designed to create long-term value, impact, and innovation.";
const topLevelEcosystemEntities = getTopLevelEcosystemEntities(content.ventures);
const homeStatistics = [
  "Founded Food Ink in 2014",
  `${topLevelEcosystemEntities.length} Ecosystem Entities`,
  `${content.awards.length} Verified Recognitions`,
  "10+ Years Building Businesses",
];
const ecosystemCards = topLevelEcosystemEntities.map((entity) => ({
  entity,
  children: getEcosystemChildren(content.ventures, entity.id),
}));

export default function Home() {
  return (
    <div className="pb-14 pt-8 sm:pb-20 sm:pt-12">
      <Container>
        <section className="grid gap-8 rounded-[2rem] border border-black/10 bg-zinc-50 p-6 shadow-[0_24px_60px_rgba(17,17,17,0.06)] sm:p-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.8fr)] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7a17]">
              {homeEyebrow}
            </p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl">
              {content.person.name}
            </h1>
            <p className="mt-4 max-w-3xl text-lg font-medium text-zinc-950 sm:text-xl">
              {homeHeadline}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
              {homeSupportingCopy}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <TrackedLink
                href="/companies"
                eventLabel="Explore Companies"
                eventLocation="home_hero"
                className="inline-flex w-fit items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white"
              >
                Explore Companies
              </TrackedLink>
              <TrackedLink
                href="/about"
                eventLabel="About Gary"
                eventLocation="home_hero"
                className="inline-flex w-fit items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-zinc-950"
              >
                About Gary
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

        <section className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {homeStatistics.map((stat) => (
            <article
              key={stat}
              className="rounded-[1.5rem] border border-black/10 bg-white px-5 py-4"
            >
              <p className="text-sm font-medium text-zinc-950">{stat}</p>
            </article>
          ))}
        </section>

        <section className="mt-14">
          <SectionHeading
            eyebrow="Ecosystem"
            title="Building Across Industries. Driven By One Mission."
            description={
              <p>
                Each entity serves a different role, but all contribute toward a
                shared mission of creating meaningful and sustainable impact.
              </p>
            }
          />
          <div className="mt-8 flex justify-center">
            <div className="max-w-4xl rounded-[1.75rem] border border-[#d4af37]/40 bg-zinc-950 px-6 py-7 text-center text-white sm:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d4af37]">
                Shared Mission
              </p>
              <p className="mt-4 text-base leading-8 text-zinc-100 sm:text-lg">
                Gary Giam is building an ecosystem of businesses, institutions
                and initiatives that help people make better decisions, improve
                their lives and create opportunities for future generations.
              </p>
            </div>
          </div>
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

        <section className="mt-14 rounded-[1.75rem] border border-black/10 bg-zinc-50 px-6 py-10 sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a7a17]">
            Why I Build
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Why I Build
          </h2>
          <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
            A mission behind the ecosystem
          </p>
          <div className="mt-6 max-w-4xl space-y-5 text-base leading-8 text-zinc-700 sm:text-lg">
            <p>The goal was never simply to build companies.</p>
            <p>
              The goal is to build platforms, businesses, institutions and
              communities that help people make better decisions, improve their
              lives and create opportunities for future generations.
            </p>
            <p>
              Each entity serves a different role, but all contribute toward a
              shared mission of creating meaningful and sustainable impact.
            </p>
          </div>
        </section>

        <section className="mt-14">
          <SectionHeading eyebrow="Proof" title="Recognition & Impact" />
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {content.awards.map((award) => (
              <article
                key={award.id}
                className="rounded-[1.75rem] border border-black/10 bg-white p-6 sm:p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a7a17]">
                  Recognition
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                  {award.issuer} {award.date}
                </h3>
                <p className="mt-3 text-lg font-medium text-zinc-950">
                  {award.title}
                </p>
              </article>
            ))}
          </div>
          <Link
            href="/media"
            className="mt-6 inline-flex rounded-full border border-black/10 px-5 py-3 text-sm font-medium text-zinc-950"
          >
            View All Recognition
          </Link>
        </section>

        <section className="mt-14">
          <SectionHeading eyebrow="Founder Journey" title="The journey behind the ecosystem" />
          <div className="mt-6 space-y-4 border-l border-black/10 pl-5">
            {journeyPreview.map((milestone) => (
              <div key={milestone} className="relative">
                <span className="absolute -left-[1.65rem] top-2 h-3 w-3 rounded-full bg-[#d4af37]" />
                <p className="text-lg font-medium text-zinc-950">{milestone}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-600">
            From building digital platforms, brands, and businesses to
            developing ventures across wellness, consulting, philanthropy,
            technology, and future industries, the journey continues.
          </p>
          <TrackedLink
            href="/about"
            eventLabel="Explore the Full Journey"
            eventLocation="home_journey"
            className="mt-5 inline-flex rounded-full border border-black/10 px-5 py-3 text-sm font-medium text-zinc-950"
          >
            Explore the Full Journey
          </TrackedLink>
        </section>

        <section className="mt-14 rounded-[1.75rem] border border-black/10 bg-white p-6 sm:p-8">
          <SectionHeading
            eyebrow="Contact"
            title="Connect with Gary Giam"
            description={
              <p>
                Direct contact paths are available for partnerships,
                collaboration, and founder conversations.
              </p>
            }
          />
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {contactEmail?.url ? (
              <TrackedLink
                href={contactEmail.url}
                eventLabel="Contact Gary"
                eventLocation="home_contact"
                className="inline-flex w-fit items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white"
              >
                Contact Gary
              </TrackedLink>
            ) : null}
            <Link
              href="/contact"
              className="inline-flex w-fit items-center justify-center rounded-full border border-black/10 px-5 py-3 text-sm font-medium text-zinc-950"
            >
              View Contact Options
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <article className="rounded-3xl border border-black/10 bg-zinc-50 p-5">
              <p className="text-sm font-medium text-zinc-500">Ventures</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">
                {topLevelEcosystemEntities.length} ecosystem entities
              </p>
            </article>
            <article className="rounded-3xl border border-black/10 bg-zinc-50 p-5">
              <p className="text-sm font-medium text-zinc-500">Recognition</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">
                {content.awards.length} trust signal
              </p>
            </article>
            <article className="rounded-3xl border border-black/10 bg-zinc-50 p-5">
              <p className="text-sm font-medium text-zinc-500">Access</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">
                {content.contactChannels.length} contact paths
              </p>
            </article>
          </div>
        </section>
      </Container>
    </div>
  );
}
