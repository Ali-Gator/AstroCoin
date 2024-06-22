import { StateCreator } from 'zustand';
import { UserSlice } from './type';
import { db, users } from '@/db';
import axios from 'axios';

export const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = (
  set,
  get,
) => {
  return {
    username: '',
    telegramId: null,

    setTelegramId: (telegramId?: string) => {
      set((state) => ({ ...state, telegramId: telegramId || null }));
      if (telegramId) {
        get().fetchUser(telegramId);
      }
    },
    fetchUser: async (telegramId: string) => {
      const { data: allUsers } = await axios.post('api/users', {
        telegramId,
      });
      console.log('🚀 ~ fetchUser: ~ allUsers:', allUsers);
      // const user = allUsers.find((user) => user.telegramId === telegramId);
      // if (user) {
      //   return user;
      // }
      // return null;
    },
  };
};
