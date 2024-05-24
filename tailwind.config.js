/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './widgets/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: [
          'ui-monospace',
          'Menlo',
          'Monaco',
          'Cascadia Mono',
          'Segoe UI Mono',
          'Roboto Mono',
          'Oxygen Mono',
          'Ubuntu Monospace',
          'Source Code Pro',
          'Fira Mono',
          'Droid Sans Mono',
          'Courier New',
          'monospace',
        ],
        termina400: ['Termina Test Regular', 'Arial'],
        termina600: ['Termina Test Demi', 'Arial'],
        termina700: ['Termina Test Bold', 'Arial'],
      },
      letterSpacing: {
        title: '0.03em',
        'tight-title': '0.02em',
      },
      fontSize: {
        md: '1rem',
      },
      backgroundColor: {
        secondary: '#4B4F58',
        'secondary-btn': '#000',
      },
      colors: {
        background: {
          DEFAULT: 'rgba(18, 19, 22, 1)',
          transparent01: 'rgba(255, 255, 255, 0.1)',
          transparent02: 'rgba(255, 255, 255, 0.2)',
          transparent05: 'rgba(255, 255, 255, 0.5)',
          transparent09: 'rgba(255, 255, 255, 0.9)',
          gradient: 'rgba(92, 52, 134, 1)',
          cards: 'rgba(75, 79, 88, 1)',
        },
        text: {
          DEFAULT: '#fff',
          'secondary-btn': '#fff',
        },
        gradient: {
          start: 'rgba(40, 40, 40, 1)',
          end: 'rgba(211, 211, 211, 1)',
        },
        button: {
          background: 'rgba(46, 74, 197, 1)',
        },
      },
      maxWidth: {
        'screen-sm': '500px',
      },
    },
  },
  plugins: [],
};
