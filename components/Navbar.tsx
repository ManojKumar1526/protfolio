
import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter text-white flex items-center gap-2 group">
          <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center text-sm group-hover:bg-cyan-500 transition-colors">MK</div>
          <span className="hidden sm:inline">Manoj Kumar</span>
        </a>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <span className="text-cyan-500 mr-1 mono text-xs">/</span>{link.name}
              </a>
            ))}
          </div>
          <a 
            href={`mailto:${PERSONAL_INFO.email}`}
            className="px-4 py-2 rounded-full bg-cyan-600/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium hover:bg-cyan-600/20 transition-all"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};
