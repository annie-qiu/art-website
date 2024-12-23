/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				mono: ['DM Mono'],
				sans: ['neue-haas-unica'],
				compagnon: ["Compagnon", "sans-serif"],
			},
			colors: {
				'light-gray': '#9aa4b3',
				'dark-gray': '#262a3b',
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
