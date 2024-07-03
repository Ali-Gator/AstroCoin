import { StateCreator } from 'zustand';
import { quests } from './data';
import axios from 'axios';
import { UserSlice } from '../user';
import { QuestType, QuestsSlice } from './types';

export const createQuestsSlice: StateCreator<
  QuestsSlice & UserSlice,
  [],
  [],
  QuestsSlice
> = (set, get) => {
  return {
    quests: quests,
    isPlaceholder: true,

    completeQuest: async (questType: QuestType['id']) => {},
    fetchQuests: async () => {
      const telegramId = get().telegramId;
      if (!telegramId) return;
      const {
        data: { boosts: fetchedBoosts },
      } = await axios.post('api/boosts', {
        telegramId,
      });
      if (!fetchedBoosts) return;
    },
  };
};
