import { profile } from '../../data/profile'
import { profilePhoto } from '../../data/profilePhoto'
import { Section } from '../layout/Section'

export function About() {
  return (
    <Section id="sobre-mi" index="01" title="Sobre mí">
      <div className="grid gap-12 md:grid-cols-12">
        {profilePhoto && (
          <div className="md:col-span-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-line bg-panel">
              <img
                src={profilePhoto}
                alt={`Retrato de ${profile.name}`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-top"
              />

              {/* Marcas de esquina: decoración, no aportan información */}
              <span
                aria-hidden="true"
                className="absolute top-3 left-3 size-5 border-t-2 border-l-2 border-signal"
              />
              <span
                aria-hidden="true"
                className="absolute top-3 right-3 size-5 border-t-2 border-r-2 border-signal"
              />
              <span
                aria-hidden="true"
                className="absolute bottom-3 left-3 size-5 border-b-2 border-l-2 border-signal"
              />
              <span
                aria-hidden="true"
                className="absolute right-3 bottom-3 size-5 border-r-2 border-b-2 border-signal"
              />
            </div>
          </div>
        )}

        <div className={`space-y-8 ${profilePhoto ? 'md:col-span-8' : 'md:col-span-12'}`}>
          <p className="max-w-2xl text-lg text-ink-dim">{profile.summary}</p>

          <dl className="max-w-2xl space-y-5 rounded-lg border border-line bg-panel p-6">
            {profile.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-label text-signal uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}
