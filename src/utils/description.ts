// Monta a meta description dentro da faixa recomendada (150-160 caracteres).
//
// O trecho inicial varia muito de tamanho — "Grua em Santos" e "Retroescavadeira
// com Rompedor Hidráulico na Baixada Santista" não têm nada a ver — então a cauda
// é montada aqui em vez de escrita à mão em cada página.
//
// Cada item de `tail` é um slot com uma ou mais variações da mesma ideia. A
// função testa todas as combinações e fica com a mais longa que não estoure o
// limite, para toda página terminar perto do teto sem passar dele. Escolher slot
// a slot não serve: uma variação longa no começo rouba o espaço das seguintes.

const MAX = 160

export function buildDescription(lead: string, tail: (string | string[])[]): string {
	const slots = tail.map((slot) => (Array.isArray(slot) ? slot : [slot]).map((o) => o.trim()))

	// Todas as combinações possíveis da cauda — um slot pode ainda ser omitido
	// por inteiro (''), caso nenhuma das suas variações caiba.
	let candidates = ['']
	for (const options of slots) {
		candidates = candidates.flatMap((base) => [...options.map((o) => `${base} ${o}`), base])
	}

	return candidates
		.map((tailText) => `${lead.trim()}${tailText}`.trim())
		.filter((text) => text.length <= MAX)
		.reduce((best, text) => (text.length > best.length ? text : best), '')
}
