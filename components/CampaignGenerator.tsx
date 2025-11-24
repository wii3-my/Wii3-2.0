import React, { useState } from 'react';
import { generateCampaignStrategy } from '../services/geminiService';
import { CampaignRequest, CampaignStrategy } from '../types';
import { Sparkles, Loader2, Target, Users, Share2, BarChart2 } from 'lucide-react';

const CampaignGenerator: React.FC = () => {
  const [request, setRequest] = useState<CampaignRequest>({
    brandName: '',
    industry: '',
    goal: ''
  });
  const [strategy, setStrategy] = useState<CampaignStrategy | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!request.brandName || !request.industry || !request.goal) return;

    setLoading(true);
    setError(null);
    setStrategy(null);

    try {
      const result = await generateCampaignStrategy(request);
      setStrategy(result);
    } catch (err: any) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-brand-gray relative overflow-hidden">
        {/* Decorative background for section */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-brand-red/10 rounded-xl mb-4">
            <Sparkles className="h-6 w-6 text-brand-red" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            AI Campaign Architect
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Experience the power of our Gemini-powered engine. Enter your brand details below to generate a tailored influencer strategy in seconds.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Input Form */}
          <div className="bg-brand-dark border border-white/10 rounded-2xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Brand Name
                </label>
                <input
                  type="text"
                  required
                  value={request.brandName}
                  onChange={(e) => setRequest({ ...request, brandName: e.target.value })}
                  placeholder="e.g. NeoSip"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-red transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Industry / Niche
                </label>
                <input
                  type="text"
                  required
                  value={request.industry}
                  onChange={(e) => setRequest({ ...request, industry: e.target.value })}
                  placeholder="e.g. Organic Energy Drinks"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-red transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Primary Goal
                </label>
                <select
                  required
                  value={request.goal}
                  onChange={(e) => setRequest({ ...request, goal: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-red transition-all appearance-none"
                >
                  <option value="" disabled className="bg-brand-dark">Select a goal...</option>
                  <option value="Brand Awareness" className="bg-brand-dark text-gray-300">Brand Awareness</option>
                  <option value="Direct Sales" className="bg-brand-dark text-gray-300">Direct Sales / Conversions</option>
                  <option value="App Downloads" className="bg-brand-dark text-gray-300">App Downloads</option>
                  <option value="Community Growth" className="bg-brand-dark text-gray-300">Community Growth</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-red hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin mr-2 h-5 w-5" />
                    Generating Strategy...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Generate Strategy
                  </>
                )}
              </button>
              
              {error && (
                <div className="p-4 bg-red-900/20 border border-red-900/50 rounded-lg text-red-200 text-sm">
                    {error}
                </div>
              )}
            </form>
          </div>

          {/* Results Display */}
          <div className="relative min-h-[400px]">
            {!strategy && !loading && (
               <div className="absolute inset-0 flex items-center justify-center border-2 border-dashed border-white/10 rounded-2xl bg-white/5">
                 <div className="text-center p-6">
                    <Target className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-500 font-medium">Your strategy will appear here</p>
                 </div>
               </div>
            )}

            {loading && (
               <div className="absolute inset-0 flex flex-col items-center justify-center border border-white/10 rounded-2xl bg-brand-dark/50 backdrop-blur-sm z-20">
                  <div className="w-16 h-16 border-4 border-brand-red border-t-transparent rounded-full animate-spin mb-4"></div>
                  <p className="text-white font-medium animate-pulse">Consulting the AI...</p>
               </div>
            )}

            {strategy && (
              <div className="bg-gradient-to-br from-brand-dark to-gray-900 border border-white/10 rounded-2xl p-8 shadow-2xl animate-fade-in">
                <div className="border-b border-white/10 pb-6 mb-6">
                    <span className="text-brand-red text-sm font-bold tracking-widest uppercase">Campaign Concept</span>
                    <h3 className="text-3xl font-display font-bold text-white mt-2 leading-tight">
                        {strategy.conceptName}
                    </h3>
                </div>

                <div className="space-y-8">
                    <div>
                        <div className="flex items-center gap-2 mb-2 text-gray-400">
                            <Target className="h-4 w-4 text-brand-red" />
                            <span className="text-sm uppercase tracking-wider font-bold">The Hook</span>
                        </div>
                        <p className="text-lg text-gray-200 font-medium italic pl-6 border-l-2 border-brand-red">
                            "{strategy.hook}"
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                         <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                            <div className="flex items-center gap-2 mb-3 text-gray-400">
                                <Users className="h-4 w-4 text-brand-red" />
                                <span className="text-sm uppercase tracking-wider font-bold">Target Audience</span>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {strategy.targetAudienceAnalysis}
                            </p>
                         </div>

                         <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                            <div className="flex items-center gap-2 mb-3 text-gray-400">
                                <BarChart2 className="h-4 w-4 text-brand-red" />
                                <span className="text-sm uppercase tracking-wider font-bold">Projected Reach</span>
                            </div>
                            <p className="text-2xl font-display font-bold text-white">
                                {strategy.estimatedReach}
                            </p>
                         </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-2 mb-3 text-gray-400">
                            <Share2 className="h-4 w-4 text-brand-red" />
                            <span className="text-sm uppercase tracking-wider font-bold">Influencer Mix</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {strategy.influencerArchetypes.map((arch, idx) => (
                                <span key={idx} className="px-3 py-1 bg-brand-red/10 text-brand-red border border-brand-red/20 rounded-full text-sm font-medium">
                                    {arch}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignGenerator;