"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/original_photo.jpg";
import { 
  Cpu, 
  ShieldCheck, 
  ShoppingCart, 
  Activity, 
  GraduationCap, 
  ArrowUpRight 
} from "lucide-react";

// Modular Bento Card Component
const BentoCard = ({ className, children, href }: { className?: string, children: React.ReactNode, href?: string }) => {
  const content = (
    <div className={`group relative bg-[#0a0a0a] border-2 border-zinc-900 rounded-3xl p-6 transition-all duration-200 ease-out hover:scale-[1.01] hover:border-blue-500 hover:bg-[#0f0f0f] flex flex-col overflow-hidden ${className}`}>
      {children}
    </div>
  );

  return href ? <Link href={href} className="block outline-none">{content}</Link> : content;
};

// Modular Tag Component
const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-zinc-900 border border-zinc-800 text-zinc-300 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase">
    {children}
  </span>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 p-4 md:p-8 lg:p-12 font-sans selection:bg-blue-500/30">
      <div className="max-w-6xl mx-auto">
        
        {/* Minimal Header */}
        <header className="flex justify-between items-center mb-10 px-2">
          <div className="text-xl font-extrabold tracking-tighter text-white">A.W. MINHAS</div>
          <nav className="flex gap-6">
            <Link href="/resume" className="text-sm font-bold text-zinc-500 hover:text-white transition-colors uppercase tracking-wider">Resume</Link>
            <a href="mailto:wasayminhas775@gmail.com" className="text-sm font-bold text-zinc-500 hover:text-white transition-colors uppercase tracking-wider">Contact</a>
          </nav>
        </header>

        {/* CSS Grid - Bento Box Layout */}
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
            
            <div className="mt-20">
              <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-3 text-white leading-[1.1]">
                ABDUL WASAY
              </h1>
              <h2 className="text-xl md:text-2xl font-bold text-blue-500 mb-6 tracking-wide">
                AI-Assisted Web Developer
              </h2>
              <p className="text-zinc-400 text-base md:text-lg max-w-md leading-relaxed font-medium">
                Building complex, data-rich systems with high-velocity full-stack development. 
                Bridging the gap between intelligent AI orchestration and practical software engineering.
              </p>
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

          {/* 5. FLAGSHIP CARD: CUETRACK (2x1) */}
          <BentoCard href="https://cuetrack.me" className="md:col-span-2 md:row-span-1 flex flex-col justify-center">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg"><Activity className="text-blue-500" size={24} strokeWidth={2.5} /></div>
                <h3 className="text-2xl font-black text-white uppercase tracking-wider">Cuetrack</h3>
              </div>
              <ArrowUpRight className="text-zinc-600 group-hover:text-blue-500 transition-colors" size={24} />
            </div>
            
            <p className="text-zinc-400 text-sm font-bold mb-6 max-w-lg leading-relaxed">
              Full-stack snooker venue & tournament management platform featuring real-time tracking and deep analytics.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <Tag>Next.js</Tag>
              <Tag>Supabase</Tag>
              <Tag>Linode</Tag>
              <Tag>GitHub Actions</Tag>
            </div>
          </BentoCard>

          {/* 6. E-COMMERCE CARD (2x1) */}
          <BentoCard className="md:col-span-2 md:row-span-1 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-zinc-800 rounded-lg group-hover:bg-blue-500/10 transition-colors"><ShoppingCart className="text-zinc-400 group-hover:text-blue-500 transition-colors" size={24} strokeWidth={2.5} /></div>
              <h3 className="text-2xl font-black text-white uppercase tracking-wider">TechGadgets</h3>
            </div>
            
            <p className="text-zinc-400 text-sm font-bold mb-6 max-w-lg leading-relaxed">
              Robust e-commerce platform built for high-performance transactional data processing and inventory management.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <Tag>C#</Tag>
              <Tag>SQL Server</Tag>
              <Tag>.NET</Tag>
            </div>
          </BentoCard>

        </div>
      </div>
    </main>
  );
}
