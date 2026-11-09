import { useLayoutEffect, useRef } from 'react'
import { Object3D, Vector3 } from 'three'
import type { InstancedMesh } from 'three'
import { circuitCurve } from './circuitPath'

const COUNT_PER_SIDE = 28
const SIDE_OFFSET = 3.4
const POLE_HEIGHT = 2.6

const UP = new Vector3(0, 1, 0)

function buildPoles(): Vector3[] {
  const point = new Vector3()
  const tangent = new Vector3()
  const side = new Vector3()
  const result: Vector3[] = []

  for (const direction of [-1, 1]) {
    for (let i = 0; i < COUNT_PER_SIDE; i++) {
      const t = (i + 0.5) / COUNT_PER_SIDE
      circuitCurve.getPointAt(t, point)
      circuitCurve.getTangentAt(t, tangent)
      side.crossVectors(tangent, UP).normalize()

      result.push(
        new Vector3(
          point.x + side.x * SIDE_OFFSET * direction,
          point.y,
          point.z + side.z * SIDE_OFFSET * direction,
        ),
      )
    }
  }

  return result
}

const poles = buildPoles()

export function TrackLights() {
  const polesRef = useRef<InstancedMesh>(null)
  const headsRef = useRef<InstancedMesh>(null)

  // Se ubican todas las instancias una sola vez, al montar.
  useLayoutEffect(() => {
    const dummy = new Object3D()

    poles.forEach((pole, index) => {
      dummy.position.set(pole.x, pole.y + POLE_HEIGHT / 2, pole.z)
      dummy.updateMatrix()
      polesRef.current?.setMatrixAt(index, dummy.matrix)

      dummy.position.set(pole.x, pole.y + POLE_HEIGHT, pole.z)
      dummy.updateMatrix()
      headsRef.current?.setMatrixAt(index, dummy.matrix)
    })

    if (polesRef.current) polesRef.current.instanceMatrix.needsUpdate = true
    if (headsRef.current) headsRef.current.instanceMatrix.needsUpdate = true
  }, [])

  return (
    <>
      <instancedMesh
        ref={polesRef}
        args={[undefined, undefined, poles.length]}
        frustumCulled={false}
      >
        <cylinderGeometry args={[0.04, 0.04, POLE_HEIGHT, 6]} />
        <meshBasicMaterial color="#2a313b" />
      </instancedMesh>

      <instancedMesh
        ref={headsRef}
        args={[undefined, undefined, poles.length]}
        frustumCulled={false}
      >
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshBasicMaterial color="#c6ff3d" />
      </instancedMesh>
    </>
  )
}
