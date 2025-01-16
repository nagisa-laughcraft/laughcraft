import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        yusei: ['Yusei Magic', 'serif'],
      },
      backgroundImage: {
        mainVisualSp: 'url(/main_visual_sp.png)',
        mainVisualPc: 'url(/main_visual_pc.png)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        disableScroll: {
          '0%': { overflow: 'hidden' },
          '100%': { overflow: 'auto' },
        },
        scrollSnap: {
          '0%': { scrollSnapType: 'y mandatory' },
          '100%': { scrollSnapType: 'y mandatory' },
        },
      },
      animation: {
        easeOut: 'fadeIn 0.5s ease-out forwards',
        easeIn: 'fadeIn 3s ease-in forwards',
        disableScroll: 'disableScroll .1s linear 3.5s both',
        disableHeader: 'fadeIn .1s linear 3.5s both',
      },
    },
  },
  plugins: [
    // Add custom plugin for animation-timeline
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.animation-timeline-view': { 'animation-timeline': 'view()', 'animation-range': 'entry' },
      })
    }),
  ],
} satisfies Config
