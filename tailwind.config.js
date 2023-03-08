/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",

  '*.{html,js}'], 
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xsl: '1280px',
      xl: '1440px',
      xs:'360px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      spacing: {
        '10px': '10px',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        primary: "#1dbf73",
        secondary: "#0d084d",
        third:"#84cc16",
        blue: "#086972",
        violet: "#2F7CF0",
        lightgray: "#DDDDDD",
        green: "#28C165",
        red: "#F4574D",
      }
    },
  },
  plugins: [],
}
