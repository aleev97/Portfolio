import { profile } from '../../data/profile'

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 font-mono text-xs text-ink-dim sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>React · TypeScript · Tailwind CSS</p>
        <a href="#inicio" className="transition-colors hover:text-signal">
          Volver arriba ↑
        </a>
      </div>
    </footer>
  )
}
