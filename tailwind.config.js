/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      "thStyle":"py-2 px-4 border-b border-gray-200 text-center"
    },
  },
  plugins: [],
}
