import { StaticImageData } from 'next/image';

type BoostType = {
  type: 'energy' | 'balance';
  value: number;
  duration: number | 'once';
};

export interface IHorizontalCard {
  iconSrc: StaticImageData;
  title: string;
  description: string;
  quantity: number;
  capacity: number;
  price: number | null;
  boost?: BoostType;
  isBlurred?: boolean;
}
