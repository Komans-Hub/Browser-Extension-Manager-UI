/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: '#C7231A',
      },
      keyframes: {
        cardEnter: {
          from: { opacity: '0', transform: 'translateY(10px) scale(0.98)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        cardRemove: {
          '0%': { opacity: '1', transform: 'scale(1)', maxHeight: '400px' },
          '50%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '0', maxHeight: '0', padding: '0', margin: '0' },
        },
      },
      animation: {
        cardEnter: 'cardEnter 0.3s ease forwards',
        cardRemove: 'cardRemove 0.35s ease forwards',
      },
    },
  },
  plugins: [],
}
