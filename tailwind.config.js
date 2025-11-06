/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9",
      },
      borderRadius: {
        "2xl": "1rem",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};
