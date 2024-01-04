/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        // 'main': '#0123456'
      },
      screens: {
        xs: "508px",
        xm: "544px",
      },
      fontFamily: {
        headline: ["Newsreader"],
        serif: ["Georgia", "Times New Roman", "Times", "serif"],
      },
    },

    keyframes: {
      active: {
        "0%": { transform: "scale(1)" },
        "25%": { transform: "scale(1.15)" },
        "50%": { transform: "scale(1)" },
        "75%": { transform: "scale(0.85)" },
        "100%": { transform: "scale(1)" },
      },
    },
    animation: {
      active: "active 2s linear infinite",
    },
  },
  plugins: [],
};
