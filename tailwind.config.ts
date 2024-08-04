import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // enable darkmode when dark-mode class in added to the body tag
  darkMode: ["class", ".dark-mode"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        neutral: {
          750: "#2A2A2A",
          850: "#1A1A1A",
        },
        primary: {
          default: "var(--color-primary-text)",
        },
      },
      boxShadow: {
        l1: "var(--shadow-l1)",
        l2: "var(--shadow-l2)",
      },
    },
  },
  plugins: [],
};
export default config;
