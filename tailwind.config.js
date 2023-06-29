/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
        'xl': "1440px"
      },
      colors: {
        darkBlue: 'hsl(209, 23%, 22%)',
        veryDarkBlue: 'hsl(207, 26%, 17%)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

