
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight flex items-center gap-4">
        <span className="text-cyan-500 mono text-xl">#</span>
        {title}
        <div className="h-px flex-grow bg-slate-800 ml-4 hidden md:block"></div>
      </h2>
      {subtitle && <p className="text-slate-400 mt-2 ml-8">{subtitle}</p>}
    </div>
  );
};
