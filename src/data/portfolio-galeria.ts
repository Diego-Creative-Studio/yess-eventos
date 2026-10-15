import type { ImageMetadata } from 'astro'

/** Fotos reais de eventos da YESS usadas nas seções do portfólio. */
const arquivos = import.meta.glob<{ default: ImageMetadata }>([
	'../assets/portfolio/galeria/*.jpg',
	'!../assets/portfolio/galeria/03-led-paineis-sequencia.jpg',
], {
	eager: true,
})

export type CategoriaGaleria = 'led' | 'som' | 'luz' | 'tvs' | 'estrutura'

export const categoriasGaleria: { value: CategoriaGaleria | 'todos'; label: string }[] = [
	{ value: 'todos', label: 'Todos' },
	{ value: 'led', label: 'Painel de LED' },
	{ value: 'som', label: 'Som' },
	{ value: 'luz', label: 'Iluminação' },
	{ value: 'tvs', label: 'TVs e projetores' },
	{ value: 'estrutura', label: 'Estrutura' },
]

const lista: { arquivo: string; categorias: CategoriaGaleria[]; alt: string }[] = [
	{ arquivo: '01-led-luz-convencao-fumaca.jpg', categorias: ['led', 'luz'], alt: 'Convenção com painéis de LED, bandeiras em LED e feixes de luz na fumaça' },
	{ arquivo: '02-led-convencao-moving-verde.jpg', categorias: ['led', 'luz'], alt: 'Palco de convenção com painéis de LED e moving heads verdes' },
	{ arquivo: '04-led-show-operacao.jpg', categorias: ['led', 'luz', 'som'], alt: 'Show de luz e painéis de LED visto da mesa de operação' },
	{ arquivo: '05-led-auditorio-feixes.jpg', categorias: ['led', 'luz'], alt: 'Auditório com painel de LED e feixes de luz cruzando o palco' },
	{ arquivo: '06-led-show-cantora.jpg', categorias: ['led', 'luz'], alt: 'Apresentação musical com painel de LED e moving heads' },
	{ arquivo: '07-led-talk-operacao.jpg', categorias: ['led', 'som'], alt: 'Talk com painéis de LED e monitores da operação técnica' },
	{ arquivo: '08-led-palco-transmissao.jpg', categorias: ['led', 'luz'], alt: 'Palco com painéis de LED, iluminação e câmeras de transmissão' },
	{ arquivo: '09-led-panoramico-congresso.jpg', categorias: ['led'], alt: 'Congresso com painel de LED panorâmico' },
	{ arquivo: '10-led-transmissao-esportiva.jpg', categorias: ['led', 'som'], alt: 'Painel de LED com transmissão esportiva e caixas de som' },
	{ arquivo: '11-led-academia.jpg', categorias: ['led'], alt: 'Painel de LED instalado em aula de bike indoor' },
	{ arquivo: '12-led-bar.jpg', categorias: ['led'], alt: 'Painel de LED em bar para transmissão' },
	{ arquivo: '13-led-experience-palco.jpg', categorias: ['led', 'som'], alt: 'Palco com painel de LED e debate para plateia' },
	{ arquivo: '14-led-estande-feira.jpg', categorias: ['led', 'estrutura'], alt: 'Estande de feira com painel de LED' },
	{ arquivo: '15-luz-auditorio-feixes.jpg', categorias: ['luz'], alt: 'Auditório com feixes de luz e iluminação cênica' },
	{ arquivo: '16-luz-led-azul.jpg', categorias: ['luz', 'led'], alt: 'Salão com painéis de LED e iluminação azul' },
	{ arquivo: '17-luz-fenae-feixes.jpg', categorias: ['luz', 'led'], alt: 'Festa com moving heads, painel de LED e público' },
	{ arquivo: '18-luz-pista-feixes.jpg', categorias: ['luz'], alt: 'Pista lotada com feixes de luz sobre o público' },
	{ arquivo: '19-luz-uplight-verde.jpg', categorias: ['luz'], alt: 'Sala de treinamento com iluminação verde nas paredes' },
	{ arquivo: '20-luz-uplight-roxo.jpg', categorias: ['luz'], alt: 'Ambiente com iluminação roxa nas paredes de tijolo' },
	{ arquivo: '21-luz-ambiente-quente.jpg', categorias: ['luz'], alt: 'Salão com iluminação quente de ambiente' },
	{ arquivo: '22-som-palco-banda.jpg', categorias: ['som', 'luz'], alt: 'Palco com caixas de som, moving heads e painel de LED' },
	{ arquivo: '23-som-banda-led.jpg', categorias: ['som', 'led'], alt: 'Banda tocando com painel de LED ao fundo' },
	{ arquivo: '24-som-mesa-operacao.jpg', categorias: ['som'], alt: 'Mesa de operação técnica durante a apresentação' },
	{ arquivo: '25-som-mesa-digital.jpg', categorias: ['som'], alt: 'Mesa de som digital e notebook na operação' },
	{ arquivo: '26-som-palco-bateria.jpg', categorias: ['som', 'led'], alt: 'Palco com bateria, painel de LED e iluminação' },
	{ arquivo: '27-estrutura-trelica-lago.jpg', categorias: ['estrutura', 'som'], alt: 'Estrutura de treliça com caixas de som à beira do lago' },
	{ arquivo: '28-estrutura-palco-trelica.jpg', categorias: ['estrutura', 'led'], alt: 'Palco em treliça com painel de LED e caixas de som' },
	{ arquivo: '29-estrutura-trelica-noite.jpg', categorias: ['estrutura', 'led', 'luz'], alt: 'Palco noturno em treliça com painéis de LED' },
	{ arquivo: '30-estrutura-piscina.jpg', categorias: ['estrutura', 'led', 'luz'], alt: 'Estrutura de treliça com telões e luzes à beira da piscina' },
	{ arquivo: '31-estrutura-montagem-teste.jpg', categorias: ['estrutura', 'led'], alt: 'Pórtico de treliça com painel de LED em teste' },
	{ arquivo: '32-estrutura-portico-externo.jpg', categorias: ['estrutura', 'led'], alt: 'Pórtico de treliça externo com painel de LED' },
	{ arquivo: '33-tvs-pedestais.jpg', categorias: ['tvs'], alt: 'TVs em pedestais em evento corporativo' },
	{ arquivo: '34-tvs-palestra.jpg', categorias: ['tvs'], alt: 'Palestrante ao lado de TV em pedestal' },
	{ arquivo: '35-tvs-boas-vindas.jpg', categorias: ['tvs'], alt: 'TV em pedestal com conteúdo de boas-vindas' },
	{ arquivo: '36-tvs-projetor.jpg', categorias: ['tvs'], alt: 'Projeção em salão de eventos' },
	{ arquivo: '37-tvs-estudio.jpg', categorias: ['tvs', 'led'], alt: 'Cenário de entrevista com tela ao fundo' },
]

export const fotosGaleria = lista.map((foto) => {
	const modulo = arquivos[`../assets/portfolio/galeria/${foto.arquivo}`]
	if (!modulo) throw new Error(`Foto da galeria não encontrada: ${foto.arquivo}`)
	return { ...foto, imagem: modulo.default }
})

/** Busca uma foto pelo começo do nome do arquivo (ex.: '17' ou '17-luz'). */
export const fotoGaleria = (prefixo: string) => {
	const foto = fotosGaleria.find((item) => item.arquivo.startsWith(prefixo))
	if (!foto) throw new Error(`Foto da galeria não encontrada: ${prefixo}`)
	return foto
}
