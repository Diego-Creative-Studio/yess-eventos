import { landingServices, type LandingService } from '@/data/landings/services'
import {
	locations,
	priorityRegions,
	regionNames,
	type Location,
	type Region,
} from '@/data/landings/locations'

export interface Landing {
	slug: string
	service: LandingService
	location: Location
}

/** "{serviço}-{prep}-{local}", ex.: painel-de-led-para-eventos-na-vila-mariana */
export const landingSlug = (service: LandingService, location: Location) =>
	`${service.slug}-${location.prep}-${location.slug}`

export const landingURL = (service: LandingService, location: Location) =>
	`/${landingSlug(service, location)}/`

export const isPublished = (service: LandingService, location: Location) =>
	service.scope.includes(location.kind)

/** "em Moema", "na Zona Sul de São Paulo" */
export const inLocation = (location: Location) => `${location.prep} ${location.name}`

/** "Moema", "a Vila Mariana", "o Brooklin": o nome com o artigo que a preposição carrega. */
const withArticle = (location: Location) =>
	`${{ em: '', na: 'a ', no: 'o ' }[location.prep]}${location.name}`

export function getLandings(): Landing[] {
	const landings = landingServices.flatMap((service) =>
		locations
			.filter((location) => isPublished(service, location))
			.map((location) => ({ slug: landingSlug(service, location), service, location })),
	)

	// Um slug repetido faria uma página sobrescrever a outra em silêncio.
	const seen = new Set<string>()
	for (const { slug } of landings) {
		if (seen.has(slug)) throw new Error(`Landing duplicada: /${slug}/`)
		seen.add(slug)
	}

	return landings
}

/** Nome das páginas-pilar, para o breadcrumb das landings. */
export const hubNames: Record<string, string> = {
	'/paineis-de-led-p2-e-p3/': 'Painéis de LED P2 e P3',
	'/som-e-iluminacao/': 'Som e iluminação',
	'/tvs-e-monitores/': 'TVs e monitores',
	'/estrutura-audiovisual-para-eventos/': 'Estrutura audiovisual',
	'/estruturas-e-cenografia-para-eventos/': 'Estruturas e cenografia',
	'/projetos-tecnicos-para-eventos/': 'Projetos técnicos e 3D',
	'/solucoes-corporativas/': 'Soluções corporativas',
}

export const getService = (slug: string) => {
	const service = landingServices.find((item) => item.slug === slug)
	if (!service) throw new Error(`Serviço de landing inexistente: ${slug}`)
	return service
}

/** Cidade e bairro/zona para preencher o formulário de orçamento. */
export function quoteLocation(location: Location) {
	if (location.kind === 'bairro' || location.kind === 'zona')
		return { city: 'São Paulo', district: location.name }
	return { city: location.name, district: '' }
}

/**
 * Vizinhança de um bairro: primeiro os da mesma subprefeitura, depois o resto
 * da zona. Numa zona, todos os bairros dela.
 */
export function regionNeighbors(location: Location) {
	const sameRegion = locations.filter(
		(item) =>
			item.kind === 'bairro' && item.region === location.region && item.slug !== location.slug,
	)
	const sameSub = sameRegion.filter((item) => item.subprefeitura === location.subprefeitura)
	return [...sameSub, ...sameRegion.filter((item) => !sameSub.includes(item))]
}

/** "na Zona Sul", "no Centro" */
const inRegion = (region: Region) => `n${regionNames[region]}`

const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1)

/**
 * Parágrafo de logística que muda conforme o tipo de localidade. Abre com um
 * fato verificável (subprefeitura, sub-região, distância) e, junto com a
 * `note` de cada lugar, é o que diferencia uma página local de outra.
 */
export function logisticsText(location: Location): string {
	const where = inLocation(location)

	switch (location.kind) {
		case 'capital':
			return `Para eventos ${where}, informe o endereço, o horário liberado para montagem e as regras de carga e descarga do espaço. Atendemos toda a cidade, com ênfase nas zonas Sul, Oeste e Norte, e planejamos a entrega e a montagem conforme o trânsito e a janela de acesso do local.`
		case 'zona': {
			const region = location.region!
			const subs = [...new Set(regionNeighbors(location).map((item) => item.subprefeitura!))]
			const emphasis = priorityRegions.includes(region)
				? `${capitalize(regionNames[region])} é uma das regiões de maior atuação da YESS.`
				: `A YESS atende ${regionNames[region]} com a mesma equipe que monta os eventos no restante da capital.`
			return `${emphasis} A região reúne as subprefeituras ${listJoin(subs)}. Informe o bairro, o espaço e as condições de acesso para dimensionarmos a entrega e a montagem.`
		}
		case 'bairro': {
			const vizinhos = regionNeighbors(location)
				.filter((item) => item.subprefeitura === location.subprefeitura)
				.slice(0, 4)
				.map((item) => item.name)
			const coverage = vizinhos.length
				? `o entorno, incluindo ${listJoin(vizinhos)}`
				: `toda ${regionNames[location.region!]}`
			return `${capitalize(withArticle(location))} fica na região da Subprefeitura ${location.subprefeitura}, ${inRegion(location.region!)} de São Paulo. Em eventos ${where}, a montagem precisa respeitar o horário do espaço, o acesso de carga e, em prédios corporativos, as regras da administração. A YESS atende ${withArticle(location)} e ${coverage}.`
		}
		case 'metropole':
			return `${location.name} fica ${location.area} e é atendida com a mesma equipe que monta os eventos na capital. Envie o endereço e a data para planejarmos o deslocamento, a montagem antes da abertura e a desmontagem ao final.`
		case 'interior':
		case 'litoral': {
			const access = location.road ? `, com acesso ${location.road}` : ''
			return `${location.name} fica ${location.area}, a cerca de ${location.distanceKm} km da capital${access}. Atendemos a capital, o interior e o litoral de São Paulo: para eventos fora da capital, a montagem é programada com antecedência, considerando o deslocamento da equipe e dos equipamentos e, quando necessário, montagem no dia anterior.`
		}
	}
}

/**
 * Frase que acolhe quem buscou pelos aliases. Em serviços de equipamento, o
 * alias é "aluguel"/"locação", e a resposta deixa claro que não há retirada.
 */
export function aliasText(service: LandingService, location: Location): string {
	const [first, second] = service.aliases
	if (!service.rental)
		return `Também atendemos quem procura ${first} ou ${second} ${inLocation(location)}: o serviço é feito pela equipe da YESS, integrado ao som, à luz e ao vídeo do evento, do planejamento à desmontagem.`
	return `Se você procura ${first} ou ${second} ${inLocation(location)}, vale saber como a YESS trabalha: não somos uma locadora e não há retirada de equipamento. Nós montamos o seu evento: os equipamentos são entregues, instalados e acompanhados por um técnico da nossa equipe, do projeto à desmontagem.`
}

/** Pergunta da FAQ montada sobre o alias principal do serviço. */
export function aliasFaq(service: LandingService, location: Location) {
	const pergunta = `Vocês fazem ${service.aliases[0]} ${inLocation(location)}?`
	if (!service.rental)
		return {
			pergunta,
			resposta: `Sim. A YESS atende ${withArticle(location)} com a mesma equipe que monta e opera o audiovisual do evento, do planejamento à desmontagem.`,
		}
	return {
		pergunta,
		resposta:
			'Não trabalhamos com retirada pelo cliente. A YESS monta o seu evento: entregamos, instalamos e um técnico acompanha toda a programação, até a desmontagem.',
	}
}

function listJoin(items: string[]) {
	if (items.length <= 1) return items.join('')
	return `${items.slice(0, -1).join(', ')} e ${items.at(-1)}`
}
