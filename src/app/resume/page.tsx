"use client";

import React from "react";
import { Mail, Printer } from "lucide-react";

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

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-900 py-10 px-4 print:bg-white print:py-0 text-zinc-900 dark:text-zinc-100 print:text-black">
      
      {/* Floating print button - Hidden when printing */}
      <div className="fixed bottom-8 right-8 z-50 print:hidden">
        <button 
          onClick={() => {
            if (typeof window !== "undefined") window.print();
          }}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg transition-all transform hover:scale-105 font-medium"
        >
          <Printer size={20} />
          Print PDF
        </button>
      </div>

      <div className="max-w-[800px] mx-auto bg-white dark:bg-black print:bg-white shadow-2xl print:shadow-none rounded-lg print:rounded-none overflow-hidden">
        
        {/* HEADER */}
        <header className="bg-zinc-900 text-white print:bg-white print:text-black p-10 border-b print:border-gray-300">
          <h1 className="text-4xl font-black uppercase tracking-tight mb-2">Abdul Wasay Minhas</h1>
          <h2 className="text-xl text-blue-400 print:text-blue-600 font-medium mb-6">Full Stack Engineer & AI Integrator</h2>
          
          <div className="flex flex-wrap gap-4 text-sm text-zinc-300 print:text-zinc-600 font-medium">
            <a href="mailto:wasayminhas775@gmail.com" className="flex items-center gap-1.5 hover:text-white print:hover:text-black">
              <Mail size={16} /> wasayminhas775@gmail.com
            </a>
            <a href="https://linkedin.com/in/wasay-minhas-668386418" className="flex items-center gap-1.5 hover:text-white print:hover:text-black">
              <LinkedinIcon size={16} /> linkedin.com/in/wasay-minhas-668386418
            </a>
            <a href="https://github.com/alone775" className="flex items-center gap-1.5 hover:text-white print:hover:text-black">
              <GithubIcon size={16} /> github.com/alone775
            </a>
          </div>
        </header>

        <div className="p-10 space-y-8">
          {/* SUMMARY */}
          <section>
            <h3 className="text-lg font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 print:text-blue-600 mb-3 border-b pb-2">Professional Summary</h3>
            <p className="leading-relaxed text-zinc-700 dark:text-zinc-300 print:text-zinc-800">
              Passionate Full Stack Engineer specializing in scalable web applications, AI integrations, and non-generic user experiences. Skilled in bridging the gap between cutting-edge Machine Learning concepts and practical software engineering. Proven ability to architect comprehensive systems, from frontend 3D graphics to robust backend tracking networks.
            </p>
          </section>

          {/* SKILLS */}
          <section>
            <h3 className="text-lg font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 print:text-blue-600 mb-3 border-b pb-2">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-zinc-700 dark:text-zinc-300 print:text-zinc-800">
              <div>
                <strong className="block text-zinc-900 dark:text-zinc-100 print:text-black mb-1">Core Stack</strong>
                <p>Next.js, React.js, Node.js, MERN Stack</p>
              </div>
              <div>
                <strong className="block text-zinc-900 dark:text-zinc-100 print:text-black mb-1">Languages</strong>
                <p>TypeScript, JavaScript, C#, Java, Python</p>
              </div>
              <div>
                <strong className="block text-zinc-900 dark:text-zinc-100 print:text-black mb-1">AI & Graphics</strong>
                <p>Prompt Engineering, AI Agents, Three.js, R3F</p>
              </div>
              <div>
                <strong className="block text-zinc-900 dark:text-zinc-100 print:text-black mb-1">Tools & Platforms</strong>
                <p>Git, Tailwind CSS, Vercel, MongoDB</p>
              </div>
            </div>
          </section>

          {/* PROJECTS */}
          <section>
            <h3 className="text-lg font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 print:text-blue-600 mb-4 border-b pb-2">Featured Projects</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-zinc-900 dark:text-white print:text-black">CueTrack (cuetrack.me)</h4>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400 print:text-blue-600">Lead Developer</span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 print:text-zinc-600 mb-2">Next.js, Tailwind CSS, Node.js</p>
                <ul className="list-disc list-outside ml-4 space-y-1 text-zinc-700 dark:text-zinc-300 print:text-zinc-800">
                  <li>Architected a professional snooker club management platform with global Elo rankings.</li>
                  <li>Implemented real-time tournament tracking, active session monitoring, and deep club analytics.</li>
                  <li>Delivered a highly polished staff dashboard optimizing club operations and revenue tracking.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-zinc-900 dark:text-white print:text-black">ValidTrace (validtrace.vercel.app)</h4>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400 print:text-blue-600">Full Stack Engineer</span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 print:text-zinc-600 mb-2">TypeScript, React.js</p>
                <ul className="list-disc list-outside ml-4 space-y-1 text-zinc-700 dark:text-zinc-300 print:text-zinc-800">
                  <li>Built a modern verification and tracking system completely with TypeScript.</li>
                  <li>Designed a scalable data-tracing backbone to ensure reliability and transparency.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-zinc-900 dark:text-white print:text-black">Inline Delivery System</h4>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400 print:text-blue-600">Software Engineer</span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 print:text-zinc-600 mb-2">Java</p>
                <ul className="list-disc list-outside ml-4 space-y-1 text-zinc-700 dark:text-zinc-300 print:text-zinc-800">
                  <li>Engineered a robust delivery tracking system offering both Terminal-based and GUI operational modes.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* EDUCATION */}
          <section>
            <h3 className="text-lg font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 print:text-blue-600 mb-4 border-b pb-2">Education</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-zinc-900 dark:text-white print:text-black">Bachelor of Science in Computer Science</h4>
                  <span className="text-sm font-medium text-zinc-500">Currently Pursuing</span>
                </div>
                <p className="text-zinc-700 dark:text-zinc-300 print:text-zinc-800">National University of Modern Languages (NUML)</p>
              </div>

              <div>
                <h4 className="font-bold text-zinc-900 dark:text-white print:text-black mb-1">FSc Pre-Engineering</h4>
                <p className="text-zinc-700 dark:text-zinc-300 print:text-zinc-800">Punjab Group of Colleges</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
