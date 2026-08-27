import { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const resumeUrl = `${import.meta.env.BASE_URL}Sandeep_Singh_Resume.pdf`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // Frosted glass on scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const ids = ["home", ...NAV_ITEMS.map((n) => n.href.slice(1))];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.1, 0.35, 0.6] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <a className="brand" href="#home" onClick={close} aria-label="Sandeep Singh — home">
        <span className="brand-mark" aria-hidden="true">SS</span>
        <span>Sandeep Singh</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="primary-nav"
        onClick={() => setIsOpen((v) => !v)}
      >
        {isOpen
          ? <FiX size={20} aria-hidden="true" />
          : <FiMenu size={20} aria-hidden="true" />
        }
      </button>

      <nav
        id="primary-nav"
        className={`site-nav${isOpen ? " is-open" : ""}`}
        aria-label="Primary navigation"
      >
        {NAV_ITEMS.map((item) => {
          const id = item.href.slice(1);
          return (
            <a
              key={item.href}
              className={`nav-link${activeSection === id ? " is-active" : ""}`}
              href={item.href}
              onClick={close}
              aria-current={activeSection === id ? "page" : undefined}
            >
              {item.label}
            </a>
          );
        })}

        <a
          className="nav-resume"
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="View resume PDF (opens in new tab)"
        >
          Resume
          <FiArrowUpRight size={14} aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
};

export default Header;
