import type { LucideIcon } from 'lucide-react'
import {
  Award,
  BrainCircuit,
  Cpu,
  Database,
  FlaskConical,
  GitBranch,
  GraduationCap,
  Rocket,
  Terminal,
} from 'lucide-react'

export const profile = {
  name: 'Pranav R Bhat',
  handle: 'pranavrbm',
  role: 'AI & Data Science Engineer',
  tagline:
    'I build ML models, automation pipelines, and REST APIs — from backend to data to deployment.',
  location: 'Mangalore / Bengaluru, IN',
  email: 'pranavrbm@gmail.com',
  github: 'https://github.com/pranavrbm',
  linkedin: 'https://linkedin.com/in/pranavrbm',
  status: 'OPEN_TO_WORK',
}

export type SectionId =
  | 'about'
  | 'projects'
  | 'experience'
  | 'research'
  | 'contact'

export const sections: { id: SectionId; label: string }[] = [
  { id: 'about', label: 'System Overview' },
  { id: 'projects', label: 'Build Log' },
  { id: 'experience', label: 'Runtime History' },
  { id: 'research', label: 'Research & Creds' },
  { id: 'contact', label: 'Establish Uplink' },
]

/* Nodes rendered on the orbital visualization (left panel). */
export type OrbitNode = {
  label: string
  ring: 0 | 1 | 2
  angle: number
  hue: 'primary' | 'cyan' | 'orange'
}

export const orbitNodes: OrbitNode[] = [
  { label: 'Python', ring: 0, angle: 20, hue: 'primary' },
  { label: 'PyTorch', ring: 0, angle: 140, hue: 'primary' },
  { label: 'FastAPI', ring: 0, angle: 260, hue: 'primary' },
  { label: 'LangChain', ring: 1, angle: 0, hue: 'cyan' },
  { label: 'TensorFlow', ring: 1, angle: 72, hue: 'cyan' },
  { label: 'Docker', ring: 1, angle: 144, hue: 'cyan' },
  { label: 'PostgreSQL', ring: 1, angle: 216, hue: 'cyan' },
  { label: 'Next.js', ring: 1, angle: 288, hue: 'cyan' },
  { label: 'Spring Boot', ring: 2, angle: 36, hue: 'orange' },
  { label: 'GCP', ring: 2, angle: 108, hue: 'orange' },
  { label: 'ChromaDB', ring: 2, angle: 180, hue: 'orange' },
  { label: 'GitHub Actions', ring: 2, angle: 252, hue: 'orange' },
  { label: 'BigQuery', ring: 2, angle: 324, hue: 'orange' },
]

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: 'languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'Java', 'C++'],
  },
  {
    label: 'ai_ml_genai',
    items: [
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'XGBoost',
      'LangChain',
      'ChromaDB',
      'Ollama',
      'RAG',
    ],
  },
  {
    label: 'backend_data',
    items: [
      'FastAPI',
      'Django',
      'Spring Boot',
      'Node.js',
      'ETL',
      'BigQuery',
      'RabbitMQ',
    ],
  },
  {
    label: 'infra_frontend',
    items: [
      'Docker',
      'CI/CD',
      'GCP',
      'AWS',
      'Next.js',
      'React',
      'Prisma',
      'PostgreSQL',
    ],
  },
]

export type Metric = { k: string; v: string }

export type LogEntry = {
  id: string
  section: SectionId
  icon: LucideIcon
  stamp: string
  title: string
  subtitle?: string
  body: string
  tags?: string[]
  metrics?: Metric[]
  links?: { label: string; href: string }[]
}

export const logEntries: LogEntry[] = [
  {
    id: 'boot',
    section: 'about',
    icon: Terminal,
    stamp: '00:00',
    title: 'System Init',
    subtitle: profile.role,
    body: 'B.Tech in Artificial Intelligence & Data Science from NMAM Institute of Technology (2026). Two-time IEEE published researcher building ML models, automation pipelines, and REST APIs across the full stack — backend, data, and deployment.',
    tags: ['Python', 'ML/GenAI', 'Backend', 'DevOps'],
    metrics: [
      { k: 'IEEE publications', v: '2' },
      { k: 'Internships', v: '4' },
      { k: 'Reviews automated', v: '1000+' },
    ],
  },
  {
    id: 'core',
    section: 'about',
    icon: BrainCircuit,
    stamp: '00:12',
    title: 'Core Competencies',
    body: 'AI/ML & GenAI (NLP pipelines, RAG systems, model explainability), backend & data engineering (REST APIs, ETL, BigQuery), and DevOps on GCP/AWS with Docker and GitHub Actions CI/CD.',
    tags: ['AI/ML', 'GenAI', 'Data Eng', 'Cloud'],
  },
  {
    id: 'water',
    section: 'projects',
    icon: Database,
    stamp: '01:04',
    title: 'Urban Water Crisis Platform',
    subtitle: 'Ensemble ML · IEEE ICIRCA 2026',
    body: 'Python ETL pipelines ingesting climate, reservoir, and groundwater data across 8 zones of Bengaluru; a secure FastAPI prediction service and an RBAC-enabled Next.js dashboard, containerized with Docker Compose. Research published at IEEE ICIRCA 2026.',
    tags: ['FastAPI', 'Next.js', 'PostgreSQL', 'Prisma', 'LightGBM', 'Docker'],
    metrics: [
      { k: 'Accuracy', v: '90.23%' },
      { k: 'Zones modeled', v: '8' },
      { k: 'Funding', v: 'KSCST grant' },
    ],
    links: [
      {
        label: 'source',
        href: 'https://github.com/AD-15-Final/water-crisis-management-system',
      },
    ],
  },
  {
    id: 'health',
    section: 'projects',
    icon: Cpu,
    stamp: '01:39',
    title: 'AI Health Microservices',
    subtitle: 'Distributed backend',
    body: 'Scalable microservices backend in Spring Boot with OAuth2 auth via Keycloak and async inter-service messaging via RabbitMQ; integrated the Google Gemini API for multi-turn health recommendations with a React/Redux frontend.',
    tags: ['Spring Boot', 'Docker', 'AWS', 'Keycloak', 'RabbitMQ', 'React'],
    metrics: [
      { k: 'Pattern', v: 'Microservices' },
      { k: 'Auth', v: 'OAuth2' },
      { k: 'Messaging', v: 'Async' },
    ],
    links: [
      { label: 'source', href: 'https://github.com/pranavrbm/Fitness-App' },
    ],
  },
  {
    id: 'reviews',
    section: 'projects',
    icon: FlaskConical,
    stamp: '02:11',
    title: 'Deceptive Review Detection',
    subtitle: 'NLP · IEEE DISCOVER 2024',
    body: 'End-to-end NLP pipeline for deceptive/fake review detection using TF-IDF feature extraction and classical ML classifiers. Published as first author at IEEE DISCOVER 2024.',
    tags: ['Python', 'TensorFlow', 'NLP', 'TF-IDF'],
    metrics: [
      { k: 'Accuracy', v: '92%' },
      { k: 'Role', v: 'First author' },
    ],
    links: [
      {
        label: 'source',
        href: 'https://github.com/MLProjectTeam3/Fake_Review_Prediction',
      },
      { label: 'paper', href: 'https://ieeexplore.ieee.org/document/10750586' },
    ],
  },
  {
    id: 'furever',
    section: 'projects',
    icon: Rocket,
    stamp: '02:48',
    title: 'FurEver — Pet Adoption',
    subtitle: 'Full-stack web app',
    body: 'Full-stack pet adoption platform with role-based authentication (NextAuth.js), relational schema design, REST API routes, and server-side rendering for SEO-optimized listing pages.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth.js'],
    metrics: [
      { k: 'Auth', v: 'RBAC' },
      { k: 'Rendering', v: 'SSR + SEO' },
    ],
    links: [{ label: 'source', href: 'https://github.com/pranavrbm/FurEver' }],
  },
  {
    id: 'organic',
    section: 'experience',
    icon: GitBranch,
    stamp: '2026.03',
    title: 'AI & Automation Engineer Intern',
    subtitle: 'Organic Mandya · Mar 2026 — May 2026',
    body: 'Migrated ETL infrastructure (15+ tables, 10–15 cron jobs across BigQuery, Shopify API & Odoo) to an in-house Linux VPS. Built an automated review-reply system for 22 store locations (1000+ reviews) with the Google Business API and a RAG pipeline (Llama 3.1 + ChromaDB). Shipped know.organicmandya.com on Astro v6 + Tailwind v4.',
    tags: ['ETL', 'RAG', 'Ollama', 'Astro', 'Google API'],
  },
  {
    id: 'thedayhr',
    section: 'experience',
    icon: GitBranch,
    stamp: '2025.12',
    title: 'DevOps Engineer Intern',
    subtitle: 'UK Software Pvt. Ltd. (TheDayHR) · Dec 2025 — Feb 2026',
    body: 'Sole DevOps engineer: stood up the initial deployment architecture (Cloudflare + Render + Supabase), then consolidated the full stack onto a single GCP Compute Engine instance running Docker-based containers. Built and maintained GitHub Actions CI/CD pipelines, replacing manual deploys end-to-end.',
    tags: ['Docker', 'GCP', 'CI/CD', 'GitHub Actions'],
  },
  {
    id: 'personifwy',
    section: 'experience',
    icon: GitBranch,
    stamp: '2025.07',
    title: 'Data Science Intern',
    subtitle: 'Personifwy (via 1stop) · Jul 2025 — Sep 2025',
    body: 'Built a hate-speech text-classification pipeline (TF-IDF, embeddings, SVM, Logistic Regression) and a heart-failure mortality predictor (XGBoost, CatBoost, SHAP, SMOTE). Ran deep EDA on the Home Credit Default Risk dataset (300K+ rows) with anomaly detection and feature engineering.',
    tags: ['XGBoost', 'CatBoost', 'SHAP', 'NLP', 'EDA'],
  },
  {
    id: 'krishitantra',
    section: 'experience',
    icon: GitBranch,
    stamp: '2024.06',
    title: 'Software Developer Intern',
    subtitle: 'Krishitantra · Jun 2024 — Aug 2024',
    body: 'Designed and built a Django REST API backend for a crop-analysis platform, integrating computer-vision inference endpoints serving a React frontend. Built a Python image-processing pipeline for agricultural leaf nitrogen estimation, achieving 92% accuracy on a sample dataset.',
    tags: ['Django', 'REST', 'Computer Vision', 'React'],
  },
  {
    id: 'pub-icirca',
    section: 'research',
    icon: FlaskConical,
    stamp: 'PUB.02',
    title:
      'Probabilistic Multi-Horizon Urban Water Crisis Prediction using Ensemble ML',
    subtitle: 'Co-Author · IEEE ICIRCA 2026 · ISBN 979-8-3315-5939-7',
    body: 'Ensemble machine-learning approach for probabilistic, multi-horizon prediction of urban water crises, validated on Bengaluru water-zone data.',
  },
  {
    id: 'pub-discover',
    section: 'research',
    icon: FlaskConical,
    stamp: 'PUB.01',
    title: 'Identifying Deceptive AI Reviews: A Machine Learning Approach',
    subtitle: 'First Author · IEEE DISCOVER 2024 · IEEE Xplore',
    body: 'A machine-learning methodology for detecting deceptive AI-generated reviews using TF-IDF features and classical classifiers.',
    links: [
      { label: 'IEEE Xplore', href: 'https://ieeexplore.ieee.org/document/10750586' },
    ],
  },
  {
    id: 'grant',
    section: 'research',
    icon: Award,
    stamp: 'AWD.01',
    title: 'KSCST Student Project Programme Grant',
    subtitle: 'Karnataka State Council for Science & Technology',
    body: 'Awarded a competitive research grant for the urban water crisis prediction project.',
  },
  {
    id: 'edu',
    section: 'research',
    icon: GraduationCap,
    stamp: 'EDU.01',
    title: 'B.Tech, Artificial Intelligence & Data Science',
    subtitle: 'NMAM Institute of Technology · 2022 — 2026',
    body: 'Coursework across machine learning, data structures, distributed systems, and full-stack development.',
  },
  {
    id: 'cert',
    section: 'research',
    icon: Award,
    stamp: 'CRT.01',
    title: 'Machine Learning Specialization',
    subtitle: 'Stanford Online & DeepLearning.AI',
    body: 'Supervised/Unsupervised Learning, Advanced Algorithms, and Reinforcement Learning.',
    links: [
      {
        label: 'verify',
        href: 'https://coursera.org/verify/specialization/B207U213G589',
      },
    ],
  },
]

export const socials = [
  { label: 'GitHub', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'Email', href: `mailto:${profile.email}` },
]
