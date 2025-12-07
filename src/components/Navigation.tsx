import React, { useState } from 'react';
import { Tab } from '../types';

interface NavigationProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const tabs = [
    { id: Tab.HOME, label: 'হোম', icon: '🏠' },
    { id: Tab.LIFE_PROTOCOL, label: '১২টি সূত্র', icon: '📜' },
    { id: Tab.ATOMIC_HABITS, label: 'অ্যাটমিক হ্যাবিটস', icon: '⚛️' },
    { id: Tab.DEEP_WORK, label: 'ডিপ ওয়ার্ক', icon: '🎯' },
    { id: Tab.DOPAMINE_DETOX, label: 'ডোপামিন', icon: '🧠' },
    { id: Tab.DAILY_STOIC, label: 'স্টোয়িসিজম', icon: '🏛️' },
    { id: Tab.DEEP_FOCUS_PROTOCOL, label: 'ডিপ ফোকাস', icon: '🔍' },
    { id: Tab.MASTER_GUIDE, label: 'মাস্টার গাইড', icon: '📚' },
  ];

  const handleTabClick = (tabId: Tab) => {
    setActiveTab(tabId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Navigation */}
      <nav className="top-header sticky top-0 z-50 glass-strong shadow-lg font-sans">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 cursor-pointer group touch-feedback" onClick={() => handleTabClick(Tab.HOME)}>
              <span className="text-xl md:text-2xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 group-hover:from-blue-300 group-hover:to-purple-400 transition-all animate-gradient">
                LIFE OS
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:block overflow-x-auto scrollbar-hide">
              <div className="ml-10 flex items-baseline space-x-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-300 transform hover:scale-105 ${activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 ring-2 ring-blue-400/50 animate-pulse-glow'
                      : 'text-slate-400 hover:bg-slate-800/50 hover:text-white border border-transparent hover:border-slate-700'
                      }`}
                  >
                    <span className="mr-1.5">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button (for full menu access) */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2.5 rounded-xl text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-700 focus:outline-none transition-all touch-feedback"
              >
                <svg className="h-5 w-5" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Full Mobile Menu (overlay) */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[70vh] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="glass-strong px-3 pt-2 pb-4 space-y-2 shadow-2xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex items-center w-full text-left px-4 py-3.5 rounded-xl text-base font-medium transition-all touch-feedback ${activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600/20 to-indigo-600/20 text-blue-400 border border-blue-500/30 shadow-lg shadow-blue-900/20'
                  : 'text-slate-300 hover:bg-slate-700/50 hover:text-white border border-transparent'
                  }`}
              >
                <span className="text-xl mr-3">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation - Horizontal Scrollable */}
      <div className="lg:hidden bottom-nav">
        <div
          className="flex overflow-x-auto whitespace-nowrap px-2 gap-1"
          style={{
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE/Edge
          }}
        >
          <style>{`
            .bottom-nav div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`bottom-nav-item touch-feedback flex-shrink-0 ${activeTab === tab.id ? 'active' : ''}`}
              style={{ minWidth: '70px' }}
            >
              <span className="text-xl mb-1">{tab.icon}</span>
              <span className="text-[9px] font-medium whitespace-nowrap">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;