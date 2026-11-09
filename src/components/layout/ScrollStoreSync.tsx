import { sections } from '../../data/sections'
import { ScrollTrigger, useGSAP } from '../../lib/gsap'
import { useScrollStore } from '../../store/useScrollStore'

export function ScrollStoreSync() {
  useGSAP(() => {
    const { setProgress, setActiveSection } = useScrollStore.getState()

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
  })

  return null
}
