import "./App.css";

function App() {
	const projects = [
		{
			title: "Deceptive AI Review Detection System",
			description:
				"Designed an end-to-end NLP pipeline to classify deceptive AI-generated reviews in large unstructured text corpora, achieving 92% accuracy.",
			impact: "Published as first author at IEEE DISCOVER 2024 — cited as a benchmark approach.",
			link: "https://ieeexplore.ieee.org/document/10750586",
			stack: "Python, TensorFlow, NLP, Scikit-learn",
		},
		{
			title: "AI-Powered Water Crisis Management",
			description:
				"Urban water intelligence platform predicting shortage risk using climate, reservoir, and demand datasets for Bengaluru.",
			impact: "Integrated secure FastAPI prediction service with a React/Next.js dashboard.",
			link: "https://github.com/pranavrbm",
			stack: "Python, Next.js, FastAPI, PostgreSQL, Docker",
		},
		{
			title: "AI Health Microservices via GenAI",
			description:
				"Integrated Google Gemini AI with multi-turn prompt engineering to generate personalized health recommendations.",
			impact: "Designed scalable microservices with Spring Boot, Docker, and RabbitMQ.",
			link: "https://github.com/pranavrbm",
			stack: "Spring Boot, Google Gemini, Docker, React",
		},
		{
			title: "LeafColor - Crop Analyzer",
			description:
				"Developed a Python application using image segmentation to analyze agricultural leaf images and estimate nitrogen content.",
			impact: "Achieved 92% accuracy vs. manual expert ratings; automated report generation.",
			link: "https://github.com/pranavrbm/leafcolor",
			stack: "Python, Cython, Image Processing",
		},
		{
			title: "FurEver - Dog Adoption System",
			description:
				"Full-stack adoption platform connecting shelters and adopters with secure role-based workflows.",
			impact: "Built with NextAuth role-based authentication and Prisma ORM.",
			link: "https://github.com/pranavrbm/FurEver",
			stack: "Next.js, Prisma, PostgreSQL, NextAuth",
		},
	];

	const skillGroups = [
		{
			label: "AI / ML & Deep Learning",
			items: "TensorFlow, PyTorch, Scikit-learn, HuggingFace, RAG, LangChain, ChromaDB, Ollama, XGBoost, CatBoost",
		},
		{
			label: "Generative AI & LLMs",
			items: "Llama 3.1, Google Gemini API, Vector Embeddings, Semantic Search, Local LLM Inference",
		},
		{
			label: "Automation & Scraping",
			items: "Playwright, Google Business API, Linux Cron, SMTP Email Automation, Web Scraping Pipelines",
		},
		{
			label: "Full-Stack & Backend",
			items: "React, Next.js, Astro v6, FastAPI, Django, Spring Boot, Node.js, Tailwind CSS v4",
		},
		{
			label: "Databases & DevOps",
			items: "PostgreSQL, MongoDB, Prisma, Docker, Docker Compose, Linux VPS (SSH), Git, GitHub Actions",
		},
		{
			label: "Programming Languages",
			items: "Python, JavaScript, SQL, C++, Dart",
		},
	];

	return (
		<main className="portfolio">
			<section className="hero-section">
				<p className="eyebrow">AI and Data Science Specialist</p>
				<h1>Pranav R Bhat</h1>
				<p className="hero-copy">
					Specialist with hands-on experience building production-grade ML pipelines, RAG systems, and full-stack applications. 
					Published IEEE researcher with a track record of shipping real products in agriculture, healthcare, and resource management.
				</p>
				<div className="meta-row">
					<span>Mangalore / Bengaluru</span>
					<span>pranavrbm@gmail.com</span>
					<span>+91 80737 14200</span>
				</div>
				<div className="hero-actions">
					<a
						href="#projects"
						className="btn btn-primary">
						View Projects
					</a>
					<a
						href="https://linkedin.com/in/pranavrbm"
						target="_blank"
						rel="noreferrer"
						className="btn btn-secondary">
						LinkedIn
					</a>
					<a
						href="https://github.com/pranavrbm"
						target="_blank"
						rel="noreferrer"
						className="btn btn-secondary">
						GitHub
					</a>
				</div>
			</section>

			<section
				className="section"
				id="qualifications">
				<h2>Summary of Qualifications</h2>
				<ul className="bullet-list">
					<li>
						Practical experience in AI/ML model development, RAG pipelines, and LLM orchestration (Ollama, LangChain, ChromaDB).
					</li>
					<li>
						Led and published peer-reviewed research in AI-generated text detection (IEEE DISCOVER 2024, first author).
					</li>
					<li>
						Built end-to-end automation systems using Playwright and Google Business API at production scale.
					</li>
					<li>
						Experienced in containerizing and serving ML models with Docker, FastAPI, and robust microservices.
					</li>
				</ul>
			</section>

			<section
				className="section"
				id="education">
				<h2>Education</h2>
				<div className="timeline-card">
					<div className="timeline-head">
						<h3>NMAM Institute of Technology</h3>
						<span>2022 – 2026</span>
					</div>
					<p>
						B.Tech in AI and Data Science • Nitte, Karkala • Expected Graduation 2026
					</p>
				</div>
			</section>

			<section
				className="section"
				id="experience">
				<h2>Professional Experience</h2>
				<article className="timeline-card">
					<div className="timeline-head">
						<h3>AI & Web Development Intern • Organic Mandya</h3>
						<span>Mar 2026 – May 2026</span>
					</div>
					<ul className="bullet-list">
						<li>
							Built a RAG-backed AI review management system using Llama 3.1 via Ollama and Google Business API.
						</li>
						<li>
							Deployed a production-grade automation pipeline on Linux VPS with daily cron jobs and SMTP escalations.
						</li>
						<li>
							Developed and deployed the "Know Your Food" portal using Astro v6 and Tailwind CSS v4.
						</li>
						<li>
							Migrated entire organization data pipeline (BigQuery, Shopify, Odoo) to a new Linux VPS.
						</li>
					</ul>
				</article>
				<article className="timeline-card">
					<div className="timeline-head">
						<h3>Data Science Intern • Personifwy</h3>
						<span>Jul 2025 – Sep 2025</span>
					</div>
					<ul className="bullet-list">
						<li>
							Developed ML models for Hate Speech Detection using NLP preprocessing, SVM, and Logistic Regression.
						</li>
						<li>
							Built a clinical ML model for heart failure mortality prediction with XGBoost and SHAP explainability.
						</li>
					</ul>
				</article>
				<article className="timeline-card">
					<div className="timeline-head">
						<h3>Software Developer Intern • Krishitantra</h3>
						<span>Jun 2024 – Aug 2024</span>
					</div>
					<ul className="bullet-list">
						<li>
							Engineered backend compute pipelines and Python algorithms for agricultural image processing.
						</li>
						<li>
							Built and deployed a scalable crop-analysis web app integrating React with a Django REST API.
						</li>
					</ul>
				</article>
			</section>

			<section
				className="section"
				id="projects">
				<h2>Selected Projects</h2>
				<div className="project-grid">
					{projects.map((project) => (
						<article
							className="project-card"
							key={project.title}>
							<h3>{project.title}</h3>
							<p>{project.description}</p>
							<p className="impact">{project.impact}</p>
							<span className="stack-tag">{project.stack}</span>
							<a
								href={project.link}
								target="_blank"
								rel="noreferrer"
								className="project-link">
								View Details
							</a>
						</article>
					))}
				</div>
			</section>

			<section
				className="section"
				id="publication">
				<h2>Publications</h2>
				<div className="timeline-card">
					<div className="timeline-head">
						<h3>
							Identifying Deceptive AI Reviews: A Machine Learning
							Approach
						</h3>
						<span>IEEE DISCOVER 2024</span>
					</div>
					<p>
						First Author • IEEE DISCOVER Conference on Distributed Computing, VLSI, Electrical Circuits, and Robotics.
					</p>
					<a
						href="https://ieeexplore.ieee.org/document/10750586"
						target="_blank"
						rel="noreferrer"
						className="project-link">
						Access on IEEE Xplore
					</a>
				</div>
			</section>

			<section
				className="section"
				id="skills">
				<h2>Technical Skills</h2>
				<div className="skill-grid">
					{skillGroups.map((group) => (
						<article
							className="timeline-card"
							key={group.label}>
							<h3>{group.label}</h3>
							<p>{group.items}</p>
						</article>
					))}
				</div>
			</section>

			<section
				className="section"
				id="languages">
				<h2>Languages</h2>
				<div className="chip-wrap">
					<span className="chip">English (Fluent)</span>
					<span className="chip">Kannada (Native)</span>
					<span className="chip">Hindi (Intermediate)</span>
					<span className="chip">Japanese (Learning)</span>
				</div>
			</section>

			<section
				className="section"
				id="contact">
				<h2>Contact</h2>
				<p>
					Email:{" "}
					<a href="mailto:pranavrbm@gmail.com">
						pranavrbm@gmail.com
					</a>
				</p>
				<p>
					LinkedIn:{" "}
					<a
						href="https://linkedin.com/in/pranavrbm"
						target="_blank"
						rel="noreferrer">
						linkedin.com/in/pranavrbm
					</a>
				</p>
				<p>
					GitHub:{" "}
					<a
						href="https://github.com/pranavrbm"
						target="_blank"
						rel="noreferrer">
						github.com/pranavrbm
					</a>
				</p>
			</section>
		</main>
	);
}

export default App;
