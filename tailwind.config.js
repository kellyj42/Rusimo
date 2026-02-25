/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
   theme: {
    extend: {
      colors: {
        // 🔵 Primary Brand Blue
        primary: {
          DEFAULT: "#4A74B5",
          dark: "#2E4E86",
          light: "#6E8FC6",
        },

        // 🟠 Brand Orange
        accent: {
          DEFAULT: "#F28C1B",
          hover: "#FFA73A",
        },

        // ⚪ Neutrals
        neutral: {
          white: "#FFFFFF",
          light: "#F4F4F4",
          dark: "#2B2B2B",
        },
      },
    },
  },
  plugins: [],
}

