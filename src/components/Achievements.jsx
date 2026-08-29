import { styles } from "../theme/styles";
import { ACHIEVEMENTS } from "../data/portfolio";
import { Section } from "./Section";

function AchievementCard({ item }) {
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noreferrer"
      className="card-hover"
      style={{ ...styles.achieveCard, textDecoration: "none", color: "inherit" }}
    >
      <span style={styles.achieveIcon}>{item.icon}</span>
      <div>
        <div style={styles.achieveTitle}>{item.title}</div>
        <div style={styles.achieveDesc}>{item.desc}</div>
      </div>
    </a>
  );
}

export function Achievements() {
  return (
    <Section id="achievements" label="Achievements">
      <div style={styles.achieveGrid}>
        {ACHIEVEMENTS.map((a) => (
          <AchievementCard key={a.title} item={a} />
        ))}
      </div>
    </Section>
  );
}
