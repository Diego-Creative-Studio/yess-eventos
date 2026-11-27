import { hasAnalyticsConsent } from './cookie-consent'

// Não enviar o href: ele contém telefone e pode conter dados do formulário.
const trackClick = (event: MouseEvent) => {
	if (event.defaultPrevented || !hasAnalyticsConsent()) return
	if (!(event.target instanceof Element)) return
	const link = event.target.closest<HTMLAnchorElement>('a[data-whatsapp-position]')
	if (!link) return
	const url = new URL(link.href, window.location.origin)
	if (url.protocol !== 'https:' || url.hostname !== 'wa.me') return
	const position = link.dataset.whatsappPosition
	if (!['formulario', 'rodape', 'processo'].includes(position ?? '')) return
	window.dataLayer = window.dataLayer || []
	window.dataLayer.push({
		event: 'yess_whatsapp_click',
		whatsapp_position: position,
	})
}

document.addEventListener('click', trackClick)
// Clique com o botão do meio também pode abrir uma conversa em outra aba.
document.addEventListener('auxclick', (event) => {
	if (event.button === 1) trackClick(event)
})
