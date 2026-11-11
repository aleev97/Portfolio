import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import { quality } from './quality'
import { Scene } from './Scene'

export default function Experience() {
  const [ready, setReady] = useState(false)

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 -z-10 transition-opacity duration-1000 motion-reduce:transition-none ${
        ready ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Canvas
        frameloop="demand"
        dpr={quality === 'high' ? [1, 2] : [1, 1.5]}
        camera={{ position: [0, 0, 6], fov: 45, near: 0.1, far: 100 }}
        gl={{ antialias: false }}
        onCreated={() => setReady(true)}
      >
        <color attach="background" args={['#08090b']} />
        <Scene />
      </Canvas>
    </div>
  )
}
