import { SectionData } from '../types';

export const atomicHabitsData: SectionData = {
  id: 'atomic-habits',
  title: 'Atomic Habits',
  description: 'James Clear-এর বেস্টসেলিং বইয়ের পূর্ণাঙ্গ বিশ্লেষণ। ব্যবহারিক মনোবিজ্ঞান এবং নিউরোসায়েন্সের আলোকে অভ্যাস গঠনের ব্লুপ্রিন্ট।',
  cards: [],
  groups: [
    {
      title: "The Fundamentals",
      cards: [
        {
          id: 'ah-1',
          title: 'The Compound Effect',
          frontSummary: '1% Better Every Day',
          content: 'গাণিতিক মডেল: প্রতিদিন নিজেকে মাত্র ১% উন্নত করলে, বছর শেষে আপনি ৩৭ গুণ বেশি শক্তিশালী হবেন ($1.01^{365} \\approx 37.78$)। বিপরীতভাবে, ১% অবনতি হলে তা শূন্যের কোঠায় নেমে আসে ($0.99^{365} \\approx 0.03$)। সাফল্য কোনো একক ঘটনা নয়, এটি প্রতিদিনের ছোট ছোট বিজয়ের চক্রবৃদ্ধি সুদ (Compound Interest)।',
          tags: ['Math', 'Growth']
        },
        {
          id: 'ah-2',
          title: 'Plateau of Latent Potential',
          frontSummary: 'The Valley of Disappointment',
          content: 'অভ্যাস গঠনের শুরুতে পরিশ্রমের তুলনায় ফলাফল দৃশ্যমান হয় না। এই স্তরকে "হতাশার উপত্যকা" বলে। বাঁশ গাছ ৫ বছর মাটির নিচে শিকড় গজায় এবং এরপর ৬ সপ্তাহে ৯০ ফুট বাড়ে। তেমনি, অভ্যাসের ফলাফলও একটি "ক্রিটিক্যাল থ্রেশহোল্ড" পার করার পর বিস্ফোরক আকারে দেখা দেয়। ধৈর্য হারাবেন না।',
          tags: ['Patience', 'Concept']
        },
        {
          id: 'ah-3',
          title: 'Goals vs Systems',
          frontSummary: 'Fix the Inputs, not Outputs',
          content: 'লক্ষ্য (Goal) হলো আপনি কী অর্জন করতে চান, আর সিস্টেম (System) হলো আপনি কীভাবে তা অর্জন করবেন। অলিম্পিকে সোনা জয়ী এবং পরাজিত—উভয়ের লক্ষ্যই সোনা জেতা। পার্থক্য গড়ে দেয় তাদের অনুশীলনের সিস্টেম। লক্ষ্য ক্ষণস্থায়ী পরিবর্তন আনে, কিন্তু সিস্টেম দীর্ঘমেয়াদী উন্নতি নিশ্চিত করে।',
          tags: ['System', 'Mindset']
        },
        {
          id: 'ah-4',
          title: 'Three Layers of Change',
          frontSummary: 'Identity-Based Habits',
          content: 'পরিবর্তন পেঁয়াজের মতো তিনটি স্তরে ঘটে: ১. ফলাফল (কী পান), ২. প্রক্রিয়া (কী করেন), ৩. পরিচয় (কী বিশ্বাস করেন)। দীর্ঘস্থায়ী পরিবর্তনের জন্য কেন্দ্র বা পরিচয় পরিবর্তন জরুরি। লক্ষ্য "বই পড়া" হওয়া উচিত নয়, লক্ষ্য হওয়া উচিত "পাঠক হওয়া"। কাজ তখন পরিচয়ের প্রমাণ (Evidence) হিসেবে কাজ করে।',
          tags: ['Identity', 'Psychology']
        },
        {
          id: 'ah-5',
          title: 'The Habit Loop',
          frontSummary: 'Cue, Craving, Response, Reward',
          content: '১৮৯৮ সালে এডওয়ার্ড থর্নডাইকের গবেষণা এবং চার্লস ডুহিগের বিশ্লেষণ অনুযায়ী, প্রতিটি অভ্যাস ৪টি ধাপে গঠিত: ১. ইঙ্গিত (Cue): মস্তিষ্ক পুরস্কারের সংকেত পায়। ২. আকাঙ্ক্ষা (Craving): চালিকাশক্তি। ৩. সাড়া (Response): মূল কাজটি করা। ৪. পুরস্কার (Reward): সন্তুষ্টি লাভ।',
          tags: ['Framework', 'Core']
        },
        {
          id: 'ah-21',
          title: 'Winners vs Losers',
          frontSummary: 'Survivorship Bias',
          content: 'আমরা কেবল বিজয়ীদের দেখি এবং ভাবি তাদের লক্ষ্যই তাদের জিতিয়েছে। কিন্তু পরাজিতদেরও একই লক্ষ্য ছিল। তাই লক্ষ্য সাফল্যের নির্ধারক নয়। সিস্টেমই আসল। আপনি আপনার লক্ষ্যের স্তরে উন্নীত হন না, আপনি আপনার সিস্টেমের স্তরে নেমে যান।',
          tags: ['Bias', 'Reality']
        },
        {
          id: 'ah-22',
          title: 'Atomic Habits Defined',
          frontSummary: 'Small and Mighty',
          content: 'অ্যাটমিক মানে ১. অতি ক্ষুদ্র অংশ, ২. অপরিমেয় শক্তির উৎস, ৩. বৃহত্তর ব্যবস্থার একক। অ্যাটমিক হ্যাবিট হলো এমন ক্ষুদ্র অভ্যাস যা একটি বিশাল সিস্টেমের অংশ। এটি কেবল ছোট নয়, এটি শক্তির উৎস।',
          tags: ['Definition', 'Power']
        },
        {
          id: 'ah-23',
          title: 'Problem Phase vs Solution Phase',
          frontSummary: 'Splitting the Loop',
          content: 'হ্যাবিট লুপের প্রথম দুই ধাপ (Cue, Craving) হলো সমস্যা পর্যায়—আপনি বুঝতে পারেন কিছু একটা পরিবর্তন দরকার। শেষ দুই ধাপ (Response, Reward) হলো সমাধান পর্যায়—আপনি পদক্ষেপ নেন এবং সন্তুষ্টি পান।',
          tags: ['Analysis', 'Loop']
        },
        {
          id: 'ah-36',
          title: 'Marginal Gains',
          frontSummary: 'British Cycling Success',
          content: '২০০৩ সালে ব্রিটিশ সাইক্লিং টিম প্রতিটি ছোট বিষয়ে (বালিশ, জেল, হাত ধোয়া) ১% উন্নতির নীতি গ্রহণ করে। ৫ বছরে তারা অলিম্পিকের ৬০% সোনা জেতে। একে "এগ্রিগেশন অফ মার্জিনাল গেইনস" বলে। জীবনের প্রতিটি ক্ষেত্রে এই নীতি প্রয়োগ করুন।',
          tags: ['Example', 'Success']
        }
      ]
    },
    {
      title: "Law 1: Make It Obvious (Cue)",
      cards: [
        {
          id: 'ah-6',
          title: 'Implementation Intention',
          frontSummary: 'Specific Planning Strategy',
          content: 'গবেষণায় দেখা গেছে, অস্পষ্ট লক্ষ্য কাজ করে না। সুনির্দিষ্ট সূত্র ব্যবহার করুন: "আমি [সময়]-এ [স্থান]-এ [কাজ] করব।" যেমন: "আমি সন্ধ্যা ৬টায় পড়ার টেবিলে ২০ মিনিট ইংরেজি পড়ব।" এটি মস্তিষ্কে একটি ট্রিগার সেট করে যা কাজ শুরু করার সম্ভাবনা ৯১% পর্যন্ত বাড়িয়ে দেয়।',
          tags: ['Planning', 'Strategy']
        },
        {
          id: 'ah-7',
          title: 'Habit Stacking',
          frontSummary: 'Anchoring to Current Habits',
          content: 'দিদেরো ইফেক্ট (Diderot Effect) বা সিন্যাপটিক প্রুনিং কাজে লাগান। সূত্র: "বর্তমান অভ্যাসের পর আমি [নতুন অভ্যাস] করব।" যেমন: "নামাজ পড়ার পর (বর্তমান), আমি ২ পৃষ্ঠা কুরআন পড়ব (নতুন)।" এটি মস্তিষ্কের বিদ্যমান শক্তিশালী নিউরাল পাথওয়ে ব্যবহার করে নতুন সংযোগ তৈরি করে।',
          tags: ['Strategy', 'Efficiency']
        },
        {
          id: 'ah-8',
          title: 'Environment Design',
          frontSummary: 'Architecture of Choice',
          content: 'ইচ্ছাশক্তি সীমিত সম্পদ। পরিবেশ এমনভাবে ডিজাইন করুন যেন ভালো অভ্যাসের ইঙ্গিতগুলো (Cues) চোখের সামনে থাকে। পানি খেতে চাইলে বোতল টেবিলের মাঝখানে রাখুন। গিটার বাজাতে চাইলে তা কেসের বাইরে রাখুন। আপনি আপনার পরিবেশের স্থপতি, ভুক্তভোগী নন।',
          tags: ['Environment', 'Cues']
        },
        {
          id: 'ah-24',
          title: 'The Scorecard',
          frontSummary: 'Habit Awareness',
          content: 'পরিবর্তনের প্রথম ধাপ হলো সচেতনতা। জাপানি রেলওয়ে "পয়েন্টিং এন্ড কলিং" পদ্ধতি ব্যবহার করে ভুল কমায়। আপনিও আপনার সারাদিনের অভ্যাসের একটি তালিকা করুন এবং পাশে (+), (-) বা (=) চিহ্ন দিন। এটি আপনাকে আপনার বর্তমান অবস্থা সম্পর্কে সচেতন করবে।',
          tags: ['Audit', 'Awareness']
        },
        {
          id: 'ah-25',
          title: 'Inversion of Law 1',
          frontSummary: 'Make It Invisible',
          content: 'খারাপ অভ্যাস ভাঙার সেরা উপায় হলো তার ইঙ্গিত (Cue) অদৃশ্য করা। ফোন অন্য ঘরে রাখুন। জাঙ্ক ফুড কিনবেন না। টিভির রিমোট ব্যাটারি খুলে রাখুন। "চোখের আড়াল মানে মনের আড়াল"—এটি অভ্যাসের ক্ষেত্রে অত্যন্ত সত্য।',
          tags: ['Breaking Bad', 'Strategy']
        },
        {
          id: 'ah-37',
          title: 'Context is the Cue',
          frontSummary: 'Location Association',
          content: 'অভ্যাস কেবল একটি বস্তুর সাথে নয়, পুরো পরিস্থিতির সাথে যুক্ত হয়। পড়ার জন্য একটি নির্দিষ্ট চেয়ার বা টেবিল ঠিক করুন যেখানে আপনি অন্য কিছু (ফোন টেপা, খাওয়া) করবেন না। মস্তিষ্ক ওই স্থানে গেলেই "পড়ার মোডে" চলে যাবে।',
          tags: ['Context', 'Focus']
        }
      ]
    },
    {
      title: "Law 2: Make It Attractive (Craving)",
      cards: [
        {
          id: 'ah-9',
          title: 'Supernormal Stimuli',
          frontSummary: 'Dopamine-Driven Loops',
          content: 'জাঙ্ক ফুড বা সোশ্যাল মিডিয়া হলো "সুপারনরমাল স্টিমুলি"—যা মস্তিষ্কের পুরস্কার কেন্দ্রকে অতি-উত্তেজিত করে। ভালো কাজকে আকর্ষণীয় করতে "টেম্পটেশন বান্ডলিং" ব্যবহার করুন: কোনো পছন্দের কাজের সাথে প্রয়োজনীয় কাজকে যুক্ত করা। (যেমন: ট্রেডমিলে হাঁটার সময় পডকাস্ট শোনা)।',
          tags: ['Dopamine', 'Biology']
        },
        {
          id: 'ah-10',
          title: 'Role of Family & Friends',
          frontSummary: 'Social Norms',
          content: 'মানুষ সামাজিকভাবে অনুকরণপ্রিয়। আমরা ৩টি গোষ্ঠীকে অনুকরণ করি: ১. ঘনিষ্ঠজন (পরিবার/বন্ধু), ২. বহুজন (সমাজ), ৩. ক্ষমতাবান (যাদের মতো হতে চাই)। এমন গ্রুপে যোগ দিন যেখানে আপনার কাঙ্ক্ষিত কঠিন অভ্যাসটিই স্বাভাবিক আচরণ।',
          tags: ['Social', 'Influence']
        },
        {
          id: 'ah-26',
          title: 'Dopamine Prediction',
          frontSummary: 'Anticipation is Key',
          content: 'মস্তিষ্ক পুরস্কার পাওয়ার চেয়ে পুরস্কারের আশায় বেশি ডোপামিন ক্ষরণ করে। তাই অভ্যাস গঠনের জন্য "আকাঙ্ক্ষা" তৈরি করা জরুরি। কোনো কাজ করার আগে ভাবুন কাজটি শেষ করলে আপনি কতটা ভালো অনুভব করবেন।',
          tags: ['Neuroscience', 'Mindset']
        },
        {
          id: 'ah-27',
          title: 'Reprogramming Your Brain',
          frontSummary: 'Have to vs Get to',
          content: '"আমাকে পড়তে হবে" না বলে বলুন "আমি পড়ার সুযোগ পাচ্ছি"। নেতিবাচক অনুভূতিকে ইতিবাচক সুযোগে রূপান্তর করুন। ভোরবেলা ওঠাকে কষ্ট না ভেবে নিজের জন্য একান্ত সময় হিসেবে দেখুন।',
          tags: ['Psychology', 'Reframing']
        },
        {
          id: 'ah-28',
          title: 'Inversion of Law 2',
          frontSummary: 'Make It Unattractive',
          content: 'খারাপ অভ্যাসকে অনাকর্ষণীয় করুন। ধূমপানের প্রতিটি টানের সাথে ফুসফুসের ক্ষতির ছবি কল্পনা করুন। সোশ্যাল মিডিয়া ব্যবহারের পর কতটা সময় নষ্ট হলো তা হিসাব করুন। নেতিবাচক দিকগুলো হাইলাইট করুন।',
          tags: ['Breaking Bad', 'Mindset']
        }
      ]
    },
    {
      title: "Law 3: Make It Easy (Response)",
      cards: [
        {
          id: 'ah-11',
          title: 'Law of Least Effort',
          frontSummary: 'Reducing Friction',
          content: 'মানব মস্তিষ্ক প্রাকৃতিকভাবে শক্তি সংরক্ষণ করতে চায়। তাই ভালো অভ্যাসের পথে বাধা বা "ফ্রিকশন" কমান (যেমন: জিমের কাপড় রাতেই বের করে রাখা) এবং খারাপ অভ্যাসের পথে বাধা বাড়ান (যেমন: সোশ্যাল মিডিয়া অ্যাপ ডিলিট করা)।',
          tags: ['Action', 'Ease']
        },
        {
          id: 'ah-12',
          title: 'The 2-Minute Rule',
          frontSummary: 'Mastering the Show Up',
          content: 'যেকোনো নতুন অভ্যাস ২ মিনিটের বেশি হওয়া উচিত নয়। "বই পড়া"র লক্ষ্য হোক "১ পৃষ্ঠা পড়া"। নিউটনের গতির সূত্র অনুযায়ী, স্থবিরতা কাটানোই সবচেয়ে কঠিন। একবার শুরু করলে (Show up), মোমেন্টামের কারণে বাকিটা সহজ হয়ে যায়।',
          tags: ['Start', 'Technique']
        },
        {
          id: 'ah-29',
          title: 'Decisive Moments',
          frontSummary: 'Fork in the Road',
          content: 'প্রতিদিন আমাদের সামনে কিছু মুহূর্ত আসে যা পুরো দিনের গতিপথ ঠিক করে দেয়। যেমন: অফিস থেকে ফিরে সোফায় বসা নাকি জিমের কাপড় পরা। এই "ডিসিসিভ মোমেন্ট" গুলো নিয়ন্ত্রণ করাই আসল কাজ।',
          tags: ['Decision', 'Time']
        },
        {
          id: 'ah-30',
          title: 'Automating Habits',
          frontSummary: 'Technology as Ally',
          content: 'ওয়ান-টাইম অ্যাকশন বা প্রযুক্তি ব্যবহার করে ভবিষ্যতের ভালো অভ্যাস নিশ্চিত করুন। যেমন: অটোমেটিক সেভিংস চালু করা, বড় প্লেট ফেলে ছোট প্লেট কেনা, নোটিফিকেশন পার্মানেন্টলি অফ করা।',
          tags: ['Technology', 'System']
        },
        {
          id: 'ah-31',
          title: 'Inversion of Law 3',
          frontSummary: 'Make It Difficult',
          content: 'খারাপ অভ্যাসের জন্য "কমিটমেন্ট ডিভাইস" ব্যবহার করুন। ভিক্টর হুগো তার কাজের সময় সব কাপড় লুকিয়ে রাখতেন যাতে বাইরে যেতে না পারেন। আপনিও এমন ব্যবস্থা নিন যাতে খারাপ অভ্যাস করা অসম্ভব হয়ে পড়ে।',
          tags: ['Breaking Bad', 'Force']
        },
        {
          id: 'ah-38',
          title: 'Prime the Environment',
          frontSummary: 'Ready to Go',
          content: 'কাজ শেষ করার পর এমনভাবে গুছিয়ে রাখুন যাতে পরের বার কাজ শুরু করা সহজ হয়। পড়ার পর বই খোলা রাখুন। খাওয়ার পর প্লেট ধুয়ে রাখুন।',
          tags: ['Environment', 'Prep']
        }
      ]
    },
    {
      title: "Law 4: Make It Satisfying (Reward)",
      cards: [
        {
          id: 'ah-13',
          title: 'Immediate Reward',
          frontSummary: 'Positive Reinforcement',
          content: 'মানুষ "তাৎক্ষণিক প্রতিদান পরিবেশ"-এ বিবর্তিত হয়েছে। ভালো কাজের পর নিজেকে ছোট কোনো আনন্দ দিন। এটি আচরণটিকে মস্তিষ্কে "সন্তোষজনক" হিসেবে মার্ক করে এবং ভবিষ্যতে পুনরায় করতে উৎসাহিত করে।',
          tags: ['Reward', 'Reinforcement']
        },
        {
          id: 'ah-14',
          title: 'Habit Tracking',
          frontSummary: 'Don\'t Break the Chain',
          content: 'ক্যালেন্ডারে ক্রস দেওয়া বা ট্র্যাকার ব্যবহার করা ৩টি কাজ করে: ১. এটি মনে করিয়ে দেয় (Cue), ২. অগ্রগতি দেখে ভালো লাগে (Attractive), ৩. ক্রস দেওয়াটা সন্তোষজনক (Satisfying)। ভিজ্যুয়াল প্রগ্রেস মোটিভেশন ধরে রাখে।',
          tags: ['Tracking', 'Visual']
        },
        {
          id: 'ah-32',
          title: 'Never Miss Twice',
          frontSummary: 'Recovery Rule',
          content: 'একবার অভ্যাস মিস হতেই পারে, কিন্তু পরপর দুইবার মিস করা মানে নতুন (খারাপ) অভ্যাস শুরু করা। একদিন জিম মিস হলে পরের দিন অবশ্যই যান। "অল অর নাথিং" মানসিকতা ত্যাগ করুন।',
          tags: ['Consistency', 'Rule']
        },
        {
          id: 'ah-33',
          title: 'Accountability Partner',
          frontSummary: 'Social Cost',
          content: 'কাউকে কথা দিলে বা ব্যর্থতার জন্য জরিমানা থাকলে আমরা কাজ করতে বাধ্য হই। একজন পার্টনার রাখুন যে আপনাকে নজরে রাখবে। যেমন: জিম মিস করলে পার্টনারকে ৫০০ টাকা জরিমানা দেওয়া।',
          tags: ['Social', 'Contract']
        },
        {
          id: 'ah-34',
          title: 'Inversion of Law 4',
          frontSummary: 'Make It Unsatisfying',
          content: 'খারাপ অভ্যাসের ফলাফল তাৎক্ষণিক ও বেদনাদায়ক করুন। আমরা সেই কাজই এড়িয়ে চলি যার ফলাফল সাথে সাথে খারাপ হয়। জরিমানার ব্যবস্থা বা পাবলিকলি লজ্জা পাওয়ার ভয় খারাপ অভ্যাস ভাঙতে সাহায্য করে।',
          tags: ['Breaking Bad', 'Pain']
        },
        {
          id: 'ah-39',
          title: 'Identity Evidence',
          frontSummary: 'Self-Trust',
          content: 'প্রতিটি সফল অভ্যাস পালন আপনার নিজের প্রতি বিশ্বাস বাড়ায়। "আমি যা বলি তা আমি করি"—এই বিশ্বাস তৈরি হলে আপনি বড় লক্ষ্য অর্জন করতে পারবেন।',
          tags: ['Identity', 'Trust']
        }
      ]
    },
    {
      title: "Advanced Tactics",
      cards: [
        {
          id: 'ah-15',
          title: 'The Goldilocks Rule',
          frontSummary: 'Reaching Flow State',
          content: 'মানুষ তখনই সর্বোচ্চ মোটিভেশন পায় যখন কাজটি তার সক্ষমতার সীমানায় থাকে—খুব সহজও নয় (বোরিং), খুব কঠিনও নয় (হতাশাজনক)। বর্তমান সক্ষমতার প্রায় ৪% চ্যালেঞ্জিং কাজ মস্তিষ্কে "ফ্লো স্টেট" তৈরি করে।',
          tags: ['Flow', 'Performance']
        },
        {
          id: 'ah-16',
          title: 'The Downside of Habits',
          frontSummary: 'Mastery vs Autopilot',
          content: 'অভ্যাস যখন স্বয়ংক্রিয় হয়ে যায়, তখন আমরা ফিডব্যাক নেওয়া বন্ধ করি এবং ছোট ছোট ভুল করতে থাকি। মাস্টারি অর্জনের সূত্র হলো: অভ্যাস + সজ্ঞান অনুশীলন (Deliberate Practice) = মাস্টারি।',
          tags: ['Growth', 'Warning']
        },
        {
          id: 'ah-35',
          title: 'Identity Sculpting',
          frontSummary: 'Continuous Evolution',
          content: 'কোনো একটি পরিচয়ে আটকে থাকবেন না ("আমি খারাপ ছাত্র")। পরিচয় হতে হবে নমনীয়। "আমি এমন একজন যে প্রতিনিয়ত শেখে"। জীবন মানেই প্রতিনিয়ত নিজের পরিচয়কে ঘষামাজা করে উন্নত করা।',
          tags: ['Philosophy', 'Life']
        },
        {
          id: 'ah-40',
          title: 'Review and Reflection',
          frontSummary: 'Fine Tuning',
          content: 'বছরে একবার বা মাসে একবার নিজের অভ্যাসগুলো রিভিউ করুন। "আমি কি এখনও সঠিক পথে আছি?" "কোন অভ্যাসটি আমাকে আর সাহায্য করছে না?" অপ্রয়োজনীয় অভ্যাস বাদ দেওয়াও জরুরি।',
          tags: ['Review', 'Audit']
        }
      ]
    }
  ]
};