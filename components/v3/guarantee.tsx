"use client";

/**
 * v3 Guarantee — light treatment, smooth into surrounding sections.
 *
 * Dropped the dark-portal navy aesthetic. Now: refund seal sits inside
 * a soft blue-tinted ambient field (a single radial blob), copy on the
 * right with brand-blue eyebrow + dark headline. The conic rainbow halo
 * still sits behind the seal — that visual stays.
 */

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeWords } from "@/components/v3/fade-words";

const chips = [
  "Verified at source",
  "Automatic replacement",
  "Human account manager",
];

export function GuaranteeV3() {
  return (
    <section
      id="guarantee"
      className="relative w-full overflow-hidden v3-bg"
    >
      {/* Soft ambient blue blob behind the seal — gives the section
          a focal-point glow without resorting to a hard dark bg. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[10%] top-1/2 -z-0 h-[680px] w-[680px] -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(77,150,255,0.16) 0%, rgba(77,150,255,0.05) 45%, transparent 75%)",
          filter: "blur(40px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[15%] top-[15%] -z-0 h-[520px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(34,201,245,0.12) 0%, rgba(34,201,245,0.04) 50%, transparent 75%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 md:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left: refund seal with conic rainbow halo */}
          <div className="relative flex justify-center lg:col-span-4 lg:justify-start">
            <div className="relative">
              {/* Conic rainbow ring — faint, behind the seal */}
              <div
                aria-hidden
                className="v3-conic-rainbow absolute -inset-3 rounded-full opacity-30"
                style={{ filter: "blur(36px)" }}
              />
              <Image
                src="/leadity-refund-recycle-v2.png"
                alt="Leadity refund + 50% bonus seal"
                width={300}
                height={300}
                className="relative h-[220px] w-[220px] object-contain md:h-[280px] md:w-[280px]"
                priority={false}
              />
            </div>
          </div>

          {/* Right: copy */}
          <div className="lg:col-span-8">
            <div className="v3-text-eyebrow">The guarantee</div>

            <h2 className="v3-text-section-headline mt-3 text-[var(--v3-fg)]">
              <span className="block">Bad lead? We don&rsquo;t just</span>
              <span className="block">
                <FadeWords>replace it. We pay you back.</FadeWords>
              </span>
            </h2>

            <p className="v3-font mt-6 max-w-[640px] text-[15px] md:text-[17px] leading-relaxed text-[var(--v3-fg)]/70">
              Every mobile number we deliver is live-verified before it hits
              your inbox. If any number turns out to be VOIP, a landline, or
              off-niche, we replace it free — and throw in 50% more clean
              Owners Mobiles on top. No support tickets. No chasing us down.
              Buy 2,000, 150 come back bad? You get 150 replacements plus 75
              bonus numbers.
            </p>

            <ul className="mt-7 flex flex-wrap items-center gap-2.5">
              {chips.map((c) => (
                <li
                  key={c}
                  className="v3-white-box v3-grad-ring v3-font inline-flex items-center rounded-[10px] px-3.5 py-1.5 text-[12.5px] font-medium text-[var(--v3-fg)]"
                >
                  {c}
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <Link
                href="#pricing"
                className="v3-btn-blue v3-grad-ring v3-font inline-flex h-11 items-center justify-center gap-2 rounded-[12px] px-7 text-[13px] font-medium text-white"
              >
                Try free — 50 mobiles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
