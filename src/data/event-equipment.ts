export const eventEquipment = [
	{
		slug: 'microfones',
		name: 'Microfones Shure e Sennheiser',
		summary: 'Captação de voz para reuniões, apresentações e plenárias.',
		details:
			'Informe quantas pessoas falarão, se haverá apresentações simultâneas e como será a dinâmica do palco. A equipe dimensiona os microfones e sua integração com a sonorização.',
		hub: '/som-e-iluminacao/',
	},
	{
		slug: 'caixas-de-som',
		name: 'Caixas de som QSC e EV',
		summary: 'Sonorização dimensionada para o público e o espaço do evento.',
		details:
			'O público estimado, as dimensões do espaço e o uso de fala ou música orientam o sistema. A YESS oferece sonorização para até 1.000 pessoas, conforme as condições do projeto.',
		hub: '/som-e-iluminacao/',
	},
	{
		slug: 'moving-heads',
		name: 'Moving heads 7R, 9R e 14R',
		summary: 'Iluminação para palco e diferentes momentos da programação.',
		details:
			'Informe o formato do evento, as dimensões do palco e a programação. A equipe define a iluminação e a montagem em conjunto com os demais equipamentos do projeto.',
		hub: '/som-e-iluminacao/',
	},
	{
		slug: 'projetores-epson',
		name: 'Projetores Epson',
		summary: 'Projeção de apresentações e vídeos em reuniões e congressos.',
		details:
			'A iluminação do ambiente, a distância de projeção e o conteúdo precisam ser avaliados antes da indicação. Informe o espaço e os arquivos que serão apresentados para orientar a configuração e os testes.',
		hub: '/tvs-e-monitores/',
	},
	{
		slug: 'tvs',
		name: 'TVs de 42, 55 e 65 polegadas',
		summary: 'Exibição de conteúdo em estandes, recepções e salas.',
		details:
			'O tamanho e a posição da TV dependem da distância de visualização, do conteúdo e da circulação. Informe os pontos de exibição e o uso previsto: apresentação, sinalização ou apoio ao evento.',
		hub: '/tvs-e-monitores/',
	},
] as const

export const quoteServices = [
	{ value: 'painel-de-led', name: 'Painel de LED P2 e P3' },
	{ value: 'sonorizacao', name: 'Sonorização' },
	{ value: 'iluminacao', name: 'Iluminação' },
	...eventEquipment.map(({ slug, name }) => ({ value: slug, name })),
	{ value: 'estruturas', name: 'Estruturas e cenografia' },
	{ value: 'projetos', name: 'Projetos técnicos e 3D' },
	{ value: 'sonoplastia', name: 'Sonoplastia' },
	{ value: 'orientacao', name: 'Preciso de orientação / pacote completo' },
]
