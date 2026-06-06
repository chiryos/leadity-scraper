"use client";

/**
 * v4 Pricing — 3 credit-pack cards (real packs only).
 * Big accent count + "Credits" label + price + CTA.
 * 5,000 pack marked "Most picked" (the 13% discount tier).
 *
 * One-time, no subscription, credits never expire — stated near the grid.
 */

import * as React from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/v4/scroll-reveal";

type Pack = {
  credits: number;
  price: string;
  discountLabel?: string;
  popular?: boolean;
};

const PACKS: Pack[] = [
  { credits: 2000, price: "$59.99" },
  { credits: 5000, price: "$129.99", discountLabel: "−13%", popular: true },
  { credits: 10000, price: "$229.99", discountLabel: "−23%" },
];

export function PricingV4() {
  return (
    <section
      id="pricing"
      className="relative w-full"
      style={{ background: "var(--v4-surface)" }}
    >
      <div className="mx-auto w-full max-w-[1180px] px-5 md:px-8 py-24 md:py-32">
        <ScrollReveal>
          <p className="v4-eyebrow">PRICING</p>
          <h2
            className="v4-headline mt-3 text-balance"
            style={{
              fontSize: "clamp(2rem, 3.6vw, 2.8rem)",
              color: "var(--v4-text)",
            }}
          >
            Pay once, keep the credits.
          </h2>
          <p
            className="v4-font mt-4 max-w-[640px] text-[15px] md:text-[16px] leading-[1.6]"
            style={{ color: "var(--v4-text-secondary)" }}
          >
            Flat one-time pricing. Volume tiers, no subscriptions. 1 credit
            = 1 carrier-validated mobile lead — and credits never expire.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {PACKS.map((p) => (
            <PricingCard key={p.credits} pack={p} />
          ))}
        </div>

        <ScrollReveal>
          <p
            className="v4-font mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px]"
            style={{ color: "var(--v4-text-muted)" }}
          >
            <Bullet>One-time, no subscription</Bullet>
            <Bullet>Credits never expire</Bullet>
            <Bullet>1 credit = 1 validated mobile</Bullet>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function PricingCard({ pack }: { pack: Pack }) {
  const isPopular = pack.popular === true;
  return (
    <article
      className="v4-card relative flex h-full min-h-[280px] flex-col p-7"
      style={
        isPopular
          ? {
              borderColor: "var(--v4-accent)",
              boxShadow:
                "0 1px 2px rgba(15,23,42,0.04), 0 16px 36px -18px rgba(59,91,219,0.32)",
            }
          : undefined
      }
    >
      {isPopular ? (
        <span
          className="v4-chip absolute -top-3 left-1/2 -translate-x-1/2"
          style={{
            background: "var(--v4-accent)",
            color: "#fff",
            fontWeight: 600,
            padding: "5px 12px",
          }}
        >
          Most picked
        </span>
      ) : null}

      {pack.discountLabel ? (
        <span
          className="v4-chip absolute right-4 top-4"
          style={{
            background: "var(--v4-soft-bg)",
            color: "var(--v4-accent)",
            fontWeight: 600,
          }}
        >
          {pack.discountLabel}
        </span>
      ) : null}

      <div className="flex items-baseline gap-2">
        <span
          className="v4-display tabular-nums"
          style={{
            fontSize: "clamp(40px, 4.6vw, 56px)",
            color: "var(--v4-accent)",
          }}
        >
          {pack.credits.toLocaleString()}
        </span>
        <span
          className="v4-font text-[14px]"
          style={{ color: "var(--v4-text-secondary)" }}
        >
          Credits
        </span>
      </div>

      <div className="mt-1 flex items-baseline gap-2">
        <span
          className="v4-headline tabular-nums"
          style={{ fontSize: "30px", color: "var(--v4-text)" }}
        >
          {pack.price}
        </span>
        <span
          className="v4-font text-[13px]"
          style={{ color: "var(--v4-text-muted)" }}
        >
          one-time
        </span>
      </div>

      <p
        className="v4-font mt-3 text-[13px] leading-[1.55]"
        style={{ color: "var(--v4-text-secondary)" }}
      >
        {pack.credits.toLocaleString()} carrier-validated mobile leads.
        Yours forever — no monthly bill.
      </p>

      <Link
        href="/signup"
        className={isPopular ? "v4-btn-primary mt-6" : "v4-btn-secondary mt-6"}
        style={{ width: "100%" }}
      >
        Get started
        <span className="ms-icon" style={{ fontSize: 18 }} aria-hidden>
          arrow_forward
        </span>
      </Link>
    </article>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        className="ms-icon"
        style={{ fontSize: 16, color: "var(--v4-success)" }}
        data-fill="1"
        aria-hidden
      >
        check_circle
      </span>
      {children}
    </span>
  );
}
