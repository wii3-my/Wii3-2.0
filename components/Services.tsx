import React from 'react';
import { Smartphone, Globe, Search, BarChart, PenTool, Radio } from 'lucide-react';

const services = [
  {
    icon: <Smartphone className="h-8 w-8 text-brand-red" />,
    title: "Influencer Management",
    description: "End-to-end handling of creator relationships, from negotiation to payout."
  },
  {
    icon: <Search className="h-8 w-8 text-brand-red" />,
    title: "Talent Discovery",
    description: "AI-driven identification of creators who align perfectly with your brand ethos."
  },
  {
    icon: <PenTool className="h-8 w-8 text-brand-red" />,
    title: "Content Strategy",
    description: "Creative direction that turns passive viewers into active community members."
  },
  {
    icon: <BarChart className="h-8 w-8 text-brand-red" />,
    title: "Performance Analytics",
    description: "Real-time dashboards tracking ROI, engagement, and conversion metrics."
  },
  {
    icon: <Globe className="h-8 w-8 text-brand-red" />,
    title: "Global Campaigns",
    description: "Localized strategies for scaling brands across North America, Europe, and Asia."
  },
  {
    icon: <Radio className="h-8 w-8 text-brand-red" />,
    title: "Live Commerce",
    description: "High-energy live shopping events hosted by top-tier creators."
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-red font-bold tracking-widest uppercase text-sm">What We Do</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-white">
            Full-Stack Influence
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            We don't just post content. We build movements using a blend of human creativity and proprietary technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
                key={index} 
                className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-brand-red/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-brand-dark w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-display">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;