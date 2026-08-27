import { useEffect, useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const resumeUrl = `${import.meta.env.BASE_URL}Sandeep_Singh_Resume.pdf`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = ["home", ...navItems.map((item) => item.href.slice(1))];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-18% 0px -65% 0px", threshold: [0.12, 0.25, 0.5] }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Sandeep Singh home">
        <span className="brand-mark">SS</span>
        <span>Sandeep Singh</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
      </button>

      <nav className={`site-nav ${isOpen ? "is-open" : ""}`} aria-label="Primary navigation">
        <a
          className={`nav-link ${activeSection === "home" ? "is-active" : ""}`}
          href="#home"
          onClick={closeMenu}
          aria-current={activeSection === "home" ? "page" : undefined}
        >
          Home
        </a>
        {navItems.map((item) => {
          const id = item.href.slice(1);
          return (
            <a
              key={item.href}
              className={`nav-link ${activeSection === id ? "is-active" : ""}`}
              href={item.href}
              onClick={closeMenu}
              aria-current={activeSection === id ? "page" : undefined}
            >
              {item.label}
            </a>
          );
        })}
        <a className="nav-resume" href={resumeUrl} target="_blank" rel="noreferrer">
          <FiDownload aria-hidden="true" />
          Resume
        </a>
      </nav>
    </header>
  );
};
export default Header;
