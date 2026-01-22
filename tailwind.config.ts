import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        i4d: {
          bg: "#0a0a0b",
          surface: "#111113",
          elevated: "#18181b",
          hover: "#27272a",
          border: "rgba(255, 255, 255, 0.06)",
          "border-medium": "rgba(255, 255, 255, 0.1)",
          accent: "#6366f1",
          "accent-light": "#818cf8",
          purple: "#8b5cf6",
          success: "#22c55e",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "monospace",
        ],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "slide-up": "slideUp 0.5s ease-out",
        "fade-in": "fadeIn 0.5s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(99, 102, 241, 0.6)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: Function }) {
      addUtilities({
        ".bg-elevated": {
          backgroundColor: "var(--i4d-elevated)",
        },
        ".bg-surface": {
          backgroundColor: "var(--i4d-surface)",
        },
        ".text-primary": {
          color: "var(--i4d-text)",
        },
        ".text-secondary": {
          color: "var(--i4d-text-secondary)",
        },
        ".text-tertiary": {
          color: "var(--i4d-text-tertiary)",
        },
      });
    },
  ],
};
export default config;
