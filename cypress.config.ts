import { defineConfig } from 'cypress'

export default defineConfig({
	e2e: {
		baseUrl: 'http://localhost:3000',
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		setupNodeEvents(_on, _config) {
			// Implement node event listeners here.
		},
	},
})
