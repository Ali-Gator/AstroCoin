import { StaticImageData } from 'next/image';

export enum BoostType {
  ENERGY = 'energy',
  FOOD = 'food',
}

export interface BoostDbData {
  id: number;
  ownerTelegramId: string;
  type: BoostType;
  itemsLeft: number;
  updatedAt: number;
}

export interface BoostInterface {
  type: BoostType;
  title: string;
  description: string;
  price: number | 'free'; // price is not static, it's a percentage of a potential income, ex. 0.1 = 10% of full storage income
  updatedAt: number;
  itemsLeft: number;
  maxItems: number;
  energyLeftCondition: number | null; // ex. 0.5 = 50% of energy
  activeDuration: number | 'once'; // in seconds
  resetDuration: number | 'immediately'; // hours
  iconSrc: StaticImageData;
  isBlurred?: boolean;
}

export interface BoostsSlice {
  boosts: Record<BoostType, BoostInterface>;
  isPlaceholder: boolean;

  utilizeBoost: (boostType: BoostType) => void;
  fetchBoosts: () => Promise<void>;
}
