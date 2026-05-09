"use client";

/**
 * v3 Guarantee — refund + 50% bonus copy in webild dark portal style.
 * Full-bleed dark navy section with a conic rainbow ring accent and
 * the guarantee seal photo on left, copy on right.
 */

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeWords } from "@/components/v3/fade-words";

const chips = ["Verified at source", "Automatic replacement", "Human account manager"];

export function GuaranteeV3() {
  return (
    <section
      id="guarantee"
      className="relative w-full overflow-hidden v3-bg-portal-dark text-white"
    >
      {/* Top edge blue glow ribbon (transition into dark from light) */}
      <div className="v3-portal-edge-glow" style={{ top: -180 }} />

      {/* Faint hairline grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 md:px-8 py-24 md:py-36">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left: refund seal with conic rainbow halo */}
          <div className="relative flex justify-center lg:col-span-4 lg:justify-start">
            <div className="relative">
              {/* Conic rainbow ring — webild's signature loader effect */}
              <div
                aria-hidden
                className="v3-conic-rainbow absolute -inset-2 rounded-full opacity-50"
                style={{ filter: "blur(28px)" }}
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
            <div className="v3-text-eyebrow text-white/85" style={{ color: "var(--v3-blue)" }}>
              The guarantee
            </div>

            <h2 className="v3-text-section-headline mt-3 text-white">
              <span className="block">Bad lead? We don&rsquo;t just</span>
              <span className="block">
                <FadeWords>replace it. We pay you back.</FadeWords>
              </span>
            </h2>

            <p className="v3-font mt-6 max-w-[640px] text-[15px] md:text-[17px] leading-relaxed text-white/80">
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
                  className="v3-font inline-flex items-center rounded-[10px] border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-[12.5px] font-medium text-white/90 backdrop-blur-sm"
                >
                  {c}
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <Link
                href="#pricing"
                className="v3-font inline-flex h-11 items-center justify-center gap-2 rounded-[12px] bg-white px-7 text-[13px] font-medium text-[#0951FF] shadow-[0_10px_22px_-8px_rgba(255,255,255,0.18)] transition-[filter] duration-200 hover:brightness-95"
              >
                Try free — 50 mobiles
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom edge glow into next section */}
      <div className="v3-portal-edge-glow" style={{ bottom: -180 }} />
    </section>
  );
}
