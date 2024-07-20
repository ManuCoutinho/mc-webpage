/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				brand: {
					primary: '#ff8e3c',
					secondary: '#d9376e',
					tertiary: '#004643',
					base: '#0d0d0d',
					white: '#eff0f3'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
}


