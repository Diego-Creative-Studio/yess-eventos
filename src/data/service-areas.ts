// Geographic reference, not evidence of past work or an office in each district.
export const areaSources = {
	regions: 'https://gestaourbana.prefeitura.sp.gov.br/arquivos-planos-regionais/',
	districts: 'https://prefeitura.sp.gov.br/licenciamento/w/servicos/312207',
}

export const southDistrictGroups = [
	{ name: 'Vila Mariana', districts: ['Vila Mariana', 'Moema', 'Saúde'] },
	{ name: 'Ipiranga', districts: ['Ipiranga', 'Cursino', 'Sacomã'] },
	{ name: 'Jabaquara', districts: ['Jabaquara'] },
	{ name: 'Santo Amaro', districts: ['Santo Amaro', 'Campo Belo', 'Campo Grande'] },
	{ name: 'Cidade Ademar', districts: ['Cidade Ademar', 'Pedreira'] },
	{ name: 'Campo Limpo', districts: ['Campo Limpo', 'Capão Redondo', 'Vila Andrade'] },
	{ name: 'Capela do Socorro', districts: ['Socorro', 'Cidade Dutra', 'Grajaú'] },
	{ name: 'M’Boi Mirim', districts: ['Jardim Ângela', 'Jardim São Luís'] },
	{ name: 'Parelheiros', districts: ['Parelheiros', 'Marsilac'] },
] as const

export function quoteAreaURL(service: string, city: string, district = '') {
	const query = new URLSearchParams({ service, city })
	if (district) query.set('district', district)
	return `/contato/?${query.toString()}#canais`
}
