import { ReactLenis, useLenis } from 'lenis/react'
import type { LenisRef } from 'lenis/react'
import { useReducedMotion } from 'motion/react'
import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import 'lenis/dist/lenis.css'
import { gsap, ScrollTrigger } from '../../lib/gsap'

interface SmoothScrollProps {
  children: ReactNode
}

// Avisa a ScrollTrigger cada vez que Lenis mueve el scroll.
function ScrollTriggerSync() {
  useLenis(() => {
    ScrollTrigger.update()
  })
  return null
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<LenisRef>(null)
  const reduceMotion = useReducedMotion()

  // El ticker de GSAP es el único "reloj": él mueve a Lenis en cada cuadro.
  useEffect(() => {
    const update = (time: number) => {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    return () => gsap.ticker.remove(update)
  }, [])

  // Quien pidió "reducir movimiento" conserva el scroll nativo.
  if (reduceMotion) return <>{children}</>

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{ autoRaf: false, lerp: 0.2, anchors: { offset: -96 } }}
    >
      <ScrollTriggerSync />
      {children}
    </ReactLenis>
  )
}
