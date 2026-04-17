"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

function Wordmark({ size = 20 }: { size?: number }) {
  const glyph = Math.round(size * 1.4);
  return (
    <Link
      href="#top"
      className="flex items-center gap-2.5"
      aria-label="Leadity Scraper home"
    >
      <img
        src="/logo.png"
        alt=""
        aria-hidden
        width={glyph}
        height={glyph}
        style={{ width: glyph, height: glyph }}
      />
      <span
        className="font-semibold text-[var(--color-accent)]"
        style={{ fontSize: size, letterSpacing: "-0.04em" }}
      >
        Leadity Scraper
      </span>
    </Link>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      id="top"
      className={cn(
        "sticky top-0 z-50 backdrop-blur-md transition-colors duration-200",
        "bg-white/80",
        scrolled && "border-b border-[var(--color-border)]",
      )}
    >
      <nav
        aria-label="Primary"
        className="container-page flex h-[72px] items-center justify-between"
      >
        <Wordmark />

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#"
            className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
          >
            Sign in
          </a>
          <Button asChild size="md">
            <a href="#pricing">Get leads</a>
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-[var(--color-text-primary)]"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5" aria-hidden />
        </button>
      </nav>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-white md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="container-page flex h-[72px] items-center justify-between">
            <Wordmark />
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>
          <div
            className="container-page flex flex-1 flex-col gap-6 pt-12"
            onClick={(e) => {
              if (e.target === e.currentTarget) setOpen(false);
            }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[32px] font-semibold tracking-[-0.03em] text-[var(--color-text-primary)]"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-8 flex flex-col gap-4">
              <a
                href="#"
                onClick={() => setOpen(false)}
                className="text-[18px] text-[var(--color-text-secondary)]"
              >
                Sign in
              </a>
              <Button asChild size="lg" className="w-full">
                <a href="#pricing" onClick={() => setOpen(false)}>
                  Get leads
                </a>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
