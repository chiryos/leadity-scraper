"use client";

/**
 * v4 Footer — white, hairline top border, brand + tagline + link columns.
 * Matches the live app, not a separate marketing system.
 */

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

const cols: { heading: string; items: { label: string; href: string }[] }[] = [
  {
    heading: "Product",
    items: [
      { label: "How it works", href: "#how-it-works" },
      { label: "Coverage", href: "#coverage" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    heading: "Account",
    items: [
      { label: "Sign in", href: "/signin" },
      { label: "Get started", href: "/signup" },
      { label: "Dashboard", href: "/dashboard" },
    ],
  },
  {
    heading: "Legal",
    items: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Contact", href: "mailto:hello@leadity.io" },
    ],
  },
];

export function FooterV4() {
  return (
    <footer
      className="relative w-full"
      style={{
        background: "var(--v4-surface)",
        borderTop: "1px solid var(--v4-border)",
      }}
    >
      <div className="mx-auto w-full max-w-[1180px] px-5 md:px-8 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="#top" className="flex items-center gap-2" aria-label="Leadity home">
              <Image
                src="/logo.png"
                alt=""
                width={22}
                height={22}
                className="h-[22px] w-[22px] object-contain"
              />
              <span
                className="v4-font text-[16px] font-semibold tracking-tight"
                style={{ color: "var(--v4-text)" }}
              >
                Leadity
              </span>
            </Link>
            <p
              className="v4-font mt-4 max-w-[360px] text-[13.5px] leading-[1.55]"
              style={{ color: "var(--v4-text-secondary)" }}
            >
              Carrier-validated owner mobile leads for US small businesses.
              One credit, one mobile, one CSV.
            </p>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.heading} className="md:col-span-2">
              <div
                className="v4-font text-[11.5px] font-semibold uppercase tracking-[0.12em]"
                style={{ color: "var(--v4-text-muted)" }}
              >
                {col.heading}
              </div>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="v4-font text-[13.5px] transition-colors"
                      style={{ color: "var(--v4-text)" }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div
          className="mt-14 flex flex-col-reverse items-start justify-between gap-3 border-t pt-6 md:flex-row md:items-center"
          style={{ borderColor: "var(--v4-border)" }}
        >
          <span
            className="v4-font text-[12px]"
            style={{ color: "var(--v4-text-muted)" }}
          >
            © 2026 Leadity Inc. All rights reserved.
          </span>
          <span
            className="v4-font text-[12px]"
            style={{ color: "var(--v4-text-muted)" }}
          >
            US-only · 1 credit = 1 carrier-validated mobile lead
          </span>
        </div>
      </div>
    </footer>
  );
}
