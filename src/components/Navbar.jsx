import { useState } from "react";
import { FaDownload, FaEnvelope } from "react-icons/fa6";
import { styles } from "../theme/styles";
import { NAV_LINKS, PROFILE } from "../data/portfolio";
import { useScrollTrigger, scrollToSection } from "../hooks/useScrollTrigger";
import { useMediaQuery } from "../hooks/useMediaQuery";

export function Navbar() {
  const scrolled = useScrollTrigger(40);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (id) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <nav style={{ ...styles.nav, ...(scrolled ? styles.navScrolled : {}) }}>
      <div style={styles.navInner}>
        <span
          style={styles.logo}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {PROFILE.initials}
          <span style={{ color: "#6366F1" }}>.</span>
        </span>

        {!isMobile && (
          <div style={styles.navLinks}>
            {NAV_LINKS.map((n) => (
              <button
                key={n}
                className="nav-link-hover"
                style={styles.navLink}
                onClick={() => go(n)}
              >
                {n}
              </button>
            ))}
            <a href={PROFILE.resume} download className="cta-hover" style={styles.navCta}>
              <FaDownload /> Resume
            </a>
            <a href={`mailto:${PROFILE.email}`} className="cta-hover" style={styles.navCta}>
              <FaEnvelope /> Connect
            </a>
          </div>
        )}

        {isMobile && (
          <button style={styles.menuBtn} onClick={() => setMenuOpen((o) => !o)}>
            {menuOpen ? "✕" : "☰"}
          </button>
        )}
      </div>

      {isMobile && menuOpen && (
        <div style={styles.mobileMenu}>
          {NAV_LINKS.map((n) => (
            <button key={n} style={styles.mobileLink} onClick={() => go(n)}>
              {n}
            </button>
          ))}
          <a href={PROFILE.resume} download style={styles.mobileLink}>
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
