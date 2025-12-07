import { SectionData, Tab } from './types';

export const APP_DATA: Record<Tab, SectionData> = {
  [Tab.HOME]: {
    id: 'home',
    title: 'Unified Knowledge Synthesis',
    description: 'A Life-Operating System synthesized from Neuroscience, Stoicism, and Behavioral Psychology.',
    cards: []
  },
  [Tab.LIFE_PROTOCOL]: {
    id: 'life-protocol',
    title: 'The 12 Guiding Laws',
    description: 'The core axiomatic truths for a high-performance life, synthesized from the provided Life Protocol image.',
    cards: [
      {
        id: 'lp-1',
        title: '1. The Law of Bio-Rhythm',
        frontSummary: 'Align with Nature & Faith',
        content: 'Work must be arranged according to the biological clock (Circadian Rhythm) and the religious clock (Prayer Times). The day begins at 4 AM. Peak cognitive tasks should align with high cortisol/alertness windows (morning), and recovery should align with natural dips (afternoon).',
        tags: ['Biology', 'Timing']
      },
      {
        id: 'lp-2',
        title: '2. The Law of Essentialism',
        frontSummary: 'Ruthless Elimination',
        content: 'If a task does not help achieve the ultimate Goal, it must be ruthlessly rejected. Reduce shallow work to create space for Deep Work. "Less but better" is the mantra. Focus on the vital few, ignore the trivial many.',
        tags: ['Focus', 'Minimalism']
      },
      {
        id: 'lp-3',
        title: '3. The Law of 1% Compounding',
        frontSummary: 'Small Steps, Massive Gains',
        content: 'Revolution does not happen in a day. Take small, perfect steps every day. Improving by 1% daily results in a 37x improvement in a year (1.01^365 ≈ 37.78). Consistency beats intensity.',
        tags: ['Growth', 'Math']
      },
      {
        id: 'lp-4',
        title: '4. The Law of Dopamine Control',
        frontSummary: 'Earn Your Dopamine',
        content: 'No cheap entertainment (Social Media, Sugar, Games) is allowed until the hard work is finished. Reset reward sensitivity by delaying gratification. Do not spike dopamine before effort.',
        tags: ['Neuroscience', 'Self-Control']
      },
      {
        id: 'lp-5',
        title: '5. The Law of Inner Citadel',
        frontSummary: 'Invulnerable Peace',
        content: 'External chaos, failure, or the behavior of others should not destroy your internal peace. Build a mental fortress (Inner Citadel) that external events cannot breach. Your reasoned choice (Prohairesis) is the only thing truly yours.',
        tags: ['Stoicism', 'Resilience']
      },
      {
        id: 'lp-6',
        title: '6. The Law of Deep Work',
        frontSummary: 'Intensity x Time',
        content: 'The best time of the day (4-6 hours) must be spent in Deep Focus without distraction. This is where value is created, skills are mastered, and myelination occurs. Shallow work does not build a legacy.',
        tags: ['Productivity', 'Skill']
      },
      {
        id: 'lp-7',
        title: '7. The Law of Active Recovery',
        frontSummary: 'True Rest vs Stimulation',
        content: 'Rest means Sleep, Naps (Qailulah), Prayer, or Walking. Social Media is NOT rest; it is sensory overload and "Attention Residue" accumulation. True recovery restores energy, it does not drain it.',
        tags: ['Health', 'Recovery']
      },
      {
        id: 'lp-8',
        title: '8. The Law of Identity',
        frontSummary: 'Be, Don\'t Just Try',
        content: 'Do not say "I am trying to read". Say "I am a reader". Shift from outcome-based goals to identity-based habits. Your habits are the votes you cast for the person you want to become.',
        tags: ['Psychology', 'Identity']
      },
      {
        id: 'lp-9',
        title: '9. The Law of Amor Fati',
        frontSummary: 'Love Your Fate',
        content: 'See every obstacle as an opportunity for testing patience and virtue. Do not just bear it; love it. The impediment to action advances action. What stands in the way becomes the way.',
        tags: ['Stoicism', 'Mindset']
      },
      {
        id: 'lp-10',
        title: '10. The Law of Friction',
        frontSummary: 'Design the Path',
        content: 'Create friction for bad habits (e.g., hide the phone, unplug TV) and smooth the path for good habits (e.g., book on the table, gym clothes ready). Be the architect of your environment, not the victim.',
        tags: ['Environment', 'Habits']
      },
      {
        id: 'lp-11',
        title: '11. The Law of Mammalian Reflex',
        frontSummary: 'Physiological Hack',
        content: 'Use cold water (Wudu/Face wash) to reduce stress and increase focus via the Mammalian Dive Reflex. It stimulates the Vagus nerve, lowers heart rate, and calms the nervous system immediately.',
        tags: ['Biology', 'Hacking']
      },
      {
        id: 'lp-12',
        title: '12. The Law of Memento Mori',
        frontSummary: 'Urgency of Life',
        content: 'Time is limited and death is certain. Therefore, every moment must be used for Worship (Ibadah) or Deep Work. Do not waste the gift of life on trivialities. You could leave life right now.',
        tags: ['Philosophy', 'Time']
      }
    ]
  },
  [Tab.ATOMIC_HABITS]: {
    id: 'atomic-habits',
    title: 'Atomic Habits',
    description: 'The comprehensive guide to behavioral change, synthesizing the "Atomic Habits" book analysis.',
    cards: [
      {
        id: 'ah-1',
        title: 'The Compound Effect',
        frontSummary: '1% Better Every Day',
        content: 'Improving by 1% daily leads to a 37x improvement over a year (1.01^365). Conversely, a 1% decline leads to near zero. Success is the lagging measure of habits. The "Valley of Disappointment" is the period where results are not yet visible, but the work is compounding.',
        tags: ['Math', 'Growth']
      },
      {
        id: 'ah-2',
        title: 'Identity vs Outcomes',
        frontSummary: 'The Onion of Change',
        content: 'Three layers of change: Outcomes (what you get), Process (what you do), Identity (what you believe). True behavior change is identity change. The goal is not to read a book, the goal is to become a reader.',
        tags: ['Identity', 'Psychology']
      },
      {
        id: 'ah-3',
        title: 'The Habit Loop',
        frontSummary: 'The 4-Step Framework',
        content: '1. **Cue**: The trigger (Time, Location). \n2. **Craving**: The motivation/desire. \n3. **Response**: The action/habit. \n4. **Reward**: The satisfaction.\nThis loop governs all automatic behaviors. To build habits, optimize these 4 steps.',
        tags: ['Framework', 'Loop']
      },
      {
        id: 'ah-4',
        title: 'Law 1: Make It Obvious',
        frontSummary: 'Cues & Awareness',
        content: '**Implementation Intention**: "I will [BEHAVIOR] at [TIME] in [LOCATION]." \n**Habit Stacking**: "After [CURRENT HABIT], I will [NEW HABIT]." \n**Environment Design**: Place cues in your visual field.',
        tags: ['Strategy', 'Cues']
      },
      {
        id: 'ah-5',
        title: 'Law 2: Make It Attractive',
        frontSummary: 'Cravings & Dopamine',
        content: '**Temptation Bundling**: Pair an action you *want* to do with an action you *need* to do. \n**Group Influence**: Join a culture where your desired behavior is the normal behavior. \n**Reframing**: Highlight the benefits of the hard habit.',
        tags: ['Dopamine', 'Motivation']
      },
      {
        id: 'ah-6',
        title: 'Law 3: Make It Easy',
        frontSummary: 'Friction & The 2-Minute Rule',
        content: '**Reduce Friction**: Decrease the number of steps between you and the good habit. \n**2-Minute Rule**: When starting a new habit, it should take less than 2 minutes to do. Optimize for the "start". \n**Master the Entry Point**: Showing up is the first victory.',
        tags: ['Action', 'Friction']
      },
      {
        id: 'ah-7',
        title: 'Law 4: Make It Satisfying',
        frontSummary: 'Rewards & Tracking',
        content: '**Immediate Reward**: Give yourself a small immediate pleasure after the habit. \n**Habit Tracker**: "Don\'t Break the Chain". Visual proof of progress is satisfying. \n**Accountability Partner**: Make the cost of failure public and painful.',
        tags: ['Reward', 'Tracking']
      },
      {
        id: 'ah-8',
        title: 'Advanced: Goldilocks Rule',
        frontSummary: 'Flow State',
        content: 'Humans experience peak motivation when working on tasks that are right on the edge of their current abilities. Not too hard, not too easy. Roughly 4% beyond current capacity.',
        tags: ['Mastery', 'Flow']
      }
    ]
  },
  [Tab.DEEP_WORK]: {
    id: 'deep-work',
    title: 'Deep Work',
    description: 'Mastering focused success in a distracted world. Analysis of Cal Newport\'s thesis.',
    cards: [
      {
        id: 'dw-1',
        title: 'Deep Work Defined',
        frontSummary: 'The Superpower of the 21st Century',
        content: 'Professional activities performed in a state of distraction-free concentration that push your cognitive capabilities to their limit. These efforts create new value, improve your skill, and are hard to replicate.',
        tags: ['Definition', 'Value']
      },
      {
        id: 'dw-2',
        title: 'The Neuroscience: Myelination',
        frontSummary: 'Wiring the Brain',
        content: 'Deep focus fires specific neural circuits repeatedly. Oligodendrocytes wrap these circuits in Myelin (white matter), making signal transmission faster and preventing energy leak. Distraction prevents this myelination process.',
        tags: ['Neuroscience', 'Biology']
      },
      {
        id: 'dw-3',
        title: 'Attention Residue',
        frontSummary: 'The Cost of Switching',
        content: 'When switching from Task A to Task B, attention doesn\'t immediately follow. A "residue" remains on Task A. Checking emails creates residue that lowers IQ for the next task. It takes ~23 minutes to refocus fully.',
        tags: ['Psychology', 'Focus']
      },
      {
        id: 'dw-4',
        title: 'Rule 1: Work Deeply',
        frontSummary: 'Scheduling Philosophies',
        content: '1. **Monastic**: Complete isolation (Monk mode). \n2. **Bimodal**: Split weeks/months between deep work and life. \n3. **Rhythmic**: Fixed daily time blocks (e.g., 5am-8am). Best for students/workers. \n4. **Journalistic**: Ad-hoc deep work whenever possible (Difficult).',
        tags: ['Strategy', 'Planning']
      },
      {
        id: 'dw-5',
        title: 'Rule 2: Embrace Boredom',
        frontSummary: 'Train the Focus Muscle',
        content: 'The ability to concentrate is a muscle. If you switch to phone/entertainment the moment you feel bored, you atrophy this muscle. You must practice being bored to withstand the strain of deep work.',
        tags: ['Discipline', 'Training']
      },
      {
        id: 'dw-6',
        title: 'Rule 3: Quit Social Media',
        frontSummary: 'The Any-Benefit Mindset Trap',
        content: 'Don\'t use a tool just because it has *some* benefit. Use the "Craftsman Approach": Use a tool only if its positive impacts substantially outweigh the negatives. Social media often fails this test.',
        tags: ['Digital Minimalization']
      },
      {
        id: 'dw-7',
        title: 'Rule 4: Drain the Shallows',
        frontSummary: 'Schedule Every Minute',
        content: 'Shallow work (logistics, email) expands to fill available time. Schedule every minute of your day in blocks. Quantify the depth of every activity. Cap shallow work to <50% of your day.',
        tags: ['Management', 'Time']
      },
      {
        id: 'dw-8',
        title: 'The 4DX Framework',
        frontSummary: 'Execution Strategy',
        content: '1. Focus on the Wildly Important Goal (WIG). \n2. Act on Lead Measures (Hours of Deep Work) vs Lag Measures (Results). \n3. Keep a Compelling Scoreboard. \n4. Create a Cadence of Accountability (Weekly Review).',
        tags: ['Execution', 'System']
      },
      {
        id: 'dw-9',
        title: 'Shutdown Ritual',
        frontSummary: 'Countering Zeigarnik Effect',
        content: 'Incomplete tasks stay in the mind (Zeigarnik Effect). To rest, you must convince your brain that tasks are accounted for. End the day with a formal plan for tomorrow and a phrase like "Shutdown Complete".',
        tags: ['Recovery', 'Ritual']
      }
    ]
  },
  [Tab.DOPAMINE_DETOX]: {
    id: 'dopamine-detox',
    title: 'Dopamine Detox',
    description: 'Behavioral Psychology & Neuroscience analysis of Thibaut Meurisse\'s work.',
    cards: [
      {
        id: 'dd-1',
        title: 'Dopamine Misconception',
        frontSummary: 'Wanting vs Liking',
        content: 'Dopamine is the molecule of **Anticipation** (Wanting), not Satisfaction (Liking). It drives you to seek, but doesn\'t guarantee pleasure. Social media hijacks this "seeking" system without providing the "liking" reward.',
        tags: ['Neuroscience', 'Mechanism']
      },
      {
        id: 'dd-2',
        title: 'Reward Prediction Error',
        frontSummary: 'The Gambling Mechanism',
        content: 'Dopamine spikes highest when rewards are unpredictable (Variable Reward Schedule). Notifications are like slot machines—you don\'t know what you\'ll get, so you keep checking. This creates a hyper-vigilant, anxious brain.',
        tags: ['Psychology', 'Addiction']
      },
      {
        id: 'dd-3',
        title: 'Stimulation Gap',
        frontSummary: 'Relative Boredom',
        content: 'High-stimulation activities (TikTok, Games) raise your "boredom threshold". Normal tasks (Reading, Working) fall into the "Stimulation Gap"—they feel painfully boring by comparison. Detox lowers the threshold.',
        tags: ['Concept', 'Focus']
      },
      {
        id: 'dd-4',
        title: 'Detox Protocols',
        frontSummary: '48h, 24h, & Partial',
        content: '**48-Hour Reset**: No phone, internet, music, or junk food. Only water, walking, journaling. Hard reboot. \n**24-Hour**: One day a week (Digital Sabbath). \n**Partial**: Daily "No-Screen Zones" (e.g., first and last hour of the day).',
        tags: ['Protocol', 'Action']
      },
      {
        id: 'dd-5',
        title: 'Molecule of More vs Here & Now',
        frontSummary: 'Balancing Chemicals',
        content: 'Dopamine is "More" (Future-oriented). Serotonin, Oxytocin, and Endorphins are "Here & Now" (Present-oriented). To feel happy, you must switch from dopamine-chasing to "Here & Now" activities (Gratitude, Physical touch, Mindfulness).',
        tags: ['Chemistry', 'Happiness']
      },
      {
        id: 'dd-6',
        title: 'The 4 Tricks of the Mind',
        frontSummary: 'Self-Deception',
        content: '1. "I can switch back easily" (False). \n2. "I\'ll do it later" (Hyperbolic Discounting). \n3. "Excitement is fulfillment" (False). \n4. "Fear of Missing Out" (Scarcity mindset). Recognize these lies.',
        tags: ['Psychology', 'Mindset']
      }
    ]
  },
  [Tab.DAILY_STOIC]: {
    id: 'daily-stoic',
    title: 'The Daily Stoic',
    description: 'Modern existentialism and psychological framework based on Ryan Holiday\'s analysis.',
    cards: [
      {
        id: 'ds-1',
        title: 'Dichotomy of Control',
        frontSummary: 'Internal vs External',
        content: 'The core of Stoicism. Separate things into: \n1. Up to us (Opinion, Aim, Desire, Aversion). \n2. Not up to us (Body, Property, Reputation). \nFocus ONLY on the first. Ignoring the second eliminates anxiety.',
        tags: ['Core', 'Control']
      },
      {
        id: 'ds-2',
        title: 'Pathology of Passions',
        frontSummary: 'Emotional Regulation',
        content: 'Negative emotions (Anger, Fear, Envy) are errors in judgment ("Pathe"). Positive emotions (Joy, Caution, Wish) come from reason ("Eupatheia"). Anger is a self-inflicted injury; it does more harm than the insult itself.',
        tags: ['Emotion', 'Psychology']
      },
      {
        id: 'ds-3',
        title: 'Amor Fati',
        frontSummary: 'Love Your Fate',
        content: 'Do not merely bear what happens; love it. Treat every event as necessary material for your own growth. "The fire turns everything that falls into it into flame and brightness."',
        tags: ['Mindset', 'Acceptance']
      },
      {
        id: 'ds-4',
        title: 'Premeditatio Malorum',
        frontSummary: 'Negative Visualization',
        content: 'Rehearse worst-case scenarios daily. "I will meet ungrateful, violent, treacherous people." When it happens, you are prepared, and your inner citadel remains unshaken. It removes the shock of misfortune.',
        tags: ['Technique', 'Preparation']
      },
      {
        id: 'ds-5',
        title: 'Memento Mori',
        frontSummary: 'Remember Death',
        content: '"You could leave life right now. Let that determine what you do and say and think." Death is not a depressant but a stimulant. It creates urgency and clarity. Don\'t waste time on trivialities.',
        tags: ['Philosophy', 'Urgency']
      },
      {
        id: 'ds-6',
        title: 'The View from Above',
        frontSummary: 'Cosmic Perspective',
        content: 'Zoom out and see your life from the perspective of the universe or history. Your problems are insignificant; your time is short. This crushes the ego and restores rational judgment.',
        tags: ['Perspective', 'Ego']
      },
      {
        id: 'ds-7',
        title: 'Sympatheia',
        frontSummary: 'Interconnectedness',
        content: 'We are made for cooperation, like feet, like hands, like rows of teeth. To act against one another is contrary to nature. Helping others is helping yourself.',
        tags: ['Community', 'Ethics']
      }
    ]
  },
  [Tab.DEEP_FOCUS_PROTOCOL]: {
    id: 'deep-focus',
    title: 'Deep Focus Protocol',
    description: 'Cognitive optimization contextualized for high-friction environments (e.g., Bangladesh).',
    cards: [
      {
        id: 'df-1',
        title: 'Active Recall',
        frontSummary: 'Testing vs Reviewing',
        content: 'Stop passive reading. Close the book and ask "What did I just read?". Struggling to retrieve information strengthens the neural pathway (synaptic plasticity) far more than re-reading.',
        tags: ['Study', 'Technique']
      },
      {
        id: 'df-2',
        title: 'Spaced Repetition (SRS)',
        frontSummary: 'Beating the Forgetting Curve',
        content: 'Information decays rapidly. Review at specific intervals: 1 day, 3 days, 1 week, 1 month. This moves info from short-term to long-term memory. Use Anki or Flashcards.',
        tags: ['Memory', 'System']
      },
      {
        id: 'df-3',
        title: 'Ultradian Rhythms',
        frontSummary: '90-Minute Cycles',
        content: 'The brain can maintain peak focus for 90-120 minutes before needing a break (Basic Rest-Activity Cycle). Align Deep Work blocks with these rhythms. Push through the first 15 mins of "Sleep Inertia".',
        tags: ['Bio-Rhythm', 'Timing']
      },
      {
        id: 'df-4',
        title: 'Mammalian Dive Reflex',
        frontSummary: 'The Wudu Hack',
        content: 'Splashing cold water on the face (part of Wudu) stimulates the Trigeminal and Vagus nerves. This lowers heart rate and reduces anxiety immediately. A biological reset button for stress.',
        tags: ['Physiology', 'Hack']
      },
      {
        id: 'df-5',
        title: 'Qailulah (Power Nap)',
        frontSummary: 'The Midday Reset',
        content: 'A 15-20 minute nap post-Zuhr (noon) clears adenosine build-up in the brain. Do not exceed 30 mins to avoid "Sleep Inertia". NASA studies show it boosts alertness by 34%.',
        tags: ['Recovery', 'Energy']
      },
      {
        id: 'df-6',
        title: 'Tahajjud Window',
        frontSummary: 'The Golden Hour',
        content: '4 AM to Fajr. Cortisol Awakening Response (CAR) is rising, distractions are zero, and the brain is in Alpha/Theta waves. The absolute peak time for complex cognitive tasks or rote memorization.',
        tags: ['Timing', 'Spiritual']
      },
      {
        id: 'df-7',
        title: 'Auditory Gating',
        frontSummary: 'Managing Noise',
        content: 'In noisy environments (dhaka traffic, family), use Brown Noise or White Noise. It masks sudden sound spikes that trigger the "Startle Response", allowing the brain to maintain focus.',
        tags: ['Environment', 'Focus']
      },
      {
        id: 'df-8',
        title: 'Nutritional Psychiatry',
        frontSummary: 'Low GI & Hydration',
        content: 'Avoid the "Rice Coma" (Sugar Crash). High Glycemic Index foods cause insulin spikes and subsequent energy crashes. Eat protein and fiber at lunch. Even 2% dehydration drops cognitive function significantly.',
        tags: ['Diet', 'Energy']
      }
    ]
  },
  [Tab.MASTER_GUIDE]: {
    id: 'master-guide',
    title: 'Master Study Guide',
    description: 'The synthesis of all protocols into an actionable daily routine.',
    cards: []
  }
};
