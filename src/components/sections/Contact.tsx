import { contactLinks } from '../../data/contactLinks'
import { profile } from '../../data/profile'
import { Section } from '../layout/Section'
import { ButtonLink } from '../ui/ButtonLink'
import { CopyButton } from '../ui/CopyButton'

const mailto = `mailto:${profile.email}?subject=${encodeURIComponent('Contacto desde tu portfolio')}`

export function Contact() {
  return (
    <Section id="contacto" index="05" title="Contacto">
      <p className="text-4xl font-bold tracking-tight md:text-6xl">¿Hablamos?</p>

      <p className="mt-6 max-w-xl text-lg text-ink-dim">
        Actualmente estoy buscando oportunidades como desarrollador Frontend o Full Stack
        Junior. Me interesa formar parte de equipos de desarrollo, aportar mis
        conocimientos y seguir creciendo profesionalmente. Si tenés una oportunidad, una
        propuesta o simplemente querés conversar sobre tecnología y proyectos, ¡me
        encantaría conectar! {profile.lookingFor}.
      </p>

      <a
        href={mailto}
        className="mt-8 inline-block font-mono text-xl break-all transition-colors hover:text-signal sm:text-3xl"
      >
        {profile.email}
      </a>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <ButtonLink variant="primary" href={profile.cvUrl} download>
          Descargar CV
        </ButtonLink>

        <CopyButton text={profile.email} label="Copiar correo" />

        {contactLinks.map((link) => (
          <ButtonLink key={link.label} href={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </ButtonLink>
        ))}
      </div>
    </Section>
  )
}
