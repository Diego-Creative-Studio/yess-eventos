/// <reference path="../.astro/types.d.ts" />

interface Window {
	dataLayer?: unknown[]
	gtag?: (...args: unknown[]) => void
	lenis?: {
		resize: () => void
		scrollTo: (
			target: string | HTMLElement,
			opts?: { offset?: number; immediate?: boolean; onComplete?: () => void },
		) => void
		stop: () => void
		start: () => void
	}
}
