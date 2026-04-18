"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
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

const ease = [0.16, 1, 0.3, 1] as const;

export function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer when resizing up to desktop
  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeOnLink = React.useCallback(() => setOpen(false), []);

  return (
    <header
      id="top"
      className={cn(
        "sticky top-0 z-50 backdrop-blur-md transition-colors duration-200",
        "bg-white/80",
        (scrolled || open) && "border-b border-[var(--color-border)]",
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
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-surface)]"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "x" : "menu"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.18, ease }}
              className="inline-flex"
            >
              {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile drawer island - silky smooth spring slide, clean white, non-fullscreen */}
      <AnimatePresence>
        {open ? (
          <>
            {/* Soft backdrop to dismiss on tap outside */}
            <motion.div
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease }}
              className="fixed inset-0 top-[72px] z-40 bg-black/25 backdrop-blur-[3px] md:hidden"
              onClick={closeOnLink}
            />
            <motion.div
              id="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              initial={{ opacity: 0, y: -20, scaleY: 0.92 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -16, scaleY: 0.94 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 28,
                mass: 0.9,
                opacity: { duration: 0.3, ease },
              }}
              style={{ transformOrigin: "top center", willChange: "transform, opacity" }}
              className="md:hidden absolute left-4 right-4 top-[calc(72px+8px)] z-50 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-[0_24px_60px_-20px_rgba(15,23,42,0.25)]"
            >
              <motion.nav
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.035, delayChildren: 0.08 } },
                }}
                className="flex flex-col p-2"
              >
                {links.map((l) => (
                  <motion.a
                    key={l.href}
                    variants={{
                      hidden: { opacity: 0, y: -8 },
                      show: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.4, ease }}
                    href={l.href}
                    onClick={closeOnLink}
                    className="rounded-xl px-4 py-3 text-[15px] font-medium text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-surface)]"
                  >
                    {l.label}
                  </motion.a>
                ))}
                <motion.div
                  variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                  className="my-2 h-px bg-[var(--color-border)]"
                  aria-hidden
                />
                <motion.a
                  variants={{ hidden: { opacity: 0, y: -8 }, show: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.4, ease }}
                  href="#"
                  onClick={closeOnLink}
                  className="rounded-xl px-4 py-3 text-[14px] font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-surface)]"
                >
                  Sign in
                </motion.a>
                <motion.div
                  variants={{ hidden: { opacity: 0, y: -8 }, show: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.4, ease }}
                  className="p-2"
                >
                  <Button asChild size="block" variant="gradient">
                    <a href="#pricing" onClick={closeOnLink}>
                      Get leads
                    </a>
                  </Button>
                </motion.div>
              </motion.nav>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
