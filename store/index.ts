import { create } from 'zustand';
import { BalanceSlice, createBalanceSlice } from './balance';
import { createBoostsSlice } from './boosts';
import { UserSlice, createUserSlice } from './user';

export const useBoundStore = create<BalanceSlice & UserSlice>((...a) => ({
  ...createBalanceSlice(...a),
  ...createBoostsSlice(...a),
  ...createUserSlice(...a),
}));
