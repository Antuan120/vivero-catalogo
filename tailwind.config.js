/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Poppins", "ui-sans-serif", "system-ui"] },
      colors: {
        leaf: { 50: "#ecfdf5", 100: "#d1fae5", 600: "#16a34a", 700: "#15803d" },
        bark: "#5B4636",
        cream: "#f7f9f4",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(22,163,74,0.12)",
      },
      backgroundImage: {
        "leafy": "linear-gradient(180deg, #f0fdf4 0%, #ffffff 60%)",
      },
    },
  },
  plugins: [],
};
