import React, { useState } from 'react';
import { CardData } from '../types';

interface FlipCardProps {
  data: CardData;
}

const FlipCard: React.FC<FlipCardProps> = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="group h-80 w-full perspective-1000 cursor-pointer"
      onClick={handleFlip}
    >
      <div 
        className={`relative h-full w-full transition-transform duration-700 transform-style-3d shadow-2xl rounded-2xl ${isFlipped ? 'rotate-y-180' : 'group-hover:scale-[1.02]'}`}
      >
        {/* Front Face */}
        <div className="absolute inset-0 h-full w-full backface-hidden rounded-2xl bg-gradient-to-br from-dark-800 to-dark-700 border border-slate-700 p-6 flex flex-col justify-between items-center text-center hover:border-brand-accent/50 transition-colors">
          
          <div className="absolute top-4 right-4 opacity-20">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
             </svg>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center w-full">
            <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-4 font-serif">
              {data.title}
            </h3>
            <div className="w-16 h-1 bg-slate-700 rounded-full mb-6"></div>
            <p className="text-slate-300 font-medium text-lg leading-relaxed">
              {data.frontSummary}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {data.tags?.map(tag => (
              <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700 font-semibold">
                {tag}
              </span>
            ))}
          </div>
          <div className="text-xs text-slate-600 mt-4 animate-pulse uppercase tracking-widest font-bold">Click to Reveal Analysis</div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 h-full w-full backface-hidden rotate-y-180 rounded-2xl bg-slate-900 border border-blue-900/50 p-6 overflow-y-auto custom-scrollbar shadow-inner shadow-black/50">
          <div className="h-full flex flex-col">
            <h3 className="text-lg font-semibold text-blue-400 mb-4 border-b border-slate-800 pb-2 font-serif">
              Analysis & Insight
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed whitespace-pre-wrap font-sans text-justify">
              {data.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;