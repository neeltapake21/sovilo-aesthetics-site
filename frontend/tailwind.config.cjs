/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#E91E8C",
        "primary-light": "#FF1493",
        charcoal: "#2B2B2B",
        "soft-gray": "#F5F5F5",
        gold: "#FFD700",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Playfair Display", "serif"],
        alt: ["Poppins", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};

