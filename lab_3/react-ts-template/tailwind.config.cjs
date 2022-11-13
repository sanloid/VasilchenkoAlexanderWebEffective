/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'red-acid': 'rgb(207, 19, 19)',
      },
      fontFamily: {
        'marvel': ['Marvel'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}