export const PROFILE = {
  name: "Sandeep Singh",
  initials: "SS",
  title: "Software Engineer · Cloud, Backend & AI",
  email: "sandeep.singh.pro8@gmail.com",
  phone: "+91-7078015115",
  github: "https://github.com/studysingh",
  linkedin: "https://www.linkedin.com/in/sandeep-singh-88304825b/",
  resume: "./Sandeep_Singh_Resume.pdf",
  location: "India · Remote-friendly",
  education: "IIT (BHU) Varanasi · B.Tech in Computer Science and Engineering · CGPA 7.74",
  summary:
    "Software Engineer with experience building backend services, REST APIs, and cloud applications using Python, JavaScript, AWS, Docker, and Kubernetes. I focus on reliable, production-grade systems with strong engineering fundamentals, CI/CD automation, and AI-driven product development.",
  roles: [
    "Software Engineer",
    "Backend Developer",
    "Cloud Engineer",
    "AI Systems Builder",
    "Full Stack Engineer",
  ],
};

export const NAV_LINKS = ["About", "Experience", "Skills", "Achievements"];

export const STATS = [
  { value: "3+", label: "Companies worked with" },
  { value: "480+", label: "LeetCode problems solved" },
  { value: "AWS · K8s", label: "Cloud & DevOps stack" },
  { value: "IIT BHU", label: "Computer Science graduate" },
];

export const HIGHLIGHTS = [
  "Automated CI/CD for production cloud services using Docker, Kubernetes, and deployment configuration changes.",
  "Built RAG and LLM-powered workflows for enterprise document retrieval and question answering.",
  "Developed scalable crawlers, REST APIs, and async orchestration pipelines for data-intensive products.",
  "Worked across backend, cloud, and full-stack systems with strong focus on security, observability, and reliability.",
];

export const TERMINAL_LINES = [
  { cmd: "whoami", out: "Software Engineer @ Teradata" },
  { cmd: "cat skills.txt", out: "Python · JavaScript · AWS · K8s · LLMs" },
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
    logo: "./logos/teradata.png",
    summary:
      "Partnering with production engineering teams to automate deployments, strengthen Kubernetes security, and make cloud operations more observable and reliable.",
    bullets: [
      "Implemented CI/CD automation for production cloud services, triggering Docker image builds based on changes to deployment configurations, shell scripts, and Kubernetes YAML manifests.",
      "Implemented Kubernetes secret management using External Secrets Operator (ESO), integrating AWS Secrets Manager with Kubernetes and supporting cloud environments including Azure and GCP.",
      "Contributed to requirements engineering automation by building a pipeline that analyzes software requirements and generates relevant requirement-gathering questions, reducing manual discussion effort.",
      "Built Grafana dashboards for production monitoring and observability, visualizing service health, deployment metrics, and operational performance to improve system visibility and troubleshooting.",
    ],
  },
  {
    company: "GE3S",
    role: "Full Stack Developer",
    period: "Feb 2026 – Jun 2026",
    type: "Remote",
    color: "#0E9F6E",
    logo: "./logos/ge3s.png",
    summary:
      "Built a centralized backend and web platform for multiple organizational workflows, integrating AI-powered document search and secure authentication across services.",
    bullets: [
      "Developed a centralized backend and web platform using React, Node.js, Express.js, and MongoDB, building RESTful APIs for multiple organizational workflows.",
      "Developed Retrieval-Augmented Generation (RAG) systems for question answering over sustainability reports, integrating document retrieval with LLM-based responses.",
      "Implemented SSO and 2FA for secure authentication across multiple organizational tools and services.",
      "Built scalable RESTful APIs and integrated third-party services including OpenAI, Stripe, and email automation for AI, subscription, and communication workflows.",
      "Containerized and deployed applications using Docker and AWS, supporting production-oriented cloud deployment and infrastructure management.",
    ],
  },
  {
    company: "ZoomInfo",
    role: "Software Engineering Intern",
    period: "May 2025 – Jul 2025",
    type: "Remote",
    color: "#E11D48",
    logo: "./logos/zoominfo.png",
    summary:
      "Built a data-intensive web crawling and classification pipeline to extract structured product insights and power downstream intelligence workflows.",
    bullets: [
      "Developed a scalable web crawler to extract product URLs, metadata, and structured content from multiple company websites using keyword-based discovery logic.",
      "Implemented data cleaning and preprocessing to reduce noise, duplicates, and inconsistencies in extracted web data.",
      "Built an LLM-based classification pipeline to identify and label value propositions and pain points from extracted content.",
      "Designed RESTful APIs using Next.js for efficient data serving and integration with downstream workflows.",
      "Orchestrated asynchronous workflows using Temporal.io, improving workflow reliability and failure handling.",
      "Worked with Python, BeautifulSoup, Selenium, Next.js, Temporal.io, and LLM APIs.",
    ],
  },
];

export const ACHIEVEMENTS = [
  { icon: "⚡", title: "LeetCode", desc: "480+ problems solved · 100 Days badge — 2026" },
  {
    icon: "🟢",
    title: "GeeksForGeeks",
    desc: "250+ problems solved · GFG T-Shirt awardee — 2026",
  },
];
