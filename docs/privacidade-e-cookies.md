# Privacidade e cookies — implantação

Estado em 19/10/2026: banner habilitado no código para a próxima publicação; **implantação em produção ainda não confirmada**.

A integração agora mantém o Google tag gateway da Cloudflare e o caminho `/metrics/`.
O site não carrega um segundo GTM. Não é necessário excluir a integração da Cloudflare.

Siga o [guia atual de configuração e testes no GTM](gtm/implantacao.md).
O código da ponte está em [yess-consent-template.js](gtm/yess-consent-template.js), para colar em um **modelo de tag**, não em HTML personalizado.

## Confirmado pela YESS

- Canal de privacidade: `contato@yessproducoes.com.br`.
- Formulário via FormSubmit: somente orçamento e atendimento, sem campanhas ou mensagens promocionais.
- Make e Google Sheets não foram implementados.
- GTM `GTM-KR79MRTC`, Analytics `G-9K9X5CGTWW`.
- Nos testes enviados em 19/10 pelo Tag Assistant, o espaço de trabalho ajustado definiu o padrão negado. No localhost, recusar, análise isolada, aceite completo e revogar produziram os estados esperados. Após recusar, não houve `collect` na captura e só permaneceu o cookie de depuração; com análise isolada apareceram cookies de Analytics, sem correspondências no filtro publicitário utilizado. Isso não substitui testar o gateway em produção.
- A auditoria de 16/10 observou identificadores de Analytics/publicidade e chamadas do Google antes da escolha. Isso não comprova campanhas ativas.
- Cloudflare Web Analytics é separado: seu beacon não é bloqueado por este banner e precisa de avaliação própria.

## Configuração e pendências

- `trackingEnabled: true`: o próximo build inclui o banner em produção. O bloqueio da medição depende também da versão ajustada do GTM; a flag sozinha não controla tags externas antigas.
- `approved: false`: política como rascunho, noindex e fora do sitemap.
- `consentDurationDays: 180`: validade técnica da preferência, não prazo de guarda de leads.
- Confirmar razão social/CNPJ, destinatário definitivo do formulário, acesso aos dados, retenção, exclusão e fornecedores.
- `retentionDescription` contém uma proposta de critério por finalidade: atender/negociar, excluir dados desnecessários após encerrar a finalidade e separar registros de contratação/obrigações aplicáveis. A adoção prática ainda precisa ser confirmada pela YESS. Os 30 dias foram sugeridos por Diego, não confirmados pelos responsáveis; não foram publicados como compromisso nem implementados como exclusão automática.
- Acesso aos leads informado: responsáveis pela gestão e atendimento da YESS, pelo e-mail de contato. O destinatário definitivo do endpoint FormSubmit ainda precisa de confirmação; o texto não afirma que a alteração de roteamento já ocorreu.
- Cloudflare Web Analytics explicado separadamente na política, com atribuição das informações ao fornecedor e indicação de que o banner não controla esse beacon.
- Não mudar as flags apenas para ocultar os avisos. Ativação do banner e configuração do GTM precisam ser coordenadas e testadas.

Página e banner sozinhos não garantem conformidade.

## Sequência de publicação

1. Código/build preparado, com cópia da versão anterior do site e exportação do GTM disponíveis.
2. Publicar no GTM a configuração testada. Até o novo banner chegar, a medição poderá ficar pausada; o site continua funcionando.
3. Publicar este código logo em seguida, sem alterar a Cloudflare ou remover `/metrics/`.
4. Em perfil limpo, conferir no domínio real antes da escolha, recusa, análise isolada, aceite completo, persistência e revogação. Examinar também os endpoints do gateway, não apenas `collect`.
5. Conferir fora de Visualizar, evitando concluir com base só na versão de depuração. Se houver falha, manter a medição bloqueada enquanto investiga; não restaurar só a tag antiga incondicional para contornar o consentimento.

A política continua sendo rascunho público com aviso de pendências e noindex, conforme solicitado; não está aprovada juridicamente nem pronta para aprovação final da entrega.

## Referências

- [LGPD](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm).
- [Guia de cookies da ANPD](https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia_orientativo_cookies_e_protecao_de_dados_pessoais).
- [Privacidade do FormSubmit](https://formsubmit.co/privacy.pdf).
