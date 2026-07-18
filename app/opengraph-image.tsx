import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Navina Ganapathy Amuthan | Data Scientist & Solutions Engineer in Dublin";
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
          background: "#F5F5F7",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 24, letterSpacing: 4, textTransform: "uppercase", color: "#0071E3", fontWeight: 700 }}>
            Solutions Engineering · Data Science · Dublin
          </div>
          <div style={{ fontSize: 78, lineHeight: 1.04, color: "#1D1D1F", marginTop: 28, fontWeight: 700, letterSpacing: -2 }}>
            Navina Ganapathy Amuthan
          </div>
          <div style={{ fontSize: 32, color: "#6E6E73", marginTop: 24 }}>
            I build technical solutions for clients, then make them scale.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 23, color: "#6E6E73", lineHeight: 1.6 }}>
            <div>Python · SQL · APIs · agentic AI · Fortune 500 delivery, 120+ countries</div>
            <div>TCD MSc CS, Distinction · Top 0.5% of 50,000+, Google Agentic AI Hackathon</div>
          </div>
          <div
            style={{
              fontSize: 21,
              color: "#F5F5F7",
              background: "#1D1D1F",
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
