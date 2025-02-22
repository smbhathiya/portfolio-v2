/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Base Colors
        background: "#0a0e1a", // Deep midnight blue-black (kept for depth)
        foreground: "#f8fafc", // Bright, clean white (for text visibility)

        // Yellow-Toned Accents
        primary: "#ffb347", // Soft orange-gold (main yellow)
        secondary: "#f4d03f", // Vibrant gold (brighter yellow accent)
        ternary: "#e67e22", // Rich amber (deeper yellow tone)

        // Button Colors (Black-Based)
        btn_primary: "#1a2744", // Dark slate blue (black-like tone)
        btn_secondary: "#3b4f87", // Muted blue-gray (softer black variant)

        // Text Colors (White and Gray Variants)
        txt_primary: "#d1d8e0", // Light silver-gray (softer white)
        txt_secondary: "#8a94a6", // Cool mid-gray (muted white-gray)

        // Box/Base Accent (Black-Based)
        box_primary: "#121726", // Dark blue-gray (black variant)

        // Removed: accent (#00ddeb neon cyan)
        muted: "#6b7280", // Neutral gray (kept as a subtle utility color)
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },
  plugins: [],
};
