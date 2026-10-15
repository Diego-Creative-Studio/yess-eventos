# Auditoria PageSpeed Insights — YESS

**Data:** 15/10/2026, aproximadamente 01h40–01h49 (Brasília).  
**Ambiente:** domínio publicado, https://yessproducoes.com.br/.  
**Escopo aprovado:** páginas principais, equipamentos e amostra de modelos locais.  
**Execução:** 28 URLs distintas × 2 dispositivos = **56 medições**.

## 1. Resumo executivo

O site não está lento por igual. O desktop está majoritariamente bom; os equipamentos também. As maiores oportunidades estão em imagens de pôster das heros, LCP mobile e estabilidade de layout do Portfólio e de algumas landings.

| Recorte | Resultado desta rodada |
| --- | --- |
| Desktop | 26 das 28 URLs com nota de desempenho igual ou superior a 90. |
| Mobile | 13 das 28 URLs com nota de desempenho igual ou superior a 90. |
| Equipamentos | 94–98 no mobile; 95–100 no desktop. |
| Landings da amostra | 69–96 no mobile; 99–100 no desktop. |
| SEO automatizado | 100 nas 56 medições; não significa indexação ou posicionamento garantidos. |
| Acessibilidade automatizada | 96 ou 100; há falhas de contraste em páginas específicas. |
| Boas práticas | 100, exceto Som e iluminação, com 96 por falhas de conexão dos vídeos durante a auditoria. |
| Dados reais de usuários | O PageSpeed exibiu “Nenhum dado” nesta rodada. |

**Ordem recomendada:** pôsteres pesados de TVs/Contato → CLS do Portfólio e landings → LCP da home e serviços → tags de medição → contraste e entrega de mídia.

Nenhuma implementação ou configuração de produção foi alterada para produzir esta análise.

## 2. Método e limites

- A API pública do PageSpeed retornou HTTP 429. Os testes foram executados pela interface oficial de **pagespeed.web.dev**, com relatórios públicos individuais nas tabelas.
- Versão informada: Lighthouse 13.5.0 / HeadlessChromium 153. Mobile: Moto G Power emulado, rede 4G lenta; desktop: configuração emulada do PageSpeed.
- Uma execução por URL/dispositivo. Os números são uma fotografia do ambiente medido, **não uma mediana de três execuções**. Cache de CDN, rede e execução podem produzir variação; repetir após as correções.
- Os relatórios avaliam principalmente o carregamento inicial, não todas as interações, rolagens, formulários ou sessões longas.
- Sem dados de campo suficientes exibidos, não é possível afirmar aprovação ou reprovação das Core Web Vitals reais do domínio. TBT é uma métrica de laboratório e não substitui INP de usuários reais.
- Como referência para diagnóstico: LCP bom até 2,5 s e CLS bom até 0,1. A avaliação de campo considera a distribuição dos acessos, não um teste isolado. [LCP — Google](https://web.dev/articles/lcp), [CLS — Google](https://web.dev/articles/cls).
- A nota geral não substitui as métricas: uma URL com 94 pode continuar com LCP acima de 2,5 s.
- O escopo não cobre individualmente as aproximadamente 1.694 URLs do sitemap. A amostra não autoriza atribuir a mesma nota às páginas não medidas.

### Por que testar mais de uma página do mesmo modelo?

Equipamentos e landings compartilham estrutura, mas não só palavras-chave. A imagem, o comprimento do título, a composição visível, a cobertura e o volume de conteúdo variam. Na própria amostra, o mesmo modelo local ficou entre 69 e 96 no mobile; LED/Moema teve CLS 0.017, enquanto LED/São Bernardo teve 0.230.

Para continuar o trabalho, não é preciso medir todos os equipamentos novamente. Usar uma página representativa do modelo e manter casos extremos: maior imagem, título longo e variação de composição. Corrigir o componente compartilhado tende a beneficiar várias URLs, mas deve ser confirmado em amostras.

## 3. Resultados: páginas principais

As notas são links para os relatórios oficiais. LCP está em segundos; CLS não tem unidade.

| Página publicada | Nota mobile | Nota desktop | LCP mobile | LCP desktop | CLS mobile | CLS desktop |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [Home](https://yessproducoes.com.br/) | [74](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br/fauxu2ckal?form_factor=mobile) | [100](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br/fauxu2ckal?form_factor=desktop) | 6,2 s | 0,7 s | 0.003 | 0 |
| [Estrutura audiovisual](https://yessproducoes.com.br/estrutura-audiovisual-para-eventos/) | [74](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-estrutura-audiovisual-para-eventos/ykqyaapiu7?form_factor=mobile) | [98](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-estrutura-audiovisual-para-eventos/ykqyaapiu7?form_factor=desktop) | 7,4 s | 1,1 s | 0.039 | 0.002 |
| [Painéis de LED P2/P3](https://yessproducoes.com.br/paineis-de-led-p2-e-p3/) | [89](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-paineis-de-led-p2-e-p3/cjxhnvdiw5?form_factor=mobile) | [100](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-paineis-de-led-p2-e-p3/cjxhnvdiw5?form_factor=desktop) | 3,4 s | 0,7 s | 0 | 0 |
| [Som e iluminação](https://yessproducoes.com.br/som-e-iluminacao/) | [72](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-som-e-iluminacao/a77zd2pld7?form_factor=mobile) | [98](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-som-e-iluminacao/a77zd2pld7?form_factor=desktop) | 6,4 s | 1,1 s | 0.04 | 0.009 |
| [TVs e monitores](https://yessproducoes.com.br/tvs-e-monitores/) | [84](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-tvs-e-monitores/k3uj2yjrac?form_factor=mobile) | [69](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-tvs-e-monitores/k3uj2yjrac?form_factor=desktop) | 2,9 s | 6,5 s | 0.024 | 0.003 |
| [Soluções corporativas](https://yessproducoes.com.br/solucoes-corporativas/) | [92](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-solucoes-corporativas/pgspktlxly?form_factor=mobile) | [100](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-solucoes-corporativas/pgspktlxly?form_factor=desktop) | 3,1 s | 0,7 s | 0.047 | 0.001 |
| [Estruturas e cenografia](https://yessproducoes.com.br/estruturas-e-cenografia-para-eventos/) | [75](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-estruturas-e-cenografia-para-eventos/mqhqg3ocej?form_factor=mobile) | [100](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-estruturas-e-cenografia-para-eventos/mqhqg3ocej?form_factor=desktop) | 5,7 s | 0,6 s | 0.042 | 0.001 |
| [Projetos técnicos](https://yessproducoes.com.br/projetos-tecnicos-para-eventos/) | [73](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-projetos-tecnicos-para-eventos/akcdsnb0ec?form_factor=mobile) | [99](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-projetos-tecnicos-para-eventos/akcdsnb0ec?form_factor=desktop) | 5,9 s | 0,9 s | 0.039 | 0.001 |
| [Portfólio](https://yessproducoes.com.br/portfolio/) | [80](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-portfolio/df76cv7bc8?form_factor=mobile) | [68](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-portfolio/df76cv7bc8?form_factor=desktop) | 3,2 s | 4,1 s | 0.224 | 0.201 |
| [Sobre](https://yessproducoes.com.br/sobre/) | [97](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-sobre/0279453rgl?form_factor=mobile) | [100](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-sobre/0279453rgl?form_factor=desktop) | 2,3 s | 0,5 s | 0.027 | 0.001 |
| [Contato](https://yessproducoes.com.br/contato/) | [63](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-contato/7kwv2nctbp?form_factor=mobile) | [99](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-contato/7kwv2nctbp?form_factor=desktop) | 20,0 s | 0,8 s | 0.021 | 0 |

## 4. Resultados: equipamentos

Os sete já haviam sido testados quando o escopo foi reduzido pelo usuário. Foram preservados os resultados, sem novas repetições.

| Página publicada | Nota mobile | Nota desktop | LCP mobile | LCP desktop | CLS mobile | CLS desktop |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [Painel P2](https://yessproducoes.com.br/equipamentos/painel-de-led-p2/) | [96](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-equipamentos-painel-de-led-p2/z8ukacrudo?form_factor=mobile) | [98](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-equipamentos-painel-de-led-p2/z8ukacrudo?form_factor=desktop) | 2,4 s | 1,1 s | 0.041 | 0.001 |
| [Painel P3](https://yessproducoes.com.br/equipamentos/painel-de-led-p3/) | [94](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-equipamentos-painel-de-led-p3/t4umq2o3y4?form_factor=mobile) | [100](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-equipamentos-painel-de-led-p3/t4umq2o3y4?form_factor=desktop) | 2,7 s | 0,6 s | 0.041 | 0.001 |
| [Microfones](https://yessproducoes.com.br/equipamentos/microfones/) | [98](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-equipamentos-microfones/jtsk7dthqu?form_factor=mobile) | [100](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-equipamentos-microfones/jtsk7dthqu?form_factor=desktop) | 2,3 s | 0,6 s | 0.027 | 0.001 |
| [Caixas de som](https://yessproducoes.com.br/equipamentos/caixas-de-som/) | [95](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-equipamentos-caixas-de-som/0m4qlqctlu?form_factor=mobile) | [98](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-equipamentos-caixas-de-som/0m4qlqctlu?form_factor=desktop) | 2,6 s | 0,8 s | 0.018 | 0.001 |
| [Moving heads](https://yessproducoes.com.br/equipamentos/moving-heads/) | [94](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-equipamentos-moving-heads/jxmj6j26hx?form_factor=mobile) | [99](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-equipamentos-moving-heads/jxmj6j26hx?form_factor=desktop) | 2,8 s | 0,9 s | 0.03 | 0.001 |
| [Projetores Epson](https://yessproducoes.com.br/equipamentos/projetores-epson/) | [95](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-equipamentos-projetores-epson/kf85npspqz?form_factor=mobile) | [100](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-equipamentos-projetores-epson/kf85npspqz?form_factor=desktop) | 2,6 s | 0,7 s | 0.018 | 0.001 |
| [TVs](https://yessproducoes.com.br/equipamentos/tvs/) | [96](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-equipamentos-tvs/5ekbqrrta0?form_factor=mobile) | [95](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-equipamentos-tvs/5ekbqrrta0?form_factor=desktop) | 2,5 s | 0,9 s | 0.018 | 0.001 |

## 5. Resultados: amostra local

A amostra cobre nove famílias de serviço, com dois exemplos de LED para comparar bairro e nome longo de cidade. Todos usam a rota dinâmica, sem representar uma auditoria de cada URL gerada.

| Página publicada | Nota mobile | Nota desktop | LCP mobile | LCP desktop | CLS mobile | CLS desktop |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [Audiovisual — Zona Sul](https://yessproducoes.com.br/audiovisual-para-eventos-na-zona-sul/) | [87](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-audiovisual-para-eventos-na-zona-sul/8lbr5f4ts3?form_factor=mobile) | [100](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-audiovisual-para-eventos-na-zona-sul/8lbr5f4ts3?form_factor=desktop) | 2,2 s | 0,6 s | 0.227 | 0 |
| [Estrutura/cenografia — São Paulo](https://yessproducoes.com.br/estrutura-e-cenografia-para-eventos-em-sao-paulo/) | [76](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-estrutura-e-cenografia-para-eventos-em-sao-paulo/ew9am8o01s?form_factor=mobile) | [100](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-estrutura-e-cenografia-para-eventos-em-sao-paulo/ew9am8o01s?form_factor=desktop) | 5,7 s | 0,6 s | 0 | 0 |
| [Iluminação — São Paulo](https://yessproducoes.com.br/iluminacao-para-eventos-em-sao-paulo/) | [76](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-iluminacao-para-eventos-em-sao-paulo/3sgaseej7h?form_factor=mobile) | [100](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-iluminacao-para-eventos-em-sao-paulo/3sgaseej7h?form_factor=desktop) | 5,7 s | 0,7 s | 0.017 | 0 |
| [LED — Moema](https://yessproducoes.com.br/painel-de-led-para-eventos-em-moema/) | [90](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-painel-de-led-para-eventos-em-moema/mhz7fwy51d?form_factor=mobile) | [100](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-painel-de-led-para-eventos-em-moema/mhz7fwy51d?form_factor=desktop) | 3,4 s | 0,7 s | 0.017 | 0 |
| [LED — São Bernardo do Campo](https://yessproducoes.com.br/painel-de-led-para-eventos-em-sao-bernardo-do-campo/) | [84](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-painel-de-led-para-eventos-em-sao-bernardo-do-campo/4148fnuj4l?form_factor=mobile) | [100](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-painel-de-led-para-eventos-em-sao-bernardo-do-campo/4148fnuj4l?form_factor=desktop) | 2,6 s | 0,6 s | 0.23 | 0.001 |
| [Projeto técnico — São Paulo](https://yessproducoes.com.br/projeto-tecnico-para-eventos-em-sao-paulo/) | [95](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-projeto-tecnico-para-eventos-em-sao-paulo/wvxe02lxtu?form_factor=mobile) | [99](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-projeto-tecnico-para-eventos-em-sao-paulo/wvxe02lxtu?form_factor=desktop) | 2,6 s | 0,6 s | 0.017 | 0 |
| [Som/luz — Guarulhos](https://yessproducoes.com.br/som-e-iluminacao-para-eventos-em-guarulhos/) | [96](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-som-e-iluminacao-para-eventos-em-guarulhos/nht2h5j2as?form_factor=mobile) | [100](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-som-e-iluminacao-para-eventos-em-guarulhos/nht2h5j2as?form_factor=desktop) | 2,5 s | 0,7 s | 0.016 | 0 |
| [Sonoplastia — Guarulhos](https://yessproducoes.com.br/sonoplastia-para-congressos-em-guarulhos/) | [74](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-sonoplastia-para-congressos-em-guarulhos/nuagfc75f4?form_factor=mobile) | [100](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-sonoplastia-para-congressos-em-guarulhos/nuagfc75f4?form_factor=desktop) | 5,8 s | 0,6 s | 0.018 | 0 |
| [Sonorização — Moema](https://yessproducoes.com.br/sonorizacao-para-eventos-em-moema/) | [96](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-sonorizacao-para-eventos-em-moema/fhp6vsydke?form_factor=mobile) | [100](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-sonorizacao-para-eventos-em-moema/fhp6vsydke?form_factor=desktop) | 2,6 s | 0,6 s | 0.017 | 0 |
| [TVs/projetores — São Paulo](https://yessproducoes.com.br/tvs-e-projetores-para-eventos-em-sao-paulo/) | [69](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-tvs-e-projetores-para-eventos-em-sao-paulo/25mgrnumrg?form_factor=mobile) | [100](https://pagespeed.web.dev/analysis/https-yessproducoes-com-br-tvs-e-projetores-para-eventos-em-sao-paulo/25mgrnumrg?form_factor=desktop) | 6,0 s | 0,8 s | 0.017 | 0 |

## 6. Achados e prioridades

### P0 — evitar pôster original de vários megabytes

**Evidência medida:**

- TVs e monitores: desktop 69, LCP 6,5 s. O PageSpeed identifica o elemento de vídeo/pôster como LCP e aponta o JPG original `tv-apresentacao.CuGqLLww.jpg` com aproximadamente **6.345 KiB**, além da imagem WebP renderizada separadamente.
- Contato: mobile 63, LCP 20,0 s. O JPG original de pôster `poster-evento-iluminacao.DGwslJz2.jpg` tem aproximadamente **2.874 KiB**. O LCP final identificado nessa medição é a imagem otimizada da hero; o pôster original é uma transferência adicional grande, não o mesmo elemento final.
- No código local, `SectionHeroServico.astro` usa `poster={imagem.src}`. O componente `Image` pode otimizar a foto visível, mas isso **não otimiza automaticamente** o atributo `poster` do vídeo.

**Ação recomendada:** gerar um pôster WebP/AVIF dimensionado com `getImage`, reaproveitar o recurso adequado quando possível e evitar a transferência duplicada de original + otimizado. Ajustar `sizes` para a largura efetiva da imagem, não tratar toda imagem de coluna como `100vw`.

**Cuidado:** não atribuir os 20 s de Contato exclusivamente ao JPG sem um teste comparativo. O relatório mostra uma oportunidade concreta; o efeito real deve ser medido após corrigir.

**Arquivos:** `src/components/sections/servicos/SectionHeroServico.astro`, `src/pages/tvs-e-monitores.astro`, `src/pages/contato.astro`.

### P0 — estabilizar o Portfólio sem desmontar seu design

**Evidência:** mobile 80 / CLS 0.224; desktop 68 / CLS 0.201. A seção `[data-story]` responde pela maior parte do deslocamento registrado: aproximadamente 0.222 no mobile e 0.201 no desktop. O LCP final é o título do mosaico.

**Inspeção do código:** o mosaico muda de geometria quando recebe `data-mosaic-ready`, passa a ocupar `100svh` e configura pin/spacer via ScrollTrigger. A abertura do Portfólio também mantém uma sequência animada antes de liberar a navegação.

**Hipótese a validar em trace:** a inicialização tardia e a reserva de espaço dos blocos animados estão deslocando a seção seguinte. O fato de uma seção aparecer no diagnóstico de CLS não prova, sozinho, que ela é a causa inicial.

**Ação:** reservar a geometria correta antes do primeiro paint, conferir altura/pin spacing e o momento do refresh. Evitar alterar layout depois que o conteúdo já foi apresentado. Avaliar a duração da abertura somente com aprovação, sem assumir que é necessário remover as animações.

**Arquivos:** `SectionMosaicoZoom.astro`, `SectionHistoriaEvento.astro`, `PortfolioIntro.astro`, em seus diretórios atuais.

### P1 — landings têm casos de CLS alto mesmo usando o mesmo modelo

- Audiovisual/Zona Sul: mobile 87, CLS **0.227**; a hero responde por aproximadamente 0.223.
- LED/São Bernardo: mobile 84, CLS **0.230**; a hero responde por aproximadamente 0.227.
- LED/Moema: mobile 90, CLS **0.017**.

Isso demonstra por que a troca de localidade não garante o mesmo resultado visual/perceptivo. Títulos maiores podem mudar linhas e alturas durante fontes/SplitText.

**Ação:** registrar o carregamento dessas duas heros, comparar antes/depois da fonte e do SplitText e garantir alturas e quebras estáveis. O gatilho exato ainda precisa ser confirmado no trace; não tratar toda animação como culpada por definição.

**Arquivos:** `src/pages/[landing].astro`, `SectionHeroServico.astro`, `src/scripts/premium-animations.ts`.

### P1 — LCP mobile da home e de serviços

- Home: 74 / **6,2 s**.
- Estrutura audiovisual: 74 / **7,4 s**.
- Som e iluminação: 72 / **6,4 s**.
- Estruturas/cenografia: 75 / **5,7 s**.
- Projetos técnicos: 73 / **5,9 s**.
- Landings de cenografia, iluminação, sonoplastia e TVs também apresentaram LCP entre **5,7 e 6,0 s** na amostra.

**Home:** o PageSpeed selecionou o elemento de vídeo/pôster como LCP, mesmo no teste mobile. O pôster é WebP de aproximadamente 65 KiB e a foto principal é outro arquivo de aproximadamente 30 KiB. Aqui, não há um JPG de 6 MB como em TVs; o diagnóstico não deve ser o mesmo para todos os casos.

**Ação:** garantir que, no mobile, a foto seja o único conteúdo inicial de mídia efetivamente renderizado; revisar o pôster do vídeo inativo, a descoberta/prioridade do recurso LCP e a entrada dos textos. Preload/alta prioridade devem se aplicar ao recurso realmente crítico, não indiscriminadamente a mídia oculta. Nas demais heros, conferir o elemento LCP específico e o peso/timing de imagens e animações.

Não resolver isso cortando duração de vídeos ou removendo os textos e a identidade visual. Primeiro ajustar entrega e prioridade dos recursos.

### P1 — revisar medição e scripts sem apagar o GTM

Na home mobile, a auditoria de JavaScript não usado identifica dois recursos em `/metrics/`, com aproximadamente **313 KiB de transferência somada** e **146 KiB de economia estimada**. O mesmo padrão reaparece em outras URLs.

O relatório lista GTM e Cloudflare entre terceiros, mas parte dos scripts é servida pelo próprio domínio em `/metrics/`. **Não foi estabelecida a função exata de cada arquivo nem comprovada duplicação de instalação.** Não atribuir automaticamente essa economia inteira ao GSAP.

**Ação com o sênior:** conferir acionamentos, tags necessárias, instalação única, consentimento e carregamento das integrações. Não remover GTM/analytics nem alterar regras da Cloudflare sem validar rastreamento e conversões.

### P1 — conexão dos vídeos de Som e iluminação

As duas variantes do relatório de Som e iluminação ficaram com 96 em boas práticas. A auditoria registrou `net::ERR_CONNECTION_FAILED` para os arquivos MP4 e WebM de som/luz.

Uma verificação HEAD posterior retornou **HTTP 200** com tipos `video/mp4` e `video/webm`. Portanto, **não é uma confirmação de URL permanentemente quebrada**. Verificar reprodução real, Range/206, origem/CDN e confiabilidade de transferência. HEAD 200 não comprova o download integral nem a reprodução.

### P2 — contraste e ajustes visuais específicos

- Portfólio e Sobre: acessibilidade 96. O relatório aponta contraste insuficiente nos filtros/contador do Portfólio e na faixa azul de etapas em Sobre.
- Landings da amostra: acessibilidade 96; o contraste da localidade atual em `ServiceAreas` foi identificado explicitamente em Zona Sul e São Bernardo.
- Revisar as recomendações adicionais de texto alternativo e finalidade de links nos relatórios; distinguir itens informativos/manuais de falhas pontuadas.

**Ação:** escurecer o fundo azul ou adequar texto/contraste e opacidade do contador, sem trocar a identidade do site. Validar foco, teclado e leitura manualmente: nota 100 automatizada não comprova acessibilidade completa.

### P2 — rede, tamanhos responsivos e cache

- Corrigir imagens superdimensionadas e `sizes` de componentes de coluna.
- No desktop da home, o relatório também aponta payload de aproximadamente **12.881 KiB**, relacionado ao conjunto de recursos carregados. A nota 100 não significa consumo pequeno de dados.
- O aviso de cache da home mobile é pequeno, aproximadamente 4 KiB de economia estimada em script de Cloudflare; não é a primeira prioridade frente aos pôsteres e ao CLS.
- Os avisos sobre CSP/HSTS/COOP devem ser analisados à parte. Não enfraquecer headers de segurança apenas para silenciar uma auditoria ou acelerar carregamento.

## 7. Próxima rodada recomendada

1. Otimizar o pôster no componente de hero de serviços e validar especialmente TVs/Contato.
2. Estabilizar geometria inicial do Portfólio e das duas landings com CLS alto.
3. Revisar LCP da home no mobile e o carregamento inicial das heros mais lentas.
4. Conferir os recursos de medição com o sênior, sem prejudicar GTM e eventos de conversão.
5. Corrigir contraste e investigar as falhas intermitentes de vídeo.
6. Publicar e repetir três vezes os casos críticos, usando a mediana e preservando os links dos testes anteriores.
7. Validar uma página de equipamento e um pequeno conjunto de landings extremas; não é necessário testar novamente cada URL gerada.

**Critérios de aceite:** melhoria de LCP/CLS medidos, nenhum corte na duração dos vídeos, mobile sem autoplay, desktop com reprodução/pausa/replay/som funcionais, textos sem piscada/recorte, layout preservado e rastreamento de conversão funcionando.

## 8. Evidências e dados completos

- [Resultados estruturados: 56 medições](../work/pagespeed-2026-10-15/resultados.json).
- [Detalhes de LCP, imagens, CLS e scripts](../work/pagespeed-2026-10-15/detalhes.json).
- [Detalhes adicionais de contraste, CLS local e erros de vídeo](../work/pagespeed-2026-10-15/detalhes-extra.json).
- Textos dos relatórios por URL/dispositivo: `work/pagespeed-2026-10-15/*.txt`.
- Os links nas notas das tabelas abrem os relatórios oficiais exatos desta rodada, não uma nova análise automática.

Referências de método: [PageSpeed Insights](https://pagespeed.web.dev/), [API oficial](https://developers.google.com/speed/docs/insights/v5/get-started), [LCP](https://web.dev/articles/lcp), [CLS](https://web.dev/articles/cls).

## 9. Primeira rodada de melhorias — validada localmente

Implementada após a auditoria, sem alterar os resultados de referência acima:

- Heros de serviço com vídeo: pôster WebP de até 1.280 px, compartilhado entre a imagem visível e o vídeo. O navegador confirmou a mesma URL nos dois elementos, evitando o JPG original pesado e um download separado para cada camada.
- TVs: novo pôster de **178.006 bytes (174 KiB)**, contra aproximadamente 6.345 KiB do original registrado no PageSpeed.
- Contato: novo pôster de **68.364 bytes (67 KiB)**, contra aproximadamente 2.874 KiB do original registrado no PageSpeed.
- Vídeos das heros de serviço com `preload="none"`: nenhuma requisição MP4/WebM antes da interação nos testes locais.
- Home mobile: camada de vídeo já oculta no HTML inicial; o pôster nativo do vídeo só é atribuído quando necessário. Confirmado que o arquivo `hero-video-poster` não é solicitado antes do clique, mantendo a foto principal e sua animação de entrada.

Validação: build de produção concluído; Astro Check sem erros/avisos (dois hints preexistentes de imports não utilizados em Portfólio); reprodução, som e pausa testados em cinco heros de serviço, em desktop e mobile. Home testada em 320, 375 e 768 px, com reprodução manual no mobile, autoplay desktop e três ciclos de replay/pausa por dispositivo sem exposição da camada de vídeo após a pausa. Nenhum arquivo de vídeo foi alterado ou cortado.

**Ainda pendente:** publicar e medir novamente no PageSpeed. Não há nova nota de desempenho nem redução de LCP/CLS comprovada em produção nesta etapa. A investigação de CLS, contraste e scripts de medição permanece na lista acima.

