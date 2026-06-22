"use client";

import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";
import type { ComponentPropsWithRef, MouseEvent } from "react";

type TrackedLinkProps = ComponentPropsWithRef<typeof Link> & {
  eventLabel: string;
  eventLocation: string;
};

export function TrackedLink({
  href,
  eventLabel,
  eventLocation,
  onClick,
  ...props
}: TrackedLinkProps) {
  const destination = typeof href === "string" ? href : href.toString();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    sendGAEvent("event", "cta_click", {
      cta_label: eventLabel,
      cta_destination: destination,
      cta_location: eventLocation,
    });

    onClick?.(event);
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
