import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import AIChat from './components/AIChat.jsx'
import Skills from './components/Skills.jsx'  // ⬅️ nueva import

export default function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Skills />       {/* ⬅️ nueva sección */}
      <Experience />
      <Projects />
      <Gallery />
      <Contact />
      <footer className="mx-auto max-w-6xl px-6 py-10 text-neutral-500 text-xs border-t border-neutral-900 mt-12">
        © {new Date().getFullYear()} Matias Nicolas Falduti
      </footer>
    </div>
  )
}