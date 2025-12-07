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
        <div className="flex flex-col items-center justify-center min-h-[85vh] px-4 text-center animate-fade-in font-sans relative z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="w-24 h-24 mb-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-2xl shadow-blue-500/40 relative z-10 border border-white/10 ring-4 ring-white/5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 tracking-tighter drop-shadow-xl">
            ডিজাইন ইউর <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              Life Operating System
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mb-12 leading-relaxed font-light">
            <strong className="text-white font-semibold">অ্যাটমিক হ্যাবিটস</strong>, <strong className="text-white font-semibold">ডিপ ওয়ার্ক</strong>, <strong className="text-white font-semibold">স্টোয়িসিজম</strong>, এবং <strong className="text-white font-semibold">নিউরোসায়েন্স</strong>-এর সমন্বয়ে তৈরি। 
            <br className="hidden md:block"/> আধুনিক মানবজীবনকে অপ্টিমাইজ করার চূড়ান্ত কাঠামো।
          </p>
          
          <button 
            onClick={() => setActiveTab(Tab.LIFE_PROTOCOL)}
            className="group relative px-10 py-4 bg-white text-dark-900 rounded-full font-bold text-lg overflow-hidden shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.5)] transition-all duration-300"
          >
            <span className="relative z-10 group-hover:tracking-wider transition-all duration-300">প্রোটোকল শুরু করুন</span>
            <div className="absolute inset-0 bg-blue-50 group-hover:bg-blue-100 transition-colors"></div>
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
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none z-50"></div>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="container mx-auto pb-12 relative z-0">
        {renderContent()}
      </main>
      <footer className="py-12 text-center text-slate-700 text-sm border-t border-slate-900/50">
        <p className="font-serif tracking-widest uppercase">Life Operating System v2.0 • ২০২৫</p>
      </footer>
    </div>
  );
};

export default App;