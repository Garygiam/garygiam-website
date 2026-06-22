import type { ReactNode } from "react";

import { Container } from "@/src/components/ui/container";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function PageIntro({ eyebrow, title, children }: PageIntroProps) {
  return (
    <section className="py-10 sm:py-16">
      <Container>
        <div className="rounded-[2rem] border border-black/10 bg-zinc-50 p-6 shadow-sm sm:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            {title}
          </h1>
          <div className="mt-4 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg">
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}
