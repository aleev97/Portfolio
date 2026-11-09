import { DoubleSide } from 'three'
import type { BufferGeometry } from 'three'
import { circuitCurve } from './circuitPath'
import { createRibbonGeometry } from './trackGeometry'

const SEGMENTS = 600
const ROAD_WIDTH = 4.4
const EDGE = ROAD_WIDTH / 2

const base = { curve: circuitCurve, segments: SEGMENTS }

const road = createRibbonGeometry({ ...base, width: ROAD_WIDTH, y: -0.04 })

const edgeLines = [-1, 1].map((direction) =>
  createRibbonGeometry({
    ...base,
    width: 0.12,
    offset: direction * (EDGE - 0.2),
    y: -0.02,
  }),
)

const centerDashes = createRibbonGeometry({
  ...base,
  width: 0.1,
  y: -0.02,
  dashPeriod: 16,
  dashOn: 8,
})

// Pianos: dos tiras alternadas a cada lado, desfasadas medio período.
const kerbs = (dashPhase: number) =>
  [-1, 1].map((direction) =>
    createRibbonGeometry({
      ...base,
      width: 0.5,
      offset: direction * (EDGE + 0.25),
      y: -0.03,
      dashPeriod: 8,
      dashOn: 4,
      dashPhase,
    }),
  )

const kerbsLight = kerbs(0)
const kerbsAccent = kerbs(4)

interface RibbonProps {
  geometry: BufferGeometry
  color: string
  raised?: boolean
}

function Ribbon({ geometry, color, raised = false }: RibbonProps) {
  return (
    <mesh geometry={geometry}>
      <meshBasicMaterial
        color={color}
        side={DoubleSide}
        polygonOffset={raised}
        polygonOffsetFactor={-2}
        polygonOffsetUnits={-2}
      />
    </mesh>
  )
}

export function Track() {
  return (
    <group>
      <Ribbon geometry={road} color="#12151a" />

      {edgeLines.map((geometry, index) => (
        <Ribbon key={`edge-${index}`} geometry={geometry} color="#c6ff3d" raised />
      ))}

      <Ribbon geometry={centerDashes} color="#8a919c" raised />

      {kerbsLight.map((geometry, index) => (
        <Ribbon key={`kerb-light-${index}`} geometry={geometry} color="#e8eaed" raised />
      ))}
      {kerbsAccent.map((geometry, index) => (
        <Ribbon key={`kerb-accent-${index}`} geometry={geometry} color="#ff7a3d" raised />
      ))}
    </group>
  )
}
