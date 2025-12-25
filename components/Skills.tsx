
import React from 'react';
import { SectionHeading } from './SectionHeading';
import { SKILLS } from '../constants';

export const Skills: React.FC = () => {
  const categories = [
    { title: "Languages", items: SKILLS.languages },
    { title: "Web Development", items: SKILLS.webDev },
    { title: "Libraries", items: SKILLS.libraries },
    { title: "Tools & Platforms", items: SKILLS.tools },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950/50">
      <div className="container mx-auto px-6">
        <SectionHeading title="Skills & Expertise" subtitle="Technologies I work with daily" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="p-6 bg-slate-900/30 border border-slate-800/50 rounded-2xl hover:bg-slate-900/50 transition-colors">
              <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item} className="px-3 py-1.5 bg-slate-800/50 text-slate-300 text-xs rounded-lg border border-slate-700/50">
                    {item}
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
