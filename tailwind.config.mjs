/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				mono: ['DM Mono'],
				sans: ['neue-haas-unica']
			},
			colors: {
				'light-gray': 'rgb(155 158 166);',
				'dark-gray': '#111211',
				'orange': '#ed492f',
			},
			typography: {
				DEFAULT: {
					css: {
						color: '#262a3b',
					}
				}
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
