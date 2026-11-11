import { Grid } from '@react-three/drei'
import { lazy, Suspense } from 'react'
import { CameraRig } from './CameraRig'
import { quality } from './quality'
import { SectorGates } from './SectorGates'
import { Track } from './Track'
import { TrackLights } from './TrackLights'

// El bloom (y su librería) solo se descargan en equipos de calidad alta.
const Effects = lazy(() => import('./Effects'))

export function Scene() {
  return (
    <>
      <fog attach="fog" args={['#08090b', 6, 32]} />
      <CameraRig />

      <Grid
        position={[0, -3, 0]}
        infiniteGrid
        cellSize={1}
        sectionSize={5}
        cellColor="#161a20"
        sectionColor="#242b35"
        cellThickness={0.6}
        sectionThickness={1}
        fadeDistance={45}
        fadeStrength={1.5}
      />

      <Track />
      <TrackLights />
      <SectorGates />

      {quality === 'high' && (
        <Suspense fallback={null}>
          <Effects />
        </Suspense>
      )}
    </>
  )
}
