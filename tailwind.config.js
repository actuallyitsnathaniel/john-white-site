/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      orange: colors.orange,
      yellow: colors.yellow,
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        'grain': {
          "0%, 100%":  { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-1%, -20%)' },
          '20%': { transform: 'translate(1%, 1%)' },
          '30%': { transform: 'translate(15%, -3%)' },
          '40%': { transform: 'translate(3%, 3%)' },
          '50%': { transform: 'translate(-3%, -3%)'},
          '60%': { transform: 'translate(4%, 4%)'},
          '70%': { transform: 'translate(-4%, -10%)'},
          '80%': { transform: 'translate(2%, 2%)'},
          '90%': { transform: 'translate(-5%, -5%)'},
        },
        'scratch': {
          '0%, 100%': { transform: 'translateX(0)'},
          '1%, 99%': { opacity: '0.075' },
          "10%": { transform: 'translateX(-1%)'},
          '20%': { transform: 'translateX(1%)'},
          '30%': { transform: 'translateX(-2%)' },
          '31%': { opacity: '0.09' },
          '40%': { transform:'translateX(3%)'},
          '50%': { transform: 'translateX(-3%)' },
          '51%': { opacity: '0.05'} ,
          '60%': { transform: 'translateX(8%)' },
          '70%': { transform: 'translateX(-3%)' },
          '80%': { transform: 'translateX(10%)' },
          '85%': { opacity: '0.02' },
          '90%': { transform: 'translateX(-2%)' },
        },
        'inner-scratch': {
          '0%': {
            transform: 'translateX(0)',
          },
          '1%': {
            opacity: '0.08',
          },
          '10%': {
            transform: 'translateX(-1%)',
          },
          '20%': {
            transform: 'translateX(1%)',
          },
          '30%': {
            transform: 'translateX(-2%)',
          },
          '40%': {
            transform: 'translateX(3%)',
          },
          '50%': {
            transform: 'translateX(-3%)',
          },
          '51%': {
            opacity: '0.06',
          },
          '60%': {
            transform: 'translateX(8%)',
          },
          '70%': {
            transform: 'translateX(-3%)',
          },
          '80%': {
            transform: 'translateX(10%)',
          },
          '81%': {
            opacity: '0.03',
          },
          '90%': {
            transform: 'translateX(20%)',
          },
          '100%': {
            transform: 'translateX(30%)',
          },
        }
      },
      animation: {
        'scratch-transform': 'scratch-transform 0.45s steps(1) infinite', // todo: fix this implementaion. check syntax?
        'scratch-opacity': 'scratch-opacity 0.45s steps(1) infinite',
        'grain': 'grain 0.75s steps(1) infinite',
        'inner-scratch': 'inner-scratch 2s infinite' // todo: fix this implementaion. check syntax?
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
};
