import privacy from '@/data/privacy.json'

type Choice = { analytics: boolean; marketing: boolean }
type SavedChoice = Choice & { version: 1; updatedAt: number; expiresAt: number }
const root = document.querySelector<HTMLElement>('[data-cookie-consent]')

if (root?.dataset.cookieEnabled === 'true') {
	const banner = root.querySelector<HTMLElement>('[data-cookie-banner]')!
	const dialog = root.querySelector<HTMLDialogElement>('[data-cookie-dialog]')!
	const analytics = root.querySelector<HTMLInputElement>('[data-cookie-analytics]')!
	const marketing = root.querySelector<HTMLInputElement>('[data-cookie-marketing]')!
	const status = root.querySelector<HTMLElement>('[data-cookie-status]')!
	const key = privacy.consentStorageKey
	let returnFocus: HTMLElement | null = null
	let stored: SavedChoice | null = null

	const parse = (raw: string | null): SavedChoice | null => {
		try {
			const value = JSON.parse(raw ?? 'null')
			if (
				value?.version !== 1 ||
				typeof value.analytics !== 'boolean' ||
				typeof value.marketing !== 'boolean' ||
				!Number.isFinite(value.updatedAt) ||
				!Number.isFinite(value.expiresAt) ||
				value.updatedAt > Date.now() ||
				value.expiresAt <= Date.now() ||
				value.expiresAt <= value.updatedAt ||
				value.expiresAt - value.updatedAt > privacy.consentDurationDays * 86400000
			)
				return null
			return value
		} catch {
			return null
		}
	}
	try {
		stored = parse(localStorage.getItem(key))
	} catch {
		/* Sem armazenamento, cada visita começa sem consentimento. */
	}

	const apply = (choice: Choice) => {
		// A ponte do GTM aplica updateConsentState antes de emitir yess_consent_ready.
		// Nunca carregar outro contêiner: a inserção pertence ao gateway da Cloudflare.
		window.dataLayer = window.dataLayer || []
		window.dataLayer.push({
			event: 'yess_consent_update',
			yess_analytics_consent: choice.analytics,
			yess_marketing_consent: choice.marketing,
		})
	}
	// Só remove identificadores opcionais conhecidos deste domínio; preserva cookies necessários.
	const clearIdentifiers = (choice: Choice) => {
		const names = document.cookie.split(';').map((cookie) => cookie.trim().split('=')[0])
		const domains = location.hostname
			.split('.')
			.map((_, index, parts) => parts.slice(index).join('.'))
		for (const name of names) {
			const removeAnalytics = !choice.analytics && /^(_ga(?:_|$)|_gid$|_gat(?:_|$))/.test(name)
			const removeMarketing = !choice.marketing && /^(_gcl_|_gac_|_fbp$|_fbc$)/.test(name)
			if (!removeAnalytics && !removeMarketing) continue
			const expiry = `${name}=; Max-Age=0; path=/; SameSite=Lax`
			document.cookie = expiry
			for (const domain of domains) document.cookie = `${expiry}; domain=${domain}`
		}
		if (!choice.marketing) {
			try {
				localStorage.removeItem('_gcl_ls')
			} catch {}
		}
	}
	const closeDialog = () => {
		if (dialog.open) dialog.close()
	}
	const save = (choice: Choice) => {
		const previous = stored
		const now = Date.now()
		stored = {
			...choice,
			version: 1,
			updatedAt: now,
			expiresAt: now + privacy.consentDurationDays * 86400000,
		}
		try {
			localStorage.setItem(key, JSON.stringify(stored))
		} catch {
			/* A escolha vale para esta página mesmo se não puder ser salva. */
		}
		clearIdentifiers(choice)
		banner.hidden = true
		closeDialog()
		status.textContent = 'Preferências de cookies atualizadas.'
		// Recarrega ao revogar para descarregar tags já executadas; a próxima carga respeita a nova escolha.
		if (
			previous &&
			((previous.analytics && !choice.analytics) || (previous.marketing && !choice.marketing))
		) {
			apply(choice)
			location.reload()
			return
		}
		apply(choice)
	}
	const openDialog = (trigger: HTMLElement) => {
		returnFocus = trigger
		analytics.checked = stored?.analytics ?? false
		marketing.checked = stored?.marketing ?? false
		dialog.showModal()
		window.lenis?.stop()
	}
	dialog.addEventListener('close', () => {
		window.lenis?.start()
		if (returnFocus && !returnFocus.closest('[hidden]')) returnFocus.focus({ preventScroll: true })
	})
	dialog.addEventListener('keydown', (event) => {
		if (event.key !== 'Tab') return
		const controls = [
			...dialog.querySelectorAll<HTMLElement>('button, a[href], input:not([disabled])'),
		]
		const first = controls[0]
		const last = controls.at(-1)
		if (event.shiftKey && document.activeElement === first) {
			event.preventDefault()
			last?.focus()
		} else if (!event.shiftKey && document.activeElement === last) {
			event.preventDefault()
			first?.focus()
		}
	})
	root
		.querySelectorAll<HTMLButtonElement>('[data-cookie-reject]')
		.forEach((button) =>
			button.addEventListener('click', () => save({ analytics: false, marketing: false })),
		)
	root
		.querySelector('[data-cookie-accept]')
		?.addEventListener('click', () => save({ analytics: true, marketing: true }))
	root
		.querySelector<HTMLElement>('[data-cookie-customize]')
		?.addEventListener('click', (event) => openDialog(event.currentTarget as HTMLElement))
	root
		.querySelector('[data-cookie-save]')
		?.addEventListener('click', () =>
			save({ analytics: analytics.checked, marketing: marketing.checked }),
		)
	root.querySelector('[data-cookie-cancel]')?.addEventListener('click', closeDialog)
	document.querySelectorAll<HTMLElement>('[data-cookie-settings]').forEach((trigger) =>
		trigger.addEventListener('click', (event) => {
			event.preventDefault()
			openDialog(trigger)
		}),
	)
	window.addEventListener('storage', (event) => {
		if (event.key !== key && event.key !== null) return
		const next = event.key === null ? null : parse(event.newValue)
		if (
			stored &&
			((!next?.analytics && stored.analytics) || (!next?.marketing && stored.marketing))
		) {
			const choice = next ?? { analytics: false, marketing: false }
			clearIdentifiers(choice)
			apply(choice)
			location.reload()
			return
		}
		stored = next
		banner.hidden = Boolean(next)
		clearIdentifiers(next ?? { analytics: false, marketing: false })
		apply(next ?? { analytics: false, marketing: false })
	})
	if (stored) {
		clearIdentifiers(stored)
		apply(stored)
	} else {
		clearIdentifiers({ analytics: false, marketing: false })
		apply({ analytics: false, marketing: false })
		banner.hidden = false
	}
}
