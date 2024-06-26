import { StateCreator } from 'zustand';
import { BalanceSlice } from './type';
import { MS_IN_SECOND } from '@/helpers/constants/time';
import axios from 'axios';

export const createBalanceSlice: StateCreator<
  BalanceSlice,
  [],
  [],
  BalanceSlice
> = (set, get) => {
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

  /*
    Calculate current balance based on time passed since last balance update
    TODO: Should include all the boosters and other factors that can affect the balance
  */
  const calculateCurrentBalance = (
    state: BalanceSlice,
  ): Partial<BalanceSlice> => {
    const dateString = state?.balanceUpdatedAt;
    let secondsPassed = 0;
    if (dateString) {
      const dateObject = new Date(dateString);
      const timestamp = dateObject.getTime();
      secondsPassed = Math.floor((Date.now() - timestamp) / MS_IN_SECOND);
    } else {
      secondsPassed = 0;
    }
    const maxSecondsPassed =
      secondsPassed > state.staticEnergyLevel
        ? state.staticEnergyLevel
        : secondsPassed;
    return {
      currentBalance: state.staticBalance + maxSecondsPassed * state.tokenGain,
      currentEnergyLevel: state.staticEnergyLevel - maxSecondsPassed,
      tokenGain: state.tokenGain,
    };
  };

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
        balanceUpdatedAt: Date.now(),
      })),
    addEnergy: (increment: number) =>
      set((state) => {
        const potentialEnergy = state.currentEnergyLevel + increment;
        const newEnergyLevel =
          potentialEnergy > state.energyCapacity
            ? state.energyCapacity
            : potentialEnergy;
        return {
          ...state,
          currentEnergyLevel: newEnergyLevel,
          staticEnergyLevel: newEnergyLevel,
          energyLevelUpdatedAt: Date.now(),
        };
      }),
    refillEnergy: () =>
      set((state) => ({
        ...state,
        currentEnergyLevel: state.energyCapacity,
        staticEnergyLevel: state.energyCapacity,
        energyLevelUpdatedAt: Date.now(),
      })),
    fetchBalance: async (telegramId: string) => {
      const { data: fetchedBalance } = await axios.post('api/balance', {
        telegramId,
      });
      console.log('🚀 ~ fetchBalance: ~ fetchedBalance:', fetchedBalance);
      set((state) => {
        const recalculatedBalance = calculateCurrentBalance({
          ...state,
          ...fetchedBalance,
        });
        return {
          ...state,
          ...recalculatedBalance,
        };
      });
    },
  };
};
