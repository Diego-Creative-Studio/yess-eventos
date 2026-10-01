import Lenis from 'lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const lenis = new Lenis({ autoRaf: true })

lenis.on('scroll', ScrollTrigger.update)

window.lenis = lenis
