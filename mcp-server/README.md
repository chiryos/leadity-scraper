# Leadity MCP Server

Model Context Protocol server for AI agents to access Leadity's US owner-mobile data.

## What it exposes

7 tools for AI agents (Claude Desktop, Cursor, Replit, any MCP-compatible client):

| Tool | Description |
|---|---|
| `find_owner_mobiles` | Find verified owner-direct mobiles by industry × metro |
| `enrich_business` | Add owner mobile to a known business name + address |
| `verify_tcpa_status` | Check line type + DNC status for a US phone number |
| `search_directory` | Natural-language search across Leadity's database |
| `get_categories` | List 1,255+ supported US business categories |
| `get_metros` | List US metros with available record counts per industry |
| `estimate_cost` | Estimate USD cost before running a query |

## Strategic positioning

**First-mover advantage.** As of April 2026, no other Google Maps lead-data tool exposes an MCP server specifically for US owner-mobile workflows. Apify has a general-purpose MCP server with 7,000+ tools, but no specialty for B2B cold-call use cases.

When AI agents (Claude, Cursor, Replit's AI, ChatGPT desktop tools) become the primary lead-gen interface — expected mainstream adoption Q3 2026 — Leadity is positioned as the default tool catalog for US owner-mobile workflows.

## Repository structure

Deploy this as a separate public GitHub repo:

```
github.com/leadity/leadity-mcp-server/
├── README.md
├── leadity-mcp-server.ts    ← the main server file
├── package.json
├── tsconfig.json
└── examples/
    ├── claude-desktop-config.json
    ├── cursor-config.json
    └── sample-workflows.md
```

Public GitHub repo serves multiple purposes:
1. **MCP adoption** — agents can discover and install
2. **Backlink** — github.com is DR ~99
3. **SEO** — keyword-targeted README ranks for "leadity mcp server", "owner mobile mcp"
4. **Trust signal** — open-source code increases buyer confidence

## Installation (for end users)

```bash
# Clone the repo
git clone https://github.com/leadity/leadity-mcp-server.git
cd leadity-mcp-server

# Install dependencies
npm install

# Set your API key
export LEADITY_API_KEY="your_api_key_here"

# Run the server
npm start
```

## Connecting to Claude Desktop

Add to your Claude Desktop config (`~/Library/Application Support/Claude/claude_desktop_config.json` on macOS):

```json
{
  "mcpServers": {
    "leadity": {
      "command": "npx",
      "args": ["@leadity/mcp-server"],
      "env": {
        "LEADITY_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

Restart Claude Desktop. Leadity tools will appear in the tools menu.

## Connecting to Cursor

Add to `~/.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "leadity": {
      "command": "npx",
      "args": ["@leadity/mcp-server"],
      "env": {
        "LEADITY_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

## Sample agent workflows

### Workflow 1: Build a cold-call list end-to-end

User prompt to Claude: *"Build me a list of 500 roofing contractor mobile numbers in Texas storm-belt metros."*

Agent execution:
1. Call `get_metros(industry: "roofing contractors")` → discovers Houston, Dallas, Austin, San Antonio
2. Call `find_owner_mobiles(industry: "roofing contractors", state: "TX", count: 500, mobile_only: true, exclude_dnc: true)` → returns verified data
3. Format CSV for export

Cost: ~$15 (500 × $0.030)

### Workflow 2: Enrich an existing CRM list

User prompt: *"I have a list of 100 plumbers in Austin in my CRM. Enrich each with the owner mobile."*

Agent execution:
1. Loop through CRM records
2. Call `enrich_business(business_name, address)` for each
3. Update CRM with mobile + TCPA flags

### Workflow 3: TCPA-safe outreach prep

User prompt: *"I have 5,000 phone numbers from a previous campaign. Scrub them for TCPA compliance before re-running."*

Agent execution:
1. For each phone, call `verify_tcpa_status(phone)`
2. Filter out DNC-registered + landlines
3. Return clean list with line-type tags

## Marketing leverage

This MCP server is itself an SEO + brand asset:

1. **Direct keyword targeting** — `mcp.leadity.io`, `/mcp`, `/mcp/google-maps-mcp-server`, `/mcp/owner-mobile-mcp-server` all rank for empty SERPs as of April 2026

2. **Awesome-MCP listings** — submit to:
   - https://github.com/punkpeye/awesome-mcp-servers
   - https://glama.ai/mcp/servers
   - https://smithery.ai/mcp

3. **Showcase as "AI-native"** — every comparison page should mention "MCP server access" as a feature competitors lack

4. **Anthropic ecosystem visibility** — when Anthropic showcases MCP servers, B2B-data-specific implementations get prioritized

## Cost to build

- Engineering time: 2-3 weeks (one engineer)
- Hosting: existing infrastructure (just expose new endpoints)
- Maintenance: minimal (MCP protocol is stable)

ROI: this 2-3 week investment positions Leadity for the agentic-AI search wave (Q3 2026 mainstream). Apify is a year ahead; Leadity catches up in the niche where they're not specialized.
