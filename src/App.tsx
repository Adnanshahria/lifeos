import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Section from './components/Section';
import MasterGuide from './guides/MasterGuide';
import { Tab } from './types';
import { APP_DATA } from './data';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.HOME);

  const renderContent = () => {
    if (activeTab === Tab.HOME) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] md:min-h-[85vh] px-4 pt-16 md:pt-0 text-center animate-fade-in font-sans relative z-10">
          {/* Animated Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-blue-600/15 via-indigo-600/10 to-purple-600/15 blur-[100px] md:blur-[120px] rounded-full pointer-events-none animate-gradient"></div>

          {/* Secondary Glow */}
          <div className="absolute top-1/4 right-1/4 w-[150px] md:w-[200px] h-[150px] md:h-[200px] bg-purple-500/10 blur-[80px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-1/4 left-1/4 w-[100px] md:w-[150px] h-[100px] md:h-[150px] bg-blue-500/10 blur-[60px] rounded-full pointer-events-none"></div>

          {/* Logo Icon */}
          <div className="w-20 h-20 md:w-24 md:h-24 mb-8 md:mb-10 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center shadow-2xl shadow-blue-500/40 relative z-10 border border-white/10 ring-4 ring-white/5 animate-pulse-glow">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 md:mb-8 tracking-tighter drop-shadow-xl leading-tight">
            Design Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 animate-gradient">
              Life Operating System
            </span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-xl lg:text-2xl text-slate-300 max-w-3xl mb-8 md:mb-12 leading-relaxed font-light px-2">
            <strong className="text-white font-semibold">অ্যাটমিক হ্যাবিটস</strong>, <strong className="text-white font-semibold">ডিপ ওয়ার্ক</strong>, <strong className="text-white font-semibold">স্টোয়িসিজম</strong>, এবং <strong className="text-white font-semibold">নিউরোসায়েন্স</strong>-এর সমন্বয়ে তৈরি।
            <br className="hidden md:block" /> আধুনিক মানবজীবনকে অপ্টিমাইজ করার চূড়ান্ত কাঠামো।
          </p>

          {/* CTA Button */}
          <button
            onClick={() => setActiveTab(Tab.LIFE_PROTOCOL)}
            className="group relative px-8 md:px-10 py-3.5 md:py-4 bg-white text-dark-900 rounded-full font-bold text-base md:text-lg overflow-hidden shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.5)] transition-all duration-300 touch-feedback"
          >
            <span className="relative z-10 group-hover:tracking-wider transition-all duration-300">প্রোটোকল শুরু করুন</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100 transition-colors"></div>
          </button>
        </div>
      );
    }

    if (activeTab === Tab.MASTER_GUIDE) {
      return <MasterGuide />;
    }

    return <Section data={APP_DATA[activeTab]} />;
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 font-sans selection:bg-blue-500/30 selection:text-blue-200">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none z-50"></div>

      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="container mx-auto pb-12 relative z-0">
        {renderContent()}
      </main>

      <footer className="py-8 md:py-12 text-center text-slate-700 text-xs md:text-sm border-t border-slate-900/50 pb-20 md:pb-12">
        <p className="font-serif tracking-widest uppercase">Life Operating System v2.0 • ২০২৫</p>
      </footer>
    </div>
  );
};

export default App;