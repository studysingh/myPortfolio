import {
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

const assetBase = import.meta.env.BASE_URL;
const resumeUrl = `${assetBase}Sandeep_Singh_Resume.pdf`;
const profilePhoto = `${assetBase}images/sandeep1.jpg`;

const profileLinks = [
  { label: "GitHub", href: "https://github.com/studysingh", icon: FiGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sandeep-singh-88304825b/",
    icon: FiLinkedin,
  },
  { label: "Email", href: "mailto:sandeep.singh.pro8@gmail.com", icon: FiMail },
];

const experience = [
  {
    company: "Teradata",
    role: "AI Engineer",
    dates: "Jun 2026 - Present",
    location: "Remote",
    summary:
      "Production cloud, automation, observability, and AI-assisted requirements engineering.",
    highlights: [
      "Implemented CI/CD automation that triggers Docker image builds from deployment configuration, shell script, and Kubernetes manifest changes.",
      "Built Kubernetes secret management with External Secrets Operator, integrating AWS Secrets Manager and supporting Azure and GCP cloud environments.",
      "Contributed to a requirements engineering automation pipeline that analyzes software requirements and generates relevant requirement-gathering questions.",
      "Created Grafana dashboards for production monitoring across service health, deployment metrics, and operational performance.",
    ],
    tech: ["AWS", "Docker", "Kubernetes", "ESO", "Grafana", "CI/CD", "Shell"],
  },
  {
    company: "GE3S",
    role: "Full Stack Developer",
    dates: "Feb 2026 - Jun 2026",
    location: "Remote",
    summary:
      "Backend APIs, authentication, RAG systems, payments, email automation, and cloud deployment.",
    highlights: [
      "Developed a centralized backend and web platform with React, Node.js, Express.js, and MongoDB for multiple organizational workflows.",
      "Built RAG systems for question answering over sustainability reports by integrating document retrieval with LLM-based responses.",
      "Implemented SSO and 2FA for secure authentication across organizational tools and services.",
      "Integrated OpenAI, Stripe, and email automation, then containerized and deployed applications using Docker and AWS.",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "RAG", "OpenAI", "Stripe", "AWS", "Docker"],
  },
  {
    company: "ZoomInfo",
    role: "Software Engineering Intern",
    dates: "May 2025 - Jul 2025",
    location: "Remote",
    summary:
      "Data extraction, preprocessing, LLM classification, API design, and workflow orchestration.",
    highlights: [
      "Developed a scalable web crawler to extract product URLs, metadata, and structured content using keyword-based discovery logic.",
      "Reduced noisy and duplicate web data through cleaning and preprocessing before downstream analysis.",
      "Built an LLM-based classification pipeline to identify value propositions and pain points from extracted content.",
      "Designed RESTful APIs with Next.js and orchestrated asynchronous workflows using Temporal.io for improved failure handling.",
    ],
    tech: ["Python", "BeautifulSoup", "Selenium", "Next.js", "Temporal.io", "LLM APIs"],
  },
];

const skills = [
  {
    group: "Languages",
    items: ["C++", "Python", "JavaScript", "Shell Scripting", "SQL"],
  },
  {
    group: "Backend and APIs",
    items: ["Node.js", "Express.js", "Next.js", "REST APIs", "Authentication"],
  },
  {
    group: "Cloud and DevOps",
    items: ["AWS", "Docker", "Kubernetes", "Linux", "CI/CD", "Grafana"],
  },
  {
    group: "AI Systems",
    items: ["LLM APIs", "RAG", "MCP", "Vector Databases", "Document Retrieval"],
  },
  {
    group: "Computer Science",
    items: ["Data Structures", "Algorithms", "OS", "DBMS", "Computer Networks", "OOP"],
  },
  {
    group: "Data and Workflows",
    items: ["MongoDB", "Temporal.io", "BeautifulSoup", "Selenium", "Git"],
  },
];

const achievements = [
  {
    value: "480+",
    label: "LeetCode problems solved",
    detail: "100 Days badge earned in 2026.",
    href: "https://leetcode.com/studysingh/",
  },
  {
    value: "250+",
    label: "GeeksforGeeks problems solved",
    detail: "Awarded GFG T-Shirt in 2026.",
    href: "https://auth.geeksforgeeks.org/user/studysinlsa/",
  },
  {
    value: "Top 0.5%",
    label: "JEE Advanced rank",
    detail: "Secured a nationwide rank within the top 0.5% of candidates in 2022.",
  },
];

const education = [
  {
    institution: "Indian Institute of Technology (BHU), Varanasi",
    program: "Bachelor of Technology in Computer Science and Engineering",
    dates: "2022 - 2026",
    result: "CGPA: 7.74",
  },
  {
    institution: "PT H S R L Indian Public School, Vrindavan, Mathura",
    program: "CBSE Class XII",
    dates: "2022",
    result: "93.4%",
  },
  {
    institution: "Shri Balaji Public School, Avairani, Mathura",
    program: "CBSE Class X",
    dates: "2020",
    result: "94.4%",
  },
];

const Home = () => {
  return (
    <>
      <section className="hero section" id="home" aria-labelledby="hero-title">
        <div className="section-inner hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Software Engineer</p>
            <h1 id="hero-title">Sandeep Singh builds backend systems, APIs, and cloud applications.</h1>
            <p className="hero-lede">
              AI Engineer at Teradata with experience across production CI/CD automation,
              Kubernetes secret management, REST APIs, RAG systems, and scalable data workflows.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Contact
                <FiArrowUpRight aria-hidden="true" />
              </a>
              <a className="button button-secondary" href={resumeUrl} target="_blank" rel="noreferrer">
                <FiDownload aria-hidden="true" />
                Resume
              </a>
            </div>
            <div className="profile-links" aria-label="Profile links">
              {profileLinks.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  <Icon aria-hidden="true" />
                  {label}
                </a>
              ))}
            </div>
          </div>

          <aside className="hero-panel" aria-label="Career snapshot">
            <div className="hero-identity">
              <img src={profilePhoto} alt="Sandeep Singh" />
              <div>
                <span>Sandeep Singh</span>
                <strong>AI Engineer at Teradata</strong>
              </div>
            </div>
            <div className="availability">
              <span className="status-dot" aria-hidden="true" />
              Remote engineering experience
            </div>
            <dl className="snapshot-grid">
              <div>
                <dt>Current Role</dt>
                <dd>AI Engineer, Teradata</dd>
              </div>
              <div>
                <dt>Core Stack</dt>
                <dd>Python, JavaScript, AWS, Docker, Kubernetes</dd>
              </div>
              <div>
                <dt>Problem Solving</dt>
                <dd>730+ coding problems across LeetCode and GFG</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="section about-section" id="about" aria-labelledby="about-title">
        <div className="section-inner split-layout">
          <div>
            <p className="section-kicker">About</p>
            <h2 id="about-title">An engineer oriented around reliable systems and applied problem solving.</h2>
          </div>
          <div className="prose">
            <p>
              I work across backend services, cloud infrastructure, and AI-enabled software. My recent
              experience includes production deployment automation, Kubernetes workflows, REST API design,
              RAG systems, web crawling pipelines, and observability dashboards.
            </p>
            <p>
              The common thread is execution: translate ambiguous requirements into maintainable systems,
              design APIs that support real workflows, and keep production software visible, secure, and
              deployable.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="experience" aria-labelledby="experience-title">
        <div className="section-inner">
          <div className="section-heading">
            <p className="section-kicker">Experience</p>
            <h2 id="experience-title">Production-facing engineering work across cloud, APIs, and AI systems.</h2>
          </div>
          <div className="timeline">
            {experience.map((role) => (
              <article className="timeline-item" key={`${role.company}-${role.role}`}>
                <div className="timeline-marker" aria-hidden="true" />
                <div className="timeline-content">
                  <div className="role-head">
                    <div>
                      <h3>{role.role}</h3>
                      <p>{role.company}</p>
                    </div>
                    <div className="role-meta">
                      <span>{role.dates}</span>
                      <span>
                        <FiMapPin aria-hidden="true" />
                        {role.location}
                      </span>
                    </div>
                  </div>
                  <p className="role-summary">{role.summary}</p>
                  <ul className="impact-list">
                    {role.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <div className="tech-list" aria-label={`${role.company} technologies`}>
                    {role.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills" aria-labelledby="skills-title">
        <div className="section-inner">
          <div className="section-heading">
            <p className="section-kicker">Technical Expertise</p>
            <h2 id="skills-title">A practical stack for backend, cloud, automation, and AI workflows.</h2>
          </div>
          <div className="skills-grid">
            {skills.map((category) => (
              <article className="skill-group" key={category.group}>
                <h3>{category.group}</h3>
                <div className="skill-tags">
                  {category.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="achievements" aria-labelledby="achievements-title">
        <div className="section-inner">
          <div className="section-heading compact">
            <p className="section-kicker">Problem Solving</p>
            <h2 id="achievements-title">Signals of consistent analytical practice.</h2>
          </div>
          <div className="achievement-grid">
            {achievements.map((achievement) => {
              const Wrapper = achievement.href ? "a" : "div";
              return (
                <Wrapper
                  className="achievement"
                  key={achievement.label}
                  href={achievement.href}
                  target={achievement.href ? "_blank" : undefined}
                  rel={achievement.href ? "noreferrer" : undefined}
                >
                  <span className="achievement-value">{achievement.value}</span>
                  <span className="achievement-label">{achievement.label}</span>
                  <span className="achievement-detail">{achievement.detail}</span>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section education-section" id="education" aria-labelledby="education-title">
        <div className="section-inner split-layout">
          <div>
            <p className="section-kicker">Education</p>
            <h2 id="education-title">Computer Science foundation from IIT (BHU), Varanasi.</h2>
          </div>
          <div className="education-list">
            {education.map((item) => (
              <article className="education-item" key={item.institution}>
                <div>
                  <h3>{item.institution}</h3>
                  <p>{item.program}</p>
                </div>
                <div className="education-meta">
                  <span>{item.dates}</span>
                  <strong>{item.result}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact" aria-labelledby="contact-title">
        <div className="section-inner contact-card">
          <div>
            <p className="section-kicker">Contact</p>
            <h2 id="contact-title">Recruiters and engineering teams can reach me directly.</h2>
            <p>
              I am reachable by email, LinkedIn, and GitHub. My resume is linked here and in the
              navigation for quick evaluation.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button button-primary" href="mailto:sandeep.singh.pro8@gmail.com">
              <FiMail aria-hidden="true" />
              Email me
            </a>
            <a className="button button-secondary" href="https://www.linkedin.com/in/sandeep-singh-88304825b/" target="_blank" rel="noreferrer">
              <FiLinkedin aria-hidden="true" />
              LinkedIn
            </a>
            <a className="button button-secondary" href="https://github.com/studysingh" target="_blank" rel="noreferrer">
              <FiGithub aria-hidden="true" />
              GitHub
            </a>
            <a className="button button-secondary" href={resumeUrl} target="_blank" rel="noreferrer">
              <FiDownload aria-hidden="true" />
              Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
