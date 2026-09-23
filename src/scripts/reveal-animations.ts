import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type AnimationName = 'fade' | 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale'

interface AnimationFrom {
	opacity: number
	x?: number
	y?: number
	scale?: number
}

const getAnimationFrom = (name: AnimationName, distance: number): AnimationFrom => {
	const animations: Record<AnimationName, AnimationFrom> = {
		fade: { opacity: 0 },
		'fade-up': { opacity: 0, y: distance },
		'fade-down': { opacity: 0, y: -distance },
		'fade-left': { opacity: 0, x: -distance },
		'fade-right': { opacity: 0, x: distance },
		scale: { opacity: 0, scale: 0.94 },
	}

	return animations[name] ?? animations.fade
}

const readNumber = (value: string | undefined, fallback: number) => {
	const parsedValue = Number.parseFloat(value ?? '')
	return Number.isFinite(parsedValue) ? parsedValue : fallback
}

gsap.registerPlugin(ScrollTrigger)

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
	const defaultAnimation = (document.body.dataset.animateDefault || 'fade') as AnimationName
	const defaultDuration = readNumber(document.body.dataset.animateDuration, 1)
	const defaultDistance = readNumber(document.body.dataset.animateDistance, 32)
	const defaultStart = document.body.dataset.animateStart || 'top 80%'

	gsap.utils.toArray<HTMLElement>('[data-animate]').forEach((element) => {
		const animation = (element.dataset.animate || defaultAnimation) as AnimationName
		const duration = readNumber(element.dataset.animateDuration, defaultDuration)
		const distance = readNumber(element.dataset.animateDistance, defaultDistance)
		const delay = readNumber(element.dataset.animateDelay, 0)
		const start = element.dataset.animateStart || defaultStart
		const ease = element.dataset.animateEase || 'power2.out'
		const from = getAnimationFrom(animation, distance)

		gsap.fromTo(element, from, {
			opacity: 1,
			...(from.x !== undefined && { x: 0 }),
			...(from.y !== undefined && { y: 0 }),
			...(from.scale !== undefined && { scale: 1 }),
			duration,
			delay,
			ease,
			scrollTrigger: {
				trigger: element,
				start,
				once: element.dataset.animateOnce !== 'false',
			},
		})
	})
}
