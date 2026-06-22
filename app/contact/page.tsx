import Link from "next/link";

import { PageIntro } from "@/src/components/page-intro";
import { Container } from "@/src/components/ui/container";
import { content } from "@/src/content";

export default function ContactPage() {
  return (
    <div className="pb-10 sm:pb-16">
      <PageIntro eyebrow="Contact" title="Contact">
        <p>Direct, approved contact channels available in the current MVP.</p>
      </PageIntro>

      <Container>
        <section className="grid gap-4">
          {content.contactChannels.map((channel) => (
            <article
              key={channel.id}
              className="rounded-3xl border border-black/10 bg-white p-6"
            >
              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-sm font-medium text-zinc-500">
                    {channel.label}
                  </p>
                  <h2 className="mt-1 text-lg font-semibold tracking-tight text-zinc-950">
                    {channel.value}
                  </h2>
                </div>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
                  {channel.type}
                </p>
                {channel.url ? (
                  <Link
                    href={channel.url}
                    className="inline-flex w-fit items-center justify-center rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-zinc-950"
                  >
                    {channel.value}
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </section>
      </Container>
    </div>
  );
}
