/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#05080f',
          900: '#080d1a',
          850: '#0d1326',
          800: '#111a33',
          750: '#162244',
          700: '#1e2d57',
        },
        aguamarina: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          neon: '#00f5d4',
          cyan: '#00f2fe',
          glow: '#00e5ff',
        },
        lila: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          neon: '#b388ff',
          glow: '#c084fc',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-aqua': '0 0 25px -5px rgba(0, 245, 212, 0.4)',
        'glow-lila': '0 0 25px -5px rgba(192, 132, 252, 0.4)',
        'glow-combo': '0 0 30px -5px rgba(0, 245, 212, 0.3), 0 0 30px -5px rgba(192, 132, 252, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
