import Canvas3D from "@/components/Canvas3D";
import ProjectCard from "@/components/ProjectCard";
import { Mail, FileText, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import profilePic from "../../public/profile.jpg";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Home() {
  return (
    <main className="min-h-screen text-foreground relative selection:bg-primary/30">
      <Canvas3D />

      {/* 
        Scroll-driven animations container
        The 'scroll-reveal' class is defined in globals.css using animation-timeline: view()
      */}
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center z-10 scroll-reveal">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-gray-300">
            Available for new opportunities
          </div>
          
          <div className="mb-8 relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-primary/20">
            <Image 
              src={profilePic} 
              alt="Abdul Wasay Minhas" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-500">
            Abdul Wasay Minhas
          </h1>
          
          <h2 className="text-xl md:text-3xl text-primary font-medium mb-8 max-w-2xl">
            Full Stack Engineer & AI Integrator
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mb-12 leading-relaxed">
            Bridging the gap between cutting-edge AI and practical software engineering. 
            I specialize in leveraging AI agents and intelligent prompting to build scalable, 
            high-performance web applications.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-blue-600 transition-colors shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              View Work
            </a>
            
            <Link 
              href="/resume" 
              className="px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-colors flex items-center gap-2"
            >
              <FileText size={18} />
              Resume
            </Link>

            <a 
              href="mailto:wasayminhas775@gmail.com" 
              className="px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-colors flex items-center gap-2"
            >
              <Mail size={18} />
              Contact
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto scroll-reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 border-b border-white/10 pb-6 inline-block">
            Background & Focus
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-panel p-8 rounded-2xl">
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                Currently pursuing my BS in Computer Science at NUML, following my foundational studies at Punjab Group of Colleges. 
                I thrive on crafting visually striking, non-generic user experiences.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                My ongoing explorations into Machine Learning and AI constantly push the boundaries of what's possible on the modern web, allowing me to build smarter, faster, and more intuitive platforms.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl flex flex-col justify-center gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Core Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "React", "TypeScript", "Node.js", "MERN Stack", "C#", "Python"].map(skill => (
                    <span key={skill} className="bg-primary/20 text-blue-200 border border-primary/30 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Specializations</h3>
                <div className="flex flex-wrap gap-2">
                  {["AI Integrations", "Machine Learning", "3D Web Graphics", "Scalable Systems"].map(skill => (
                    <span key={skill} className="bg-secondary/20 text-purple-200 border border-secondary/30 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto scroll-reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="CueTrack"
              role="Lead Developer"
              description="A professional cue sports venue management platform. Features include global Elo rankings, real-time tournament tracking, active session monitoring, and deep club analytics."
              link="https://cuetrack.me"
              tags={["Next.js", "Tailwind CSS", "Scalable Backend", "Analytics"]}
            />
            
            <ProjectCard 
              title="ValidTrace"
              role="Full Stack Engineer"
              description="A modern verification and tracking system. Architected completely with TypeScript, implementing a scalable data-tracing backbone for reliability."
              link="https://validtrace.vercel.app"
              tags={["TypeScript", "React", "Verification", "Node.js"]}
            />

            <ProjectCard 
              title="Inline Delivery System"
              role="Software Engineer"
              description="Engineered a robust delivery tracking system offering both Terminal-based and Graphical User Interface (GUI) operational modes for high flexibility."
              link="https://github.com/alone775/inline-delivery-system-"
              tags={["Java", "GUI", "CLI", "System Architecture"]}
            />
          </div>
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer className="py-20 px-6 border-t border-white/10 relative z-10 bg-black/50 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 scroll-reveal">
          
          <div>
            <h2 className="text-2xl font-bold mb-2">Let's build something amazing.</h2>
            <p className="text-gray-400">Reach out for collaborations, inquiries, or just to say hi.</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/alone775" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 hover:border-gray-400">
              <GithubIcon size={24} />
            </a>
            <a href="https://www.linkedin.com/in/wasay-minhas-668386418" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 hover:border-blue-400">
              <LinkedinIcon size={24} />
            </a>
            <a href="mailto:wasayminhas775@gmail.com" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 hover:border-red-400">
              <Mail size={24} />
            </a>
          </div>

        </div>
        <div className="text-center mt-16 text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Abdul Wasay Minhas. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
