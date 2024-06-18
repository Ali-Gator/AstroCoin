import { StateCreator } from 'zustand';
import { UserSlice } from './type';
import { db, users } from '@/db';

export const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = (
  set,
  get,
) => {
  return {
    username: '',
    telegramId: '',

    fetchUser: async (telegramId: string) => {
      const allUsers = await db.select().from(users);
      console.log('🚀 ~ fetchUser: ~ allUsers:', allUsers);
      const user = allUsers.find((user) => user.telegramId === telegramId);
      if (user) {
        return user;
      }
      return null;
    },
  };
};
