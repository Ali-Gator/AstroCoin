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

    utilizeBoost: (boostType: BoostType) => {
      set((state) => {
        const boost = state.boosts[boostType];
        if (boost.itemsLeft === 0) {
          return state;
        } else {
          const {
            removeFromBalance,
            getPotentialIncome,
            addEnergy,
            refillEnergy,
            currentBalance,
          } = get();
          const price =
            boost.price === 'free' ? 0 : boost.price * getPotentialIncome();
          if (currentBalance < price) return state;
          removeFromBalance(price);
          console.log('🚀 ~ set ~ type:', boost.type);
          switch (boost.type) {
            case BoostType.ENERGY:
              addEnergy(0.25);
              break;
            case BoostType.FOOD:
              refillEnergy();
              break;
          }
        }
        return {
          ...state,
          boosts: {
            ...state.boosts,
            [boostType]: { ...boost, itemsLeft: boost.itemsLeft - 1 },
          },
        };
      });
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
