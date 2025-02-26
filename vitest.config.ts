import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';

export default defineConfig({
	test: {
		environment: 'node',
	},
	resolve: {
		alias: {
			'#app': resolve(__dirname, './src'),
		},
	},
});
