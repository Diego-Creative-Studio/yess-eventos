# Reteste PageSpeed após publicação — 15/10/2026

Domínio: https://yessproducoes.com.br/. Execução aproximadamente 17h02–17h06 (Brasília).

## Resultado

**Melhora confirmada de estabilidade visual (CLS), mas não uma melhora geral do desempenho mobile.** TVs desktop e Contato tiveram ganhos importantes. O mobile de TVs e do equipamento de controle regrediu, e o LCP do Portfólio ficou muito variável. Também foi identificada uma regressão de acessibilidade introduzida pelo ajuste de SplitText.

Foram realizadas **42 medições públicas: 7 URLs × 2 dispositivos × 3 rodadas**. Os números novos nas tabelas são medianas por métrica, calculadas separadamente. O baseline anterior tinha uma medição por dispositivo: a comparação é indicativa, não um experimento A/B controlado. Todas as notas são de laboratório, não dados de usuários reais nem confirmação de aprovação das Core Web Vitals.

Confirmado no HTML publicado: home com `data-poster`, serviços com pôster WebP. Nenhum arquivo de implementação foi alterado durante este reteste.

## Notas de desempenho

| Página | Mobile antes → mediana nova | Desktop antes → mediana nova |
| --- | ---: | ---: |
| Home | 74 → 72 | 100 → 98 |
| TVs e monitores | 84 → 71 | 69 → 99 |
| Contato | 63 → 70 | 99 → 100 |
| Portfólio | 80 → 74 | 68 → 81 |
| Audiovisual — Zona Sul | 87 → 93 | 100 → 100 |
| LED — São Bernardo do Campo | 84 → 91 | 100 → 99 |
| Equipamento — painel de LED P2 | 96 → 72 | 98 → 95 |

## Métricas mobile

| Página | LCP antes → mediana nova | CLS antes → mediana nova |
| --- | ---: | ---: |
| Home | 6,2 s → 5,7 s | 0,003 → 0 |
| TVs e monitores | 2,9 s → 6,2 s | 0,024 → 0 |
| Contato | 20,0 s → 5,9 s | 0,021 → 0 |
| Portfólio | 3,2 s → 17,7 s | 0,224 → 0 |
| Audiovisual — Zona Sul | 2,2 s → 3,1 s | 0,227 → 0,001 |
| LED — São Bernardo do Campo | 2,6 s → 3,3 s | 0,230 → 0,014 |
| Equipamento — painel de LED P2 | 2,4 s → 5,8 s | 0,041 → 0,001 |

No desktop, TVs passou de **6,5 s para 0,7 s de LCP**. Portfólio passou de **4,1 s para 3,4 s**, com CLS de **0,201 para zero**. As medianas de CLS desktop foram zero nas sete URLs.

### Variação entre as três rodadas

- Home mobile: notas 73 / 72 / 70; LCP 5,7 / 5,7 / 5,7 s.
- TVs mobile: 71 / 71 / 70; LCP 6,2 / 6,2 / 6,4 s. Regressão consistente nesta rodada.
- Contato mobile: 69 / 70 / 94; LCP 6,1 / 5,9 / 2,8 s. Melhorou, mas o melhor resultado isolado não representa a mediana.
- Portfólio mobile: 73 / 74 / 98; LCP 17,7 / 17,7 / 2,3 s. Não considerar resolvido com base na nota 98 isolada.
- Zona Sul mobile: 74 / 93 / 96; LCP 5,7 / 3,1 / 2,4 s.
- São Bernardo mobile: 91 / 95 / 71; LCP 3,3 / 2,6 / 5,7 s. No desktop, uma rodada teve TBT de 550 ms e nota 75; a mediana ficou 99.
- Equipamento P2 mobile: 75 / 72 / 64; LCP 5,8 s nas três rodadas. Regressão consistente nesta rodada.

## Achados prioritários

### 1. Corrigir a regressão ARIA do SplitText

O PageSpeed identifica `aria-label` em `strong[data-motion-title-part]` e `span[data-motion-title-part]`. Esses elementos não aceitam essa nomeação na semântica atual. O SplitText acrescentou os atributos automaticamente depois de passarmos a dividir os dois blocos do título separadamente.

Acessibilidade caiu de 100 para 96 em TVs, Contato e equipamento P2; de 96 para 92 nas duas landings. Home permaneceu 100 e Portfólio 96. Corrigir a estratégia de nomeação e ocultação das linhas sem duplicar ou remover o título da árvore acessível. Não adicionar papéis ARIA artificiais apenas para silenciar a auditoria.

### 2. Investigar LCP mobile, antes de seguir só com contraste

- TVs: download do pôster caiu para **173,8 KiB**, mas ele permanece em resolução única de 1.280 px; a auditoria estima **152,3 KiB** de economia no mobile. Revisar responsividade e prioridade, evitando que o pôster nativo do vídeo concorra com a foto visível. O LCP registrado é o `video` com pôster.
- Contato: pôster de **66,8 KiB**, economia estimada de 32,2 KiB. O LCP também foi atribuído ao vídeo com pôster na primeira rodada.
- Equipamento P2: LCP atribuído à imagem da hero; a auditoria acusa falta de `fetchpriority="high"`. Como esse modelo não usa o pôster de vídeo alterado, não atribuir toda a regressão mobile à conversão WebP.
- Home: o LCP agora é a foto estática, não o pôster nativo do vídeo; ficou em 5,7 s. A prioridade alta já está aplicada. Investigar renderização e trabalho de scripts, não simplesmente acrescentar outro preload.
- Portfólio: o detalhamento da primeira rodada identifica o título `Cada evento, uma entrega` como LCP. Investigar a abertura com contador/cortina, fontes e o momento em que o título é exibido, comparando primeira visita e sessão com abertura já vista. Os subtempos do insight não explicam diretamente os 17,7 s simulados; uma causa única ainda não foi comprovada.

Os relatórios continuam apontando cerca de **145–146 KiB de JavaScript não utilizado**. Isso não comprova que o GSAP seja o responsável nem autoriza remover GTM/Cloudflare. A atribuição e a revisão das tags precisam continuar com o responsável pelo rastreamento.

### 3. Pendências anteriores

Contraste em Portfólio, Sobre e chip local; confiabilidade do vídeo de Som e iluminação; OG/favicon e checklist funcional de entrega. Som e Sobre não foram reavaliados nesta rodada. SEO e boas práticas foram 100 nas 42 medições, sem significar indexação ou acessibilidade integral garantidas.

## Correções locais após este reteste

Implementadas depois das medições acima; não representam novas notas do PageSpeed:

- SplitText usa `aria: 'none'` apenas nos blocos `strong/span` da hero. As linhas permanecem como texto real do `h1`, sem nomeação ARIA proibida ou cópia duplicada. Verificada a árvore acessível em TVs, Contato, equipamento P2 e Zona Sul, incluindo redimensionamento.
- Vídeos de serviço ficam invisíveis e sem pôster nativo até iniciar a reprodução. A foto visível recebe `fetchpriority="high"` e variantes responsivas. No desktop, o cálculo de `sizes` considera também a altura e o recorte `object-cover` da coluna; no mobile, mantém a referência à largura da tela. MP4/WebM continuam sem requisição antes da interação.
- No teste mobile de 390 px e DPR 1,75, a foto inicial de TVs foi de 178.006 para 91.656 bytes. Valores variam conforme viewport, DPR e recorte; não são um novo LCP medido em produção.
- Portfólio entra direto no mosaico no mobile. No desktop, a cortina foi encurtada e tem um limite de 1,2 s iniciado pelo script inline, inclusive se o bundle atrasar ou falhar. `?intro` mantém a possibilidade de rever a abertura. Zoom e percurso do mosaico foram preservados.

A validação local incluiu reprodução/som/pausa nas cinco heros de vídeo, layout do mosaico em mobile/tablet/desktop, alternativas sem JavaScript e com movimento reduzido, e teste de fontes/módulos atrasados. **Publicar e repetir o PageSpeed é necessário para confirmar se as regressões de LCP mobile foram resolvidas.** O LCP da home e os scripts de terceiros continuam exigindo verificação; não foram removidas tags de medição.

## Evidências

Resultados completos, horários e links de cada rodada:

- [Rodada 1](../work/pagespeed-pos-melhorias-2026-10-15/resultados.json)
- [Rodada 2](../work/pagespeed-pos-melhorias-2026-10-15/rodada-2/resultados.json)
- [Rodada 3](../work/pagespeed-pos-melhorias-2026-10-15/rodada-3/resultados.json)
- [Detalhes de LCP, imagens, CLS e ARIA](../work/pagespeed-pos-melhorias-2026-10-15/detalhes.json)
- [Baseline anterior](relatorio-pagespeed-2026-10-15.md)

Relatórios oficiais da primeira rodada, com seletor mobile/desktop:

- [Home](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br/63sr7y6gpc?form_factor=mobile)
- [TVs](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-tvs-e-monitores/m96otv763o?form_factor=mobile)
- [Contato](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-contato/jhfcjti8hp?form_factor=mobile)
- [Portfólio](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-portfolio/gvmdks7l4k?form_factor=mobile)
- [Zona Sul](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-audiovisual-para-eventos-na-zona-sul/ribuuajobc?form_factor=mobile)
- [São Bernardo](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-painel-de-led-para-eventos-em-sao-bernardo-do-campo/t7hhfya9zz?form_factor=mobile)
- [Equipamento P2](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-equipamentos-painel-de-led-p2/bvva5nfzia?form_factor=mobile)
