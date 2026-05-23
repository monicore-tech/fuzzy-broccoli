import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00f5d4", // Everlend Teal
          muted: "#00b8a1",
          glow: "rgba(0, 245, 212, 0.15)",
        },
        accent: {
          solana: "#9945ff",
          serum: "#0052ff",
        },
        canvas: "var(--canvas)",
        surface: {
          panel: "var(--surface-panel)",
          card: "var(--surface-card)",
          pill: "var(--surface-pill)",
        },
        hairline: {
          DEFAULT: "var(--hairline)",
          interactive: "var(--hairline-interactive)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        on: {
          primary: "#020617",
        },
        success: "#10b981",
        error: "#ef4444",
        warning: "#f59e0b",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "monospace", "Courier New"],
      },
      spacing: {
        xxs: "4px",
        xs: "8px",
        sm: "12px",
        base: "16px",
        md: "24px",
        lg: "32px",
        xl: "48px",
        xxl: "64px",
        "v-section": "96px",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(to right, rgba(0, 245, 212, 0.4), rgba(153, 69, 255, 0.05))",
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
