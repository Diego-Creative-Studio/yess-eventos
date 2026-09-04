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

Antes do build de produção, copie `.env.example` para `.env` e defina `SITE_URL` com o domínio real.

## Estrutura

```text
src/
├── components/       Componentes reutilizáveis
├── data/             Conteúdo e configurações do site
├── layouts/          Estrutura HTML, SEO e estilos globais
├── pages/            Rotas do Astro
└── styles/           Tokens visuais e CSS global
```
