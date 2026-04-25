/**
 * /mcp — MCP server hub
 *
 * Forward-positioning play. Apify exposes 7,000+ scrapers as MCP tools
 * (mcp.apify.com). Leadity exposes US owner-mobile workflows specifically
 * — first mover in this niche. Drives AI-agent citations + dev community
 * adoption.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SignupPopup } from "@/components/signup-popup";

export const metadata: Metadata = {
  title:
    "Leadity MCP Server — Owner-Mobile Workflows for Claude, Cursor, AI Agents",
  description:
    "Native MCP server exposing Leadity's owner-mobile workflows to any MCP-compatible AI agent (Claude Desktop, Cursor, Replit, etc). Verified mobiles + TCPA flags + native CRM push, all callable as agent tools.",
  alternates: { canonical: "https://leadity.io/mcp" },
};

const tools = [
  {
    name: "leadity_search",
    desc: "Search Leadity by category × geography, return owner-direct mobile records.",
  },
  {
    name: "leadity_export",
    desc: "Trigger an export job (CSV / Sheets / CRM push) from agent input.",
  },
  {
    name: "leadity_tcpa_check",
    desc: "Run TCPA risk check on a phone number — returns DNC status, line type, state risk.",
  },
  {
    name: "leadity_categories",
    desc: "List all 1,255+ US business categories. Used by agents to pick a target.",
  },
  {
    name: "leadity_coverage",
    desc: "Return inventory counts for a category × state × metro combo before booking a job.",
  },
];

export default function MCPHub() {
  return (
    <>
      <Nav />
      <article className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Leadity{" "}
          <span className="text-brand-gradient">MCP Server</span>
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-[var(--color-text-secondary)]">
          Native Model Context Protocol server. Expose Leadity&rsquo;s
          owner-mobile workflows to any MCP-compatible AI agent — Claude
          Desktop, Cursor, Replit, custom agents — as callable tools.
        </p>

        <h2 className="text-2xl font-bold mt-12">Connect from Claude Desktop</h2>
        <pre className="mt-4 p-4 bg-[var(--color-text-primary)] text-white rounded-2xl overflow-x-auto text-sm">
          <code>{`# Add to ~/Library/Application Support/Claude/claude_desktop_config.json:

{
  "mcpServers": {
    "leadity": {
      "command": "npx",
      "args": ["@leadity/mcp-server"],
      "env": { "LEADITY_API_KEY": "your_api_key_here" }
    }
  }
}`}</code>
        </pre>

        <h2 className="text-2xl font-bold mt-12">Connect from Cursor</h2>
        <pre className="mt-4 p-4 bg-[var(--color-text-primary)] text-white rounded-2xl overflow-x-auto text-sm">
          <code>{`# .cursor/mcp.json in your project root:

{
  "mcpServers": {
    "leadity": {
      "url": "https://mcp.leadity.io/sse",
      "headers": { "Authorization": "Bearer your_api_key_here" }
    }
  }
}`}</code>
        </pre>

        <h2 className="text-2xl font-bold mt-12">Available tools</h2>
        <div className="mt-6 space-y-4">
          {tools.map((t) => (
            <div key={t.name} className="p-4 border rounded-xl">
              <code className="text-sm font-mono font-semibold text-[#1B86FF]">
                {t.name}
              </code>
              <p className="mt-1 text-sm">{t.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-12">Server-specific pages</h2>
        <ul className="mt-4 space-y-2 text-base">
          <li>
            <Link
              href="/mcp/google-maps-mcp-server"
              className="text-[#1B86FF] underline"
            >
              Google Maps MCP server →
            </Link>
          </li>
          <li>
            <Link
              href="/mcp/owner-mobile-mcp-server"
              className="text-[#1B86FF] underline"
            >
              Owner Mobile MCP server →
            </Link>
          </li>
          <li>
            <Link href="/api" className="text-[#1B86FF] underline">
              REST API docs →
            </Link>
          </li>
        </ul>

        <div className="mt-16 p-8 bg-[var(--color-surface)] rounded-2xl text-center">
          <h2 className="text-2xl font-bold">Get an API key — 50 mobiles free</h2>
          <p className="mt-3 text-[var(--color-text-secondary)]">
            Free tier comes with 50 verified mobiles + full MCP access.
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
