/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {  colors :{
      'darkblue' : '#111827',
      'Orange':'#EF471E',
      'Darker':'#1e1e1e',
      'glass' : 'rgba(4, 255, 215, 0.44)' ,
    },},
    fontFamily:{
      Doctor:'Doctor',
      Hacker:'Hacker',

    },
  },
  plugins: [],
}
