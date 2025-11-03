import type { Config } from "tailwindcss"
import { site } from "./site.config"

export default {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: site.theme.primary || "#0ea5e9",
      },
      borderRadius: {
        '2xl': '1rem',
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(0,0,0,0.06)',
      }
    },
  },
  plugins: [],
} satisfies Config
