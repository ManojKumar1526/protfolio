
import React from 'react';
import { SectionHeading } from './SectionHeading';
import { PERSONAL_INFO } from '../constants';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <SectionHeading title="Get In Touch" />
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open!
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="text-4xl md:text-5xl font-black text-white hover:text-cyan-400 transition-colors break-all"
            >
              {PERSONAL_INFO.email}
            </a>
            
            <div className="flex gap-4 mt-8">
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-all border border-slate-700"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-all border border-slate-700"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
