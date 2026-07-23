import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Navina Ganapathy Amuthan | Software & AI/ML Engineer Dublin";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#F2EDE4",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#A67C52",
              fontWeight: 700,
            }}
          >
            Software Engineering · AI/ML · Dublin
          </div>
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.04,
              color: "#141C24",
              marginTop: 28,
              fontWeight: 700,
              letterSpacing: -2,
            }}
          >
            Navina Ganapathy Amuthan
          </div>
          <div style={{ fontSize: 28, color: "#6B6560", marginTop: 24 }}>
            Production code for AI/ML — Python, Java, React, RAG, agents.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 22,
              color: "#6B6560",
              lineHeight: 1.6,
            }}
          >
            <div>Python · Java · React · RAG · Docker · Azure · APIs</div>
            <div>TCD MSc CS, Distinction · Top 0.5% Google Agentic AI Hackathon</div>
          </div>
          <div
            style={{
              fontSize: 20,
              color: "#D4B896",
              background: "#0F1C2E",
              padding: "14px 28px",
              borderRadius: 999,
              fontWeight: 600,
            }}
          >
            No sponsorship required
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
