import { SectionHeading } from './about-section'

const groups = [
  {
    label: 'languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'Java', 'C++'],
  },
  {
    label: 'ai_ml',
    items: [
      'TensorFlow',
      'PyTorch',
      'Scikit-learn',
      'XGBoost',
      'CatBoost',
      'LightGBM',
      'SHAP',
      'HuggingFace',
    ],
  },
  {
    label: 'genai_llms',
    items: [
      'LangChain',
      'ChromaDB',
      'Ollama',
      'RAG Pipelines',
      'Llama 3.1',
      'Gemini API',
    ],
  },
  {
    label: 'backend_apis',
    items: [
      'FastAPI',
      'Django',
      'Flask',
      'Spring Boot',
      'Node.js',
      'REST',
      'GraphQL',
      'RabbitMQ',
    ],
  },
  {
    label: 'data_engineering',
    items: ['ETL Pipelines', 'BigQuery', 'Shopify API', 'Odoo', 'Pandas', 'NumPy'],
  },
  {
    label: 'databases',
    items: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Redis',
      'Prisma',
      'ChromaDB',
      'Supabase',
    ],
  },
  {
    label: 'frontend',
    items: ['React.js', 'Next.js', 'Astro v6', 'Tailwind CSS', 'Redux'],
  },
  {
    label: 'devops_cloud',
    items: [
      'Docker',
      'CI/CD',
      'GitHub Actions',
      'GCP',
      'AWS',
      'Nginx',
      'Linux VPS',
      'Vercel',
    ],
  },
]

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 md:px-6"
    >
      <SectionHeading index="02" title="skills" />
      <div className="grid gap-6 sm:grid-cols-2">
        {groups.map((group) => (
          <div
            key={group.label}
            className="rounded-lg border border-border bg-card/50 p-6 transition-colors hover:border-primary/40"
          >
            <h3 className="mb-4 text-sm font-semibold text-primary text-glow">
              <span className="text-muted-foreground">const </span>
              {group.label}
              <span className="text-muted-foreground"> = [</span>
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded border border-border bg-secondary/40 px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {item}
                </li>
              ))}
            </ul>
            <span className="mt-4 block text-sm text-muted-foreground">]</span>
          </div>
        ))}
      </div>
    </section>
  )
}
