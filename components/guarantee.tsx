import Image from "next/image";
import { Reveal } from "@/components/reveal";

const chips = [
  "Verified at source",
  "Automatic replacement",
  "Human account manager",
];

export function Guarantee() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-surface)] py-24 md:py-28 lg:py-[96px]">
      <div
        aria-hidden
        className="glow-blob"
        style={{
          width: 520,
          height: 520,
          left: "5%",
          top: "50%",
          transform: "translateY(-50%)",
          background:
            "radial-gradient(circle, rgba(34, 201, 245, 0.18) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="glow-blob"
        style={{
          width: 380,
          height: 380,
          right: "-120px",
          bottom: "-120px",
          background:
            "radial-gradient(circle, rgba(27, 134, 255, 0.14) 0%, transparent 70%)",
        }}
      />
      <div className="relative container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="flex justify-center lg:col-span-4 lg:justify-start">
          <div className="relative">
            {/* soft ambient halo behind the seal */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: 360,
                height: 360,
                background:
                  "radial-gradient(circle, rgba(34,201,245,0.28) 0%, rgba(27,134,255,0.12) 45%, transparent 75%)",
              }}
            />
            <Image
              src="/leadity-guarantee.png"
              alt="Leadity refund plus 50% bonus seal"
              width={260}
              height={260}
              className="h-[220px] w-[220px] object-contain md:h-[260px] md:w-[260px]"
              priority
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-8">
          <p className="text-eyebrow">The Leadity guarantee</p>
          <h2 className="text-h2 text-balance mt-4 text-[var(--color-text-primary)]">
            Bad lead? We don&apos;t just replace it. We pay you back in bonus
            leads.
          </h2>
          <p className="mt-6 text-[18px] leading-[1.55] text-[var(--color-text-secondary)]">
            Every mobile number we deliver is live-verified before it hits your
            inbox. If any number turns out to be VOIP, a landline, or off-niche,
            we replace it free - and throw in 50% more clean Owners Mobiles on top. No
            support tickets. No chasing us down. Buy 2,000 Owners Mobiles, 150 come
            back bad? You get 150 replacements plus 75 bonus numbers. Simple as
            that.
          </p>
          <ul className="mt-8 flex flex-wrap items-center gap-3">
            {chips.map((c) => (
              <li
                key={c}
                className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-white px-3.5 py-1.5 text-[12px] font-medium text-[var(--color-text-secondary)]"
              >
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
