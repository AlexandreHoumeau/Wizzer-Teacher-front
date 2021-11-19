const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "-10": "-10",
        "-1": "-1"
      },
      borderRadius: {
        '4xl': '40px'
      },
    },
    fontFamily: (theme) => ({
      ...theme("font"),
      raleway: ["raleway", "sans-serif"],
      DMSans: ["DM Sans", "sans-serif"],
    }),
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        DEFAULT: '#1F4CEC',
        light: '#ECF0FD',
      },
      yellow: {
        DEFAULT: '#ECC61D',
      },
      orange: {
        DEFAULT: '#EC691D',
        light: '#FDF3EC',
      },
      purple: {
        DEFAULT: '#851DEC',
        light: '#F5ECFD',
      },
      red: {
        DEFAULT: '#EC1D4A',
        light: '#FDECF0',
      },
      grey: {
        DEFAULT: '#C8C9CB',
        light: '#F7F7F8',
        dark: '#828387',
        darker: '#232324',
      },
      success: {
        DEFAULT: '#1FD66B',
        light: '#EDFCF4',
      },
      waiting: {
        DEFAULT: '#F98F13',
        light: '#FEF6EB',
      },
      error: {
        DEFAULT: '#F52E14',
        light: '#FEEEEB',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
