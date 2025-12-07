import { SectionData, Tab } from './types';
import { atomicHabitsData } from './books/atomic-habits';
import { deepWorkData } from './books/deep-work';
import { dopamineDetoxData } from './books/dopamine-detox';
import { dailyStoicData } from './books/daily-stoic';
import { lifeProtocolData } from './protocols/life-protocol';
import { deepFocusProtocolData } from './protocols/deep-focus-protocol';

export const APP_DATA: Record<Tab, SectionData> = {
  [Tab.HOME]: {
    id: 'home',
    title: 'ইউনিফাইড নলেজ সিন্থেসিস',
    description: 'নিউরোসায়েন্স, স্টোয়িক দর্শন এবং আচরণগত মনোবিজ্ঞানের সমন্বয়ে তৈরি একটি লাইফ-অপারেটিং সিস্টেম।',
    cards: []
  },
  [Tab.LIFE_PROTOCOL]: lifeProtocolData,
  [Tab.ATOMIC_HABITS]: atomicHabitsData,
  [Tab.DEEP_WORK]: deepWorkData,
  [Tab.DOPAMINE_DETOX]: dopamineDetoxData,
  [Tab.DAILY_STOIC]: dailyStoicData,
  [Tab.DEEP_FOCUS_PROTOCOL]: deepFocusProtocolData,
  [Tab.MASTER_GUIDE]: {
    id: 'master-guide',
    title: 'মাস্টার স্টাডি গাইড',
    description: 'সকল প্রোটোকল এবং বইয়ের নির্যাস থেকে তৈরি একটি অ্যাকশনেবল বা বাস্তবায়নযোগ্য রুটিন।',
    cards: []
  }
};