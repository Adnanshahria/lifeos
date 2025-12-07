import React from 'react';
import { SectionData } from '../types';
import FlipCard from './FlipCard';

interface SectionProps {
  data: SectionData;
}

const Section: React.FC<SectionProps> = ({ data }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 animate-fade-in pb-32">
      <div className="mb-20 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
        <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight drop-shadow-2xl relative z-10">
          {data.title}
        </h2>
        <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light relative z-10">
          {data.description}
        </p>
      </div>
      
      {data.groups ? (
        <div className="space-y-24">
          {data.groups.map((group, index) => (
            <div key={index} className="relative group-section">
              <div className="sticky top-20 z-30 flex justify-center mb-10 pointer-events-none">
                <div className="bg-dark-900/80 backdrop-blur-md border border-blue-500/30 px-6 py-2 rounded-full shadow-lg shadow-blue-900/20 pointer-events-auto">
                  <h3 className="text-xl md:text-2xl font-bold text-blue-100 font-serif flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                    {group.title}
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                  </h3>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {group.cards.map((card) => (
                  <FlipCard key={card.id} data={card} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {data.cards.map((card) => (
            <FlipCard key={card.id} data={card} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Section;