# Medição de cliques no WhatsApp

O site emite `yess_whatsapp_click` na dataLayer apenas com análise autorizada.
`whatsapp_position` indica `formulario`, `rodape` ou `processo`. Cliques anteriores
ao aceite não são guardados nem reenviados. Não há envio direto ao Make/Sheets:
o evento mede intenção de contato, não uma mensagem recebida ou um lead confirmado.

## Configurar no GTM

1. Criar variável da camada de dados (versão 2), nome `YESS — Posição WhatsApp`,
   chave `whatsapp_position`.
2. Criar acionador de evento personalizado com nome exato `yess_whatsapp_click`.
   Usar alguns eventos: `{{YESS — Análise permitida}}` igual a `true`.
3. Criar tag Google Analytics: evento do GA4, usando o ID de medição existente.
   Nome do evento: `whatsapp_click`. Parâmetro `whatsapp_position` recebe
   `{{YESS — Posição WhatsApp}}`. Usar o acionador do passo 2 e exigir consentimento
   adicional `analytics_storage`. Manter uma vez por evento, não uma vez por página.
4. Não mapear Click URL, href, telefone, texto do link ou valores do formulário.
   Revisar a medição otimizada de cliques de saída do GA4: ela pode coletar o
   endereço wa.me com a mensagem preenchida. Desativar essa coleta automática
   de saída para evitar esse envio e a contagem paralela de cliques genéricos.
5. Na prévia, recusar análise e clicar: nenhum `yess_whatsapp_click` deve ser emitido.
   Aceitar análise, clicar: um evento e um disparo da tag por clique.
   Revogar análise e conferir novamente que não dispara. A conversa deve continuar
   abrindo em todos os casos. Conferir também o clique no ícone dentro do botão.
6. Publicar o código e o contêiner após a validação. Confirmar `whatsapp_click`
   no Tempo real/DebugView do GA4. O código sozinho não cria a tag no GTM.

Para detalhar relatórios por posição, cadastrar no GA4 a dimensão personalizada
de escopo Evento `whatsapp_position`. Nomear a métrica como cliques, não leads.

Referência: [dataLayer do Google Tag Manager](https://developers.google.com/tag-platform/tag-manager/datalayer).
