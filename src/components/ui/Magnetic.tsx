import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'
import { useRef } from 'react'
import type { PointerEvent as ReactPointerEvent, ReactNode } from 'react'

interface MagneticProps {
  children: ReactNode
  strength?: number
}

export function Magnetic({ children, strength = 0.3 }: MagneticProps) {
  const areaRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.2 })
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.2 })

  const handleMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType !== 'mouse' || !areaRef.current) return

    const rect = areaRef.current.getBoundingClientRect()
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength)
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div
      ref={areaRef}
      className="inline-block"
      onPointerMove={handleMove}
      onPointerLeave={reset}
    >
      <motion.div style={{ x: springX, y: springY }}>{children}</motion.div>
    </div>
  )
}
