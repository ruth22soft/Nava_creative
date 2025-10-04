import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo2_nava.png";
import { projectSections } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const goTo = (id, title = "") => {
    setActive(title || id);
    setOpen(false);
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      const nav = document.querySelector("nav");
      const offset = (nav?.offsetHeight || 96) + 8;
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
        history.replaceState(null, "", `#${id}`);
      }
    });
  };

  // close dropdown on outside click or Escape
  useEffect(() => {
    const onClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("mousedown", onClick);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("mousedown", onClick);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <nav className="w-full fixed top-0 z-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <button onClick={() => goTo("top", "")} className="flex items-center gap-3">
          <img src={logo} alt="Nava Creative" className="h-10 w-auto object-contain" />
          {/* <span className="hidden sm:inline font-semibold text-nava-brown">Nava Creative</span> */}
        </button>

        <ul className="hidden sm:flex items-center gap-8 list-none m-0 p-0">
          <li>
            <button onClick={() => goTo("about", "About")} className={`text-[16px] ${active === "About" ? "text-black" : "text-nava-brown"}`}>
              About
            </button>
          </li>

          <li className="relative" ref={menuRef}>
            <button
              onClick={() => setOpen((v) => !v)}
              className={`text-[16px] flex items-center gap-2 ${active === "Projects" ? "text-black" : "text-nava-brown"}`}
              aria-haspopup="true"
              aria-expanded={open}
            >
              Projects
              <svg className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {open && (
              <div className="absolute left-0 mt-2 flex flex-col bg-white/95 p-3 rounded-md shadow-lg min-w-[200px]">
                {projectSections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => goTo(sec.id, sec.title)}
                    className="text-left text-nava-brown hover:text-black py-1 px-2"
                  >
                    {sec.title}
                  </button>
                ))}
              </div>
            )}
          </li>

          <li>
            <button onClick={() => goTo("contact", "Contact")} className={`text-[16px] ${active === "Contact" ? "text-black" : "text-nava-brown"}`}>
              Contact
            </button>
          </li>
        </ul>

        {/* Mobile: reliable select */}
        <div className="sm:hidden">
          <select
            className="px-3 py-2 border rounded-md text-nava-brown bg-white"
            onChange={(e) => {
              const id = e.target.value;
              const label = e.target.options[e.target.selectedIndex].text;
              goTo(id, label);
            }}
            defaultValue=""
          >
            <option value="" disabled>
              Menu
            </option>
            <option value="about">About</option>
            <option value="projects-interior">Interior</option>
            <option value="projects-architecture">Architecture</option>
            <option value="projects-branding">Branding</option>
            <option value="contact">Contact</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
