import { MotionConfig } from 'motion/react'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { SmoothScroll } from './components/layout/SmoothScroll'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { Hero } from './components/sections/Hero'
import { Journey } from './components/sections/Journey'
import { Projects } from './components/sections/Projects'
import { TechStack } from './components/sections/TechStack'
import { ScrollProgress } from './components/ui/ScrollProgress'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll>
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
      </SmoothScroll>
    </MotionConfig>
  )
}

export default App
