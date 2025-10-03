import { BrowserRouter } from "react-router-dom";
import { About, Contact, Hero, Navbar, StarsCanvas } from './components';
import ProjectsGallery from './components/ProjectsGallery';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary min-h-screen">
        <div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <ProjectsGallery
          title="Interior"
          images={[
            '/src/assets/Interior/interior_1.jpg',
            '/src/assets/Interior/interior_2.jpg',
            '/src/assets/Interior/interior_3.jpg',
            '/src/assets/Interior/interior_4.jpg',
            '/src/assets/Interior/interior_5.jpg',
            '/src/assets/Interior/interior_6.jpg',
            '/src/assets/Interior/interior_7.jpg',
            '/src/assets/Interior/interior_8.jpg',
            '/src/assets/Interior/interior_9.jpg',
            '/src/assets/Interior/interior_10.jpg',
            '/src/assets/Interior/interior_11.jpg',
            '/src/assets/Interior/interior_12.jpg',
            '/src/assets/Interior/interior_13.jpg',
            '/src/assets/Interior/interior_14.jpg',
            '/src/assets/Interior/interior_15.jpg',
            '/src/assets/Interior/interior_16.jpg',
            '/src/assets/Interior/interior_17.jpg',
            '/src/assets/Interior/interior_18.jpg',
          ]}
        />

        <ProjectsGallery
          title="Architecture"
          images={[
            '/src/assets/Architectural/Arcitecture_1.png',
            '/src/assets/Architectural/architecture_2.png',
            '/src/assets/Architectural/architecture_3.png',
            '/src/assets/Architectural/architecture_4.png',
            '/src/assets/Architectural/architecture_5.jpg',
            '/src/assets/Architectural/architecture_6.jpg',
            '/src/assets/Architectural/architecture_7.jpg',
            '/src/assets/Architectural/architecture_8.jpg',
            '/src/assets/Architectural/architecture_9.jpg',
            '/src/assets/Architectural/architecture_10.jpg',
          ]}
        />

        <ProjectsGallery
          title="Branding"
          images={[
            '/src/assets/branding/branding_1.jpg',
            '/src/assets/branding/branding_2.jpg',
            '/src/assets/branding/branding_3.jpg',
            '/src/assets/branding/branding_4.jpg',
            '/src/assets/branding/branding_5.jpg',
            '/src/assets/branding/branding_6.jpg',
            '/src/assets/branding/branding_7.jpg',
            '/src/assets/branding/branding_8.jpg',
            '/src/assets/branding/branding_9.jpg',
            '/src/assets/branding/branding_10.jpg',
            '/src/assets/branding/branding_11.jpg',
            '/src/assets/branding/branding_12.jpg',
          ]}
        />
        {/* <Works /> */}
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />

        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
