// Single source of truth for all portfolio content.
// Replace the placeholder values below with your own details.

export const profile = {
  name: 'Alex Carter',
  initials: 'AC',
  greeting: "Hi, I'm",
  roles: [
    'Full-Stack Developer',
    'Cloud & DevOps Engineer',
    'Open Source Contributor',
    'Problem Solver',
  ],
  tagline:
    'I design and build reliable, scalable software — from pixel-perfect interfaces to cloud infrastructure that runs them.',
  email: 'hello@example.com',
  location: 'Kuala Lumpur, Malaysia',
  resumeUrl: '#',
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export const social = [
  { name: 'GitHub', icon: 'github', url: 'https://github.com/' },
  { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/' },
  { name: 'Email', icon: 'mail', url: `mailto:${profile.email}` },
]

export const about = {
  paragraphs: [
    "I'm a software engineer with 5+ years of experience shipping web applications, APIs and cloud infrastructure for startups and enterprise teams. I enjoy owning features end-to-end: understanding the problem, designing the system, writing clean code and watching it run in production.",
    "When I'm not coding, I'm usually experimenting with home-lab Kubernetes clusters, writing about developer tooling, or contributing to open-source projects.",
  ],
  facts: [
    { label: 'Location', value: profile.location },
    { label: 'Experience', value: '5+ years' },
    { label: 'Focus', value: 'Web · Cloud · DevOps' },
    { label: 'Status', value: 'Open to opportunities' },
  ],
}

export const skillGroups = [
  {
    title: 'Frontend',
    icon: 'monitor',
    description: 'Interfaces that are fast, accessible and pleasant to use.',
    skills: ['React', 'TypeScript', 'Next.js', 'Vite', 'Tailwind CSS', 'Redux', 'Vitest'],
  },
  {
    title: 'Backend',
    icon: 'server',
    description: 'APIs and services built for correctness and scale.',
    skills: ['Node.js', 'Laravel / PHP', 'Python', 'PostgreSQL', 'MySQL', 'Redis', 'REST & GraphQL'],
  },
  {
    title: 'DevOps & Cloud',
    icon: 'cloud',
    description: 'Automated pipelines and infrastructure as code.',
    skills: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'GitHub Actions', 'Linux', 'Nginx'],
  },
  {
    title: 'Tools & Practices',
    icon: 'tool',
    description: 'The habits that keep teams moving.',
    skills: ['Git', 'Agile / Scrum', 'TDD', 'CI/CD', 'Figma', 'Jira', 'Code Review'],
  },
]

export const projects = [
  {
    title: 'CloudDeck',
    description:
      'Multi-cloud cost dashboard that aggregates AWS, GCP and Azure billing into one real-time view with anomaly alerts.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    github: 'https://github.com/',
    live: 'https://example.com',
    gradient: 'linear-gradient(135deg, #22d3ee 0%, #6366f1 100%)',
    emoji: '☁️',
  },
  {
    title: 'ShipIt CI',
    description:
      'Self-hosted continuous-integration runner with container isolation, caching and a plugin system for custom steps.',
    tags: ['Go', 'Docker', 'Kubernetes', 'gRPC'],
    github: 'https://github.com/',
    live: null,
    gradient: 'linear-gradient(135deg, #a78bfa 0%, #ec4899 100%)',
    emoji: '🚀',
  },
  {
    title: 'InvenTrack',
    description:
      'Inventory and order management SaaS for small retailers, with barcode scanning and automated low-stock reordering.',
    tags: ['Laravel', 'Vue', 'MySQL', 'Redis'],
    github: 'https://github.com/',
    live: 'https://example.com',
    gradient: 'linear-gradient(135deg, #34d399 0%, #22d3ee 100%)',
    emoji: '📦',
  },
  {
    title: 'DevNotes',
    description:
      'Markdown-first knowledge base with full-text search, backlinks and offline sync using CRDTs.',
    tags: ['TypeScript', 'Next.js', 'SQLite', 'PWA'],
    github: 'https://github.com/',
    live: 'https://example.com',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    emoji: '📝',
  },
  {
    title: 'NetPulse',
    description:
      'Lightweight network monitoring agent and dashboard that visualizes latency, packet loss and uptime across sites.',
    tags: ['Python', 'FastAPI', 'InfluxDB', 'Grafana'],
    github: 'https://github.com/',
    live: null,
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    emoji: '📡',
  },
  {
    title: 'AuthKit',
    description:
      'Drop-in authentication library with passkeys, OAuth providers, MFA and session management for Node apps.',
    tags: ['Node.js', 'TypeScript', 'OAuth 2.0', 'WebAuthn'],
    github: 'https://github.com/',
    live: 'https://example.com',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #22d3ee 100%)',
    emoji: '🔐',
  },
]

export const experience = [
  {
    role: 'Senior Software Engineer',
    company: 'Nimbus Technologies',
    period: '2023 — Present',
    type: 'work',
    bullets: [
      'Lead a team of 4 engineers building a multi-tenant SaaS platform serving 50k+ monthly users.',
      'Cut cloud spend 35% by migrating workloads to Kubernetes with autoscaling and spot instances.',
      'Introduced trunk-based development and CI gates, reducing production incidents by 60%.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'BrightPath Solutions',
    period: '2020 — 2023',
    type: 'work',
    bullets: [
      'Built REST and GraphQL APIs in Node.js and Laravel consumed by web and mobile clients.',
      'Designed PostgreSQL schemas and query optimizations that halved average response times.',
      'Owned the Docker-based local dev environment and GitHub Actions pipelines.',
    ],
  },
  {
    role: 'Junior Web Developer',
    company: 'PixelForge Studio',
    period: '2019 — 2020',
    type: 'work',
    bullets: [
      'Delivered responsive marketing sites and e-commerce storefronts for 20+ clients.',
      'Improved Lighthouse performance scores from ~50 to 90+ across the agency template.',
    ],
  },
  {
    role: 'B.Sc. Computer Science',
    company: 'University of Technology',
    period: '2015 — 2019',
    type: 'education',
    bullets: [
      'Graduated with first-class honours; final-year project on distributed task scheduling.',
    ],
  },
]

export const contact = {
  heading: "Let's build something together",
  text: "I'm currently open to new opportunities and interesting side projects. Whether you have a question or just want to say hi, my inbox is always open.",
}
