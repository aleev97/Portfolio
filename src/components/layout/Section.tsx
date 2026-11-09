import type { ReactNode } from 'react'
import { Reveal } from '../ui/Reveal'

interface SectionProps {
  id: string
  index: string
  title: string
  children: ReactNode
  revealContent?: boolean
}

export function Section({
  id,
  index,
  title,
  children,
  revealContent = true,
}: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <p className="font-mono text-label text-signal uppercase">{index} //</p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">{title}</h2>
      </Reveal>

      <div className="mt-10">
        {revealContent ? <Reveal delay={0.1}>{children}</Reveal> : children}
      </div>
    </section>
  )
}
