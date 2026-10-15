# PageSpeed após correção de ARIA/LCP — 15/10/2026

Domínio publicado: https://yessproducoes.com.br/. Testes aproximadamente 17h41–17h44, horário de Brasília.

## Método

42 medições públicas: 7 URLs × mobile/desktop × 3 rodadas. Comparação com as medianas das três rodadas do [reteste anterior](reteste-pagespeed-2026-10-15.md), não com a primeira auditoria da madrugada. Cada métrica tem sua própria mediana; não foi escolhido apenas o melhor teste. São resultados de laboratório, não dados reais de usuários nem prova causal de que toda diferença decorreu do último patch.

Confirmados no HTML publicado: vídeo de serviço com pôster adiado, imagem com prioridade alta e nova política da abertura do Portfólio. Nenhum código de implementação foi alterado neste reteste.

## Comparativo de desempenho

| Página | Mobile anterior → atual | Desktop anterior → atual | LCP mobile atual | CLS mobile atual |
| --- | ---: | ---: | ---: | ---: |
| Home | 72 → 75 | 98 → 100 | 5,7 s | 0 |
| TVs e monitores | 71 → 94 | 99 → 100 | 2,9 s | 0,023 |
| Contato | 70 → 95 | 100 → 100 | 2,6 s | 0,001 |
| Portfólio | 74 → 71 | 81 → 99 | 21,1 s | 0 |
| Audiovisual — Zona Sul | 93 → 95 | 100 → 98 | 2,7 s | 0,001 |
| LED — São Bernardo do Campo | 91 → 77 | 99 → 100 | 5,7 s | 0,014 |
| Equipamento — painel de LED P2 | 72 → 74 | 95 → 99 | 5,8 s | 0,001 |

CLS desktop: zero nas sete URLs, nas três rodadas. TVs mobile voltou a apresentar um deslocamento pequeno: 0 / 0,023 / 0,023. Portanto, não afirmar que todas as páginas mantiveram CLS exatamente zero, embora continuem abaixo de 0,1.

## Ganhos confirmados

- ARIA: a auditoria de atributos proibidos deixou de aparecer nos casos detalhados. Acessibilidade de TVs, Contato e equipamento P2 voltou a 100; landings voltaram a 96, preservando a pendência anterior de contraste. Home continuou 100 e Portfólio 96. Nota automatizada não comprova acessibilidade integral.
- TVs mobile: mediana de LCP caiu de 6,2 para 2,9 s. A imagem inicial substituiu o vídeo como elemento de LCP; recurso de 89,5 KiB na primeira rodada, contra 173,8 KiB no reteste anterior. Ainda há economia estimada de imagem.
- Contato mobile: três resultados iguais, nota 95 e LCP 2,6 s, contra medianas anteriores 70 e 5,9 s. O LCP passou a ser atribuído à foto, não ao vídeo.
- Portfólio desktop: mediana de LCP caiu de 3,4 para 0,7 s e a nota foi de 81 para 99. Uma rodada ainda teve nota 79 e LCP 3,8 s; o resultado não foi uniforme.
- SEO e boas práticas: 100 em todas as 42 medições, sem significar posicionamento ou indexação garantidos.

## O que não foi resolvido

### Portfólio mobile: prioridade principal

Notas 71 / 74 / 58; LCP 22,1 / 17,6 / 21,1 s. Mediana pior que a anterior (17,7 s), embora CLS permaneça zero. A mudança da abertura não resolveu o LCP mobile.

O relatório detalhado identifica o `h1` “Cada evento, uma entrega” como elemento de LCP. O insight da primeira rodada mostra atraso de renderização de 1.290 ms, que não explica diretamente os 22,1 s simulados. É necessário capturar um trace e comparar tempos observados/simulados, fontes, execução de scripts e inicialização de ScrollTrigger. Não atribuir a causa definitivamente à cortina: ela já é pulada automaticamente no mobile publicado.

### Home, equipamento P2 e São Bernardo: resultados mobile ainda variáveis

- Home: notas 74 / 96 / 75, LCP 5,7 / 2,4 / 5,7 s. Mediana de LCP não melhorou. Prioridade alta e foto inicial estão corretas; investigar renderização e trabalho de scripts.
- Equipamento P2: notas 91 / 74 / 71, LCP 3,3 / 5,8 / 5,8 s. A imagem agora tem prioridade alta; a mediana de LCP não mudou.
- São Bernardo: notas 77 / 77 / 96, LCP 5,7 / 5,7 / 2,6 s. A mediana piorou de 3,3 para 5,7 s. Não esconder a regressão escolhendo apenas a nota 96.
- TVs: mesmo com mediana boa, notas 63 / 94 / 96 e LCP 6,0 / 2,9 / 2,6 s. Primeira rodada teve TBT de 400 ms.

Os relatórios continuam apontando aproximadamente 145–146 KiB de JavaScript não utilizado. Isso exige atribuição por script e trace, não remoção automática de GSAP, GTM ou Cloudflare.

## Ordem recomendada

1. Diagnosticar o LCP mobile do Portfólio com trace; não aplicar outra alteração visual por tentativa.
2. Investigar o padrão de renderização tardia nas outras páginas mobile e o custo de terceiros com o responsável pelas tags.
3. Corrigir contraste, investigar a transferência do vídeo de Som e iluminação e finalizar OG/favicon/checklist funcional.

## Evidências

- [Rodada 1](../work/pagespeed-pos-correcao-lcp-2026-10-15/resultados.json)
- [Rodada 2](../work/pagespeed-pos-correcao-lcp-2026-10-15/rodada-2/resultados.json)
- [Rodada 3](../work/pagespeed-pos-correcao-lcp-2026-10-15/rodada-3/resultados.json)
- [Detalhamento de LCP, imagens, CLS e ARIA](../work/pagespeed-pos-correcao-lcp-2026-10-15/detalhes.json)

Relatórios oficiais da primeira rodada; os JSONs acima contêm os links das três:

- [Home](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br/nmb0jicc5m?form_factor=mobile)
- [TVs](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-tvs-e-monitores/2kgqfrb27e?form_factor=mobile)
- [Contato](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-contato/2kc5viy1xz?form_factor=mobile)
- [Portfólio](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-portfolio/eno47b7wse?form_factor=mobile)
- [Zona Sul](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-audiovisual-para-eventos-na-zona-sul/a137tulnhp?form_factor=mobile)
- [São Bernardo](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-painel-de-led-para-eventos-em-sao-bernardo-do-campo/y1tbhwn9o9?form_factor=mobile)
- [Equipamento P2](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-equipamentos-painel-de-led-p2/nez1ofksq9?form_factor=mobile)
