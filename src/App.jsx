import React, { useRef, useEffect } from "react";
import { motion as Motion, useAnimation, useInView } from "framer-motion";
import { 
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

const Github = ({ size = 24, ...props }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
		<path d="M9 18c-4.51 2-5-2-7-2" />
	</svg>
);

const Linkedin = ({ size = 24, ...props }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
		<rect width="4" height="12" x="2" y="9" />
		<circle cx="4" cy="4" r="2" />
	</svg>
);

const TypewriterText = ({ text, delay = 0 }) => {
	const controls = useAnimation();
	const ref = useRef(null);
	const inView = useInView(ref, { once: true });

	useEffect(() => {
		if (inView) {
			controls.start(i => ({
				opacity: 1,
				transition: { delay: delay + i * 0.05 }
			}));
		}
	}, [inView, controls, delay]);

	return (
		<span ref={ref}>
			{text.split("").map((char, i) => (
				<Motion.span
					key={i}
					custom={i}
					initial={{ opacity: 0 }}
					animate={controls}
				>
					{char}
				</Motion.span>
			))}
		</span>
	);
};

const BentoItem = ({ children, className, variants, ...props }) => {
	const itemRef = useRef(null);

	const handleMouseMove = (e) => {
		if (!itemRef.current) return;
		const rect = itemRef.current.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		itemRef.current.style.setProperty("--mouse-x", `${x}px`);
		itemRef.current.style.setProperty("--mouse-y", `${y}px`);
	};

	return (
		<Motion.div
			ref={itemRef}
			className={`bento-item ${className}`}
			variants={variants}
			onMouseMove={handleMouseMove}
			{...props}
		>
			{children}
		</Motion.div>
	);
};

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
			transition: { staggerChildren: 0.1, delayChildren: 0.3 }
		}
	};

	const item = {
		hidden: { y: 20, opacity: 0 },
		show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
	};

	return (
		<div className="portfolio-wrapper">
			<div className="mesh-gradient" />
			
			<main className="portfolio">
				<Motion.div 
					className="bento-grid"
					variants={container}
					initial="hidden"
					animate="show"
				>
					{/* HERO CARD */}
					<BentoItem variants={item} className="hero-card">
						<Motion.p 
							className="eyebrow flex items-center gap-2"
							initial={{ opacity: 0, x: -10 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.5 }}
						>
							<Sparkles size={16} className="text-purple-500" /> AI & Data Science Specialist
						</Motion.p>
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
					</BentoItem>

					{/* STATUS CARD */}
					<BentoItem variants={item} className="stats-card">
						<div className="flex flex-col items-center gap-2">
							<div className="relative">
								<MapPin className="text-red-400 animate-bounce" size={32} />
								<div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-red-400/20 blur-sm rounded-full" />
							</div>
							<span className="font-bold text-xl mt-2">Based In</span>
							<p className="text-gray-400">Mangalore / Bengaluru</p>
							<div className="mt-6 flex gap-3">
								<a href="https://www.linkedin.com/in/pranavrbm/" className="icon-btn" title="LinkedIn"><Linkedin size={20} /></a>
								<a href="https://github.com/pranavrbm" className="icon-btn" title="GitHub"><Github size={20} /></a>
							</div>
						</div>
					</BentoItem>

					{/* TERMINAL BIO */}
					<BentoItem variants={item} className="terminal-card">
						<div className="terminal-header">
							<div className="dot red" />
							<div className="dot yellow" />
							<div className="dot green" />
						</div>
						<div className="text-sm leading-relaxed font-mono">
							<p className="text-blue-400">$ <TypewriterText text="whoami" delay={1} /></p>
							<p className="text-gray-300"><TypewriterText text="pranav_r_bhat (AI_Researcher & Dev)" delay={1.5} /></p>
							<p className="text-blue-400 mt-2">$ <TypewriterText text="current_focus" delay={3} /></p>
							<p className="text-gray-300"><TypewriterText text='["LLM_Orchestration", "RAG_Systems", "Scalable_ETL"]' delay={3.5} /></p>
							<p className="text-blue-400 mt-2">$ <TypewriterText text="achievements" delay={5.5} /></p>
							<p className="text-green-400 mt-1"><TypewriterText text="> Published @ IEEE DISCOVER 2024" delay={6} /></p>
							<Motion.span 
								animate={{ opacity: [1, 0] }} 
								transition={{ repeat: Infinity, duration: 0.8 }}
								className="inline-block w-2 h-4 bg-green-400 ml-1 align-middle"
							/>
						</div>
					</BentoItem>

					{/* RESEARCH HIGHLIGHT */}
					<BentoItem variants={item} className="research-card">
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
							<div className="p-8 bg-white/5 rounded-3xl border border-white/10 group-hover:border-purple-500/30 transition-colors">
								<Cpu size={80} className="text-purple-500 animate-pulse" />
							</div>
						</div>
					</BentoItem>

					{/* PROJECT CARDS */}
					{projects.map((p) => (
						<BentoItem 
							key={p.title}
							variants={item}
							className="project-card-v2 group"
							whileHover={{ scale: 1.02, y: -5 }}
						>
							<div className="flex justify-between items-start mb-6">
								<div className="p-3 bg-white/5 rounded-2xl group-hover:bg-purple-500/20 transition-colors">
									{p.icon}
								</div>
								<a href={p.link} className="text-gray-500 hover:text-white transition-colors"><ExternalLink size={20} /></a>
							</div>
							<h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{p.title}</h3>
							<p className="text-gray-400 text-sm mb-6 line-clamp-2">{p.desc}</p>
							<div className="flex flex-wrap gap-2">
								{p.stack.map(s => (
									<span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider">{s}</span>
								))}
							</div>
						</BentoItem>
					))}

					{/* TECH TOOLBOX */}
					<BentoItem variants={item} className="toolbox-card">
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
					</BentoItem>

					{/* EXPERIENCE SUMMARY */}
					<BentoItem variants={item} className="project-card-v2">
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
					</BentoItem>
				</Motion.div>

				<section id="projects" className="mt-24">
					<h2 className="text-center mb-12 text-3xl font-bold">GitHub Intelligence</h2>
					<div className="stats-grid">
						<img src="https://github-readme-stats.vercel.app/api?username=pranavrbm&count_private=true&show_icons=true&theme=transparent&hide_border=true&title_color=A020F0&icon_color=A020F0&text_color=fff&bg_color=00000000" alt="Stats" />
						<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=pranavrbm&layout=compact&theme=transparent&hide_border=true&title_color=A020F0&text_color=fff&bg_color=00000000" alt="Langs" />
						<img src="https://streak-stats.demolab.com/?user=pranavrbm&theme=transparent&hide_border=true&stroke=A020F0&ring=A020F0&fire=A020F0&currStreakNum=fff&background=00000000" alt="Streak" />
					</div>
				</section>

				<footer className="mt-24 text-center border-t border-white/5 pt-12 pb-8">
					<div className="flex justify-center gap-8 mb-8">
						<a href="mailto:pranavrbm@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors"><Mail size={24} /></a>
						<a href="https://www.linkedin.com/in/pranavrbm/" className="text-gray-400 hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
						<a href="https://github.com/pranavrbm" className="text-gray-400 hover:text-white transition-colors"><Github size={24} /></a>
					</div>
					<p className="text-xs text-gray-600 font-medium tracking-widest uppercase">© {new Date().getFullYear()} Pranav R Bhat • High-Impact Intelligence</p>
				</footer>
			</main>
		</div>
	);
}

export default App;
