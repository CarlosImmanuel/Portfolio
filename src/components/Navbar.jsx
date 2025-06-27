import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleClick = (section) => {
    setActiveSection(section);
  };

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // scroll ke bawah, sembunyiin navbar
        setShowNavbar(false);
      } else {
        // scroll ke atas, tampilin navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`app-navbar ${showNavbar ? "show" : "hide"}`}
    >
      <a
        href="#home"
        className={activeSection === "home" ? "active" : ""}
        onClick={() => handleClick("home")}
      >
        Home
      </a>
      <a
        href="#about"
        className={activeSection === "about" ? "active" : ""}
        onClick={() => handleClick("about")}
      >
        About
      </a>
      <a
        href="#skill"
        className={activeSection === "skill" ? "active" : ""}
        onClick={() => handleClick("skill")}
      >
        Skill
      </a>
      <a
        href="#project"
        className={activeSection === "project" ? "active" : ""}
        onClick={() => handleClick("project")}
      >
        Project
      </a>
      <a
        href="#contact"
        className={activeSection === "contact" ? "active" : ""}
        onClick={() => handleClick("contact")}
      >
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
