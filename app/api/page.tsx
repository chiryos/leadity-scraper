/**
 * /api — REST API documentation hub
 *
 * Public-facing API docs for AI engineers + developers integrating Leadity
 * directly into custom apps (vs the no-code integrations and the MCP).
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SignupPopup } from "@/components/signup-popup";

export const metadata: Metadata = {
  title:
    "Leadity API — REST Endpoints for Verified Owner Mobile Data",
  description:
    "REST API for Leadity verified-mobile workflows. Search by category × geography, run TCPA risk checks, trigger exports — all programmatically. Python + Node SDKs available.",
  alternates: { canonical: "https://leadity.io/api" },
};

const endpoints = [
  {
    method: "GET",
    path: "/v1/search",
    desc: "Search verified owner mobiles by category + geography. Filters: mobile_only, exclude_dnc, line_type.",
  },
  {
    method: "POST",
    path: "/v1/exports",
    desc: "Create a new export job. Destinations: csv, sheets, hubspot, pipedrive, close, smartlead, instantly, lemlist.",
  },
  {
    method: "GET",
    path: "/v1/exports/{id}",
    desc: "Poll an export job for status + download URL when complete.",
  },
  {
    method: "POST",
    path: "/v1/tcpa/check",
    desc: "Run TCPA risk check on a single number. Returns DNC + line type + state risk + recommended treatment.",
  },
  {
    method: "GET",
    path: "/v1/categories",
    desc: "List all 1,255+ supported US business categories with parent-slug hierarchy.",
  },
  {
    method: "GET",
    path: "/v1/coverage",
    desc: "Inventory check: how many records are available for a given category × geography combo.",
  },
];

export default function APIDocsHub() {
  return (
    <>
      <Nav />
      <article className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Leadity{" "}
          <span className="text-brand-gradient">REST API</span>
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-[var(--color-text-secondary)]">
          Verified owner mobile data + TCPA workflows + native CRM push, all
          programmatically. Python + Node SDKs, plus an MCP server at{" "}
          <Link href="/mcp" className="text-[#1B86FF] underline">/mcp</Link>{" "}
          for AI agent runtimes.
        </p>

        <h2 className="text-2xl font-bold mt-12">Authentication</h2>
        <p className="mt-4 text-base">
          Bearer token in the <code className="text-[#1B86FF] font-mono">Authorization</code> header.
          Get an API key at <Link href="/dashboard" className="text-[#1B86FF] underline">/dashboard</Link>{" "}
          (free tier includes API access).
        </p>
        <pre className="mt-4 p-4 bg-[var(--color-text-primary)] text-white rounded-2xl overflow-x-auto text-sm">
          <code>{`curl https://api.leadity.io/v1/search \\
  -H "Authorization: Bearer sk_live_..." \\
  -G \\
  --data-urlencode "category=roofing-contractors" \\
  --data-urlencode "metro=dallas-tx" \\
  --data-urlencode "mobile_only=true" \\
  --data-urlencode "limit=100"`}</code>
        </pre>

        <h2 className="text-2xl font-bold mt-12">Endpoints</h2>
        <div className="mt-6 space-y-3">
          {endpoints.map((e) => (
            <div key={e.path} className="p-4 border rounded-xl">
              <div className="flex items-center gap-3">
                <span
                  className="text-xs font-mono font-semibold px-2 py-1 rounded"
                  style={{
                    background:
                      e.method === "GET"
                        ? "rgba(16,185,129,0.15)"
                        : "rgba(245,158,11,0.15)",
                    color: e.method === "GET" ? "#059669" : "#d97706",
                  }}
                >
                  {e.method}
                </span>
                <code className="text-sm font-mono">{e.path}</code>
              </div>
              <p className="mt-2 text-sm">{e.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-12">SDKs</h2>
        <ul className="mt-4 space-y-2 text-base">
          <li>
            <strong>Python:</strong>{" "}
            <code className="text-[#1B86FF] font-mono">pip install leadity</code>
          </li>
          <li>
            <strong>Node:</strong>{" "}
            <code className="text-[#1B86FF] font-mono">npm install @leadity/sdk</code>
          </li>
          <li>
            <strong>MCP server (TS):</strong>{" "}
            <Link href="/mcp" className="text-[#1B86FF] underline">
              setup docs →
            </Link>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-12">Rate limits</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li>Free tier: 60 requests / minute, 50 search results / day</li>
          <li>Starter / Growth / Scale: 600 requests / minute, no daily cap</li>
          <li>Enterprise: custom — contact hello@leadity.io</li>
        </ul>

        <div className="mt-16 p-8 bg-[var(--color-surface)] rounded-2xl text-center">
          <h2 className="text-2xl font-bold">Get an API key — free tier</h2>
          <p className="mt-3 text-[var(--color-text-secondary)]">
            50 verified mobiles + full API access. No credit card.
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
