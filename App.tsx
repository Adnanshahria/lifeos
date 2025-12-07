import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Section from './components/Section';
import MasterGuide from './components/MasterGuide';
import { Tab } from './types';
import { APP_DATA } from './data';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.HOME);

  const renderContent = () => {
    if (activeTab === Tab.HOME) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center animate-fade-in">
          <div className="w-24 h-24 mb-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight">
            Design Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Life Protocol
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
            A synthesis of <span className="text-white">Atomic Habits</span>, <span className="text-white">Deep Work</span>, <span className="text-white">Stoicism</span>, and <span className="text-white">Neuroscience</span>. 
            Designed to optimize the modern human existence.
          </p>
          <button 
            onClick={() => setActiveTab(Tab.LIFE_PROTOCOL)}
            className="px-8 py-4 bg-white text-dark-900 rounded-full font-bold text-lg hover:bg-slate-200 transition-colors shadow-xl"
          >
            Start The Protocol
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
    <div className="min-h-screen bg-dark-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-dark-800 via-dark-900 to-black">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="container mx-auto pb-12">
        {renderContent()}
      </main>
      <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-800/50">
        <p>Unified Knowledge Synthesis Protocol • 2025</p>
      </footer>
    </div>
  );
};

export default App;