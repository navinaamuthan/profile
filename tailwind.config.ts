import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F2EDE4",
        ink: "#141C24",
        muted: "#6B6560",
        line: "#D9D0C4",
        accent: "#A67C52",
        accentSoft: "#D4B896",
        bronze: "#A67C52",
        gold: "#C9A66B",
        navy: "#0F1C2E",
        graphite: "#0F1C2E",
        teal: "#0F8B8D",
        coral: "#E4573D",
        amber: "#B08D57",
        violet: "#8B6914",
        leaf: "#2F5D50",
      },
      fontFamily: {
        display: ["var(--font-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        brass: "0 18px 50px -28px rgba(166, 124, 82, 0.55)",
      },
    },
  },
  plugins: [],
};
export default config;
