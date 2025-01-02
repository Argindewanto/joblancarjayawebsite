import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        accent: '#d8c09d',
        mono: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },
      fontSize: {
        // Desktop Display
        'display-lg': ['3.25rem', { lineHeight: '3.5rem', letterSpacing: '-0.02em' }],
        'display-sm': ['2.75rem', { lineHeight: '3rem', letterSpacing: '-0.02em' }],
        // Desktop Headings
        'h1-desktop': ['2.5rem', { lineHeight: '3rem', letterSpacing: '-0.02em' }],
        'h2-desktop': ['2.25rem', { lineHeight: '2.75rem', letterSpacing: '-0.02em' }],
        'h3-desktop': ['2rem', { lineHeight: '2.5rem', letterSpacing: '-0.02em' }],
        'h4-desktop': ['1.75rem', { lineHeight: '2.25rem', letterSpacing: '-0.02em' }],
        'h5-desktop': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.02em' }],
        'h6-desktop': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.02em' }],
        // Mobile Headings
        'h1-mobile': ['2.25rem', { lineHeight: '2.75rem', letterSpacing: '-0.02em' }],
        'h2-mobile': ['2rem', { lineHeight: '2.5rem', letterSpacing: '-0.02em' }],
        'h3-mobile': ['1.75rem', { lineHeight: '2.25rem', letterSpacing: '-0.02em' }],
        'h4-mobile': ['1.5rem', { lineHeight: '2rem' }],
        'h5-mobile': ['1.25rem', { lineHeight: '1.75rem' }],
        'h6-mobile': ['1.125rem', { lineHeight: '1.5rem' }],
        // Paragraphs
        'p-lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'p-base': ['1rem', { lineHeight: '1.5rem' }],
        'p-sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'p-xs': ['0.75rem', { lineHeight: '1.25rem' }],
        // Labels
        'label-lg': ['1rem', { lineHeight: '1.125rem' }],
        'label-base': ['0.875rem', { lineHeight: '1rem' }],
        'label-sm': ['0.75rem', { lineHeight: '1rem' }],
        'label-xs': ['0.625rem', { lineHeight: '0.875rem' }],
        // Overline
        'overline-lg': ['0.875rem', { lineHeight: '1.25rem' }],
        'overline-sm': ['0.75rem', { lineHeight: '1rem' }],
      },
    },
  },
  plugins: [],
} satisfies Config;
