import Image from "next/image";
import { Check, X } from "lucide-react";
import { Reveal } from "@/components/reveal";

type Tier = { label: string; leadity: string; competitor: string };
type Feature = { ours: string; theirs: string };

const tiers: Tier[] = [
  { label: "2,000", leadity: "$59", competitor: "$67 – $211" },
  { label: "5,000", leadity: "$139", competitor: "$133 – $522" },
  { label: "10,000", leadity: "$229", competitor: "$307 – $1,053" },
];

const features: Feature[] = [
  {
    ours: "Scrape + validate in one product",
    theirs: "Two separate tools, two bills",
  },
  {
    ours: "4× higher quality filter built in",
    theirs: "No quality filter - pay for VOIPs",
  },
  {
    ours: "2× faster scraping, tunable workers",
    theirs: "Slow crawls and rate-limits",
  },
  {
    ours: "Refund + 50% bonus on bad leads",
    theirs: "No refund, no safety net",
  },
];

const oursGradient =
  "linear-gradient(160deg, #22C9F5 0%, #1B86FF 45%, #0951FF 100%)";
// Same light-gray gradient as the Scale pricing card for a unified, premium look
const theirsGradient =
  "linear-gradient(180deg, #FBFCFD 0%, #EEF1F6 55%, #E2E7EE 100%)";

// spacing rhythm used in BOTH the card price rows and the pills overlay
// so the pills line up perfectly with each price row.
const pricePadY = "py-4";

function TierPill({ value }: { value: string }) {
  return (
    <div className="pointer-events-auto inline-flex min-w-[90px] flex-col items-center rounded-full bg-white px-3.5 py-1.5 shadow-[0_12px_26px_-12px_rgba(15,23,42,0.3),0_4px_10px_-5px_rgba(27,134,255,0.35)]">
      <span
        className="font-semibold leading-none tabular-nums text-brand-gradient"
        style={{ fontSize: "clamp(14px, 1.5vw, 17px)", letterSpacing: "-0.03em" }}
      >
        {value}
      </span>
      <span className="mt-0.5 text-[9px] font-medium text-[var(--color-text-muted)]">
        Owners Mobiles
      </span>
    </div>
  );
}

export function Comparison() {
  return (
    <section className="section-py relative overflow-hidden bg-[var(--color-surface)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px]"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(34, 201, 245, 0.16) 0%, rgba(27, 134, 255, 0.06) 40%, transparent 75%)",
        }}
      />
      <div className="relative container-page">
        <Reveal>
          <div className="mx-auto max-w-[820px] text-center">
            <p className="text-eyebrow">Compared</p>
            <h2 className="text-h2 text-balance mt-4 text-[var(--color-text-primary)]">
              <span className="block">One tool or</span>
              <span className="block text-brand-gradient">three bills.</span>
            </h2>
            <p className="mt-5 max-w-[640px] mx-auto text-balance text-[18px] leading-[1.55] text-[var(--color-text-secondary)]">
              Same verified Owners Mobiles. Two experiences. Only one of them feels
              good.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-16 max-w-[720px]">
            {/* Two cards side-by-side; generous vertical gap on mobile so the floating Ours logo clears the Theirs card above */}
            <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-6">
              {/* ───────────── OURS CARD ───────────── */}
              <article
                className="relative order-2 rounded-[18px] px-5 pt-[70px] pb-6 text-white shadow-[0_24px_48px_-20px_rgba(27,134,255,0.55)]"
                style={{ background: oursGradient }}
              >
                {/* floating logo with grounded black drop-shadow */}
                <div
                  aria-hidden
                  className="absolute left-1/2 z-20 -translate-x-1/2"
                  style={{ top: "-54px" }}
                >
                  <Image
                    src="/logo.png"
                    alt="Leadity"
                    width={108}
                    height={108}
                    className="relative h-[108px] w-[108px] object-contain"
                    style={{
                      filter:
                        "drop-shadow(0 14px 26px rgba(0,0,0,0.4)) drop-shadow(0 4px 10px rgba(0,0,0,0.28))",
                    }}
                    priority
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-center font-semibold tracking-[-0.04em] text-white"
                  style={{
                    fontSize: "clamp(24px, 2.8vw, 34px)",
                    lineHeight: 1,
                  }}
                >
                  Ours
                </h3>

                <div className="mt-5 h-px w-full bg-white/20" />

                {/* Prices - uses same pricePadY as the pill overlay for perfect alignment */}
                <div className="flex flex-col">
                  {tiers.map((t, i) => (
                    <div
                      key={t.leadity}
                      className={
                        `${pricePadY} text-center ` +
                        (i < tiers.length - 1 ? "border-b border-white/20" : "")
                      }
                    >
                      <span
                        className="inline-block font-semibold tabular-nums text-white"
                        style={{
                          fontSize: "clamp(17px, 2vw, 22px)",
                          letterSpacing: "-0.03em",
                          lineHeight: 1,
                        }}
                      >
                        {t.leadity}
                      </span>
                      {/* Inline tier label - shown on mobile where the center pills are hidden */}
                      <span className="mt-1.5 block text-[10px] font-medium text-white/75 lg:hidden">
                        {t.label} Owners Mobiles
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-1.5 h-px w-full bg-white/20" />

                {/* Features */}
                <ul className="flex flex-col">
                  {features.map((f, i) => (
                    <li
                      key={f.ours}
                      className={
                        "flex items-center gap-2.5 py-2.5 " +
                        (i < features.length - 1 ? "border-b border-white/20" : "")
                      }
                    >
                      <span
                        aria-hidden
                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/95 text-[#1B86FF]"
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span className="text-[12px] font-medium text-white md:text-[13px]">
                        {f.ours}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>

              {/* ───────────── THEIRS CARD ───────────── */}
              <article
                className="relative order-1 rounded-[18px] border border-[#D8DEE6] px-5 pt-[70px] pb-6 shadow-[0_12px_24px_-14px_rgba(15,23,42,0.18)]"
                style={{ background: theirsGradient }}
              >
                {/* floating logos — centered, z-20 to sit above adjacent cards */}
                <div
                  aria-hidden
                  className="absolute -top-[45px] left-1/2 z-20 flex -translate-x-1/2 items-center gap-2"
                >
                  <div
                    className="relative h-[78px] w-[78px] overflow-hidden rounded-xl ring-[3px] ring-white"
                    style={{
                      boxShadow:
                        "0 14px 24px rgba(15,23,42,0.18), 0 4px 8px rgba(15,23,42,0.12)",
                      transform: "rotate(-6deg)",
                    }}
                  >
                    <Image
                      src="/competitors/outscraper.png"
                      alt="Outscraper"
                      fill
                      sizes="78px"
                      className="object-cover"
                    />
                  </div>
                  <div
                    className="relative flex h-[78px] w-[78px] items-center justify-center overflow-hidden rounded-xl bg-white ring-[3px] ring-white"
                    style={{
                      boxShadow:
                        "0 14px 24px rgba(15,23,42,0.18), 0 4px 8px rgba(15,23,42,0.12)",
                      transform: "rotate(6deg)",
                    }}
                  >
                    <Image
                      src="/competitors/clearoutphone.png"
                      alt="Clearoutphone"
                      width={60}
                      height={60}
                      className="h-[60px] w-[60px] object-contain"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-center font-semibold tracking-[-0.04em] text-[var(--color-text-primary)]"
                  style={{
                    fontSize: "clamp(24px, 2.8vw, 34px)",
                    lineHeight: 1,
                  }}
                >
                  Theirs
                </h3>

                <div className="mt-5 h-px w-full bg-[#D8DEE6]" />

                {/* Prices */}
                <div className="flex flex-col">
                  {tiers.map((t, i) => (
                    <div
                      key={t.competitor}
                      className={
                        `${pricePadY} text-center ` +
                        (i < tiers.length - 1 ? "border-b border-[#D8DEE6]" : "")
                      }
                    >
                      <span
                        className="inline-block font-semibold tabular-nums text-[#FF5A5A]"
                        style={{
                          fontSize: "clamp(14px, 1.6vw, 18px)",
                          letterSpacing: "-0.025em",
                          lineHeight: 1,
                          textShadow: "0 0 16px rgba(255,90,90,0.25)",
                        }}
                      >
                        {t.competitor}
                      </span>
                      {/* Inline tier label on mobile */}
                      <span className="mt-1.5 block text-[10px] font-medium text-[var(--color-text-muted)] lg:hidden">
                        {t.label} Owners Mobiles
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-1.5 h-px w-full bg-[#D8DEE6]" />

                {/* Features */}
                <ul className="flex flex-col">
                  {features.map((f, i) => (
                    <li
                      key={f.theirs}
                      className={
                        "flex items-center gap-2.5 py-2.5 " +
                        (i < features.length - 1 ? "border-b border-[#D8DEE6]" : "")
                      }
                    >
                      <span
                        aria-hidden
                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E2E7EE] text-[var(--color-text-muted)]"
                      >
                        <X className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span className="text-[12px] font-medium text-[var(--color-text-secondary)] md:text-[13px]">
                        {f.theirs}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            {/* ───────────── TIER PILLS OVERLAY ───────────── */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-[70px] z-10 hidden flex-col items-center px-5 lg:flex"
            >
              {/* Title placeholder - must match h3 height + mt-5 + divider h-px */}
              <div
                style={{ height: "clamp(24px, 2.8vw, 34px)" }}
                aria-hidden
              />
              <div className="h-5" aria-hidden />
              <div className="h-px" aria-hidden />

              {tiers.map((t, i) => (
                <div
                  key={t.label}
                  className={
                    `${pricePadY} relative flex w-full items-center justify-center ` +
                    (i < tiers.length - 1 ? "border-b border-transparent" : "")
                  }
                >
                  <span
                    aria-hidden
                    className="invisible font-semibold tabular-nums"
                    style={{
                      fontSize: "clamp(17px, 2vw, 22px)",
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                    }}
                  >
                    $999
                  </span>
                  <div className="pointer-events-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <TierPill value={t.label} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-10 max-w-[720px] mx-auto text-center text-[13px] text-[var(--color-text-muted)]">
            Pricing snapshot captured from public Outscraper + Clearoutphone
            rates. Your actual mileage may vary - ours won&apos;t.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
