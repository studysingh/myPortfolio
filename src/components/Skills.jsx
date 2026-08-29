import { useState } from "react";
import { styles } from "../theme/styles";
import { SKILLS } from "../data/portfolio";
import { Section } from "./Section";

function SkillTag({ label }) {
  const [hover, setHover] = useState(false);
  return (
    <span
      style={{ ...styles.skillTag, ...(hover ? styles.skillTagHov : {}) }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {label}
    </span>
  );
}

function SkillGroup({ category, tags }) {
  return (
    <div className="card-hover" style={styles.skillGroup}>
      <div style={styles.skillCat}>{category}</div>
      <div style={styles.tagRow}>
        {tags.map((t) => (
          <SkillTag key={t} label={t} />
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <Section id="skills" label="Skills">
      <div style={styles.skillsGrid}>
        {Object.entries(SKILLS).map(([cat, tags]) => (
          <SkillGroup key={cat} category={cat} tags={tags} />
        ))}
      </div>
    </Section>
  );
}
