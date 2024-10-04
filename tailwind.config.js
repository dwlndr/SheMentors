/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main : {
          50 : '#fff1f2',
          100 : '#ffe3e4',
          200 : '#ffccd1',
          300 : '#ffa2ab',
          400 : '#fe6e80',
          500 : '#f94863',
          600 : '#e61841',
          700 : '#c20e37',
          800 : '#a30e34',
          900 : '#8b1034',
          950 : '#4e0317',

        },
      },
    },
  },
  plugins: [],
}

