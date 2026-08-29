import { styles } from "../theme/styles";
import { PROFILE } from "../data/portfolio";

export function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerInner}>
        <span style={styles.logo}>
          {PROFILE.initials}
          <span style={{ color: "#6366F1" }}>.</span>
        </span>
        <span style={{ color: "#475569", fontSize: 13 }}>
          Built with React · {PROFILE.email}
        </span>
      </div>
    </footer>
  );
}
