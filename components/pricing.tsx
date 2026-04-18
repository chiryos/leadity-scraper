"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Gift } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { plans } from "@/lib/plans";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

function PriceDisplay({
  standard,
  affiliate,
  affiliateOn,
  popular,
}: {
  standard: number;
  affiliate: number;
  affiliateOn: boolean;
  popular: boolean;
}) {
  const reduce = useReducedMotion();
  const value = affiliateOn ? affiliate : standard;

  return (
    <div className="flex items-end gap-3">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={value}
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.18 }}
          className={cn(
            "text-[64px] font-semibold leading-none tracking-[-0.04em] tabular-nums",
            popular ? "text-white" : "text-[var(--color-text-primary)]",
          )}
        >
          ${value}
        </motion.span>
      </AnimatePresence>
      {affiliateOn ? (
        <span
          className={cn(
            "pb-2 text-[14px] line-through tabular-nums",
            popular ? "text-white/65" : "text-[var(--color-text-muted)]",
          )}
        >
          ${standard}
        </span>
      ) : null}
    </div>
  );
}

const easeOut = [0.16, 1, 0.3, 1] as const;

export function Pricing() {
  const [affiliateOn, setAffiliateOn] = React.useState(false);
  // Mobile-only: which plan is currently expanded. Defaults to the popular one.
  const [activePlan, setActivePlan] = React.useState<string>(
    plans.find((p) => p.popular)?.name ?? plans[0].name,
  );

  return (
    <section id="pricing" className="section-py relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-50" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(34, 201, 245, 0.16) 0%, rgba(27, 134, 255, 0.06) 40%, transparent 75%)",
        }}
      />
      <div className="relative container-page">
        <Reveal>
          <div className="mx-auto max-w-[820px] text-center">
            <p className="text-eyebrow">Pricing</p>
            <h2 className="text-h2 text-balance mt-4 text-[var(--color-text-primary)]">
              <span className="block">Pick your</span>
              <span className="block text-brand-gradient">scrape volume.</span>
            </h2>
            <p className="mt-5 max-w-[640px] mx-auto text-balance text-[18px] leading-[1.55] text-[var(--color-text-secondary)]">
              Every plan ships with verified Owners Mobiles, refund + 50% bonus on bad
              leads, and a real human in chat. No tool-stacking.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 flex justify-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  role="switch"
                  aria-checked={affiliateOn}
                  onClick={() => setAffiliateOn((v) => !v)}
                  className="inline-flex items-center gap-3 rounded-full border border-[var(--color-border)] bg-white px-1.5 py-1.5 pl-4 pr-1.5 shadow-[0_8px_24px_-16px_rgba(27,134,255,0.4)]"
                >
                  <span
                    className={cn(
                      "text-[13px] font-medium transition-colors",
                      affiliateOn
                        ? "text-[var(--color-text-secondary)]"
                        : "text-[var(--color-text-primary)]",
                    )}
                  >
                    Standard
                  </span>
                  <span
                    className={cn(
                      "relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200",
                      affiliateOn ? "bg-brand-gradient" : "bg-[var(--color-surface-muted)]",
                    )}
                  >
                    <span
                      className={cn(
                        "inline-block h-5 w-5 transform rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.2)] transition-transform duration-200",
                        affiliateOn ? "translate-x-[22px]" : "translate-x-0.5",
                      )}
                    />
                  </span>
                  <span
                    className={cn(
                      "text-[13px] font-medium transition-colors",
                      affiliateOn
                        ? "text-[var(--color-text-primary)]"
                        : "text-[var(--color-text-secondary)]",
                    )}
                  >
                    Affiliate
                  </span>
                  <span className="ml-1 inline-flex items-center rounded-full bg-brand-gradient px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.06em] text-white">
                    Save more
                  </span>
                </button>
              </TooltipTrigger>
              <TooltipContent>Pricing for Aditya&apos;s community members.</TooltipContent>
            </Tooltip>
          </div>
        </Reveal>

        {/* ───── Affiliate discount banner ─────
            Appears when Affiliate is on, so the value of the toggle is obvious
            at a glance. Replaces any ambiguity about why prices dropped. */}
        <AnimatePresence initial={false}>
          {affiliateOn ? (
            <motion.div
              key="affiliate-banner"
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-visible"
            >
              <div className="mt-6 flex justify-center">
                <div
                  className="inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-white shadow-[0_18px_40px_-18px_rgba(27,134,255,0.65)]"
                  style={{
                    background:
                      "linear-gradient(135deg, #22C9F5 0%, #1B86FF 45%, #0951FF 100%)",
                  }}
                >
                  <Gift className="h-4 w-4 shrink-0" aria-hidden />
                  <span className="text-[13px] font-semibold tracking-[0.01em] md:text-[14px]">
                    Up to <span className="tabular-nums">−40%</span> off when you invite your friends
                  </span>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        {/* ───── Mobile accordion (below lg) ─────
            Three compact stacked rows. Tapping one expands it with a blue
            gradient and reveals features + CTA. The others collapse.
            All motion uses a soft spring (low stiffness, high damping) for
            a buttery, Apple-ish feel — layout, height, content fade all
            share the same timing so it feels like one continuous motion. */}
        <motion.div
          className="mt-10 flex flex-col gap-3 lg:hidden"
          // Group-wide layout transition — every sibling row that shifts
          // position as one row expands glides with the same spring.
          transition={{
            layout: { type: "spring", stiffness: 140, damping: 26, mass: 1 },
          }}
        >
          {plans.map((plan) => {
            const isActive = activePlan === plan.name;
            const price = affiliateOn ? plan.affiliate : plan.standard;
            return (
              <motion.div
                key={plan.name}
                layout
                transition={{
                  layout: {
                    type: "spring",
                    stiffness: 140,
                    damping: 26,
                    mass: 1,
                  },
                }}
                role="button"
                tabIndex={0}
                aria-pressed={isActive}
                onClick={() => setActivePlan(plan.name)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActivePlan(plan.name);
                  }
                }}
                className={cn(
                  "relative cursor-pointer overflow-hidden rounded-2xl border shadow-[0_14px_30px_-18px_rgba(15,23,42,0.18)] outline-none",
                  isActive
                    ? "border-transparent text-white"
                    : "border-[#D8DEE6] bg-white",
                )}
                style={{
                  background: isActive
                    ? "linear-gradient(160deg, #22C9F5 0%, #1B86FF 45%, #0951FF 100%)"
                    : undefined,
                  // Color transitions are handled by framer's color crossfade
                  // via background inline style. Tailwind transition-colors
                  // would fight the inline background, so we rely on the
                  // surrounding layout animation to mask the swap.
                  transition: "background 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                <motion.div layout className="flex items-center gap-4 p-5">
                  {/* Radio dot */}
                  <motion.span
                    layout
                    className={cn(
                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2",
                      isActive
                        ? "border-white bg-white"
                        : "border-[#C8D1DD] bg-white",
                    )}
                    style={{
                      transition:
                        "border-color 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    <AnimatePresence initial={false}>
                      {isActive ? (
                        <motion.span
                          key="dot"
                          aria-hidden
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 420,
                            damping: 28,
                            mass: 0.6,
                          }}
                          className="h-2.5 w-2.5 rounded-full bg-[#0951FF]"
                        />
                      ) : null}
                    </AnimatePresence>
                  </motion.span>

                  <div className="min-w-0 flex-1">
                    {/* PRIMARY: mobile count */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <span
                        className={cn(
                          "text-[17px] font-semibold tabular-nums",
                          isActive
                            ? "text-white"
                            : "text-[var(--color-text-primary)]",
                        )}
                      >
                        {plan.mobiles.toLocaleString()} Owners Mobiles
                      </span>
                      {plan.popular ? (
                        <span
                          className={cn(
                            "inline-flex items-center rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.08em]",
                            isActive
                              ? "bg-white/20 text-white"
                              : "bg-[#EAF4FF] text-[#0951FF]",
                          )}
                        >
                          Most popular
                        </span>
                      ) : null}
                    </div>
                    {/* SECONDARY: plan name */}
                    <div
                      className={cn(
                        "mt-0.5 text-[11px] font-medium uppercase tracking-[0.12em]",
                        isActive
                          ? "text-white/75"
                          : "text-[var(--color-text-muted)]",
                      )}
                    >
                      {plan.name} plan
                    </div>
                  </div>

                  <div className="text-right">
                    <div
                      className={cn(
                        "text-[22px] font-semibold leading-none tabular-nums",
                        isActive
                          ? "text-white"
                          : "text-[var(--color-text-primary)]",
                      )}
                    >
                      ${price}
                    </div>
                    {affiliateOn ? (
                      <div
                        className={cn(
                          "mt-1 text-[11px] line-through tabular-nums",
                          isActive ? "text-white/65" : "text-[var(--color-text-muted)]",
                        )}
                      >
                        ${plan.standard}
                      </div>
                    ) : null}
                  </div>
                </motion.div>

                <AnimatePresence initial={false}>
                  {isActive ? (
                    <motion.div
                      key="expand"
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 140,
                        damping: 26,
                        mass: 1,
                      }}
                      style={{ overflow: "hidden" }}
                    >
                      {/* Inner fade slightly delayed + longer so the content
                          materialises gracefully INSIDE the expanding card. */}
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 0 }}
                        transition={{
                          opacity: { duration: 0.45, ease: easeOut, delay: 0.08 },
                          y: { duration: 0.5, ease: easeOut, delay: 0.08 },
                        }}
                        className="px-5 pb-5"
                      >
                        <div className="mb-4 h-px w-full bg-white/20" />
                        <p className="text-[13px] leading-[1.55] text-white/85">
                          {plan.description}
                        </p>
                        <ul className="mt-4 flex flex-col gap-2.5">
                          {plan.features.map((f) => (
                            <li
                              key={f}
                              className="flex items-start gap-2.5 text-[13px] text-white/95"
                            >
                              <span
                                aria-hidden
                                className="mt-0.5 inline-flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-white/25 text-white"
                              >
                                <Check className="h-3 w-3" strokeWidth={3} />
                              </span>
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                        <Button
                          asChild
                          size="block"
                          className="mt-5 bg-white text-[#0951FF] shadow-[0_12px_28px_-12px_rgba(0,0,0,0.35)] hover:bg-white/95 hover:brightness-100"
                        >
                          <a
                            href="#pricing-cta"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {plan.cta}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                        <p className="mt-4 text-[11px] italic text-white/70">
                          {plan.compareNote}
                        </p>
                      </motion.div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ───── Desktop grid (lg+) ───── */}
        <div className="mt-12 hidden gap-6 lg:grid lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan, i) => {
            if (plan.popular) {
              return (
                <Reveal
                  key={plan.name}
                  delay={0.05 * i}
                  className="order-first lg:order-none"
                >
                  <article
                    className="relative flex h-full flex-col rounded-2xl p-8 text-white shadow-[0_40px_80px_-25px_rgba(27,134,255,0.6)] transition-transform duration-200 lg:-translate-y-3 hover:-translate-y-4"
                    style={{
                      background:
                        "linear-gradient(160deg, #22C9F5 0%, #1B86FF 45%, #0951FF 100%)",
                    }}
                  >
                    <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 inline-flex items-center whitespace-nowrap rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0951FF] shadow-[0_8px_24px_-10px_rgba(27,134,255,0.6)]">
                      Most popular
                    </span>

                    <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/75">
                      Plan
                    </div>
                    <h3 className="mt-1 text-[24px] font-semibold tracking-[-0.02em] text-white">
                      {plan.name}
                    </h3>
                    <p className="mt-2 text-[14px] leading-[1.55] text-white/85">
                      {plan.description}
                    </p>

                    <div className="mt-7 flex items-baseline gap-3">
                      <PriceDisplay
                        standard={plan.standard}
                        affiliate={plan.affiliate}
                        affiliateOn={affiliateOn}
                        popular={plan.popular}
                      />
                      <span className="pb-1 text-[14px] text-white/70 tabular-nums">
                        / {plan.mobiles.toLocaleString()} Owners Mobiles
                      </span>
                    </div>

                    <Button
                      asChild
                      size="block"
                      className="mt-7 bg-white text-[#0951FF] shadow-[0_12px_28px_-12px_rgba(0,0,0,0.35)] hover:bg-white/95 hover:brightness-100"
                    >
                      <a href="#pricing-cta">
                        {plan.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>

                    <div className="my-7 h-px w-full bg-white/20" />

                    <ul className="flex flex-col gap-3">
                      {plan.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2.5 text-[14px] text-white/90"
                        >
                          <span
                            aria-hidden
                            className="mt-0.5 inline-flex h-4.5 w-4.5 items-center justify-center rounded-full bg-white/25 text-white"
                          >
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-auto pt-7 text-[12px] italic text-white/65">
                      {plan.compareNote}
                    </p>
                  </article>
                </Reveal>
              );
            }

            // Non-popular: subtle white/gray gradient with soft blue ambient glow behind
            return (
              <Reveal key={plan.name} delay={0.05 * i}>
                <div className="relative h-full">
                  {/* Ambient blue glow behind each outer card */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-6 -z-10"
                    style={{
                      background:
                        "radial-gradient(60% 55% at 50% 60%, rgba(34, 201, 245, 0.16) 0%, rgba(27, 134, 255, 0.06) 40%, transparent 75%)",
                      filter: "blur(8px)",
                    }}
                  />
                  <article
                    className="relative flex h-full flex-col rounded-2xl border border-[#D8DEE6] p-8 shadow-[0_20px_40px_-24px_rgba(15,23,42,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#B8C2D0]"
                    style={{
                      background:
                        "linear-gradient(180deg, #FBFCFD 0%, #EEF1F6 55%, #E2E7EE 100%)",
                    }}
                  >
                    <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                      Plan
                    </div>
                    <h3 className="mt-1 text-[24px] font-semibold tracking-[-0.02em] text-[var(--color-text-primary)]">
                      {plan.name}
                    </h3>
                    <p className="mt-2 text-[14px] leading-[1.55] text-[var(--color-text-secondary)]">
                      {plan.description}
                    </p>

                    <div className="mt-7 flex items-baseline gap-3">
                      <PriceDisplay
                        standard={plan.standard}
                        affiliate={plan.affiliate}
                        affiliateOn={affiliateOn}
                        popular={plan.popular}
                      />
                      <span className="pb-1 text-[14px] text-[var(--color-text-muted)] tabular-nums">
                        / {plan.mobiles.toLocaleString()} Owners Mobiles
                      </span>
                    </div>

                    <Button asChild size="block" variant="ghost" className="mt-7">
                      <a href="#pricing-cta">
                        {plan.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>

                    <div className="my-7 h-px w-full bg-[#D8DEE6]" />

                    <ul className="flex flex-col gap-3">
                      {plan.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2.5 text-[14px] text-[var(--color-text-secondary)]"
                        >
                          <span
                            aria-hidden
                            className="mt-0.5 inline-flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#EAF4FF] text-[#0B5394]"
                          >
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-auto pt-7 text-[12px] italic text-[var(--color-text-muted)]">
                      {plan.compareNote}
                    </p>
                  </article>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <p
            id="pricing-cta"
            className="mt-12 text-center text-[14px] text-[var(--color-text-secondary)]"
          >
            Need more than 10k/month?{" "}
            <a
              href="mailto:hello@leadity.com"
              className="font-medium text-[var(--color-accent)] underline-offset-4 hover:underline"
            >
              Talk to us →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
