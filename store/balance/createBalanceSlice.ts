import { StateCreator } from 'zustand';
import { BalanceSlice } from './type';
import { MS_IN_SECOND } from '@/helpers/constants/time';

export const createBalanceSlice: StateCreator<
  BalanceSlice,
  [],
  [],
  BalanceSlice
> = (set, get) => {
  setInterval(() => {
    set((state) => {
      console.log('🚀 ~ set ~ state:', state);
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
  const calculateCurrentBalance = (state: BalanceSlice) => {
    const timePassed = state?.balanceUpdatedAt
      ? Date.now() - state.balanceUpdatedAt
      : 0;
    console.log('🚀 ~ calculateCurrentBalance ~ timePassed:', timePassed);
    const balanceIncrement =
      (timePassed / MS_IN_SECOND) * (state?.tokenGain || 1);
    return (
      (state?.staticBalance || state?.currentBalance || 0) + balanceIncrement
    );
  };

  return {
    staticBalance: 0,
    balanceUpdatedAt: Date.now(),

    currentBalance: calculateCurrentBalance(get()),

    tokenGain: 2,
    slowEnergySince: null,
    slowEnergyMultiplicator: 1.5,

    staticEnergyLevel: 1000,
    energyLevelUpdatedAt: Date.now(),

    currentEnergyLevel: 1000,
    energyCapacity: 1000,

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
    slowDownEnergy: () =>
      set((state) => ({
        ...state,
        slowEnergySince: Date.now(),
        tokenGain: state.tokenGain * state.slowEnergyMultiplicator,
      })),
  };
};
