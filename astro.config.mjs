// @ts-check
import { defineConfig, fontProviders } from 'astro/config'
import alpinejs from '@astrojs/alpinejs'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

const site = process.env.SITE_URL ?? 'https://yess-eventos.vercel.app'

export default defineConfig({
	site,
	trailingSlash: 'always',
	image: {
		layout: 'constrained',
	},
	fonts: [
		{
			name: 'Plus Jakarta Sans',
			cssVariable: '--font-jakarta',
			provider: fontProviders.google(),
			weights: ['400 800'],
			styles: ['normal'],
			subsets: ['latin', 'latin-ext'],
			fallbacks: ['Arial', 'sans-serif'],
		},
		{
			name: 'Inter',
			cssVariable: '--font-inter',
			provider: fontProviders.google(),
			weights: ['400 700'],
			styles: ['normal'],
			subsets: ['latin', 'latin-ext'],
			fallbacks: ['Arial', 'sans-serif'],
		},
	],
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [alpinejs(), sitemap()],
})
