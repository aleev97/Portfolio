import { exploring, stackGroups } from '../../data/stack'
import { Section } from '../layout/Section'
import { Chip } from '../ui/Chip'

export function TechStack() {
  return (
    <Section id="tecnologias" index="02" title="Tecnologías">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stackGroups.map((group) => (
          <article
            key={group.label}
            className="rounded-lg border border-line bg-panel p-5"
          >
            <h3 className="font-mono text-label text-ink-dim uppercase">{group.label}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item}>
                  <Chip>{item}</Chip>
                </li>
              ))}
            </ul>
          </article>
        ))}

        <article className="rounded-lg border border-dashed border-alert/40 p-5">
          <h3 className="font-mono text-label text-alert uppercase">Explorando</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {exploring.map((item) => (
              <li key={item}>
                <Chip variant="exploring">{item}</Chip>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  )
}
