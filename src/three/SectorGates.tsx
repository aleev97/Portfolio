import { sections } from '../data/sections'
import { circuitCurve } from './circuitPath'
import { glowOrange } from './colors'

const HALF_WIDTH = 3
const HEIGHT = 3

// Un arco por sección, repartidos de forma pareja (los calibramos en la 8B).
const gates = sections.map((section, index) => {
  const t = (index + 0.5) / sections.length
  const position = circuitCurve.getPointAt(t)
  const tangent = circuitCurve.getTangentAt(t)

  return {
    id: section.id,
    position,
    // Rotación sobre Y que alinea el arco con la dirección de la pista.
    angle: Math.atan2(tangent.x, tangent.z),
  }
})

export function SectorGates() {
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
