import { BoostType, BoostsSlice } from './type';
import burgerBig from '@/public/icons/burger-big.png';
import lightning from '@/public/icons/lightning.png';
import hummers from '@/public/icons/hummers.png';
import alienSmiling from '@/public/icons/alien-smiling.png';
import rocket from '@/public/icons/rocket.png';

export const boostsData: BoostsSlice['boosts'] = {
  [BoostType.ENERGY]: {
    type: BoostType.ENERGY,
    title: 'Energy',
    description: '+25%',
    iconSrc: lightning,
    price: 'free',
    updatedAt: Date.now(),
    itemsLeft: 0,
    maxItems: 1,
    energyLeftCondition: 0.25,
    activeDuration: 'once',
    resetDuration: 12,
  },
  [BoostType.FOOD]: {
    type: BoostType.FOOD,
    title: 'Food',
    description: 'Full energy',
    iconSrc: burgerBig,
    price: 0.1,
    updatedAt: Date.now(),
    itemsLeft: 0,
    maxItems: 3,
    energyLeftCondition: null,
    activeDuration: 'once',
    resetDuration: 2,
  },
};
