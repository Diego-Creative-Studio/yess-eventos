import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { Flip } from 'gsap/Flip'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin, Flip)

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

if (!reduceMotion) {
	void document.fonts.ready.then(() => {
		gsap.utils.toArray<HTMLElement>('[data-motion-title]').forEach((title) => {
			SplitText.create(title, {
				type: 'lines',
				mask: 'lines',
				autoSplit: true,
				onSplit(self) {
					return gsap.fromTo(
						self.lines,
						{
							yPercent: 115,
							autoAlpha: 0,
							rotateX: -8,
							transformOrigin: '50% 100%',
						},
						{
							yPercent: 0,
							autoAlpha: 1,
							rotateX: 0,
							duration: 0.9,
							stagger: 0.11,
							ease: 'power4.out',
							onComplete: () => {
								gsap.set(self.lines, { clearProps: 'opacity,visibility,transform' })
							},
							...(title.hasAttribute('data-motion-immediate')
								? {}
								: {
										scrollTrigger: {
											trigger: title,
											start: title.dataset.motionStart || 'top 86%',
											once: true,
										},
									}),
						},
					)
				},
			})
		})
	})

	gsap.utils.toArray<HTMLElement>('[data-motion-image]').forEach((frame) => {
		const image = frame.querySelector<HTMLElement>('img')
		const timeline = gsap.timeline({
			scrollTrigger: { trigger: frame, start: 'top 88%', once: true },
		})

		timeline.fromTo(
			frame,
			{ clipPath: 'inset(8% 8% 8% 8% round 1.5rem)' },
			{ clipPath: 'inset(0% 0% 0% 0% round 1.5rem)', duration: 1.05, ease: 'power3.out' },
		)

		if (image) {
			timeline.fromTo(image, { scale: 1.12 }, { scale: 1, duration: 1.25, ease: 'power3.out' }, 0)
		}
	})

	gsap.utils.toArray<HTMLElement>('[data-motion-parallax]').forEach((frame) => {
		const image = frame.querySelector<HTMLElement>('img')
		if (!image) return

		gsap.fromTo(
			image,
			{ yPercent: -5 },
			{
				yPercent: 5,
				ease: 'none',
				scrollTrigger: {
					trigger: frame,
					start: 'top bottom',
					end: 'bottom top',
					scrub: 0.7,
				},
			},
		)
	})

	const imageHoverMedia = gsap.matchMedia()
	imageHoverMedia.add('(hover: hover)', () => {
		const cleanups: Array<() => void> = []

		gsap.utils.toArray<HTMLElement>('[data-motion-image]').forEach((frame) => {
			const image = frame.querySelector<HTMLElement>('img')
			if (!image) return

			const handleEnter = () => {
				gsap.to(image, { scale: 1.04, duration: 0.5, ease: 'power3.out', overwrite: 'auto' })
			}

			const handleLeave = () => {
				gsap.to(image, { scale: 1, duration: 0.55, ease: 'power3.out', overwrite: 'auto' })
			}

			frame.addEventListener('pointerenter', handleEnter)
			frame.addEventListener('pointerleave', handleLeave)
			cleanups.push(() => {
				frame.removeEventListener('pointerenter', handleEnter)
				frame.removeEventListener('pointerleave', handleLeave)
			})
		})

		return () => cleanups.forEach((cleanup) => cleanup())
	})

	gsap.utils.toArray<HTMLElement>('[data-motion-icon]').forEach((icon) => {
		const strokes = icon.querySelectorAll<SVGGeometryElement>('path[stroke], line, polyline, rect')
		const fills = icon.querySelectorAll<SVGGraphicsElement>('path[fill]:not([fill="none"])')
		const timeline = gsap.timeline({
			scrollTrigger: { trigger: icon, start: 'top 90%', once: true },
		})

		if (strokes.length) {
			timeline.from(strokes, {
				drawSVG: 0,
				duration: 0.75,
				stagger: 0.06,
				ease: 'power2.out',
			})
		}

		if (fills.length) {
			timeline.from(
				fills,
				{
					autoAlpha: 0,
					scale: 0.75,
					transformOrigin: '50% 50%',
					duration: 0.45,
					stagger: 0.04,
					ease: 'back.out(1.7)',
				},
				strokes.length ? '-=0.25' : 0,
			)
		}
	})

	gsap.utils.toArray<HTMLElement>('[data-motion-process]').forEach((process) => {
		const nodes = process.querySelectorAll<HTMLElement>('[data-motion-process-node]')
		const lines = process.querySelectorAll<HTMLElement>('[data-motion-process-line]')

		if (nodes.length) {
			gsap.fromTo(
				nodes,
				{ scale: 0.55, boxShadow: '0 0 0 0 rgb(38 120 255 / 0)' },
				{
					scale: 1,
					boxShadow: '0 0 0 8px rgb(38 120 255 / 0)',
					duration: 0.55,
					stagger: 0.18,
					ease: 'back.out(2)',
					scrollTrigger: { trigger: process, start: 'top 76%', once: true },
				},
			)
		}

		if (lines.length) {
			gsap.from(lines, {
				scaleX: 0,
				transformOrigin: '0% 50%',
				duration: 0.7,
				stagger: 0.14,
				ease: 'power3.inOut',
				scrollTrigger: { trigger: process, start: 'top 78%', once: true },
			})
		}
	})

	const magneticMedia = gsap.matchMedia()
	magneticMedia.add('(min-width: 1024px) and (hover: hover)', () => {
		const cleanups: Array<() => void> = []

		gsap.utils.toArray<HTMLElement>('[data-magnetic]').forEach((element) => {
			const moveX = gsap.quickTo(element, 'x', { duration: 0.35, ease: 'power3.out' })
			const moveY = gsap.quickTo(element, 'y', { duration: 0.35, ease: 'power3.out' })

			const handleMove = (event: PointerEvent) => {
				const bounds = element.getBoundingClientRect()
				moveX((event.clientX - (bounds.left + bounds.width / 2)) * 0.16)
				moveY((event.clientY - (bounds.top + bounds.height / 2)) * 0.2)
			}

			const handleLeave = () => {
				moveX(0)
				moveY(0)
			}

			element.addEventListener('pointermove', handleMove)
			element.addEventListener('pointerleave', handleLeave)
			cleanups.push(() => {
				element.removeEventListener('pointermove', handleMove)
				element.removeEventListener('pointerleave', handleLeave)
			})
		})

		return () => cleanups.forEach((cleanup) => cleanup())
	})

	gsap.utils.toArray<HTMLButtonElement>('[data-flip-detail]').forEach((detail) => {
		const toggle = () => {
			const state = Flip.getState(detail)
			const expanded = detail.classList.toggle('is-expanded')
			detail.setAttribute('aria-expanded', String(expanded))
			Flip.from(state, { duration: 0.75, ease: 'power3.inOut', scale: true, simple: true })
		}

		detail.addEventListener('click', toggle)
		detail.addEventListener('keydown', (event) => {
			if (event.key === 'Escape' && detail.classList.contains('is-expanded')) toggle()
		})
	})
}
