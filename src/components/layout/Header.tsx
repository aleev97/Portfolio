import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { profile } from '../../data/profile'
import { sections } from '../../data/sections'
import { easeOut } from '../../lib/motion'
import { useScrollStore } from '../../store/useScrollStore'

const links = sections.filter((section) => section.id !== 'inicio')

export function Header() {
  const [open, setOpen] = useState(false)
  const activeSection = useScrollStore((state) => state.activeSection)

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-void/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#inicio" className="font-mono text-sm tracking-wide">
          {profile.name}
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-8">
            {links.map((link) => {
              const isActive = activeSection === link.id

              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? 'location' : undefined}
                    className={`relative font-mono text-label uppercase transition-colors hover:text-signal ${
                      isActive ? 'text-signal' : 'text-ink-dim'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        aria-hidden="true"
                        className="absolute inset-x-0 -bottom-1.5 h-px bg-signal"
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="rounded-md border border-line p-2 transition-colors hover:border-signal md:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? (
            <X size={20} aria-hidden="true" />
          ) : (
            <Menu size={20} aria-hidden="true" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="menu-movil"
            aria-label="Menú móvil"
            className="overflow-hidden border-t border-line bg-void md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: easeOut }}
          >
            <ul>
              {links.map((link) => {
                const isActive = activeSection === link.id

                return (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      aria-current={isActive ? 'location' : undefined}
                      onClick={() => setOpen(false)}
                      className={`block px-6 py-4 font-mono text-label uppercase transition-colors hover:text-signal ${
                        isActive ? 'text-signal' : 'text-ink'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
