/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "var(--font-manrope)", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#172033",
          dark: "#0B101A",
          light: "#334155",
        },
        accent: {
          DEFAULT: "#D97706",
          hover: "#B45309",
          soft: "#F8E4C5",
        },
        stone: {
          DEFAULT: "#C7BCA8",
          light: "#F6F2EA",
          dark: "#6E6253",
        },
        neutral: {
          white: "#FFFFFF",
          light: "#F5F3EF",
          dark: "#1F2933",
          muted: "#64748B",
        },
      },
      boxShadow: {
        soft: "0 18px 55px rgba(15, 23, 42, 0.09)",
        lift: "0 24px 70px rgba(15, 23, 42, 0.14)",
      },
    },
  },
  plugins: [],
};
