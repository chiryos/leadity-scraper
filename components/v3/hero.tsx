"use client";

/**
 * v3 Hero — webild-style cloud-sky background, tight Inter Tight h1,
 * white-box prompt input.
 *
 * Layout:
 *   [rainbow accent badge — "Verified at the source"]
 *   [BIG h1 with FadeWords — "Scrape Google Maps. Get owners' mobiles."]
 *   [white-box prompt input — placeholder + 2 chips + send button]
 *   [trust strip — "1,255+ categories · 32,741 ZIPs · TCPA-aware"]
 *
 * The cloud-sky background is a pure-CSS layered radial gradient (no
 * external image dep yet — can swap to an actual photo later by
 * dropping it in /public/cloud-sky.jpg and replacing the bg style).
 */

import * as React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { FadeWords } from "@/components/v3/fade-words";

export function HeroV3() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[92svh] flex-col items-center justify-center overflow-hidden v3-bg"
    >
      {/* Sky / cloud background — layered radial gradients evoking
          a soft sky with cloud blooms. Replace with an actual sky
          image (/public/sky.jpg) once available for an even closer
          match to webild. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background: [
            // Distant blue sky at top
            "linear-gradient(180deg, #DCE6F8 0%, #EBF1FB 38%, #F5F8FF 62%, #E8EFFA 88%, #DAE6F4 100%)",
            // Cloud blooms (white radials)
            "radial-gradient(45% 35% at 18% 32%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 70%)",
            "radial-gradient(40% 28% at 78% 22%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 70%)",
            "radial-gradient(55% 30% at 50% 55%, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0) 75%)",
            // Soft "ground" suggestion at bottom
            "radial-gradient(80% 35% at 50% 100%, rgba(170, 195, 230, 0.45) 0%, rgba(170, 195, 230, 0) 70%)",
          ].join(", "),
        }}
      />

      {/* Faint hairline grid (very subtle, like webild) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(120, 140, 175, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(120, 140, 175, 0.12) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Content stack */}
      <div className="relative z-10 flex w-full max-w-[940px] flex-col items-center gap-7 px-5 pt-10 md:pt-0">
        {/* Rainbow accent badge */}
        <div className="v3-font v3-rainbow-text text-[13px] md:text-[14px] font-medium tracking-tight">
          Verified at the source · 95% mobile rate
        </div>

        {/* Headline — big tight Inter Tight */}
        <h1
          className="text-center v3-text-h1"
          style={{
            fontSize: "clamp(2.6rem, 5.8vw, 4.6rem)",
          }}
        >
          <FadeWords>Owners&rsquo; mobiles.</FadeWords>
          <br />
          <FadeWords>Scraped. Verified. Yours.</FadeWords>
        </h1>

        {/* White-box prompt input */}
        <div className="w-full max-w-[720px] v3-white-box v3-grad-ring rounded-[14px] p-4 md:p-5">
          <div
            className="v3-font text-[15px] md:text-[17px] leading-snug text-[var(--v3-fg)]"
            style={{ minHeight: "2.5em" }}
          >
            Roofing contractors in Texas with mobile-only filter…
          </div>
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="v3-white-box v3-grad-ring v3-font inline-flex h-7 items-center gap-1.5 rounded-[10px] px-3 text-[11.5px] text-[var(--v3-fg)]">
                <SparkleIcon /> Enhance prompt
              </span>
            </div>
            <Link
              href="#pricing"
              aria-label="Scrape now"
              className="v3-btn-blue v3-grad-ring inline-flex h-9 w-9 items-center justify-center rounded-full"
            >
              <ArrowUp className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Trust strip */}
        <p
          className="v3-font mt-2 text-center text-[13px] md:text-[14px] tracking-tight"
          style={{ color: "var(--v3-fg)", opacity: 0.55 }}
        >
          1,255+ categories &middot; 32,741 US ZIP codes &middot; TCPA-aware
          export
        </p>
      </div>
    </section>
  );
}

function SparkleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="11"
      height="11"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 3l1.9 4.9L18 10l-4.1 1.9L12 17l-1.9-4.9L6 10l4.1-2.1z" />
      <path d="M19 14l.7 1.8L21 17l-1.8.7L18 19l-.7-1.8L16 17l1.8-1.2z" />
      <path d="M5 4l.7 1.8L7 6.5 5.2 7 5 8.5 4.3 7 3 6.5l1.7-.7z" />
    </svg>
  );
}
