import { useFrame } from '@react-three/fiber'
import { useReducedMotion } from 'motion/react'
import { useEffect, useRef } from 'react'
import { MathUtils, Vector3 } from 'three'
import { useScrollStore } from '../store/useScrollStore'
import { CAMERA_PATH_RANGE } from './cameraConfig'
import { circuitCurve } from './circuitPath'

const UP = new Vector3(0, 1, 0)

// Ajustes de la cámara
const LOOK_AHEAD = 0.03
const FOLLOW_DAMPING = 5
const LATERAL_SHIFT = 1.8
const CAMERA_HEIGHT = 0.9

// Ajustes del parallax con el cursor
const PARALLAX_X = 0.8
const PARALLAX_Y = 0.5
const PARALLAX_DAMPING = 3

// Vectores reutilizables: crear objetos nuevos en cada cuadro llena la memoria de basura.
const position = new Vector3()
const lookAt = new Vector3()
const tangent = new Vector3()
const side = new Vector3()

// Posición del mouse normalizada (-1 a 1). Objeto mutable fuera de React.
const pointer = { x: 0, y: 0 }

export function CameraRig() {
  const reduceMotion = useReducedMotion()
  const smoothProgress = useRef(0)
  const smoothPointer = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return

      pointer.x = (event.clientX / window.innerWidth) * 2 - 1
      pointer.y = -((event.clientY / window.innerHeight) * 2 - 1)
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', onPointerMove)
  }, [])

  useFrame((state, delta) => {
    // Con "reducir movimiento" la cámara se queda quieta, sin parallax.
    const targetProgress = reduceMotion ? 0.08 : useScrollStore.getState().progress
    const targetX = reduceMotion ? 0 : pointer.x
    const targetY = reduceMotion ? 0 : pointer.y

    smoothProgress.current = MathUtils.damp(
      smoothProgress.current,
      targetProgress,
      FOLLOW_DAMPING,
      delta,
    )
    smoothPointer.current.x = MathUtils.damp(
      smoothPointer.current.x,
      targetX,
      PARALLAX_DAMPING,
      delta,
    )
    smoothPointer.current.y = MathUtils.damp(
      smoothPointer.current.y,
      targetY,
      PARALLAX_DAMPING,
      delta,
    )

    const t = smoothProgress.current * CAMERA_PATH_RANGE

    circuitCurve.getPointAt(t, position)
    circuitCurve.getPointAt(Math.min(t + LOOK_AHEAD, 1), lookAt)
    circuitCurve.getTangentAt(t, tangent)

    // Dirección perpendicular a la marcha: desplaza el punto de mira para que
    // la pista quede a la derecha y el texto, a la izquierda.
    side.crossVectors(tangent, UP).normalize()
    const shift = state.size.width > 768 ? LATERAL_SHIFT : 0

    // La mirada se desplaza hacia donde apunta el cursor.
    lookAt.addScaledVector(side, -shift + smoothPointer.current.x * PARALLAX_X)
    lookAt.y += smoothPointer.current.y * PARALLAX_Y

    position.y += CAMERA_HEIGHT

    state.camera.position.copy(position)
    state.camera.lookAt(lookAt)
  })

  return null
}
