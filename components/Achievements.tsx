
import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ACHIEVEMENTS } from '../constants';

export const Achievements: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950/30">
      <div className="container mx-auto px-6">
        <SectionHeading title="Honors & Achievements" subtitle="Recognitions for performance and skill" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((ach, idx) => (
            <div key={idx} className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-lg ${ach.title.includes('Gold') ? 'bg-amber-500/10 text-amber-500 shadow-amber-950/20' : 'bg-slate-400/10 text-slate-400 shadow-slate-950/20'}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                </div>
                <span className="text-xs text-slate-500 mono uppercase">{ach.period}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-tight mb-1">{ach.title}</h3>
                <p className="text-cyan-400 text-sm font-medium mb-3">{ach.event}</p>
                <div className="space-y-1">
                  {ach.description.map((d, i) => (
                    <p key={i} className="text-slate-400 text-sm leading-relaxed">{d}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
