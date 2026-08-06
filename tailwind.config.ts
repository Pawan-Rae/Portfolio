import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "hsl(var(--ink))", paper: "hsl(var(--paper))", muted: "hsl(var(--muted))", line: "hsl(var(--line))", accent: "hsl(var(--accent))", code: "hsl(var(--code))" },
      fontFamily: { sans: ["var(--font-sans)", "sans-serif"], mono: ["var(--font-mono)", "monospace"] },
      fontSize: { "display": ["clamp(2.9rem, 8vw, 6.5rem)", { lineHeight: "0.94", letterSpacing: "-0.065em" }], "section": ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1", letterSpacing: "-0.05em" }] },
      spacing: { "section": "clamp(5rem, 12vw, 9rem)" },
      boxShadow: { "terminal": "0 16px 40px hsl(var(--ink) / 0.12)" }
    }
  },
  plugins: []
};
export default config;
