const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'border-colors': '#e4e4e7',
        'hi-contrast': '39 39 42',
        'lo-contrast': '255 255 255',
        'card': {
          'start': '228 228 231',
          'end': '212 212 216'
        }
      },
    },
  },
  plugins: [],
};
