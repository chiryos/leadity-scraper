"use client";

/**
 * v3 Showcase — "How it works" 5-step product tour.
 * Webild-style: white-box cards with screenshot + step number rainbow
 * accent + title + body. Real Leadity product screenshots from /public/product/*.
 */

import * as React from "react";
import Image from "next/image";
import { SectionFrame } from "@/components/v3/section-frame";

const steps = [
  {
    n: "01",
    label: "Choose",
    title: "Pick your niche.",
    body: "1,255+ business categories already organised into clean sectors. Roofing, dentist, HVAC, solar — plain English, no SIC codes.",
    src: "/product/01-categories.png",
  },
  {
    n: "02",
    label: "Target",
    title: "Choose where to scrape.",
    body: "By state, by ZIP, or the full US — 32,741 ZIPs included. Dial in the regions your team can actually service.",
    src: "/product/02-location.png",
  },
  {
    n: "03",
    label: "Launch",
    title: "Launch at your pace.",
    body: "Careful, balanced, or aggressive workers. Pick the throughput that matches your rate limits and deadline.",
    src: "/product/03-launch.png",
  },
  {
    n: "04",
    label: "Track",
    title: "Watch your pipeline fill.",
    body: "Total leads, today, this week, this month — side by side. Every active job shows real-time progress.",
    src: "/product/04-dashboard.png",
  },
  {
    n: "05",
    label: "Ship",
    title: "Mobile-only, every time.",
    body: "Live carrier classification splits Mobile, Landline, VoIP. Pay only for numbers your SMS stack can text.",
    src: "/product/05-classification.png",
  },
];

export function ShowcaseV3() {
  return (
    <SectionFrame
      id="how-it-works"
      eyebrow="A look inside"
      headlineLead="From a single niche"
      headlineEmphasis="to verified mobiles."
      ctaLabel="Get started"
      ctaHref="#pricing"
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((s) => (
          <article
            key={s.n}
            className="v3-white-box v3-grad-ring overflow-hidden rounded-[14px]"
          >
            {/* Screenshot frame */}
            <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#EAF0FB] border-b border-[var(--v3-fg)]/[0.06]">
              <Image
                src={s.src}
                alt={s.title}
                fill
                sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            {/* Body */}
            <div className="p-6">
              <div className="flex items-baseline gap-2">
                <span className="v3-rainbow-text v3-font text-[12px] font-medium tracking-tight">
                  Step {s.n}
                </span>
                <span className="v3-font text-[12px] text-[var(--v3-fg)]/45">
                  · {s.label}
                </span>
              </div>
              <h3 className="v3-font mt-2 text-[20px] md:text-[22px] font-medium leading-tight text-[var(--v3-fg)]">
                {s.title}
              </h3>
              <p className="v3-font mt-2 text-[14px] leading-relaxed text-[var(--v3-fg)]/70">
                {s.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </SectionFrame>
  );
}
