/**
 * /mcp/owner-mobile-mcp-server — Keyword landing page
 *
 * Targets "owner mobile mcp server" / "B2B mobile data mcp" queries.
 * Different framing from /mcp/google-maps-mcp-server: this leans into the
 * cold-outreach use case rather than the data source.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SignupPopup } from "@/components/signup-popup";

export const metadata: Metadata = {
  title:
    "Owner Mobile MCP Server — B2B Cold-Call Data for AI Agents | Leadity",
  description:
    "MCP server exposing 2.4M+ verified US business owner-direct mobile numbers as agent-callable tools. Built for AI-driven cold outreach: search by niche, scrub for TCPA, push to CRM — all from inside Claude / Cursor / agent workflows.",
  alternates: {
    canonical: "https://leadity.io/mcp/owner-mobile-mcp-server",
  },
};

export default function OwnerMobileMCPPage() {
  return (
    <>
      <Nav />
      <article className="container mx-auto px-6 py-16 max-w-4xl">
        <nav className="text-sm text-[var(--color-text-secondary)] mb-8">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/mcp" className="hover:underline">MCP</Link>
          <span className="mx-2">/</span>
          <span>Owner Mobile MCP Server</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Owner Mobile MCP Server{" "}
          <span className="text-brand-gradient">for cold outreach AI</span>
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-[var(--color-text-secondary)]">
          2.4M+ verified US business owner-direct mobile numbers, exposed as
          MCP tools. Build cold-outreach AI agents that search, qualify, and
          deliver lead lists end-to-end — directly from Claude Desktop,
          Cursor, or any MCP-compatible runtime.
        </p>

        <h2 className="text-2xl font-bold mt-12">The agent use case</h2>
        <p className="mt-4 text-base">
          Cold outreach has historically been a manual workflow: pick a list
          source, configure filters, export, scrub for compliance, push to
          dialer/sequencer. Each step is an opportunity for human error and
          time loss.
        </p>
        <p className="mt-4 text-base">
          The Owner Mobile MCP Server collapses that into agent-driven
          orchestration. Tell Claude &ldquo;build me a list of 1,000 dental
          practices in California, scrub for TCPA, push to Smartlead.&rdquo;
          The agent handles category selection, geography filtering, mobile
          verification, DNC scrubbing, and CRM push — all via MCP tool calls.
        </p>

        <h2 className="text-2xl font-bold mt-12">What&rsquo;s different from generic data MCPs</h2>
        <ul className="mt-4 space-y-3 text-base">
          <li>
            <strong>Mobile-only verified.</strong> 84%+ verified mobile rate
            via carrier HLR, not 8-15% mobile mixed with landlines.
          </li>
          <li>
            <strong>TCPA-aware.</strong> Every record includes DNC status +
            line type. Agents can filter at query time, not as a separate
            scrub step.
          </li>
          <li>
            <strong>Native CRM push.</strong>{" "}
            <code className="text-[#1B86FF] font-mono">leadity_export</code>{" "}
            tool ships output directly to HubSpot, Pipedrive, Close,
            Smartlead, Instantly, Lemlist — agents don&rsquo;t need to handle
            CSV gymnastics.
          </li>
          <li>
            <strong>US-only, 1,255+ categories.</strong> Built for the local
            SMB cold-outreach use case where Apollo / ZoomInfo / Outscraper
            all underperform.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-12">Tool schema (excerpt)</h2>
        <pre className="mt-4 p-4 bg-[var(--color-text-primary)] text-white rounded-2xl overflow-x-auto text-xs">
          <code>{`leadity_search(category: string, geo: { state? metro? zip? }, limit: int, mobile_only: boolean)
  -> { records: Array<{ name, mobile, address, category, dnc, line_type, carrier }> }

leadity_tcpa_check(phone: string)
  -> { dnc_national: boolean, dnc_state: string[], line_type: 'mobile'|'landline'|'voip', risk_score: 0..100 }

leadity_export(records: string[], destination: 'csv'|'sheets'|'hubspot'|'pipedrive'|'close'|'smartlead'|'instantly'|'lemlist')
  -> { job_id: string, download_url?: string }

leadity_categories()
  -> { categories: Array<{ slug, label, parent_slug }> }

leadity_coverage(category: string, geo: object)
  -> { available_records: int, mobile_only_estimated: int, last_refreshed: string }`}</code>
        </pre>

        <p className="mt-6 text-base">
          Full schema lives in the MCP server repo at{" "}
          <code className="text-[#1B86FF]">github.com/leadity/leadity-mcp-server</code>.
        </p>

        <h2 className="text-2xl font-bold mt-12">Connect</h2>
        <p className="mt-4 text-base">
          Setup instructions for Claude Desktop, Cursor, and HTTP-based
          clients live at <Link href="/mcp" className="text-[#1B86FF] underline">
          /mcp</Link>.
        </p>

        <div className="mt-16 p-8 bg-[var(--color-surface)] rounded-2xl text-center">
          <h2 className="text-2xl font-bold">Get an API key — free tier</h2>
          <p className="mt-3 text-[var(--color-text-secondary)]">
            50 verified mobiles + full MCP access. No credit card.
          </p>
          <div className="mt-6">
            <Link
              href="/pricing"
              className="btn-liquid inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold"
            >
              Get free API key
            </Link>
          </div>
        </div>
      </article>
      <Footer />
      <SignupPopup />
    </>
  );
}
