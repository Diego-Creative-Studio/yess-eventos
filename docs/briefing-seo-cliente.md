# Briefing de conteúdo e SEO — YESS Audiovisual

Registro das informações fornecidas pelo cliente para orientar os textos, a estrutura de serviços e o planejamento de SEO do site.

> Data do registro: 1º de outubro de 2026  
> Status atual: produção e montagem audiovisual para eventos. A estratégia anterior de locação foi substituída pela confirmação final abaixo. Os registros anteriores ficam preservados como histórico, não como orientação vigente.

## Diretriz vigente — confirmação final do cliente em 1º de outubro de 2026

Esta seção substitui as recomendações anteriores de aluguel/locação e expansão de equipamentos por bairro.

- A YESS se apresenta como empresa de produção e montagem audiovisual de eventos, não como locadora.
- Equipamentos demonstram capacidade de entrega: painel de LED, projeção, sonorização, iluminação e TVs compõem soluções instaladas e acompanhadas por um técnico.
- Mesmo uma contratação pontual de uma ou mais TVs inclui entrega, instalação e acompanhamento do evento. Não há retirada pelo cliente.
- Painel de LED é a prioridade comercial e de rentabilidade; som e iluminação vêm depois.
- Hub atual: `/estrutura-audiovisual-para-eventos/`. Páginas específicas em `/equipamentos/` apresentam aplicações no evento, não aluguel avulso.
- URLs antigas de locação têm redirecionamentos no Astro. Em hospedagem estática sem adaptador, são páginas de redirecionamento; configurar redirects HTTP na hospedagem quando ela for definida. URLs antigas não entram no sitemap.
- `src/data/event-equipment.ts` centraliza os equipamentos. Formulário pede soluções para o evento, não retirada ou aluguel.
- Primeira etapa local em `/solucoes/[service]/[location]/`: três páginas de LED em São Paulo, Guarulhos e Zona Sul, com orientação própria de briefing e links para o serviço. Não gerar equipamento × bairro automaticamente.
- O cliente separará fotos e vídeos próprios. Antes do portfólio, identificar o papel real da YESS em cada trabalho: produção, equipamentos/montagem, operação ou somente sonoplastia. Não atribuir o evento inteiro a uma participação parcial.
- Não publicar logos, cases ou mídia não autorizada. Não informar experiência, equipe ou responsabilidade técnica sem confirmação.
- O envio real do formulário e WhatsApp direto continuam pendentes da configuração e dos contatos comerciais confirmados.

### Navegação local — 1º de outubro de 2026

- `ServiceAreas.astro` é reutilizado nas páginas de serviços, equipamentos e estrutura audiovisual, mantendo os serviços existentes.
- Base geográfica em `src/data/service-areas.ts`: 22 distritos agrupados pelas nove subprefeituras de Sul 1 e Sul 2. Distritos não são uma lista exaustiva de bairros; não confundir a classificação oficial com nomes informais de bairros.
- Fontes: https://gestaourbana.prefeitura.sp.gov.br/arquivos-planos-regionais/ e https://prefeitura.sp.gov.br/licenciamento/w/servicos/312207.
- A fonte municipal confirma a geografia, não atendimento anterior, cases ou uma filial da YESS em cada região.
- Links para páginas locais aparecem somente quando a combinação está publicada. Nas demais regiões, o link abre contato e preenche serviço, cidade e distrito via query string. Não apresentar links de orçamento como páginas locais.
- Canonical de contato não inclui query string; nomes externos são inseridos como valores de campos, nunca como HTML.
- Não há páginas individuais de distrito nesta etapa. Só expandir com conteúdo próprio, demanda e revisão; número de páginas não garante indexação, tráfego ou leads.

## Avanço da implementação — 1º de outubro de 2026

- Domínio definitivo configurado no Astro e identidade registrada no schema global.
- Revisados metadados e textos reaproveitados indevidamente em TVs e soluções corporativas.
- Equipamentos confirmados acrescentados à página de som e iluminação.
- Criada `/locacao-de-equipamentos-para-eventos/`, com catálogo, cobertura, processo, FAQs, schema de serviço e breadcrumbs.
- Hub ligado ao menu, à Home e ao rodapé; CTAs de orçamento encaminhados para `/contato/#canais`.
- Criadas `/estruturas-e-cenografia-para-eventos/` e `/projetos-tecnicos-para-eventos/`, reutilizando o design e as seções existentes, com conteúdo próprio e dados estruturados de serviço e breadcrumbs.
- Som e iluminação permanecem juntos. A separação em páginas específicas foi adiada para priorizar serviços ainda sem conteúdo próprio.
- Fortalecida `/som-e-iluminacao/` com inventário por serviço, aplicações específicas de áudio e luz, cobertura, fatores de orçamento, pagamento e dados estruturados.
- Locação e aluguel compartilham URLs canônicas. São Paulo e Guarulhos são as primeiras localidades candidatas; zonas e bairros só avançam com atendimento confirmado e conteúdo específico. Não publicar automaticamente todas as combinações.
- Próximas frentes: ampliar telas/projetores e avaliar sonoplastia; depois iniciar os hubs geográficos.
- Rotas locais permanecem para a etapa posterior, com seleção editorial e conteúdo específico.

O detalhamento de ART depende da confirmação do responsável técnico e das condições de prestação. Não foram publicados novos logotipos ou cases dos clientes citados no briefing.

## Perguntas e respostas do cliente

### Confirmação da modalidade de locação — 1º de outubro de 2026

- Não há locação para retirada pelo cliente: somente equipamento instalado ou pacote.
- A locação inclui entrega e acompanhamento de um técnico.
- Atendimento em São Paulo capital e interior; Guarulhos já havia sido confirmado. Isso não autoriza gerar todas as cidades e bairros automaticamente.
- Prioridades comerciais: painel de LED, seguido por som e iluminação.
- Catálogo técnico inicial em `src/data/rental-catalog.ts`; páginas de microfones, caixas de som, moving heads, projetores Epson e TVs usam um template compartilhado com conteúdo específico.
- Painel de LED permanece na URL existente, sem criar um equivalente duplicado em `/locacao/`.
- Formulário reutilizável somente em contato e nas páginas específicas de equipamentos, com equipamento pré-selecionado. Páginas de serviços e catálogo geral mantêm os botões para `/contato/#canais`, sem repetir o formulário. Cards antigos de canais removidos da página de contato.
- `PUBLIC_QUOTE_ENDPOINT` e `PUBLIC_WHATSAPP_NUMBER` estão documentados em `.env.example`. Sem endpoint, o envio permanece desativado e sinalizado. Sem número confirmado, não exibir link fictício de WhatsApp.
- Antes de ativar: validar integração real, proteção antispam, entrega do pedido, confirmação e erros. Não considerar o formulário visual como integração concluída.
- Logos/clientes continuam pendentes de autorização de publicação; páginas locais permanecem desativadas até revisão editorial.

### 1. Quais equipamentos e serviços vocês oferecem?

**Serviços**

- Locação, montagem e operação de som, iluminação e painéis de LED.
- Montagem de projetos 3D e projetos técnicos para eventos.
- Locação de equipamentos audiovisuais.
- Produção do projeto, entrega, montagem, operação técnica e desmontagem.
- Sonorização para públicos de até 1.000 pessoas.

**Equipamentos informados inicialmente**

- Caixas de som.
- Mesas de som.
- Microfones sem fio.
- Moving heads.
- Par LEDs.
- Painéis de LED P2 e P3.
- Projetores.
- TVs.
- Backdrops.
- Sistemas de P.A.

### 2. Quais serviços vocês mais querem divulgar?

O serviço prioritário é a locação de painéis de LED.

### 3. Quais tipos de eventos vocês atendem?

- Eventos corporativos.
- Reuniões.
- Feiras.
- Congressos.
- Convenções.
- Plenárias.
- Salas e ambientes para apresentações.

### 4. Quais cidades e regiões vocês atendem com mais frequência?

- São Paulo, com ênfase nas zonas Sul, Oeste e Norte.
- Guarulhos.

Não foram informados bairros específicos nesta etapa.

### 5. O serviço inclui entrega, montagem, operação técnica e desmontagem?

Sim. O atendimento contempla todas as etapas, desde a produção do projeto até a desmontagem.

### 6. Quais são os principais diferenciais da YESS?

- Experiência da equipe na coordenação de eventos.
- Capacidade de elaborar e executar projetos novos.
- Capacidade de receber e concluir projetos previamente desenvolvidos.
- Acompanhamento do planejamento à desmontagem.

### 7. Quais dúvidas os clientes mais fazem antes de fechar?

**Qual é a forma de pagamento?**  
É cobrada uma entrada e o restante é pago no dia do evento. O percentual da entrada e os meios de pagamento não foram informados.

**A YESS possui estrutura própria para o evento?**  
Sim.

**A YESS monta backdrop?**  
Sim.

## Inventário detalhado informado pelo cliente

### Sonorização

- Caixas de som QSC, EV e equivalentes.
- Mesas de som digitais.
- Microfones Shure e Sennheiser.
- Sistemas de P.A.
- Sonorização para públicos de até 1.000 pessoas.

### Iluminação

- Moving heads 7R, 9R e 14R.
- Mesas de luz digitais.
- Par LEDs.
- Ribaltas.

### Vídeo

- Projetores Epson.
- TVs de 42, 55 e 65 polegadas.
- Painéis de LED P2 e P3.
- Processadoras de vídeo.

### Cenografia e estrutura

- Backdrops.
- Estruturas Box Truss Q15, Q25 e Q30.
- Praticáveis para montagem de palcos.

### Projetos

- Elaboração de projetos 3D.
- Elaboração de projetos técnicos.
- ART.
- Projetos em AutoCAD.

### Sonoplastia

- Sonoplastia de plenárias, convenções e congressos.

## Clientes atendidos informados

- Clube Esportivo Helvetia.
- APCEF.
- Célia Mineiro Decoração.
- Studio Velocity.
- Urbia.
- Clube Corinthians.
- Officer 2880 (agência).
- ACESC.
- Restaurante Rosmarino.

> Antes de publicar nomes, logotipos, fotografias ou trabalhos, confirmar a autorização de uso com o cliente.

## Direcionamento de comunicação

### Posicionamento principal

A YESS deve ser apresentada como uma empresa de soluções audiovisuais completas para eventos, e não exclusivamente como fornecedora para eventos corporativos.

Mensagem-base sugerida:

> Locação de painel de LED, som, iluminação e equipamentos audiovisuais para eventos em São Paulo, com projeto, montagem, operação técnica e desmontagem.

### Prioridade comercial

Painéis de LED P2 e P3 são o principal serviço a ser divulgado. Sonorização, iluminação, vídeo, estruturas, cenografia e projetos técnicos complementam a solução.

### Terminologia padronizada

- Utilizar **locação**, nunca **alocação**, ao falar do aluguel de equipamentos.
- Utilizar **moving heads**, em vez de “muvings”.
- Utilizar **painéis de LED P2 e P3**.
- Utilizar **mesas de som digitais** e **mesas de luz digitais**.
- Utilizar **estruturas Box Truss Q15, Q25 e Q30**.
- Utilizar **praticáveis para montagem de palcos**.

## Estrutura inicial recomendada para SEO

### Serviços

- Painéis de LED P2 e P3.
- Sonorização para eventos.
- Iluminação para eventos.
- TVs, monitores e projetores.
- Estrutura e cenografia.
- Projetos técnicos e 3D.
- Sonoplastia para plenárias, convenções e congressos.

### Rotas candidatas

- `/locacao-de-equipamentos-para-eventos/`
- `/paineis-de-led-p2-e-p3/`
- `/sonorizacao-para-eventos/`
- `/iluminacao-para-eventos/`
- `/locacao-de-tvs-e-projetores/`
- `/estruturas-e-cenografia-para-eventos/`
- `/projetos-tecnicos-para-eventos/`
- `/audiovisual-para-eventos-em-sao-paulo/`
- `/audiovisual-para-eventos-em-guarulhos/`

As rotas acima são sugestões de arquitetura, não páginas já aprovadas ou implementadas.

## Estratégia de páginas programáticas

### Referências analisadas

A estratégia deve aproveitar os aprendizados de três projetos já existentes:

- **AS Locação:** utiliza páginas geradas pela combinação de intenção comercial, equipamento e cidade. A estrutura atual contém três termos comerciais, 24 serviços e nove localidades, além dos respectivos hubs.
- **Gescob:** utiliza uma matriz editorial controlada. Somente combinações em que a intenção e o conteúdo realmente mudam são publicadas.
- **Marcio Toledo:** utiliza páginas de serviço por cidade, hubs regionais e informações geográficas específicas. A cobertura pública inclui 85 cidades.

A YESS deve adotar um modelo híbrido: a cobertura programática da AS Locação com os controles editoriais e técnicos utilizados no Gescob.

### Eixos disponíveis para a YESS

1. **Intenção comercial:** locação e aluguel.
2. **Equipamento:** painel de LED, caixas de som, microfones, TVs, projetores, iluminação, estruturas e demais itens do inventário.
3. **Serviço técnico:** projetos, ART, montagem, operação e sonoplastia.
4. **Tipo de evento:** eventos corporativos, reuniões, feiras, congressos, convenções e plenárias.
5. **Localização:** cidade, região e bairro.

### Separação entre locação e prestação de serviço

Nem todo item deve utilizar os termos “locação” ou “aluguel”.

**Equipamentos adequados para páginas de locação:**

- Painel de LED P2 e P3.
- Caixas de som e sistemas de P.A.
- Mesas de som digitais.
- Microfones sem fio.
- Moving heads.
- Par LEDs e ribaltas.
- Mesas de luz digitais.
- Projetores.
- TVs.
- Processadoras de vídeo.
- Backdrops.
- Box Truss.
- Praticáveis.

**Serviços que precisam de outra família de páginas:**

- Projetos 3D.
- Projetos técnicos.
- Projetos em AutoCAD.
- Emissão de ART.
- Montagem e desmontagem.
- Operação técnica.
- Sonoplastia de plenárias.
- Produção audiovisual para convenções e congressos.

### Modelo de URLs dinâmicas

Exemplos para locação de equipamentos:

- `/locacao/painel-de-led/moema/`
- `/locacao/painel-de-led/guarulhos/`
- `/locacao/caixa-de-som/santana/`
- `/locacao/microfone-sem-fio/vila-mariana/`
- `/locacao/tv-55-polegadas/pinheiros/`
- `/locacao/box-truss/santo-amaro/`

Exemplos para serviços técnicos:

- `/servicos/projeto-tecnico/sao-paulo/`
- `/servicos/sonoplastia-de-plenaria/guarulhos/`
- `/servicos/projeto-3d/zona-sul/`

O formato definitivo das URLs deverá ser fechado antes da implementação para evitar migrações e redirecionamentos posteriores.

### Termos alternativos e canibalização

As pessoas pesquisam usando “locação”, “aluguel”, nomes dos equipamentos, marcas, tamanhos e aplicações. Essas variações devem ser cadastradas como aliases e utilizadas naturalmente em títulos, introduções, subtítulos, perguntas frequentes e links internos.

Por padrão, não serão criadas duas páginas equivalentes apenas para trocar “locação” por “aluguel”. Uma segunda URL só deverá existir quando a pesquisa de palavras-chave e a análise da SERP indicarem intenções diferentes. Caso contrário, uma página canônica poderá responder aos dois termos.

Exemplo de dados de um equipamento:

```ts
{
	slug: 'painel-de-led',
	name: 'Painel de LED',
	aliases: [
		'aluguel de painel de LED',
		'locação de painel de LED',
		'painel de LED P2',
		'painel de LED P3',
	],
}
```

### Localidades candidatas

As localidades abaixo formam uma lista inicial para pesquisa e priorização. A presença na lista não significa publicação automática.

**Zona Sul**

- Moema.
- Vila Mariana.
- Vila Olímpia.
- Brooklin.
- Campo Belo.
- Santo Amaro.
- Saúde.
- Jabaquara.
- Morumbi.
- Interlagos.

**Zona Oeste**

- Pinheiros.
- Vila Madalena.
- Lapa.
- Perdizes.
- Barra Funda.
- Alto de Pinheiros.
- Butantã.

**Zona Norte**

- Santana.
- Vila Guilherme.
- Tucuruvi.
- Casa Verde.
- Freguesia do Ó.
- Pirituba.
- Jaçanã.
- Tremembé.

**Guarulhos**

- Começar com uma página para a cidade.
- Pesquisar posteriormente Centro, Vila Galvão, Maia, Cumbica, Bonsucesso, Pimentas e Taboão.

A seleção definitiva deve considerar pesquisa de palavras-chave, sugestões do Google, concorrência, demanda comercial, locais de eventos e regiões realmente atendidas pela YESS.

## Domínio e identidade da marca

O domínio definitivo informado é `yessproducoes.com.br`. O domínio é compatível com a atividade da empresa e não exige que o logotipo ou todo o conteúdo visível seja alterado para “YESS Produções”.

Padronização recomendada:

- **Nome visual:** YESS Audiovisual & Eventos.
- **Nome curto:** YESS.
- **Nome alternativo:** YESS Produções.
- **Razão social:** YESS Produções Artísticas e Audiovisuais Ltda.
- **Domínio:** `https://yessproducoes.com.br/`.

Exemplos de títulos:

- `Locação de Painel de LED em Moema | YESS`
- `Aluguel de Som para Eventos em Guarulhos | YESS`
- `Projeto Audiovisual para Congressos | YESS`

Na implementação, a página inicial deverá receber dados estruturados `WebSite` e `Organization`, com o nome principal consistente e `alternateName` para as variações legítimas da marca.

O projeto ainda utiliza `https://yess-eventos.vercel.app` como propriedade `site` do Astro. Essa configuração deverá ser alterada para o domínio definitivo antes da publicação, pois afeta canonical, sitemap, Open Graph e outras URLs absolutas.

## Ordem recomendada de implementação

### Fase 1 — Mapa de palavras-chave e arquitetura

- Definir os nomes canônicos de equipamentos e serviços.
- Separar equipamentos para locação de serviços técnicos.
- Definir a estrutura definitiva das URLs.
- Definir aliases como “locação”, “aluguel”, marcas, modelos e tamanhos.
- Preparar a lista inicial de cidades, zonas e bairros.

Essa fase acontece antes das alterações de conteúdo para impedir que as páginas atuais precisem mudar de URL posteriormente.

### Fase 2 — Corrigir as páginas existentes

- Revisar a Home para representar todos os tipos de eventos atendidos.
- Manter painel de LED como prioridade comercial.
- Corrigir textos excessivamente restritos a eventos corporativos.
- Revisar títulos, descriptions, H1, headings, links internos e CTAs.
- Atualizar as páginas atuais de painel de LED, som e iluminação, TVs e soluções audiovisuais com as respostas do cliente.
- Adicionar diferenciais reais, cobertura, processo completo e perguntas frequentes.

### Fase 3 — Criar as páginas principais que faltam

- Locação de equipamentos audiovisuais para eventos.
- Sonorização para eventos.
- Iluminação para eventos.
- TVs e projetores.
- Estruturas e cenografia.
- Projetos técnicos e 3D.
- Sonoplastia para plenárias, convenções e congressos.
- Atendimento audiovisual em São Paulo.
- Atendimento audiovisual em Guarulhos.

Essas páginas funcionam como hubs e fornecem a base de conteúdo e de links internos para as páginas dinâmicas.

### Fase 4 — Fundação técnica do SEO programático

- Criar arquivos de dados para equipamentos, serviços, eventos e localidades.
- Criar uma matriz explícita de combinações publicáveis.
- Implementar `getStaticPaths` com controle editorial.
- Gerar canonical, title, description, breadcrumbs e dados estruturados corretos.
- Garantir exatamente um H1 por página.
- Criar links entre hubs, serviços, bairros e cidades.
- Incluir no sitemap somente páginas elegíveis para indexação.

### Fase 5 — Publicação piloto das páginas dinâmicas

- Começar pelo painel de LED, serviço prioritário do cliente.
- Combinar o serviço com São Paulo, Guarulhos, zonas prioritárias e uma seleção inicial de bairros.
- Publicar outras combinações comerciais fortes, como sonorização, microfones, TVs e projetores.
- Validar conteúdo, renderização, canonical, sitemap e links internos.

### Fase 6 — Medição e expansão

- Configurar Google Search Console e ferramentas de conversão.
- Acompanhar cobertura, indexação, impressões, cliques, termos de busca e leads.
- Expandir serviços e bairros que demonstrarem demanda.
- Melhorar ou remover páginas que não indexarem, canibalizarem outra URL ou não entregarem valor.

As páginas dinâmicas ficam depois da correção das páginas existentes e da criação dos hubs, mas sua arquitetura deve ser decidida desde a primeira fase.

## Informações que ainda não foram confirmadas

Esses itens não impedem o início da revisão do site, mas poderão fortalecer o conteúdo posteriormente:

- Tempo de atuação da empresa.
- Quantidade aproximada de eventos realizados.
- Autorização para divulgar clientes, logotipos, imagens e cases.
- Endereço comercial ou confirmação de atendimento exclusivamente no local do evento.
- Responsável técnico e registro profissional relacionado à emissão de ART.
- Percentual da entrada e meios de pagamento aceitos.

## Cuidados para a implementação

### Atualização — 01/10/2026

- `/tvs-e-monitores/` permanece como URL canônica única para TVs, monitores e projetores. Conteúdo atualizado com TVs de 42, 55 e 65 polegadas e projetores Epson; sem especificações não confirmadas.
- Referência técnica da AS Locação inspecionada: dados separados e `getStaticPaths`. Na YESS não será usado o produto cartesiano de verbos, serviços e cidades.
- Base editorial em `src/data/local-seo.ts` e rota `/locacao/[service]/[location]/`. Primeiro serviço: painel de LED; primeiras cidades: São Paulo e Guarulhos.
- Os dois pilotos estão com `seoEligible: false`: não geram páginas nem entradas no sitemap. A rota atual é somente uma base, não uma landing page local concluída. Antes de ativar, completar conteúdo útil específico, revisar schema por cidade, links internos e conversão.
- Não criar URLs paralelas para aluguel/locação nem bairros sem validação de atendimento e conteúdo.
- Pendência de conversão: os cards da página de contato não possuem destinos reais. Precisamos do WhatsApp com DDD, e-mail comercial e perfil do Instagram; não usar contatos da AS Locação nem inventar dados.

- Não prometer posicionamento em primeiro lugar no Google.
- Não publicar automaticamente o produto cartesiano completo de equipamentos, serviços, eventos e localidades.
- Criar uma matriz ampla de páginas locais, priorizando combinações com intenção comercial, atendimento real e conteúdo útil.
- Usar informações geográficas, logística, eventos atendidos, equipamentos disponíveis, dúvidas e links locais para diferenciar as páginas.
- Utilizar “aluguel” naturalmente nos textos e perguntas frequentes, mantendo “locação” como padrão das URLs.
- Não duplicar páginas equivalentes usando separadamente “aluguel” e “locação” sem antes validar que representam intenções de busca diferentes.
- Não inventar endereço, números de experiência, certificações ou informações técnicas não confirmadas.
