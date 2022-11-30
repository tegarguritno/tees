/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '577px',
      'md': '769px',
      'lg': '993px',
      'xl': '1601px'
    },
    colors: {
      'white': 'rgb(255 255 255)',
      'white-2': 'rgb(250 250 250)',
      'white-70': 'rgb(255 255 255 / 70%)',
      'lilac': 'rgb(192 182 242)',
      'lilac-30': 'rgb(192 182 242 / 30%)',
      'black': 'rgb(0 0 0)',
      'black-20': 'rgb(0 0 0 / 20%)',
      'black-80': 'rgb(0 0 0 / 70%)',
      'green': 'rgb(171 245 176)',
      'purple-30': 'rgb(125 110 199 / 30%)',
      'orange': 'rgb(222 83 51)',
      'orange-70': 'rgb(222 83 51 / 70%)',
    },
    fontSize: {
      't-52': ['51.95px', {
        lineHeight: '1.25',
        letterSpacing: '0',
      }],
      't-52-1': ['51.95px', {
        lineHeight: '1',
        letterSpacing: '0',
      }],
      't-40': ['41.06px', {
        lineHeight: '49.27px',
        letterSpacing: '0',
        fontWeight: '400',
      }],
      't-36': ['36.5px', {
        lineHeight: '1',
        letterSpacing: '0'
      }],
      't-28': ['28.83px', {
        lineHeight: '1',
        letterSpacing: '0',
        fontWeight: '400',
      }],
      't-22': ['22.78px', {
        lineHeight: '1.2',
        letterSpacing: '0',
      }],
      't-18': ['18px', {
        lineHeight: '21.6px',
        letterSpacing: '0',
        fontWeight: '400',
      }],
      't-20': ['20.26px', {
        lineHeight: '27.35px',
        letterSpacing: '0',
      }],
      't-20-1': ['20.26px', {
        lineHeight: '1',
        letterSpacing: '0',
      }],
      't-25-500': ['25.63px', {
        lineHeight: '1',
        letterSpacing: '0',
      }],
      't-24': ['24px', {
        lineHeight: '24px',
        letterSpacing: '0',
        fontWeight: '400',
      }],

      // Phone

      'p-t-38': ['31.95px', {
        lineHeight: '1.25',
        letterSpacing: '0',
      }],
      'p-t-38-1': ['31.95px', {
        lineHeight: '1',
        letterSpacing: '0',
      }],
      'p-t-34': ['34.5px', {
        lineHeight: '1',
        letterSpacing: '0',
        fontWeight: '500',
      }],
      'p-t-22': ['22.5px', {
        lineHeight: '1',
        letterSpacing: '0',
      }],
      'p-t-26': ['26.83px', {
        lineHeight: '1',
        letterSpacing: '0',
        fontWeight: '500',
      }],
      'p-t-20': ['20.78px', {
        lineHeight: '1.2',
        letterSpacing: '0',
      }],
      'p-t-18': ['18.26px', {
        lineHeight: '24.65px',
        letterSpacing: '0',
      }],
      'p-t-18-1': ['18.26px', {
        lineHeight: '1',
        letterSpacing: '0',
      }],
      'p-t-16': ['16px', {
        lineHeight: '19.2px',
        letterSpacing: '0',
        fontWeight: '400',
      }],
      'p-t-23-500': ['23.63px', {
        lineHeight: '1',
        letterSpacing: '0',
      }],
      'p-t-12': ['12px', {
        lineHeight: '1',
        letterSpacing: '0',
      }],

    },
    extend: {
      spacing: {
        '52': '52px',
        '39': '39px',
        '32': '32px',
        '28': '28px',
        '26': '26px',
        '15': '15px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwindcss'),
    require('autoprefixer'),
],
}