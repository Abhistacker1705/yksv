const {fontFamily} = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				textBlack: '#00000A',
				trustedHeading: '#0E3088',
				saffron: '#E48400',
			},

			gradientColorStops: (theme) => ({
				...theme('colors'),
				buttonblue: '#7184FD',
				buttonindigo: '#3F7AF0',
				buttonpurple: '#4F37EE',
				carpegreen: '#046202',
			}),
			backgroundImage: {
				hero: "url('/assets/bgYKSV.jpeg')",
			},
			fontFamily: {
				inter: ['var(--font-inter)', ...fontFamily.sans],
				poppins: ['var(--font-poppins)', ...fontFamily.sans],
				jost: ['var(--font-jost)', ...fontFamily.sans],
				mal: ['var(--font-mal)', ...fontFamily.sans],
			},
			boxShadow: {
				input: '2px 2px 12px 0px rgba(0, 0, 0, 0.06)',
				inputMd:
					'1.0560001134872437px 1.0560001134872437px 6.336000442504883px 0px #0000000F',
			},
		},
	},
	plugins: [],
};
