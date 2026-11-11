import { projects } from '../../data/projects'
import { Section } from '../layout/Section'
import { ProjectCard } from '../ui/ProjectCard'
import { Reveal } from '../ui/Reveal'

export function Projects() {
  return (
    <Section id="proyectos" index="03" title="Proyectos" revealContent={false}>
      <ul className="space-y-6">
        {projects.map((project, index) => (
          <li key={project.id} id={project.id} className="scroll-mt-24">
            <Reveal>
              <ProjectCard project={project} index={index} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
