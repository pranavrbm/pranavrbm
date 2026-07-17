import { Cpu, Database, GitBranch } from 'lucide-react'

const stats = [
  { label: 'ieee_publications', value: '2' },
  { label: 'internships', value: '4' },
  { label: 'reviews_automated', value: '1000+' },
]

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 md:px-6">
      <SectionHeading index="01" title="about" />
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-3">
          <p className="text-pretty text-base leading-relaxed text-foreground/90 md:text-lg">
            I&apos;m a B.Tech graduate in Artificial Intelligence &amp; Data Science
            from NMAM Institute of Technology (2026), with hands-on internship
            experience across AI/automation, DevOps, data science, and backend
            development.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            A two-time IEEE published researcher — first author at IEEE DISCOVER
            2024 and co-author at IEEE ICIRCA 2026 — I build REST APIs, automation
            pipelines, and ML models, and I&apos;m comfortable across the stack from
            backend to data to deployment.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-lg border border-border bg-card/50 p-4"
              >
                <div className="text-2xl font-bold text-primary text-glow md:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <ul className="space-y-4 md:col-span-2">
          {[
            {
              icon: Cpu,
              title: 'AI / ML & GenAI',
              body: 'ML models, NLP pipelines, and RAG systems with PyTorch, LangChain & Ollama.',
            },
            {
              icon: Database,
              title: 'Data & Backend',
              body: 'ETL pipelines, BigQuery, and REST APIs with FastAPI, Django & Spring Boot.',
            },
            {
              icon: GitBranch,
              title: 'DevOps & Cloud',
              body: 'Docker, CI/CD with GitHub Actions, and deployments on GCP & AWS.',
            },
          ].map((item) => (
            <li
              key={item.title}
              className="flex gap-4 rounded-lg border border-border bg-card/50 p-4 transition-colors hover:border-primary/40"
            >
              <item.icon
                className="mt-0.5 size-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function SectionHeading({
  index,
  title,
}: {
  index: string
  title: string
}) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="text-sm font-bold text-primary text-glow">{index}.</span>
      <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
        <span className="text-primary">{'>'}</span> {title}
      </h2>
      <span className="h-px flex-1 bg-border" aria-hidden="true" />
    </div>
  )
}
