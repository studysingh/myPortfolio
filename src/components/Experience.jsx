import { useState } from "react";
import { styles } from "../theme/styles";
import { EXPERIENCE } from "../data/portfolio";
import { Section } from "./Section";

function ExperienceCard({ exp, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className="card-hover"
      style={{ ...styles.expCard, borderLeft: `3px solid ${exp.color}` }}
    >
      <div style={styles.expHeader} onClick={() => setOpen((o) => !o)}>
        <div style={styles.expHeaderLeft}>
          <span style={{ ...styles.expIconWrap, border: `1px solid ${exp.color}40` }}>
            <img src={exp.logo} alt={`${exp.company} logo`} style={styles.expLogo} />
          </span>
          <div>
            <div
              style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}
            >
              <span style={{ ...styles.expCompany, color: exp.color }}>
                {exp.company}
              </span>
              <span style={styles.expTypeBadge}>{exp.type}</span>
            </div>
            <div style={styles.expRole}>{exp.role}</div>
            <div style={styles.expPeriod}>{exp.period}</div>
            <div style={styles.expSummary}>{exp.summary}</div>
          </div>
        </div>
        <span style={{ color: exp.color, fontSize: 20, userSelect: "none" }}>
          {open ? "−" : "+"}
        </span>
      </div>

      {open && (
        <ul style={styles.expList}>
          {exp.bullets.map((b) => (
            <li key={b} style={styles.expBullet}>
              <span style={{ color: exp.color, marginRight: 8, flexShrink: 0 }}>▸</span>
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Experience() {
  return (
    <Section id="experience" label="Experience">
      <div style={styles.timeline}>
        {EXPERIENCE.map((exp, i) => (
          <ExperienceCard key={exp.company} exp={exp} defaultOpen={i === 0} />
        ))}
      </div>
    </Section>
  );
}
