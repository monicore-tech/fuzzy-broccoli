import type { Config } from "tailwindcss";

const config: Config = {
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
        canvas: "#07090e", // Deep Void
        surface: {
          panel: "#0f131c",
          card: "#171d2a",
          pill: "#22293a",
        },
        hairline: {
          DEFAULT: "#1f2736",
          interactive: "#2d394e",
        },
        text: {
          primary: "#ffffff",
          secondary: "#94a3b8",
          muted: "#64748b",
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
    },
  },
  plugins: [],
};
export default config;
