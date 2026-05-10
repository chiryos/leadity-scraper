"use client";

/**
 * v3 Pricing — 4-card grid (Free, Starter, Growth, Scale) in webild
 * white-box style. Data from lib/plans.ts. Mobile count is the hero
 * number, price drops below as supporting info.
 */

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SectionFrame } from "@/components/v3/section-frame";
import { plans } from "@/lib/plans";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export function PricingV3() {
  const [affiliateOn, setAffiliateOn] = React.useState(false);

  return (
    <SectionFrame
      id="pricing"
      eyebrow="Pricing"
      headlineLead="Pay only for"
      headlineEmphasis="verified mobiles."
      centered
    >
      <p className="v3-font mx-auto max-w-[640px] text-center text-[14.5px] md:text-[15.5px] leading-relaxed text-[var(--v3-fg)]/65">
        Every plan ships with verified Owners Mobiles, refund + 50% bonus on
        bad leads, and a real human in chat. No tool-stacking.
      </p>

      {/* Standard / Affiliate toggle */}
      <div className="mt-8 flex justify-center">
        <PriceToggle on={affiliateOn} onChange={setAffiliateOn} />
      </div>

      {/* 4-card grid */}
      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan) => (
          <PricingCard
            key={plan.name}
            plan={plan}
            affiliateOn={affiliateOn}
          />
        ))}
      </div>

      <p className="v3-font mt-8 text-center text-[13px] text-[var(--v3-fg)]/45">
        Need more than 10k mobiles per month?{" "}
        <a
          href="mailto:hello@leadity.io"
          className="underline hover:text-[var(--v3-fg)]/80"
        >
          Talk to us →
        </a>
      </p>
    </SectionFrame>
  );
}

function PriceToggle({
  on,
  onChange,
}: {
  on: boolean;
  onChange: (next: boolean) => void;
}) {
  return (
    <div className="v3-white-box v3-grad-ring inline-flex h-11 items-center gap-1 rounded-[12px] p-1 v3-font text-[13px]">
      <button
        type="button"
        onClick={() => onChange(false)}
        className={`flex h-9 items-center rounded-[9px] px-4 transition-colors ${
          !on
            ? "bg-white text-[var(--v3-fg)] shadow-[0_2px_4px_rgba(0,0,0,0.04)]"
            : "text-[var(--v3-fg)]/55"
        }`}
      >
        Standard
      </button>
      <button
        type="button"
        onClick={() => onChange(true)}
        className={`flex h-9 items-center rounded-[9px] px-4 transition-colors ${
          on
            ? "bg-white text-[var(--v3-fg)] shadow-[0_2px_4px_rgba(0,0,0,0.04)]"
            : "text-[var(--v3-fg)]/55"
        }`}
      >
        Affiliate
      </button>
      <span className="ml-1 inline-flex h-7 items-center rounded-[8px] bg-gradient-to-b from-[#4591FC] to-[#6DADF8] px-2.5 text-[10.5px] font-semibold uppercase tracking-wide text-white shadow-[0_4px_10px_-4px_rgba(58,137,253,0.55)]">
        Save more
      </span>
    </div>
  );
}

function PricingCard({
  plan,
  affiliateOn,
}: {
  plan: (typeof plans)[number];
  affiliateOn: boolean;
}) {
  const reduce = useReducedMotion();
  const isFree = plan.isFree === true;
  const isPopular = plan.popular === true && !isFree;
  const showBlue = isFree;
  const value = affiliateOn && !isFree ? plan.affiliate : plan.standard;
  const showStrike = affiliateOn && !isFree && plan.affiliate < plan.standard;

  // Free card uses blue gradient; others are plain white-box.
  const cardClass = showBlue
    ? "relative flex h-full lg:min-h-[600px] flex-col overflow-hidden rounded-[14px] p-7 text-white shadow-[0_22px_60px_-20px_rgba(58,137,253,0.55)]"
    : "v3-white-box v3-grad-ring relative flex h-full lg:min-h-[600px] flex-col rounded-[14px] p-7";

  const cardStyle: React.CSSProperties = showBlue
    ? {
        background:
          "linear-gradient(180deg, #4591FC 0%, #5DA0FB 55%, #6DADF8 100%)",
      }
    : {};

  const eyebrowColor = showBlue
    ? "text-white/80"
    : "text-[var(--v3-fg)]/45";
  const titleColor = showBlue ? "text-white" : "text-[var(--v3-fg)]";
  const descColor = showBlue ? "text-white/85" : "text-[var(--v3-fg)]/65";
  const priceColor = showBlue ? "text-white" : "text-[var(--v3-fg)]";
  const subColor = showBlue ? "text-white/75" : "text-[var(--v3-fg)]/55";
  const dividerClass = showBlue ? "bg-white/20" : "bg-[var(--v3-fg)]/10";
  const featureLabelColor = showBlue
    ? "text-white/95"
    : "text-[var(--v3-fg)]/85";
  const featureIconBg = showBlue ? "bg-white/20" : "bg-[#4D96FF]/10";
  const featureIconColor = showBlue ? "text-white" : "text-[#4D96FF]";

  return (
    <article className={cardClass} style={cardStyle}>
      {/* Popular pill (if applicable) */}
      {isPopular ? (
        <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 inline-flex items-center whitespace-nowrap rounded-full bg-white px-3 py-1 v3-font text-[11px] font-semibold uppercase tracking-[0.08em] text-[#4591FC] shadow-[0_8px_18px_-8px_rgba(58,137,253,0.5)]">
          Most popular
        </span>
      ) : null}

      {/* Free badge (if applicable) */}
      {isFree ? (
        <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 inline-flex items-center whitespace-nowrap rounded-full bg-white px-3 py-1 v3-font text-[11px] font-semibold uppercase tracking-[0.08em] text-[#4591FC] shadow-[0_8px_18px_-8px_rgba(58,137,253,0.5)]">
          Start free
        </span>
      ) : null}

      <div
        className={`v3-font text-[10.5px] font-semibold uppercase tracking-[0.14em] ${eyebrowColor}`}
      >
        Plan
      </div>
      <h3
        className={`v3-font mt-1.5 text-[22px] font-medium tracking-tight ${titleColor}`}
      >
        {plan.name}
      </h3>
      <p
        className={`v3-font mt-2.5 min-h-[58px] text-[13px] leading-[1.5] ${descColor}`}
      >
        {plan.description}
      </p>

      {/* MOBILE COUNT — hero number */}
      <div className="mt-5">
        <div
          className={`v3-font flex items-baseline tabular-nums leading-none tracking-[-0.04em] ${priceColor}`}
        >
          <span className="text-[52px] lg:text-[48px] xl:text-[56px] font-semibold">
            {plan.mobiles.toLocaleString()}
          </span>
        </div>
        <div
          className={`v3-font mt-1.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] ${
            showBlue ? "text-white/85" : "text-[var(--v3-fg)]/55"
          }`}
        >
          Owners Mobiles
        </div>
      </div>

      {/* PRICE — supporting info below */}
      <div className="mt-3 flex items-baseline gap-2">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={value}
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.18 }}
            className={`v3-font text-[24px] font-semibold leading-none tabular-nums ${priceColor}`}
          >
            ${value}
          </motion.span>
        </AnimatePresence>
        <span className={`v3-font text-[12px] ${subColor}`}>
          {isFree ? "free" : "flat, one-time"}
        </span>
        {showStrike ? (
          <span
            className={`v3-font text-[12px] line-through tabular-nums ${
              showBlue ? "text-white/55" : "text-[var(--v3-fg)]/40"
            }`}
          >
            ${plan.standard}
          </span>
        ) : null}
      </div>

      {/* CTA */}
      <Link
        href={isFree ? "#signup" : "#pricing-cta"}
        className={`v3-font mt-6 inline-flex h-11 w-full items-center justify-center gap-1.5 rounded-[12px] px-3 text-[13px] font-medium transition-[filter] duration-200 ${
          showBlue
            ? "bg-white text-[#0951FF] shadow-[0_8px_18px_-8px_rgba(0,0,0,0.25)] hover:brightness-[0.98]"
            : "v3-btn-blue v3-grad-ring text-white"
        }`}
      >
        {plan.cta}
        <ArrowRight className="h-4 w-4" />
      </Link>

      {/* Divider */}
      <div className={`my-7 h-px w-full ${dividerClass}`} />

      {/* Features */}
      <ul className="flex flex-1 flex-col gap-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <span
              className={`mt-0.5 inline-flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full ${featureIconBg} ${featureIconColor}`}
              style={{ height: 18, width: 18 }}
            >
              <Check
                className="h-2.5 w-2.5"
                strokeWidth={3.5}
                aria-hidden
              />
            </span>
            <span
              className={`v3-font text-[13.5px] leading-[1.5] ${featureLabelColor}`}
            >
              {f}
            </span>
          </li>
        ))}
      </ul>

      <p
        className={`v3-font mt-7 text-[11.5px] italic leading-relaxed ${subColor}`}
      >
        {plan.compareNote}
      </p>
    </article>
  );
}
