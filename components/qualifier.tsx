"use client";

import { Check, X } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal";

const notFor = [
  "You don't run outbound or paid traffic",
  "You're fine with VOIPs and dead numbers",
  "You only need under 300 leads / month",
  "You don't pick up your inbox",
  "You're happy stitching three tools",
];

const isFor = [
  "You need real Owners Mobiles, not landlines",
  "Your SMS or cold-call team can't keep up",
  "Outscraper's quality is too low",
  "You scrape multiple niches per month",
  "You want one product, one price, one refund policy",
  "You're tired of cleaning CSVs by hand",
  "You want a single dashboard for everything",
  "You want a human in chat when something breaks",
];

export function Qualifier() {
  return (
    <section className="section-py relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-50" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[420px] pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 0%, rgba(34, 201, 245, 0.16) 0%, rgba(27, 134, 255, 0.06) 40%, transparent 75%)",
        }}
      />
      <div className="relative container-page">
        <Reveal>
          <div className="mx-auto max-w-[820px] text-center">
            <p className="text-eyebrow">Who it&apos;s for</p>
            <h2 className="text-h2 text-balance mt-4 text-[var(--color-text-primary)]">
              <span className="block">Is Leadity</span>
              <span className="block text-brand-gradient">for you?</span>
            </h2>
            <p className="mt-5 max-w-[640px] mx-auto text-balance text-[18px] leading-[1.55] text-[var(--color-text-secondary)]">
              We don&apos;t scrape for everyone. If you&apos;re running cold SMS
              or cold-call outbound, you&apos;re probably on the right side.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal delay={0.05}>
            <article className="h-full rounded-2xl border border-[var(--color-border)] bg-white p-8">
              <header className="mb-6 flex items-center gap-3">
                <span
                  aria-hidden
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#FFE6E8] text-[#C4314B]"
                >
                  <X className="h-5 w-5" strokeWidth={2.5} />
                </span>
                <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-[var(--color-text-primary)]">
                  Leadity is{" "}
                  <span className="text-[#C4314B]">NOT</span> for you if…
                </h3>
              </header>
              <StaggerGroup as="ul" className="flex flex-col gap-2.5">
                {notFor.map((it) => (
                  <StaggerItem
                    as="li"
                    key={it}
                    className="flex items-center gap-3 rounded-xl border border-[#FCD9DD] bg-[#FFF4F5] px-4 py-3 text-[14px] text-[var(--color-text-primary)]"
                  >
                    <span
                      aria-hidden
                      className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#C4314B]"
                    >
                      <X className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    {it}
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </article>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="h-full rounded-2xl bg-brand-gradient p-px shadow-[0_18px_40px_-22px_rgba(27,134,255,0.4)]">
            <article className="relative h-full rounded-[15px] bg-white p-8">
              <header className="mb-6 flex items-center gap-3">
                <span
                  aria-hidden
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-gradient text-white"
                >
                  <Check className="h-5 w-5" strokeWidth={2.5} />
                </span>
                <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-[var(--color-text-primary)]">
                  Leadity{" "}
                  <span className="text-brand-gradient">IS</span> for you if…
                </h3>
              </header>
              <StaggerGroup as="ul" className="flex flex-col gap-2.5">
                {isFor.map((it) => (
                  <StaggerItem
                    as="li"
                    key={it}
                    className="flex items-center gap-3 rounded-xl border border-[#CFE9FF] bg-[#EAF4FF] px-4 py-3 text-[14px] text-[var(--color-text-primary)]"
                  >
                    <span
                      aria-hidden
                      className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-gradient text-white"
                    >
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {it}
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </article>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
