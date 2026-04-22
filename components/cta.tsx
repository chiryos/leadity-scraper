import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

/**
 * Closing CTA — the climactic blue-gradient card that lands right before
 * the footer. Mirrors the Ours comparison card and the Growth pricing card
 * so the page closes on a consistent, unmistakable brand moment.
 */
export function CTA() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28 lg:py-32">
      {/* Soft ambient glow under the card so it feels like it's floating */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[520px]"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 100%, rgba(34, 201, 245, 0.16) 0%, rgba(27, 134, 255, 0.06) 40%, transparent 75%)",
        }}
      />

      <div className="container-page relative">
        <Reveal>
          <div
            className="relative mx-auto max-w-[1120px] overflow-hidden rounded-[28px] px-6 py-14 text-white shadow-[0_60px_120px_-40px_rgba(9,81,255,0.55)] md:rounded-[32px] md:px-14 md:py-20 lg:px-20 lg:py-24"
            style={{
              background:
                "linear-gradient(160deg, #22C9F5 0%, #1B86FF 45%, #0951FF 100%)",
            }}
          >
            {/* Top-center white halo — subtle spotlight the ghost sits in */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3"
              style={{
                width: 560,
                height: 560,
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.08) 45%, transparent 75%)",
                filter: "blur(8px)",
              }}
            />
            {/* Faint hairline grid for texture */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.1]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                backgroundSize: "56px 56px",
              }}
            />

            <div className="relative flex flex-col items-center text-center">
              {/* Ghost logo */}
              <Image
                src="/logo.png"
                alt=""
                aria-hidden
                width={96}
                height={96}
                className="h-[80px] w-[80px] object-contain md:h-[92px] md:w-[92px]"
                style={{
                  filter:
                    "drop-shadow(0 18px 32px rgba(255,255,255,0.55)) drop-shadow(0 0 24px rgba(255,255,255,0.45))",
                }}
                priority={false}
              />

              {/* Eyebrow */}
              <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85">
                Ready when you are
              </p>

              {/* Headline
                  Mirrors the hero's "Scrape Google Maps. / Get Owners Mobiles."
                  imperative pair, but closes on the benefit of SPEED. Two
                  alternates kept as comments — swap in whichever reads best
                  after a live look:
                    • "Pick a niche. / Ship a CSV."   (echoes the subtitle)
                    • "Niche in. / CSV out."          (minimalist, ultra-punchy) */}
              <h2
                className="text-balance mt-4 font-semibold text-white"
                style={{
                  fontSize: "clamp(36px, 5.2vw, 64px)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1.04,
                }}
              >
                <span className="block">Scrape today.</span>
                <span className="block">Text tomorrow.</span>
              </h2>

              {/* Subtitle */}
              <p className="mt-6 max-w-[620px] text-balance text-[15px] leading-[1.55] text-white/85 md:text-[17px]">
                Pick a niche. Pick your volume. Launch. We ship
                carrier-verified Owners Mobiles as a clean CSV - with a refund
                plus 50% bonus on anything that doesn&apos;t text.
              </p>

              {/* CTAs */}
              <div className="mt-9 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:gap-5 md:mt-10">
                <a
                  href="#pricing"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-semibold text-[#0951FF] shadow-[0_18px_36px_-14px_rgba(0,0,0,0.4)] transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
                >
                  Start Scraping
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="mailto:hello@leadity.com"
                  className="text-[14px] font-medium text-white/90 underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  Talk to founders →
                </a>
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
