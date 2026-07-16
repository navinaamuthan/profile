import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F7F9FC",
        ink: "#101828",
        muted: "#526077",
        line: "#DEE4EE",
        accent: "#1E3A8A",
        accentSoft: "#96ACF9",
        navy: "#0B1B3F",
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
