import { profile } from "../../data/profile";
import { Section } from "../layout/Section";

export function About() {
  return (
    <Section id="sobre-mi" index="01" title="Sobre mí">
      <div className="grid gap-12 md:grid-cols-5">
        <p className="text-lg text-ink-dim md:col-span-3">{profile.summary}</p>

        <dl className="space-y-5 rounded-lg border border-line bg-panel p-6 md:col-span-2">
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
    </Section>
  );
}
