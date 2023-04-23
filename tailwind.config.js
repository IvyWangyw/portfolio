/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      // colors:{
      //     transparent: 'transparent',
      //     metal: '#565584',
      // },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),
],
}