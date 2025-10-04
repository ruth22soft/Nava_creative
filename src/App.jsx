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

        {/* Anchor for Projects */}
        <section id="projects" className="scroll-mt-24" />

        {/* Show all three sections; dropdown scrolls to these IDs */}
        <section id="projects-interior" className="scroll-mt-24 mt-16">
          <ProjectsGallery category="interior" />
        </section>

        <section id="projects-architecture" className="scroll-mt-24 mt-16">
          <ProjectsGallery category="architecture" />
        </section>

        <section id="projects-branding" className="scroll-mt-24 mt-16">
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
