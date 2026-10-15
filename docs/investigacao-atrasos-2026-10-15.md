# Investigação dos atrasos mobile — 15/10/2026

## Resposta curta

Não é só o Portfólio. Ele tem um problema de transferência muito maior, identificado e corrigido localmente nesta etapa. Home, equipamento P2 e algumas landings também tiveram LCP de laboratório alto/variável; o custo compartilhado de medição foi confirmado, mas não foi removido nem se comprovou que ele explique sozinho todo o LCP.

## Evidência nova: LCP observado não é o LCP simulado

Foram extraídos os resultados JSON completos dos relatórios públicos já existentes, além de traces novos em Edge/Chromium com rede limitada a aproximadamente 1,6 Mbps, latência de 150 ms e CPU 4× mais lenta.

| Relatório público mobile | LCP observado pelo Lighthouse | LCP simulado/pontuado |
| --- | ---: | ---: |
| Portfólio — `eno47b7wse` | 1.294 ms | 22.077 ms |
| Home — `nmb0jicc5m` | 2.327 ms | 5.657 ms |
| Equipamento P2 — `x57t2ua8lx` | 2.313 ms | 5.800 ms |

O observado vem da coleta do Lighthouse; o simulado usa o modelo de rede/CPU configurado no relatório. Portanto, o número de 22 s não comprova 22 s de tela vazia. Isso também não autoriza ignorar a simulação ou substituir a nota por uma medição local melhor.

## Portfólio: pôster original de 3 MB abaixo da dobra

O `video[data-story-video]` da última etapa de bastidores usava `poster={etapa.imagem.src}`. Mesmo com `preload="none"`, o navegador baixava o JPG original `historia-04-festa...jpg` ao abrir a página. Essa opção adia os dados do vídeo, não o pôster.

- Original: 3.129.971 bytes de arquivo; aproximadamente 3.130.271 bytes na transferência do teste.
- Pôster WebP gerado: **109.608 bytes**, largura de até 1.280 px, qualidade 80. Redução de aproximadamente **96,5%** no arquivo.
- O arquivo de vídeo, sua duração, os quatro estágios e a lógica de reprodução não mudaram.

### Comparação controlada local

Mesmo HTML atual, navegador com cache vazio, mesma rede/CPU limitadas, sem os terceiros injetados no domínio público. Um servidor de teste serviu ora o JPG original, ora o WebP, por HTTP normal sujeito à limitação de rede. Não é Lighthouse nem novo resultado do PageSpeed.

| Métrica observada | JPG original | WebP otimizado |
| --- | ---: | ---: |
| Evento `load` completo | 19.702,5 ms | 4.720,5 ms |
| Transferência do pôster | 18.713,7 ms | 2.820 ms |
| LCP observado | 3.156 ms | 3.148 ms |

**Conclusão:** redução real e grande de transferência/carregamento completo, mas o LCP observado ficou praticamente igual. A redução do LCP simulado do Google ainda depende de publicar e repetir o teste. Não está comprovado que esse JPG explique sozinho todo o atraso simulado.

## Custo compartilhado: scripts de medição

Nos traces publicados de Portfólio, home e equipamento P2, os dois recursos `/metrics/` transferiram aproximadamente 130 KB + 191 KB. Eventos `EvaluateScript` atribuídos a eles somaram cerca de **450–492 ms** com a CPU 4× mais lenta, incluindo tarefas acima de 150 e 290 ms.

Foi observada também uma requisição para `googletagmanager.com/gtm.js`. Isso confirma presença de medição e custo nesses testes; não comprova duplicação de tags nem justifica excluí-las. Os tempos acima são avaliação desses scripts, não todo o custo de execução do site. Não atribuir automaticamente toda a variação de LCP ao GSAP ou ao GTM.

**Ação pendente com o responsável pelo rastreamento:** revisar tags, disparos, consentimento e carregamento; preservar conversões e a configuração de Cloudflare/GTM. Nenhuma tag foi removida ou reconfigurada.

## Fontes: melhoria compartilhada implementada

O Layout fazia preload de Jakarta `latin` e `latin-ext`, enquanto Inter era descoberta depois pelo CSS. Agora antecipa apenas `latin` de Jakarta e Inter. O subconjunto `latin-ext` permanece disponível nas regras `@font-face` para ser carregado caso algum caractere exija.

O navegador local confirmou dois arquivos de fonte no lugar dos três vistos nos relatórios anteriores, evitando aproximadamente 22 KB do preload desnecessário de Jakarta `latin-ext`. Famílias, pesos, tamanhos e textos não mudaram. Isso é uma otimização de carregamento; isoladamente não comprova correção do LCP da home ou das landings.

## Validação

- Build de 1.695 páginas concluído; Astro Check sem erros/avisos, com os dois hints preexistentes do Portfólio.
- Sem requisição do JPG original nem de MP4/WebM na abertura local do Portfólio.
- Reprodução da última etapa e pausa ao sair testadas em mobile e desktop.
- Quatro etapas e pôster mantidos sem JavaScript e com movimento reduzido.
- Mosaico conferido em 375, 768 e 1.366 px: alinhamento, zoom e ausência de overflow horizontal.
- Home: foto inicial e clique para vídeo em 320, 375 e 768 px; autoplay desktop preservado.

## Dados e próximo passo

- [Comparação controlada local](../work/lcp-investigation-2026-10-15/local-poster-ab.json)
- [Lighthouse bruto — Portfólio mobile](../work/lcp-investigation-2026-10-15/psi-mobile.json)
- [Lighthouse bruto — home mobile](../work/lcp-investigation-2026-10-15/psi-home-mobile.json)
- [Lighthouse bruto — equipamento P2 mobile](../work/lcp-investigation-2026-10-15/psi-equipment-mobile.json)
- Métricas dos traces públicos: `work/lcp-investigation-2026-10-15/*-normal-metrics.json`.
- Traces brutos grandes guardados em `C:/Users/diego/AppData/Local/Temp/yess-edge-qa/traces/`, fora do repositório para não inflar o push.

Publicar estas duas alterações e medir novamente Portfólio/home/equipamento P2, comparando LCP observado, simulado, bytes e CLS. Se a simulação continuar discrepante, investigar suas dependências de renderização e carregamento com os traces, em vez de aplicar nova mudança visual por tentativa.
