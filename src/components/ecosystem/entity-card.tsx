import Link from "next/link";

import type { Venture } from "@/src/content";

type EcosystemEntityCardProps = {
  entity: Venture;
  childrenEntities?: Venture[];
};

export function EcosystemEntityCard({
  entity,
  childrenEntities = [],
}: EcosystemEntityCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-black/10 bg-white p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a7a17]">
            {entity.impactPillar}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
            {entity.name}
          </h3>
        </div>
        <span className="rounded-full border border-black/10 bg-zinc-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-500">
          {entity.status}
        </span>
      </div>

      <p className="mt-4 text-sm leading-7 text-zinc-600 sm:text-base">
        {entity.summary}
      </p>
      <p className="mt-4 text-sm leading-7 text-zinc-700 sm:text-base">
        {entity.vision}
      </p>

      {childrenEntities.length > 0 ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {childrenEntities.map((child) => (
            <span
              key={child.id}
              className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-zinc-700"
            >
              {child.name}
            </span>
          ))}
        </div>
      ) : null}

      {entity.websiteUrl ? (
        <Link
          href={entity.websiteUrl}
          className="mt-6 inline-flex w-fit items-center justify-center rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-zinc-950"
        >
          Visit Website
        </Link>
      ) : null}
    </article>
  );
}
