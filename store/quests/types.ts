import { StaticImageData } from 'next/image';

export interface QuestType {
  name: string;
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
  quests: Record<QuestType['name'], QuestType>;
  isPlaceholder: boolean;

  completeQuest: (questType: QuestType['name'], questReward: number) => void;
  fetchQuests: () => Promise<void>;
}
