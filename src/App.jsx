import { Footer, Navbar, ParticleBackground } from '@/components/layout'
import { About, Contact, Experience, Hero, Projects, Skills } from '@/components/sections'

function App() {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
