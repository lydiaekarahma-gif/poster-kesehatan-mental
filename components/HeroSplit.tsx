import React, { useState } from 'react';
import { HABITS } from '../constants';
import { ArrowRight, Info } from 'lucide-react';
import { HabitItem } from '../types';

interface HeroSplitProps {
  onLearnMore: () => void;
}

const HeroSplit: React.FC<HeroSplitProps> = ({ onLearnMore }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Filter lists
  const donts = HABITS.filter(h => h.type === 'dont');
  const dos = HABITS.filter(h => h.type === 'do');

  const handleMouseEnter = (id: string) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  const getHighlightClass = (id: string, pairId?: string) => {
    if (!hoveredId) return 'opacity-100 scale-100';
    if (hoveredId === id) return 'opacity-100 scale-105 shadow-xl ring-2 ring-white/30';
    if (hoveredId === pairId) return 'opacity-100 scale-105 shadow-xl ring-2 ring-white/30';
    return 'opacity-50 scale-95 blur-[1px]';
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col md:flex-row overflow-hidden">
      
      {/* Title Overlay for Mobile/Desktop */}
      <div className="absolute top-4 md:top-8 left-0 w-full z-20 text-center pointer-events-none">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-tight">
          Mental Health <span className="text-yellow-300">Do</span> & <span className="text-indigo-300">Don't</span>
        </h1>
        <p className="text-white/80 text-sm md:text-base mt-2 drop-shadow-md">
          Arahkan kursor untuk melihat hubungannya
        </p>
      </div>

      {/* LEFT SIDE: DON'TS (Dark/Night) */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 flex flex-col items-center justify-center p-6 md:p-12 pt-24 md:pt-24 transition-all duration-500 relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

        <div className="w-full max-w-md space-y-4 md:space-y-6 z-10">
          {donts.map((item) => (
            <div 
              key={item.id}
              className={`group relative bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4 md:p-6 transition-all duration-300 cursor-default ${getHighlightClass(item.id, item.pairId)}`}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-950/50 rounded-full text-indigo-300 group-hover:text-red-400 transition-colors">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-red-200 transition-colors">{item.text}</h3>
                  <p className="text-indigo-200 text-xs md:text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE: DOS (Light/Day) */}
      <div className="w-full md:w-1/2 bg-gradient-to-bl from-yellow-100 via-orange-100 to-green-100 flex flex-col items-center justify-center p-6 md:p-12 pt-12 md:pt-24 transition-all duration-500 relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-40 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
         {/* Decorative Elements */}
         <div className="absolute bottom-20 right-10 w-48 h-48 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>

        <div className="w-full max-w-md space-y-4 md:space-y-6 z-10">
          {dos.map((item) => (
            <div 
              key={item.id}
              className={`group bg-white/60 backdrop-blur-md border border-white/40 rounded-xl p-4 md:p-6 transition-all duration-300 shadow-sm cursor-default ${getHighlightClass(item.id, item.pairId)}`}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-yellow-100/80 rounded-full text-orange-500 group-hover:text-green-600 transition-colors">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1 group-hover:text-green-700 transition-colors">{item.text}</h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Interactive CTA */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <button 
          onClick={onLearnMore}
          className="flex items-center gap-2 px-6 py-3 bg-white text-indigo-900 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all font-bold text-sm md:text-base ring-4 ring-indigo-900/10"
        >
          <Info size={18} />
          Tanya Wellness Buddy
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default HeroSplit;