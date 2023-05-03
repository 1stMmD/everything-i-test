/** @type {import('tailwindcss').Config} */

import { orange } from "tailwindcss/colors"

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors : {
        primary : orange
      }
    },
  },
  plugins: [],
}

