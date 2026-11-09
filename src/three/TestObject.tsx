import { useFrame, useThree } from '@react-three/fiber'
import { useReducedMotion } from 'motion/react'
import { useRef } from 'react'
import type { Group } from 'three'

export function TestObject() {
  const groupRef = useRef<Group>(null)
  const viewport = useThree((state) => state.viewport)
  const reduceMotion = useReducedMotion()

  // En pantallas anchas va a la derecha; en angostas, centrado y más chico.
  const isWide = viewport.width > 6

  useFrame((_, delta) => {
    if (reduceMotion || !groupRef.current) return

    groupRef.current.rotation.x += delta * 0.15
    groupRef.current.rotation.y += delta * 0.25
  })

  return (
    <group ref={groupRef} position={[isWide ? 2.4 : 0, 0, 0]} scale={isWide ? 1 : 0.7}>
      {/* Cuerpo sólido que reacciona a la luz */}
      <mesh>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshStandardMaterial
          color="#171a20"
          metalness={0.6}
          roughness={0.35}
          flatShading
        />
      </mesh>

      {/* Malla de alambre encima, ligeramente más grande */}
      <mesh scale={1.002}>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshBasicMaterial color="#c6ff3d" wireframe transparent opacity={0.45} />
      </mesh>
    </group>
  )
}
