import { sections } from '../../data/sections'
import { ScrollTrigger, useGSAP } from '../../lib/gsap'
import { useScrollStore } from '../../store/useScrollStore'

export function ScrollStoreSync() {
  useGSAP(() => {
    const { setProgress, setActiveSection, setSectionProgress } =
      useScrollStore.getState()

    // Progreso global de la página, de 0 a 1.
    ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => setProgress(self.progress),
    })

    // Sección activa: la que ocupa la línea del 50% de la pantalla.
    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (!element) return

      ScrollTrigger.create({
        trigger: element,
        start: 'top 50%',
        end: 'bottom 50%',
        onToggle: (self) => {
          if (self.isActive) setActiveSection(id)
        },
      })
    })

    // Progreso de scroll al que cada sección llega a su lugar (para ubicar los arcos 3D).
    const measureSections = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      if (maxScroll <= 0) return

      const next: Record<string, number> = {}

      sections.forEach(({ id }) => {
        const element = document.getElementById(id)
        if (!element) return

        const top = element.getBoundingClientRect().top + window.scrollY
        const progress = (top - window.innerHeight * 0.35) / maxScroll
        next[id] = Math.min(1, Math.max(0, progress))
      })

      setSectionProgress(next)
    }

    measureSections()
    ScrollTrigger.addEventListener('refresh', measureSections)

    // Las fuentes cambian el tamaño del texto: hay que recalcular al terminar de cargar.
    void document.fonts.ready.then(() => ScrollTrigger.refresh())

    return () => ScrollTrigger.removeEventListener('refresh', measureSections)
  })

  return null
}
