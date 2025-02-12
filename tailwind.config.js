/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'selector',
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			fontFamily: {
				inter: 'Inter, sans-serif'
			},
			colors: {
				"light-red": "#DE6262",
				"light-orange": "#FFB88C",
				"light-white": "#A5A5A5"
			}
		},
	},
	plugins: [require("tailwind-scrollbar-hide")],
}

