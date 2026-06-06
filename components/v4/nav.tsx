"use client";

/**
 * v4 Nav — glassmorphism floating island, sticky at top.
 * Auth-aware right cluster:
 *   anonymous: "Sign in" (ghost) + "Get started" (primary)
 *   loading:   render nothing on the right (avoid CTA flash)
 *   signed-in: single "Open dashboard" CTA
 *
 * The auth state is read from a future hook; for now we default to
 * `anonymous`. Wire it to your real auth provider by replacing
 * `useAuth()` below.
 */

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

type AuthState = "loading" | "anonymous" | "authed";

// Replace with your real auth hook (Clerk / Auth.js / Supabase / etc).
// Returning "anonymous" deterministically avoids hydration flicker.
function useAuth(): AuthState {
  return "anonymous";
}

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Coverage", href: "#coverage" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function NavV4() {
  const auth = useAuth();

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 md:px-4">
      <div className="mx-auto mt-3 flex w-full max-w-[1180px] items-center justify-between gap-2 pointer-events-auto v4-nav-glass rounded-[14px] px-3 py-2">
        {/* Brand */}
        <Link
          href="#top"
          className="flex items-center gap-2 px-1.5 py-1"
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
            className="v4-font font-semibold text-[14.5px] tracking-tight"
            style={{ color: "var(--v4-text)" }}
          >
            Leadity
          </span>
        </Link>

        {/* Center anchor links */}
        <ul className="hidden md:flex items-center gap-6 px-2">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="v4-font text-[13px] font-medium transition-colors"
                style={{ color: "var(--v4-text-secondary)" }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right cluster — auth aware. Loading renders nothing. */}
        <div className="flex items-center gap-2">
          {auth === "loading" ? null : auth === "authed" ? (
            <Link
              href="/dashboard"
              className="v4-btn-primary"
              style={{ height: 36, padding: "0 14px", fontSize: 13 }}
            >
              Open dashboard
              <span className="ms-icon" style={{ fontSize: 16 }}>
                arrow_forward
              </span>
            </Link>
          ) : (
            <>
              <Link
                href="/signin"
                className="v4-font hidden sm:inline-flex h-9 items-center rounded-[10px] px-3 text-[13px] font-medium transition-colors"
                style={{ color: "var(--v4-text-secondary)" }}
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                className="v4-btn-primary"
                style={{ height: 36, padding: "0 14px", fontSize: 13 }}
              >
                Get started
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
