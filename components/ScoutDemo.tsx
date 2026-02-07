import React, { useState } from 'react';
import { Sparkles, ArrowRight, Loader2, CheckCircle2, Search, Radar } from 'lucide-react';
import { generateCandidateProfile } from '../services/geminiService';
import { CandidateProfile } from '../types';

const ScoutDemo: React.FC = () => {
  const [jobInput, setJobInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState<CandidateProfile | null>(null);

  const handleScout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobInput.trim()) return;

    setIsLoading(true);
    setProfile(null);
    
    // Simulate a bit of "scanning" delay for effect if API is too fast
    const minTime = new Promise(resolve => setTimeout(resolve, 1500));
    
    try {
      const [data] = await Promise.all([
        generateCandidateProfile(jobInput),
        minTime
      ]);
      setProfile(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">Scout Live Demo</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              See Scout in action.
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Scout doesn't just match keywords; it understands the nuance of every role.
              Try it now—enter any job title, and watch Scout generate a precision persona instantly.
            </p>

            <form onSubmit={handleScout} className="relative max-w-md">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input 
                  type="text" 
                  value={jobInput}
                  onChange={(e) => setJobInput(e.target.value)}
                  placeholder="e.g. Senior React Engineer" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-32 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                />
                <button 
                  type="submit"
                  disabled={isLoading || !jobInput}
                  className="absolute right-2 top-2 bottom-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 rounded-lg font-medium transition-colors flex items-center gap-2"
                >
                  {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Scout'}
                </button>
              </div>
            </form>

            <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Real-time analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Powered by Gemini</span>
              </div>
            </div>
          </div>

          {/* Right: Output Card */}
          <div className="relative">
            {/* Glow backing */}
            <div className={`absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-20 transition-opacity duration-1000 ${profile ? 'opacity-40' : 'opacity-20'}`} />
            
            <div className="relative glass-card rounded-2xl overflow-hidden min-h-[400px] flex flex-col">
              {/* Card Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${isLoading ? 'bg-yellow-400 animate-pulse' : 'bg-green-400'}`} />
                  <span className="font-mono text-sm text-gray-400">SCOUT_AGENT_V2.1</span>
                </div>
                {profile && <span className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300">Match Found</span>}
              </div>

              {/* Card Body */}
              <div className="p-8 flex-1 flex flex-col">
                {!profile && !isLoading && (
                  <div className="flex-1 flex flex-col items-center justify-center text-center text-gray-500 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                      <Radar className="w-8 h-8 opacity-50" />
                    </div>
                    <p>Awaiting target parameters...</p>
                  </div>
                )}

                {isLoading && (
                  <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
                    <div className="relative w-20 h-20">
                      <div className="absolute inset-0 border-4 border-indigo-500/20 rounded-full" />
                      <div className="absolute inset-0 border-4 border-t-indigo-500 rounded-full animate-spin" />
                      <div className="absolute inset-4 bg-indigo-500/10 rounded-full animate-pulse" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-white font-medium">Analyzing market data...</p>
                      <p className="text-sm text-gray-500">Scanning 150M+ profiles</p>
                    </div>
                  </div>
                )}

                {profile && (
                  <div className="animate-fade-in space-y-6">
                    <div>
                      <h3 className="text-xs font-mono text-indigo-400 mb-1">TARGET ROLE</h3>
                      <p className="text-xl font-semibold text-white">{profile.role}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xs font-mono text-indigo-400 mb-1">PERSONA SUMMARY</h3>
                      <p className="text-sm text-gray-300 leading-relaxed">{profile.summary}</p>
                    </div>

                    <div>
                      <h3 className="text-xs font-mono text-indigo-400 mb-2">REQUIRED CAPABILITIES</h3>
                      <div className="flex flex-wrap gap-2">
                        {profile.keySkills.map((skill, i) => (
                          <span key={i} className="text-xs bg-white/5 border border-white/10 text-gray-300 px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                       <h3 className="text-xs font-mono text-indigo-400 mb-2">SCREENING QUESTION</h3>
                       <p className="text-sm italic text-gray-400">"{profile.suggestedQuestions[0]}"</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ScoutDemo;