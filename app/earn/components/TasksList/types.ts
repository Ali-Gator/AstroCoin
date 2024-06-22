import { StaticImageData } from 'next/image';

export interface ITask {
  id: string;
  title: string;
  reward: number;
  image: StaticImageData;
  color: string;
  isCompleted: boolean;
  steps: IStep[];
}

export interface IStep {
  question: string;
  description: string;
  answers: IAnswer[];
}

export interface IAnswer {
  text: string;
  isTrue: boolean;
}
