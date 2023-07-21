/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			dropShadow: {
				"4xl": [
					'0px 11px 7px rgba(0, 0, 0, 0.01)',
					'0px 7px 7px rgba(0, 0, 0, 0.04)',
					'0px 4px 6px rgba(0, 0, 0, 0.1)',
					'0px 2px 4px rgba(0, 0, 0, 0.26)',
					'0px 0px 2px rgba(0, 0, 0, 0.29)',
					'inset 0px 2px 3px rgba(255, 255, 255, 0.1)',
				],
			},
		},
	},
	plugins: [],
};
