import { StateCreator } from 'zustand';

export interface CoinSlice {
  balance: number;
  eatingSpeed: number;
  foodStorageCapacity: number;
  foodStorage: number;

  addToBalance: (increment: number) => void;
  addToEatingSpeed: (increment: number) => void;
  addToEatingCapacity: (increment: number) => void;
}

export const createCoinSlice: StateCreator<CoinSlice, [], [], CoinSlice> = (
  set,
) => {
  setInterval(() => {
    set((state) => {
      const foodStorage = state.foodStorage - state.eatingSpeed;
      return {
        ...state,
        balance: state.balance + state.eatingSpeed,
        foodStorage: foodStorage < 0 ? 0 : foodStorage,
      };
    });
  }, 1000);

  return {
    balance: 0,
    eatingSpeed: 0.1,
    foodStorageCapacity: 100,
    foodStorage: 100,

    addToBalance: (increment: number) =>
      set((state) => ({ ...state, balance: state.balance + increment })),
    addToEatingSpeed: (increment: number) =>
      set((state) => ({
        ...state,
        eatingSpeed: state.eatingSpeed + increment,
      })),
    addToEatingCapacity: (increment: number) =>
      set((state) => ({
        ...state,
        foodStorageCapacity: state.foodStorageCapacity + increment,
      })),
  };
};
