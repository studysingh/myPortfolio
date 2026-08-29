import { styles } from "../theme/styles";
import { PROJECTS } from "../data/portfolio";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="projects" label="Projects">
      <div style={styles.projectGrid}>
        {PROJECTS.map((project) => (
          <article key={project.name} className="card-hover" style={styles.projectCard}>
            <div style={styles.projectTop}>
              <div style={styles.projectIcon}>▣</div>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                style={styles.projectLink}
              >
                View project ↗
              </a>
            </div>
            <h3 style={styles.projectName}>{project.name}</h3>
            <p style={styles.projectDesc}>{project.description}</p>
            <div style={styles.tagRow}>
              {project.stack.map((tech) => (
                <span key={`${project.name}-${tech}`} style={styles.tag}>
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
