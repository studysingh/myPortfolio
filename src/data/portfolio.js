export const PROFILE = {
  name: "Sandeep Singh",
  initials: "SS",
  title: "AI Engineer · Backend & Cloud",
  email: "sandeep.singh.pro8@gmail.com",
  phone: "+91-7078015115",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  location: "India · Open to Remote",
  education: "IIT (BHU) Varanasi · B.Tech CSE · CGPA 7.74",
  summary:
    "I build reliable, production-grade software across backend systems, cloud infrastructure, and AI pipelines. From CI/CD automation and Kubernetes secrets management to RAG systems and LLM classification pipelines — I turn complex requirements into shipping products.",
  roles: [
    "AI Engineer",
    "Backend Developer",
    "Cloud & DevOps",
    "Full Stack Dev",
    "Problem Solver",
  ],
};

export const NAV_LINKS = ["About", "Experience", "Skills", "Achievements"];

export const STATS = [
  { value: "3+", label: "Roles shipped" },
  { value: "480+", label: "LeetCode solved" },
  { value: "AI · Cloud", label: "Core focus" },
  { value: "IIT BHU", label: "CS Graduate" },
];

export const HIGHLIGHTS = [
  "Automated CI/CD for production cloud services with Docker + Kubernetes",
  "Built RAG & LLM pipelines over real-world enterprise documents",
  "Designed scalable crawlers and async workflows with Temporal.io",
  "Secured cross-service auth with SSO, 2FA, and secrets management",
];

export const TERMINAL_LINES = [
  { cmd: "whoami", out: "AI Engineer @ Teradata" },
  { cmd: "cat skills.txt", out: "Python · Node · AWS · K8s · LLMs" },
  { cmd: "echo $EDUCATION", out: "IIT BHU · CSE · 2026" },
  { cmd: "leetcode --stats", out: "480+ solved · 100 Days badge ✓" },
];

export const SKILLS = {
  Languages: ["C++", "Python", "JavaScript", "Shell Scripting"],
  "Backend / APIs": ["Express.js", "Next.js", "REST APIs", "SQL", "Node.js"],
  "Cloud & DevOps": [
    "AWS",
    "Docker",
    "Kubernetes",
    "Linux",
    "CI/CD",
    "Git",
    "Grafana",
    "Temporal.io",
  ],
  "AI / ML": ["LLM APIs", "RAG", "MCP", "Vector Databases"],
  "CS Fundamentals": ["DSA", "Operating Systems", "DBMS", "Computer Networks", "OOP"],
};

export const EXPERIENCE = [
  {
    company: "Teradata",
    role: "AI Engineer",
    period: "Jun 2026 – Present",
    type: "Remote",
    color: "#F2611C",
    logo: "/logos/teradata.png",
    summary:
      "Owning CI/CD automation, secrets management, and observability for production cloud services.",
    bullets: [
      "Implemented CI/CD automation for production cloud services — Docker builds triggered by K8s YAML and shell script changes.",
      "Integrated AWS Secrets Manager with Kubernetes via External Secrets Operator across Azure and GCP environments.",
      "Built a requirements engineering pipeline that auto-generates requirement-gathering questions from software specs.",
      "Created Grafana dashboards for production monitoring — service health, deployment metrics, and operational observability.",
    ],
  },
  {
    company: "GE3S",
    role: "Full Stack Developer",
    period: "Feb 2026 – Jun 2026",
    type: "Remote",
    color: "#0E9F6E",
    logo: "/logos/ge3s.png",
    summary:
      "Built a centralized MERN platform with AI-powered document Q&A and secure authentication.",
    bullets: [
      "Built a centralized MERN platform with RESTful APIs powering multiple organizational workflows.",
      "Developed RAG systems for Q&A over sustainability reports using document retrieval + LLM responses.",
      "Implemented SSO and 2FA for secure cross-service authentication.",
      "Integrated OpenAI, Stripe, and email automation APIs for AI, subscription, and communication workflows.",
    ],
  },
  {
    company: "ZoomInfo",
    role: "Software Engineering Intern",
    period: "May 2025 – Jul 2025",
    type: "Remote",
    color: "#E11D48",
    logo: "/logos/zoominfo.png",
    summary:
      "Shipped a scalable crawling + LLM classification pipeline with reliable async orchestration.",
    bullets: [
      "Built a scalable web crawler extracting product URLs, metadata, and structured content across company sites.",
      "Designed an LLM classification pipeline to label value propositions and pain points from crawled content.",
      "Orchestrated async workflows with Temporal.io to improve reliability and failure handling.",
      "Shipped RESTful APIs in Next.js for efficient downstream data serving.",
    ],
  },
];

export const ACHIEVEMENTS = [
  { icon: "🏆", title: "JEE Advanced", desc: "Top 0.5% nationwide — 2022" },
  { icon: "⚡", title: "LeetCode", desc: "480+ problems solved · 100 Days badge — 2026" },
  {
    icon: "🟢",
    title: "GeeksForGeeks",
    desc: "250+ problems solved · GFG T-Shirt awardee — 2026",
  },
];
