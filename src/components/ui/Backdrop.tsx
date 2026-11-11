// Fondo en CSS puro: aparece al instante y es lo que ven los equipos sin 3D.
const gridLine = '#14181e'

export function Backdrop() {
  const mask = 'radial-gradient(ellipse 70% 60% at 70% 45%, black, transparent)'

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-20"
      style={{
        backgroundImage: `linear-gradient(${gridLine} 1px, transparent 1px), linear-gradient(90deg, ${gridLine} 1px, transparent 1px)`,
        backgroundSize: '56px 56px',
        maskImage: mask,
        WebkitMaskImage: mask,
      }}
    />
  )
}
