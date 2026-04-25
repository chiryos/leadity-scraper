/**
 * lib/state-directories.ts — programmatic /directories/[state] data
 *
 * Phase 6 skeleton. 50-state directory pages, one per state, listing
 * top categories of US local businesses with verified mobile coverage.
 *
 * Currently: hardcoded 50-state slug list (no per-state record data
 * yet — that comes from the database wire-up in Phase 6 production).
 */

export type State = {
  slug: string; // e.g. "florida"
  abbr: string; // e.g. "FL"
  name: string; // e.g. "Florida"
  population: number;
  business_count: number; // approximate, for SERP copy
};

export const STATES: State[] = [
  { slug: "alabama", abbr: "AL", name: "Alabama", population: 5039877, business_count: 75000 },
  { slug: "alaska", abbr: "AK", name: "Alaska", population: 732673, business_count: 10000 },
  { slug: "arizona", abbr: "AZ", name: "Arizona", population: 7359197, business_count: 130000 },
  { slug: "arkansas", abbr: "AR", name: "Arkansas", population: 3025891, business_count: 45000 },
  { slug: "california", abbr: "CA", name: "California", population: 39538223, business_count: 800000 },
  { slug: "colorado", abbr: "CO", name: "Colorado", population: 5773714, business_count: 120000 },
  { slug: "connecticut", abbr: "CT", name: "Connecticut", population: 3605944, business_count: 65000 },
  { slug: "delaware", abbr: "DE", name: "Delaware", population: 989948, business_count: 18000 },
  { slug: "florida", abbr: "FL", name: "Florida", population: 21538187, business_count: 460000 },
  { slug: "georgia", abbr: "GA", name: "Georgia", population: 10711908, business_count: 200000 },
  { slug: "hawaii", abbr: "HI", name: "Hawaii", population: 1455271, business_count: 25000 },
  { slug: "idaho", abbr: "ID", name: "Idaho", population: 1839106, business_count: 30000 },
  { slug: "illinois", abbr: "IL", name: "Illinois", population: 12812508, business_count: 240000 },
  { slug: "indiana", abbr: "IN", name: "Indiana", population: 6785528, business_count: 110000 },
  { slug: "iowa", abbr: "IA", name: "Iowa", population: 3190369, business_count: 55000 },
  { slug: "kansas", abbr: "KS", name: "Kansas", population: 2937880, business_count: 50000 },
  { slug: "kentucky", abbr: "KY", name: "Kentucky", population: 4505836, business_count: 70000 },
  { slug: "louisiana", abbr: "LA", name: "Louisiana", population: 4657757, business_count: 75000 },
  { slug: "maine", abbr: "ME", name: "Maine", population: 1362359, business_count: 25000 },
  { slug: "maryland", abbr: "MD", name: "Maryland", population: 6177224, business_count: 110000 },
  { slug: "massachusetts", abbr: "MA", name: "Massachusetts", population: 7029917, business_count: 140000 },
  { slug: "michigan", abbr: "MI", name: "Michigan", population: 10077331, business_count: 170000 },
  { slug: "minnesota", abbr: "MN", name: "Minnesota", population: 5706494, business_count: 100000 },
  { slug: "mississippi", abbr: "MS", name: "Mississippi", population: 2961279, business_count: 45000 },
  { slug: "missouri", abbr: "MO", name: "Missouri", population: 6154913, business_count: 100000 },
  { slug: "montana", abbr: "MT", name: "Montana", population: 1084225, business_count: 20000 },
  { slug: "nebraska", abbr: "NE", name: "Nebraska", population: 1961504, business_count: 35000 },
  { slug: "nevada", abbr: "NV", name: "Nevada", population: 3104614, business_count: 60000 },
  { slug: "new-hampshire", abbr: "NH", name: "New Hampshire", population: 1377529, business_count: 28000 },
  { slug: "new-jersey", abbr: "NJ", name: "New Jersey", population: 9288994, business_count: 175000 },
  { slug: "new-mexico", abbr: "NM", name: "New Mexico", population: 2117522, business_count: 35000 },
  { slug: "new-york", abbr: "NY", name: "New York", population: 20201249, business_count: 410000 },
  { slug: "north-carolina", abbr: "NC", name: "North Carolina", population: 10439388, business_count: 195000 },
  { slug: "north-dakota", abbr: "ND", name: "North Dakota", population: 779094, business_count: 14000 },
  { slug: "ohio", abbr: "OH", name: "Ohio", population: 11799448, business_count: 200000 },
  { slug: "oklahoma", abbr: "OK", name: "Oklahoma", population: 3959353, business_count: 65000 },
  { slug: "oregon", abbr: "OR", name: "Oregon", population: 4237256, business_count: 80000 },
  { slug: "pennsylvania", abbr: "PA", name: "Pennsylvania", population: 13002700, business_count: 230000 },
  { slug: "rhode-island", abbr: "RI", name: "Rhode Island", population: 1097379, business_count: 22000 },
  { slug: "south-carolina", abbr: "SC", name: "South Carolina", population: 5118425, business_count: 90000 },
  { slug: "south-dakota", abbr: "SD", name: "South Dakota", population: 886667, business_count: 15000 },
  { slug: "tennessee", abbr: "TN", name: "Tennessee", population: 6910840, business_count: 130000 },
  { slug: "texas", abbr: "TX", name: "Texas", population: 29145505, business_count: 580000 },
  { slug: "utah", abbr: "UT", name: "Utah", population: 3271616, business_count: 60000 },
  { slug: "vermont", abbr: "VT", name: "Vermont", population: 643077, business_count: 13000 },
  { slug: "virginia", abbr: "VA", name: "Virginia", population: 8631393, business_count: 165000 },
  { slug: "washington", abbr: "WA", name: "Washington", population: 7705281, business_count: 155000 },
  { slug: "west-virginia", abbr: "WV", name: "West Virginia", population: 1793716, business_count: 30000 },
  { slug: "wisconsin", abbr: "WI", name: "Wisconsin", population: 5893718, business_count: 100000 },
  { slug: "wyoming", abbr: "WY", name: "Wyoming", population: 576851, business_count: 11000 },
];

export function findState(slug: string): State | undefined {
  return STATES.find((s) => s.slug === slug);
}
