import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAF7F2",
        ink: "#1B1714",
        clay: "#C0512F",
        clayDeep: "#7E3419",
        beige: "#EDE3D5",
        sand: "#E3D5C2",
        muted: "#6B6156",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        soft: "0 6px 30px -12px rgba(27,23,20,0.14)",
        lift: "0 18px 50px -18px rgba(27,23,20,0.22)",
      },
      borderRadius: {
        card: "1.25rem",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        ticker: "ticker 40s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
