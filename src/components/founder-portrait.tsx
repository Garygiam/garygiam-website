import Image from "next/image";

type FounderPortraitProps = {
  src: string;
  alt: string;
  name: string;
  available: boolean;
};

export function FounderPortrait({
  src,
  alt,
  name,
  available,
}: FounderPortraitProps) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white">
      <div className="relative aspect-[4/5] w-full bg-white">
        {available ? (
          <div className="relative h-full w-full p-4 sm:p-6">
            <Image
              src={src}
              alt={alt}
              fill
              priority
              className="object-contain object-center"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        ) : (
          <div className="flex h-full flex-col justify-end bg-zinc-50 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
              Founder Portrait
            </p>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              {name}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-zinc-600">
              Portrait-ready hero frame. The final executive portrait will appear here without changing the layout.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
