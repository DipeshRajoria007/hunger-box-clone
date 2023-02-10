/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'ubuntu': ['Ubuntu','sans-serif'],
      },
      colors : {
        primary : '#3B1693',
        secondary:'#FF625A',
        btn:'#3A1593',
        bg : '#F6F7F7',
        bgSecondary : '#F2F3F3',
        accent :'#FF5248'
      },
    },
  },
  plugins: [],
}
