"use client";

import React from "react";
import Image from "next/image";
import { Mail, Printer } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gray-200 py-10 px-4 print:py-0 print:px-0 font-sans">
      
      {/* Floating print button - Hidden when printing */}
      <div className="fixed bottom-8 right-8 z-50 print:hidden">
        <button 
          onClick={() => window.print()}
          className="flex items-center gap-2 bg-[#c94a3a] hover:bg-[#b03d2e] text-white px-6 py-3 rounded-full shadow-lg transition-all font-medium"
        >
          <Printer size={20} />
          Print Resume
        </button>
      </div>

      <div className="max-w-[800px] mx-auto bg-[#fdfbf7] print:bg-white shadow-2xl print:shadow-none min-h-[1056px] border-[16px] border-[#c94a3a] rounded-xl print:border-none print:rounded-none overflow-hidden relative text-[#3a3a3a]">
        
        {/* Inner subtle border for the vintage look */}
        <div className="absolute inset-2 border border-[#c94a3a]/30 rounded-lg pointer-events-none print:hidden"></div>

        <div className="p-12">
          
          {/* HEADER */}
          <header className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-12">
            {/* Profile Picture */}
            <div className="w-32 h-32 rounded-full overflow-hidden border-[3px] border-[#c94a3a] shrink-0 relative shadow-md">
              <Image 
                src="/profile.jpg" 
                alt="Abdul Wasay Minhas" 
                fill 
                className="object-cover"
              />
            </div>

            {/* Name and Contact */}
            <div className="flex-1 text-center md:text-left mt-2">
              <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest text-[#c94a3a] mb-2" style={{ fontFamily: "Impact, sans-serif, 'Arial Narrow'" }}>
                ABDUL WASAY
                <br />
                MINHAS
              </h1>
              
              <div className="text-sm font-semibold tracking-wide text-[#c94a3a] mb-4 uppercase">
                Islamabad, PK | wasayminhas775@gmail.com | github.com/alone775
              </div>
              
              <p className="text-[13px] leading-relaxed font-medium">
                Full Stack Engineer with expertise in building scalable applications and AI integrations. 
                Strong background in Next.js, React, and robust backend systems. Dedicated to delivering non-generic user experiences 
                and translating complex Machine Learning concepts into practical web solutions.
              </p>
            </div>
          </header>

          <div className="space-y-8">
            
            {/* EXPERIENCE */}
            <section>
              <h2 className="text-2xl font-bold uppercase text-[#c94a3a] mb-6 tracking-wider" style={{ fontFamily: "Impact, sans-serif, 'Arial Narrow'" }}>Experience</h2>
              
              <div className="relative border-l-2 border-[#c94a3a] ml-4 space-y-6">
                
                <div className="relative pl-8">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-[#fdfbf7] border-2 border-[#c94a3a] rounded-full"></div>
                  <div className="absolute -left-20 top-1 text-xs font-bold text-[#c94a3a] tracking-widest uppercase w-16 text-right">
                    PRESENT
                  </div>
                  <h3 className="font-bold text-base uppercase text-[#c94a3a] tracking-wider mb-1">LEAD DEVELOPER, CUETRACK</h3>
                  <p className="text-[13px] leading-relaxed">
                    Architected a professional snooker club management platform with global Elo rankings. 
                    Implemented real-time tournament tracking, active session monitoring, and deep club analytics.
                  </p>
                </div>

                <div className="relative pl-8">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-[#fdfbf7] border-2 border-[#c94a3a] rounded-full"></div>
                  <h3 className="font-bold text-base uppercase text-[#c94a3a] tracking-wider mb-1">FULL STACK ENGINEER, VALIDTRACE</h3>
                  <p className="text-[13px] leading-relaxed">
                    Built a modern verification and tracking system completely with TypeScript and React.js. 
                    Designed a scalable data-tracing backbone to ensure reliability and transparency.
                  </p>
                </div>

                <div className="relative pl-8">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-[#fdfbf7] border-2 border-[#c94a3a] rounded-full"></div>
                  <h3 className="font-bold text-base uppercase text-[#c94a3a] tracking-wider mb-1">SOFTWARE ENGINEER, INLINE DELIVERY</h3>
                  <p className="text-[13px] leading-relaxed">
                    Engineered a robust delivery tracking system in Java offering both Terminal-based and GUI operational modes.
                  </p>
                </div>

              </div>
            </section>

            {/* EDUCATION */}
            <section>
              <h2 className="text-2xl font-bold uppercase text-[#c94a3a] mb-6 tracking-wider" style={{ fontFamily: "Impact, sans-serif, 'Arial Narrow'" }}>Education</h2>
              
              <div className="relative border-l-2 border-[#c94a3a] ml-4 space-y-6">
                
                <div className="relative pl-8">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-[#fdfbf7] border-2 border-[#c94a3a] rounded-full"></div>
                  <div className="absolute -left-20 top-1 text-xs font-bold text-[#c94a3a] tracking-widest uppercase w-16 text-right">
                    ONGOING
                  </div>
                  <h3 className="font-bold text-base uppercase text-[#c94a3a] tracking-wider mb-1">BACHELOR OF SCIENCE IN COMPUTER SCIENCE</h3>
                  <p className="text-[13px] leading-relaxed">
                    National University of Modern Languages (NUML). Consistently expanding knowledge in advanced computing and AI.
                  </p>
                </div>

                <div className="relative pl-8">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-[#fdfbf7] border-2 border-[#c94a3a] rounded-full"></div>
                  <h3 className="font-bold text-base uppercase text-[#c94a3a] tracking-wider mb-1">FSC PRE-ENGINEERING</h3>
                  <p className="text-[13px] leading-relaxed">
                    Punjab Group of Colleges. Built a strong foundational understanding in mathematics and sciences.
                  </p>
                </div>

              </div>
            </section>

            {/* TWO COLUMNS: SKILLS AND ACTIVITIES */}
            <div className="grid grid-cols-2 gap-12 pt-4">
              
              <section>
                <h2 className="text-2xl font-bold uppercase text-[#c94a3a] mb-4 tracking-wider" style={{ fontFamily: "Impact, sans-serif, 'Arial Narrow'" }}>Skills</h2>
                <ul className="list-disc list-outside ml-4 space-y-2 text-[13px] text-[#c94a3a] font-bold">
                  <li><span className="text-[#3a3a3a] font-medium">Core Stack: Next.js, React.js, Node.js, MERN Stack</span></li>
                  <li><span className="text-[#3a3a3a] font-medium">Languages: TypeScript, JavaScript, C#, Java, Python</span></li>
                  <li><span className="text-[#3a3a3a] font-medium">AI Integrations & Prompt Engineering</span></li>
                  <li><span className="text-[#3a3a3a] font-medium">3D Web Graphics (Three.js, R3F)</span></li>
                  <li><span className="text-[#3a3a3a] font-medium">Tools: Git, Tailwind CSS, Vercel, MongoDB</span></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold uppercase text-[#c94a3a] mb-4 tracking-wider" style={{ fontFamily: "Impact, sans-serif, 'Arial Narrow'" }}>Activities</h2>
                <p className="text-[13px] leading-relaxed">
                  Active explorer of Machine Learning paradigms and AI Agents to integrate into modern web applications. 
                  Constantly learning new frameworks to push the boundaries of user experience.
                </p>
              </section>
              
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
