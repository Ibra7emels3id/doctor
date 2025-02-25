/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        red: '#d64444',
        lightPurple: '#eaefff',
        white: '#ffffff',
        green: '#22c55e',
        darkGray: '#262626',
        mediumGray: '#4b5563',
        gray: '#595959',
        gray2: '#5c5c5c',
        blue: '#5f6fff',
      },
      opacity: {
        '0': '0%',
      },
    },
  },
  plugins: [],
};
