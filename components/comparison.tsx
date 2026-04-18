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
    theirs: "No quality filter — pay for VOIPs",
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
const theirsGradient =
  "linear-gradient(160deg, #2A2F36 0%, #1D2229 55%, #121619 100%)";

// spacing rhythm used in BOTH the card price rows and the pills overlay
// so the pills line up perfectly with each price row.
const pricePadY = "py-7";

function TierPill({ value }: { value: string }) {
  return (
    <div className="pointer-events-auto inline-flex min-w-[130px] flex-col items-center rounded-full bg-white px-5 py-2.5 shadow-[0_18px_40px_-18px_rgba(15,23,42,0.35),0_6px_16px_-8px_rgba(27,134,255,0.4)]">
      <span
        className="font-semibold leading-none tabular-nums text-brand-gradient"
        style={{ fontSize: "clamp(22px, 2.4vw, 26px)", letterSpacing: "-0.03em" }}
      >
        {value}
      </span>
      <span className="mt-1 text-[11px] font-medium text-[var(--color-text-muted)]">
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
            "radial-gradient(60% 50% at 50% 0%, rgba(34, 201, 245, 0.10), transparent 70%)",
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
          <div className="relative mx-auto mt-28 max-w-[1200px]">
            {/* Two cards side-by-side */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
              {/* ───────────── OURS CARD ───────────── */}
              <article
                className="relative order-2 rounded-[28px] px-8 pt-[110px] pb-10 text-white shadow-[0_40px_80px_-30px_rgba(27,134,255,0.55)]"
                style={{ background: oursGradient }}
              >
                {/* floating logo + white glow */}
                <div
                  aria-hidden
                  className="absolute -top-[90px] left-1/2 -translate-x-1/2"
                  style={{ transform: "translateX(-50%) rotate(-6deg)" }}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      width: "300px",
                      height: "300px",
                      background:
                        "radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.5) 30%, rgba(255,255,255,0.18) 55%, transparent 80%)",
                      filter: "blur(10px)",
                    }}
                  />
                  <Image
                    src="/logo.png"
                    alt="Leadity"
                    width={180}
                    height={180}
                    className="relative h-[180px] w-[180px] object-contain"
                    style={{
                      filter:
                        "drop-shadow(0 18px 36px rgba(9,81,255,0.4)) drop-shadow(0 0 30px rgba(255,255,255,0.6))",
                    }}
                    priority
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-center font-semibold tracking-[-0.04em] text-white"
                  style={{
                    fontSize: "clamp(40px, 4.4vw, 56px)",
                    lineHeight: 1,
                  }}
                >
                  Ours
                </h3>

                <div className="mt-8 h-px w-full bg-white/20" />

                {/* Prices — uses same pricePadY as the pill overlay for perfect alignment */}
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
                          fontSize: "clamp(28px, 3.2vw, 36px)",
                          letterSpacing: "-0.03em",
                          lineHeight: 1,
                        }}
                      >
                        {t.leadity}
                      </span>
                      {/* Inline tier label — shown on mobile where the center pills are hidden */}
                      <span className="mt-2 block text-[12px] font-medium text-white/75 lg:hidden">
                        {t.label} Owners Mobiles
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-2 h-px w-full bg-white/20" />

                {/* Features */}
                <ul className="flex flex-col">
                  {features.map((f, i) => (
                    <li
                      key={f.ours}
                      className={
                        "flex items-center gap-3 py-4 " +
                        (i < features.length - 1 ? "border-b border-white/20" : "")
                      }
                    >
                      <span
                        aria-hidden
                        className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/95 text-[#1B86FF]"
                      >
                        <Check className="h-4 w-4" strokeWidth={3} />
                      </span>
                      <span className="text-[15px] font-medium text-white md:text-[16px]">
                        {f.ours}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>

              {/* ───────────── THEIRS CARD ───────────── */}
              <article
                className="relative order-1 rounded-[28px] px-8 pt-[110px] pb-10 text-white shadow-[0_40px_80px_-30px_rgba(15,23,42,0.5)]"
                style={{ background: theirsGradient }}
              >
                {/* floating logos */}
                <div
                  aria-hidden
                  className="absolute -top-[75px] left-1/2 flex -translate-x-1/2 items-center gap-3"
                >
                  <div
                    className="relative h-[130px] w-[130px] overflow-hidden rounded-2xl ring-4 ring-[#1D2229]"
                    style={{
                      boxShadow:
                        "0 24px 40px rgba(0,0,0,0.35), 0 6px 14px rgba(0,0,0,0.3)",
                      transform: "rotate(-6deg)",
                    }}
                  >
                    <Image
                      src="/competitors/outscraper.png"
                      alt="Outscraper"
                      fill
                      sizes="130px"
                      className="object-cover"
                    />
                  </div>
                  <div
                    className="relative flex h-[130px] w-[130px] items-center justify-center overflow-hidden rounded-2xl bg-white ring-4 ring-[#1D2229]"
                    style={{
                      boxShadow:
                        "0 24px 40px rgba(0,0,0,0.35), 0 6px 14px rgba(0,0,0,0.3)",
                      transform: "rotate(6deg)",
                    }}
                  >
                    <Image
                      src="/competitors/clearoutphone.png"
                      alt="Clearoutphone"
                      width={100}
                      height={100}
                      className="h-[100px] w-[100px] object-contain"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-center font-semibold tracking-[-0.04em] text-white"
                  style={{
                    fontSize: "clamp(40px, 4.4vw, 56px)",
                    lineHeight: 1,
                  }}
                >
                  Theirs
                </h3>

                <div className="mt-8 h-px w-full bg-white/15" />

                {/* Prices */}
                <div className="flex flex-col">
                  {tiers.map((t, i) => (
                    <div
                      key={t.competitor}
                      className={
                        `${pricePadY} text-center ` +
                        (i < tiers.length - 1 ? "border-b border-white/15" : "")
                      }
                    >
                      <span
                        className="inline-block font-semibold tabular-nums text-[#FF5A5A]"
                        style={{
                          fontSize: "clamp(22px, 2.6vw, 30px)",
                          letterSpacing: "-0.025em",
                          lineHeight: 1,
                          textShadow: "0 0 24px rgba(255,90,90,0.35)",
                        }}
                      >
                        {t.competitor}
                      </span>
                      {/* Inline tier label on mobile */}
                      <span className="mt-2 block text-[12px] font-medium text-white/60 lg:hidden">
                        {t.label} Owners Mobiles
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-2 h-px w-full bg-white/15" />

                {/* Features */}
                <ul className="flex flex-col">
                  {features.map((f, i) => (
                    <li
                      key={f.theirs}
                      className={
                        "flex items-center gap-3 py-4 " +
                        (i < features.length - 1 ? "border-b border-white/15" : "")
                      }
                    >
                      <span
                        aria-hidden
                        className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15 text-white/80"
                      >
                        <X className="h-4 w-4" strokeWidth={3} />
                      </span>
                      <span className="text-[15px] font-medium text-white/80 md:text-[16px]">
                        {f.theirs}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            {/* ───────────── TIER PILLS OVERLAY ─────────────
                Absolute overlay that mirrors the exact vertical rhythm of the
                card's price section. Each pill lives in a row with the same
                pricePadY, so it aligns perfectly with the corresponding price
                row inside both cards. */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-[110px] z-10 hidden flex-col items-center px-8 lg:flex"
            >
              {/* Title placeholder — must match h3 height + mt-8 + divider h-px */}
              <div
                style={{ height: "clamp(40px, 4.4vw, 56px)" }}
                aria-hidden
              />
              <div className="h-8" aria-hidden />
              <div className="h-px" aria-hidden />

              {/* Price rows with pills centered in each.
                  Invisible placeholder matches the ACTUAL price text height so the
                  overlay rhythm stays identical to the cards' price rhythm. The pill
                  is absolutely positioned over the placeholder without adding height. */}
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
                      fontSize: "clamp(28px, 3.2vw, 36px)",
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
            rates. Your actual mileage may vary — ours won&apos;t.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
