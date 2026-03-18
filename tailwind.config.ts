import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#0f0f0f',
        amber: {
          warm: '#f59e0b',
          dark: '#b45309',
        },
        reform: {
          green: '#22c55e',
          dark: '#15803d',
        },
        danger: '#ef4444',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
