import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { easeBounce } from '../../lib/motion'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: easeBounce, delay }}
    >
      {children}
    </motion.div>
  )
}
