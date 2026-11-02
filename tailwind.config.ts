import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          rose: "#B96F78",      // Rosa queimado predominante
          roseLight: "#D99AA0", // Rosa claro
          cream: "#FFF8F0",     // Creme
          gold: "#E8B75F",      // Dourado/amarelo
          wine: "#713F45",      // Vinho escuro
          white: "#FFFFFF",     // Branco
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(113, 63, 69, 0.07), 0 2px 6px -1px rgba(113, 63, 69, 0.04)",
        modal: "0 20px 45px -10px rgba(74, 37, 42, 0.28), 0 8px 18px -6px rgba(74, 37, 42, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;

