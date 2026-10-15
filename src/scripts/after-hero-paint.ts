/** Deixa a hero solicitada pintar antes de preparar animações fora da tela. */
export const afterHeroPaint = (setup: () => void) => {
	const page = document.querySelector('[data-defer-mobile-motion]')
	if (!page || !window.matchMedia('(max-width: 1023px)').matches || window.scrollY > 0) {
		setup()
		return
	}

	const poster = page.querySelector<HTMLImageElement>('[data-service-poster]')
	const decoded = poster ? poster.decode().catch(() => undefined) : Promise.resolve()
	let paintObserver: PerformanceObserver | undefined
	const painted = new Promise<void>((resolve) => {
		if (
			performance.getEntriesByName('first-contentful-paint').length ||
			typeof PerformanceObserver === 'undefined' ||
			!PerformanceObserver.supportedEntryTypes?.includes('paint')
		) {
			resolve()
			return
		}
		paintObserver = new PerformanceObserver((list) => {
			if (list.getEntries().some((entry) => entry.name === 'first-contentful-paint')) {
				paintObserver?.disconnect()
				resolve()
			}
		})
		paintObserver.observe({ type: 'paint', buffered: true })
	})
	let started = false
	const start = () => {
		if (started) return
		started = true
		window.clearTimeout(fallback)
		window.removeEventListener('scroll', start)
		paintObserver?.disconnect()
		setup()
	}
	// Não deixa conteúdo esperando uma foto lenta se a pessoa já começar a navegar.
	const fallback = window.setTimeout(start, 1800)
	window.addEventListener('scroll', start, { once: true, passive: true })
	void Promise.all([decoded, painted]).then(() => {
		// A pintura foi observada; não dependemos apenas de contar frames.
		requestAnimationFrame(() => requestAnimationFrame(start))
	})
}
