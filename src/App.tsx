import { MotionConfig } from 'motion/react'
import { lazy, Suspense } from 'react'
import { ScrollDebug } from './components/dev/ScrollDebug'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { ScrollStoreSync } from './components/layout/ScrollStoreSync'
import { SmoothScroll } from './components/layout/SmoothScroll'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { Hero } from './components/sections/Hero'
import { Journey } from './components/sections/Journey'
import { Projects } from './components/sections/Projects'
import { TechStack } from './components/sections/TechStack'
import { Backdrop } from './components/ui/Backdrop'
import { Scrim } from './components/ui/Scrim'
import { ScrollProgress } from './components/ui/ScrollProgress'
import { useAfterIdle } from './hooks/useAfterIdle'
import { CanvasErrorBoundary } from './three/CanvasErrorBoundary'
import { canRender3D, quality } from './three/quality'

const Experience = lazy(() => import('./three/Experience'))

function App() {
  const isIdle = useAfterIdle()

  // PC: el 3D arranca de inmediato. Equipos modestos: espera a que haya tiempo libre.
  // Sin WebGL o con ahorro de datos: no se descarga.
  const show3D = canRender3D && (quality === 'high' || isIdle)

  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll>
        <Backdrop />

        {show3D && (
          <CanvasErrorBoundary>
            <Suspense fallback={null}>
              <Experience />
            </Suspense>
          </CanvasErrorBoundary>
        )}

        <Scrim />

        <ScrollProgress />

        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-signal focus:px-4 focus:py-2 focus:text-void"
        >
          Saltar al contenido
        </a>

        <Header />

        <main id="contenido">
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Journey />
          <Contact />
        </main>

        <Footer />

        <ScrollStoreSync />
        {import.meta.env.DEV && <ScrollDebug />}
      </SmoothScroll>
    </MotionConfig>
  )
}

export default App
