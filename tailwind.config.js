/** @type {import('tailwindcss').Config} */
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
        nav: "#333232",
        page: "#4ECDC4",
        card: "#A1CF6B",
        "card-hover": "#FFE66D",
        "default-text": "#FAE8EB",
        "default-title": "#98E2C6",
        "prio-red": "#F7B2AD",
        "blue-accent": "#0084d4",
        "blue-accent-hover": "#009fff",
      },
    },
  },
  plugins: [],
};
