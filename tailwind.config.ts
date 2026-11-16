import type { Config } from "tailwindcss";

/**
 * Design tokens. One accent (bronze); accentSoft is the same hue lightened
 * for use on the navy surface. Everything else is a warm neutral.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F2EDE4",
        surface: "#FFFEFB",
        ink: "#141C24",
        muted: "#6B6560",
        line: "#D9D0C4",
        navy: "#0F1C2E",
        accent: "#8F5F33",
        accentSoft: "#D4B896",
      },
      fontFamily: {
        display: ["var(--font-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "8px",
        card: "12px",
      },
    },
  },
  plugins: [],
};
export default config;
