import { motion } from 'motion/react'
import { getProjectCover } from '../../data/projectImages'
import type { Project } from '../../data/types'
import { ButtonLink } from './ButtonLink'
import { Chip } from './Chip'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const number = String(index + 1).padStart(2, '0')
  const cover = getProjectCover(project.id)

  return (
    <motion.article
      className="grid gap-8 rounded-lg border border-line bg-panel p-6 transition-colors hover:border-signal/50 md:grid-cols-5 md:p-8"
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="md:col-span-2">
        <p className="font-mono text-label text-signal uppercase">
          {number} // {project.period}
        </p>
        <h3 className="mt-3 text-2xl font-bold tracking-tight">{project.title}</h3>
        <p className="mt-2 text-ink-dim">{project.subtitle}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <li key={item}>
              <Chip>{item}</Chip>
            </li>
          ))}
        </ul>

        {(project.repoUrl || project.demoUrl) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.repoUrl && (
              <ButtonLink
                size="sm"
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Repositorio de ${project.title}`}
              >
                Repositorio
              </ButtonLink>
            )}
            {project.demoUrl && (
              <ButtonLink
                size="sm"
                variant="primary"
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Demo de ${project.title}`}
              >
                Demo
              </ButtonLink>
            )}
          </div>
        )}
      </div>

      <div className="md:col-span-3">
        {cover && (
          <div className="mb-6 aspect-video overflow-hidden rounded-md border border-line bg-panel-2">
            <img
              src={cover}
              alt={`Captura de pantalla de ${project.title}`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top transition-transform duration-500 motion-safe:hover:scale-[1.03]"
            />
          </div>
        )}

        <ul className="space-y-4">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 text-ink-dim">
              <span aria-hidden="true" className="font-mono text-signal">
                ›
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}
