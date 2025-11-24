import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CampaignGenerator from './components/CampaignGenerator';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { NavSection } from './types';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<NavSection>(NavSection.HOME);

  const scrollToSection = (section: NavSection) => {
    setCurrentSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-red selection:text-white">
      <Navbar currentSection={currentSection} onNavigate={scrollToSection} />
      
      <main>
        <div id={NavSection.HOME}>
          <Hero 
            onCtaClick={() => scrollToSection(NavSection.CONTACT)}
            onAiToolClick={() => scrollToSection(NavSection.AI_TOOL)}
          />
        </div>
        
        <div id={NavSection.SERVICES}>
          <Services />
        </div>
        
        <div id={NavSection.AI_TOOL}>
          <CampaignGenerator />
        </div>
        
        <div id={NavSection.CONTACT}>
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;