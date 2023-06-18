import { join } from 'path'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import skeleton from '@skeletonlabs/skeleton/tailwind/skeleton.cjs'

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {},
	},
	plugins: [forms, typography, ...skeleton()],
	safelist: [
		'bg-[url($assets/tronco_de_roble.png)]',
		'bg-[url($assets/tronco_de_roble_oscuro.png)]',
		'bg-[url($assets/hacha_de_madera.png)]',
		'bg-[url($assets/hacha_de_madera.png)]',
	]
}
