import { create } from 'zustand';
import { BalanceSlice, createBalanceSlice } from './balance';
import { BoostsSlice, createBoostsSlice } from './boosts';
import { UserSlice, createUserSlice } from './user';
import { QuestsSlice, createQuestsSlice } from './quests';

export const useBoundStore = create<
  BalanceSlice & UserSlice & BoostsSlice & QuestsSlice
>((...a) => ({
  ...createBalanceSlice(...a),
  ...createBoostsSlice(...a),
  ...createUserSlice(...a),
  ...createQuestsSlice(...a),
}));
