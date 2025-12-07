import React from 'react';
import { SectionData } from '../types';
import FlipCard from './FlipCard';

interface SectionProps {
  data: SectionData;
}

const Section: React.FC<SectionProps> = ({ data }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 animate-fade-in">
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-tight">
          {data.title}
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          {data.description}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {data.cards.map((card) => (
          <FlipCard key={card.id} data={card} />
        ))}
      </div>
    </div>
  );
};

export default Section;