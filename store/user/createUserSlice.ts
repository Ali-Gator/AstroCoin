import { StateCreator } from 'zustand';
import { UserSlice } from './type';
import axios from 'axios';
import { BalanceSlice } from '../balance';

export const createUserSlice: StateCreator<
  UserSlice & BalanceSlice,
  [],
  [],
  UserSlice
> = (set, get) => {
  return {
    username: '',
    telegramId: null,
    currentUser: null,

    setTelegramId: (telegramId?: string) => {
      set((state) => ({ ...state, telegramId: telegramId || null }));
      if (telegramId) {
        get().fetchUser(telegramId);
        get().fetchBalance(telegramId);
      }
    },
    fetchUser: async (telegramId: string) => {
      const { data: currentUser } = await axios.post('api/users', {
        telegramId,
      });
      set((state) => ({ ...state, currentUser }));
    },
  };
};
