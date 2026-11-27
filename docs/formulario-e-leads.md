# Formulário e controle de contatos

## Fluxo preparado

O POST nativo continua indo ao FormSubmit, com o CAPTCHA padrão e o honeypot
`_honey` preservados. O campo `_webhook` solicita o encaminhamento ao Make;
não há uma segunda requisição do navegador ao Make. O e-mail continua sob
responsabilidade do FormSubmit. Uma linha na planilha não comprova entrega do e-mail.

O webhook só é incluído nos builds de produção; `pnpm dev` não inclui esse campo.
Prévias de um build de produção incluem o webhook: não enviar testes sem coordenação.
`source_page` contém somente o caminho da página, sem a query string.

## Make: ajustes obrigatórios antes de publicar

1. Manter o cenário desativado até revisar o mapeamento.
2. No módulo Google Sheets / Add a Row, usar **Value input option: Raw**.
   Não usar `User entered` para conteúdo de visitantes: mensagens como `=1+1`
   devem ser armazenadas literalmente, nunca interpretadas como fórmula.
3. Para Data de recebimento, usar
   `formatDate(now; "DD/MM/YYYY HH:mm:ss"; "America/Sao_Paulo")`.
   Com Raw, essa coluna contém texto formatado, não uma data numérica nativa.
4. Para Data do evento, usar
   `formatDate(parseDate(1.form_data.date; "YYYY-MM-DD"); "DD/MM/YYYY")`.
   Confirmar que `1` é o módulo Webhooks. Com Raw, armazenar como texto.
5. Preservar o telefone como texto. Origem deve ser o valor fixo `Formulário`,
   e o status inicial deve ser o valor fixo `Novo`.
6. Nome, telefone, e-mail, serviço e cidade recebem, respectivamente,
   `form_data.name`, `phone`, `email`, `services` e `location`.
7. Antes do Sheets, filtrar o formato e os limites esperados: nome não vazio
   até 120 caracteres; telefone não vazio até 30; e-mail opcional até 200;
   local não vazio até 160; data válida em YYYY-MM-DD; serviço pertencente às
   opções do formulário. Validar a estrutura real de múltiplos serviços antes
   de definir o filtro: o provedor pode representá-los como lista ou texto.
   Não confiar apenas na validação do navegador.
8. Configurar notificação de falhas do cenário e revisar a retenção do
   histórico do Make e o acesso à planilha com os responsáveis.

## Limites de segurança

O endereço `_webhook` é visível no HTML público. Não é segredo nem prova de que
uma chamada veio do FormSubmit. Não colocar credenciais do Google ou chaves de
API nesse campo. Filtros de campos reduzem entradas inválidas, mas não autenticam
a origem de uma chamada. Se houver abuso, será necessário um recebimento
autenticado/controlado no servidor ou um conector com autenticação verificada.
Os filtros e a gravação Raw dependem da configuração externa do Make: o código
do site não consegue garantir esses controles.

Não registrar cliques de WhatsApp como contatos recebidos. Com o WhatsApp comum,
os contatos confirmados são cadastrados manualmente na planilha.

## Verificação de publicação

- [ ] Conferir Raw com um dado fictício começando com `=` e telefone com zeros.
- [ ] Conferir datas e hora de São Paulo.
- [ ] Ativar o cenário imediatamente antes do teste coordenado de produção.
- [ ] Publicar o site; enviar um pedido identificado como teste, com CAPTCHA.
- [ ] Confirmar e-mail na caixa destinatária e uma linha correta na planilha.
- [ ] Testar múltiplos serviços e verificar ausência de duplicação.
- [ ] Excluir as linhas de teste e confirmar acompanhamento de falhas.

O teste manual do webhook com PowerShell valida Make → Sheets, não a integração
FormSubmit → Make nem a entrega do e-mail. Até a conclusão dos itens acima, a
integração está preparada, não validada de ponta a ponta.

## Referências

- [Webhook do FormSubmit](https://formsubmit.co/documentation).
- [Google Sheets no Make](https://apps.make.com/google-sheets).
- [RAW e USER_ENTERED na API do Sheets](https://developers.google.com/workspace/sheets/api/reference/rest/v4/ValueInputOption).
