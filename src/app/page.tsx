"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import profilePic from "../../public/original_photo.jpg";
import { 
  Cpu, 
  ShieldCheck, 
  ShoppingCart, 
  Activity, 
  GraduationCap, 
  ArrowUpRight,
  Github,
  ExternalLink,
  Code2,
  Database,
  Sparkles,
  LayoutTemplate,
  Quote,
  Send,
  Linkedin,
  Mail,
  Server
} from "lucide-react";

// FadeIn Wrapper for scroll animations
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

// Modular Bento Card Component
const BentoCard = ({ className, children, href }: { className?: string, children: React.ReactNode, href?: string }) => {
  const content = (
    <div className={`group relative bg-[#0a0a0a] border-2 border-zinc-900 rounded-3xl p-6 transition-all duration-200 ease-out hover:scale-[1.01] hover:border-blue-500 hover:bg-[#0f0f0f] flex flex-col overflow-hidden ${className}`}>
      {children}
    </div>
  );
  return href ? <Link href={href} className="block outline-none h-full">{content}</Link> : <div className="h-full">{content}</div>;
};

// Modular Tag Component
const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-zinc-900 border border-zinc-800 text-zinc-300 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase whitespace-nowrap">
    {children}
  </span>
);

// Reusable Project Card
const ProjectCard = ({ title, icon: Icon, metric, problem, solution, tags, demoLink, gitLink }: any) => (
  <BentoCard className="flex flex-col h-full">
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-blue-500/10 rounded-lg"><Icon className="text-blue-500" size={24} strokeWidth={2.5} /></div>
        <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider">{title}</h3>
      </div>
      <div className="flex gap-2 shrink-0">
        <a href={gitLink} target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-900 rounded-full hover:bg-zinc-800 hover:text-white text-zinc-400 transition" aria-label="GitHub">
          <Github size={18} />
        </a>
        <a href={demoLink} target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-500/10 rounded-full hover:bg-blue-500 hover:text-white text-blue-500 transition" aria-label="Live Demo">
          <ExternalLink size={18} />
        </a>
      </div>
    </div>

    <div className="w-full h-40 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center overflow-hidden relative mb-5">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/30 via-transparent to-transparent"></div>
      <span className="text-zinc-600 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
        <LayoutTemplate size={16} /> App Preview
      </span>
    </div>

    <div className="inline-flex self-start mb-4 px-3 py-1.5 bg-green-500/10 text-green-400 font-bold text-xs rounded-full border border-green-500/20">
      Metric: {metric}
    </div>

    <div className="text-sm space-y-3 mb-6 flex-1">
      <p><span className="text-zinc-300 font-bold">Problem:</span> <span className="text-zinc-400 font-medium">{problem}</span></p>
      <p><span className="text-blue-400 font-bold">Solution:</span> <span className="text-zinc-400 font-medium">{solution}</span></p>
    </div>

    <div className="flex flex-wrap gap-2 mt-auto">
      {tags.map((t: string) => <Tag key={t}>{t}</Tag>)}
    </div>
  </BentoCard>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 p-4 md:p-8 lg:p-12 font-sans selection:bg-blue-500/30">
      <div className="max-w-6xl mx-auto space-y-20 pb-20">
        
        {/* Minimal Header */}
        <header className="flex justify-between items-center px-2">
          <div className="text-xl font-extrabold tracking-tighter text-white">A.W. MINHAS</div>
          <nav className="flex gap-6">
            <Link href="/resume" className="text-sm font-bold text-zinc-500 hover:text-white transition-colors uppercase tracking-wider">Resume</Link>
            <a href="#projects" className="text-sm font-bold text-zinc-500 hover:text-white transition-colors uppercase tracking-wider hidden sm:block">Projects</a>
            <a href="#contact" className="text-sm font-bold text-zinc-500 hover:text-white transition-colors uppercase tracking-wider">Contact</a>
          </nav>
        </header>

        {/* CSS Grid - Bento Box Layout (Intro) */}
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto md:auto-rows-[minmax(200px,auto)]">
            
            {/* 1. HERO CARD (2x2) */}
            <BentoCard className="md:col-span-2 md:row-span-2 justify-end p-8 md:p-10">
              <div className="absolute top-8 right-8 w-20 h-20 rounded-full overflow-hidden border-2 border-zinc-800 hidden sm:block">
                <Image 
                  src={profilePic} 
                  alt="Abdul Wasay Minhas" 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                />
              </div>
              
              <div className="mt-12 sm:mt-20">
                <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-3 text-white leading-[1.1]">
                  ABDUL WASAY
                </h1>
                <h2 className="text-xl md:text-2xl font-bold text-blue-500 mb-6 tracking-wide">
                  Full-Stack Developer | Fast, AI-Accelerated Delivery
                </h2>
                <p className="text-zinc-400 text-base md:text-lg max-w-md leading-relaxed font-medium mb-8">
                  Building complex, data-rich systems with high-velocity full-stack development. 
                  Bridging the gap between intelligent AI orchestration and practical software engineering.
                </p>
                
                <div className="flex flex-wrap items-center gap-4">
                  <a href="#contact" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                    Hire Me
                  </a>
                  <a href="#projects" className="bg-transparent border-2 border-zinc-700 hover:border-zinc-500 text-zinc-300 font-bold py-3 px-8 rounded-full transition-all hover:text-white">
                    View Work
                  </a>
                </div>
              </div>
            </BentoCard>

            {/* 2. TOOL ORCHESTRATION CARD (1x2) */}
            <BentoCard className="md:col-span-1 md:row-span-2">
              <div className="mb-6 text-blue-500"><Cpu size={32} strokeWidth={2.5} /></div>
              <h3 className="text-xl font-black text-white mb-6 uppercase tracking-wider">Tool<br/>Orchestration</h3>
              
              <p className="text-sm text-zinc-500 font-semibold mb-4 leading-relaxed">
                My core tech & AI stack for building scalable systems:
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                <Tag>Cursor AI</Tag>
                <Tag>Anti-Gravity IDE</Tag>
                <Tag>Next.js</Tag>
                <Tag>C++</Tag>
                <Tag>Java</Tag>
                <Tag>PHP</Tag>
                <Tag>SQL</Tag>
              </div>
            </BentoCard>

            {/* 3. BACKGROUND CARD (1x1) */}
            <BentoCard className="md:col-span-1 md:row-span-1 justify-center">
              <div className="flex items-center gap-3 mb-4 text-white">
                <GraduationCap className="text-blue-500" size={24} strokeWidth={2.5} />
                <h3 className="font-black uppercase tracking-wider">Background</h3>
              </div>
              <ul className="space-y-3 text-sm text-zinc-400 font-bold">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                  BSCS @ NUML
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-zinc-700 mt-1.5 shrink-0 group-hover:bg-blue-400 transition-colors" />
                  Freelance Web Dev
                </li>
              </ul>
            </BentoCard>

            {/* 4. SECURITY & AUTH CARD (1x1) */}
            <BentoCard className="md:col-span-1 md:row-span-1 justify-center">
              <div className="flex items-center gap-3 mb-4 text-white">
                <ShieldCheck className="text-blue-500" size={24} strokeWidth={2.5} />
                <h3 className="font-black uppercase tracking-wider">Security</h3>
              </div>
              <p className="text-sm text-zinc-400 font-bold leading-relaxed">
                Designing robust, secure user authentication systems using PHP & MySQL.
              </p>
            </BentoCard>

          </div>
        </FadeIn>

        {/* Projects Section */}
        <div id="projects" className="scroll-mt-12">
          <FadeIn>
            <h2 className="text-3xl font-black text-white uppercase tracking-widest mb-8 border-b-2 border-zinc-900 pb-4">Selected Work</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn delay={0.1}>
              <ProjectCard 
                title="CueTrack"
                icon={Activity}
                metric="Reduced manual booking errors by 40% & increased utilization."
                problem="Traditional snooker clubs rely on paper tracking, leading to revenue leaks and scheduling conflicts."
                solution="Built a real-time digital management system with automated timers and Elo ranking integration."
                tags={["Next.js", "Supabase", "Linode", "GitHub Actions"]}
                demoLink="https://cuetrack.me"
                gitLink="https://github.com/alone775"
              />
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <ProjectCard 
                title="TechGadgets"
                icon={ShoppingCart}
                metric="Handled 10k+ concurrent transactions with zero downtime."
                problem="Legacy monolithic architecture choked under high traffic and lacked inventory synchronization."
                solution="Re-architected into a scalable .NET Core backend with optimized SQL Server processing."
                tags={["C#", "SQL Server", ".NET Core"]}
                demoLink="#"
                gitLink="https://github.com/alone775"
              />
            </FadeIn>

            <FadeIn delay={0.1}>
              <ProjectCard 
                title="DataSync Dash"
                icon={Database}
                metric="Automated 15 hours of manual data entry per week."
                problem="Client operations required daily manual CSV exports and cross-platform data reconciliation."
                solution="Developed a custom Next.js admin panel mapping APIs into a single, unified data layer."
                tags={["React", "Node.js", "Tailwind", "REST APIs"]}
                demoLink="#"
                gitLink="https://github.com/alone775"
              />
            </FadeIn>

            <FadeIn delay={0.2}>
              <ProjectCard 
                title="AI Automator"
                icon={Sparkles}
                metric="Processed 5,000+ localized requests daily with <200ms latency."
                problem="Marketing teams spent days manually translating and formatting ad copy for global campaigns."
                solution="Engineered a serverless automation pipeline integrating LLMs for instantaneous content generation."
                tags={["Python", "OpenAI API", "AWS Lambda"]}
                demoLink="#"
                gitLink="https://github.com/alone775"
              />
            </FadeIn>
          </div>
        </div>

        {/* Featured Case Study */}
        <FadeIn>
          <BentoCard className="md:col-span-4 p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="flex-1 space-y-6">
                <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 font-bold text-xs rounded-full border border-blue-500/20 uppercase tracking-widest">
                  Featured Case Study
                </div>
                <h3 className="text-4xl font-black text-white uppercase tracking-tight">CueTrack Architecture</h3>
                <p className="text-zinc-400 font-medium leading-relaxed">
                  <strong className="text-zinc-200">The Problem:</strong> Snooker clubs needed a modernized approach to track tables, tournaments, and player stats in real-time. Existing solutions were clunky, outdated, and prone to severe synchronization issues during peak hours.
                </p>
                <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6">
                  <h4 className="text-green-400 font-bold uppercase tracking-widest text-sm mb-2">The Impact</h4>
                  <p className="text-zinc-300 font-medium">Deployed successfully to multiple local clubs, reducing booking overlap errors to absolute zero and saving club managers approximately 10 hours a week in administrative overhead.</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Tag>Next.js</Tag>
                  <Tag>Supabase</Tag>
                  <Tag>PostgreSQL</Tag>
                  <Tag>WebSockets</Tag>
                </div>
                <div className="flex gap-4 pt-4">
                  <a href="https://cuetrack.me" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 px-6 py-2.5 rounded-full transition-colors">
                    View Live Site <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              <div className="flex-1 bg-[#050505] rounded-2xl p-6 md:p-8 border border-zinc-900">
                <h4 className="text-white font-bold uppercase tracking-widest mb-6 border-b border-zinc-800 pb-4">Architecture Decisions</h4>
                <ul className="space-y-5 text-sm text-zinc-400 font-medium">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <p><strong className="text-zinc-200">SSR & Performance:</strong> Migrated to Next.js App Router for Server-Side Rendering (SSR) benefits and lightning-fast initial payload loads.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <p><strong className="text-zinc-200">Real-time Data:</strong> Integrated Supabase for real-time WebSocket subscriptions on table timers, eliminating need for manual refreshes.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <p><strong className="text-zinc-200">DevOps Pipeline:</strong> Deployed via Linode with custom GitHub Actions for automated, frictionless CI/CD pipelines.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <p><strong className="text-zinc-200">Optimistic UI:</strong> Implemented optimistic UI updates on the frontend to ensure a zero-latency, native-app feel for managers.</p>
                  </li>
                </ul>
              </div>
            </div>
          </BentoCard>
        </FadeIn>

        {/* Services / What I Offer */}
        <div>
          <FadeIn>
            <h2 className="text-3xl font-black text-white uppercase tracking-widest mb-8 border-b-2 border-zinc-900 pb-4">What I Offer</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FadeIn delay={0.1}><BentoCard className="justify-center items-center text-center p-8">
              <Code2 className="text-blue-500 mb-4" size={32} />
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2">Full-Stack<br/>Web Apps</h3>
              <p className="text-sm text-zinc-400 font-medium">Delivering high-performance, responsive applications built from the ground up for scale.</p>
            </BentoCard></FadeIn>
            <FadeIn delay={0.2}><BentoCard className="justify-center items-center text-center p-8">
              <ShoppingCart className="text-blue-500 mb-4" size={32} />
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2">E-Commerce<br/>Platforms</h3>
              <p className="text-sm text-zinc-400 font-medium">Custom transactional platforms optimized for conversion and seamless inventory sync.</p>
            </BentoCard></FadeIn>
            <FadeIn delay={0.3}><BentoCard className="justify-center items-center text-center p-8">
              <Server className="text-blue-500 mb-4" size={32} />
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2">API & Backend<br/>Systems</h3>
              <p className="text-sm text-zinc-400 font-medium">Architecting secure, lightning-fast data layers and durable microservices.</p>
            </BentoCard></FadeIn>
            <FadeIn delay={0.4}><BentoCard className="justify-center items-center text-center p-8">
              <Sparkles className="text-blue-500 mb-4" size={32} />
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2">AI-Integrated<br/>Tools</h3>
              <p className="text-sm text-zinc-400 font-medium">Supercharging workflows by integrating LLMs and smart agents into your business.</p>
            </BentoCard></FadeIn>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <FadeIn>
            <h2 className="text-3xl font-black text-white uppercase tracking-widest mb-8 border-b-2 border-zinc-900 pb-4">Client Feedback</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FadeIn delay={0.1}>
              <BentoCard className="p-8">
                <Quote className="text-zinc-800 mb-4" size={40} />
                <p className="text-zinc-300 font-medium leading-relaxed italic mb-6 text-lg">
                  "Wasay delivered the project way ahead of schedule. The speed and quality of the architecture were incredible. Highly recommended for any complex full-stack needs."
                </p>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider">John Doe</h4>
                  <p className="text-blue-500 text-sm font-bold">CTO, TechCorp</p>
                </div>
              </BentoCard>
            </FadeIn>
            <FadeIn delay={0.2}>
              <BentoCard className="p-8">
                <Quote className="text-zinc-800 mb-4" size={40} />
                <p className="text-zinc-300 font-medium leading-relaxed italic mb-6 text-lg">
                  "The AI automation tools he integrated completely transformed our daily operations. We've saved countless hours and the system runs flawlessly."
                </p>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider">Jane Smith</h4>
                  <p className="text-blue-500 text-sm font-bold">Operations Director, GlobalSync</p>
                </div>
              </BentoCard>
            </FadeIn>
          </div>
        </div>

        {/* Contact Section */}
        <FadeIn>
          <BentoCard id="contact" className="md:col-span-4 p-8 md:p-12 scroll-mt-12">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="flex-1">
                <h2 className="text-4xl font-black text-white uppercase tracking-tight mb-4">Let's Build<br/>Something Great.</h2>
                <p className="text-zinc-400 font-medium leading-relaxed mb-8 max-w-sm">
                  Ready to accelerate your next project? Drop me a message below or connect with me on social media. 
                </p>
                
                <div className="flex items-center gap-3 text-sm font-bold text-green-400 bg-green-500/10 border border-green-500/20 w-fit px-4 py-2 rounded-full mb-8">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Usually responds within 24 hours
                </div>

                <div className="flex gap-4">
                  <a href="https://github.com/alone775" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 rounded-xl hover:bg-zinc-800 hover:text-white text-zinc-400 transition" aria-label="GitHub">
                    <Github size={24} />
                  </a>
                  <a href="https://linkedin.com/in/wasay-minhas-668386418" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 rounded-xl hover:bg-blue-500 hover:text-white text-zinc-400 transition" aria-label="LinkedIn">
                    <Linkedin size={24} />
                  </a>
                  <a href="mailto:wasayminhas775@gmail.com" className="p-3 bg-zinc-900 rounded-xl hover:bg-zinc-800 hover:text-white text-zinc-400 transition" aria-label="Email">
                    <Mail size={24} />
                  </a>
                </div>
              </div>
              
              <div className="flex-1 bg-[#050505] rounded-2xl p-6 md:p-8 border border-zinc-900">
                <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1">Name</label>
                    <input type="text" placeholder="John Doe" className="bg-[#0a0a0a] border border-zinc-800 rounded-xl p-3.5 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition font-medium" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1">Email</label>
                    <input type="email" placeholder="john@example.com" className="bg-[#0a0a0a] border border-zinc-800 rounded-xl p-3.5 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition font-medium" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1">Message</label>
                    <textarea placeholder="Tell me about your project..." rows={4} className="bg-[#0a0a0a] border border-zinc-800 rounded-xl p-3.5 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition resize-none font-medium" />
                  </div>
                  <button type="submit" className="mt-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                    <Send size={18} /> Send Message
                  </button>
                </form>
              </div>
            </div>
          </BentoCard>
        </FadeIn>

      </div>
    </main>
  );
}
