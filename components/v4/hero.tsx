"use client";

/**
 * v4 Hero — split layout.
 *  Left:  eyebrow + H0 + subhead + primary/secondary CTA + trust microline.
 *  Right: gradient CreditsCard overlapped with the CSV preview card.
 *
 * Above-the-fold content uses mount-fired `.v4-reveal` animations
 * (whileInView does NOT fire for elements already in view at first
 * paint — we hit that bug before).
 */

import * as React from "react";
import Link from "next/link";
import { CreditsCardV4 } from "@/components/v4/credits-card";
import { CsvPreviewV4 } from "@/components/v4/csv-preview";

export function HeroV4() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden"
      style={{ background: "var(--v4-canvas)" }}
    >
      {/* Faint hairline texture (very subtle — Material flavor) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.7]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.025) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "linear-gradient(180deg, transparent 0%, #000 120px, #000 calc(100% - 120px), transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(180deg, transparent 0%, #000 120px, #000 calc(100% - 120px), transparent 100%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-5 md:px-8 pt-32 md:pt-36 pb-20 md:pb-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* LEFT — copy + CTAs */}
          <div className="lg:col-span-6 lg:pr-4">
            <p
              className="v4-eyebrow v4-reveal v4-reveal-delay-1"
              style={{ color: "var(--v4-accent)" }}
            >
              CARRIER-VALIDATED US MOBILE LEADS
            </p>

            <h1
              className="v4-display v4-reveal v4-reveal-delay-2 mt-4 text-balance"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                color: "var(--v4-text)",
              }}
            >
              Owner mobile numbers. <br className="hidden sm:inline" />
              CSV in 60 seconds.
            </h1>

            <p
              className="v4-font v4-reveal v4-reveal-delay-3 mt-5 max-w-[520px] text-[16px] md:text-[17px] leading-[1.55]"
              style={{ color: "var(--v4-text-secondary)" }}
            >
              Carrier-verified from Google Maps. Bad ones replaced, plus a
              50% bonus on top.
            </p>

            <div className="v4-reveal v4-reveal-delay-4 mt-8 flex flex-wrap items-center gap-3">
              <Link href="/signup" className="v4-btn-primary">
                Get started
                <span
                  className="ms-icon"
                  style={{ fontSize: 18 }}
                  aria-hidden
                >
                  arrow_forward
                </span>
              </Link>
              <a href="#how-it-works" className="v4-btn-secondary">
                See how it works
              </a>
            </div>

            <p
              className="v4-font v4-reveal v4-reveal-delay-5 mt-7 text-[13px]"
              style={{ color: "var(--v4-text-muted)" }}
            >
              No subscriptions{" · "}Unused credits never expire{" · "}1 credit = 1 validated mobile
            </p>
          </div>

          {/* RIGHT — credits card overlapped with CSV preview */}
          <div className="relative lg:col-span-6">
            <div className="relative mx-auto max-w-[560px] lg:max-w-none">
              <div className="v4-reveal v4-reveal-delay-2">
                <CreditsCardV4 />
              </div>
              <div
                className="v4-reveal v4-reveal-delay-3 relative mx-3 -mt-8 md:-mt-10"
                style={{ zIndex: 1 }}
              >
                <CsvPreviewV4 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
