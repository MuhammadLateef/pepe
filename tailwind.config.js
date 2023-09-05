/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        "bgcolor":"#4F9843",
        "textcolor":"#050C06",
      },
      // fontFamily: {
      //   comfortaa: ["var(--font-comfortaa)"],
      //   evermore: ["var(--font-evermore)"],
      // },      
    },
  },
  plugins: [],
}
