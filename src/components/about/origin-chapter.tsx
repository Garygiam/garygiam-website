import type { AboutOriginChapter } from "@/src/content";

type OriginChapterProps = {
  chapter: AboutOriginChapter;
};

export function OriginChapter({ chapter }: OriginChapterProps) {
  return (
    <article className="rounded-[1.75rem] border border-black/10 bg-white p-6 sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a7a17]">
        {chapter.roleLabel}
      </p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
        {chapter.title}
      </h3>

      <div className="mt-5 space-y-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
            What Happened
          </p>
          <p className="mt-2 text-sm leading-7 text-zinc-700 sm:text-base">
            {chapter.whatHappened}
          </p>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
            Organizational Principle
          </p>
          <p className="mt-2 text-sm leading-7 text-zinc-950 sm:text-base">
            {chapter.organizationalPrinciple}
          </p>
        </div>

        <div className="rounded-[1.25rem] border border-black/10 bg-zinc-50 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
            Why It Wasn't Enough
          </p>
          <p className="mt-2 text-sm leading-7 text-zinc-700 sm:text-base">
            {chapter.whyNotEnough}
          </p>
        </div>
      </div>
    </article>
  );
}
