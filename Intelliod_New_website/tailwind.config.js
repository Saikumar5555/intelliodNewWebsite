/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        intelliod: {
          blue: '#3b82f6',
          orange: '#f97316',
          purple: '#8b5cf6',
          teal: '#1e5f6e',
          dark: '#0f172a',
        }
      },
      backgroundImage: {
        'gradient-intelliod': 'linear-gradient(to right, #3b82f6, #f97316)',
        'gradient-cta': 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ef4444)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
