import Link from "next/link";
import type { ReactNode } from "react";

import { content } from "@/src/content";
import { Container } from "@/src/components/ui/container";

type SiteShellProps = {
  children: ReactNode;
};

const primaryContact =
  content.contactChannels.find((channel) => channel.type === "email" && channel.url) ??
  content.contactChannels[0];

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/companies", label: "Companies" },
  { href: "/media", label: "Media" },
  { href: "/insights", label: "Insights" },
  { href: "/impact", label: "Impact" },
  { href: "/contact", label: "Contact" },
];

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-950">
      <a
        href="#main-content"
        className="skip-link sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-zinc-950 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to main content
      </a>
      <header className="border-b border-black/5 bg-white/90 backdrop-blur">
        <Container>
          <div className="flex flex-col gap-4 py-4">
            <Link
              href="/"
              className="w-fit text-sm font-semibold tracking-tight text-zinc-950"
            >
              {content.site.name} {content.site.tagline}
            </Link>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-zinc-600">{content.person.role}</p>
              <nav aria-label="Primary">
                <ul className="flex flex-wrap gap-2 text-sm text-zinc-600">
                  {navigationItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="inline-flex rounded-full border border-black/10 px-3 py-1.5 transition-colors hover:border-black/20 hover:text-zinc-950"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </Container>
      </header>

      <main id="main-content" className="flex-1">
        {children}
      </main>

      <footer className="border-t border-black/5 bg-zinc-50">
        <Container>
          <div className="flex flex-col gap-2 py-6 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
            <p>{content.site.domain}</p>
            {primaryContact?.url ? (
              <Link href={primaryContact.url} className="font-medium text-zinc-950">
                Contact {primaryContact.label}
              </Link>
            ) : null}
          </div>
        </Container>
      </footer>
    </div>
  );
}
