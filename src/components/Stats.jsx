import { styles } from "../theme/styles";
import { STATS, HIGHLIGHTS } from "../data/portfolio";
import { Section } from "./Section";

export function Stats() {
  return (
    <>
      <div style={styles.statsBand}>
        {STATS.map((s) => (
          <div key={s.label} className="card-hover" style={styles.statCard}>
            <div style={styles.statValue}>{s.value}</div>
            <div style={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      <Section id="highlights" label="What I bring">
        <div style={styles.highlights}>
          {HIGHLIGHTS.map((h) => (
            <div key={h} style={styles.highlightRow}>
              <span style={styles.highlightCheck}>✓</span>
              {h}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
