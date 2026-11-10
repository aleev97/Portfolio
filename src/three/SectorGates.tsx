import { useMemo } from 'react'
import { sections } from '../data/sections'
import { useScrollStore } from '../store/useScrollStore'
import { CAMERA_PATH_RANGE } from './cameraConfig'
import { circuitCurve } from './circuitPath'
import { glowOrange } from './colors'

const HALF_WIDTH = 3
const HEIGHT = 3

// El Hero no lleva arco: la cámara arranca ahí.
const gateSections = sections.filter((section) => section.id !== 'inicio')

export function SectorGates() {
  const sectionProgress = useScrollStore((state) => state.sectionProgress)

  // Se recalcula solo cuando cambian las medidas de las secciones (poco frecuente).
  const gates = useMemo(
    () =>
      gateSections.flatMap((section) => {
        const progress = sectionProgress[section.id]
        if (progress === undefined) return []

        // Mismo mapeo que usa la cámara: el arco queda donde ella estará
        // cuando el scroll llegue a esa sección.
        const t = progress * CAMERA_PATH_RANGE
        const position = circuitCurve.getPointAt(t)
        const tangent = circuitCurve.getTangentAt(t)

        return [
          {
            id: section.id,
            position,
            // Rotación sobre Y que alinea el arco con la dirección de la pista.
            angle: Math.atan2(tangent.x, tangent.z),
          },
        ]
      }),
    [sectionProgress],
  )

  return (
    <group>
      {gates.map((gate) => (
        <group key={gate.id} position={gate.position} rotation={[0, gate.angle, 0]}>
          <mesh position={[-HALF_WIDTH, HEIGHT / 2, 0]}>
            <cylinderGeometry args={[0.07, 0.07, HEIGHT, 8]} />
            <meshBasicMaterial color={glowOrange} />
          </mesh>
          <mesh position={[HALF_WIDTH, HEIGHT / 2, 0]}>
            <cylinderGeometry args={[0.07, 0.07, HEIGHT, 8]} />
            <meshBasicMaterial color={glowOrange} />
          </mesh>
          <mesh position={[0, HEIGHT, 0]}>
            <boxGeometry args={[HALF_WIDTH * 2 + 0.14, 0.14, 0.14]} />
            <meshBasicMaterial color={glowOrange} />
          </mesh>
        </group>
      ))}
    </group>
  )
}
