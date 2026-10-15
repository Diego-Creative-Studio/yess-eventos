# Checklist de entrega — YESS Audiovisual & Eventos

Atualizado em **15/10/2026**.

Este documento reúne os pontos das revisões anteriores, a conferência atual do código e as validações finais para entrega. **Não é uma nova auditoria completa do domínio publicado.** Nenhum formulário foi enviado e nenhuma configuração de produção foi alterada nesta revisão.

## Como usar

- `[x]`: informado como concluído ou implementado nesta conversa; não significa validação independente em produção.
- `[ ]`: corrigir, confirmar ou testar antes de encerrar.
- **P0:** bloqueia a entrega funcional ou pode comprometer contatos e domínio de indexação.
- **P1:** corrigir ou validar antes da entrega final.
- **P2:** melhoria que pode entrar no acompanhamento, sem impedir a entrega se alinhada com o cliente.

**Ordem sugerida:** domínio/canonical → contatos → formulário → links → textos → OG/favicon → teste publicado → documentação.

## 1. O que já foi encaminhado

### Configuração externa — informada por Diego

- [x] DNS configurado com apoio do sênior.
- [x] Cloudflare configurado.
- [x] Domínio do site no ar.
- [x] Google Tag Manager configurado.
- [x] Search Console configurado; acompanhamento de páginas iniciado.
- [x] Cliente já viu a versão publicada e deu retorno visual positivo.

Não é necessário refazer essa implantação do zero. Conferir apenas os resultados finais e registrar os acessos.

### Interface — implementada e testada localmente nas últimas revisões

- [x] Hero da home sem a antiga expansão automática pesada.
- [x] Desktop: vídeo de fundo, replay, pausa e botão de som.
- [x] Mobile: foto inicialmente, vídeo somente após interação e controles centralizados.
- [x] Entrada leve de textos e botões com GSAP, respeitando redução de movimento.
- [x] Ajustes de quebras de título nas heros principais.
- [x] Correção das máscaras de linha que recortavam acentos e cedilhas.
- [x] Header sticky somente no desktop, com vidro durante a rolagem.
- [x] Portfólio: fundo externo preto do header transparente após rolar.
- [x] WebM dos vídeos que estavam sem essa versão, mantendo a duração dos MP4 fornecidos.
- [x] Referências ao antigo vídeo removido corrigidas em Contato e Portfólio.

- [ ] Garantir que o último deploy contém essas mudanças; testar a versão publicada, não apenas o localhost.

## 2. P0 — domínio, contatos e orçamento

### 2.1 Domínio definitivo nos metadados

**Corrigido localmente em 15/10/2026:** `site` no `astro.config.mjs` agora usa `https://yessproducoes.com.br`, sem `www`. O build foi validado: índice de sitemaps, 1.694 URLs do sitemap, robots e canonicals conferidos usam o domínio definitivo. A versão publicada ainda precisa receber esse build e ser revalidada.

- [ ] Confirmar qual é o domínio definitivo aprovado pelo cliente. Os documentos do projeto mencionam `https://yessproducoes.com.br/`.
- [x] Ajustar `site` no Astro para o domínio definitivo e validar o build local.
- [ ] Publicar o build corrigido, conferir os arquivos no endereço público e reenviar o sitemap no Search Console.
- [ ] Conferir no HTML publicado: canonical, `og:url`, URL da imagem OG e URLs dos dados estruturados.
- [ ] Abrir `/robots.txt`, `/sitemap-index.xml` e os sitemaps filhos: todos devem apontar para o domínio definitivo.
- [ ] Confirmar a versão preferida de HTTPS e de `www`/sem `www`, com redirecionamento consistente e sem ciclos.
- [ ] Conferir o comportamento dos antigos endereços de preview/Vercel: evitar versões indexáveis concorrendo com o domínio oficial, conforme a arquitetura de hospedagem adotada.

**Arquivos:** `astro.config.mjs`, `src/components/Seo.astro`, `src/components/SiteSchema.astro`, `src/pages/robots.txt.ts`.

### 2.2 Dados reais da empresa

**Confirmado no código local:** `src/data/site.json` ainda contém o CNPJ `00.000.000/0001-00` e o WhatsApp `5511900000000`.

- [ ] Substituir o CNPJ provisório pelo dado confirmado ou retirar sua publicação até a confirmação.
- [ ] Confirmar a razão social; não publicar uma razão social presumida.
- [ ] Confirmar o WhatsApp oficial com país e DDD.
- [ ] Conferir `PUBLIC_WHATSAPP_NUMBER` no ambiente de produção: ele pode substituir o JSON em alguns componentes. Não considerar o contato publicado errado apenas pelo fallback local.
- [ ] Conferir o HTML/JSON-LD final: `SiteSchema.astro` usa CNPJ e razão social do JSON.
- [ ] Testar WhatsApp na home, footer, formulário e demais chamadas: todos devem abrir a mesma empresa, com uma mensagem adequada.
- [ ] Confirmar e-mail e Instagram reais e dar destino funcional aos respectivos elementos.

**Confirmado no código local:** os links de E-mail e Instagram do footer apontam para `/contato/#canais`; os cards de canais em Contato são informativos, sem links diretos de abertura do canal.

- [ ] Decidir se E-mail e Instagram devem abrir diretamente `mailto:`/perfil oficial ou se a página de Contato terá essas ações claramente disponíveis.
- [ ] Se centralizar os contatos no JSON, conferir todos os consumidores, não apenas o footer.

**Arquivos:** `src/data/site.json`, `src/components/Footer.astro`, `src/components/sections/contato/SectionCanaisContato.astro`, `src/components/QuoteForm.astro`.

### 2.3 Formulário realmente enviando

**Confirmado no código:** `QuoteForm.astro` depende de `PUBLIC_QUOTE_ENDPOINT`. Sem ele, mostra aviso de configuração e desabilita o envio. A existência do endpoint no deploy **não foi verificada**; `.env.example` vazio não prova ausência em produção.

- [ ] Conferir `PUBLIC_QUOTE_ENDPOINT` no ambiente correto e realizar novo build se a variável tiver sido alterada após a publicação.
- [ ] Fazer um envio de teste autorizado e confirmar o recebimento pelo responsável da YESS.
- [ ] Conferir todos os campos recebidos: nome, telefone, e-mail, data, público, local, serviços múltiplos e mensagem.
- [ ] Validar sucesso, erro, campos inválidos e comportamento em conexão ruim.
- [ ] Confirmar proteção antispam e funcionamento do campo honeypot com o provedor escolhido.
- [ ] Garantir que o visitante não termine em uma página técnica ou sem confirmação de envio.
- [ ] Verificar se a CSP permite o endpoint real. `public/_headers` atualmente permite `form-action 'self' https://formsubmit.co`.

**Ponto encontrado:** o link dinâmico de WhatsApp do formulário leva serviços, local, data e público, mas não inclui nome, e-mail, telefone informado nem a mensagem livre.

- [ ] Definir quais desses campos devem acompanhar o WhatsApp e ajustar o texto. Pelo menos nome e mensagem merecem revisão para não perder o contexto já preenchido.

## 3. P1 — links e navegação

### 3.1 Cards da home sem destino real

**Confirmado:** `src/components/sections/SectionTrabalhos.astro` usa estas âncoras, sem IDs correspondentes encontrados no código atual:

| Card | Link atual | O que decidir |
| --- | --- | --- |
| Evento corporativo | `#evento-corporativo` | Case real, área do portfólio ou destino apropriado. |
| Painel de LED | `#painel-led` | Portfólio filtrado, case ou página do serviço. |
| Sonorização + Iluminação | `#sonorizacao-iluminacao` | Portfólio ou página correspondente. |
| Sonoplastia e DJ corporativo | `#operacao-tecnica` | Destino e descrição compatíveis com o serviço confirmado. |

- [ ] Corrigir os quatro links ou implementar destinos reais; não deixar cards que parecem clicáveis e não levam a conteúdo.

### 3.2 Cobertura e intenção dos links

**Confirmado:** `src/pages/solucoes-corporativas.astro` termina com `<ServiceAreas service="sonoplastia-para-congressos" />`.

- [ ] Rever esse vínculo: uma página de solução corporativa integrada não deve apresentar cobertura como se representasse apenas sonoplastia, salvo decisão editorial explícita.
- [ ] Testar links de equipamentos, serviços, cidades e bairros: destino correto, orçamento contextualizado e nenhuma página inexistente.
- [ ] Conferir se as localidades publicadas correspondem à cobertura realmente validada com o cliente.
- [ ] Testar âncoras com o header sticky no desktop: formulário e títulos de destino não podem ficar escondidos sob o menu.
- [ ] Abrir uma URL inexistente e confirmar a página 404 e o status HTTP correto.

## 4. P1 — português, conteúdo e fidelidade ao briefing

### Correções pontuais ainda presentes

- [ ] **TVs e monitores:** trocar ou esclarecer a etapa “Retirada” em `src/pages/tvs-e-monitores.astro`. A descrição fala em desmontagem; o título pode sugerir retirada pelo cliente, que não é o modelo da empresa. Sugestão: “Desmontagem”.
- [ ] **Portfólio:** conferir “APCEESP + FENAE” em `src/components/sections/portfolio/SectionHistoriaEvento.astro` com a identificação correta do trabalho. O briefing cita APCEF e as imagens mostram APCEF/SP; confirmar antes de substituir.
- [ ] **Home:** confirmar “DJ corporativo” no card de `SectionTrabalhos.astro`. Sonoplastia foi informada pelo cliente; DJ deve ter confirmação específica.
- [ ] Revisar o posicionamento amplo: soluções audiovisuais para eventos, com painel de LED como prioridade. Corporativo é um segmento importante, não precisa definir toda a empresa.
- [ ] Revisar concordância, pontuação, maiúsculas, espaços duplicados e nomes de marcas nas páginas principais, equipamentos, FAQs e amostra de páginas locais.
- [ ] Conferir promessas que precisam de evidência: experiência, abrangência, qualidade, capacidades e participação em cada evento. Não inventar anos de atuação, números de clientes ou depoimentos.

### Conferência final do briefing do cliente

- [ ] Painéis de LED P2/P3 recebem o maior destaque comercial.
- [ ] Fica claro que a YESS entrega uma solução instalada: planejamento, entrega, montagem, operação técnica e desmontagem.
- [ ] Nenhum texto sugere equipamento para o visitante retirar e levar sozinho.
- [ ] Inventário aprovado está representado: som/P.A., mesas digitais, microfones Shure/Sennheiser, moving heads 7R/9R/14R, par LEDs, ribaltas, mesa de luz, projetores Epson, TVs, painéis P2/P3, processadoras, backdrop, truss Q15/Q25/Q30 e praticáveis.
- [ ] Projetos 3D, técnicos, AutoCAD e ART estão apresentados com responsabilidade e condições confirmadas, sem prometer documentos fora do escopo contratado.
- [ ] Sonoplastia de plenárias, convenções e congressos está identificada corretamente.
- [ ] A capacidade de até 1.000 pessoas está condicionada ao espaço e ao dimensionamento do projeto; pedidos acima disso não devem gerar uma promessa automática.
- [ ] São Paulo, zonas Sul/Oeste/Norte e Guarulhos recebem destaque na cobertura; regiões adicionais precisam de confirmação.
- [ ] FAQs respondem: forma de pagamento, estrutura disponível, montagem de backdrop e o que está incluído.
- [ ] Pagamento segue o informado: entrada e restante no dia do evento. Não inventar percentual, parcelamento ou meios aceitos.

### Clientes atendidos e portfólio

- [ ] Confirmar se a seção de **clientes atendidos** ainda fará parte da entrega. Os arquivos/seção de logos discutidos anteriormente não foram localizados na estrutura atual consultada; não considerar essa etapa concluída sem conferência.
- [ ] Se a seção entrar, confirmar as identidades: Clube Esportivo Helvétia, APCEF, Célia Mineiro Decoração, Studio Velocity, Urbia, Clube Corinthians, Officer 2880, ACESC e Restaurante Rosmarino.
- [ ] Confirmar autorização e versão correta das marcas. Usar “clientes atendidos”, não “parceiros”, se essa for a relação real.
- [ ] Validar fotos e vídeos como trabalhos autorizados e identificar o papel real da YESS em cada evento, sem atribuir a produção completa quando a participação foi parcial.
- [ ] Não exigir nova aprovação visual completa: o cliente já deu retorno positivo. Confirmar apenas os dados, materiais e ajustes finais necessários.

## 5. P1 — OG, favicon e SEO publicado

- [ ] Finalizar o favicon da YESS e conferir a exibição em desktop e celular. O arquivo atual existe em `public/favicon.svg`; existência não equivale à versão final aprovada.
- [ ] Finalizar a imagem OG. `public/og-image.png` e `public/og-image.svg` existem; o JSON aponta para `/og-image.png`.
- [ ] Conferir recorte, identidade e legibilidade da OG, além de URL pública acessível e tipo de arquivo correto.
- [ ] Testar o compartilhamento do domínio final em WhatsApp e nas redes utilizadas pelo cliente; observar cache de previews.
- [ ] Conferir title, description e H1 das páginas prioritárias, evitando títulos duplicados entre equipamentos e serviços com intenções equivalentes.
- [ ] Validar os dados estruturados existentes com os dados finais da empresa. **Já há `SiteSchema.astro` e `ServiceSchema.astro`; não criar duplicações por causa de observações de auditorias antigas.**
- [ ] Conferir se os schemas de FAQ/breadcrumb, quando presentes, correspondem ao conteúdo visível e à página atual.
- [ ] Conferir redirecionamentos de URLs antigas com o status efetivo da hospedagem. Os `redirects` do Astro em saída estática não devem ser presumidos como redirects HTTP 301 do servidor.
- [ ] Validar no sitemap somente URLs canônicas que realmente devem ser indexadas, sem aliases ou páginas de teste.
- [ ] Revisar uma amostra de páginas locais: conteúdo útil e específico, serviço real, cobertura real, links e ausência de simples troca de bairro em massa.
- [ ] Conferir o domínio/propriedade corretos no Search Console e o sitemap enviado após a versão final.
- [ ] Inspecionar home, LED, Contato e amostra de páginas locais. “Descoberta”, “rastreada” e “enviada no sitemap” não devem ser registradas como indexação confirmada.

SEO contínuo e expansão de páginas não precisam impedir a entrega. Não prometer prazo de indexação, posição no Google ou quantidade de leads.

## 6. P1 — revisão visual e acessibilidade

### Ponto de atenção herdado da revisão

**Ainda presente no código:** `src/pages/sobre.astro` combina alturas fixas em `lg` com mudanças de composição em `xl`, incluindo `lg:h-177.5` e `xl:grid-cols-[700fr_612fr]`.

- [ ] Revalidar Sobre especialmente entre 1024 e 1279 px, procurando corte, sobreposição e conteúdo maior que a seção. É um risco apontado anteriormente; esta lista não substitui um novo teste renderizado nessa faixa.

### Matriz mínima de teste

- [ ] Celular: 320, 375/390 e 430 px, incluindo orientação horizontal.
- [ ] Tablet: 768 e 1024 px.
- [ ] Notebook: 1366 × 768.
- [ ] Desktop: 1920 × 1080.
- [ ] Chrome/Edge e Firefox; Safari em iPhone real, se disponível.
- [ ] Nenhum scroll horizontal inesperado, título recortado, acento cortado ou botão fora da tela.
- [ ] Heros com quebra de texto legível; em larguras intermediárias, verificar se palavras isoladas exigem ajuste adicional.
- [ ] Header: sticky e vidro apenas no contexto aprovado; no mobile, o menu próprio funciona sem header preso no topo.
- [ ] Portfólio: mosaico, transições, filtros, footer e abertura de imagens continuam corretos com poucas imagens filtradas.
- [ ] Lightbox: fechar, avançar, voltar, swipe, Escape e **foco preso dentro da janela enquanto estiver aberta**. O código consultado tem Escape/setas, mas não apresenta tratamento específico de Tab nesse lightbox.
- [ ] Navegação completa por teclado, foco visível, nomes acessíveis e campos com rótulos claros.
- [ ] Testar zoom de 200% e preferência de redução de movimento.
- [ ] Conferir contraste do header com vidro sobre imagens claras e movimento de fundo.

## 7. P1 — vídeos e desempenho

- [ ] Em produção, repetir a sequência completa da home: entrada → término → rever → ativar som → silenciar → pausar → rever novamente.
- [ ] No mobile, confirmar foto inicial e nenhuma transferência de vídeo antes de tocar em “Ver vídeo”.
- [ ] Conferir ausência de piscadas, vídeo aparecendo nas bordas e saltos no layout ao pausar.
- [ ] Testar duração completa dos arquivos atuais; não aplicar cortes ou limites de segundos sem autorização.
- [ ] Conferir áudio e controles nas heros de serviço, sem autoplay com som inesperado ao passar o mouse.
- [ ] Decidir com o cliente sobre TVs/Projetores e Soluções Corporativas: os arquivos atuais, tanto MP4 quanto WebM, não têm faixa de áudio. Um botão de som não cria áudio; fornecer arquivos com áudio ou adequar a interface.
- [ ] Confirmar HTTP 200/206, MIME correto e reprodução de todos os vídeos no domínio final; nenhuma referência ao arquivo antigo removido.
- [ ] Reavaliar peso dos arquivos sem sacrificar a duração. A versão WebM de som/luz gerada recentemente ficou maior que seu MP4: medir transferência e decodificação antes de tratá-la como otimização automática.
- [ ] Rodar novamente o PageSpeed no domínio final e registrar a data, o dispositivo simulado e os resultados. Não comparar apenas notas de execuções diferentes.
- [ ] Conferir LCP, CLS e INP quando houver dados disponíveis; os dados de campo podem ainda não existir para um domínio novo.
- [ ] Pedir ao sênior para retestar nos navegadores/computador que travaram anteriormente. Testes locais e build não comprovam que o problema desse equipamento foi resolvido.
- [ ] Verificar console e rede com cache limpo: erros de JavaScript, 404, recursos bloqueados e falhas de mídia.

## 8. P1 — hospedagem, segurança, medição e privacidade

- [ ] Confirmar onde o site está efetivamente hospedado: Cloudflare no DNS/proxy não significa necessariamente Cloudflare como servidor do site.
- [ ] Conferir se `public/_headers` está sendo aplicado nessa hospedagem. Se a origem ainda for Vercel, não presumir que esse arquivo configure os headers lá.
- [ ] Conferir headers efetivos de segurança e cache no domínio publicado, sem alterar políticas às cegas.
- [ ] Verificar se a CSP final permite o formulário e as integrações realmente utilizadas, inclusive eventual incorporação do GTM.
- [ ] Validar GTM com a ferramenta de prévia e, se houver GA4, confirmar recebimento dos eventos no fluxo correto.
- [ ] Registrar onde o GTM foi instalado: não localizei uma referência explícita no `src`/`public` consultado; ele pode estar sendo inserido externamente. Não reinstalar sem verificar, para evitar duplicação.
- [ ] Definir eventos úteis de conversão: clique em WhatsApp, início de orçamento e envio efetivamente confirmado. Não contar só clique no botão como formulário recebido.
- [ ] Garantir que dados pessoais do formulário não estejam sendo enviados indevidamente para URLs, eventos ou ferramentas de análise.
- [ ] Validar com o cliente/responsável os avisos de privacidade, uso de cookies e consentimento necessários às ferramentas realmente ativadas. Não inserir banner sem comportamento correspondente nem considerar um banner, sozinho, suficiente.
- [ ] Conferir HTTPS, ausência de conteúdo misto e renovação do domínio/certificados.

## 9. P1 — fechamento técnico e entrega

- [ ] Rodar `pnpm check` e `pnpm build` no estado final do código, guardando os resultados.
- [ ] Limpar os dois avisos de importação sem uso conhecidos em `src/pages/portfolio.astro`: `Image` e `imagemHero`, se ainda estiverem presentes.
- [ ] Revisar `git diff`, confirmar a branch de entrega e garantir que os ajustes foram commitados/publicados. Não usar o estado do localhost como prova do deploy.
- [ ] Confirmar que não há segredos no repositório, em variáveis `PUBLIC_*` ou no pacote estático enviado ao navegador.
- [ ] Registrar versão/commit de entrega, domínio final, data, ambiente e eventuais pendências aceitas.
- [ ] Garantir acesso do cliente às contas necessárias: domínio, DNS/Cloudflare, hospedagem, Search Console, GTM e demais ferramentas contratadas.
- [ ] Registrar responsáveis por renovação, cobrança e recuperação de acesso; não colocar senhas ou tokens neste arquivo.
- [ ] Definir quem recebe os orçamentos e o procedimento para acompanhar mensagens perdidas ou falhas de envio.
- [ ] Entregar orientações curtas para atualizar WhatsApp, contatos, textos, fotos, vídeos e publicar mudanças.
- [ ] Guardar backup do código e dos materiais originais autorizados, com caminho de recuperação/deploy anterior.
- [ ] Alinhar o período de suporte, correções incluídas e o que passa a ser manutenção/evolução.
- [ ] Fazer um último teste ponta a ponta no endereço público e registrar a conclusão da entrega.

## 10. P2 — acompanhamento após entregar

- [ ] Acompanhar indexação e erros no Search Console sem esperar indexar todas as páginas para entregar o site.
- [ ] Medir qualidade dos contatos recebidos e origem das conversões.
- [ ] Ajustar conteúdo com base em buscas e leads reais; evitar gerar páginas em massa apenas para aumentar o número de URLs.
- [ ] Ampliar cases e clientes atendidos com materiais autorizados.
- [ ] Revisar desempenho com dados reais, especialmente em celulares e redes mais lentas.
- [ ] Melhorar textos, FAQs e navegação a partir de dúvidas recorrentes dos clientes.

## Critério prático de “pronto para entregar”

O site pode ser entregue quando os **P0 estiverem resolvidos**, os testes essenciais de produção estiverem aprovados e os P1 restantes tiverem decisão explícita: corrigidos, não aplicáveis ou aceitos com responsável e prazo.

Não é preciso esperar posições no Google, todas as URLs indexadas ou uma nova rodada completa de aprovação visual. O importante é entregar um site funcional, fiel ao negócio, com contatos reais, orçamento funcionando e responsabilidades documentadas.

## Referências do projeto

- `docs/briefing-seo-cliente.md`: respostas do cliente, cobertura, inventário e decisões de conteúdo.
- `docs/relatorio-pesquisa-seo-comercial.md`: histórico de recomendações de SEO. Parte do relatório reflete um estágio anterior do projeto; revalidar antes de aplicar.
- Conversa de revisão e inspeção do código realizada em 15/10/2026. Configurações externas e produção não foram auditadas integralmente para elaborar este checklist.
