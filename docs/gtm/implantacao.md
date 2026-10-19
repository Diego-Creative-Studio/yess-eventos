# Consentimento com GTM e Cloudflare

Estado em 19/10/2026: testes locais do contêiner real acompanhados por prints; banner habilitado no código para publicação. **Gateway e implantação em produção ainda pendentes de validação**.
Manter Google tag gateway e `/metrics/`. Não alterar DNS, HTTPS ou hospedagem.
Este guia substitui a arquitetura de carga direta descrita no documento anterior.

## Fluxo

- O gateway entrega o GTM existente. O site não injeta outro contêiner.
- Um modelo define o padrão negado em **Consent Initialization - All Pages**.
- O banner envia `yess_consent_update`, inclusive ao restaurar uma escolha ou iniciar sem escolha.
- O modelo executa `updateConsentState` e enfileira `yess_consent_ready`.
- GA4 dispara no evento ready, somente com análise permitida e uma vez por página.

O GTM/gateway pode carregar antes do aceite. O objetivo é bloquear as tags de medição recusadas, não eliminar toda comunicação técnica. Consentimento negado sozinho não bloqueia pings sem cookies: os acionadores também precisam mudar.

## 1. Modelo e tag no GTM — sem publicar

Exportar primeiro uma cópia do contêiner atual em Administrador → Exportar contêiner.
Não substituir o contêiner inteiro.

Em **Modelos → Modelos de tag → Novo**:

1. Nome: `YESS — Ponte de consentimento`.
2. Sem campos. Na aba Código, colar [yess-consent-template.js](yess-consent-template.js).
   É código de modelo em sandbox, **não HTML personalizado** nem script para o site.
3. Permissões:
   - **Accesses consent state**: escrita para `analytics_storage`, `ad_storage`, `ad_user_data`, `ad_personalization`, `personalization_storage`, `functionality_storage`, `security_storage`.
   - **Reads data layer**: somente `event`, `yess_analytics_consent`, `yess_marketing_consent`.
   - **Accesses global variables**: leitura e escrita de `dataLayer`, exigidas por `createQueue`. Sem acesso global irrestrito.
4. Salvar. Se houver erro de permissão/validação, conferir a mensagem antes de continuar.

Criar uma tag desse modelo, `YESS — Consentimento`, com dois acionadores:

- **Inicialização de consentimento — Todas as páginas** (`Consent Initialization - All Pages`), não Initialization.
- **Evento personalizado**: nome exato `yess_consent_update`, todos esses eventos.

Essa ponte precisa funcionar quando a escolha está negada: não exigir consentimento adicional nela.
Manter **uma vez por evento**, não uma vez por página, pois deve receber mudanças.

## 2. Variáveis e acionador da medição

Criar variáveis do tipo **Variável da camada de dados**, versão 2, sem padrão:

| Nome da variável             | Nome na camada de dados  |
| ---------------------------- | ------------------------ |
| YESS — Análise permitida     | `yess_analytics_consent` |
| YESS — Publicidade permitida | `yess_marketing_consent` |

Criar acionador de Evento personalizado `YESS — Análise autorizada`:

- Nome exato do evento: `yess_consent_ready`.
- Alguns eventos personalizados: `{{YESS — Análise permitida}}` igual a `true`.

## 3. Ajustar GA4 / Tag Global

- Preservar `{{GA4 / Tag ID}}` e configurações não relacionadas.
- **Remover** `Initialization - All Pages` e qualquer acionador incondicional dessa tag.
- Usar somente `YESS — Análise autorizada`.
- Configurações avançadas → Opções de disparo: **Uma vez por página**, para não duplicar page_view ao salvar de novo.
- Configurações de permissão → Exigir consentimento adicional: **somente `analytics_storage`**. Não exigir os quatro tipos nessa tag de análise.
- Definições de configuração: `allow_google_signals` e `allow_ad_personalization_signals` recebem `{{YESS — Publicidade permitida}}` como variável booleana, não texto literal.
- Revisar recursos de publicidade e destinos vinculados no Google Analytics. Revisar a medição otimizada de formulários: nunca enviar nomes, e-mails, telefones, mensagens ou campos preenchidos em eventos/URLs do Analytics.

Não criar tags Ads novas. O botão não cria campanhas nem autoriza mensagens promocionais aos leads.
“Somente publicidade” não libera GA4 de análise. Outras tags/destinos precisam de classificação e condições próprias.

## 4. Prévia e publicação coordenada

- `src/data/privacy.json` está com `trackingEnabled: true`: o próximo build inclui o banner em produção. Publicar também a versão testada do GTM; isso não bloqueia uma tag externa antiga/incondicional por si só.
- `approved: false` mantém a política como rascunho/noindex, fora do sitemap.
- `consentDurationDays: 180` é validade técnica da preferência, não prazo de guarda dos leads.
- O localhost não recebe o gateway. Há um carregador **apenas em desenvolvimento**, opt-in, para testar o contêiner pelo Google diretamente. Ele não é incluído no build de produção e só funciona em `localhost`, `127.0.0.1` ou `[::1]`.

### Testar os botões no localhost

1. Iniciar `pnpm dev` (a prévia local funciona com qualquer valor de `trackingEnabled`). Se houver erros de dependências após build/check, reiniciar o servidor de desenvolvimento.
2. No espaço de trabalho do GTM já configurado, clicar **Visualizar**, sem publicar.
3. Informar `http://localhost:4321/?gtm_test=1` e conectar. Usar a janela aberta pelo Tag Assistant.
4. A opção `gtm_test=1` autoriza o carregamento do GTM real nesta aba; pode gerar eventos de teste no Analytics. O código não inventa parâmetros de autenticação nem seleciona a versão de prévia: conferir no Tag Assistant que a versão é **Visualização**, não a versão antiga publicada.
5. Testar primeiro sem escolher e depois **Recusar não necessários**. Conferir padrão/atualização negados e GA4 não disparada.
6. Reabrir **Cookies** no rodapé → Preferências: selecionar só análise, salvar, conferir analytics concedido/anúncios negados e um disparo da GA4.
7. Testar aceitar tudo, retorno/navegação e revogação conforme a matriz abaixo. Para voltar à escolha inicial, remover **somente** `yess-consent-v1` no armazenamento local de `http://localhost:4321` e recarregar; não limpar os cookies de depuração do Tag Assistant.
8. A autorização local de carregar GTM persiste em `sessionStorage` nesta aba, inclusive entre páginas e recargas de revogação. Para desligar, acessar `http://localhost:4321/?gtm_test=0`; fecha-se o carregamento nas próximas páginas, sem excluir dados já enviados. Fechar a aba também encerra essa preferência de sessão.

Sem `gtm_test=1` e sem adesão anterior na sessão, o localhost continua sem carregar GTM. Em armazenamento bloqueado, repetir o parâmetro em cada URL. Não usar a opção de teste em URL pública esperando que funcione. Este teste valida banner + contêiner, **não o transporte `/metrics/`**: a verificação pelo gateway ainda será feita após publicação coordenada.

Salvar no espaço de trabalho do GTM e usar **Visualizar**, sem publicar ainda.
O teste do transporte integrado precisa de uma prévia que receba gateway e banner habilitado.
Se só houver produção, coordenar a publicação do banner e a versão do GTM em uma janela de teste, com reversão disponível. Não habilitar a flag isoladamente esperando que ela bloqueie a tag antiga.

Após os testes locais, seguir a [sequência de publicação](../privacidade-e-cookies.md#sequência-de-publicação): primeiro a versão ajustada do GTM, depois o código habilitado, logo em seguida. A pausa temporária na medição é esperada entre as duas publicações. A política permanece rascunho (`approved: false`).

## 5. Testar o contêiner real

Em perfil limpo, sem bloqueadores, conferir Tag Assistant, cookies e rede:

- **Sem escolher:** padrão negado na Inicialização de consentimento, GA4 não disparada. GTM e `/metrics/` podem carregar, mas não eventos Analytics/Ads (`g/collect`, `/metrics/ag/g/c`, DoubleClick/audiences) nem novos identificadores opcionais.
- **Recusar:** negado, sem disparo da GA4; escolha persistida; navegação e formulário funcionam.
- **Só análise:** analytics granted, anúncios denied; um page_view; sem chamadas/cookies de publicidade. Se houver, revisar recursos/destinos antes da liberação.
- **Só publicidade:** analytics denied e GA4 não disparada; este código não cria tags de anúncios.
- **Aceitar tudo:** um contêiner, um page_view por página. Salvar novamente não duplica.
- **Revogar no rodapé Cookies:** atualizar estados, remover identificadores locais conhecidos e recarregar; próxima página sem medição recusada. Examinar também a rede durante a revogação: tags já carregadas podem fazer comunicações técnicas de atualização. Não prometer zero transmissões sem teste.
- **Retornar, navegar ou abrir outra aba:** restaurar escolha, sem liberar categoria revogada.
- **Armazenamento bloqueado, inválido ou expirado:** padrão negado e nova solicitação; escolha atual funciona mesmo sem persistência.
- **Sem JavaScript:** política e site acessíveis; sem evento do banner, GTM deve continuar negado e sem disparar GA4.

Só liberar após validar. Conferir também fora do modo de depuração e com caches limpos; durante a transição pode haver HTML/GTM antigo.

O Cloudflare Web Analytics é separado e não é bloqueado por este banner. Inventariar e avaliar seu tratamento. Dados já enviados e cookies de terceiros não são apagados automaticamente.

## Pendências do texto

Confirmar razão social/CNPJ, destinatário definitivo do FormSubmit, acesso aos leads, guarda e eliminação em fornecedores/e-mails. Preencher `retentionDescription` com critérios reais, aprovar o inventário de cookies e o texto com a YESS, idealmente com revisão jurídica. Só então `approved: true`.

## Referências técnicas

- [Modelos e APIs de consentimento do GTM](https://developers.google.com/tag-platform/tag-manager/templates/consent-apis).
- [APIs e permissões do sandbox](https://developers.google.com/tag-platform/tag-manager/templates/api).
- [Verificação no Tag Assistant](https://support.google.com/analytics/answer/14218557?hl=pt-BR).
- [Google tag gateway — Cloudflare](https://developers.cloudflare.com/google-tag-gateway/).
