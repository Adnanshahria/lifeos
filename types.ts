export interface CardData {
  id: string;
  title: string;
  frontSummary: string;
  content: string; // Markdown-like or plain text
  icon?: string;
  tags?: string[];
}

export interface SectionData {
  id: string;
  title: string;
  description: string;
  cards: CardData[];
}

export enum Tab {
  HOME = 'HOME',
  ATOMIC_HABITS = 'ATOMIC_HABITS',
  DEEP_WORK = 'DEEP_WORK',
  DOPAMINE_DETOX = 'DOPAMINE_DETOX',
  DAILY_STOIC = 'DAILY_STOIC',
  DEEP_FOCUS_PROTOCOL = 'DEEP_FOCUS_PROTOCOL',
  LIFE_PROTOCOL = 'LIFE_PROTOCOL', // The 12 Laws
  MASTER_GUIDE = 'MASTER_GUIDE',
}