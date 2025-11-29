import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1ff',
          100: '#b3d7ff',
          200: '#80bdff',
          300: '#4da3ff',
          400: '#1a89ff',
          500: '#0066cc',
          600: '#0052a3',
          700: '#003d7a',
          800: '#002952',
          900: '#001429',
          950: '#000a14',
        },
        dark: {
          50: '#e6e9ed',
          100: '#b3bcc9',
          200: '#808fa5',
          300: '#4d6281',
          400: '#1a355d',
          500: '#0a1628',
          600: '#081220',
          700: '#060d18',
          800: '#040910',
          900: '#020408',
        },
        accent: {
          cyan: '#00d9ff',
          purple: '#a855f7',
          pink: '#ec4899',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-orbitron)', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 102, 204, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 102, 204, 0.8)' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(0, 217, 255, 0.3)',
        'glow-md': '0 0 20px rgba(0, 217, 255, 0.4)',
        'glow-lg': '0 0 40px rgba(0, 217, 255, 0.5)',
        'neon': '0 0 5px #00d9ff, 0 0 20px #00d9ff',
      },
    },
  },
  plugins: [],
};

export default config;
