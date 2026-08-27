import { useEffect, useMemo, useState } from "react";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCpu,
  FiDatabase,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiServer,
  FiTerminal,
} from "react-icons/fi";

const assetBase = import.meta.env.BASE_URL;
const resumeUrl = `${assetBase}Sandeep_Singh_Resume.pdf`;
const profilePhoto = `${assetBase}images/sandeep1.jpg`;

const links = {
  github: "https://github.com/studysingh",
  linkedin: "https://www.linkedin.com/in/sandeep-singh-88304825b/",
  email: "mailto:sandeep.singh.pro8@gmail.com",
};

const profileLinks = [
  { label: "GitHub", href: links.github, icon: FiGithub },
  { label: "LinkedIn", href: links.linkedin, icon: FiLinkedin },
  { label: "Email", href: links.email, icon: FiMail },
];

const experience = [
  {
    company: "Teradata",
    logo: `${assetBase}logos/teradata.svg`,
    role: "AI Engineer",
    dates: "Jun 2026 - Present",
    location: "Remote",
    tone: "orange",
    summary:
      "Production cloud services, deployment automation, Kubernetes security, observability, and AI-assisted requirements engineering.",
    highlights: [
      "Implemented CI/CD automation that triggers Docker image builds from deployment configuration, shell script, and Kubernetes YAML manifest changes.",
      "Built Kubernetes secret management with External Secrets Operator, integrating AWS Secrets Manager and supporting Azure and GCP environments.",
      "Contributed to a requirements engineering pipeline that analyzes software requirements and generates relevant discovery questions.",
      "Created Grafana dashboards for service health, deployment metrics, and operational performance visibility.",
    ],
    tech: ["AWS", "Docker", "Kubernetes", "ESO", "Grafana", "CI/CD", "Shell"],
  },
  {
    company: "GE3S",
    logo: `${assetBase}logos/ge3s.png`,
    role: "Full Stack Developer",
    dates: "Feb 2026 - Jun 2026",
    location: "Remote",
    tone: "green",
    summary:
      "Centralized web platforms, secure authentication, RAG systems, payment flows, email automation, and cloud deployment.",
    highlights: [
      "Developed backend and web platform capabilities using React, Node.js, Express.js, and MongoDB for multiple organizational workflows.",
      "Built Retrieval-Augmented Generation systems for question answering over sustainability reports with document retrieval and LLM responses.",
      "Implemented SSO and 2FA across organizational tools and services.",
      "Integrated OpenAI, Stripe, and email automation, then containerized and deployed applications with Docker and AWS.",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "RAG", "OpenAI", "Stripe", "AWS", "Docker"],
  },
  {
    company: "ZoomInfo",
    logo: `${assetBase}logos/zoominfo.png`,
    role: "Software Engineering Intern",
    dates: "May 2025 - Jul 2025",
    location: "Remote",
    tone: "red",
    summary:
      "Data extraction pipelines, content preprocessing, LLM classification, REST APIs, and asynchronous workflow orchestration.",
    highlights: [
      "Developed a scalable crawler to extract product URLs, metadata, and structured content from company websites.",
      "Reduced noisy, duplicate, and inconsistent extracted data through cleaning and preprocessing.",
      "Built an LLM classification pipeline for value propositions and pain points.",
      "Designed RESTful APIs with Next.js and orchestrated asynchronous workflows using Temporal.io.",
    ],
    tech: ["Python", "BeautifulSoup", "Selenium", "Next.js", "Temporal.io", "LLM APIs"],
  },
];

const principles = [
  "Ship reliable backend services",
  "Make production systems visible",
  "Turn ambiguous requirements into APIs",
  "Automate the repeated path",
];

const skillGroups = [
  {
    id: "systems",
    label: "Backend",
    icon: FiServer,
    lead: "Service boundaries, API contracts, authentication, and workflow logic.",
    items: ["Node.js", "Express.js", "Next.js", "REST APIs", "Authentication", "SQL"],
  },
  {
    id: "cloud",
    label: "Cloud",
    icon: FiCpu,
    lead: "Production deployment surfaces across cloud, containers, and observability.",
    items: ["AWS", "Docker", "Kubernetes", "Linux", "CI/CD", "Grafana"],
  },
  {
    id: "ai",
    label: "AI Workflows",
    icon: FiTerminal,
    lead: "LLM-backed systems for retrieval, classification, and requirements analysis.",
    items: ["LLM APIs", "RAG", "MCP", "Vector Databases", "Document Retrieval"],
  },
  {
    id: "data",
    label: "Data",
    icon: FiDatabase,
    lead: "Extraction, persistence, cleanup, and asynchronous processing.",
    items: ["MongoDB", "Temporal.io", "BeautifulSoup", "Selenium", "Git"],
  },
  {
    id: "languages",
    label: "Languages",
    icon: FiTerminal,
    lead: "Daily implementation tools backed by computer science fundamentals.",
    items: ["C++", "Python", "JavaScript", "Shell Scripting"],
  },
  {
    id: "cs",
    label: "CS Core",
    icon: FiCpu,
    lead: "The foundation behind system design and implementation choices.",
    items: ["Data Structures", "Algorithms", "OS", "DBMS", "Computer Networks", "OOP"],
  },
];

const education = [
  {
    institution: "Indian Institute of Technology (BHU), Varanasi",
    program: "B.Tech in Computer Science and Engineering",
    dates: "2022 - 2026",
    result: "CGPA 7.74",
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

const HeroField = () => {
  const fieldNodes = useMemo(
    () =>
      Array.from({ length: 42 }, (_, index) => ({
        id: index,
        x: (index * 31) % 100,
        y: (index * 47) % 100,
        delay: (index % 9) * 0.24,
      })),
    []
  );

  return (
    <div className="hero-field" aria-hidden="true">
      <div className="field-grid" />
      <div className="field-orbit field-orbit-one" />
      <div className="field-orbit field-orbit-two" />
      {fieldNodes.map((node) => (
        <span
          className="field-node"
          key={node.id}
          style={{
            "--node-x": `${node.x}%`,
            "--node-y": `${node.y}%`,
            "--node-delay": `${node.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

const Home = () => {
  const [activeRole, setActiveRole] = useState(0);
  const [activeSkill, setActiveSkill] = useState(skillGroups[0].id);

  const selectedSkill = skillGroups.find((group) => group.id === activeSkill) ?? skillGroups[0];

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover) return undefined;

    const handlePointerMove = (event) => {
      const x = Math.round((event.clientX / window.innerWidth) * 100);
      const y = Math.round((event.clientY / window.innerHeight) * 100);
      document.documentElement.style.setProperty("--cursor-x", `${x}%`);
      document.documentElement.style.setProperty("--cursor-y", `${y}%`);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.16 }
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const roleItems = document.querySelectorAll("[data-role-index]");
    const observer = new IntersectionObserver(
      (entries) => {
        const active = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (active) {
          setActiveRole(Number(active.target.getAttribute("data-role-index")));
        }
      },
      { rootMargin: "-24% 0px -46% 0px", threshold: [0.2, 0.45, 0.7] }
    );

    roleItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="hero section" id="home" aria-labelledby="hero-title">
        <HeroField />
        <div className="section-inner hero-layout">
          <div className="hero-copy">
            <p className="eyebrow hero-kicker">Software Engineer / AI Engineer</p>
            <h1 id="hero-title">
              Sandeep Singh builds production software across cloud, APIs, and AI workflows.
            </h1>
            <p className="hero-lede">
              AI Engineer at Teradata with hands-on work in CI/CD automation, Kubernetes secret
              management, REST APIs, RAG systems, web crawling pipelines, and production observability.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button button-primary magnetic" href="#contact">
                Contact
                <FiArrowRight aria-hidden="true" />
              </a>
              <a className="button button-secondary magnetic" href={resumeUrl} target="_blank" rel="noreferrer">
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

          <aside className="identity-panel" aria-label="Career snapshot">
            <div className="identity-photo-wrap">
              <img src={profilePhoto} alt="Sandeep Singh" className="identity-photo" />
              <span className="photo-scanline" aria-hidden="true" />
            </div>
            <dl className="signal-list">
              <div>
                <dt>Current</dt>
                <dd>AI Engineer at Teradata</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Backend services, cloud deployment, automation, applied AI</dd>
              </div>
              <div>
                <dt>Base</dt>
                <dd>IIT (BHU), Varanasi / Computer Science</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="section about-section" id="about" aria-labelledby="about-title">
        <div className="section-inner about-layout" data-reveal>
          <div>
            <p className="section-kicker">01 / Engineering Identity</p>
            <h2 id="about-title">Backend-minded, production-aware, and comfortable where systems meet ambiguity.</h2>
          </div>
          <div className="about-copy">
            <p>
              I work across the layers that make software dependable: API design, cloud deployment,
              containerized services, authentication, data workflows, and LLM-backed automation.
            </p>
            <p>
              My recent work has moved from crawling and classifying external web data, to shipping
              full-stack sustainability tools, to supporting production cloud services and Kubernetes
              workflows at Teradata.
            </p>
            <div className="principle-strip" aria-label="Engineering principles">
              {principles.map((principle) => (
                <span key={principle}>{principle}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section experience-section" id="experience" aria-labelledby="experience-title">
        <div className="section-inner">
          <div className="section-heading" data-reveal>
            <p className="section-kicker">02 / Experience</p>
            <h2 id="experience-title">Professional work is the center of the story.</h2>
            <p>
              Three recent roles trace a clear arc: data-heavy engineering, product-facing full-stack
              systems, and production cloud automation.
            </p>
          </div>

          <div className="experience-stage">
            <aside className={`company-stage tone-${experience[activeRole].tone}`} aria-label="Active company">
              <span className="stage-index">0{activeRole + 1}</span>
              <img src={experience[activeRole].logo} alt={`${experience[activeRole].company} logo`} />
              <strong>{experience[activeRole].company}</strong>
              <span>{experience[activeRole].role}</span>
            </aside>

            <div className="experience-flow">
              {experience.map((role, index) => (
                <article
                  className={`experience-item ${activeRole === index ? "is-active" : ""}`}
                  data-role-index={index}
                  key={`${role.company}-${role.role}`}
                  onMouseEnter={() => setActiveRole(index)}
                  onFocus={() => setActiveRole(index)}
                  tabIndex="0"
                >
                  <div className="experience-marker" aria-hidden="true">
                    <span />
                  </div>
                  <div className="experience-content">
                    <div className="role-head">
                      <div>
                        <p>{role.company}</p>
                        <h3>{role.role}</h3>
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
                    <div className="tech-ribbon" aria-label={`${role.company} technologies`}>
                      {role.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section stack-section" id="stack" aria-labelledby="stack-title">
        <div className="section-inner stack-layout">
          <div className="stack-copy" data-reveal>
            <p className="section-kicker">03 / Technical Universe</p>
            <h2 id="stack-title">A stack organized by the problems it solves.</h2>
            <p>
              The technologies are grouped by actual resume-backed usage: backend services, cloud
              delivery, AI workflows, data pipelines, languages, and computer science fundamentals.
            </p>
          </div>

          <div className="stack-visual" data-reveal>
            <div className="constellation" aria-label="Technology categories">
              {skillGroups.map((group, index) => {
                const Icon = group.icon;
                return (
                  <button
                    className={`constellation-node node-${index + 1} ${activeSkill === group.id ? "is-active" : ""}`}
                    key={group.id}
                    type="button"
                    onClick={() => setActiveSkill(group.id)}
                    aria-pressed={activeSkill === group.id}
                  >
                    <Icon aria-hidden="true" />
                    <span>{group.label}</span>
                  </button>
                );
              })}
              <div className="constellation-core">
                <span>Software</span>
                <strong>Systems</strong>
              </div>
            </div>

            <article className="skill-detail" aria-live="polite">
              <p>{selectedSkill.label}</p>
              <h3>{selectedSkill.lead}</h3>
              <div className="skill-cloud">
                {selectedSkill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section education-section" id="education" aria-labelledby="education-title">
        <div className="section-inner education-layout" data-reveal>
          <div>
            <p className="section-kicker">04 / Background</p>
            <h2 id="education-title">Computer Science foundation from IIT (BHU), Varanasi.</h2>
          </div>
          <div className="education-list">
            {education.map((item) => (
              <article className="education-item" key={item.institution}>
                <div>
                  <span>{item.dates}</span>
                  <h3>{item.institution}</h3>
                  <p>{item.program}</p>
                </div>
                <strong>{item.result}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact" aria-labelledby="contact-title">
        <div className="section-inner contact-layout" data-reveal>
          <div>
            <p className="section-kicker">05 / Let&apos;s Connect</p>
            <h2 id="contact-title">For recruiter screens, engineering conversations, and role discussions.</h2>
          </div>
          <div className="contact-panel">
            <p>
              Reach me directly by email, review the resume, or use LinkedIn and GitHub for professional
              context.
            </p>
            <div className="contact-actions">
              <a className="button button-primary magnetic" href={links.email}>
                <FiMail aria-hidden="true" />
                Email
              </a>
              <a className="button button-secondary magnetic" href={resumeUrl} target="_blank" rel="noreferrer">
                <FiDownload aria-hidden="true" />
                Resume
              </a>
              <a className="button button-secondary magnetic" href={links.linkedin} target="_blank" rel="noreferrer">
                <FiLinkedin aria-hidden="true" />
                LinkedIn
                <FiArrowUpRight aria-hidden="true" />
              </a>
              <a className="button button-secondary magnetic" href={links.github} target="_blank" rel="noreferrer">
                <FiGithub aria-hidden="true" />
                GitHub
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
