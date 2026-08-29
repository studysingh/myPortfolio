import { styles } from "../theme/styles";

export function Section({ id, label, children }) {
  return (
    <section id={id} style={styles.section}>
      <div style={styles.sectionLabel}>
        <span style={styles.sectionAccent}>//</span>
        <h2 style={styles.sectionTitle}>{label}</h2>
      </div>
      {children}
    </section>
  );
}
