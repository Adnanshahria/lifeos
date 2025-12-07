import { SectionData } from '../types';

export const deepWorkData: SectionData = {
  id: 'deep-work',
  title: 'Deep Work',
  description: 'Cal Newport-এর যুগান্তকারী বইয়ের বিশ্লেষণ। একবিংশ শতাব্দীর অর্থনীতিতে টিকে থাকার সুপারপাওয়ার।',
  cards: [],
  groups: [
    {
      title: "The Core Concepts",
      cards: [
        {
          id: 'dw-1',
          title: 'Deep Work Defined',
          frontSummary: 'The Superpower',
          content: 'ডিপ ওয়ার্ক হলো এমন পেশাগত কার্যকলাপ যা বিক্ষিপ্ততাহীন বা মনোযোগ-বিঘ্নহীন পরিবেশে সম্পন্ন করা হয়। এটি মানুষের জ্ঞানীয় সক্ষমতাকে (Cognitive Capabilities) তার সর্বোচ্চ সীমায় নিয়ে যায়। এই প্রচেষ্টার ফলেই নতুন মূল্য সৃষ্টি হয়, দক্ষতার উন্নতি ঘটে এবং এই কাজ সহজে প্রতিলিপি বা কপি করা যায় না।',
          tags: ['Definition', 'Core']
        },
        {
          id: 'dw-2',
          title: 'Shallow Work',
          frontSummary: 'The Busyness Trap',
          content: 'শ্যাল ো ওয়ার্ক বা অগভীর কাজ হলো লজিস্টিক্যাল বা গৎবাঁধা কাজ (যেমন: মিটিং, ইমেইল, রিপোর্ট), যা খুব বেশি মানসিক প্রচেষ্টার প্রয়োজন হয় না এবং প্রায়শই বিক্ষিপ্ত অবস্থায় করা যায়। এটি দুনিয়াতে নতুন কোনো ভ্যালু তৈরি করে না এবং সহজেই অটোমেট করা সম্ভব। ব্যস্ত থাকা আর প্রোডাক্টিভ থাকা এক নয়।',
          tags: ['Concept', 'Warning']
        },
        {
          id: 'dw-3',
          title: 'Neuroscience: Myelination',
          frontSummary: 'Wiring the Brain',
          content: 'গভীর মনোযোগের সাথে কাজ করলে মস্তিষ্কের নিউরনের নির্দিষ্ট সার্কিট বারবার ফায়ার করে। এর ফলে অলিগোডেন্ড্রোসাইট নামক কোষগুলো নিউরনের চারপাশে ‘মায়োলিন’ (Myelin) নামক চর্বিযুক্ত স্তরের আস্তরণ তৈরি করে। এই মায়োলিন সিগন্যাল ট্রান্সমিশন ১০০ গুণ পর্যন্ত দ্রুত করে এবং শক্তি অপচয় রোধ করে।',
          tags: ['Neuroscience', 'Biology']
        },
        {
          id: 'dw-4',
          title: 'Attention Residue',
          frontSummary: 'Sophie Leroy\'s Research',
          content: 'মিনেসোটা বিশ্ববিদ্যালয়ের গবেষক সোফি লেরয় প্রমাণ করেছেন, যখন আমরা কাজ A থেকে কাজ B-তে দ্রুত মনোযোগ সরাই, তখন মনোযোগ সম্পূর্ণরূপে স্থানান্তরিত হয় না। আগের কাজের একটি "মনোযোগের অবশিষ্টাংশ" (Residue) মস্তিষ্কে থেকে যায়। একবার ইমেইল চেক করার পর পূর্ণ ফোকাসে ফিরতে মস্তিষ্কের প্রায় ২৩ মিনিট সময় লাগে।',
          tags: ['Psychology', 'Focus']
        },
        {
          id: 'dw-16',
          title: 'The Great Restructuring',
          frontSummary: 'Economy of the Future',
          content: 'প্রযুক্তির দ্রুত অগ্রগতির ফলে অর্থনীতি দ্বিধাবিভক্ত হচ্ছে। যারা বুদ্ধিমান মেশিনের সাথে কাজ করতে পারে (High-skilled) এবং যারা নিজেদের ফিল্ডে সুপারস্টার, তারাই লাভবান হবে। মধ্যম মানের কাজের কোনো ভ্যালু থাকবে না। ডিপ ওয়ার্ক এই দুই দক্ষতা অর্জনের চাবিকাঠি।',
          tags: ['Economy', 'Future']
        },
        {
          id: 'dw-17',
          title: 'Metric Black Hole',
          frontSummary: 'Unmeasurable Productivity',
          content: 'নলেজ ওয়ার্ক বা বুদ্ধিবৃত্তিক কাজের উৎপাদনশীলতা মাপা কঠিন। তাই কর্মীরা "ব্যস্ত থাকা"কেই (তাৎক্ষণিক ইমেইল রিপ্লাই, মিটিং) উৎপাদনশীলতা হিসেবে দেখায়। একে "Busyness as Proxy for Productivity" বলে। এটি প্রতিষ্ঠানের জন্য ক্ষতিকর।',
          tags: ['Corporate', 'Trap']
        },
        {
          id: 'dw-18',
          title: 'Principle of Least Resistance',
          frontSummary: 'Easy Way Out',
          content: 'কাজের ভ্যালু বা মূল্য সম্পর্কে পরিষ্কার ধারণা না থাকলে, কর্মীরা সেই কাজগুলোই করে যা সেই মুহূর্তে সবচেয়ে সহজ। গভীর চিন্তা করার চেয়ে ইমেইল চেক করা সহজ। তাই আমরা শ্যালো ওয়ার্কে ডুবে যাই।',
          tags: ['Psychology', 'Laziness']
        },
        {
          id: 'dw-31',
          title: 'High-Quality Work Produced',
          frontSummary: 'The Equation',
          content: 'সূত্র: High-Quality Work Produced = (Time Spent) x (Intensity of Focus)। আপনি যদি ফোকাসের তীব্রতা বাড়াতে পারেন, তবে অনেক কম সময়ে অনেক বেশি এবং উন্নত মানের কাজ করা সম্ভব। মাল্টিটাস্কিং এই তীব্রতা শূন্য করে দেয়।',
          tags: ['Math', 'Equation']
        }
      ]
    },
    {
      title: "Rule 1: Work Deeply",
      cards: [
        {
          id: 'dw-5',
          title: 'Monastic Philosophy',
          frontSummary: 'Complete Isolation',
          content: 'বাইরের জগত থেকে নিজেকে সম্পূর্ণ বিচ্ছিন্ন করে ফেলা। কোনো ইমেইল, ফোন বা সামাজিক যোগাযোগ থাকে না। যেমন: কম্পিউটার বিজ্ঞানী ডোনাল্ড নুথ ১৯৭৪ সাল থেকে ইমেইল ব্যবহার বন্ধ করে দিয়েছেন। এটি সর্বোচ্চ গভীরতা নিশ্চিত করে, কিন্তু সবার জন্য প্রযোজ্য নয়।',
          tags: ['Strategy', 'Extreme']
        },
        {
          id: 'dw-6',
          title: 'Bimodal Philosophy',
          frontSummary: 'The Jungian Approach',
          content: 'সময়ের একটি নির্দিষ্ট অংশ (যেমন কয়েক সপ্তাহ বা মাস) সন্ন্যাসীর মতো কাটানো, আর বাকি সময় স্বাভাবিক সামাজিক জীবন যাপন করা। মনোবিজ্ঞানী কার্ল ইয়াং জুরিখে চিকিৎসা করতেন এবং বলিঙ্গেন টাওয়ারে নির্জনে লিখতেন।',
          tags: ['Strategy', 'Balance']
        },
        {
          id: 'dw-7',
          title: 'Rhythmic Philosophy',
          frontSummary: 'The Chain Method',
          content: 'প্রতিদিন একটি নির্দিষ্ট সময়ে (যেমন ভোর ৫টা-৮টা) ডিপ ওয়ার্ক করার অভ্যাস গড়ে তোলা। এটি "চেইন মেথড" বা অভ্যাসের শক্তিতে বিশ্বাসী। শিক্ষার্থী ও চাকরিজীবীদের জন্য এটি সবচেয়ে বাস্তবসম্মত এবং কার্যকর পদ্ধতি।',
          tags: ['Strategy', 'Routine']
        },
        {
          id: 'dw-8',
          title: 'Journalistic Philosophy',
          frontSummary: 'Focus on Demand',
          content: 'সাংবাদিকদের মতো যখনই দিনের মধ্যে ফাঁকা সময় পাওয়া যায় (যেমন লাঞ্চ ব্রেক বা মিটিংয়ের মাঝে ৩০ মিনিট), তখনই গভীর কাজে ডুবে যাওয়া। এটি অত্যন্ত মানসিক দক্ষতাসম্পন্ন ব্যক্তিদের জন্য প্রযোজ্য যারা দ্রুত মোড সুইচ করতে পারেন।',
          tags: ['Strategy', 'Advanced']
        },
        {
          id: 'dw-19',
          title: 'Ritualizing Work',
          frontSummary: 'Environment & Mindset',
          content: 'ডিপ ওয়ার্কের জন্য একটি নির্দিষ্ট স্থান (Location), সময় (Duration), এবং নিয়ম (Structure) ঠিক করুন। যেমন: "আমি লাইব্রেরিতে ২ ঘণ্টা থাকব এবং কোনো ইন্টারনেট ব্যবহার করব না।" রিচুয়াল ইচ্ছাশক্তির ওপর চাপ কমায়।',
          tags: ['Habit', 'Ritual']
        },
        {
          id: 'dw-20',
          title: 'Grand Gesture',
          frontSummary: 'Investing in Focus',
          content: 'কাজের প্রতি সিরিয়াসনেস বাড়াতে বড় কোনো পদক্ষেপ নেওয়া। যেমন: জে.কে. রাউলিং "হ্যারি পটার" শেষ করার জন্য দামী হোটেলে রুম ভাড়া করেছিলেন। বিল গেটস "থিংক উইক" (Think Week) এ বিচ্ছিন্ন দ্বীপে চলে যেতেন।',
          tags: ['Motivation', 'Investment']
        },
        {
          id: 'dw-21',
          title: 'Collaboration vs Focus',
          frontSummary: 'Hub and Spoke Model',
          content: 'ডিপ ওয়ার্ক একা করতে হয়, কিন্তু মাঝে মাঝে কোলাবোরেশন বা আলোচনা নতুন আইডিয়া দেয় (Serendipity)। তাই "হাব এন্ড স্পোক" মডেল ব্যবহার করুন—একাকি কাজ করার পর কমন স্পেসে এসে আইডিয়া শেয়ার করা।',
          tags: ['Teamwork', 'Balance']
        },
        {
          id: 'dw-32',
          title: 'Execute Like a Business',
          frontSummary: '4DX in Personal Life',
          content: 'প্রাতিষ্ঠানিক লক্ষ্য অর্জনের ফ্রেমওয়ার্ক ব্যক্তিগত জীবনে প্রয়োগ করুন। "কী" করতে হবে তা জানার চেয়ে "কীভাবে" করতে হবে (Execution) তা বেশি গুরুত্বপূর্ণ।',
          tags: ['Execution', 'Business']
        }
      ]
    },
    {
      title: "Rule 2: Embrace Boredom",
      cards: [
        {
          id: 'dw-9',
          title: 'Training the Focus Muscle',
          frontSummary: 'Resisting Distraction',
          content: 'মনোযোগ বা ফোকাস একটি পেশির মতো। আপনি যদি কাজের বাইরে সামান্য বোরিং লাগলেই ফোন হাতে নেন, তবে আপনি আপনার ফোকাস পেশিকে দুর্বল করে দিচ্ছেন। জিমে গিয়ে যেমন ওজন তুলতে হয়, তেমনি মনোযোগ বাড়াতে হলে একঘেয়েমি সহ্য করার প্র্যাকটিস করতে হবে।',
          tags: ['Training', 'Discipline']
        },
        {
          id: 'dw-10',
          title: 'Productive Meditation',
          frontSummary: 'Thinking while Moving',
          content: 'শারীরিকভাবে ব্যস্ত কিন্তু মানসিকভাবে অবসর (যেমন: হাঁটা, জগিং, বা পাবলিক ট্রান্সপোর্টে থাকা) এমন সময়ে একটি নির্দিষ্ট পেশাগত সমস্যা সমাধানের চেষ্টা করুন। মন অন্য চিন্তায় চলে গেলে তাকে জোর করে আবার সমস্যায় ফিরিয়ে আনুন।',
          tags: ['Meditation', 'Thinking']
        },
        {
          id: 'dw-22',
          title: 'Interval Training',
          frontSummary: 'Internet Blocks',
          content: 'ইন্টারনেট ব্যবহারের জন্য নির্দিষ্ট সময় বরাদ্দ করুন। সেই সময়ের বাইরে ইন্টারনেট ব্যবহার নিষিদ্ধ, এমনকি কাজ আটকে গেলেও। এটি মস্তিষ্ককে ডোপামিন ছাড়াই কাজ করতে শেখায়।',
          tags: ['Discipline', 'Internet']
        },
        {
          id: 'dw-23',
          title: 'Rooseveltian Intensity',
          frontSummary: 'Artificial Deadlines',
          content: 'থিওডোর রুজভেল্টের মতো কাজ করুন। একটি কাজ শেষ করতে স্বাভাবিকভাবে যতটুকু সময় লাগে, তার চেয়ে অনেক কম সময়ের একটি কৃত্রিম ডেডলাইন সেট করুন। এটি আপনাকে সর্বোচ্চ মানসিক তীব্রতা (Intensity) প্রয়োগ করতে বাধ্য করবে।',
          tags: ['Speed', 'Intensity']
        }
      ]
    },
    {
      title: "Rule 3: Quit Social Media",
      cards: [
        {
          id: 'dw-11',
          title: 'The Any-Benefit Mindset',
          frontSummary: 'Logical Fallacy',
          content: 'অধিকাংশ মানুষ "এনি-বেনিফিট" মাইন্ডসেটে ভোগেন: "ফেসবুকে কিছু খবর পাওয়া যায়, তাই এটি ব্যবহার করা উচিত।" কিন্তু তারা এর বিনিময়ে যে বিশাল ফোকাস এবং সময় নষ্ট হচ্ছে, তা হিসাব করেন না।',
          tags: ['Trap', 'Logic']
        },
        {
          id: 'dw-12',
          title: 'The Craftsman Approach',
          frontSummary: 'Tool Selection',
          content: 'একজন দক্ষ কারিগর যেমন তার কাজের মান বাড়ায় এমন যন্ত্রই শুধু ব্যবহার করেন, আপনাকেও তেমন হতে হবে। সূত্র: একটি টুল তখনই ব্যবহার করবেন যদি এর ইতিবাচক প্রভাব এর নেতিবাচক প্রভাবের চেয়ে অনেক গুণ বেশি হয়।',
          tags: ['Mindset', 'Tools']
        },
        {
          id: 'dw-24',
          title: 'Law of the Vital Few',
          frontSummary: '80/20 Rule',
          content: 'আপনার জীবনের ৮০% সাফল্য আসে ২০% কার্যক্রম থেকে। সোশ্যাল মিডিয়া কি সেই সেরা ২০% এর মধ্যে পড়ে? যদি না পড়ে, তবে তা বর্জন করা উচিত।',
          tags: ['Pareto', 'Efficiency']
        },
        {
          id: 'dw-25',
          title: '30-Day Experiment',
          frontSummary: 'Testing Necessity',
          content: '৩০ দিনের জন্য সোশ্যাল মিডিয়া বন্ধ রাখুন (একাউন্ট ডিলিট না করে)। ৩০ দিন পর নিজেকে প্রশ্ন করুন: ১. এই ৩০ দিন কি আমার জীবন অচল ছিল? ২. কেউ কি আমার অনুপস্থিতি লক্ষ্য করেছে? উত্তর "না" হলে, এটি ত্যাগ করুন।',
          tags: ['Experiment', 'Detox']
        },
        {
          id: 'dw-26',
          title: 'Don\'t Use Internet to Entertain',
          frontSummary: 'High Quality Leisure',
          content: 'বিনোদনের জন্য ইন্টারনেট ব্যবহার করবেন না। এর বদলে বই পড়ুন, এক্সারসাইজ করুন বা আড্ডা দিন। মানসম্মত বিনোদন আপনাকে রিচার্জ করে, আর ইন্টারনেট বিনোদন (রিলস দেখা) আপনাকে আরও ক্লান্ত করে।',
          tags: ['Leisure', 'Quality']
        }
      ]
    },
    {
      title: "Rule 4: Drain the Shallows",
      cards: [
        {
          id: 'dw-13',
          title: 'Schedule Every Minute',
          frontSummary: 'Time Blocking',
          content: 'দিনের শুরুতে একটি ব্লকে প্রতিটি মিনিটের জন্য কাজ বরাদ্দ করুন (Time Blocking)। এর মানে এই নয় যে প্ল্যান চেঞ্জ করা যাবে না, এর মানে হলো আপনি সবসময় জানবেন আপনি কী করছেন। এটি শ্যালো ওয়ার্ককে নির্দিষ্ট সীমায় বেঁধে রাখতে সাহায্য করে।',
          tags: ['Planning', 'Time']
        },
        {
          id: 'dw-14',
          title: 'The 4DX Framework',
          frontSummary: 'Execution Strategy',
          content: '১. Wildly Important Goal (WIG) বা মূল লক্ষ্যে ফোকাস করা। ২. Act on Lead Measures (ফলাফলের চেয়ে ডিপ ওয়ার্কের ঘণ্টায় ফোকাস করা)। ৩. Keep a Scoreboard (দৃশ্যমান স্কোরবোর্ড রাখা)। ৪. Create Accountability (সাপ্তাহিক রিভিউ)।',
          tags: ['Execution', 'Framework']
        },
        {
          id: 'dw-15',
          title: 'Shutdown Ritual',
          frontSummary: 'Countering Zeigarnik Effect',
          content: 'মনোবিজ্ঞানে "জাইগারনিক ইফেক্ট" অনুযায়ী, অসম্পূর্ণ কাজ আমাদের মনকে ব্যস্ত রাখে। দিন শেষে কাজের একটি পরিকল্পনা করে এবং "শাটডাউন কমপ্লিট" বাক্যটি উচ্চারণ করে মস্তিষ্ককে সংকেত দিন যে আজকের মতো কাজ শেষ। এটি ব্রেইনকে রিকভারির সুযোগ দেয়।',
          tags: ['Ritual', 'Sleep']
        },
        {
          id: 'dw-27',
          title: 'Fixed-Schedule Productivity',
          frontSummary: 'Artificial Limits',
          content: 'নিজেকে বলুন "আমি ৫:৩০ এর পর আর কাজ করব না"। এই কঠোর সময়সীমা আপনাকে দিনের বেলার সময়টুকু সর্বোচ্চ ব্যবহার করতে বাধ্য করবে এবং অপ্রয়োজনীয় কাজ বাদ দিতে শেখাবে।',
          tags: ['Productivity', 'Limits']
        },
        {
          id: 'dw-28',
          title: 'Sender Filter',
          frontSummary: 'Email Management',
          content: 'ইমেইল রিপ্লাই এমনভাবে দিন যাতে বারবার মেইল চালাচালি করতে না হয়।Sender-কে কাজ দিন। যেমন: "আমরা মঙ্গলবার ১০টায় অথবা বুধবার ২টায় কথা বলতে পারি। আপনার সুবিধা জানান।"',
          tags: ['Communication', 'Email']
        },
        {
          id: 'dw-29',
          title: 'Become Hard to Reach',
          frontSummary: 'Protecting Attention',
          content: 'সবাইকে সব সময় এক্সেস দেবেন না। আপনার সময় এবং মনোযোগ দামী। যারা আপনার সময়ের মূল্য বোঝে না, তাদের ইগনোর করা শিখুন।',
          tags: ['Boundaries', 'Value']
        },
        {
          id: 'dw-30',
          title: 'Process-Centric Approach',
          frontSummary: 'Closing Open Loops',
          content: 'ইমেইল বা মেসেজ পড়ার সাথে সাথে সিদ্ধান্ত নিন—এটি নিয়ে কী করতে হবে? এখনই রিপ্লাই, নাকি টাস্ক লিস্টে যোগ করা, নাকি ডিলিট। কোনো মেসেজ "পরে দেখব" বলে ফেলে রাখবেন না।',
          tags: ['Email', 'System']
        },
        {
          id: 'dw-33',
          title: 'Shallow Work Budget',
          frontSummary: '30-50% Rule',
          content: 'আপনার বস বা ক্লায়েন্টের সাথে কথা বলে ঠিক করুন আপনার মোট সময়ের কত শতাংশ শ্যালো ওয়ার্কের (মিটিং, ইমেইল) জন্য বরাদ্দ। এটি ৩০-৫০% এর বেশি হওয়া উচিত নয়।',
          tags: ['Budget', 'Management']
        }
      ]
    }
  ]
};