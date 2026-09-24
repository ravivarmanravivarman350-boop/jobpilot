/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tn: {
          dark: '#0b0f19',
          card: '#131b2e',
          accent: '#3b82f6',
          teal: '#14b8a6',
          purple: '#8b5cf6',
          amber: '#f59e0b',
          rose: '#f43f5e',
          emerald: '#10b981',
          gold: '#eab308'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(59, 130, 246, 0.3)',
        'glow-teal': '0 0 25px -5px rgba(20, 184, 166, 0.3)',
        'glow-rose': '0 0 25px -5px rgba(244, 63, 94, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      }
    },
  },
  plugins: [],
}
