'use client';

import { StateCreator } from 'zustand';
import { BalanceSlice } from './type';
import { MS_IN_SECOND } from '@/helpers/constants/time';
import axios from 'axios';
import { UserSlice } from '../user';
import { InsertBalance } from '@/db';
import { calculateCurrentBalance } from './helpers/calculateCurrentBalance';

export const createBalanceSlice: StateCreator<
  BalanceSlice & UserSlice,
  [],
  [],
  BalanceSlice
> = (set, get) => {
  if (typeof window !== 'undefined') {
    setInterval(() => {
      set((state) => {
        if (!state) return {};
        const currentEnergyLevel = state.currentEnergyLevel - 1;
        if (currentEnergyLevel < 0) {
          return state;
        }
        return {
          ...state,
          currentBalance: state.currentBalance + state.tokenGain,
          currentEnergyLevel: currentEnergyLevel,
        };
      });
    }, MS_IN_SECOND);
  }

  return {
    staticBalance: 0,
    balanceUpdatedAt: Date.now(),

    currentBalance: 0,

    tokenGain: 1,

    staticEnergyLevel: 1000,
    currentEnergyLevel: 1000,
    energyCapacity: 1000,
    energyLevelUpdatedAt: Date.now(),

    addToBalance: (increment: number) =>
      set((state) => ({
        ...state,
        currentBalance: state.currentBalance + increment,
      })),
    removeFromBalance: (decrement: number) =>
      set((state) => {
        return {
          ...state,
          currentBalance: state.currentBalance - decrement,
        };
      }),
    addEnergy: (percentageIncrement: number) =>
      set((state) => {
        // percentageIncrement is a number between 0 and 1
        const potentialEnergy =
          state.currentEnergyLevel + state.energyCapacity * percentageIncrement;
        const newEnergyLevel =
          potentialEnergy > state.energyCapacity
            ? state.energyCapacity
            : potentialEnergy;
        return {
          ...state,
          currentEnergyLevel: newEnergyLevel,
        };
      }),
    getPotentialIncome: () => {
      const { tokenGain, energyCapacity } = get();
      return tokenGain * energyCapacity;
    },
    updateBalance: async () => {
      const {
        telegramId,
        currentBalance,
        currentEnergyLevel,
        energyCapacity,
        tokenGain,
      } = get();
      if (!telegramId) return;
      const newBalance = {
        staticBalance: currentBalance,
        staticEnergyLevel: currentEnergyLevel,
        energyCapacity: energyCapacity,
        tokenGain: tokenGain,
      } as Partial<InsertBalance>;
      const { status, data } = await axios.put('api/balance', {
        telegramId,
        newBalance,
      });
    },
    refillEnergy: () =>
      set((state) => ({
        ...state,
        currentEnergyLevel: state.energyCapacity,
      })),
    fetchBalance: async (telegramId: string) => {
      const { data: fetchedBalance } = await axios.post('api/balance', {
        telegramId,
      });
      set((state) => {
        const recalculatedBalance = calculateCurrentBalance({
          ...state,
          ...fetchedBalance,
        });
        return {
          ...state,
          ...recalculatedBalance,
          id: fetchedBalance.id,
        };
      });
    },
  };
};
