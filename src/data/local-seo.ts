/** Explicit editorial allowlist. Never generate services × locations automatically. */
export const localServices = {
	'painel-de-led': {
		name: 'Painel de LED para eventos',
		hub: '/paineis-de-led-p2-e-p3/',
	},
} as const

export const serviceLocations = {
	'sao-paulo': {
		name: 'São Paulo',
		coverage: 'Atendimento em São Paulo, com ênfase nas zonas sul, oeste e norte.',
	},
	guarulhos: {
		name: 'Guarulhos',
		coverage: 'Atendimento em Guarulhos para eventos no local indicado pelo cliente.',
	},
	'zona-sul': {
		name: 'Zona Sul de São Paulo',
		coverage:
			'Atendimento na Zona Sul da capital, com entrega, montagem e acompanhamento técnico no espaço do evento.',
	},
} as const

export interface LocalSeoPage {
	service: keyof typeof localServices
	location: keyof typeof serviceLocations
	seoEligible: boolean
	description: string
	editorialNote: string
}

export const localSeoPages: LocalSeoPage[] = [
	{
		service: 'painel-de-led',
		location: 'sao-paulo',
		seoEligible: true,
		description:
			'Painéis de LED P2 e P3 para eventos em São Paulo, com projeto, montagem e operação técnica.',
		editorialNote:
			'Completar conteúdo local útil e revisar os canais de conversão antes da publicação. Não gerar bairros automaticamente.',
	},
	{
		service: 'painel-de-led',
		location: 'guarulhos',
		seoEligible: true,
		description: 'Painéis de LED P2 e P3 para eventos em Guarulhos, do planejamento à desmontagem.',
		editorialNote:
			'Completar conteúdo próprio de Guarulhos antes da publicação; não copiar a página de São Paulo trocando apenas a cidade.',
	},
	{
		service: 'painel-de-led',
		location: 'zona-sul',
		seoEligible: true,
		description:
			'Painel de LED P2 e P3 para eventos na Zona Sul de São Paulo, com planejamento, instalação e acompanhamento técnico da YESS.',
		editorialNote:
			'Cobertura regional confirmada. Distritos são referência geográfica; não atribuir cases ou unidades locais à YESS.',
	},
]
