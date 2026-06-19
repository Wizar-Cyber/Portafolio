/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "flow-bg": "var(--flow-bg)",
        "flow-surface": "var(--flow-surface)",
        "flow-border": "var(--flow-border)",
        "flow-text": "var(--flow-text)",
        "flow-muted": "var(--flow-muted)",
        "flow-accent": "var(--flow-accent)",
        "flow-glow": "var(--flow-accent-glow)",
        "flow-dim": "var(--flow-accent-dim)",
        "sf-bg": "var(--flow-bg)",
        "sf-surface": "var(--flow-surface)",
        "sf-border": "var(--flow-border)",
        "sf-accent": "var(--flow-accent)",
        "sf-text": "var(--flow-text)",
        "sf-muted": "var(--flow-muted)",
        "sf-highlight": "var(--flow-accent-dim)",
      },
      fontFamily: {
        display: ['"Instrument Serif"', "Georgia", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ['"Geist Mono"', '"JetBrains Mono"', "monospace"],
      },
      backgroundImage: {
        "sf-grid":
          "linear-gradient(rgba(240,165,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(240,165,0,0.025) 1px, transparent 1px)",
        "sf-glow":
          "radial-gradient(ellipse at top, rgba(240,165,0,0.15) 0%, transparent 70%)",
      },
      boxShadow: {
        "amber-sm": "0 0 12px rgba(240,165,0,0.2)",
        "amber-md": "0 0 24px rgba(240,165,0,0.25)",
        "amber-lg": "0 0 48px rgba(240,165,0,0.3)",
        "sf-glow-sm": "0 0 15px rgba(240,165,0,0.18)",
        "sf-glow-md": "0 0 30px rgba(240,165,0,0.22)",
        "sf-glow-lg": "0 0 60px rgba(240,165,0,0.25)",
      },
      animation: {
        "border-flow": "borderFlow 3s linear infinite",
        "text-shimmer": "textShimmer 2.5s ease-in-out infinite",
        "grid-scroll": "gridScroll 20s linear infinite",
        "pulse-dot": "pulseDot 2s cubic-bezier(0.4,0,0.6,1) infinite",
        "flow-line": "flowLine 0.9s ease-out forwards",
        "cursor-blink": "cursorBlink 1s step-end infinite",
      },
      keyframes: {
        flowLine: {
          "0%": { width: "0%", opacity: 0 },
          "100%": { width: "100%", opacity: 1 },
        },
        cursorBlink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        borderFlow: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        textShimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        gridScroll: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(40px)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.3 },
        },
      },
    },
  },
  plugins: [],
};
