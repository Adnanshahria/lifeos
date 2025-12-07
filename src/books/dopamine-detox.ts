import { SectionData } from '../types';

export const dopamineDetoxData: SectionData = {
  id: 'dopamine-detox',
  title: 'Dopamine Detox',
  description: 'Thibaut Meurisse-এর বই এবং আধুনিক নিউরোসায়েন্সের আলোকে ফোকাস পুনরুদ্ধারের গাইডলাইন।',
  cards: [],
  groups: [
    {
      title: "The Neuroscience of Dopamine",
      cards: [
        {
          id: 'dd-1',
          title: 'Wanting vs Liking',
          frontSummary: 'The Pleasure Myth',
          content: 'কেন্ট বেরিজের গবেষণা অনুযায়ী, ডোপামিন "সুখের অণু" নয়। এটি মূলত "WANTING" (চাওয়া) বা প্রত্যাশার নিউরোট্রান্সমিটার। প্রকৃত সুখ বা "LIKING" (ভোগ করা) নিয়ন্ত্রণ করে অপিওয়ের্ড সিস্টেম। সোশ্যাল মিডিয়া ডোপামিন সিস্টেমকে হাইজ্যাক করে আমাদের চাইতে বাধ্য করে, কিন্তু সেখানে কোনো প্রকৃত তৃপ্তি থাকে না।',
          tags: ['Neuroscience', 'Myth']
        },
        {
          id: 'dd-2',
          title: 'Molecule of More vs Here & Now',
          frontSummary: 'Chemical Balance',
          content: 'ডোপামিন হলো "Molecule of More"—এটি সবসময় ভবিষ্যতের দিকে ধাবিত করে। অন্যদিকে সেরোটোনিন, অক্সিটোসিন এবং এন্ডরফিন হলো "Here & Now" মলিকিউল—যা বর্তমান মুহূর্তের তৃপ্তি ও প্রশান্তি দেয়। আধুনিক জীবনে অসুখী হওয়ার মূল কারণ এই ভারসাম্যের অভাব।',
          tags: ['Chemistry', 'Happiness']
        },
        {
          id: 'dd-3',
          title: 'Reward Prediction Error (RPE)',
          frontSummary: 'The Gambling Mechanism',
          content: 'মস্তিষ্ক যখন অপ্রত্যাশিত পুরস্কার পায়, তখন ডোপামিন স্পাইক সবচেয়ে তীব্র হয়। সোশ্যাল মিডিয়ার নোটিফিকেশন জুয়ার মেশিনের (Slot Machine) মতো কাজ করে—আপনি জানেন না পরবর্তী স্ক্রলে কী অপেক্ষা করছে। এই অনিশ্চয়তাই (Uncertainty) আসক্তি তৈরি করে।',
          tags: ['Psychology', 'Gambling']
        },
        {
          id: 'dd-13',
          title: 'Homeostasis',
          frontSummary: 'The Balance Mechanism',
          content: 'শরীর সবসময় ভারসাম্য চায়। আপনি যখন কৃত্রিমভাবে (ড্রাগস, পর্ন, গেমস) ডোপামিন বাড়ান, মস্তিষ্ক তখন ব্যালেন্স করতে ডোপামিন রিসেপ্টর কমিয়ে দেয়। ফলে স্বাভাবিক অবস্থায় আপনি বিষণ্ণ বোধ করেন।',
          tags: ['Biology', 'Balance']
        },
        {
          id: 'dd-14',
          title: 'Sensory Overload',
          frontSummary: 'Information Fatigue',
          content: 'অতিরিক্ত তথ্যের প্রবাহ মস্তিষ্ককে ক্লান্ত করে। একে "কগনিটিভ ওভারলোড" বলে। এর ফলে সিদ্ধান্ত নেওয়ার ক্ষমতা কমে যায় এবং মনোযোগের স্থায়িত্ব (Attention Span) নষ্ট হয়।',
          tags: ['Cognition', 'Fatigue']
        },
        {
          id: 'dd-15',
          title: 'Incentive Salience',
          frontSummary: 'Unconscious Urge',
          content: 'বারবার ডোপামিন রিলিজ হওয়ার ফলে মস্তিষ্ক ওই বস্তু বা কাজকে "অত্যন্ত গুরুত্বপূর্ণ" হিসেবে মার্ক করে। তখন আপনি সচেতনভাবে না চাইলেও অবচেতন মন আপনাকে ওই কাজের দিকে ঠেলে দেয়।',
          tags: ['Urge', 'Psychology']
        }
      ]
    },
    {
      title: "Mechanisms of Addiction",
      cards: [
        {
          id: 'dd-4',
          title: 'Downregulation',
          frontSummary: 'Tolerance Building',
          content: 'অতিরিক্ত উদ্দীপনা পেলে মস্তিষ্ক নিজেকে রক্ষা করতে ডোপামিন রিসেপ্টর (D2 Receptor) কমিয়ে ফেলে। একে ডাউনরেগুলেশন বলে। এর ফলে সাধারণ কাজগুলো (বই পড়া, আড্ডা দেওয়া) আর আনন্দদায়ক মনে হয় না। একে "রিওয়ার্ড ডেফিসিয়েন্সি সিনড্রোম" বলা হয়।',
          tags: ['Biology', 'Tolerance']
        },
        {
          id: 'dd-5',
          title: 'The Stimulation Gap',
          frontSummary: 'Why Work Feels Boring',
          content: 'হাই-ডোপামিন অ্যাক্টিভিটি (টিকটক) করার পর লো-ডোপামিন অ্যাক্টিভিটি (পড়াশোনা) করা অসম্ভব মনে হয়। কারণ উচ্চ উদ্দীপনার ফলে মস্তিষ্কের "বোরডম থ্রেশহোল্ড" বেড়ে যায়। এই দুই স্তরের পার্থক্যকে "স্টিমুলেশন গ্যাপ" বলে।',
          tags: ['Concept', 'Focus']
        },
        {
          id: 'dd-6',
          title: 'Hyperbolic Discounting',
          frontSummary: 'Future Myopia',
          content: 'মানুষের মস্তিষ্ক বর্তমানের ছোট পুরস্কারকে (রিলস দেখা) ভবিষ্যতের বড় পুরস্কারের (ক্যারিয়ার গঠন) চেয়ে অনেক গুণ বেশি মূল্য দেয়। বিবর্তনের ধারায় মানুষ তাৎক্ষণিক টিকে থাকার জন্য প্রোগ্রামড।',
          tags: ['Psychology', 'Bias']
        },
        {
          id: 'dd-16',
          title: 'Novelty Seeking',
          frontSummary: 'Shiny Object Syndrome',
          content: 'ডোপামিন নতুনের প্রতি আসক্ত। আমরা সবসময় নতুন অ্যাপ, নতুন ভিডিও, নতুন খবরের পেছনে ছুটছি। কিন্তু গভীর কাজ বা মাস্টারি অর্জনের জন্য পুরনো বা একঘেয়ে কাজের পুনরাবৃত্তি প্রয়োজন।',
          tags: ['Novelty', 'Distraction']
        },
        {
          id: 'dd-17',
          title: 'Action Paralysis',
          frontSummary: 'Overstimulation Freeze',
          content: 'খুব বেশি অপশন বা উদ্দীপনা থাকলে মস্তিষ্ক কোনো সিদ্ধান্ত নিতে পারে না। একে "প্যারালাইসিস বাই অ্যানালাইসিস" বলে। ডোপামিন ডিটক্স এই জট খুলতে সাহায্য করে।',
          tags: ['Decision', 'Freeze']
        },
        {
          id: 'dd-31',
          title: 'Cheap vs Expensive Dopamine',
          frontSummary: 'Quality of Reward',
          content: 'সস্তা ডোপামিন (সোশ্যাল মিডিয়া, চিনি) কোনো প্রচেষ্টা ছাড়াই পাওয়া যায় এবং দ্রুত ক্র্যাশ করে। দামী ডোপামিন (ব্যায়াম, কাজ শেষ করা) প্রচেষ্টার পর পাওয়া যায় এবং দীর্ঘস্থায়ী তৃপ্তি দেয়।',
          tags: ['Reward', 'Quality']
        }
      ]
    },
    {
      title: "Detox Protocols",
      cards: [
        {
          id: 'dd-7',
          title: '48-Hour Complete Detox',
          frontSummary: 'The Hard Reset',
          content: 'সবচেয়ে তীব্র পদ্ধতি। টানা ৪৮ ঘণ্টা কোনো ফোন, ইন্টারনেট, মিউজিক, ভিডিও গেম বা জাঙ্ক ফুড নেই। শুধুমাত্র পানি, সাধারণ খাবার, হাঁটা এবং জার্নালিং করা যাবে। লক্ষ্য: ডোপামিন বেসলাইন রিসেট করা এবং রিসেপ্টর সংবেদনশীল করা।',
          tags: ['Protocol', 'Extreme']
        },
        {
          id: 'dd-8',
          title: '24-Hour Detox (Sabbath)',
          frontSummary: 'Weekly Maintenance',
          content: 'সপ্তাহে একদিন (যেমন শুক্রবার) সম্পূর্ণ অফলাইন থাকা। একে "ডিজিটাল সাবাথ" বলা হয়। এটি সারা সপ্তাহের জমে থাকা মেন্টাল ক্লাটার বা জঞ্জাল পরিষ্কার করতে এবং মস্তিষ্কের সিস্টেম রিবুট করতে সহায়তা করে।',
          tags: ['Protocol', 'Routine']
        },
        {
          id: 'dd-9',
          title: 'Partial Detox',
          frontSummary: 'Daily Habit',
          content: 'এটি দীর্ঘমেয়াদী লাইফস্টাইল। দিনের নির্দিষ্ট সময় (যেমন: সকালের প্রথম ১ ঘণ্টা এবং ঘুমের আগের ১ ঘণ্টা) "নো-স্ক্রিন জোন" হিসেবে পালন করা। এছাড়া কাজের সময় ফোন অন্য ঘরে রাখা।',
          tags: ['Protocol', 'Daily']
        },
        {
          id: 'dd-18',
          title: 'Can vs Can\'t List',
          frontSummary: 'Detox Rules',
          content: 'ডিটক্সের সময় কী করা যাবে (বই পড়া, লেখা, ব্যায়াম) এবং কী করা যাবে না (ফোন, টিভি, সুগার) তার একটি পরিষ্কার তালিকা তৈরি করুন। ধোঁয়াশা থাকলে মস্তিষ্ক ফাঁকিবাজি করবে।',
          tags: ['Planning', 'Rules']
        },
        {
          id: 'dd-19',
          title: 'Withdrawal Management',
          frontSummary: 'Handling Pain',
          content: 'ডিটক্সের প্রথম কয়েক ঘণ্টা খুব বিরক্তিকর এবং কষ্টদায়ক হবে। এটি স্বাভাবিক। একে "উইথড্রয়াল সিম্পটম" বলে। নিজেকে মনে করিয়ে দিন—এই কষ্টই প্রমাণ করছে যে আপনার মস্তিষ্ক হিলিং প্রসেসে আছে।',
          tags: ['Pain', 'Healing']
        }
      ]
    },
    {
      title: "Mental Tricks & Strategies",
      cards: [
        {
          id: 'dd-10',
          title: 'Cognitive Friction',
          frontSummary: 'Designing Difficulty',
          content: 'মস্তিষ্ক সহজ পথ খোঁজে। খারাপ অভ্যাসের পথে "জ্ঞানীয় ঘর্ষণ" (Cognitive Friction) তৈরি করুন। যেমন: ফোনকে গ্রে-স্কেল মোডে রাখা, অ্যাপের পাসওয়ার্ড জটিল করা, বা অ্যাপ ডিলিট করে ব্রাউজার দিয়ে লগ-ইন করা।',
          tags: ['Strategy', 'Hacking']
        },
        {
          id: 'dd-11',
          title: 'Ulysses Pact',
          frontSummary: 'Pre-Commitment Device',
          content: 'গ্রিক বীর ইউলিসিস সাইরেনদের গান থেকে বাঁচতে নিজেকে জাহাজের মাস্তুলের সাথে বেঁধেছিলেন। তেমনি ভবিষ্যতের ভুলের হাত থেকে বাঁচতে বর্তমানে নিজেকে বেধে ফেলুন। যেমন: অ্যাপ ব্লকার ব্যবহার করা।',
          tags: ['Strategy', 'Control']
        },
        {
          id: 'dd-12',
          title: 'Wait 10 Minutes',
          frontSummary: 'Surfing the Urge',
          content: 'যখনই কোনো বাজে অভ্যাসের তীব্র ইচ্ছা জাগবে, নিজেকে বলুন "আমি ১০ মিনিট অপেক্ষা করব"। অধিকাংশ ক্ষেত্রে, ১০ মিনিট পর সেই তীব্র তাড়না (Craving) চলে যায় বা দুর্বল হয়ে পড়ে।',
          tags: ['Technique', 'Willpower']
        },
        {
          id: 'dd-20',
          title: 'Illusion of Control',
          frontSummary: 'Mind Trick 1',
          content: 'মন আপনাকে বোঝায় "আমি চাইলেই ফোন রেখে দিতে পারি"। এটি মিথ্যা। আপনি আসক্ত এবং আপনার ইচ্ছাশক্তি হাইজ্যাক হয়ে গেছে। এই সত্য মেনে নেওয়াই মুক্তির প্রথম ধাপ।',
          tags: ['Trap', 'Awareness']
        },
        {
          id: 'dd-21',
          title: 'Excitement vs Fulfillment',
          frontSummary: 'Mind Trick 2',
          content: 'আমরা উত্তেজনাকে (Excitement) পূর্ণতা (Fulfillment) ভেবে ভুল করি। ভিডিও গেম উত্তেজনা দেয়, কিন্তু পূর্ণতা দেয় না। বই পড়া শান্তি ও পূর্ণতা দেয়।',
          tags: ['Mindset', 'Values']
        },
        {
          id: 'dd-22',
          title: 'Fear of Missing Out (FOMO)',
          frontSummary: 'Social Scarcity',
          content: '"আমি যদি কোনো খবর মিস করি?"—এই ভয় আমাদের অনলাইনে রাখে। মনে রাখবেন, সত্যিকারের গুরুত্বপূর্ণ খবর আপনার কাছে পৌঁছাবেই। বাকি সব নয়েজ বা কোলাহল।',
          tags: ['Fear', 'Reality']
        },
        {
          id: 'dd-23',
          title: 'Mindfulness',
          frontSummary: 'Watching the Urge',
          content: 'ডোপামিনের তাড়না আসলে একটি ঢেউয়ের মতো। এর বিরুদ্ধে যুদ্ধ না করে একে পর্যবেক্ষণ করুন। ভাবুন, "আমার এখন ফোন ধরতে ইচ্ছে করছে, এটা কেবল একটা কেমিক্যাল প্রতিক্রিয়া।"',
          tags: ['Mindfulness', 'Observation']
        },
        {
          id: 'dd-24',
          title: 'Replacement Strategy',
          frontSummary: 'Void Filling',
          content: 'বাজে অভ্যাস বাদ দিলে যে শূন্যস্থান তৈরি হয়, তা ভালো কিছু দিয়ে পূরণ করতে হবে। ফোন বাদ দিয়ে হাতে বই বা রুবিকস কিউব রাখুন। শূন্যস্থান থাকলে মস্তিষ্ক আবার পুরনো অভ্যাসে ফিরবে।',
          tags: ['Strategy', 'Habit']
        }
      ]
    },
    {
      title: "Long Term Maintenance",
      cards: [
        {
          id: 'dd-25',
          title: 'Morning Routine',
          frontSummary: 'Low Stimulation Start',
          content: 'দিনের প্রথম ১ ঘণ্টা কোনো হাই-ডোপামিন কাজ (ফোন চেক) করবেন না। মেডিটেশন, ব্যায়াম বা লেখালেখি করুন। এটি সারাদিনের জন্য আপনার ফোকাস লেভেল সেট করে দেয়।',
          tags: ['Routine', 'Morning']
        },
        {
          id: 'dd-26',
          title: 'Environment Audit',
          frontSummary: 'Cleaning Triggers',
          content: 'আপনার ঘর এবং ফোন থেকে ডোপামিন ট্রিগারগুলো সরান। নোটিফিকেশন অফ করুন, আনফলো করুন, অপ্রয়োজনীয় জিনিস ফেলে দিন।',
          tags: ['Environment', 'Clean']
        },
        {
          id: 'dd-27',
          title: 'Deep Life Buckets',
          frontSummary: 'Life Goals',
          content: 'জীবনকে ৪টি বাকেটে ভাগ করুন: ১. ক্যারিয়ার (Craft), ২. শরীর (Constitution), ৩. সমাজ (Community), ৪. মনন (Contemplation)। ডোপামিনের বদলে এই ৪টি ক্ষেত্রে উন্নতিতে ফোকাস করুন।',
          tags: ['Life', 'Goal']
        },
        {
          id: 'dd-28',
          title: 'Sustainable Pace',
          frontSummary: 'Consistency',
          content: 'ডিটক্স মানেই সন্ন্যাসী হওয়া নয়। এটি হলো নিয়ন্ত্রিত ভোগ। কাজ শেষে বিনোদন পুরস্কার হিসেবে নিন, কাজের আগে বা মাঝে নয়।',
          tags: ['Balance', 'Life']
        },
        {
          id: 'dd-29',
          title: 'The Relapse Plan',
          frontSummary: 'If-Then Planning',
          content: 'যদি আবার আসক্ত হয়ে পড়েন, তবে নিজেকে দোষ দেবেন না। পরিকল্পনা করুন: "যদি আমি আবার ফোন বেশি ব্যবহার করি, তবে আমি ২৪ ঘণ্টার ডিটক্স করব।"',
          tags: ['Recovery', 'Plan']
        },
        {
          id: 'dd-30',
          title: 'Serotonin Activities',
          frontSummary: 'Natural Highs',
          content: 'সূর্যের আলো, প্রকৃতি, কৃতজ্ঞতা প্রকাশ, সুষম খাবার—এগুলো প্রাকৃতিকভাবে সেরোটোনিন বাড়ায়। এটি আপনাকে স্থির এবং সুখী রাখে।',
          tags: ['Health', 'Nature']
        }
      ]
    }
  ]
};