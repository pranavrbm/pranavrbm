import { motion } from "framer-motion";
import { 
	Github, 
	Linkedin, 
	Mail, 
	ExternalLink, 
	Download, 
	Code2, 
	Cpu, 
	Globe, 
	Terminal, 
	Sparkles,
	Briefcase,
	Quote,
	Zap,
	MapPin
} from "lucide-react";
import "./App.css";

function App() {
	const projects = [
		{
			title: "Water Crisis AI",
			desc: "Predicting shortage risk using climate & reservoir data.",
			stack: ["Python", "FastAPI", "Next.js"],
			link: "https://github.com/pranavrbm",
			icon: <Globe className="w-8 h-8 text-blue-400" />
		},
		{
			title: "Deceptive AI Detection",
			desc: "NLP pipeline to classify AI-generated deceptive reviews.",
			stack: ["PyTorch", "NLP", "Scikit-learn"],
			link: "https://ieeexplore.ieee.org/document/10750586",
			icon: <Sparkles className="w-8 h-8 text-purple-400" />
		},
		{
			title: "Health Microservices",
			desc: "GenAI health recommendations via Google Gemini.",
			stack: ["Spring Boot", "Docker", "Gemini"],
			link: "https://github.com/pranavrbm",
			icon: <Cpu className="w-8 h-8 text-emerald-400" />
		},
		{
			title: "LeafColor Analyzer",
			desc: "Computer vision for agricultural nitrogen estimation.",
			stack: ["Python", "Cython", "OpenCV"],
			link: "https://github.com/pranavrbm/leafcolor",
			icon: <Zap className="w-8 h-8 text-amber-400" />
		}
	];

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: { staggerChildren: 0.1 }
		}
	};

	const item = {
		hidden: { y: 20, opacity: 0 },
		show: { y: 0, opacity: 1 }
	};

	return (
		<div className="portfolio-wrapper">
			<div className="mesh-gradient" />
			
			<main className="portfolio">
				<motion.div 
					className="bento-grid"
					variants={container}
					initial="hidden"
					animate="show"
				>
					{/* HERO CARD */}
					<motion.div variants={item} className="bento-item hero-card">
						<p className="eyebrow flex items-center gap-2">
							<Sparkles size={16} className="text-purple-500" /> AI & Data Science Specialist
						</p>
						<h1>Designing <span className="gradient-text">Intelligent</span> <br/>Architectures.</h1>
						<p className="hero-copy">
							Orchestrating production-grade ML pipelines, RAG systems, and full-stack solutions with a focus on impact and scalability.
						</p>
						<div className="hero-actions flex gap-4 mt-8">
							<a href="#projects" className="magnetic-btn">
								View Projects <ExternalLink size={18} />
							</a>
							<a href="#" className="secondary-btn">
								<Download size={18} /> Resume
							</a>
						</div>
					</motion.div>

					{/* STATUS CARD */}
					<motion.div variants={item} className="bento-item stats-card">
						<div className="flex flex-col items-center gap-2">
							<MapPin className="text-red-400" size={32} />
							<span className="font-bold text-xl">Based In</span>
							<p className="text-gray-400">Mangalore / Bengaluru</p>
							<div className="mt-4 flex gap-3">
								<a href="https://linkedin.com/in/pranavrbm" className="icon-btn"><Linkedin size={20} /></a>
								<a href="https://github.com/pranavrbm" className="icon-btn"><Github size={20} /></a>
							</div>
						</div>
					</motion.div>

					{/* TERMINAL BIO */}
					<motion.div variants={item} className="bento-item terminal-card">
						<div className="terminal-header">
							<div className="dot red" />
							<div className="dot yellow" />
							<div className="dot green" />
						</div>
						<div className="text-sm leading-relaxed">
							<p className="text-blue-400">$ whoami</p>
							<p className="text-gray-300">pranav_r_bhat (AI_Researcher & Dev)</p>
							<p className="text-blue-400 mt-2">$ current_focus</p>
							<p className="text-gray-300">["LLM_Orchestration", "RAG_Systems", "Scalable_ETL"]</p>
							<p className="text-blue-400 mt-2">$ achievements</p>
							<p className="text-gray-300">Published @ IEEE DISCOVER 2024</p>
							<p className="text-green-400 mt-2">_</p>
						</div>
					</motion.div>

					{/* RESEARCH HIGHLIGHT */}
					<motion.div variants={item} className="bento-item research-card">
						<div className="max-w-2xl">
							<div className="flex items-center gap-2 mb-4">
								<Quote className="text-purple-400" />
								<span className="text-purple-400 font-semibold tracking-widest uppercase text-xs">Featured Research</span>
							</div>
							<h3 className="text-2xl font-bold mb-4">Identifying Deceptive AI Reviews: A Machine Learning Approach</h3>
							<p className="text-gray-400 text-sm mb-6">First-author publication presented at IEEE DISCOVER 2024. Engineering high-accuracy NLP pipelines for deception classification.</p>
							<a href="https://ieeexplore.ieee.org/document/10750586" target="_blank" rel="noreferrer" className="magnetic-btn">
								Read Publication <ExternalLink size={16} />
							</a>
						</div>
						<div className="hidden lg:block">
							<div className="p-8 bg-white/5 rounded-3xl border border-white/10">
								<Cpu size={80} className="text-purple-500 animate-pulse" />
							</div>
						</div>
					</motion.div>

					{/* PROJECT CARDS */}
					{projects.map((p, idx) => (
						<motion.article 
							key={p.title}
							variants={item}
							className="bento-item project-card-v2 group"
							whileHover={{ scale: 1.02 }}
						>
							<div className="flex justify-between items-start mb-6">
								<div className="p-3 bg-white/5 rounded-2xl group-hover:bg-purple-500/20 transition-colors">
									{p.icon}
								</div>
								<a href={p.link} className="text-gray-500 hover:text-white"><ExternalLink size={20} /></a>
							</div>
							<h3 className="text-xl font-bold mb-2">{p.title}</h3>
							<p className="text-gray-400 text-sm mb-6">{p.desc}</p>
							<div className="flex flex-wrap gap-2">
								{p.stack.map(s => (
									<span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider">{s}</span>
								))}
							</div>
						</motion.article>
					))}

					{/* TECH TOOLBOX */}
					<motion.div variants={item} className="bento-item toolbox-card">
						<div className="flex items-center gap-3 mb-6">
							<Terminal size={24} className="text-emerald-400" />
							<h3 className="text-xl font-bold">Tech Stack</h3>
						</div>
						<div className="grid grid-cols-2 gap-x-8 gap-y-4">
							<div>
								<p className="text-[10px] font-bold text-gray-500 uppercase mb-2">Core AI</p>
								<p className="text-xs font-medium text-gray-300">PyTorch, TensorFlow, RAG, Ollama, LangChain</p>
							</div>
							<div>
								<p className="text-[10px] font-bold text-gray-500 uppercase mb-2">Engineering</p>
								<p className="text-xs font-medium text-gray-300">Docker, FastAPI, Next.js, PostgreSQL, BigQuery</p>
							</div>
						</div>
					</motion.div>

					{/* EXPERIENCE SUMMARY */}
					<motion.div variants={item} className="bento-item project-card-v2">
						<div className="flex items-center gap-3 mb-6">
							<Briefcase size={24} className="text-blue-400" />
							<h3 className="text-xl font-bold">Professional Path</h3>
						</div>
						<div className="space-y-4">
							<div className="pl-4 border-l-2 border-blue-400/30">
								<p className="font-bold text-sm">AI & Web Intern • Organic Mandya</p>
								<p className="text-[10px] text-gray-500">2026 • Llama 3.1 RAG & ETL Orchestration</p>
							</div>
							<div className="pl-4 border-l-2 border-white/10">
								<p className="font-bold text-sm">Data Science Intern • Personifwy</p>
								<p className="text-[10px] text-gray-500">2025 • Clinical Predictive Modeling</p>
							</div>
						</div>
					</motion.div>
				</motion.div>

				<section className="mt-20">
					<h2 className="text-center mb-10 text-2xl font-bold">GitHub Intelligence</h2>
					<div className="stats-grid">
						<img src="https://github-readme-stats.vercel.app/api?username=pranavrbm&count_private=true&show_icons=true&theme=transparent&hide_border=true&title_color=A020F0&icon_color=A020F0&text_color=fff&bg_color=00000000" alt="Stats" />
						<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=pranavrbm&layout=compact&theme=transparent&hide_border=true&title_color=A020F0&text_color=fff&bg_color=00000000" alt="Langs" />
						<img src="https://streak-stats.demolab.com/?user=pranavrbm&theme=transparent&hide_border=true&stroke=A020F0&ring=A020F0&fire=A020F0&currStreakNum=fff&background=00000000" alt="Streak" />
					</div>
				</section>

				<footer className="mt-20 text-center border-t border-white/5 pt-10">
					<div className="flex justify-center gap-6 mb-8">
						<a href="mailto:pranavrbm@gmail.com" className="hover:text-purple-400 transition-colors"><Mail /></a>
						<a href="https://linkedin.com/in/pranavrbm" className="hover:text-blue-400 transition-colors"><Linkedin /></a>
						<a href="https://github.com/pranavrbm" className="hover:text-gray-400 transition-colors"><Github /></a>
					</div>
					<p className="text-xs text-gray-600">© {new Date().getFullYear()} Pranav R Bhat • High-Impact Intelligence</p>
				</footer>
			</main>
		</div>
	);
}

export default App;
