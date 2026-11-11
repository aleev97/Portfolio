import { Bloom, EffectComposer } from '@react-three/postprocessing'

export default function Effects() {
  return (
    <EffectComposer multisampling={4}>
      <Bloom
        intensity={1.2}
        luminanceThreshold={1}
        luminanceSmoothing={0.2}
        mipmapBlur
        radius={0.7}
      />
    </EffectComposer>
  )
}
