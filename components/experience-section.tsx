import { SectionHeading } from './about-section'

const roles = [
  {
    role: 'AI & Automation Engineer Intern',
    company: 'Organic Mandya',
    period: 'Mar 2026 — May 2026',
    points: [
      'Migrated the ETL infrastructure (15+ tables, 10\u201315 cron jobs across BigQuery, Shopify API & Odoo) from an external server to an in-house Linux VPS.',
      'Built an automated review-reply system for 22 store locations (1,000+ reviews) using the Google Business API and a RAG pipeline (Llama 3.1 + ChromaDB).',
      'Designed and deployed know.organicmandya.com (Astro v6, Tailwind CSS v4) with full-text search, SEO, and dark mode — live in production.',
    ],
  },
  {
    role: 'DevOps Engineer Intern',
    company: 'UK Software Pvt. Ltd. (TheDayHR)',
    period: 'Dec 2025 — Feb 2026',
    points: [
      'Sole DevOps engineer: stood up the initial deployment architecture with frontend on Cloudflare, backend on Render, and database on Supabase.',
      'Migrated the full stack onto a single GCP Compute Engine instance running Docker-based containers, consolidating infrastructure.',
      'Built and maintained GitHub Actions CI/CD pipelines, replacing manual deployment steps end-to-end.',
    ],
  },
  {
    role: 'Data Science Intern',
    company: 'Personifwy (via 1stop)',
    period: 'Jul 2025 — Sep 2025',
    points: [
      'Built an end-to-end hate-speech text classification pipeline with TF-IDF, word embeddings, SVM, and Logistic Regression.',
      'Developed a heart-failure mortality predictor using XGBoost, CatBoost, SHAP explainability, and SMOTE class-imbalance handling.',
      'Ran deep-dive EDA on the Home Credit Default Risk dataset (300K+ rows) with anomaly detection and feature engineering.',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'Krishitantra',
    period: 'Jun 2024 — Aug 2024',
    points: [
      'Designed and built a Django REST API backend for a crop-analysis platform, integrating computer vision inference endpoints serving a React frontend.',
      'Built a Python image-processing pipeline for agricultural leaf nitrogen estimation, achieving 92% accuracy on a sample dataset.',
    ],
  },
]

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 md:px-6"
    >
      <SectionHeading index="04" title="experience" />
      <ol className="relative border-l border-border pl-6 md:pl-8">
        {roles.map((role) => (
          <li key={role.company} className="mb-10 last:mb-0">
            <span
              className="absolute -left-[7px] mt-1.5 size-3 rounded-full border-2 border-background bg-primary box-glow"
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-base font-bold text-foreground">
                {role.role}
                <span className="text-primary"> @ {role.company}</span>
              </h3>
              <span className="text-xs text-muted-foreground">{role.period}</span>
            </div>
            <ul className="mt-3 space-y-2">
              {role.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="text-primary" aria-hidden="true">
                    ▹
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
