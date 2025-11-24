import React from 'react';
import { NavSection } from '../types';
import { ArrowRight, TrendingUp, Users, Activity } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
  onAiToolClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick, onAiToolClick }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-red/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="animate-slide-up opacity-0 mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-red"></span>
          </span>
          <span className="text-sm font-medium text-gray-300">Accepting new clients for Q4</span>
        </div>

        {/* Headline */}
        <h1 className="animate-slide-up opacity-0 [animation-delay:200ms] text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white mb-6">
          Influence at the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-white">
            Speed of Culture
          </span>
        </h1>

        {/* Subheadline */}
        <p className="animate-slide-up opacity-0 [animation-delay:400ms] max-w-2xl text-xl text-gray-400 mb-10 leading-relaxed">
          We bridge the gap between Web3 innovation and mainstream attention. 
          Data-driven campaigns that convert, powered by human creativity and AI precision.
        </p>

        {/* CTA Buttons */}
        <div className="animate-slide-up opacity-0 [animation-delay:600ms] flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button
            onClick={onCtaClick}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-brand-red font-display rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red focus:ring-offset-gray-900"
          >
            Launch Campaign
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          
          <button
            onClick={onAiToolClick}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-white/5 border border-white/10 backdrop-blur-sm font-display rounded-full hover:bg-white/10 focus:outline-none"
          >
            <Activity className="mr-2 h-5 w-5 text-brand-red" />
            Try AI Strategist
          </button>
        </div>

        {/* Stats / Social Proof */}
        <div className="animate-slide-up opacity-0 [animation-delay:800ms] mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 border-t border-white/10 pt-10">
            <div className="flex flex-col items-center">
                <span className="text-4xl font-display font-bold text-white mb-1">500M+</span>
                <span className="text-sm text-gray-500 uppercase tracking-widest">Impressions</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-4xl font-display font-bold text-white mb-1">120+</span>
                <span className="text-sm text-gray-500 uppercase tracking-widest">Global Brands</span>
            </div>
            <div className="hidden md:flex flex-col items-center">
                <span className="text-4xl font-display font-bold text-white mb-1">4.8x</span>
                <span className="text-sm text-gray-500 uppercase tracking-widest">Avg ROAS</span>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;