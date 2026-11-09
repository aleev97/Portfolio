import type { Variants } from 'motion/react'

// Curva cubic-bezier: arranque rápido y frenado suave (sensación "precisa").
export const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1]

// Contenedor: no se anima él, solo escalona a sus hijos.
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

// Hijo: aparece subiendo desde abajo.
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
}
