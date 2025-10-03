import { useState } from "react";
import { Link } from "react-router-dom";

// Use react-icons for simple icon components (react-icons is already in package.json)
import { FaInstagram, FaTiktok } from 'react-icons/fa';

import { styles } from "../styles";
import { navLinks, projectSections } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 pl-4 sm:pl-8"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={"/src/assets/logo2_nava.png"}
            alt="logo"
            className="w-auto h-16 object-contain ml-2 sm:ml-4"
            style={{ display: "block" }}
          />
          {/* <p className="text-white text-[15px] font-serif cursor-pointer flex">
            {" "}
             &nbsp;<span className="md:block hidden">"Transforming ideas into timeless design"</span>
          </p> */}
        </Link>
        <div className="hidden sm:flex items-center gap-8">
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`text-[18px] font-medium cursor-pointer ${
                  active === link.title ? "text-white" : "text-secondary"
                }`}
                onClick={() => setActive(link.title)}
              >
                {link.id === "projects" ? (
                  <div className="relative group">
                    <button className="flex items-center gap-2">
                      <span>{link.title}</span>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    <div className="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-primary p-3 rounded-md shadow-lg">
                      {projectSections.map((sec) => (
                        <a key={sec.id} href={`#${sec.id}`} className="text-secondary hover:text-white py-1">
                          {sec.title}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a href={`#${link.id}`}>{link.title}</a>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a href="https://www.tiktok.com/@nava.creative?_t=ZM-90Fb1WJFK5w&_r=1" className="text-white hover:opacity-80">
              <FaTiktok size={20} />
            </a>
            <a href="https://www.instagram.com/nava.creative?igsh=MXJwaXB4NThqcTFpZg==" className="text-white hover:opacity-80">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
       
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((Link) => (
                <li
                  key={Link.id}
                  className={`${
                    active === Link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(Link.title);
                  }}
                >
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
