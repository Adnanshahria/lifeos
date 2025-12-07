import React from 'react';

const MasterGuide: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 animate-fade-in text-slate-300">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">The Unified Framework</h2>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          A "Life-Operating System" synthesizing Atomic Habits, Deep Work, and Stoicism into a single 24-hour cycle of peak performance.
        </p>
      </div>

      {/* The 3 Phases of the Day */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Phase 1 */}
        <div className="bg-dark-800 rounded-3xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-colors relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
          <h3 className="text-2xl font-bold text-white mb-2 font-serif">Phase 1: The Citadel</h3>
          <p className="text-blue-400 text-sm mb-6 uppercase tracking-wider font-bold">04:00 AM - 08:00 AM</p>
          <ul className="space-y-6">
            <li className="relative pl-6 border-l-2 border-slate-700">
              <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-blue-500"></span>
              <strong className="text-white block text-lg">Wake Up & Wudu</strong>
              <span className="text-sm text-slate-400">Trigger Mammalian Dive Reflex. Cold water on face resets nervous system.</span>
            </li>
            <li className="relative pl-6 border-l-2 border-slate-700">
              <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-blue-500"></span>
              <strong className="text-white block text-lg">Tahajjud & Stoic Journaling</strong>
              <span className="text-sm text-slate-400">Spiritual grounding + "Premeditatio Malorum". Prepare for the day's obstacles.</span>
            </li>
            <li className="relative pl-6 border-l-2 border-slate-700">
              <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-blue-500"></span>
              <strong className="text-white block text-lg">Deep Work Block 1</strong>
              <span className="text-sm text-slate-400">"Eat the Frog". Hardest cognitive task while brain is in Alpha/Theta waves. No phone.</span>
            </li>
          </ul>
        </div>

        {/* Phase 2 */}
        <div className="bg-dark-800 rounded-3xl p-8 border border-slate-700/50 hover:border-emerald-500/50 transition-colors relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-600"></div>
          <h3 className="text-2xl font-bold text-white mb-2 font-serif">Phase 2: The Grind</h3>
          <p className="text-emerald-400 text-sm mb-6 uppercase tracking-wider font-bold">08:00 AM - 02:00 PM</p>
          <ul className="space-y-6">
            <li className="relative pl-6 border-l-2 border-slate-700">
              <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-emerald-500"></span>
              <strong className="text-white block text-lg">Habit Stacking</strong>
              <span className="text-sm text-slate-400">Commute = Audio Learning. Arrival = Planning. Link new habits to old cues.</span>
            </li>
            <li className="relative pl-6 border-l-2 border-slate-700">
              <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-emerald-500"></span>
              <strong className="text-white block text-lg">Deep Work Block 2</strong>
              <span className="text-sm text-slate-400">Second peak of Ultradian Rhythm. Focus on skill acquisition or creative output.</span>
            </li>
            <li className="relative pl-6 border-l-2 border-slate-700">
              <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-emerald-500"></span>
              <strong className="text-white block text-lg">Qailulah (Power Nap)</strong>
              <span className="text-sm text-slate-400">20-minute nap post-Zuhr. Clears adenosine. Resets cognitive capacity for the evening.</span>
            </li>
          </ul>
        </div>

        {/* Phase 3 */}
        <div className="bg-dark-800 rounded-3xl p-8 border border-slate-700/50 hover:border-orange-500/50 transition-colors relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-600"></div>
          <h3 className="text-2xl font-bold text-white mb-2 font-serif">Phase 3: The Shutdown</h3>
          <p className="text-orange-400 text-sm mb-6 uppercase tracking-wider font-bold">02:00 PM - 10:00 PM</p>
          <ul className="space-y-6">
            <li className="relative pl-6 border-l-2 border-slate-700">
              <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-orange-500"></span>
              <strong className="text-white block text-lg">Shallow Work & Admin</strong>
              <span className="text-sm text-slate-400">Emails, meetings, chores. Do this when mental energy is lower.</span>
            </li>
            <li className="relative pl-6 border-l-2 border-slate-700">
              <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-orange-500"></span>
              <strong className="text-white block text-lg">Shutdown Ritual</strong>
              <span className="text-sm text-slate-400">Review tasks. Say "Shutdown Complete". Stop ruminating (Counter Zeigarnik Effect).</span>
            </li>
            <li className="relative pl-6 border-l-2 border-slate-700">
              <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-orange-500"></span>
              <strong className="text-white block text-lg">Digital Detox</strong>
              <span className="text-sm text-slate-400">No screens 1hr before bed. Read physical books. Family connection (Oxytocin).</span>
            </li>
          </ul>
        </div>
      </div>

      {/* The 30-Day Launchpad */}
      <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-3xl p-10 border border-slate-700 shadow-2xl">
        <h3 className="text-3xl font-serif font-bold text-white mb-8 text-center">The 30-Day Execution Plan</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 bg-dark-700/50 rounded-2xl border border-slate-600/30">
            <div className="text-3xl font-bold text-slate-500 mb-2">Wk 1</div>
            <h4 className="text-xl font-bold text-white mb-3">Foundation & Detox</h4>
            <p className="text-sm text-slate-300">
              - Dopamine Baseline Reset.<br/>
              - Delete social apps from phone.<br/>
              - Fix sleep schedule (10pm - 4am).<br/>
              - Establish Wudu/Cold water reflex.
            </p>
          </div>

          <div className="p-6 bg-dark-700/50 rounded-2xl border border-slate-600/30">
            <div className="text-3xl font-bold text-slate-500 mb-2">Wk 2</div>
            <h4 className="text-xl font-bold text-white mb-3">Habit Installation</h4>
            <p className="text-sm text-slate-300">
              - Start 90min Deep Work block.<br/>
              - Implement Habit Stacking.<br/>
              - Organize workspace (Law of Friction).<br/>
              - Phone in another room during work.
            </p>
          </div>

          <div className="p-6 bg-dark-700/50 rounded-2xl border border-slate-600/30">
            <div className="text-3xl font-bold text-slate-500 mb-2">Wk 3</div>
            <h4 className="text-xl font-bold text-white mb-3">Optimization</h4>
            <p className="text-sm text-slate-300">
              - Introduce Qailulah (Naps).<br/>
              - 3 Deep Work blocks per day.<br/>
              - Negative Visualization practice.<br/>
              - Check "Signs of Progress".
            </p>
          </div>

          <div className="p-6 bg-dark-700/50 rounded-2xl border border-slate-600/30">
            <div className="text-3xl font-bold text-slate-500 mb-2">Wk 4</div>
            <h4 className="text-xl font-bold text-white mb-3">Full Throttle</h4>
            <p className="text-sm text-slate-300">
              - Run the full system.<br/>
              - Track KPIs (Deep Work Hours).<br/>
              - Strict Diet & Exercise plan.<br/>
              - Weekly Review & Adjust.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MasterGuide;