import React from 'react';
import { SectionData } from '../types';
import FlipCard from './FlipCard';

interface SectionProps {
  data: SectionData;
}

const Section: React.FC<SectionProps> = ({ data }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-3 md:px-4 pt-20 md:pt-8 py-8 md:py-12 animate-fade-in pb-24 md:pb-32 snap-container">
      <div className="mb-12 md:mb-20 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-32 h-48 md:h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-[80px] md:blur-[100px] rounded-full pointer-events-none"></div>
        <h2 className="text-3xl md:text-7xl font-serif font-bold text-white mb-4 md:mb-6 tracking-tight drop-shadow-2xl relative z-10 leading-tight">
          {data.title}
        </h2>
        <p className="text-slate-400 text-base md:text-xl max-w-3xl mx-auto leading-relaxed font-light relative z-10 px-2">
          {data.description}
        </p>
      </div>

      {data.groups ? (
        <div className="space-y-16 md:space-y-24">
          {data.groups.map((group, index) => (
            <div key={index} className="relative group-section snap-item">
              <div className="flex justify-center mb-6 md:mb-10">
                <div className="glass-strong px-4 md:px-6 py-2 rounded-full shadow-lg shadow-blue-900/30 pointer-events-auto">
                  <h3 className="text-lg md:text-2xl font-bold text-blue-100 font-serif flex items-center gap-2 md:gap-3">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 animate-pulse"></span>
                    {group.title}
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-400 animate-pulse"></span>
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-10">
                {group.cards.map((card) => (
                  <FlipCard key={card.id} data={card} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-10">
          {data.cards.map((card) => (
            <FlipCard key={card.id} data={card} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Section;