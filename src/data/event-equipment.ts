export const eventEquipment = [
	{
		slug: 'painel-de-led-p2',
		name: 'Painel de LED P2',
		summary: 'Imagem com maior definição para apresentações e leitura de conteúdo com o público próximo ao painel.',
		details:
			'O P2 tem distância de 2 mm entre pixels, menor que a do P3. Para uma mesma dimensão de painel, isso permite mais pixels e favorece a exibição de textos e detalhes. Informe a distância do público, o tamanho disponível e o conteúdo: a equipe avalia a configuração, prepara o sinal e monta o painel para o evento.',
		hub: '/paineis-de-led-p2-e-p3/',
		landing: 'painel-de-led-para-eventos',
	},
	{
		slug: 'painel-de-led-p3',
		name: 'Painel de LED P3',
		summary: 'Exibição de vídeos e comunicação visual em palcos e estandes, com dimensionamento conforme a distância do público.',
		details:
			'O P3 tem distância de 3 mm entre pixels. A escolha considera a distância de visualização, as dimensões da tela e o nível de detalhe do conteúdo. Para imagens amplas e vídeos, a equipe avalia se o P3 atende ao projeto; quando há textos pequenos ou público muito próximo, compara também a opção P2 antes de definir a montagem.',
		hub: '/paineis-de-led-p2-e-p3/',
		landing: 'painel-de-led-para-eventos',
	},
	{
		slug: 'microfones',
		name: 'Microfones Shure e Sennheiser',
		summary: 'Captação de voz para reuniões, apresentações e plenárias.',
		details:
			'Informe quantas pessoas falarão, se haverá apresentações simultâneas e como será a dinâmica do palco. A equipe dimensiona os microfones e sua integração com a sonorização.',
		hub: '/som-e-iluminacao/',
		landing: 'sonorizacao-para-eventos',
	},
	{
		slug: 'caixas-de-som',
		name: 'Caixas de som QSC e EV',
		summary: 'Sonorização dimensionada para o público e o espaço do evento.',
		details:
			'O público estimado, as dimensões do espaço e o uso de fala ou música orientam o sistema. A YESS oferece sonorização para até 1.000 pessoas, conforme as condições do projeto.',
		hub: '/som-e-iluminacao/',
		landing: 'sonorizacao-para-eventos',
	},
	{
		slug: 'moving-heads',
		name: 'Moving heads 7R, 9R e 14R',
		summary: 'Iluminação para palco e diferentes momentos da programação.',
		details:
			'Informe o formato do evento, as dimensões do palco e a programação. A equipe define a iluminação e a montagem em conjunto com os demais equipamentos do projeto.',
		hub: '/som-e-iluminacao/',
		landing: 'iluminacao-para-eventos',
	},
	{
		slug: 'projetores-epson',
		name: 'Projetores Epson',
		summary: 'Projeção de apresentações e vídeos em reuniões e congressos.',
		details:
			'A iluminação do ambiente, a distância de projeção e o conteúdo precisam ser avaliados antes da indicação. Informe o espaço e os arquivos que serão apresentados para orientar a configuração e os testes.',
		hub: '/tvs-e-monitores/',
		landing: 'tvs-e-projetores-para-eventos',
	},
	{
		slug: 'tvs',
		name: 'TVs de 42, 55 e 65 polegadas',
		summary: 'Exibição de conteúdo em estandes, recepções e salas.',
		details:
			'O tamanho e a posição da TV dependem da distância de visualização, do conteúdo e da circulação. Informe os pontos de exibição e o uso previsto: apresentação, sinalização ou apoio ao evento.',
		hub: '/tvs-e-monitores/',
		landing: 'tvs-e-projetores-para-eventos',
	},
] as const

/**
 * Serviços disponíveis para o orçamento do evento.
 * `matches` liga os serviços e equipamentos das páginas à opção que já vem marcada.
 */
export const quoteServices = [
	{
		value: 'som',
		name: 'Som',
		hint: 'P.A., microfones e mesa',
		matches: ['sonorizacao', 'sonoplastia', 'caixas-de-som', 'microfones'],
	},
	{
		value: 'luz',
		name: 'Luz',
		hint: 'Moving heads e iluminação cênica',
		matches: ['iluminacao', 'moving-heads'],
	},
	{
		value: 'video',
		name: 'Vídeo',
		hint: 'Painel de LED, TVs e projetores',
		matches: ['painel-de-led', 'painel-de-led-p2', 'painel-de-led-p3', 'tvs', 'projetores-epson'],
	},
	{
		value: 'projetos',
		name: 'Projetos',
		hint: 'Projeto técnico, 3D e estrutura',
		matches: ['projetos', 'estruturas'],
	},
	{
		value: 'dj-corporativo',
		name: 'DJ corporativo',
		hint: 'Repertório e apresentação musical',
		matches: ['dj-para-eventos-corporativos'],
	},
]

/** Lista detalhada, usada só no formulário das páginas de equipamento. */
export const quoteEquipmentOptions = [
	{ value: 'painel-de-led', name: 'Painel de LED P2 e P3', hint: '', matches: [] as string[] },
	{ value: 'sonorizacao', name: 'Sonorização', hint: '', matches: [] as string[] },
	{ value: 'iluminacao', name: 'Iluminação', hint: '', matches: [] as string[] },
	...eventEquipment.map(({ slug, name }) => ({ value: slug, name, hint: '', matches: [] as string[] })),
	{ value: 'estruturas', name: 'Estruturas e cenografia', hint: '', matches: [] as string[] },
	{ value: 'projetos', name: 'Projetos técnicos e 3D', hint: '', matches: [] as string[] },
	{ value: 'sonoplastia', name: 'Sonoplastia', hint: '', matches: [] as string[] },
	{ value: 'dj-corporativo', name: 'DJ corporativo', hint: '', matches: ['dj-para-eventos-corporativos'] },
	{ value: 'orientacao', name: 'Preciso de orientação / pacote completo', hint: '', matches: [] as string[] },
]

/** Faixas de público para a pergunta "Quantas pessoas?". */
export const quoteAudience = [
	'Até 50 pessoas',
	'50 a 100 pessoas',
	'100 a 300 pessoas',
	'300 a 500 pessoas',
	'500 a 1.000 pessoas',
	'Mais de 1.000 pessoas',
]
