// @ts-check
import { defineConfig, fontProviders } from 'astro/config'
import alpinejs from '@astrojs/alpinejs'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

const site = 'https://yessproducoes.com.br'

export default defineConfig({
	site,
	trailingSlash: 'always',
	redirects: {
		'/locacao-de-equipamentos-para-eventos/': '/estrutura-audiovisual-para-eventos/',
		'/locacao/microfones/': '/equipamentos/microfones/',
		'/locacao/caixas-de-som/': '/equipamentos/caixas-de-som/',
		'/locacao/moving-heads/': '/equipamentos/moving-heads/',
		'/locacao/projetores-epson/': '/equipamentos/projetores-epson/',
		'/locacao/tvs/': '/equipamentos/tvs/',
		'/solucoes/painel-de-led/sao-paulo/': '/painel-de-led-para-eventos-em-sao-paulo/',
		'/solucoes/painel-de-led/guarulhos/': '/painel-de-led-para-eventos-em-guarulhos/',
		'/solucoes/painel-de-led/zona-sul/': '/painel-de-led-para-eventos-na-zona-sul/',
	},
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
	integrations: [
		alpinejs(),
		sitemap({
			filter: (page) => !/^\/(locacao|solucoes)\//.test(new URL(page).pathname),
		}),
	],
})
