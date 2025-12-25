
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { EducationSection } from './components/Education';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        
        <section id="about" className="py-24 bg-slate-900/20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">About Me</h2>
                <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                  <p>
                    I'm currently pursuing my <span className="text-white">B.S. (Hons.) in Physics</span> at the prestigious 
                    <span className="text-cyan-400"> Indian Institute of Technology (IIT) Kharagpur</span>. While my academic roots lie in the fundamental laws of nature, 
                    my passion drives me toward building robust and efficient software solutions.
                  </p>
                  <p>
                    My journey in web development began with a fascination for creating interfaces that bridge the gap between complex 
                    backend systems and intuitive user experiences. Over the past few years, I've honed my skills in the 
                    <span className="text-white"> MERN stack</span>, creating several production-grade projects that focus on 
                    performance, security, and scalability.
                  </p>
                  <p>
                    Whether I'm analyzing physical systems in a lab or debugging complex state management logic, 
                    I bring a methodical and analytical approach to every problem I solve.
                  </p>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-slate-900 rounded-2xl p-2 aspect-square max-w-md mx-auto overflow-hidden">
                  <img 
                    src="https://picsum.photos/seed/manoj/600/600" 
                    alt="Manoj Kumar" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-cyan-900/20 group-hover:bg-transparent transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Experience />
        <Projects />
        <Skills />
        <EducationSection />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
