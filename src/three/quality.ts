export type Quality = 'low' | 'high'

type NavigatorWithHints = Navigator & {
  deviceMemory?: number
  connection?: { saveData?: boolean; effectiveType?: string }
}

function detectQuality(): Quality {
  const isSmallScreen = window.matchMedia('(max-width: 768px)').matches
  const isTouch = window.matchMedia('(pointer: coarse)').matches
  const cores = navigator.hardwareConcurrency ?? 8
  const memory = (navigator as NavigatorWithHints).deviceMemory ?? 8

  return isSmallScreen || isTouch || cores <= 4 || memory <= 4 ? 'low' : 'high'
}

function detectWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl2') ?? canvas.getContext('webgl')

    // Se libera el contexto de prueba: los navegadores limitan cuántos pueden existir.
    gl?.getExtension('WEBGL_lose_context')?.loseContext()

    return Boolean(gl)
  } catch {
    return false
  }
}

function detectDataSaver(): boolean {
  const connection = (navigator as NavigatorWithHints).connection

  return (
    Boolean(connection?.saveData) ||
    connection?.effectiveType === '2g' ||
    connection?.effectiveType === 'slow-2g'
  )
}

// Se deciden una sola vez, al cargar el módulo.
export const quality: Quality = detectQuality()
export const canRender3D: boolean = detectWebGL() && !detectDataSaver()
