import { create } from 'zustand';
import { CoinSlice, createCoinSlice } from './coin';

export const useBoundStore = create<CoinSlice>()((...a) => ({
  ...createCoinSlice(...a),
}));
