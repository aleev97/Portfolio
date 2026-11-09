import { profile } from "../../data/profile";
import { projects } from "../../data/projects";

export function Hero() {
  const readouts = [
    { label: "Proyectos", value: String(projects.length).padStart(2, "0") },
    { label: "Base", value: profile.location },
    { label: "Buscando", value: profile.lookingFor },
  ];

  return (
    <section
      id="inicio"
      className="mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-6 pt-24 pb-12"
    >
      <p className="font-mono text-label text-signal uppercase">
        {profile.role}
      </p>

      <h1 className="mt-4 text-display font-bold">
        {profile.firstName}
        <br />
        {profile.lastName}
      </h1>

      <p className="mt-8 max-w-xl text-lg text-ink-dim">{profile.tagline}</p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#proyectos"
          className="rounded-md bg-signal px-6 py-3 font-mono text-sm font-medium text-void transition-opacity hover:opacity-90"
        >
          Ver proyectos
        </a>
        <a
          href={profile.cvUrl}
          download
          className="rounded-md border border-line px-6 py-3 font-mono text-sm transition-colors hover:border-signal hover:text-signal"
        >
          Descargar CV
        </a>
      </div>

      <dl className="mt-16 grid gap-6 border-t border-line pt-6 sm:grid-cols-3">
        {readouts.map((item) => (
          <div key={item.label}>
            <dt className="font-mono text-label text-ink-dim uppercase">
              {item.label}
            </dt>
            <dd className="mt-1 font-mono text-sm">{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
