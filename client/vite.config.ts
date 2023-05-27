import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import autoprefixer from 'autoprefixer';
import { resolve } from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
	root: './',
	publicDir: 'public',
	build: {
		outDir: 'dist'
	},
	server: {
		port: 3001
	},
	resolve: {
		alias: {
			'@assets': resolve(__dirname, './src/assets'),
			'@components': resolve(__dirname, './src/components')
		}
	},
	plugins: [react()],
	css: {
		modules: {
			scopeBehaviour: 'local',
			localsConvention: 'camelCase',
			generateScopedName: '[name]__[local]__[hash:base64:5]'
		},
		postcss: {
			plugins: [
				autoprefixer({}) // add options if needed
			]
		}
	}
});
