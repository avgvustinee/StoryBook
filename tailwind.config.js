/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      sfCompact: ['"SF Compact Display"', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],

    },
    
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
      animation: {
        typing: 'typing 4s steps(30, end) infinite',
        blink: 'blink 0.75s step-end infinite',
      },
      
    },
  },
  plugins: [
    require('tailwindcss-motion'),
    require('tailwindcss-animated'),

  ], 
};
  
