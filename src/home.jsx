import { useEffect, useMemo, useRef, useState } from "react";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCalendar,
  FiChevronDown,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

const BASE = import.meta.env.BASE_URL;
const RESUME_URL = `${BASE}Sandeep_Singh_Resume.pdf`;

const LINKS = {
  github: "https://github.com/studysingh",
  linkedin: "https://www.linkedin.com/in/sandeep-singh-88304825b/",
  email: "mailto:sandeep.singh.pro8@gmail.com",
};

const ROLES = [
  "builds production APIs",
  "ships cloud infrastructure",
  "engineers AI workflows",
  "automates deployment pipelines",
];

const EXPERIENCE = [
  {
    company: "Teradata",
    logo: `${BASE}logos/teradata.svg`,
    role: "AI Engineer",
    dates: "Jun 2026 - Present",
    location: "Remote",
    summary:
      "Production cloud services, CI/CD automation, Kubernetes security, observability infrastructure, and AI-assisted requirements engineering.",
    highlights: [
      "Implemented CI/CD automation that triggers Docker image builds from changes to deployment configs, shell scripts, and Kubernetes YAML manifests.",
      "Built Kubernetes secret management with External Secrets Operator, integrating AWS Secrets Manager and supporting Azure and GCP environments.",
      "Contributed to a requirements engineering pipeline that analyzes software requirements and generates relevant discovery questions.",
      "Created Grafana dashboards for service health, deployment metrics, and operational performance visibility.",
    ],
    tech: ["AWS", "Docker", "Kubernetes", "ESO", "Grafana", "CI/CD", "Shell"],
  },
  {
    company: "GE3S",
    logo: `${BASE}logos/ge3s.png`,
    role: "Full Stack Developer",
    dates: "Feb 2026 - Jun 2026",
    location: "Remote",
    summary:
      "Centralized web platforms, secure authentication, RAG-based question answering over sustainability reports, payment flows, and cloud deployment.",
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
    logo: `${BASE}logos/zoominfo.png`,
    role: "Software Engineering Intern",
    dates: "May 2025 - Jul 2025",
    location: "Remote",
    summary:
      "Data extraction pipelines, content preprocessing, LLM classification, REST API design, and asynchronous workflow orchestration.",
    highlights: [
      "Developed a scalable crawler to extract product URLs, metadata, and structured content from company websites.",
      "Reduced noisy, duplicate, and inconsistent extracted data through cleaning and preprocessing pipelines.",
      "Built an LLM classification pipeline for value propositions and pain points.",
      "Designed RESTful APIs with Next.js and orchestrated asynchronous workflows using Temporal.io.",
    ],
    tech: ["Python", "BeautifulSoup", "Selenium", "Next.js", "Temporal.io", "LLM APIs"],
  },
];

const SKILL_GROUPS = [
  {
    id: "languages",
    label: "Languages",
    desc: "Daily implementation languages grounded in CS fundamentals.",
    items: ["Python", "JavaScript", "C++", "Shell Scripting"],
  },
  {
    id: "backend",
    label: "Backend",
    desc: "Service design, API contracts, authentication, and workflow logic.",
    items: ["Node.js", "Express.js", "Next.js", "REST APIs", "Authentication"],
  },
  {
    id: "cloud",
    label: "Cloud",
    desc: "Production deployment across cloud and container platforms.",
    items: ["AWS", "Docker", "Kubernetes", "Linux", "CI/CD"],
  },
  {
    id: "ai",
    label: "AI / LLM",
    desc: "LLM-backed retrieval, classification, and requirements analysis systems.",
    items: ["LLM APIs", "RAG", "Vector Databases", "Document Retrieval", "MCP"],
  },
  {
    id: "data",
    label: "Data",
    desc: "Extraction, persistence, cleaning, and async processing.",
    items: ["MongoDB", "SQL", "Temporal.io", "BeautifulSoup", "Selenium"],
  },
  {
    id: "observability",
    label: "Observability",
    desc: "Visibility into production systems through dashboards and metrics.",
    items: ["Grafana", "ESO", "Git"],
  },
  {
    id: "cs",
    label: "CS Core",
    desc: "Foundations shaping system design and implementation choices.",
    items: ["Data Structures", "Algorithms", "OS", "DBMS", "Computer Networks", "OOP"],
  },
];

const EDUCATION = [
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

const CANVAS_NODES = [
  { label: "AWS", hx: 0.64, hy: 0.2 },
  { label: "Kubernetes", hx: 0.26, hy: 0.17 },
  { label: "Docker", hx: 0.8, hy: 0.46 },
  { label: "Node.js", hx: 0.16, hy: 0.54 },
  { label: "Python", hx: 0.76, hy: 0.74 },
  { label: "MongoDB", hx: 0.38, hy: 0.8 },
  { label: "RAG", hx: 0.1, hy: 0.33 },
  { label: "CI/CD", hx: 0.9, hy: 0.28 },
  { label: "Grafana", hx: 0.52, hy: 0.62 },
];

const HeroCanvas = () => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  const nodes = useMemo(
    () =>
      CANVAS_NODES.map((node, index) => ({
        ...node,
        amplitude: 0.025 + (index % 4) * 0.007,
        phaseX: index * 1.28,
        phaseY: index * 0.94,
        freqX: 0.24 + (index % 5) * 0.032,
        freqY: 0.2 + (index % 4) * 0.028,
        layer: (index % 3) + 1,
      })),
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(hover: none)").matches;

    const onMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (event.clientX - rect.left) / rect.width,
        y: (event.clientY - rect.top) / rect.height,
      };
    };

    if (!isTouch) {
      window.addEventListener("mousemove", onMouseMove, { passive: true });
    }

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const canvasWidth = Math.round(rect.width * dpr);
      const canvasHeight = Math.round(rect.height * dpr);

      if (!canvasWidth || !canvasHeight) {
        rafRef.current = requestAnimationFrame(render);
        return;
      }

      if (canvas.width !== canvasWidth || canvas.height !== canvasHeight) {
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
      }

      const width = rect.width;
      const height = rect.height;
      const time = reducedMotion || isTouch ? 0 : Date.now() / 1000;
      const mx = reducedMotion || isTouch ? 0 : mouseRef.current.x - 0.5;
      const my = reducedMotion || isTouch ? 0 : mouseRef.current.y - 0.5;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const positions = nodes.map((node) => {
        const px = 0.03 + node.layer * 0.012;
        return {
          label: node.label,
          x: (node.hx + Math.sin(time * node.freqX + node.phaseX) * node.amplitude + mx * px) * width,
          y: (node.hy + Math.cos(time * node.freqY + node.phaseY) * node.amplitude + my * px) * height,
        };
      });

      const maxDistance = Math.hypot(width, height) * 0.36;
      positions.forEach((a, index) => {
        positions.slice(index + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(0, 212, 170, ${(1 - dist / maxDistance) * 0.3})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });
      });

      positions.forEach(({ x, y, label }) => {
        const gradient = ctx.createRadialGradient(x, y, 2, x, y, 18);
        gradient.addColorStop(0, "rgba(0, 212, 170, 0.46)");
        gradient.addColorStop(1, "rgba(0, 212, 170, 0)");
        ctx.beginPath();
        ctx.arc(x, y, 18, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, 4.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 212, 170, 0.94)";
        ctx.fill();

        ctx.font = "500 10.5px 'JetBrains Mono', monospace";
        ctx.fillStyle = "rgba(237, 238, 248, 0.78)";
        ctx.textAlign = "center";
        ctx.fillText(label, x, y - 13);
      });

      ctx.restore();

      if (!reducedMotion && !isTouch) {
        rafRef.current = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [nodes]);

  return (
    <canvas
      ref={canvasRef}
      className="hero-canvas"
      role="img"
      aria-label="Interactive map of Sandeep Singh's core engineering stack"
    />
  );
};

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleState, setRoleState] = useState("");
  const [activeRole, setActiveRole] = useState(0);
  const [activeTab, setActiveTab] = useState(SKILL_GROUPS[0].id);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover) return undefined;

    const onPointerMove = (event) => {
      document.documentElement.style.setProperty("--cx", `${((event.clientX / window.innerWidth) * 100).toFixed(1)}%`);
      document.documentElement.style.setProperty("--cy", `${((event.clientY / window.innerHeight) * 100).toFixed(1)}%`);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return undefined;

    const interval = setInterval(() => {
      setRoleState("is-exiting");
      window.setTimeout(() => {
        setRoleIndex((index) => (index + 1) % ROLES.length);
        setRoleState("is-entering");
        requestAnimationFrame(() => requestAnimationFrame(() => setRoleState("")));
      }, 300);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll("[data-role-index]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveRole(Number(visible.target.dataset.roleIndex));
      },
      { rootMargin: "-22% 0px -48% 0px", threshold: [0.2, 0.5, 0.8] }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const selectedGroup = SKILL_GROUPS.find((group) => group.id === activeTab) ?? SKILL_GROUPS[0];

  return (
    <>
      <section id="home" className="hero" aria-label="Introduction">
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="hero-kicker" aria-hidden="true">
              <span className="hero-kicker-prompt">&gt;</span>
              <span>AI_ENGINEER @ TERADATA</span>
              <span className="hero-kicker-cursor" />
            </div>

            <h1 className="hero-name">
              <span>Sandeep</span>
              <span>Singh</span>
            </h1>

            <span
              className="hero-role-wrap"
              aria-live="polite"
              aria-atomic="true"
              aria-label={`Role: ${ROLES[roleIndex]}`}
            >
              <span className={`hero-role-text ${roleState}`} aria-hidden="true">
                {ROLES[roleIndex]}
              </span>
            </span>

            <p className="hero-lede">
              Backend-first engineer specializing in production cloud services, Kubernetes automation,
              REST APIs, and LLM-powered data pipelines.
            </p>

            <div className="hero-actions" aria-label="Primary actions">
              <a className="btn btn-primary" href="#contact">
                Say hello
                <FiArrowRight aria-hidden="true" />
              </a>
              <a className="btn btn-ghost" href={RESUME_URL} target="_blank" rel="noreferrer">
                <FiDownload aria-hidden="true" />
                Resume
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>

            <div className="hero-links" aria-label="Social profiles">
              <a className="hero-link" href={LINKS.github} target="_blank" rel="noreferrer">
                <FiGithub size={15} aria-hidden="true" />
                GitHub
              </a>
              <a className="hero-link" href={LINKS.linkedin} target="_blank" rel="noreferrer">
                <FiLinkedin size={15} aria-hidden="true" />
                LinkedIn
              </a>
              <a className="hero-link" href={LINKS.email}>
                <FiMail size={15} aria-hidden="true" />
                Email
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <HeroCanvas />
          </div>
        </div>

        <div className="hero-scroll-cue" aria-hidden="true">
          <span>scroll</span>
          <FiChevronDown size={14} />
        </div>
      </section>

      <section id="about" className="section about-section" aria-labelledby="about-title">
        <div className="section-inner about-inner">
          <div className="about-left" data-reveal>
            <p className="about-section-num">01 / Engineering Identity</p>
            <h2 id="about-title" className="about-heading">
              Backend-first.
              <br />
              Production-aware.
              <br />
              Always automating.
            </h2>
          </div>

          <div className="about-right" data-reveal data-reveal-delay="2">
            <div className="about-prose">
              <p>
                I build software that handles real traffic across real infrastructure. My work spans{" "}
                <mark>API design</mark>, <mark>cloud deployment</mark>,{" "}
                <mark>containerized services</mark>, <mark>authentication flows</mark>, and{" "}
                <mark>LLM-powered data pipelines</mark>.
              </p>
              <p>
                Three roles in twelve months trace a deliberate arc: scraping and classifying the web
                at <mark>ZoomInfo</mark>, building full-stack sustainability platforms at{" "}
                <mark>GE3S</mark>, and now shipping production cloud automation at{" "}
                <mark>Teradata</mark>.
              </p>
              <p>
                Computer Science from <mark>IIT (BHU) Varanasi</mark> gave me the foundations.
                Production engineering is where the abstractions either hold or do not.
              </p>
            </div>

            <div className="principle-grid" aria-label="Engineering principles">
              {[
                ["ship", "Ship reliable backend services"],
                ["observe", "Make production systems observable"],
                ["automate", "Automate the repeated path"],
                ["clarify", "Turn ambiguous specs into APIs"],
              ].map(([key, text]) => (
                <div className="principle-chip" key={key}>
                  <span className="principle-chip-sym" aria-hidden="true">
                    {key.slice(0, 2)}
                  </span>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section experience-section" aria-labelledby="experience-title">
        <div className="section-inner">
          <div className="experience-header" data-reveal>
            <p className="kicker">02 / Experience</p>
            <h2 id="experience-title" className="section-heading">
              Recruiter-readable work, with the technical depth one scroll away.
            </h2>
            <p className="body-lead">
              Each role leads with company identity and role context, then moves into concrete
              contributions and the technologies used.
            </p>
          </div>

          <div className="experience-timeline" role="list">
            <div className="timeline-line" aria-hidden="true" />

            {EXPERIENCE.map((role, index) => (
              <article
                key={`${role.company}-${role.role}`}
                className={`exp-card${activeRole === index ? " is-active" : ""}`}
                data-role-index={index}
                onMouseEnter={() => setActiveRole(index)}
                onFocus={() => setActiveRole(index)}
                tabIndex={0}
                role="listitem"
                aria-label={`${role.role} at ${role.company}`}
              >
                <div className="exp-marker" aria-hidden="true">
                  <span className="exp-dot" />
                </div>

                <div className="exp-body">
                  <div className="exp-brand">
                    <div className="exp-logo-frame">
                      <img src={role.logo} alt={`${role.company} logo`} className="exp-logo-img" loading="lazy" />
                    </div>
                    <div className="exp-company-text">
                      <span className="exp-company-name">{role.company}</span>
                      <h3 className="exp-role-title">{role.role}</h3>
                    </div>
                  </div>

                  <div className="exp-meta">
                    <span className="exp-date">
                      <FiCalendar size={12} aria-hidden="true" />
                      {role.dates}
                    </span>
                    <span className="exp-location">
                      <FiMapPin size={12} aria-hidden="true" />
                      {role.location}
                    </span>
                  </div>

                  <p className="exp-summary">{role.summary}</p>

                  <ul className="exp-highlights" aria-label={`${role.company} key contributions`}>
                    {role.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>

                  <div className="exp-tech" aria-label={`${role.company} technologies`}>
                    {role.tech.map((tech) => (
                      <span className="tech-tag" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="section stack-section" aria-labelledby="stack-title">
        <div className="section-inner">
          <div className="stack-header" data-reveal>
            <p className="kicker">03 / Technical Stack</p>
            <h2 id="stack-title" className="section-heading">
              Organized by what I actually use.
            </h2>
            <p className="body-lead">
              Technologies grouped by the problems they solve, without fabricated percentages or skill meters.
            </p>
          </div>

          <div className="stack-body">
            <nav className="stack-tabs" aria-label="Technology categories">
              {SKILL_GROUPS.map((group) => (
                <button
                  key={group.id}
                  className={`stack-tab${activeTab === group.id ? " is-active" : ""}`}
                  type="button"
                  onClick={() => setActiveTab(group.id)}
                  aria-pressed={activeTab === group.id}
                >
                  {group.label}
                  <span className="tab-count" aria-hidden="true">
                    {group.items.length}
                  </span>
                </button>
              ))}
            </nav>

            <div className="stack-panel" aria-live="polite" aria-atomic="true">
              <p className="panel-category-label">{selectedGroup.label}</p>
              <p className="panel-desc">{selectedGroup.desc}</p>
              <div className="tech-display" key={activeTab}>
                {selectedGroup.items.map((item, index) => (
                  <span
                    key={item}
                    className="tech-display-item"
                    style={{ "--item-delay": `${index * 55}ms` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="section education-section" aria-labelledby="education-title">
        <div className="section-inner">
          <div className="education-header" data-reveal>
            <p className="kicker">04 / Background</p>
            <h2 id="education-title" className="section-heading">
              Computer Science from IIT (BHU), Varanasi.
            </h2>
          </div>

          <div className="edu-list" role="list" data-reveal data-reveal-delay="2">
            {EDUCATION.map((item) => (
              <article className="edu-item" key={item.institution} role="listitem">
                <span className="edu-year">{item.dates}</span>
                <div className="edu-body">
                  <h3>{item.institution}</h3>
                  <p>{item.program}</p>
                </div>
                <span className="edu-result">{item.result}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section" aria-labelledby="contact-title">
        <div className="section-inner contact-inner" data-reveal>
          <p className="kicker">05 / Let's Connect</p>
          <h2 id="contact-title" className="contact-heading">
            Open to the
            <br />
            <em>right opportunity.</em>
          </h2>
          <p className="contact-sub">
            Recruiter screens, engineering conversations, and role discussions can start with email,
            LinkedIn, GitHub, or the resume.
          </p>
          <a className="contact-email-link" href={LINKS.email}>
            <FiMail size={16} aria-hidden="true" />
            sandeep.singh.pro8@gmail.com
          </a>
          <div className="contact-actions">
            <a className="btn btn-primary" href={LINKS.email}>
              <FiMail aria-hidden="true" />
              Send Email
              <FiArrowRight aria-hidden="true" />
            </a>
            <a className="btn btn-ghost" href={RESUME_URL} target="_blank" rel="noreferrer">
              <FiDownload aria-hidden="true" />
              Download Resume
            </a>
            <a className="btn btn-ghost" href={LINKS.linkedin} target="_blank" rel="noreferrer">
              <FiLinkedin aria-hidden="true" />
              LinkedIn
              <FiArrowUpRight aria-hidden="true" />
            </a>
            <a className="btn btn-ghost" href={LINKS.github} target="_blank" rel="noreferrer">
              <FiGithub aria-hidden="true" />
              GitHub
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
