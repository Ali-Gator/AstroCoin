import { StaticImageData } from 'next/image';

export interface IHorizontalCard {
  iconSrc: StaticImageData;
  title: string;
  description: string;
  quantity: string;
  price: string | null;
}
