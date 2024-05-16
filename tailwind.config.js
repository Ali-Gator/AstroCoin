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
      colors: {
        background: {
          DEFAULT: 'rgba(18, 19, 22, 1)',
          transparent01: 'rgba(255, 255, 255, 0.1)',
          transparent02: 'rgba(255, 255, 255, 0.2)',
          transparent05: 'rgba(255, 255, 255, 0.5)',
          transparent09: 'rgba(255, 255, 255, 0.9)',
          cards: 'rgba(75, 79, 88, 1)',
        },
        text: {
          DEFAULT: '#fff',
        },
        gradient: {
          start: '#FE6A26',
          end: '#FFFC00',
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
