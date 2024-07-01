import { create } from 'zustand';
import { BalanceSlice, createBalanceSlice } from './balance';
import { BoostsSlice, createBoostsSlice } from './boosts';
import { UserSlice, createUserSlice } from './user';

export const useBoundStore = create<BalanceSlice & UserSlice & BoostsSlice>(
  (...a) => ({
    ...createBalanceSlice(...a),
    ...createBoostsSlice(...a),
    ...createUserSlice(...a),
  }),
);
