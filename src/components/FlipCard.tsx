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
      className="group min-h-[14rem] md:min-h-[18rem] w-full perspective-1000 cursor-pointer touch-feedback snap-item"
      onClick={handleFlip}
    >
      <div
        className={`relative h-full w-full transition-transform duration-700 transform-style-3d shadow-2xl rounded-2xl ${isFlipped ? 'rotate-y-180' : 'lg:group-hover:-translate-y-2 lg:group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]'}`}
      >
        {/* Front Face */}
        <div className="absolute inset-0 h-full w-full backface-hidden rounded-2xl bg-gradient-to-br from-[#0f0f0f] to-[#0a0a0a] border border-white/5 p-4 md:p-6 flex flex-col justify-between items-center text-center relative overflow-hidden transition-all duration-500 lg:group-hover:border-blue-500/40 lg:group-hover:shadow-[0_0_50px_-15px_rgba(59,130,246,0.3)]">

          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          {/* Shimmer Effect on Hover */}
          <div className="absolute inset-0 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 animate-shimmer pointer-events-none"></div>

          {/* Neon Top Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_20px_rgba(59,130,246,1)]"></div>

          <div className="absolute top-3 right-3 md:top-5 md:right-5 text-slate-700 group-hover:text-blue-400 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center w-full z-10 pt-2">
            <h3 className="text-base md:text-xl font-bold text-slate-100 mb-2 md:mb-4 font-serif leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-200 group-hover:to-indigo-200 transition-all">
              {data.title}
            </h3>
            <div className="w-8 h-1 md:w-12 bg-slate-800 rounded-full mb-2 md:mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-indigo-500 group-hover:w-16 transition-all duration-500"></div>
            <p className="text-slate-400 font-medium text-xs md:text-sm leading-relaxed font-sans line-clamp-3 md:line-clamp-none px-1 md:px-2">
              {data.frontSummary}
            </p>
          </div>

          <div className="flex flex-wrap gap-1 md:gap-1.5 mt-auto pt-3 justify-center z-10 w-full">
            {data.tags?.slice(0, 3).map(tag => (
              <span key={tag} className="text-[8px] md:text-[10px] uppercase tracking-wider px-2 md:px-2.5 py-0.5 rounded-full border border-blue-500/50 text-blue-300 bg-blue-500/10 shadow-[0_0_10px_rgba(59,130,246,0.3)] group-hover:border-blue-400/70 group-hover:text-blue-200 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300">
                {tag}
              </span>
            ))}
          </div>

          <div className="text-[8px] md:text-[9px] text-slate-600 mt-2 md:mt-3 uppercase tracking-[0.15em] md:tracking-[0.2em] font-bold group-hover:text-blue-400 transition-colors flex items-center gap-1 md:gap-1.5">
            <span>বিস্তারিত</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 md:h-3 md:w-3 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 h-full w-full backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-blue-500/30 p-4 md:p-6 overflow-y-auto custom-scrollbar shadow-inner shadow-black">
          <div className="h-full flex flex-col relative z-10">
            <h3 className="text-[10px] md:text-xs font-bold text-blue-400 mb-2 md:mb-3 border-b border-blue-900/40 pb-2 uppercase tracking-widest flex items-center gap-2 sticky top-0 bg-[#0a0a0a]/95 backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>
              বিশ্লেষণ
            </h3>
            <p className="text-slate-300 text-xs md:text-[15px] leading-5 md:leading-6 whitespace-pre-wrap font-sans text-justify font-light tracking-wide pb-2">
              {data.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;