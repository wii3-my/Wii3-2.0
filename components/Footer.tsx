import React from 'react';
import { Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
           <div className="flex items-center gap-2 mb-6 md:mb-0">
                <div className="bg-brand-red p-1.5 rounded-lg">
                    <Zap className="h-5 w-5 text-white" fill="currentColor" />
                </div>
                <span className="text-2xl font-display font-bold text-white tracking-tighter">
                wii<span className="text-brand-red">3</span>
                </span>
            </div>
            <div className="flex space-x-8 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
        </div>
        <div className="text-center md:text-left text-xs text-gray-600">
            &copy; {new Date().getFullYear()} wii3 Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;