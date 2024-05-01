/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'inter': ['Inter', 'system-ui'],
			},
			keyframes: {
				fadein: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 },
				},
				// 'shake-x': {
				// 	'0%, 100%': { translate: '0%' },
				// 	'33%': { translate: '-2.5%' },
				// 	'66%': { translate: '2.5%' },
				// }
			},
			animation: {
			// 	fadein: 'fadein 3s ease-in-out forwards',
			}
		},
	},
	plugins: [],
}
