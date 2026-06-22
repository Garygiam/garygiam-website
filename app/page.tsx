import Link from "next/link";

import { FounderPortrait } from "@/src/components/founder-portrait";
import { SectionHeading } from "@/src/components/section-heading";
import { Container } from "@/src/components/ui/container";
import { content } from "@/src/content";
import { resolvePortraitSource } from "@/src/lib/portrait";

const confirmedVentures = content.ventures.filter(
  (venture) => venture.status === "confirmed"
).length;
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
const homeStatistics = [
  "Founded Food Ink in 2014",
  `${confirmedVentures} Ventures`,
  `${content.awards.length} Verified Recognitions`,
  "10+ Years Building Businesses",
];

export default function Home() {
  return (
    <div className="pb-14 pt-8 sm:pb-20 sm:pt-12">
      <Container>
        <section className="grid gap-8 rounded-[2rem] border border-black/10 bg-zinc-50 p-6 shadow-[0_24px_60px_rgba(17,17,17,0.06)] sm:p-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.8fr)] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7a17]">
              {content.site.tagline}
            </p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl">
              {content.person.name}
            </h1>
            <p className="mt-4 max-w-3xl text-lg font-medium text-zinc-950 sm:text-xl">
              {homeHeadline}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
              {content.person.heroCopy}
            </p>
            <p className="mt-4 text-sm font-medium text-zinc-700 sm:text-base">
              Recipient of International Prestige Brand Awards 2020
              Entrepreneur of the Year.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/companies"
                className="inline-flex w-fit items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white"
              >
                Explore Companies
              </Link>
              <Link
                href="/about"
                className="inline-flex w-fit items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-zinc-950"
              >
                About Gary
              </Link>
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
            title="Building Across Industries"
            description={
              <>
                <p>
                  From wellness and consulting to philanthropy, technology, and
                  future industries, Gary Giam is building an interconnected
                  ecosystem of ventures designed to create long-term value and
                  impact.
                </p>
                <div className="mt-5 rounded-[1.5rem] border border-black/10 bg-zinc-50 p-5">
                  <p className="text-sm font-semibold tracking-tight text-zinc-950">
                    Building the Gary Giam Ecosystem
                  </p>
                  <p className="mt-2 text-sm leading-7 text-zinc-600 sm:text-base">
                    A portfolio of ventures spanning wellness, consulting,
                    philanthropy, technology, and future industries, united by a
                    shared focus on growth, innovation, and long-term impact.
                  </p>
                </div>
              </>
            }
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {content.ventures.map((venture) => (
              <article
                key={venture.id}
                className="rounded-[1.75rem] border border-black/10 bg-white p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a7a17]">
                  {venture.category}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                  {venture.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {venture.summary}
                </p>
                <p className="mt-4 text-sm leading-6 text-zinc-700">
                  {venture.vision}
                </p>
                {venture.websiteUrl ? (
                  <Link
                    href={venture.websiteUrl}
                    className="mt-5 inline-flex rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-zinc-950"
                  >
                    Visit Website
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <SectionHeading eyebrow="Recognition" title="Verified recognition" />
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

        <section className="mt-14 rounded-[1.75rem] border border-black/10 bg-zinc-950 px-6 py-8 text-white sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d4af37]">
            Founder Philosophy
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            {content.person.philosophyTitle}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-200">
            {content.person.philosophyText}
          </p>
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
          <Link
            href="/about"
            className="mt-5 inline-flex rounded-full border border-black/10 px-5 py-3 text-sm font-medium text-zinc-950"
          >
            Explore the Full Journey
          </Link>
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
              <Link
                href={contactEmail.url}
                className="inline-flex w-fit items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white"
              >
                Contact Gary
              </Link>
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
                {confirmedVentures} ecosystem ventures
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
