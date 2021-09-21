const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            red: '#E05D5D',
            orange: '#FFB344',
            yellow: '#FFF8E5',
            green: '#00A19D',

            defaultBlack: colors.black,
            defaultRed: colors.red,
            defaultGreen: colors.green,
            defaultGray: colors.gray
        },
        fontFamily: {
            sans: ['Open Sans', 'sans-serif'],
            serif: ['Montserrat', 'serif']
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}