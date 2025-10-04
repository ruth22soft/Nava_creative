import { useEffect, useState } from "react";
import ProjectsGallery from "./ProjectsGallery";

const hashToCategory = (hash) => {
  switch (hash) {
    case "#projects-architecture":
      return "architecture";
    case "#projects-branding":
      return "branding";
    case "#projects-interior":
    default:
      return "interior";
  }
};

const ProjectsSection = () => {
  const [category, setCategory] = useState(hashToCategory(window.location.hash));

  useEffect(() => {
    const onHash = () => setCategory(hashToCategory(window.location.hash));
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <section id="projects" className="scroll-mt-24 mt-16">
      {/* invisible anchors so the navbar can target these ids */}
      <div id="projects-interior" className="h-0" />
      <div id="projects-architecture" className="h-0" />
      <div id="projects-branding" className="h-0" />
      <ProjectsGallery category={category} />
    </section>
  );
};

export default ProjectsSection;