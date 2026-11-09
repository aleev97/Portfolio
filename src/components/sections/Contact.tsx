import { profile } from "../../data/profile";
import { Section } from "../layout/Section";
import { ButtonLink } from "../ui/ButtonLink";

export function Contact() {
  return (
    <Section id="contacto" index="05" title="Contacto">
      <p className="max-w-xl text-lg text-ink-dim">
        Busco oportunidades como desarrollador {profile.lookingFor}. Si tenés
        una vacante o querés charlar sobre un proyecto, escribime.
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
