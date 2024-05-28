import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { BalanceSlice, createBalanceSlice } from './balance';
import { createBoostsSlice } from './boosts';

export const useBoundStore = create<BalanceSlice>()(
  persist(
    (...a) => ({
      ...createBalanceSlice(...a),
      ...createBoostsSlice(...a),
    }),
    {
      name: 'bound-store',
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);
