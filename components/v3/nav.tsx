"use client";

/**
 * v3 Nav — webild-style white-box floating pill at top.
 *
 * Fixed, full-width pointer-events-none container; the actual pill is
 * centered, a .v3-white-box rectangle (NOT pill — 13px radius), with:
 *   [logo+wordmark]   [links]   [social icons]   [Log in]   [Get started]
 *
 * Social icons are circular .v3-white-box mini buttons.
 * Get started = .v3-btn-blue (primary blue gradient).
 */

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

function Pill({
  href,
  children,
  className = "",
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center transition-[filter] duration-300 ${className}`}
    >
      {children}
    </Link>
  );
}

export function NavV3() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
      <div className="mx-auto mt-3 flex w-full max-w-[1140px] items-center justify-between gap-2 rounded-[14px] px-2 py-1.5 pointer-events-auto v3-white-box v3-grad-ring">
        {/* Logo + wordmark */}
        <Link
          href="#top"
          className="flex items-center gap-2 px-3 py-1"
          aria-label="Leadity home"
        >
          <Image
            src="/logo.png"
            alt=""
            width={20}
            height={20}
            className="h-5 w-5 object-contain"
            priority
          />
          <span
            className="v3-font font-medium text-[15px] tracking-tight"
            style={{ color: "var(--v3-fg)" }}
          >
            Leadity
          </span>
        </Link>

        {/* Center links */}
        <ul className="hidden md:flex items-center gap-7 px-2">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="v3-font text-[13px] text-[var(--v3-fg)] hover:text-black transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right cluster */}
        <div className="flex items-center gap-1.5">
          {/* Social pill icons (hidden on mobile) — kept minimal here.
              Webild has discord/linkedin/x/instagram. We'll start with
              just a couple of placeholders; can expand later. */}
          <div className="hidden md:flex items-center gap-1">
            <a
              href="https://twitter.com/leadity"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="v3-white-box v3-grad-ring inline-flex h-8 w-8 items-center justify-center rounded-[10px]"
            >
              <svg
                viewBox="0 0 24 24"
                width="11"
                height="11"
                fill="currentColor"
                aria-hidden
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231L18.244 2.25Zm-1.16 17.52h1.833L7.084 4.126H5.117l11.967 15.644Z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/company/leadity"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="v3-white-box v3-grad-ring inline-flex h-8 w-8 items-center justify-center rounded-[10px]"
            >
              <svg
                viewBox="0 0 24 24"
                width="12"
                height="12"
                fill="currentColor"
                aria-hidden
              >
                <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM8 19H5V8h3v11zM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968 4.75 3.994 5.534 3.204 6.5 3.204c.967 0 1.75.79 1.75 1.764 0 .974-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
              </svg>
            </a>
          </div>

          {/* Log in */}
          <Pill
            href="#"
            ariaLabel="Log in"
            className="v3-white-box v3-grad-ring px-5 h-9 rounded-[12px] v3-font text-[12.5px] text-[var(--v3-fg)]"
          >
            Log in
          </Pill>

          {/* Get started */}
          <Pill
            href="#pricing"
            ariaLabel="Get started"
            className="v3-btn-blue v3-grad-ring px-5 h-9 rounded-[12px] v3-font text-[12.5px] text-white"
          >
            Get started
          </Pill>
        </div>
      </div>
    </header>
  );
}
