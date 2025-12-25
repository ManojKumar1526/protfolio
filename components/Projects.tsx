
import React from 'react';
import { SectionHeading } from './SectionHeading';
import { PROJECTS } from '../constants';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading title="Featured Projects" subtitle="A selection of my recent developments" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div 
              key={idx} 
              className="group bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-900/10 flex flex-col"
            >
              <div className="p-8 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-cyan-600/10 rounded-xl text-cyan-400">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                  </div>
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" className="text-slate-400 hover:text-white transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-slate-500 mono text-xs mb-4 uppercase tracking-widest">{project.period} • {project.category}</p>
                
                <ul className="space-y-2 mb-6">
                  {project.description.map((point, i) => (
                    <li key={i} className="text-sm text-slate-400 leading-relaxed flex gap-2">
                      <span className="text-cyan-600">▹</span> {point}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="px-8 pb-8 flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-800 text-slate-400 text-[10px] font-bold rounded-full border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
