import type { AboutModelGapItem } from "@/src/content";

type ModelGapGridProps = {
  items: AboutModelGapItem[];
};

export function ModelGapGrid({ items }: ModelGapGridProps) {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.name}
          className="rounded-[1.5rem] border border-black/10 bg-white p-5"
        >
          <h3 className="text-lg font-semibold tracking-tight text-zinc-950">
            {item.name}
          </h3>
          <p className="mt-3 text-sm leading-7 text-zinc-700">{item.focus}</p>
        </article>
      ))}
    </div>
  );
}
