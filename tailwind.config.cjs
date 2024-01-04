/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/routes/**/*.{svelte,js,ts}'],
  theme: {
    fontFamily: {
      copse: '"Copse", sans-serif',
      istok: '"Istok Web", bold, sans-serif'

    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui'),],
  daisyui: {
    themes: ["corporate", "dark"],
  },
}

