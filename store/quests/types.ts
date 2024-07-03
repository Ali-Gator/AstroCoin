import { StaticImageData } from 'next/image';

export interface QuestType {
  id: number;
  title: string;
  reward: number;
  image: StaticImageData;
  color: string;
  isCompleted: boolean;
  steps: QuestStep[];
}

export interface QuestStep {
  question: string;
  questQuestion?: string;
  description: string;
  answers: QuestAnswer[];
}

export interface QuestAnswer {
  text: string;
  isTrue: boolean;
}

export interface QuestsSlice {
  quests: Record<QuestType['id'], QuestType>;
  isPlaceholder: boolean;

  completeQuest: (questType: QuestType['id']) => void;
  fetchQuests: () => Promise<void>;
}
