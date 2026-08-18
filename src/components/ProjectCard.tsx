import React from "react";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  role?: string;
  link: string;
  tags: string[];
}

export default function ProjectCard({ title, description, role, link, tags }: ProjectCardProps) {
  return (
    <div className="glass-panel p-6 rounded-2xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-primary-glow/20 flex flex-col h-full border border-white/5 hover:border-primary/50 relative overflow-hidden group">
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <h3 className="text-2xl font-bold mb-2 flex items-center justify-between">
        {title}
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <ExternalLink size={20} />
        </a>
      </h3>
      
      {role && (
        <p className="text-primary font-medium text-sm mb-4 tracking-wide uppercase">
          {role}
        </p>
      )}

      <p className="text-gray-300 mb-6 flex-grow leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
