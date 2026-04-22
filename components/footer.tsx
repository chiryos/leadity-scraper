import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

const cols = [
  {
    label: "Product",
    items: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
      { label: "Dashboard", href: "#" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "mailto:hello@leadity.com" },
      { label: "Instagram", href: "#" },
    ],
  },
  {
    label: "Support",
    items: [
      { label: "Documentation", href: "#" },
      { label: "Help center", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
  {
    label: "Legal",
    items: [
      { label: "Privacy policy", href: "#" },
      { label: "Terms of service", href: "#" },
      { label: "Security", href: "#" },
      { label: "Cookie policy", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden text-white">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #1B86FF 0%, #1A5BD9 55%, #0F3DA8 100%)",
        }}
      />

      {/* Main column content - no watermark here so it can't overlap */}
      <div className="relative container-page pt-20 pb-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link
              href="#top"
              className="inline-flex items-center gap-3"
              aria-label="Leadity Scraper home"
            >
              <Image
                src="/logo.png"
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <span className="text-[22px] font-semibold tracking-[-0.04em] text-white">
                Leadity
              </span>
            </Link>
            <p className="mt-5 max-w-[320px] text-[14px] leading-[1.6] text-white/80">
              Mobile-only lead infrastructure for SMS marketing teams. Scrape
              Google Maps, classify carriers, ship clean CSVs.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {cols.map((col) => (
              <div key={col.label}>
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/60">
                  {col.label}
                </h4>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.items.map((it) => (
                    <li key={it.label}>
                      <a
                        href={it.href}
                        className="text-[14px] text-white/85 transition-colors hover:text-white"
                      >
                        {it.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom strip - copyright + status line, with the giant "Leadity" watermark fully visible behind */}
      <div className="relative">
        <div className="relative container-page">
          <div className="flex flex-col items-start justify-between gap-3 border-t border-white/15 pt-6 pb-5 text-[12px] text-white/80 md:flex-row md:items-center">
            <span>© 2026 Leadity Scraper. All rights reserved.</span>
          </div>
        </div>

        {/* Full watermark block - sits below the line, fully visible */}
        <div aria-hidden className="pointer-events-none flex select-none justify-center overflow-hidden px-4 pb-4">
          <span
            className="block whitespace-nowrap font-semibold text-white/[0.1]"
            style={{
              fontSize: "clamp(96px, 22vw, 380px)",
              lineHeight: 0.85,
              letterSpacing: "-0.06em",
            }}
          >
            Leadity
          </span>
        </div>
      </div>
    </footer>
  );
}
