/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
    },
  },
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [],
}
