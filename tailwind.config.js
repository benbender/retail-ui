/* eslint-disable @typescript-eslint/no-var-requires */
// tailwind.config.js
const { resolveConfig } = require('@retail-ui/core')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = resolveConfig({
  experimental: 'all',
  purge: ['./packages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
})
