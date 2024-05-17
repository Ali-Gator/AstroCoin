import { StaticImageData } from 'next/image';

export interface Task {
  title: string;
  date: string;
  reward: number;
  image: StaticImageData;
  isCompleted: boolean;
}
