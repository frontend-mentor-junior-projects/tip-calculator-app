/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Space Mono', 'monospace'],
			},
			colors: {
				primary: 'hsl(172, 67%, 45%)',
				'neutral-500': 'hsl(183, 100%, 15%)',
				'neutral-400': 'hsl(186, 14%, 43%)',
				'neutral-300': 'hsl(184, 14%, 56%)',
				'neutral-200': 'hsl(185, 41%, 84%)',
				'neutral-100': 'hsl(189, 41%, 97%)',
				white: 'hsl(0, 0%, 100%)',
			},
		},
	},
	plugins: [],
}
