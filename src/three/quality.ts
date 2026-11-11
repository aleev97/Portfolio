export type Quality = 'low' | 'high'

type NavigatorWithMemory = Navigator & { deviceMemory?: number }

function detectQuality(): Quality {
  const isSmallScreen = window.matchMedia('(max-width: 768px)').matches
  const isTouch = window.matchMedia('(pointer: coarse)').matches
  const cores = navigator.hardwareConcurrency ?? 8
  const memory = (navigator as NavigatorWithMemory).deviceMemory ?? 8

  return isSmallScreen || isTouch || cores <= 4 || memory <= 4 ? 'low' : 'high'
}

// Se decide una sola vez, al cargar el módulo.
export const quality: Quality = detectQuality()
