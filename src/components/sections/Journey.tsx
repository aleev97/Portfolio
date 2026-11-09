import { journey } from "../../data/journey";
import { Section } from "../layout/Section";

const dotStyles = {
  education: "bg-alert",
  project: "bg-signal",
};

export function Journey() {
  return (
    <Section id="recorrido" index="04" title="Recorrido">
      <ol className="space-y-10 border-l border-line pl-8">
        {journey.map((item) => (
          <li key={item.title} className="relative">
            <span
              aria-hidden="true"
              className={`absolute top-1.5 -left-[2.3rem] size-2.5 rounded-full ring-4 ring-void ${dotStyles[item.kind]}`}
            />
            <p className="font-mono text-label text-ink-dim uppercase">
              {item.period}
            </p>
            <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
            {item.place && <p className="text-sm text-ink-dim">{item.place}</p>}
            <p className="mt-2 max-w-xl text-ink-dim">{item.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
