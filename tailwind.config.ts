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
        bg: {
          primary: "#F5F5F3",
          secondary: "#FFFFFF",
          dark: "#050505",
        },
        text: {
          primary: "#0B0B0B",
          secondary: "#7D7D7D",
        },
        accent: "#245CFF",
        border: "#E7E7E7",
      },
      fontFamily: {
        display: ["Orbitron", "Michroma", "sans-serif"],
        body: ["Inter", "Helvetica Neue", "Arial", "sans-serif"],
      },
      borderRadius: {
        card: "24px",
        btn: "999px",
        input: "18px",
      },
      maxWidth: {
        container: "1440px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(0,0,0,0.04)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.08)",
        blue: "0 8px 32px rgba(36,92,255,0.24)",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "fade-in": "fade-in 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
