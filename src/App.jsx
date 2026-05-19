import { motion, useScroll, useSpring } from "framer-motion";
import { 
	Github, 
	Linkedin, 
	Mail, 
	ExternalLink, 
	Download, 
	Code2, 
	Cpu, 
	Globe, 
	Database, 
	Terminal, 
	Sparkles,
	Briefcase,
	Quote,
	Layers
} from "lucide-react";
import "./App.css";

function App() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001
	});

	const projects = [
		{
			title: "AI-Powered Water Crisis Management",
			description:
				"Urban water intelligence platform predicting shortage risk using climate, reservoir, and demand datasets for Bengaluru.",
			impact: "Integrated secure FastAPI prediction service with a React/Next.js dashboard.",
			link: "https://github.com/pranavrbm",
			stack: ["Python", "Next.js", "FastAPI", "PostgreSQL", "Docker"],
			icon: <Globe className="w-6 h-6" />
		},
		{
			title: "AI Health Microservices via GenAI",
			description:
				"Integrated Google Gemini AI with multi-turn prompt engineering to generate personalized health recommendations.",
			impact: "Designed scalable microservices with Spring Boot, Docker, and RabbitMQ.",
			link: "https://github.com/pranavrbm",
			stack: ["Spring Boot", "Google Gemini", "Docker", "React"],
			icon: <Cpu className="w-6 h-6" />
		},
		{
			title: "LeafColor - Crop Analyzer",
			description:
				"Developed a Python application using image segmentation to analyze agricultural leaf images and estimate nitrogen content.",
			impact: "Achieved 92% accuracy vs. manual expert ratings; automated report generation.",
			link: "https://github.com/pranavrbm/leafcolor",
			stack: ["Python", "Cython", "Image Processing"],
			icon: <Terminal className="w-6 h-6" />
		},
		{
			title: "FurEver - Dog Adoption System",
			description:
				"Full-stack adoption platform connecting shelters and adopters with secure role-based workflows.",
			impact: "Built with NextAuth role-based authentication and Prisma ORM.",
			link: "https://github.com/pranavrbm/FurEver",
			stack: ["Next.js", "Prisma", "PostgreSQL", "NextAuth"],
			icon: <Code2 className="w-6 h-6" />
		},
	];

	const skillGroups = [
		{
			label: "AI / ML & Deep Learning",
			icon: <Cpu size={20}/>,
			items: ["TensorFlow", "PyTorch", "Scikit-learn", "RAG", "LangChain", "ChromaDB", "Ollama"]
		},
		{
			label: "Generative AI & LLMs",
			icon: <Sparkles size={20}/>,
			items: ["Llama 3.1", "Gemini API", "Vector Embeddings", "Semantic Search", "Prompt Engineering"]
		},
		{
			label: "Architecture & DevOps",
			icon: <Layers size={20}/>,
			items: ["Docker", "Linux VPS", "FastAPI", "Spring Boot", "Git", "GitHub Actions"]
		}
	];

	return (
		<div className="portfolio-wrapper">
			<div className="bg-blob blob-1" />
			<div className="bg-blob blob-2" />
			<motion.div className="progress-bar" style={{ scaleX }} />
			
			<main className="portfolio">
				<nav className="nav-logo">
					Pranav R Bhat<span className="logo-dot" />
				</nav>

				<section className="hero-section">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<p className="eyebrow">AI & Data Science Specialist</p>
						<h1>Designing the future of <br/>Machine Intelligence.</h1>
						<p className="hero-copy">
							Specialist building production-grade <span className="highlight">ML pipelines</span> and 
							<span className="highlight"> RAG systems</span>. Published IEEE researcher shipping 
							real-world products across multiple domains.
						</p>
						<div className="hero-actions">
							<a href="#projects" className="btn btn-primary">
								Explore Work
							</a>
							<a href="#" className="btn btn-secondary">
								<Download size={18} /> Resume
							</a>
							<div className="social-links">
								<a href="https://linkedin.com/in/pranavrbm" className="icon-btn"><Linkedin size={20} /></a>
								<a href="https://github.com/pranavrbm" className="icon-btn"><Github size={20} /></a>
							</div>
						</div>
					</motion.div>
				</section>

				<section className="section" id="research">
					<div className="section-header">
						<Quote className="section-icon" />
						<h2>Research Spotlight</h2>
					</div>
					<motion.div 
						className="research-spotlight"
						whileHover={{ scale: 1.01 }}
						transition={{ type: "spring", stiffness: 300 }}
					>
						<div className="research-tag">IEEE DISCOVER 2024</div>
						<h3>Identifying Deceptive AI Reviews: <br/>A Machine Learning Approach</h3>
						<p>Lead researcher on a novel NLP pipeline to classify AI-generated deceptive content. 
						Achieved 92% accuracy across large unstructured corpora.</p>
						<a href="https://ieeexplore.ieee.org/document/10750586" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ marginTop: '24px' }}>
							Read Publication <ExternalLink size={16} style={{ marginLeft: '8px' }}/>
						</a>
					</motion.div>
				</section>

				<section className="section" id="experience">
					<div className="section-header">
						<Briefcase className="section-icon" />
						<h2>Professional Track</h2>
					</div>
					<div className="experience-list">
						<motion.article 
							className="timeline-card featured"
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
						>
							<div className="timeline-head">
								<h3>AI & Web Intern • Organic Mandya</h3>
								<span>2026</span>
							</div>
							<p>Orchestrated Llama 3.1 RAG systems for automated customer review management. Deployed production-grade ETL and web portals using Astro & BigQuery.</p>
						</motion.article>
						
						<motion.article 
							className="timeline-card"
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.1 }}
							viewport={{ once: true }}
						>
							<div className="timeline-head">
								<h3>Data Science Intern • Personifwy</h3>
								<span>2025</span>
							</div>
							<p>Built clinical mortality predictors and hate speech detection models using advanced NLP and SHAP explainability.</p>
						</motion.article>
					</div>
				</section>

				<section className="section" id="projects">
					<div className="section-header">
						<Code2 className="section-icon" />
						<h2>Engineered Systems</h2>
					</div>
					<div className="project-grid">
						{projects.map((project, index) => (
							<motion.article 
								key={project.title}
								className="project-card"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
								viewport={{ once: true }}
							>
								<div className="project-icon-wrap">{project.icon}</div>
								<h3>{project.title}</h3>
								<p>{project.description}</p>
								<div className="stack-wrap">
									{project.stack.map(tech => (
										<span key={tech} className="stack-tag">{tech}</span>
									))}
								</div>
								<a href={project.link} target="_blank" rel="noreferrer" className="project-link">
									Repository <ExternalLink size={14} style={{ marginLeft: '4px' }}/>
								</a>
							</motion.article>
						))}
					</div>
				</section>

				<section className="section" id="skills">
					<div className="section-header">
						<Terminal className="section-icon" />
						<h2>Technical Arsenal</h2>
					</div>
					<div className="skill-grid">
						{skillGroups.map((group) => (
							<motion.article key={group.label} className="skill-card">
								<div className="skill-header">
									{group.icon}
									<h3>{group.label}</h3>
								</div>
								<div className="chip-wrap">
									{group.items.map(item => (
										<span key={item} className="chip">{item}</span>
									))}
								</div>
							</motion.article>
						))}
					</div>
				</section>

				<section className="github-stats-section">
					<h2>GitHub Intelligence</h2>
					<div className="stats-grid">
						<img src="https://github-readme-stats.vercel.app/api?username=pranavrbm&count_private=true&show_icons=true&theme=dark&hide_border=true&bg_color=00000000" alt="Stats" />
						<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=pranavrbm&layout=compact&theme=dark&hide_border=true&bg_color=00000000" alt="Langs" />
						<img src="https://streak-stats.demolab.com/?user=pranavrbm&theme=dark&hide_border=true&background=00000000" alt="Streak" />
					</div>
				</section>

				<footer className="footer">
					<div className="contact-links" style={{ marginBottom: '40px' }}>
						<a href="mailto:pranavrbm@gmail.com" className="contact-link"><Mail size={20} /> Email</a>
						<a href="https://linkedin.com/in/pranavrbm" className="contact-link"><Linkedin size={20} /> LinkedIn</a>
					</div>
					<p>© {new Date().getFullYear()} Pranav R Bhat. Designed for impact.</p>
				</footer>
			</main>
		</div>
	);
}

export default App;
