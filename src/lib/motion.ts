import type { Variants } from 'motion/react'

// Rebote leve: la curva pasa de 1 y vuelve (sensación orgánica).
export const easeBounce: [number, number, number, number] = [0.34, 1.56, 0.64, 1]

// Sin rebote: para tamaños y cosas que no deben "pasarse" (ej. altura del menú).
export const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1]

// Contenedor: no se anima él, solo escalona a sus hijos.
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
}

// Entrada del Hero: el texto se hace visible rápido (opacidad) mientras el
// movimiento conserva su rebote lento. Mejora el LCP sin cambiar la sensación.
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: { duration: 0.5, ease: 'easeOut' },
      y: { duration: 1.4, ease: easeBounce },
    },
  },
}
