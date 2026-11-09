import { BufferGeometry, Float32BufferAttribute, Vector3 } from 'three'
import type { Curve } from 'three'

const UP = new Vector3(0, 1, 0)

interface RibbonOptions {
  curve: Curve<Vector3>
  segments: number
  width: number
  offset?: number
  y?: number
  dashPeriod?: number
  dashOn?: number
  dashPhase?: number
}

/**
 * Construye una cinta plana que sigue una curva.
 * - width: ancho de la cinta
 * - offset: desplazamiento lateral respecto de la curva (negativo = izquierda)
 * - dashPeriod / dashOn / dashPhase: patrón de rayas (cuántos segmentos se
 *   dibujan de cada período, y con qué desfase)
 */
export function createRibbonGeometry({
  curve,
  segments,
  width,
  offset = 0,
  y = 0,
  dashPeriod = 0,
  dashOn = 0,
  dashPhase = 0,
}: RibbonOptions): BufferGeometry {
  const point = new Vector3()
  const tangent = new Vector3()
  const side = new Vector3()

  const positions: number[] = []
  const indices: number[] = []

  const leftDistance = offset - width / 2
  const rightDistance = offset + width / 2

  // Dos vértices (izquierda y derecha) por cada punto de la curva.
  for (let i = 0; i <= segments; i++) {
    const t = i / segments
    curve.getPointAt(t, point)
    curve.getTangentAt(t, tangent)
    side.crossVectors(tangent, UP).normalize()

    positions.push(
      point.x + side.x * leftDistance,
      point.y + y,
      point.z + side.z * leftDistance,
      point.x + side.x * rightDistance,
      point.y + y,
      point.z + side.z * rightDistance,
    )
  }

  // Dos triángulos por tramo, saltando los que quedan fuera del patrón de rayas.
  for (let i = 0; i < segments; i++) {
    if (dashPeriod > 0 && (i + dashPhase) % dashPeriod >= dashOn) continue

    const a = i * 2
    indices.push(a, a + 2, a + 1, a + 1, a + 2, a + 3)
  }

  const geometry = new BufferGeometry()
  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3))
  geometry.setIndex(indices)

  return geometry
}
