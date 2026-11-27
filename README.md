# YESS Eventos

Base do site em Astro 7, Tailwind CSS 4 e TypeScript, com geração estática e deploy opcional no Cloudflare Workers.

## Requisitos

- Node.js 22.12 ou superior
- pnpm 11

## Comandos

```bash
pnpm install
pnpm dev
pnpm check
pnpm build
pnpm preview
pnpm format
pnpm deploy
```

O domínio de produção está definido em `astro.config.mjs`. As variáveis opcionais de ambiente estão documentadas em `.env.example`.

Saídas de build (`dist/`), tipos gerados (`.astro/`) e arquivos temporários de auditoria (`work/`) não fazem parte do código-fonte. O build recria as duas primeiras pastas. Relatórios e instruções mantidos ficam em `docs/`.

## Estrutura

```text
src/
├── components/       Componentes reutilizáveis
├── data/             Conteúdo e configurações do site
├── layouts/          Estrutura HTML, SEO e estilos globais
├── pages/            Rotas do Astro
└── styles/           Tokens visuais e CSS global
```
