import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Navina Ganapathy Amuthan | Business & Data Analyst in Dublin";
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
          background: "#faf6f0",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 26, letterSpacing: 6, textTransform: "uppercase", color: "#b0653f", fontFamily: "monospace" }}>
            Business &amp; Data Analyst · Dublin
          </div>
          <div style={{ fontSize: 76, lineHeight: 1.05, color: "#1f1b16", marginTop: 28, fontWeight: 700 }}>
            Navina Ganapathy Amuthan
          </div>
          <div style={{ fontSize: 34, color: "#5c5347", marginTop: 24, fontStyle: "italic" }}>
            I turn messy data into decisions people actually trust.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 24, color: "#5c5347", lineHeight: 1.6 }}>
            <div>SQL · Tableau · Python · shipped AI</div>
            <div>TCD MSc CS, Distinction · Top 0.5% of 50,000+, Google Agentic AI Hackathon</div>
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#faf6f0",
              background: "#b0653f",
              padding: "14px 28px",
              borderRadius: 999,
              fontFamily: "monospace",
            }}
          >
            Stamp 1G · No sponsorship required
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
