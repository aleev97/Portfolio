import { useFrame } from '@react-three/fiber'
import { useReducedMotion } from 'motion/react'
import { useRef } from 'react'
import { MathUtils, Vector3 } from 'three'
import { useScrollStore } from '../store/useScrollStore'
import { circuitCurve } from './circuitPath'

const UP = new Vector3(0, 1, 0)

// Vectores reutilizables: crear objetos nuevos en cada cuadro llena la memoria de basura.
const position = new Vector3()
const lookAt = new Vector3()
const tangent = new Vector3()
const side = new Vector3()

export function CameraRig() {
  const reduceMotion = useReducedMotion()
  const smoothProgress = useRef(0)

  useFrame((state, delta) => {
    // Con "reducir movimiento" la cámara se queda quieta en una vista fija.
    const target = reduceMotion ? 0.08 : useScrollStore.getState().progress
    smoothProgress.current = MathUtils.damp(smoothProgress.current, target, 5, delta)

    const t = smoothProgress.current * 0.97

    circuitCurve.getPointAt(t, position)
    circuitCurve.getPointAt(Math.min(t + 0.03, 1), lookAt)
    circuitCurve.getTangentAt(t, tangent)

    // Dirección perpendicular a la marcha: desplaza el punto de mira para que
    // la pista quede a la derecha y el texto, a la izquierda.
    side.crossVectors(tangent, UP).normalize()
    const shift = state.size.width > 768 ? 1.8 : 0
    lookAt.addScaledVector(side, -shift)

    position.y += 0.9

    state.camera.position.copy(position)
    state.camera.lookAt(lookAt)
  })

  return null
}
