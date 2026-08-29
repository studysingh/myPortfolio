import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa6";
import { styles } from "../theme/styles";
import { PROFILE, TERMINAL_LINES } from "../data/portfolio";
import { useTypewriter } from "../hooks/useTypewriter";
import { Cursor } from "./Cursor";

const TERM_DOTS = ["#FF5F57", "#FEBC2E", "#28C840"];

export function Hero() {
  const roles = useTypewriter(PROFILE.roles);

  return (
    <section id="about" style={styles.hero}>
      <div style={styles.heroContent}>
        <div style={styles.badge}>
          <span style={styles.badgeDot} />
          Available for opportunities
        </div>
        <h1 style={styles.heroName}>{PROFILE.name}</h1>
        <div style={styles.heroRole}>
          <span style={{ color: "#94A3B8" }}>$ </span>
          <span style={{ color: "#6366F1" }}>{roles}</span>
          <Cursor />
        </div>
        <p style={styles.heroDesc}>{PROFILE.summary}</p>
        <div style={styles.heroActions}>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="cta-hover"
            style={styles.btnPrimary}
          >
            <FaGithub /> GitHub
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="lift"
            style={styles.btnOutline}
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a href={`tel:${PROFILE.phone}`} className="lift" style={styles.btnGhost}>
            <FaPhone /> {PROFILE.phone}
          </a>
        </div>
        <div style={styles.edu}>
          <span style={styles.eduBadge}>🎓 {PROFILE.education}</span>
        </div>
      </div>

      <div style={styles.heroVisual}>
        <div style={styles.terminalCard}>
          <div style={styles.terminalBar}>
            {TERM_DOTS.map((bg) => (
              <span key={bg} style={{ ...styles.termDot, background: bg }} />
            ))}
            <span style={styles.termTitle}>sandeep@portfolio:~</span>
          </div>
          <div style={styles.termBody}>
            {TERMINAL_LINES.map(({ cmd, out }) => (
              <div key={cmd} style={{ marginBottom: 10 }}>
                <div>
                  <span style={{ color: "#28C840" }}>❯ </span>
                  <span style={{ color: "#E2E8F0" }}>{cmd}</span>
                </div>
                <div style={{ color: "#94A3B8", paddingLeft: 14 }}>{out}</div>
              </div>
            ))}
            <div>
              <span style={{ color: "#28C840" }}>❯ </span>
              <span style={{ color: "#6366F1" }}>_</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
