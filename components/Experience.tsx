
import React from 'react';
import { SectionHeading } from './SectionHeading';
import { EXPERIENCES } from '../constants';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-950/50">
      <div className="container mx-auto px-6">
        <SectionHeading title="Experience" subtitle="My professional journey and internships" />
        
        <div className="max-w-3xl ml-0 md:ml-8">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-8 pb-12 last:pb-0 border-l border-slate-800">
              <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-cyan-400 font-medium">@ {exp.company}</p>
                </div>
                <span className="text-sm text-slate-500 mono">{exp.period}</span>
              </div>
              
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-400 text-sm md:text-base leading-relaxed">
                    <span className="text-cyan-500 mt-1.5 shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
