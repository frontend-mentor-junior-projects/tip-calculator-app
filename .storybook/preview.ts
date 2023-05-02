import 'tailwindcss/tailwind.css'
import type { Preview } from '@storybook/react'

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		options: {
			storySort: (a, b) =>
				a.id === b.id
					? 0
					: a.id.localeCompare(b.id, undefined, { numeric: true }),
		},
		backgrounds: {
			default: 'light',
			values: [
				{ name: 'light', value: '#FFF' },
				{ name: 'dark', value: 'hsl(183, 100%, 15%)' },
			],
		},
	},
}

export default preview
