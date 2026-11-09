import { motion } from 'motion/react'
import { profile } from '../../data/profile'
import { projects } from '../../data/projects'
import { fadeUp, staggerContainer } from '../../lib/motion'
import { ButtonLink } from '../ui/ButtonLink'

export function Hero() {
  const readouts = [
    { label: 'Proyectos', value: String(projects.length).padStart(2, '0') },
    { label: 'Base', value: profile.location },
    { label: 'Buscando', value: profile.lookingFor },
  ]

  return (
    <motion.section
      id="inicio"
      className="mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-6 pt-24 pb-12"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      <motion.p variants={fadeUp} className="font-mono text-label text-signal uppercase">
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

      <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
        <ButtonLink variant="primary" href="#proyectos">
          Ver proyectos
        </ButtonLink>
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
            <dt className="font-mono text-label text-ink-dim uppercase">{item.label}</dt>
            <dd className="mt-1 font-mono text-sm">{item.value}</dd>
          </div>
        ))}
      </motion.dl>
    </motion.section>
  )
}
