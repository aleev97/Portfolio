import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  index: string
  title: string
  children: ReactNode
}

export function Section({ id, index, title, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <p className="font-mono text-label text-signal uppercase">{index} //</p>
      <h2 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">{title}</h2>
      <div className="mt-10">{children}</div>
    </section>
  )
}
