
import React from 'react';
import { SectionHeading } from './SectionHeading';
import { EDUCATION } from '../constants';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading title="Education" subtitle="Academic background and credentials" />
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="py-4 text-slate-500 font-medium text-sm md:text-base uppercase tracking-wider">Year</th>
                <th className="py-4 text-slate-500 font-medium text-sm md:text-base uppercase tracking-wider">Degree/Exam</th>
                <th className="py-4 text-slate-500 font-medium text-sm md:text-base uppercase tracking-wider">Institute</th>
                <th className="py-4 text-slate-500 font-medium text-sm md:text-base uppercase tracking-wider">Result</th>
              </tr>
            </thead>
            <tbody>
              {EDUCATION.map((edu, idx) => (
                <tr key={idx} className="border-b border-slate-800/50 hover:bg-slate-900/20 transition-colors">
                  <td className="py-6 text-cyan-500 mono font-medium">{edu.period.split(' ')[0]}</td>
                  <td className="py-6 text-white font-semibold">{edu.degree}</td>
                  <td className="py-6 text-slate-400">{edu.institution}</td>
                  <td className="py-6 text-slate-300 font-medium">{edu.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
