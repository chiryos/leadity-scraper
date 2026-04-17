import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Leadity Scraper — Scrape Google Maps. Get real mobiles.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(50% 60% at 50% 0%, rgba(34, 201, 245, 0.22), transparent 70%), #FFFFFF",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 8,
              background: "linear-gradient(180deg, #22C9F5, #0951FF)",
            }}
          />
          <div
            style={{
              fontSize: 32,
              fontWeight: 600,
              letterSpacing: "-0.04em",
              color: "#0A0A0A",
            }}
          >
            Leadity Scraper
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <div
            style={{
              fontSize: 88,
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 1.02,
              color: "#0A0A0A",
              maxWidth: 980,
            }}
          >
            Scrape Google Maps. Get real mobiles.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#525252",
            fontSize: 22,
          }}
        >
          <div>Freshest leads on the market · Built for SMS marketing</div>
          <div style={{ color: "#8A8A8A" }}>leadity.com</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
