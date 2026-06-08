import AnimatedGrid from './ui/AnimatedGrid'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Leadership from './components/sections/Leadership'
import Coursework from './components/sections/Coursework'
import Certifications from './components/sections/Certifications'
import Skills from './components/sections/Skills'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <AnimatedGrid />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Leadership />
        <Coursework />
        <Certifications />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}