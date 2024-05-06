import { StaticImageData } from 'next/image';

export interface IMenuItem {
  imageSrc: StaticImageData;
  title: string;
  linkPath?: string;
}
