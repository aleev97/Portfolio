import { useScrollStore } from '../../store/useScrollStore'

export function ScrollDebug() {
  const progress = useScrollStore((state) => state.progress)
  const activeSection = useScrollStore((state) => state.activeSection)

  return (
    <div className="fixed bottom-4 left-4 z-50 rounded-md border border-line bg-panel/90 px-3 py-2 font-mono text-xs text-ink-dim">
      <p>progress: {(progress * 100).toFixed(1)}%</p>
      <p>section: {activeSection}</p>
    </div>
  )
}
