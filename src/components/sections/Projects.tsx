import { projects } from "../../data/projects";
import { Section } from "../layout/Section";
import { ProjectCard } from "../ui/ProjectCard";

export function Projects() {
  return (
    <Section id="proyectos" index="03" title="Proyectos">
      <ul className="space-y-6">
        {projects.map((project, index) => (
          <li key={project.id}>
            <ProjectCard project={project} index={index} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
