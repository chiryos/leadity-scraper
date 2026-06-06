"use client";

/**
 * <CreditsCardV4 /> — the signature gradient credits card from the
 * Leadity dashboard. Reused on the hero (right column).
 *
 * Big credit number + label + small caption + white CTA pill with a
 * lightning Material Symbols icon.
 */

import * as React from "react";
import Link from "next/link";

type CreditsCardProps = {
  amount?: number;
  caption?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

export function CreditsCardV4({
  amount = 5000,
  caption = "From 1 credit per mobile-validated lead.",
  ctaLabel = "Start scraping",
  ctaHref = "/signup",
  className = "",
}: CreditsCardProps) {
  return (
    <div
      className={`v4-grad relative overflow-hidden rounded-[12px] p-6 md:p-7 ${className}`.trim()}
    >
      <div
        className="v4-font text-[11px] font-semibold uppercase tracking-[0.14em]"
        style={{ color: "rgba(255,255,255,0.78)" }}
      >
        Credits balance
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <span
          className="v4-display tabular-nums"
          style={{ fontSize: "clamp(40px, 5vw, 56px)", color: "#fff" }}
        >
          {amount.toLocaleString()}
        </span>
        <span
          className="v4-font text-[15px]"
          style={{ color: "rgba(255,255,255,0.78)" }}
        >
          Credits
        </span>
      </div>
      <p
        className="v4-font mt-2 text-[13.5px] leading-relaxed"
        style={{ color: "rgba(255,255,255,0.82)" }}
      >
        {caption}
      </p>
      <Link href={ctaHref} className="v4-btn-on-grad mt-5">
        <span
          className="ms-icon"
          style={{ fontSize: 18 }}
          data-fill="1"
          aria-hidden
        >
          bolt
        </span>
        {ctaLabel}
      </Link>
    </div>
  );
}
