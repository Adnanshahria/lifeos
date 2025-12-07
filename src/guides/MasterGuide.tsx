import React from 'react';

const MasterGuide: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 pt-20 md:pt-8 py-8 animate-fade-in text-slate-300 font-sans pb-24 md:pb-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">ইউনিফাইড ফ্রেমওয়ার্ক</h2>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          একটি "লাইফ-অপারেটিং সিস্টেম" যা অ্যাটমিক হ্যাবিটস, ডিপ ওয়ার্ক এবং স্টোয়িসিজমকে ২৪ ঘণ্টার একটি পিক পারফরম্যান্স সাইকেলে একত্রিত করে।
        </p>
      </div>

      {/* The 3 Phases of the Day */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Phase 1 */}
        <div className="bg-dark-800 rounded-3xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-colors relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
          <h3 className="text-2xl font-bold text-white mb-2 font-serif">ফেজ ১: দ্য সিটাডেল</h3>
          <p className="text-blue-400 text-sm mb-6 uppercase tracking-wider font-bold">ভোর ০৪:০০ - সকাল ০৮:০০</p>
          <ul className="space-y-6">
            <li className="relative pl-6 border-l-2 border-slate-700">
              <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-blue-500"></span>
              <strong className="text-white block text-lg">ঘুম থেকে ওঠা ও ওযু</strong>
              <span className="text-sm text-slate-400">ম্যামালিয়ান ডাইভ রিফ্লেক্স। মুখে ঠান্ডা পানির ঝাপটা নার্ভাস সিস্টেম রিসেট করে।</span>
            </li>
            <li className="relative pl-6 border-l-2 border-slate-700">
              <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-blue-500"></span>
              <strong className="text-white block text-lg">তাহাজ্জুদ ও স্টোয়িক জার্নালিং</strong>
              <span className="text-sm text-slate-400">আধ্যাত্মিক প্রশান্তি + "প্রিমিডিটাশিও ম্যালোরাম"। দিনের সম্ভাব্য বাধার জন্য প্রস্তুতি।</span>
            </li>
            <li className="relative pl-6 border-l-2 border-slate-700">
              <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-blue-500"></span>
              <strong className="text-white block text-lg">ডিপ ওয়ার্ক ব্লক ১</strong>
              <span className="text-sm text-slate-400">"ইট দ্য ফ্রগ"। মস্তিষ্ক যখন আলফা/থীটা ওয়েভে থাকে তখন সবচেয়ে কঠিন কাজটি করুন।</span>
            </li>
          </ul>
        </div>

        {/* Phase 2 */}
        <div className="bg-dark-800 rounded-3xl p-8 border border-slate-700/50 hover:border-emerald-500/50 transition-colors relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-600"></div>
          <h3 className="text-2xl font-bold text-white mb-2 font-serif">ফেজ ২: দ্য গ্রাইন্ড</h3>
          <p className="text-emerald-400 text-sm mb-6 uppercase tracking-wider font-bold">সকাল ০৮:০০ - দুপুর ০২:০০</p>
          <ul className="space-y-6">
            <li className="relative pl-6 border-l-2 border-slate-700">
              <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-emerald-500"></span>
              <strong className="text-white block text-lg">হ্যাবিট স্ট্যাকিং</strong>
              <span className="text-sm text-slate-400">যাতায়াত = অডিও লার্নিং। পৌঁছানো = প্ল্যানিং। পুরনো অভ্যাসের সাথে নতুন অভ্যাস যুক্ত করুন।</span>
            </li>
            <li className="relative pl-6 border-l-2 border-slate-700">
              <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-emerald-500"></span>
              <strong className="text-white block text-lg">ডিপ ওয়ার্ক ব্লক ২</strong>
              <span className="text-sm text-slate-400">আল্ট্রাডিয়ান রিদমের দ্বিতীয় পিক। দক্ষতা অর্জন বা সৃজনশীল কাজের জন্য ব্যবহার করুন।</span>
            </li>
            <li className="relative pl-6 border-l-2 border-slate-700">
              <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-emerald-500"></span>
              <strong className="text-white block text-lg">কাইলুলাহ (পাওয়ার ন্যাপ)</strong>
              <span className="text-sm text-slate-400">জোহরের পর ২০ মিনিটের ন্যাপ। অ্যাডেনোসিন ক্লিয়ার করে এবং বিকেলের জন্য মস্তিষ্ক রিসেট করে।</span>
            </li>
          </ul>
        </div>

        {/* Phase 3 */}
        <div className="bg-dark-800 rounded-3xl p-8 border border-slate-700/50 hover:border-orange-500/50 transition-colors relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-600"></div>
          <h3 className="text-2xl font-bold text-white mb-2 font-serif">ফেজ ৩: দ্য শাটডাউন</h3>
          <p className="text-orange-400 text-sm mb-6 uppercase tracking-wider font-bold">দুপুর ০২:০০ - রাত ১০:০০</p>
          <ul className="space-y-6">
            <li className="relative pl-6 border-l-2 border-slate-700">
              <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-orange-500"></span>
              <strong className="text-white block text-lg">শ্যালো ওয়ার্ক ও এডমিন</strong>
              <span className="text-sm text-slate-400">ইমেইল, মিটিং, ছোট কাজ। যখন মানসিক শক্তি কম থাকে তখন এগুলো করুন।</span>
            </li>
            <li className="relative pl-6 border-l-2 border-slate-700">
              <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-orange-500"></span>
              <strong className="text-white block text-lg">শাটডাউন রিচুয়াল</strong>
              <span className="text-sm text-slate-400">কাজ রিভিউ করুন। "শাটডাউন কমপ্লিট" বলুন। কাজের চিন্তা বন্ধ করুন (জাইগারনিক ইফেক্ট)।</span>
            </li>
            <li className="relative pl-6 border-l-2 border-slate-700">
              <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-orange-500"></span>
              <strong className="text-white block text-lg">ডিজিটাল ডিটক্স</strong>
              <span className="text-sm text-slate-400">ঘুমের ১ ঘণ্টা আগে নো স্ক্রিন। বই পড়ুন। পরিবারের সাথে সময় কাটান (অক্সিটোসিন)।</span>
            </li>
          </ul>
        </div>
      </div>

      {/* The 30-Day Launchpad */}
      <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-3xl p-10 border border-slate-700 shadow-2xl">
        <h3 className="text-3xl font-serif font-bold text-white mb-8 text-center">৩০ দিনের এক্সিকিউশন প্ল্যান</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="p-6 bg-dark-700/50 rounded-2xl border border-slate-600/30">
            <div className="text-3xl font-bold text-slate-500 mb-2">১ম সপ্তাহ</div>
            <h4 className="text-xl font-bold text-white mb-3">ফাউন্ডেশন ও ডিটক্স</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              - ডোপামিন বেসলাইন রিসেট।<br />
              - ফোন থেকে সোশ্যাল অ্যাপ ডিলিট।<br />
              - ঘুমের রুটিন ঠিক করা (১০টা-৪টা)।<br />
              - ওযু/ঠান্ডা পানির অভ্যাস গঠন।
            </p>
          </div>

          <div className="p-6 bg-dark-700/50 rounded-2xl border border-slate-600/30">
            <div className="text-3xl font-bold text-slate-500 mb-2">২য় সপ্তাহ</div>
            <h4 className="text-xl font-bold text-white mb-3">হ্যাবিট ইনস্টলেশন</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              - ৯০ মিনিটের ডিপ ওয়ার্ক ব্লক শুরু।<br />
              - হ্যাবিট স্ট্যাকিং প্রয়োগ।<br />
              - ওয়ার্কস্পেস গুছিয়ে রাখা।<br />
              - কাজের সময় ফোন অন্য ঘরে রাখা।
            </p>
          </div>

          <div className="p-6 bg-dark-700/50 rounded-2xl border border-slate-600/30">
            <div className="text-3xl font-bold text-slate-500 mb-2">৩য় সপ্তাহ</div>
            <h4 className="text-xl font-bold text-white mb-3">অপ্টিমাইজেশন</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              - কাইলুলাহ (ন্যাপ) যুক্ত করা।<br />
              - দিনে ৩টি ডিপ ওয়ার্ক ব্লক।<br />
              - নেগেটিভ ভিজ্যুয়ালাইজেশন চর্চা।<br />
              - অগ্রগতির লক্ষণগুলো যাচাই করা।
            </p>
          </div>

          <div className="p-6 bg-dark-700/50 rounded-2xl border border-slate-600/30">
            <div className="text-3xl font-bold text-slate-500 mb-2">৪র্থ সপ্তাহ</div>
            <h4 className="text-xl font-bold text-white mb-3">ফুল থ্রোটল</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              - সম্পূর্ণ সিস্টেম রান করা।<br />
              - KPI ট্র্যাক করা (কাজের ঘণ্টা)।<br />
              - ডায়েট ও এক্সারসাইজ প্ল্যান।<br />
              - সাপ্তাহিক রিভিউ ও অ্যাডজাস্টমেন্ট।
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MasterGuide;