import { useEffect, useMemo, useRef, useState } from "react";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiChevronDown,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

/* ============================================================
   CONSTANTS
   ============================================================ */

const BASE = import.meta.env.BASE_URL;
const RESUME_URL = `${BASE}Sandeep_Singh_Resume.pdf`;

const LINKS = {
  github: "https://github.com/studysingh",
  linkedin: "https://www.linkedin.com/in/sandeep-singh-88304825b/",
  email: "mailto:sandeep.singh.pro8@gmail.com",
};

// Hero animated role descriptor — cycles every 3.2s
const ROLES = [
  "builds production APIs",
  "ships cloud infrastructure",
  "engineers AI workflows",
  "automates deployment pipelines",
];

// Professional experience — resume source of truth
const EXPERIENCE = [
  {
    company: "Teradata",
    logo: `${BASE}logos/teradata.svg`,
    role: "AI Engineer",
    dates: "Jun 2026 – Present",
    location: "Remote",
    tone: "#ff6500",
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
    dates: "Feb 2026 – Jun 2026",
    location: "Remote",
    tone: "#00d4aa",
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
    dates: "May 2025 – Jul 2025",
    location: "Remote",
    tone: "#4b8cf4",
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

// Technical skill groups — organized by problem domain, not alphabet
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
    desc: "Foundations shaping every system design and implementation choice.",
    items: ["Data Structures", "Algorithms", "OS", "DBMS", "Computer Networks", "OOP"],
  },
];

// Education — most prominent first
const EDUCATION = [
  {
    institution: "Indian Institute of Technology (BHU), Varanasi",
    program: "B.Tech in Computer Science and Engineering",
    dates: "2022 – 2026",
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

// Canvas tech nodes — home positions (0–1 fractional), oscillation params added at runtime
const CANVAS_NODES_DEF = [
  { label: "AWS",        hx: 0.64, hy: 0.20 },
  { label: "Kubernetes", hx: 0.26, hy: 0.17 },
  { label: "Docker",     hx: 0.80, hy: 0.46 },
  { label: "Node.js",    hx: 0.16, hy: 0.54 },
  { label: "Python",     hx: 0.76, hy: 0.74 },
  { label: "MongoDB",    hx: 0.38, hy: 0.80 },
  { label: "RAG",        hx: 0.10, hy: 0.33 },
  { label: "CI/CD",      hx: 0.90, hy: 0.28 },
  { label: "Grafana",    hx: 0.52, hy: 0.62 },
];

/* ============================================================
   HERO CANVAS COMPONENT
   ============================================================ */

const HeroCanvas = () => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  // Build node data with oscillation parameters once
  const nodes = useMemo(
    () =>
      CANVAS_NODES_DEF.map((n, i) => ({
        ...n,
        amplitude: 0.028 + (i % 4) * 0.008,
        phaseX: i * 1.28,
        phaseY: i * 0.94,
        freqX: 0.24 + (i % 5) * 0.032,
        freqY: 0.20 + (i % 4) * 0.028,
        layer: (i % 3) + 1, // parallax depth 1–3
      })),
    []
  );

  const prefersReduced = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  const isTouch = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(hover: none)").matches,
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Mouse tracking (desktop only)
    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };

    if (!isTouch) {
      window.addEventListener("mousemove", onMouseMove, { passive: true });
    }

    const renderFrame = () => {
      // Sync canvas pixel size to CSS size each frame (handles resize)
      const rect = canvas.getBoundingClientRect();
      const cw = Math.round(rect.width * dpr);
      const ch = Math.round(rect.height * dpr);
      if (!cw || !ch) {
        rafRef.current = requestAnimationFrame(renderFrame);
        return;
      }
      if (canvas.width !== cw || canvas.height !== ch) {
        canvas.width = cw;
        canvas.height = ch;
      }

      const w = rect.width;
      const h = rect.height;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, w, h);

      const t = Date.now() / 1000;
      const mx = mouseRef.current.x - 0.5;
      const my = mouseRef.current.y - 0.5;

      // Compute node screen positions
      const positions = nodes.map((n) => {
        const floatX = Math.sin(t * n.freqX + n.phaseX) * n.amplitude;
        const floatY = Math.cos(t * n.freqY + n.phaseY) * n.amplitude;
        const px = 0.03 + (n.layer * 0.012); // parallax per layer
        return {
          x: (n.hx + floatX + mx * px) * w,
          y: (n.hy + floatY + my * px) * h,
          label: n.label,
        };
      });

      // Connection distance relative to canvas diagonal
      const maxDist = Math.hypot(w, h) * 0.36;

      // Draw connections
      positions.forEach((a, i) => {
        positions.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.32;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(0, 212, 170, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });
      });

      // Draw nodes
      const pulse = (Math.sin(t * 1.4) + 1) / 2; // 0..1 pulsing

      positions.forEach(({ x, y, label }) => {
        const r = 4.5;
        const glowR = r + 7 + pulse * 5;

        // Outer glow
        const grad = ctx.createRadialGradient(x, y, r * 0.5, x, y, glowR);
        grad.addColorStop(0, "rgba(0, 212, 170, 0.38)");
        grad.addColorStop(1, "rgba(0, 212, 170, 0)");
        ctx.beginPath();
        ctx.arc(x, y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 212, 170, 0.92)";
        ctx.fill();

        // Label
        ctx.font = "500 10.5px 'JetBrains Mono', monospace";
        ctx.fillStyle = "rgba(237, 238, 248, 0.78)";
        ctx.textAlign = "center";
        ctx.fillText(label, x, y - 13);
      });

      ctx.restore();
      rafRef.current = requestAnimationFrame(renderFrame);
    };

    if (prefersReduced || isTouch) {
      // One-time static render for reduced motion / touch devices
      const rect = canvas.getBoundingClientRect();
      const cw = Math.round(rect.width * dpr);
      const ch = Math.round(rect.height * dpr);
      canvas.width = cw || 300 * dpr;
      canvas.height = ch || 300 * dpr;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.save();
      ctx.scale(dpr, dpr);
      nodes.forEach((n) => {
        const x = n.hx * w;
        const y = n.hy * h;
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 212, 170, 0.7)";
        ctx.fill();
        ctx.font = "500 10px monospace";
        ctx.fillStyle = "rgba(237, 238, 248, 0.65)";
        ctx.textAlign = "center";
        ctx.fillText(n.label, x, y - 12);
      });
      ctx.restore();
    } else {
      rafRef.current = requestAnimationFrame(renderFrame);
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [nodes, prefersReduced, isTouch]);

  return (
    <canvas
      ref={canvasRef}
      className="hero-canvas"
      role="img"
      aria-label="Interactive visualization of Sandeep Singh's core technologies"
    />
  );
};

/* ============================================================
   HOME PAGE
   ============================================================ */

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleState, setRoleState] = useState("idle"); // "idle" | "exiting" | "entering"
  const [activeRole, setActiveRole] = useState(0);
  const [activeTab, setActiveTab] = useState("languages");

  // Track cursor for radial gradient background
  useEffect(() => {
    const canHover =
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover) return;

    const onPointer = (e) => {
      const x = ((e.clientX / window.innerWidth) * 100).toFixed(1);
      const y = ((e.clientY / window.innerHeight) * 100).toFixed(1);
      document.documentElement.style.setProperty("--cx", `${x}%`);
      document.documentElement.style.setProperty("--cy", `${y}%`);
    };

    window.addEventListener("pointermove", onPointer, { passive: true });
    return () => window.removeEventListener("pointermove", onPointer);
  }, []);

  // Role subtitle cycling animation
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const id = setInterval(() => {
      setRoleState("exiting");
      setTimeout(() => {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setRoleState("entering");
        // Two RAFs: first to paint "entering" CSS, second to kick off the transition to "idle"
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setRoleState("idle"));
        });
      }, 310);
    }, 3200);

    return () => clearInterval(id);
  }, []);

  // Scroll reveal system
  useEffect(() => {
    const items = document.querySelectorAll("[data-reveal]");
    if (!items.length) return;
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
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Experience active role tracking via scroll
  useEffect(() => {
    const cards = document.querySelectorAll("[data-role-index]");
    if (!cards.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActiveRole(Number(visible.target.dataset.roleIndex));
        }
      },
      { rootMargin: "-22% 0px -48% 0px", threshold: [0.2, 0.5, 0.8] }
    );
    cards.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const activeExp = EXPERIENCE[activeRole];
  const selectedGroup = SKILL_GROUPS.find((g) => g.id === activeTab) ?? SKILL_GROUPS[0];

  return (
    <>
      {/* ══════════════════════════════════════════════
          01 — HERO
          ══════════════════════════════════════════════ */}
      <section id="home" className="hero" aria-label="Introduction">
        <div className="hero-inner">

          {/* Left: copy */}
          <div className="hero-copy">
            {/* Monospace terminal kicker */}
            <div className="hero-kicker" aria-hidden="true">
              <span className="hero-kicker-prompt">›</span>
              <span>AI_ENGINEER @ TERADATA</span>
              <span className="hero-kicker-cursor" />
            </div>

            {/* Display name — clip-path left→right reveal */}
            <h1 className="hero-name">
              Sandeep
              <br />
              Singh
            </h1>

            {/* Animated cycling role text */}
            <span
              className="hero-role-wrap"
              aria-live="polite"
              aria-atomic="true"
              aria-label={`Role: ${ROLES[roleIndex]}`}
            >
              <span
                className={`hero-role-text${
                  roleState === "exiting"
                    ? " is-exiting"
                    : roleState === "entering"
                    ? " is-entering"
                    : ""
                }`}
                aria-hidden="true"
              >
                {ROLES[roleIndex]}
              </span>
            </span>

            {/* Lede */}
            <p className="hero-lede">
              Backend-first engineer specializing in production cloud services,
              Kubernetes automation, REST APIs, and LLM-powered data pipelines.
            </p>

            {/* CTAs */}
            <div className="hero-actions" aria-label="Primary actions">
              <a className="btn btn-primary" href="#contact">
                Say hello
                <FiArrowRight aria-hidden="true" />
              </a>
              <a
                className="btn btn-ghost"
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
              >
                <FiDownload aria-hidden="true" />
                Resume
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>

            {/* Social links */}
            <div className="hero-links" aria-label="Social profiles">
              <a
                className="hero-link"
                href={LINKS.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
              >
                <FiGithub size={15} aria-hidden="true" />
                GitHub
              </a>
              <a
                className="hero-link"
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <FiLinkedin size={15} aria-hidden="true" />
                LinkedIn
              </a>
              <a
                className="hero-link"
                href={LINKS.email}
                aria-label="Send email"
              >
                <FiMail size={15} aria-hidden="true" />
                Email
              </a>
            </div>
          </div>

          {/* Right: animated canvas */}
          <div className="hero-visual">
            <HeroCanvas />
          </div>
        </div>

        {/* Scroll cue */}
        <div className="hero-scroll-cue" aria-hidden="true">
          <span>scroll</span>
          <FiChevronDown size={14} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          02 — ABOUT
          ══════════════════════════════════════════════ */}
      <section
        id="about"
        className="section about-section"
        aria-labelledby="about-title"
      >
        <div className="section-inner about-inner">

          {/* Sticky left: section number + heading */}
          <div className="about-left" data-reveal>
            <p className="about-section-num">01 / Engineering Identity</p>
            <h2 id="about-title" className="about-heading">
              Backend&#8209;first.
              <br />
              Production&#8209;aware.
              <br />
              Always
              <br />
              automating.
            </h2>
          </div>

          {/* Right: prose + principle chips */}
          <div className="about-right" data-reveal data-reveal-delay="2">
            <div className="about-prose">
              <p>
                I build software that handles real traffic across real
                infrastructure. My work spans{" "}
                <mark>API design</mark>,{" "}
                <mark>cloud deployment</mark>,{" "}
                <mark>containerized services</mark>,{" "}
                <mark>authentication flows</mark>, and{" "}
                <mark>LLM-powered data pipelines</mark> — the layers that
                make systems dependable rather than merely functional.
              </p>
              <p>
                Three roles in twelve months trace a deliberate arc:
                scraping and classifying the web at <mark>ZoomInfo</mark>,
                building full-stack sustainability platforms at{" "}
                <mark>GE3S</mark>, and now shipping production cloud
                automation at <mark>Teradata</mark> — where the problems
                are Kubernetes secrets, CI/CD triggers, and service
                observability.
              </p>
              <p>
                Computer Science from <mark>IIT (BHU) Varanasi</mark> gave
                me the foundations. Production engineering is where the
                abstractions either hold or don't.
              </p>
            </div>

            <div className="principle-grid" aria-label="Engineering principles">
              {[
                { sym: "›_", text: "Ship reliable backend services" },
                { sym: "◉",  text: "Make production systems observable" },
                { sym: "⟳",  text: "Automate the repeated path" },
                { sym: "↗",  text: "Turn ambiguous specs into APIs" },
              ].map((p) => (
                <div className="principle-chip" key={p.text}>
                  <span className="principle-chip-sym" aria-hidden="true">
                    {p.sym}
                  </span>
                  {p.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          03 — EXPERIENCE
          ══════════════════════════════════════════════ */}
      <section
        id="experience"
        className="section experience-section"
        aria-labelledby="experience-title"
      >
        <div className="section-inner">

          <div className="experience-header" data-reveal>
            <p className="kicker">02 / Experience</p>
            <h2 id="experience-title" className="section-heading">
              Where I've built things.
            </h2>
            <p className="body-lead">
              Three recent roles trace a clear arc: data-heavy engineering,
              product-facing full-stack systems, and production cloud automation.
            </p>
          </div>

          <div className="experience-stage">

            {/* Sticky company identity panel */}
            <aside
              className="company-panel"
              aria-label={`Currently viewing: ${activeExp.company}`}
              style={{ "--panel-color": activeExp.tone }}
            >
              <span className="panel-index" aria-hidden="true">
                {String(activeRole + 1).padStart(2, "0")} /{" "}
                {String(EXPERIENCE.length).padStart(2, "0")}
              </span>

              <div className="panel-logo" aria-hidden="true">
                {activeExp.logo ? (
                  <img
                    src={activeExp.logo}
                    alt={`${activeExp.company} logo`}
                    width="180"
                    height="52"
                    loading="lazy"
                  />
                ) : (
                  <span className="panel-logo-text">{activeExp.company}</span>
                )}
              </div>

              <p className="panel-company" aria-hidden="true">
                {activeExp.company}
              </p>
              <p className="panel-role" aria-hidden="true">
                {activeExp.role}
              </p>
              <p className="panel-dates" aria-hidden="true">
                {activeExp.dates}
              </p>

              {/* Progress dots */}
              <div
                className="panel-dots"
                role="tablist"
                aria-label="Experience navigation"
              >
                {EXPERIENCE.map((exp, i) => (
                  <button
                    key={exp.company}
                    className={`panel-dot${activeRole === i ? " is-active" : ""}`}
                    role="tab"
                    aria-selected={activeRole === i}
                    aria-label={`Go to ${exp.company}`}
                    onClick={() => {
                      const el = document.querySelector(
                        `[data-role-index="${i}"]`
                      );
                      el?.scrollIntoView({ behavior: "smooth", block: "center" });
                    }}
                  />
                ))}
              </div>
            </aside>

            {/* Scrolling timeline */}
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
                    <p className="exp-company-label">{role.company}</p>
                    <h3 className="exp-role-title">{role.role}</h3>

                    <div className="exp-meta">
                      <span className="exp-date">
                        <FiMapPin size={10} aria-hidden="true" />
                        {role.dates}
                      </span>
                      <span className="exp-location">
                        <FiMapPin size={10} aria-hidden="true" />
                        {role.location}
                      </span>
                    </div>

                    <p className="exp-summary">{role.summary}</p>

                    <ul
                      className="exp-highlights"
                      aria-label={`${role.company} key contributions`}
                    >
                      {role.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>

                    <div
                      className="exp-tech"
                      aria-label={`${role.company} technologies`}
                    >
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
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          04 — TECHNICAL STACK
          ══════════════════════════════════════════════ */}
      <section
        id="stack"
        className="section stack-section"
        aria-labelledby="stack-title"
      >
        <div className="section-inner">

          <div className="stack-header" data-reveal>
            <p className="kicker">03 / Technical Stack</p>
            <h2 id="stack-title" className="section-heading">
              Organized by what I actually use.
            </h2>
            <p className="body-lead">
              Technologies grouped by the problems they solve — not alphabetical
              order, not percentages, not fabricated skill meters.
            </p>
          </div>

          <div className="stack-body">
            {/* Vertical category selector */}
            <nav
              className="stack-tabs"
              aria-label="Technology categories"
            >
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

            {/* Technology display — key={activeTab} forces re-animation on switch */}
            <div
              className="stack-panel"
              aria-live="polite"
              aria-atomic="true"
            >
              <p className="panel-category-label">{selectedGroup.label}</p>
              <p className="panel-desc">{selectedGroup.desc}</p>
              <div className="tech-display" key={activeTab}>
                {selectedGroup.items.map((item, i) => (
                  <span
                    key={item}
                    className="tech-display-item"
                    style={{ "--item-delay": `${i * 55}ms` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          05 — EDUCATION
          ══════════════════════════════════════════════ */}
      <section
        id="education"
        className="section education-section"
        aria-labelledby="education-title"
      >
        <div className="section-inner">
          <div className="education-header" data-reveal>
            <p className="kicker">04 / Background</p>
            <h2 id="education-title" className="section-heading">
              Computer Science from IIT (BHU), Varanasi.
            </h2>
          </div>

          <div className="edu-list" role="list" data-reveal data-reveal-delay="2">
            {EDUCATION.map((item) => (
              <article
                className="edu-item"
                key={item.institution}
                role="listitem"
              >
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

      {/* ══════════════════════════════════════════════
          06 — CONTACT
          ══════════════════════════════════════════════ */}
      <section
        id="contact"
        className="section contact-section"
        aria-labelledby="contact-title"
      >
        <div className="section-inner contact-inner" data-reveal>
          <p className="kicker">05 / Let's Connect</p>
          <h2 id="contact-title" className="contact-heading">
            Open to the
            <br />
            <em>right opportunity.</em>
          </h2>
          <p className="contact-sub">
            Recruiter screens, engineering conversations, and role discussions
            — reach out directly by email or connect on LinkedIn and GitHub.
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
            <a
              className="btn btn-ghost"
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
            >
              <FiDownload aria-hidden="true" />
              Download Resume
            </a>
            <a
              className="btn btn-ghost"
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin aria-hidden="true" />
              LinkedIn
              <FiArrowUpRight aria-hidden="true" />
            </a>
            <a
              className="btn btn-ghost"
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
            >
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
