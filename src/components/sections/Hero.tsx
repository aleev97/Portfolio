import { motion } from 'motion/react'
import { useRef } from 'react'
import { profile } from '../../data/profile'
import { projects } from '../../data/projects'
import { gsap, useGSAP } from '../../lib/gsap'
import { fadeUp, staggerContainer } from '../../lib/motion'
import { ButtonLink } from '../ui/ButtonLink'
import { Magnetic } from '../ui/Magnetic'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const readouts = [
    { label: 'Proyectos', value: String(projects.length).padStart(2, '0') },
    { label: 'Base', value: profile.location },
    { label: 'Buscando', value: profile.lookingFor },
  ]

  // Parallax: al salir del Hero, el contenido baja más lento y se desvanece.
  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.to(contentRef.current, {
          yPercent: 18,
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        })
      })

      return () => mm.revert()
    },
    { scope: sectionRef },
  )

  return (
    <motion.section
      ref={sectionRef}
      id="inicio"
      className="mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-6 pt-24 pb-12"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      <div ref={contentRef}>
        <motion.p
          variants={fadeUp}
          className="font-mono text-label text-signal uppercase"
        >
          {profile.role}
        </motion.p>

        <motion.h1 variants={fadeUp} className="mt-4 text-display font-bold">
          {profile.firstName}
          <br />
          {profile.lastName}
        </motion.h1>

        <motion.p variants={fadeUp} className="mt-8 max-w-xl text-lg text-ink-dim">
          {profile.tagline}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
          <Magnetic>
            <ButtonLink variant="primary" href="#proyectos">
              Ver proyectos
            </ButtonLink>
          </Magnetic>
          <ButtonLink href={profile.cvUrl} download>
            Descargar CV
          </ButtonLink>
        </motion.div>

        <motion.dl
          variants={fadeUp}
          className="mt-16 grid gap-6 border-t border-line pt-6 sm:grid-cols-3"
        >
          {readouts.map((item) => (
            <div key={item.label}>
              <dt className="font-mono text-label text-ink-dim uppercase">
                {item.label}
              </dt>
              <dd className="mt-1 font-mono text-sm">{item.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </motion.section>
  )
}
