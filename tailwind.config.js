/** @type {DefaultColors} */
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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#ff9f1c',
        secondary: '#e1a446',
        ternary: "#af8036",
        btn_primary: "#1e293b",
        btn_secondary: "#475569",
        txt_secondary: "#918e89",
      },
    },
  },
  plugins: [],
};
