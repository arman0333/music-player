/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: { colors: {
      'light-yellow': '#FFFDE4',
      'dark-blue': '#005AA7',
    },
    backgroundImage: theme => ({
      'gradient-to-r': 'linear-gradient(to right, var(--bg-gradient-to-r-from), var(--bg-gradient-to-r-to))',
    }),
    linearGradientColors: theme => ({
      DEFAULT: theme('colors'),
      'to-r': [ 'var(--bg-gradient-to-r-from)', 'var(--bg-gradient-to-r-to)'],
    }),
  },
  fontFamily: {
    'exo-2': ['Exo 2', 'sans-serif'],
    'dongle': ['Dongle', 'sans-serif'],
  },
  fontWeight: {
    'normal': 400,
    // Add other weights as needed
  },
  },
  plugins: [],
}

