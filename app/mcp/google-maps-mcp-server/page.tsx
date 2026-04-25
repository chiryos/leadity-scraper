/**
 * /mcp/google-maps-mcp-server — Keyword landing page
 *
 * Targets "google maps mcp server" queries. AI engineers searching for an
 * MCP server that pulls Google Maps data should land here.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SignupPopup } from "@/components/signup-popup";

export const metadata: Metadata = {
  title: "Google Maps MCP Server — Owner-Mobile Tools for AI Agents | Leadity",
  description:
    "MCP server that exposes Google Maps owner-direct mobile data to AI agents. Search by category × geography, filter for verified mobiles, export to CSV / CRM — all as callable agent tools.",
  alternates: {
    canonical: "https://leadity.io/mcp/google-maps-mcp-server",
  },
};

export default function GoogleMapsMCPPage() {
  return (
    <>
      <Nav />
      <article className="container mx-auto px-6 py-16 max-w-4xl">
        <nav className="text-sm text-[var(--color-text-secondary)] mb-8">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/mcp" className="hover:underline">MCP</Link>
          <span className="mx-2">/</span>
          <span>Google Maps MCP Server</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Google Maps MCP Server{" "}
          <span className="text-brand-gradient">for AI Agents</span>
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-[var(--color-text-secondary)]">
          Pull verified owner-direct mobile data from Google Business Profile
          listings as a callable MCP tool. Compatible with Claude Desktop,
          Cursor, Replit, and any MCP-compatible AI agent.
        </p>

        <h2 className="text-2xl font-bold mt-12">What this server does</h2>
        <p className="mt-4 text-base">
          Most Google Maps scrapers return raw business profile data — names,
          addresses, phone numbers (mostly landlines). Leadity&rsquo;s MCP
          server is purpose-built for cold outreach: it returns only verified
          owner-direct mobile numbers, with carrier-level line-type filtering
          and TCPA-aware flags baked in.
        </p>

        <h2 className="text-2xl font-bold mt-12">Example agent prompts</h2>
        <ul className="mt-4 space-y-3 text-base">
          <li>
            <strong>&ldquo;Pull me 200 verified mobile numbers for roofing
            contractors in Dallas.&rdquo;</strong> — Agent calls{" "}
            <code className="text-[#1B86FF] font-mono">leadity_search</code>{" "}
            with category = roofing-contractors, metro = dallas, mobile_only =
            true.
          </li>
          <li>
            <strong>&ldquo;Check this number for TCPA risk.&rdquo;</strong> —
            Agent calls{" "}
            <code className="text-[#1B86FF] font-mono">leadity_tcpa_check</code>{" "}
            and returns DNC status + line type + state-specific flags.
          </li>
          <li>
            <strong>&ldquo;Build a 5,000-record list of HVAC owners in
            Texas, push to my Smartlead campaign.&rdquo;</strong> — Agent
            chains{" "}
            <code className="text-[#1B86FF] font-mono">leadity_search</code> +{" "}
            <code className="text-[#1B86FF] font-mono">leadity_export</code>.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-12">vs other MCP servers</h2>
        <ul className="mt-4 space-y-3 text-base">
          <li>
            <strong>Apify&rsquo;s mcp.apify.com</strong>: 7,000+ scrapers
            including a Google Maps scraper. Generic — returns whatever Google
            publishes (mostly landlines). No verified-mobile filter, no TCPA
            flags. Use it for general scraping; use Leadity for B2B cold
            outreach lists.
          </li>
          <li>
            <strong>Google Maps Platform API</strong>: Official Google API.
            Excellent for places-of-interest data. Doesn&rsquo;t expose owner
            contact info beyond what&rsquo;s public on the Google Business
            Profile, and has no carrier-line-type or DNC enrichment.
          </li>
          <li>
            <strong>Leadity MCP</strong>: Verified mobiles + TCPA flags +
            native CRM push, all in one server. Built for cold outreach.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-12">Get started</h2>
        <p className="mt-4 text-base">
          Connect at <Link href="/mcp" className="text-[#1B86FF] underline">
          /mcp</Link>. Free tier includes 50 verified mobiles + full MCP
          access — no credit card required.
        </p>

        <div className="mt-16 p-8 bg-[var(--color-surface)] rounded-2xl text-center">
          <h2 className="text-2xl font-bold">Try the MCP server free</h2>
          <p className="mt-3 text-[var(--color-text-secondary)]">
            50 verified mobiles + full MCP access. No credit card.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="btn-liquid inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold"
            >
              Get free API key
            </Link>
            <Link
              href="/mcp"
              className="glass-chip inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base"
            >
              Setup docs
            </Link>
          </div>
        </div>
      </article>
      <Footer />
      <SignupPopup />
    </>
  );
}
