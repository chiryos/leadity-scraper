"use client";

/**
 * /tools/cold-call-script-generator — Skeleton (Phase 7)
 *
 * Future: AI-generated openers, qualifiers, objection-handlers per
 * vertical. Currently: a static script library indexed by vertical with
 * an inline "copy to clipboard" affordance. The interactive AI-gen
 * version ships in Phase 7 production once the prompt library + LLM
 * proxy are wired up.
 */

import { useState } from "react";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SignupPopup } from "@/components/signup-popup";

type Script = {
  vertical: string;
  opener: string;
  qualifier: string;
  objection: string;
};

const SCRIPTS: Script[] = [
  {
    vertical: "Roofing",
    opener:
      "Hi {firstName}, this is {yourName} from {yourCompany}. Quick question — are you the owner of {businessName}? Reason I'm calling, we work with roofing contractors in {city} who want a steadier flow of homeowner leads without the Angi auction. Got 60 seconds to hear if it's a fit?",
    qualifier:
      "How are you handling lead-gen right now — Angi, ServiceDirect, organic Google, referrals? What's working and what's costing you money you wish you weren't spending?",
    objection:
      'OBJECTION: "Not interested." → "Totally fair, most roofers I talk to aren\'t until I show them the math. Quick question — how much are you paying per Angi exclusive lead right now? ($150? $250?) Compare that to $59 for 2,000 owner-direct mobiles. That\'s the math. Worth 5 minutes Wednesday?"',
  },
  {
    vertical: "Solar",
    opener:
      "Hey {firstName}, {yourName} with {yourCompany}. Are you the owner of {businessName}? Quick context — we help solar installers in {state} replace pay-per-lead spend with their own owner-direct call lists. Saves about 80% of monthly lead cost. Got a moment?",
    qualifier:
      "What's your current cost per qualified appointment? Are you using Modernize, EnergySage, both? How's your close rate on those leads vs your own outbound?",
    objection:
      'OBJECTION: "Already have leads." → "Got it. How exclusive are they — first call, or 4th call after CompanyA, B, and C? Most solar shops we work with are 2nd-5th touch. Owner-direct from us means you\'re first call. Want to see what your TAM looks like in {state}?"',
  },
  {
    vertical: "HVAC",
    opener:
      "{firstName}, {yourName} from {yourCompany} — quick one. Are you the owner of {businessName}? We help HVAC contractors in {state} build their own replacement-season call list instead of paying $150-300 per Networx lead. Got 30 seconds?",
    qualifier:
      "How much of your monthly revenue comes from outbound vs inbound? What's your average cost per booked appointment right now?",
    objection:
      'OBJECTION: "We\'re already busy." → "Perfect — most of the HVAC owners we work with are. They use this when busy season slows or to add a second crew. Two questions: how predictable is your pipeline 90 days out, and what does an extra 5 jobs/month do for you?"',
  },
  {
    vertical: "Pest control",
    opener:
      "Hi {firstName}, {yourName} with {yourCompany}. You're the owner of {businessName}, right? We help pest control owners in {state} stop paying HomeAdvisor $80 per shared lead. Got 30 seconds?",
    qualifier:
      "What's your current acquisition cost per recurring contract? Are you running quarterly campaigns or always-on?",
    objection:
      'OBJECTION: "Not the right time." → "Understood. Quick check — are you growing route density right now or holding? Because the math on owner-direct outbound makes the most sense when you\'re trying to fill specific routes. When IS the right time to look at this?"',
  },
  {
    vertical: "Insurance recruiting",
    opener:
      "Hey {firstName}, {yourName} calling from {yourCompany}. Looking to talk to {businessName} about your agent recruiting plans for next quarter — got a minute?",
    qualifier:
      "How are you sourcing licensed agents right now? Indeed, ZipRecruiter, recruiter referrals, paid ads? What's your average cost per licensed hire?",
    objection:
      "OBJECTION: \"We're not actively recruiting.\" → \"Makes sense. Quick question though — when an A-player walks in next week, are you set up to grab them? Most IMOs we work with build a passive bench so they don't have to scramble. Worth a 10-minute look?\"",
  },
];

export default function ScriptGeneratorPage() {
  const [vertical, setVertical] = useState<string>(SCRIPTS[0].vertical);
  const current = SCRIPTS.find((s) => s.vertical === vertical) ?? SCRIPTS[0];
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copy = (key: string, text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 1200);
    });
  };

  return (
    <>
      <Nav />
      <article className="container mx-auto px-6 py-16 max-w-3xl">
        <nav className="text-sm text-[var(--color-text-secondary)] mb-8">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/tools" className="hover:underline">Tools</Link>
          <span className="mx-2">/</span>
          <span>Cold call script generator</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Cold Call Script{" "}
          <span className="text-brand-gradient">Generator</span>
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-[var(--color-text-secondary)]">
          Battle-tested opener + qualifier + objection-handler templates for
          5 high-volume verticals. Copy, customize the placeholders, dial.
        </p>

        <div className="mt-10">
          <label className="block text-sm font-semibold mb-3">
            Pick a vertical:
          </label>
          <div className="flex flex-wrap gap-2">
            {SCRIPTS.map((s) => (
              <button
                key={s.vertical}
                type="button"
                onClick={() => setVertical(s.vertical)}
                className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                  vertical === s.vertical
                    ? "bg-[#1B86FF] text-white border-[#1B86FF]"
                    : "bg-white text-[var(--color-text-primary)] border-[var(--color-border)] hover:border-[#1B86FF]"
                }`}
              >
                {s.vertical}
              </button>
            ))}
          </div>
        </div>

        {[
          { key: "opener", label: "Opener", body: current.opener },
          { key: "qualifier", label: "Qualifier", body: current.qualifier },
          { key: "objection", label: "Objection handler", body: current.objection },
        ].map((block) => (
          <section key={block.key} className="mt-10 p-6 border rounded-2xl">
            <div className="flex items-baseline justify-between">
              <h2 className="text-xl font-bold">{block.label}</h2>
              <button
                type="button"
                onClick={() => copy(block.key, block.body)}
                className="text-sm text-[#1B86FF] underline"
              >
                {copiedKey === block.key ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <p className="mt-3 text-base whitespace-pre-wrap leading-relaxed">
              {block.body}
            </p>
          </section>
        ))}

        <div className="mt-10 p-4 border border-amber-300 bg-amber-50 rounded-lg text-sm">
          <strong>Phase 7 skeleton.</strong> The AI-gen version (custom prompts
          per business, multi-touch sequence generation) ships in Phase 7
          production. For now, these 5 vetted templates cover the highest-
          volume verticals.
        </div>

        <div className="mt-16 p-8 bg-[var(--color-surface)] rounded-2xl text-center">
          <h2 className="text-2xl font-bold">
            Got the script. Now get the list.
          </h2>
          <p className="mt-3 text-[var(--color-text-secondary)]">
            50 verified owner mobiles, free. No credit card.
          </p>
          <div className="mt-6">
            <Link
              href="/pricing"
              className="btn-liquid inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold"
            >
              Get 50 mobiles free
            </Link>
          </div>
        </div>
      </article>
      <Footer />
      <SignupPopup />
    </>
  );
}
