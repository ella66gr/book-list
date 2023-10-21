/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts.js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/container-queries'),
		require('flowbite/plugin')
	]
}

