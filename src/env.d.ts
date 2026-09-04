/// <reference path="../.astro/types.d.ts" />

interface Window {
	lenis?: {
		scrollTo: (
			target: string | HTMLElement,
			opts?: { offset?: number; immediate?: boolean; onComplete?: () => void },
		) => void
	}
}
