/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    colors: {
      primary: 'rgba(15, 23, 42, 1)',
      secondary: 'radial-gradient(300px, rgba(29, 78, 216, 0.15), transparent 80%)',
      gray: 'rgba(148, 163, 184, 1)',
      white: 'rgba(226, 232, 240, 1)',
      dark: 'rgba(29, 79, 216, 0.05)',
      green: 'rgba(94, 234, 212, 1)',
      greenTransparent: 'rgba(45, 212, 191, .1)',
      transparent: 'rgba(148, 163, 184, 0.1)',
      highlight: 'rgba(29, 78, 216, 0.15)',
    },
    extend: {

    },
  },
  plugins: [],
};

