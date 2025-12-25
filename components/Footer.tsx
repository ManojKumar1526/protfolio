
import React from 'react';
import { PERSONAL_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-900 mt-12 text-center">
      <div className="container mx-auto px-6">
        <p className="text-slate-500 text-sm mb-2">Designed & Built by {PERSONAL_INFO.name}</p>
        <p className="text-slate-600 text-xs mono">IIT Kharagpur &bull; Physics &bull; Full-Stack</p>
      </div>
    </footer>
  );
};
