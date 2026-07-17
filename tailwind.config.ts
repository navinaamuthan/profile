import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F5F5F7",
        ink: "#1D1D1F",
        muted: "#6E6E73",
        line: "#D9D9DE",
        accent: "#0071E3",
        accentSoft: "#2997FF",
        graphite: "#161617",
        teal: "#0F8B8D",
        coral: "#E4573D",
        amber: "#D97706",
        violet: "#7048E8",
        leaf: "#2F9E44",
      },
      fontFamily: {
        display: ["var(--font-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
