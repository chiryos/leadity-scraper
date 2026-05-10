"use client";

/**
 * v3 Footer — webild-style massive blue section with giant white
 * wordmark + 3-column links below.
 *
 * Background: bright blue (#4D96FF range), full-bleed.
 * Wordmark: "leadity" in WHITE, sized to roughly fill the viewport
 * width (clamp 8rem → 18vw → 21rem-ish). Letters carry a subtle
 * top-to-bottom gradient that hints at depth.
 * Links: 3 columns with `›` arrow bullets, white text.
 */

import * as React from "react";
import Link from "next/link";

const cols: { heading: string; items: { label: string; href: string }[] }[] = [
  {
    heading: "Site",
    items: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "Features", href: "#features" },
      { label: "FAQ", href: "#faq" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    heading: "Social",
    items: [
      { label: "X (Twitter)", href: "https://twitter.com/leadity" },
      { label: "LinkedIn", href: "https://linkedin.com/company/leadity" },
      { label: "Instagram", href: "https://instagram.com/leadity" },
      { label: "Discord", href: "#" },
    ],
  },
  {
    heading: "Legal",
    items: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Support", href: "mailto:hello@leadity.io" },
    ],
  },
];

export function FooterV3() {
  return (
    <footer
      className="relative w-full overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(180deg, #5BA3FF 0%, #4D96FF 50%, #3F87F2 100%)",
      }}
    >
      {/* Wordmark — massive, white, letterforms with subtle inner gradient */}
      <div
        aria-hidden
        className="relative w-full select-none px-4 pt-20 pb-12 md:pt-32 md:pb-16"
      >
        <div
          className="v3-font text-center font-semibold tracking-[-0.02em] leading-[0.9]"
          style={{
            fontSize: "clamp(7rem, 22vw, 22rem)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.85) 35%, rgba(255,255,255,0.55) 75%, rgba(255,255,255,0.4) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextFillColor: "transparent",
          }}
        >
          Leadity
        </div>
      </div>

      {/* Link columns */}
      <div className="relative mx-auto w-full max-w-[1180px] px-5 md:px-8 pb-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-16">
          {cols.map((col) => (
            <div key={col.heading} className="flex flex-col gap-3">
              <ul className="flex flex-col gap-2">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="v3-font inline-flex items-center gap-2 text-[14px] text-white/95 hover:text-white transition-colors"
                    >
                      <span className="opacity-70">›</span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright bar */}
      <div className="relative w-full border-t border-white/15">
        <div className="mx-auto w-full max-w-[1180px] px-5 md:px-8 py-5 text-[12px] text-white/80 v3-font">
          © 2026 Leadity Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
