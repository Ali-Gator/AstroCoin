import { StateCreator } from 'zustand';
import { quests } from './data';
import axios from 'axios';
import { UserSlice } from '../user';
import { QuestType, QuestsSlice } from './types';
import { SelectQuests } from '@/db';
import { BalanceSlice } from '../balance';

export const createQuestsSlice: StateCreator<
  QuestsSlice & UserSlice & BalanceSlice,
  [],
  [],
  QuestsSlice
> = (set, get) => {
  return {
    quests: quests,
    isPlaceholder: true,

    completeQuest: async (
      questName: QuestType['name'],
      questReward: number,
    ) => {
      const { telegramId, addToBalance, updateBalance } = get();
      addToBalance(questReward);
      const { data, status } = await axios.put('api/quests', {
        telegramId,
        questName,
      });
      console.log('🚀 ~ completeQuest: ~ data:', data);
      console.log('🚀 ~ completeQuest: ~ status:', status);
      // updateBalance();
    },
    fetchQuests: async () => {
      const telegramId = get().telegramId;
      if (!telegramId) return;
      const {
        data: { quests: fetchedQuests },
      } = await axios.post<{ quests: SelectQuests[] }>('api/quests', {
        telegramId,
      });
      console.log('🚀 ~ fetchQuests: ~ fetchedQuests:', fetchedQuests);
      if (!fetchedQuests) return;
      set((state) => {
        const newQuests = { ...state.quests };
        fetchedQuests.forEach((quest: SelectQuests) => {
          newQuests[quest.name] = { ...newQuests[quest.name], ...quest };
        });
        return {
          ...state,
          quests: newQuests,
          isPlaceholder: false,
        };
      });
    },
  };
};
