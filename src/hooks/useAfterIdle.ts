import { useEffect, useState } from 'react'

// Devuelve true cuando el navegador está desocupado (o pasó el tiempo máximo).
export function useAfterIdle(timeout = 2000): boolean {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const start = () => setReady(true)

    // Safari no tiene requestIdleCallback: usamos un temporizador corto.
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(start, { timeout })
      return () => window.cancelIdleCallback(id)
    }

    const id = window.setTimeout(start, 300)
    return () => window.clearTimeout(id)
  }, [timeout])

  return ready
}
