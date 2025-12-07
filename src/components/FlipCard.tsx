import React, { useState, useRef, useCallback, useEffect } from 'react';
import { CardData } from '../types';

interface FlipCardProps {
  data: CardData;
}

const FlipCard: React.FC<FlipCardProps> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [pullProgress, setPullProgress] = useState(0);
  const [isPulling, setIsPulling] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef(0);
  const touchStartX = useRef(0);
  const isScrollingHorizontally = useRef(false);

  const PULL_THRESHOLD = 50; // pixels to pull before triggering expand
  const MAX_PULL = 100; // max visual pull distance

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartY.current = touch.clientY;
    touchStartX.current = touch.clientX;
    isScrollingHorizontally.current = false;
    setIsPulling(true);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isPulling) return;

    const touch = e.touches[0];
    const deltaY = touch.clientY - touchStartY.current;
    const deltaX = touch.clientX - touchStartX.current;

    // Detect if user is scrolling horizontally (ignore this gesture)
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
      isScrollingHorizontally.current = true;
      setPullProgress(0);
      return;
    }

    if (isScrollingHorizontally.current) return;

    // Only respond to downward pulls when not expanded, or upward when expanded
    if (!isExpanded && deltaY > 0) {
      // Pulling down to expand
      const progress = Math.min(deltaY / MAX_PULL, 1);
      setPullProgress(progress);
      // Prevent page scroll when pulling on card
      if (deltaY > 10) {
        e.stopPropagation();
      }
    } else if (isExpanded && deltaY < 0) {
      // Pulling up to collapse
      const progress = Math.min(Math.abs(deltaY) / MAX_PULL, 1);
      setPullProgress(-progress);
      if (Math.abs(deltaY) > 10) {
        e.stopPropagation();
      }
    }
  }, [isPulling, isExpanded]);

  const handleTouchEnd = useCallback(() => {
    if (!isPulling) return;

    if (!isExpanded && pullProgress > PULL_THRESHOLD / MAX_PULL) {
      // Threshold crossed - expand
      setIsExpanded(true);
    } else if (isExpanded && pullProgress < -PULL_THRESHOLD / MAX_PULL) {
      // Threshold crossed - collapse
      setIsExpanded(false);
    }

    setPullProgress(0);
    setIsPulling(false);
  }, [isPulling, pullProgress, isExpanded]);

  const handleClick = () => {
    setIsAnimating(true);
    setIsExpanded(!isExpanded);
  };

  // Clear animating state after transition completes (matches CSS transition duration)
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 400); // Match the 0.4s CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  // Calculate pull visual feedback
  const pullOffset = isPulling ? pullProgress * 30 : 0; // subtle visual feedback
  const pullScale = isPulling ? 1 + Math.abs(pullProgress) * 0.02 : 1;

  return (
    <div
      ref={cardRef}
      className="w-full cursor-pointer touch-feedback snap-item select-none"
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        transform: `translateY(${pullOffset}px) scale(${pullScale})`,
        transition: isPulling ? 'none' : 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)', // Spring animation
      }}
    >
      <div
        className={`neon-card relative w-full rounded-2xl bg-[#0a0a0a] p-4 md:p-6 overflow-hidden
          ${isAnimating ? 'is-animating' : ''}
          ${isExpanded ? 'neon-card-expanded' : 'neon-card-default'}`}
      >
        {/* Animated Gradient Background - Subtle texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10 opacity-30 pointer-events-none"></div>

        {/* Neon Top Line */}
        <div className={`absolute top-0 left-0 right-0 h-[2px] transition-all duration-500
          ${isExpanded
            ? 'bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_20px_rgba(234,179,8,1)] opacity-100'
            : 'bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50'}`}
        ></div>

        {/* Lightning Icon */}
        <div className="absolute top-3 right-3 md:top-5 md:right-5 text-slate-700 group-hover:text-blue-400 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>

        {/* Main Content - Always Visible */}
        <div className="flex flex-col items-center text-center z-10 relative">
          <h3 className={`text-base md:text-xl font-bold text-slate-100 mb-2 md:mb-4 font-serif leading-tight transition-all relative z-10 ${isExpanded ? 'text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-200' : ''}`}>
            {data.title}
          </h3>
          <div className={`h-1 rounded-full mb-2 md:mb-4 transition-all duration-500 relative z-10 ${isExpanded ? 'w-16 bg-gradient-to-r from-amber-400 to-yellow-500' : 'w-8 md:w-12 bg-slate-800'}`}></div>
          <p className="text-slate-400 font-medium text-xs md:text-sm leading-relaxed font-sans line-clamp-3 md:line-clamp-none px-1 md:px-2">
            {data.frontSummary}
          </p>
        </div>

        <div className="flex flex-wrap gap-1 md:gap-1.5 mt-4 pt-3 justify-center z-10 relative w-full">
          {data.tags?.slice(0, 3).map(tag => (
            <span key={tag} className={`text-[8px] md:text-[10px] uppercase tracking-wider px-2 md:px-2.5 py-0.5 rounded-full border transition-all duration-300
              ${isExpanded
                ? 'border-amber-400/70 text-amber-200 bg-amber-500/15 shadow-[0_0_15px_rgba(234,179,8,0.5)]'
                : 'border-blue-500/50 text-blue-300 bg-blue-500/10 shadow-[0_0_10px_rgba(59,130,246,0.3)]'}`}>
              {tag}
            </span>
          ))}
        </div>

        {/* Pull Indicator with Rotating Arrow */}
        <div className="text-[8px] md:text-[9px] text-slate-600 mt-3 md:mt-4 uppercase tracking-[0.15em] md:tracking-[0.2em] font-bold transition-colors flex items-center justify-center gap-1 md:gap-1.5">
          <span className={isExpanded ? 'text-amber-400' : ''}>{isExpanded ? 'সংক্ষিপ্ত' : 'বিস্তারিত'}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-2.5 w-2.5 md:h-3 md:w-3 transition-transform duration-500 ease-out ${isExpanded ? 'rotate-180 text-amber-400' : 'animate-bounce'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ease-out ${isExpanded ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)', // Spring-like easing
          }}
        >
          <div className="pt-4 border-t border-amber-500/30">
            <h4 className="text-[10px] md:text-xs font-bold text-amber-400 mb-2 md:mb-3 uppercase tracking-widest flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              বিশ্লেষণ
            </h4>
            <p className="text-slate-300 text-xs md:text-[15px] leading-5 md:leading-6 whitespace-pre-wrap font-sans text-justify font-light tracking-wide">
              {data.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;