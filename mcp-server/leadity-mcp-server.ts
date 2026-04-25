/**
 * Leadity MCP Server
 *
 * The forward-positioning play. Apify\'s mcp.apify.com exposes 7,000+ scrapers
 * as agent tools. Leadity\'s mcp.leadity.io exposes US owner-mobile workflows
 * specifically — first-mover in this niche.
 *
 * Deploy as a separate repo: github.com/leadity/leadity-mcp-server
 * Host at: mcp.leadity.io
 *
 * Compatible with Claude Desktop, Cursor, Replit, and any MCP-compatible AI agent.
 *
 * Install:
 *   npm install @modelcontextprotocol/sdk zod
 *
 * Run:
 *   tsx leadity-mcp-server.ts
 */

import { Server } from '@modelcontextprotocol/sdk/server/index.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js'
import { z } from 'zod'

// =============================================================================
// CONFIG
// =============================================================================

const LEADITY_API_BASE = process.env.LEADITY_API_BASE ?? 'https://api.leadity.io/v1'
const LEADITY_API_KEY = process.env.LEADITY_API_KEY ?? ''

if (!LEADITY_API_KEY) {
  console.error('[leadity-mcp] LEADITY_API_KEY environment variable required')
  process.exit(1)
}

// =============================================================================
// API CLIENT
// =============================================================================

async function leadityFetch(path: string, options: RequestInit = {}) {
  const response = await fetch(`${LEADITY_API_BASE}${path}`, {
    ...options,
    headers: {
      'Authorization': `Bearer ${LEADITY_API_KEY}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`Leadity API error ${response.status}: ${text}`)
  }

  return response.json()
}

// =============================================================================
// TOOL DEFINITIONS
// =============================================================================

const tools = [
  {
    name: 'find_owner_mobiles',
    description:
      'Find verified owner-direct mobile phone numbers for US local businesses. Returns mobile-only filtered records with TCPA-aware export flags (DNC status, line type, carrier). Use when an AI agent needs to build a B2B cold-call list for any US local business vertical.',
    inputSchema: {
      type: 'object',
      properties: {
        industry: {
          type: 'string',
          description: 'Business category (e.g., "roofing contractors", "solar installers", "dentists", "HVAC contractors", "pest control"). Must be one of the 1,255+ Leadity-supported categories.',
        },
        metro: {
          type: 'string',
          description: 'US metro area in "City, ST" format (e.g., "Austin, TX", "Houston, TX", "Phoenix, AZ"). Optional — omit for nationwide search.',
        },
        state: {
          type: 'string',
          description: 'US state code (e.g., "TX", "CA"). Optional — omit if metro is provided.',
        },
        zip: {
          type: 'string',
          description: 'US ZIP code for hyper-local targeting. Optional.',
        },
        count: {
          type: 'integer',
          description: 'Number of verified owner mobiles to return. Max 10,000 per request. Default 100.',
          default: 100,
        },
        mobile_only: {
          type: 'boolean',
          description: 'If true (default), returns only carrier-verified mobile numbers. Set false to include landlines (not recommended for TCPA-sensitive use cases).',
          default: true,
        },
        exclude_dnc: {
          type: 'boolean',
          description: 'If true (default), excludes numbers registered on the National DNC Registry.',
          default: true,
        },
      },
      required: ['industry'],
    },
  },
  {
    name: 'enrich_business',
    description:
      'Enrich a known US local business with owner-direct mobile + TCPA flags. Use when the agent has a business name and address but needs the verified owner mobile.',
    inputSchema: {
      type: 'object',
      properties: {
        business_name: {
          type: 'string',
          description: 'Exact or partial business name (e.g., "Anchor Roofing Austin").',
        },
        address: {
          type: 'string',
          description: 'Full or partial address. The more specific, the better the match.',
        },
        google_place_id: {
          type: 'string',
          description: 'Google Place ID if known (skips the search step). Optional.',
        },
      },
      required: ['business_name'],
    },
  },
  {
    name: 'verify_tcpa_status',
    description:
      'Check TCPA compliance status for a US phone number: line type (mobile/landline/VoIP), carrier identification, National DNC Registry status. Use before any cold-call campaign to scrub against compliance risks.',
    inputSchema: {
      type: 'object',
      properties: {
        phone: {
          type: 'string',
          description: 'US phone number in any format (E.164, formatted, or raw). Will be normalized to E.164.',
        },
      },
      required: ['phone'],
    },
  },
  {
    name: 'search_directory',
    description:
      'Natural-language search across Leadity\'s US business database. Use when the agent has a fuzzy query (e.g., "find roofers in storm-belt states with 4+ star ratings"). Returns ranked matches.',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Natural-language search query.',
        },
        max_results: {
          type: 'integer',
          description: 'Max records to return. Default 50.',
          default: 50,
        },
      },
      required: ['query'],
    },
  },
  {
    name: 'get_categories',
    description:
      'Returns the full list of 1,255+ supported US business categories. Use when the agent needs to discover what verticals are available before calling find_owner_mobiles.',
    inputSchema: {
      type: 'object',
      properties: {
        filter: {
          type: 'string',
          description: 'Optional substring filter (e.g., "contractor" to see all contractor-related categories).',
        },
      },
    },
  },
  {
    name: 'get_metros',
    description:
      'Returns the list of US metros with available record counts per industry. Use when the agent wants to find the best metros for a specific vertical.',
    inputSchema: {
      type: 'object',
      properties: {
        industry: {
          type: 'string',
          description: 'Industry to check coverage for. Optional — omit for general metro list.',
        },
        min_records: {
          type: 'integer',
          description: 'Only return metros with at least N records available. Default 100.',
          default: 100,
        },
      },
    },
  },
  {
    name: 'estimate_cost',
    description:
      'Estimate the cost in USD for a given query before running it. Useful for budget planning.',
    inputSchema: {
      type: 'object',
      properties: {
        industry: { type: 'string' },
        metro: { type: 'string' },
        state: { type: 'string' },
        count: { type: 'integer', default: 100 },
      },
      required: ['industry'],
    },
  },
]

// =============================================================================
// SERVER SETUP
// =============================================================================

const server = new Server(
  {
    name: 'leadity-mcp-server',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
)

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools,
}))

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params

  try {
    switch (name) {
      case 'find_owner_mobiles': {
        const result = await leadityFetch('/mobiles/find', {
          method: 'POST',
          body: JSON.stringify(args),
        })
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(result, null, 2),
            },
          ],
        }
      }

      case 'enrich_business': {
        const result = await leadityFetch('/businesses/enrich', {
          method: 'POST',
          body: JSON.stringify(args),
        })
        return {
          content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
        }
      }

      case 'verify_tcpa_status': {
        const result = await leadityFetch('/tcpa/verify', {
          method: 'POST',
          body: JSON.stringify(args),
        })
        return {
          content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
        }
      }

      case 'search_directory': {
        const result = await leadityFetch('/search', {
          method: 'POST',
          body: JSON.stringify(args),
        })
        return {
          content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
        }
      }

      case 'get_categories': {
        const params = new URLSearchParams()
        if ((args as any)?.filter) params.set('filter', (args as any).filter)
        const result = await leadityFetch(`/categories?${params}`)
        return {
          content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
        }
      }

      case 'get_metros': {
        const params = new URLSearchParams()
        if ((args as any)?.industry) params.set('industry', (args as any).industry)
        if ((args as any)?.min_records) params.set('min_records', String((args as any).min_records))
        const result = await leadityFetch(`/metros?${params}`)
        return {
          content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
        }
      }

      case 'estimate_cost': {
        const result = await leadityFetch('/estimate', {
          method: 'POST',
          body: JSON.stringify(args),
        })
        return {
          content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
        }
      }

      default:
        return {
          content: [
            { type: 'text', text: `Unknown tool: ${name}` },
          ],
          isError: true,
        }
    }
  } catch (error) {
    return {
      content: [
        {
          type: 'text',
          text: `Error calling ${name}: ${error instanceof Error ? error.message : String(error)}`,
        },
      ],
      isError: true,
    }
  }
})

// =============================================================================
// START
// =============================================================================

async function main() {
  const transport = new StdioServerTransport()
  await server.connect(transport)
  console.error('[leadity-mcp] Server running on stdio')
}

main().catch((error) => {
  console.error('[leadity-mcp] Fatal error:', error)
  process.exit(1)
})
