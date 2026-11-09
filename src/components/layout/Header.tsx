import { profile } from '../../data/profile'
import { sections } from '../../data/sections'

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-void/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#inicio" className="font-mono text-sm tracking-wide">
          {profile.name}
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-8">
            {sections
              .filter((section) => section.id !== 'inicio')
              .map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="font-mono text-label text-ink-dim uppercase transition-colors hover:text-signal"
                  >
                    {section.label}
                  </a>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
