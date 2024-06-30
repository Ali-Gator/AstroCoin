import { StateCreator } from 'zustand';
import { BoostDbData, BoostType, BoostsSlice } from './type';
import { boostsData } from './data';
import axios from 'axios';
import { UserSlice } from '../user';
import { BalanceSlice } from '../balance';

export const createBoostsSlice: StateCreator<
  BoostsSlice & UserSlice & BalanceSlice,
  [],
  [],
  BoostsSlice
> = (set, get) => {
  return {
    boosts: boostsData,
    isPlaceholder: true,

    utilizeBoost: async (boostType: BoostType) => {
      const boost = get().boosts[boostType];
      if (boost.itemsLeft === 0) return;
      const {
        removeFromBalance,
        getPotentialIncome,
        addEnergy,
        refillEnergy,
        currentBalance,
        updateBalance,
      } = get();
      const price =
        boost.price === 'free' ? 0 : boost.price * getPotentialIncome();
      if (currentBalance < price) return;
      removeFromBalance(price);
      switch (boost.type) {
        case BoostType.ENERGY:
          addEnergy(0.25);
          break;
        case BoostType.FOOD:
          refillEnergy();
          break;
      }
      updateBalance();
      const newItemsLeft = boost.itemsLeft - 1;
      set((state) => {
        return {
          ...state,
          boosts: {
            ...state.boosts,
            [boostType]: { ...boost, itemsLeft: newItemsLeft },
          },
        };
      });
      const { data, status } = await axios.post('api/boosts', {
        telegramId: get().telegramId,
        itemsLeft: newItemsLeft,
        boostType,
      });
      console.log('🚀 ~ utilizeBoost: ~ data:', data);
      console.log('🚀 ~ utilizeBoost: ~ status:', status);
    },
    fetchBoosts: async () => {
      const telegramId = get().telegramId;
      if (!telegramId) return;
      const { data: fetchedBoosts } = await axios.post('api/boosts', {
        telegramId,
      });
      console.log('🚀 ~ fetchBoosts: ~ fetchedBoosts:', fetchedBoosts);
      set((state) => {
        const newBoosts = { ...state.boosts };
        fetchedBoosts.forEach((boost: BoostDbData) => {
          newBoosts[boost.type].itemsLeft = boost.itemsLeft;
        });
        return {
          ...state,
          boosts: newBoosts,
          isPlaceholder: false,
        };
      });
    },
  };
};
