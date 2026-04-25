/**
 * /integrations — Integration hub
 *
 * Lists all 9 integrations + each platform's specific landing page.
 * High-DR backlink magnet: every platform has dev docs + partner pages
 * that link out to Leadity.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SignupPopup } from "@/components/signup-popup";

export const metadata: Metadata = {
  title: "Integrations — Leadity Owner Mobile Data in Every Outbound Stack",
  description:
    "Native integrations with Zapier, n8n, Make, HubSpot, Pipedrive, Close, Smartlead, Instantly, Lemlist. Verified owner mobiles flow directly into your existing workflow.",
  alternates: { canonical: "https://leadity.io/integrations" },
};

const integrations = [
  { slug: "zapier", name: "Zapier", desc: "6,000+ app automation platform" },
  { slug: "n8n", name: "n8n", desc: "Open-source workflow automation" },
  { slug: "make", name: "Make.com", desc: "Visual automation (formerly Integromat)" },
  { slug: "hubspot", name: "HubSpot", desc: "CRM with marketing + sales suite" },
  { slug: "pipedrive", name: "Pipedrive", desc: "Sales CRM" },
  { slug: "close", name: "Close.com", desc: "Sales CRM + Power Dialer" },
  { slug: "smartlead", name: "Smartlead", desc: "Cold email + SMS sequencer" },
  { slug: "instantly", name: "Instantly.ai", desc: "Cold email sequencer" },
  { slug: "lemlist", name: "Lemlist", desc: "Multi-channel sequencer" },
];

export default function IntegrationsHub() {
  return (
    <>
      <Nav />
      <article className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Integrations
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-[var(--color-text-secondary)]">
          Verified owner mobiles flow directly into your existing outbound
          stack. No CSV gymnastics required.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {integrations.map((i) => (
            <Link
              key={i.slug}
              href={`/integrations/${i.slug}`}
              className="p-6 border rounded-2xl hover:border-[#1B86FF] transition-colors block"
            >
              <h3 className="text-lg font-bold">{i.name}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{i.desc}</p>
              <p className="mt-3 text-sm text-[#1B86FF]">Connect →</p>
            </Link>
          ))}
        </div>
      </article>
      <Footer />
      <SignupPopup />
    </>
  );
}
