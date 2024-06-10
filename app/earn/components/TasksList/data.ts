import { Task } from './types';
import ton from '@/public/earn/tasks/ton.png';
import smthTon from '@/public/earn/tasks/smth-ton.png';
import astraCoin from '@/public/main-token.svg';

export const tasks: Task[] = [
  {
    title: 'Subscribe to AstraCoin Community',
    date: 'May 12',
    image: astraCoin,
    reward: 150000,
    isCompleted: false,
  },
  {
    title: 'Connect your wallet to see how it works',
    date: 'May 12',
    image: smthTon,
    reward: 20000,
    isCompleted: false,
  },
  {
    title: 'Stake TON for a month in your Telegram Wallet for a month',
    date: 'May 15',
    image: ton,
    reward: 1000000,
    isCompleted: false,
  },
];
