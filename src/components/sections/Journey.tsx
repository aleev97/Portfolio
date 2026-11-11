import { useRef } from 'react'
import { journey } from '../../data/journey'
import { gsap, useGSAP } from '../../lib/gsap'
import { Section } from '../layout/Section'
import { Reveal } from '../ui/Reveal'

const dotStyles = {
  education: 'bg-alert',
  project: 'bg-signal',
}

export function Journey() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  // La línea verde se va llenando a medida que se recorre la sección.
  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: 'top 60%',
              end: 'bottom 60%',
              scrub: true,
            },
          },
        )
      })

      return () => mm.revert()
    },
    { scope: wrapperRef },
  )

  return (
    <Section id="recorrido" index="04" title="Recorrido" revealContent={false}>
      <div ref={wrapperRef} className="relative pl-8">
        <div aria-hidden="true" className="absolute top-0 bottom-0 left-0 w-px bg-line" />
        <div
          ref={lineRef}
          aria-hidden="true"
          className="absolute top-0 bottom-0 left-0 w-px origin-top bg-signal"
        />

        <ol className="space-y-10">
          {journey.map((item) => (
            <li key={item.title}>
              <Reveal className="relative">
                <span
                  aria-hidden="true"
                  className={`absolute top-1.5 -left-[2.3rem] size-2.5 rounded-full ring-4 ring-void ${dotStyles[item.kind]}`}
                />

                <p className="font-mono text-label text-ink-dim uppercase">
                  {item.period}
                </p>

                <div className="mt-1 flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  {item.current && (
                    <span className="rounded-full border border-signal/40 px-2 py-0.5 font-mono text-label text-signal uppercase">
                      En curso
                    </span>
                  )}
                </div>

                {item.place && <p className="text-sm text-ink-dim">{item.place}</p>}
                <p className="mt-2 max-w-xl text-ink-dim">{item.description}</p>

                {item.projectId && (
                  <a
                    href={`#${item.projectId}`}
                    aria-label={`Ver el proyecto ${item.title}`}
                    className="mt-3 inline-block font-mono text-label text-signal uppercase underline-offset-4 hover:underline"
                  >
                    Ver proyecto ↓
                  </a>
                )}
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
