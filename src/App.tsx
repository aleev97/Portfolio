import { Header } from './components/layout/Header'
import { Section } from './components/layout/Section'
import { About } from './components/sections/About'
import { Hero } from './components/sections/Hero'
import { TechStack } from './components/sections/TechStack'
import { journey } from './data/journey'
import { profile } from './data/profile'
import { projects } from './data/projects'

function App() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-signal focus:px-4 focus:py-2 focus:text-void"
      >
        Saltar al contenido
      </a>

      <Header />

      <main id="contenido">
        <Hero />
        <About />
        <TechStack />

        <Section id="proyectos" index="03" title="Proyectos">
          <ul className="space-y-4">
            {projects.map((project) => (
              <li key={project.id} className="rounded-lg border border-line bg-panel p-5">
                <p className="font-mono text-label text-ink-dim uppercase">
                  {project.period}
                </p>
                <h3 className="mt-1 text-xl font-semibold">{project.title}</h3>
                <p className="mt-1 text-ink-dim">{project.subtitle}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="recorrido" index="04" title="Recorrido">
          <ol className="space-y-6 border-l border-line pl-6">
            {journey.map((item) => (
              <li key={item.title}>
                <p className="font-mono text-label text-signal uppercase">
                  {item.period}
                </p>
                <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                {item.place && <p className="text-sm text-ink-dim">{item.place}</p>}
                <p className="mt-1 text-ink-dim">{item.description}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="contacto" index="05" title="Contacto">
          <ul className="space-y-2 font-mono">
            <li>
              <a
                className="transition-colors hover:text-signal"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-signal" href={profile.github}>
                GitHub / aleev97
              </a>
            </li>
          </ul>
        </Section>
      </main>
    </>
  )
}

export default App
