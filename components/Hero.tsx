
import React from 'react';
import { PERSONAL_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-cyan-900/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-blue-900/10 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <p className="text-cyan-400 mono mb-4 animate-fade-in">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
            {PERSONAL_INFO.name}.
            <br />
            <span className="text-slate-500">I build things for the web.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            I'm a <span className="text-white font-medium">Physics Student at IIT Kharagpur</span> and a passionate 
            <span className="text-white font-medium"> Full-Stack Developer</span>. I specialize in building high-performance 
            web applications and exploring the intersection of technology and science.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-8 py-4 rounded-xl bg-cyan-600 text-white font-bold hover:bg-cyan-500 hover:-translate-y-1 transition-all shadow-lg shadow-cyan-900/20"
            >
              Check out my work
            </a>
            <a 
              href={PERSONAL_INFO.github} 
              target="_blank" 
              className="px-8 py-4 rounded-xl bg-slate-800 text-white font-bold border border-slate-700 hover:bg-slate-700 hover:-translate-y-1 transition-all"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 opacity-30">
        <span className="text-xs uppercase tracking-widest text-white">Scroll Down</span>
        <div className="w-px h-12 bg-gradient-to-b from-cyan-500 to-transparent"></div>
      </div>
    </section>
  );
};
