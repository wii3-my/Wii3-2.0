import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to <span className="text-brand-red">Dominate?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              Join the waiting list or schedule a demo. We work with a select number of partners to ensure maximum attention and results.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand-red/20 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-brand-red" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Email Us</h4>
                  <p className="text-gray-400">hello@wii3.agency</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-red/20 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-brand-red" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Headquarters</h4>
                  <p className="text-gray-400">123 Creator Blvd, Los Angeles, CA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                  <input type="text" className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-brand-red" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-brand-red" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Work Email</label>
                <input type="email" className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-brand-red" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-brand-red"></textarea>
              </div>

              <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition-colors">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;