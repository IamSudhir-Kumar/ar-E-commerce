/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      // Add more custom font families as needed
    },
    
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.placeholder-left::placeholder': {
          textAlign: 'left',
          paddingLeft: '1px', // Adjust padding-left as needed
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}