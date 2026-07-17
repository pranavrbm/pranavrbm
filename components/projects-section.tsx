import { ArrowUpRight, Code } from 'lucide-react'
import { SectionHeading } from './about-section'

const projects = [
  {
    name: 'water-crisis-platform',
    desc: 'Python ETL pipelines ingesting climate, reservoir, and groundwater data across 8 zones of Bengaluru; a secure FastAPI prediction service and an RBAC-enabled Next.js dashboard, containerized with Docker Compose. Research published at IEEE ICIRCA 2026.',
    tags: ['FastAPI', 'Next.js', 'PostgreSQL', 'Prisma', 'LightGBM', 'Docker'],
    metric: '90.23% accuracy · IEEE Published · KSCST grant',
    code: 'https://github.com/AD-15-Final/water-crisis-management-system',
    paper: 'https://ieeexplore.ieee.org/document/10750586',
  },
  {
    name: 'ai-health-microservices',
    desc: 'Scalable microservices backend in Spring Boot with OAuth2 auth via Keycloak and async inter-service messaging via RabbitMQ; integrated the Google Gemini API for multi-turn health recommendations with a React/Redux frontend.',
    tags: ['Spring Boot', 'Docker', 'AWS', 'Keycloak', 'RabbitMQ', 'React'],
    metric: 'Microservices · OAuth2 · async messaging',
    code: 'https://github.com/pranavrbm/Fitness-App',
  },
  {
    name: 'deceptive-review-detection',
    desc: 'End-to-end NLP pipeline for deceptive/fake review detection using TF-IDF feature extraction and classical ML classifiers. Published as first author at IEEE DISCOVER 2024.',
    tags: ['Python', 'TensorFlow', 'NLP', 'TF-IDF'],
    metric: '92% accuracy · IEEE Xplore',
    code: 'https://github.com/MLProjectTeam3/Fake_Review_Prediction',
    paper: 'https://ieeexplore.ieee.org/document/10750586',
  },
  {
    name: 'furever-adoption',
    desc: 'Full-stack pet adoption platform with role-based authentication (NextAuth.js), relational schema design, REST API routes, and server-side rendering for SEO-optimized listing pages.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth.js'],
    metric: 'Full-stack · RBAC · SSR + SEO',
    code: 'https://github.com/pranavrbm/FurEver',
  },
]

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 md:px-6"
    >
      <SectionHeading index="03" title="projects" />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group relative flex flex-col rounded-lg border border-border bg-card/50 p-6 transition-colors hover:border-primary/50 hover:box-glow"
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <h3 className="text-lg font-bold text-foreground">
                <span className="text-primary">~/</span>
                {project.name}
              </h3>
              <div className="flex gap-2 text-muted-foreground">
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} source code`}
                  className="transition-colors hover:text-primary"
                >
                  <Code className="size-4" aria-hidden="true" />
                </a>
                {project.paper ? (
                  <a
                    href={project.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} IEEE paper`}
                    className="transition-colors hover:text-primary"
                  >
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </div>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              {project.desc}
            </p>
            <p className="mt-4 text-xs text-primary/90">
              <span className="text-muted-foreground">{'// '}</span>
              {project.metric}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded border border-border bg-secondary/40 px-2 py-1 text-xs text-foreground/80"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
