import { profile } from "../../data/profile";
import { Section } from "../layout/Section";
import { ButtonLink } from "../ui/ButtonLink";

export function Contact() {
  return (
    <Section id="contacto" index="05" title="Contacto">
      <p className="max-w-xl text-lg text-ink-dim">
        Actualmente estoy buscando oportunidades como desarrollador Frontend o
        Full Stack Junior. Me interesa formar parte de equipos de desarrollo,
        aportar mis conocimientos y seguir creciendo profesionalmente. Si tenés
        una oportunidad, una propuesta o simplemente querés conversar sobre
        tecnología y proyectos, ¡me encantaría conectar!
      </p>

      <a
        href={`mailto:${profile.email}`}
        className="mt-8 inline-block font-mono text-xl break-all transition-colors hover:text-signal sm:text-3xl"
      >
        {profile.email}
      </a>

      <div className="mt-8 flex flex-wrap gap-4">
        <ButtonLink href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </ButtonLink>
        <ButtonLink href={profile.linkedin} target="_blank" rel="noreferrer">
          Linkedin
        </ButtonLink>
        <ButtonLink href={profile.cvUrl} download>
          Descargar CV
        </ButtonLink>
      </div>
    </Section>
  );
}
