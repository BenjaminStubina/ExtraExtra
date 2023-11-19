/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#0123456'
      }
    },
    screens: {
      '1sm': '540px',
      '2sm': '750px',
      'md': '768px',
      '2lg': '1024px',
      'xl': '1280px'
    },
    keyframes: {
      active: {
        '0%': { transform: 'scale(1)' },
        '25%': { transform: 'scale(1.15)' },
        '50%': { transform: 'scale(1)' },
        '75%': { transform: 'scale(0.85)' },
        '100%': { transform: 'scale(1)' }
      },
    },
    animation: {
      active: 'active 2s linear infinite'
    }
  },
  plugins: [],
}
