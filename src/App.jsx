import { BrowserRouter } from "react-router-dom";
import { About, Contact, Hero, Navbar, StarsCanvas } from './components';
import ProjectsGallery from "./components/ProjectsGallery";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary min-h-screen">
        <div>
          <Navbar />
          <Hero />
        </div>
        <About />

        {/* Projects anchor (so the main "Projects" nav works) */}
        <section id="projects" className="scroll-mt-24"></section>

        {/* Interior */}
        <section id="projects-interior" className="scroll-mt-24 mt-16">
          <h2 className="text-nava-brown text-3xl md:text-4xl font-bold mb-6 text-center">
            Interior Design
          </h2>
          <ProjectsGallery category="interior" />
        </section>

        {/* Architecture */}
        <section id="projects-architecture" className="scroll-mt-24 mt-20">
          <h2 className="text-nava-brown text-3xl md:text-4xl font-bold mb-6 text-center">
            Architecture Design
          </h2>
          <ProjectsGallery category="architecture" />
        </section>

        {/* Branding */}
        <section id="projects-branding" className="scroll-mt-24 mt-20">
          <h2 className="text-nava-brown text-3xl md:text-4xl font-bold mb-6 text-center">
            Branding
          </h2>
          <ProjectsGallery category="branding" />
        </section>

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />

        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
