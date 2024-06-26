/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}' , 'node_modules/preline/dist/*.js'],
    theme: {
      extend: {
        boxShadow: {
          '3xl': 'inset 2px 5px 10px rgb(5, 5, 5);',
        }
      },
    },
    plugins: [require("daisyui"),require('preline/plugin')],
  }
  