"use client";

/**
 * <SectionFrame /> — webild's recurring section header pattern.
 *
 * Renders:
 *   [ small blue eyebrow ]                       [Get Started CTA →]
 *   [ BIG heading with FadeWords scroll reveal ]
 *
 * Below it, the consumer renders whatever content layout the section
 * needs (cards, grid, table, etc).
 *
 * Used by: Showcase, Comparison, Pricing, Guarantee, Testimonials, FAQ,
 * CTA — every major section on the page.
 */

import * as React from "react";
import Link from "next/link";
import { FadeWords } from "@/components/v3/fade-words";

type SectionFrameProps = {
  id?: string;
  eyebrow: string;
  /** First headline line (settled / static). */
  headlineLead: string;
  /** Second headline line — animates in via FadeWords. */
  headlineEmphasis: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
  children?: React.ReactNode;
  /** Render eyebrow + headline + CTA only (no children below). */
  headerOnly?: boolean;
  /** Center the heading block (vs left-aligned default). */
  centered?: boolean;
};

export function SectionFrame({
  id,
  eyebrow,
  headlineLead,
  headlineEmphasis,
  ctaLabel,
  ctaHref,
  className = "",
  children,
  headerOnly = false,
  centered = false,
}: SectionFrameProps) {
  return (
    <section
      id={id}
      className={`relative w-full py-20 md:py-28 lg:py-32 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1180px] px-5 md:px-8">
        {/* Header row */}
        <div
          className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${
            centered ? "md:flex-col md:items-center" : ""
          }`}
        >
          <div className={centered ? "text-center mx-auto max-w-[820px]" : ""}>
            <div className="v3-text-eyebrow">{eyebrow}</div>
            <h2 className="v3-text-section-headline mt-3 text-[var(--v3-fg)]">
              <span className="block">{headlineLead}</span>
              <span className="block">
                <FadeWords>{headlineEmphasis}</FadeWords>
              </span>
            </h2>
          </div>

          {ctaLabel && ctaHref && !centered ? (
            <Link
              href={ctaHref}
              className="v3-btn-blue v3-grad-ring v3-font inline-flex h-11 items-center justify-center rounded-[12px] px-10 text-[13px] font-medium text-white self-start md:self-end"
            >
              {ctaLabel}
            </Link>
          ) : null}
        </div>

        {/* Body slot */}
        {!headerOnly && children ? (
          <div className="mt-12 md:mt-16">{children}</div>
        ) : null}
      </div>
    </section>
  );
}
