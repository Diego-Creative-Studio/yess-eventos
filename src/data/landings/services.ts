import type { ImageMetadata } from 'astro'

import type { LocationKind } from '@/data/landings/locations'

import imagemAudiovisual from '@/assets/hero-home.png'
import imagemCenografia from '@/assets/painel-led/projeto-estrutura-integrada.jpg'
import imagemIluminacao from '@/assets/trabalhos/sonorizacao-iluminacao.png'
import imagemPainelLed from '@/assets/painel-led/hero-painel-led.jpg'
import imagemProjetos from '@/assets/painel-led/projeto-painel-corporativo.jpg'
import imagemSomIluminacao from '@/assets/som-iluminacao/hero-som-iluminacao.jpg'
import imagemSonoplastia from '@/assets/som-iluminacao/aplicacao-plenarias.jpg'
import imagemSonorizacao from '@/assets/som-iluminacao/entrega-completa.jpg'
import imagemTvs from '@/assets/tvs-monitores/c50bdbf544f1e24b84ab715a974c5f10d424fc0e.jpg'

/**
 * Serviços das landing pages de serviço × local.
 *
 * A YESS monta o evento, não aluga para retirada. Por isso o slug é sempre o
 * serviço prestado ("painel-de-led-para-eventos") e "aluguel"/"locação" ficam
 * em `aliases`: os termos que as pessoas digitam e que entram no texto, na FAQ
 * e na description sem virar URL própria. Duas URLs que só trocam "aluguel"
 * por "locação" competiriam entre si.
 *
 * `scope` define em quais tipos de localidade o serviço ganha página. Serviços
 * de nicho (projeto técnico, sonoplastia) não descem até bairro.
 */
export interface LandingService {
	slug: string
	/** Nome da página, minúsculo depois da primeira palavra, para h1 e texto. */
	label: string
	/** Versão em title case para a tag <title>. */
	title: string
	/** Forma curta usada no meio de frases e nos links ("painel de LED"). */
	short: string
	/** Etiqueta acima do h1. */
	tag: string
	/** Página-pilar do serviço, que recebe os links das landing pages. */
	hub: string
	/** Valores do QuoteForm marcados por padrão. */
	quote: string[]
	scope: LocationKind[]
	/** Serviço buscado como "aluguel"/"locação". Sem isso, os aliases não falam de retirada. */
	rental: boolean
	image: ImageMetadata
	imageAlt: string
	/** Complemento da meta description, depois de "{label} {prep} {local}:". */
	metaLead: string
	/** Frase de apoio no hero. */
	lead: string
	aliases: string[]
	intro: string[]
	equipment: string[]
	events: string[]
	faq: { pergunta: string; resposta: string }
}

const everywhere: LocationKind[] = ['capital', 'zona', 'bairro', 'metropole', 'interior', 'litoral']
const citiesOnly: LocationKind[] = ['capital', 'zona', 'metropole', 'interior', 'litoral']

export const landingServices: LandingService[] = [
	{
		slug: 'painel-de-led-para-eventos',
		label: 'Painel de LED para eventos',
		title: 'Painel de LED para Eventos',
		short: 'painel de LED',
		tag: 'Painel de LED P2 e P3',
		hub: '/paineis-de-led-p2-e-p3/',
		quote: ['painel-de-led'],
		scope: everywhere,
		rental: true,
		image: imagemPainelLed,
		imageAlt: 'Palco de evento corporativo com grande painel de LED',
		metaLead: 'painéis P2 e P3 com projeto, montagem, operação técnica e desmontagem',
		lead: 'Painéis P2 e P3 dimensionados para o espaço, montados pela nossa equipe e operados por um técnico durante todo o evento.',
		aliases: [
			'aluguel de painel de LED',
			'locação de painel de LED',
			'telão de LED',
			'painel de LED P2',
			'painel de LED P3',
		],
		intro: [
			'O painel de LED é a peça central de palcos, plenárias e estandes. A escolha entre P2 e P3 depende da distância entre o público e a tela, do tamanho da área de exibição e do conteúdo: apresentações com texto pedem mais definição; vídeos e cenários vistos de longe funcionam bem em P3.',
			'A YESS cuida do projeto à desmontagem: dimensiona o painel, define estrutura e fixação, configura a processadora e o sinal de vídeo, testa o conteúdo antes da abertura e mantém um técnico operando durante a programação.',
		],
		equipment: [
			'Painéis de LED P2 e P3',
			'Processadoras de vídeo',
			'Estrutura Box Truss Q15, Q25 e Q30',
			'Cabeamento e distribuição de sinal',
			'Operação técnica durante o evento',
		],
		events: ['Feiras e estandes', 'Congressos', 'Convenções', 'Plenárias', 'Eventos corporativos'],
		faq: {
			pergunta: 'Qual a diferença entre painel de LED P2 e P3?',
			resposta:
				'O número indica a distância entre os pixels, em milímetros. O P2 tem mais definição e funciona melhor quando o público está perto ou o conteúdo tem texto pequeno; o P3 atende bem telas vistas a uma distância maior.',
		},
	},
	{
		slug: 'som-e-iluminacao-para-eventos',
		label: 'Som e iluminação para eventos',
		title: 'Som e Iluminação para Eventos',
		short: 'som e iluminação',
		tag: 'Som e iluminação',
		hub: '/som-e-iluminacao/',
		quote: ['sonorizacao', 'iluminacao'],
		scope: everywhere,
		rental: true,
		image: imagemSomIluminacao,
		imageAlt: 'Palco com sistema de som e iluminação montados para evento',
		metaLead: 'áudio e luz planejados juntos, com montagem, operação técnica e desmontagem',
		lead: 'Áudio e luz planejados como uma única entrega, montados no espaço e operados por técnicos durante o evento.',
		aliases: [
			'aluguel de som e iluminação',
			'locação de som e luz',
			'som e luz para eventos',
			'sonorização e iluminação',
		],
		intro: [
			'Som e iluminação funcionam melhor quando são planejados juntos: a posição das caixas, dos microfones e dos refletores depende do mesmo palco, da mesma programação e do mesmo público. Planejar as duas coisas separadas costuma gerar retrabalho na montagem.',
			'A YESS dimensiona o sistema de som para até 1.000 pessoas, define a iluminação de palco e de ambiente, monta e testa tudo antes da abertura e mantém técnicos nas mesas de som e de luz durante a programação.',
		],
		equipment: [
			'Caixas de som QSC e EV',
			'Mesas de som digitais',
			'Microfones sem fio Shure e Sennheiser',
			'Moving heads 7R, 9R e 14R',
			'Par LEDs, ribaltas e mesas de luz digitais',
		],
		events: ['Eventos corporativos', 'Convenções', 'Feiras', 'Plenárias', 'Lançamentos'],
		faq: {
			pergunta: 'Para quantas pessoas vocês sonorizam?',
			resposta:
				'Montamos sonorização para públicos de até 1.000 pessoas. O sistema é dimensionado conforme o espaço, o formato do evento e o uso de fala ou música.',
		},
	},
	{
		slug: 'sonorizacao-para-eventos',
		label: 'Sonorização para eventos',
		title: 'Sonorização para Eventos',
		short: 'sonorização',
		tag: 'Sonorização',
		hub: '/som-e-iluminacao/',
		quote: ['sonorizacao', 'caixas-de-som', 'microfones'],
		scope: everywhere,
		rental: true,
		image: imagemSonorizacao,
		imageAlt: 'Equipamentos de sonorização montados para evento corporativo',
		metaLead: 'caixas de som, P.A., mesas digitais e microfones sem fio com técnico no evento',
		lead: 'Caixas de som, P.A., mesas digitais e microfones sem fio, dimensionados para o público e operados por um técnico.',
		aliases: [
			'aluguel de som para eventos',
			'locação de som',
			'som para eventos',
			'caixa de som para evento',
			'microfone sem fio para evento',
		],
		intro: [
			'Uma boa sonorização começa pelo espaço: o tamanho da sala, o pé-direito, o público estimado e o uso de fala ou música definem quantas caixas, quantos microfones e qual mesa o evento precisa.',
			'A YESS planeja o sistema, entrega e monta os equipamentos, passa o som antes da abertura e mantém um técnico na mesa durante toda a programação, ajustando volume, retorno e microfones a cada momento.',
		],
		equipment: [
			'Caixas de som QSC e EV',
			'Sistemas de P.A.',
			'Mesas de som digitais',
			'Microfones sem fio Shure e Sennheiser',
			'Sonorização para até 1.000 pessoas',
		],
		events: [
			'Reuniões e treinamentos',
			'Convenções',
			'Congressos',
			'Feiras',
			'Eventos corporativos',
		],
		faq: {
			pergunta: 'Vocês fornecem microfones sem fio?',
			resposta:
				'Sim. Trabalhamos com microfones sem fio Shure e Sennheiser, integrados à mesa de som e acompanhados por um técnico durante o evento.',
		},
	},
	{
		slug: 'iluminacao-para-eventos',
		label: 'Iluminação para eventos',
		title: 'Iluminação para Eventos',
		short: 'iluminação',
		tag: 'Iluminação',
		hub: '/som-e-iluminacao/',
		quote: ['iluminacao', 'moving-heads'],
		scope: everywhere,
		rental: true,
		image: imagemIluminacao,
		imageAlt: 'Palco iluminado com moving heads em evento',
		metaLead: 'moving heads, par LEDs e ribaltas com projeto de luz, montagem e operação',
		lead: 'Moving heads, par LEDs e ribaltas com projeto de luz para o palco e o ambiente, operados por técnico durante o evento.',
		aliases: [
			'aluguel de iluminação para eventos',
			'locação de iluminação',
			'luz para eventos',
			'moving head para evento',
			'par LED para evento',
		],
		intro: [
			'A iluminação define como o público enxerga o palco, os palestrantes e a marca. Ela precisa funcionar para quem está na plateia e para quem está filmando ou fotografando o evento.',
			'A YESS desenha a luz conforme o palco e a programação, monta os equipamentos na estrutura, programa as cenas na mesa de luz digital e mantém um técnico operando cada momento: abertura, palestras, premiações e intervalos.',
		],
		equipment: [
			'Moving heads 7R, 9R e 14R',
			'Par LEDs',
			'Ribaltas',
			'Mesas de luz digitais',
			'Estrutura Box Truss para fixação',
		],
		events: ['Palcos e convenções', 'Premiações', 'Lançamentos', 'Feiras', 'Eventos corporativos'],
		faq: {
			pergunta: 'A iluminação vem com operador?',
			resposta:
				'Sim. As cenas são programadas antes do evento e um técnico opera a mesa de luz durante toda a programação.',
		},
	},
	{
		slug: 'tvs-e-projetores-para-eventos',
		label: 'TVs e projetores para eventos',
		title: 'TVs e Projetores para Eventos',
		short: 'TVs e projetores',
		tag: 'TVs e projeção',
		hub: '/tvs-e-monitores/',
		quote: ['tvs', 'projetores-epson'],
		scope: everywhere,
		rental: true,
		image: imagemTvs,
		imageAlt: 'TVs instaladas para exibição de conteúdo em evento',
		metaLead:
			'TVs de 42, 55 e 65 polegadas e projetores Epson entregues, instalados e acompanhados',
		lead: 'TVs de 42, 55 e 65 polegadas e projetores Epson instalados no ponto certo e acompanhados por um técnico.',
		aliases: [
			'aluguel de TV para eventos',
			'locação de TV',
			'aluguel de projetor',
			'locação de projetor',
			'TV 55 polegadas para evento',
		],
		intro: [
			'Mesmo quando o evento precisa de uma, duas ou três TVs, o resultado depende da instalação: altura, ângulo de visão, distância do público, cabeamento e testes do conteúdo antes da abertura.',
			'A YESS não entrega equipamento para retirada. Levamos as TVs ou os projetores até o local, instalamos onde eles vão ficar, testamos o conteúdo e mantemos um técnico acompanhando o evento.',
		],
		equipment: [
			'TVs de 42, 55 e 65 polegadas',
			'Projetores Epson',
			'Suportes e pedestais',
			'Cabeamento e distribuição de sinal',
			'Acompanhamento técnico',
		],
		events: ['Estandes em feiras', 'Recepções', 'Reuniões', 'Salas de congresso', 'Treinamentos'],
		faq: {
			pergunta: 'Dá para contratar só uma TV?',
			resposta:
				'Sim. Mesmo uma contratação pontual inclui entrega, instalação no ponto definido e acompanhamento de um técnico durante o evento.',
		},
	},
	{
		slug: 'audiovisual-para-eventos',
		label: 'Audiovisual para eventos',
		title: 'Audiovisual para Eventos',
		short: 'estrutura audiovisual',
		tag: 'Estrutura audiovisual completa',
		hub: '/estrutura-audiovisual-para-eventos/',
		quote: ['orientacao'],
		scope: everywhere,
		rental: true,
		image: imagemAudiovisual,
		imageAlt: 'Evento com palco, público e painéis de LED',
		metaLead: 'painel de LED, som, luz, TVs e projeção montados e operados pela mesma equipe',
		lead: 'Painel de LED, som, iluminação, TVs e projeção montados e operados por uma única equipe, do projeto à desmontagem.',
		aliases: [
			'aluguel de equipamentos audiovisuais',
			'locação de equipamentos para eventos',
			'equipamentos audiovisuais para eventos',
			'produção audiovisual de eventos',
		],
		intro: [
			'Contratar painel, som, luz e telas de fornecedores diferentes significa coordenar horários de montagem, sinais de vídeo e responsabilidades no dia do evento. Com uma equipe só, o projeto já nasce integrado.',
			'A YESS planeja a estrutura audiovisual completa, entrega e monta os equipamentos, testa tudo em conjunto e mantém técnicos operando até a desmontagem. Também recebemos projetos já prontos e executamos conforme o planejado.',
		],
		equipment: [
			'Painéis de LED P2 e P3',
			'Som, P.A. e microfones sem fio',
			'Iluminação de palco e ambiente',
			'TVs e projetores',
			'Estruturas, praticáveis e backdrops',
		],
		events: ['Eventos corporativos', 'Feiras', 'Congressos', 'Convenções', 'Plenárias e salas'],
		faq: {
			pergunta: 'Vocês executam projetos feitos por outra empresa?',
			resposta:
				'Sim. A YESS elabora projetos novos e também recebe projetos já prontos, executando a montagem e a operação conforme o planejado.',
		},
	},
	{
		slug: 'estrutura-e-cenografia-para-eventos',
		label: 'Estrutura e cenografia para eventos',
		title: 'Estrutura e Cenografia para Eventos',
		short: 'estrutura e cenografia',
		tag: 'Estrutura e cenografia',
		hub: '/estruturas-e-cenografia-para-eventos/',
		quote: ['estruturas'],
		scope: everywhere,
		rental: true,
		image: imagemCenografia,
		imageAlt: 'Estrutura de palco com Box Truss e painel integrado',
		metaLead: 'Box Truss Q15, Q25 e Q30, praticáveis e backdrops montados com o audiovisual',
		lead: 'Box Truss, praticáveis para palco e backdrops montados junto com o painel, o som e a luz do evento.',
		aliases: [
			'aluguel de box truss',
			'montagem de palco para eventos',
			'praticável para palco',
			'backdrop para eventos',
			'estrutura de palco',
		],
		intro: [
			'A estrutura é o que sustenta o restante do evento: o painel de LED, a iluminação e o backdrop dependem de onde e como o Box Truss e os praticáveis são montados.',
			'A YESS projeta e monta a estrutura em conjunto com o audiovisual, o que evita incompatibilidade de medidas e conflitos de horário entre fornecedores. Sim, também montamos backdrop.',
		],
		equipment: [
			'Box Truss Q15, Q25 e Q30',
			'Praticáveis para palco',
			'Backdrops',
			'Fixação de painéis e iluminação',
			'Montagem e desmontagem',
		],
		events: ['Palcos', 'Estandes em feiras', 'Convenções', 'Eventos corporativos', 'Lançamentos'],
		faq: {
			pergunta: 'Vocês montam backdrop?',
			resposta:
				'Sim. O backdrop é montado junto com a estrutura e o audiovisual do evento, pela mesma equipe.',
		},
	},
	{
		slug: 'projeto-tecnico-para-eventos',
		label: 'Projeto técnico para eventos',
		title: 'Projeto Técnico para Eventos',
		short: 'projeto técnico',
		tag: 'Projetos técnicos e 3D',
		hub: '/projetos-tecnicos-para-eventos/',
		quote: ['projetos'],
		scope: citiesOnly,
		rental: false,
		image: imagemProjetos,
		imageAlt: 'Projeto de palco corporativo com painel de LED',
		metaLead: 'projetos 3D e em AutoCAD para planejar palco, painel, som e luz antes da montagem',
		lead: 'Projetos 3D e em AutoCAD para visualizar e aprovar palco, painel, som e luz antes da montagem.',
		aliases: [
			'projeto 3D para eventos',
			'projeto em AutoCAD para eventos',
			'planta técnica de evento',
			'projeto de palco',
		],
		intro: [
			'O projeto técnico antecipa no papel o que aconteceria só no dia da montagem: medidas do palco, posição do painel, pontos de som e luz, circulação do público e necessidades de energia.',
			'A YESS elabora projetos 3D para aprovação visual e projetos em AutoCAD para a execução, e pode assumir também a montagem e a operação do que foi projetado.',
		],
		equipment: [
			'Projetos 3D',
			'Projetos em AutoCAD',
			'Projetos técnicos de palco e audiovisual',
			'Compatibilização com o espaço',
			'Execução da montagem',
		],
		events: ['Feiras e estandes', 'Congressos', 'Convenções', 'Plenárias', 'Eventos corporativos'],
		faq: {
			pergunta: 'Posso contratar só o projeto?',
			resposta:
				'Consulte a equipe. O projeto pode ser contratado junto com a montagem e a operação, o que garante que o planejado seja executado pela mesma equipe.',
		},
	},
	{
		slug: 'sonoplastia-para-congressos',
		label: 'Sonoplastia para congressos',
		title: 'Sonoplastia para Congressos',
		short: 'sonoplastia',
		tag: 'Sonoplastia de plenária',
		hub: '/solucoes-corporativas/',
		quote: ['sonoplastia'],
		scope: citiesOnly,
		rental: false,
		image: imagemSonoplastia,
		imageAlt: 'Plenária de congresso com sonorização e mesa diretora',
		metaLead: 'sonoplastia de plenárias e convenções com microfones, trilhas e operação ao vivo',
		lead: 'Sonoplastia de plenárias, convenções e congressos, com operação ao vivo de microfones, trilhas e vinhetas.',
		aliases: [
			'sonoplastia de plenária',
			'sonoplastia para convenções',
			'sonoplasta para eventos',
			'operador de som para congresso',
		],
		intro: [
			'Em plenárias e congressos, o som acompanha o roteiro: abertura de microfones da mesa diretora, perguntas da plateia, trilhas de entrada, vinhetas e votações. Um atraso de segundos aparece para todo o público.',
			'A YESS faz a sonoplastia ao vivo seguindo o roteiro do evento, integrada à sonorização e ao vídeo, com técnico dedicado do ensaio ao encerramento.',
		],
		equipment: [
			'Operação de sonoplastia ao vivo',
			'Microfones de mesa e sem fio',
			'Mesas de som digitais',
			'Trilhas e vinhetas',
			'Integração com vídeo e painel',
		],
		events: ['Plenárias', 'Congressos', 'Convenções', 'Assembleias', 'Fóruns'],
		faq: {
			pergunta: 'A sonoplastia segue o roteiro do evento?',
			resposta:
				'Sim. O técnico trabalha com o roteiro da programação e acompanha o ensaio para sincronizar microfones, trilhas e vinhetas.',
		},
	},
]
