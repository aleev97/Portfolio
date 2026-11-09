import { CatmullRomCurve3, Vector3 } from 'three'

// Puntos de control [x, y, z]. La cámara avanza hacia -z.
const points: [number, number, number][] = [
  [0, 0, 0],
  [3, 0.5, -6],
  [6, -0.5, -14],
  [3, 1.5, -22],
  [-3, 0.5, -28],
  [-7, -1, -36],
  [-3, -2, -44],
  [3, -1, -50],
  [6, 1, -58],
  [2, 2, -66],
  [-2, 1, -72],
  [0, 0, -80],
]

export const circuitCurve = new CatmullRomCurve3(
  points.map(([x, y, z]) => new Vector3(x, y, z)),
  false,
  'catmullrom',
  0.5,
)
