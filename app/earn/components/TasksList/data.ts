import { Task } from './types';
import ton from '@/public/earn/tasks/ton.png';
import smthTon from '@/public/earn/tasks/smth-ton.png';
import astroCoin from '@/public/main-token.svg';

export const tasks: Task[] = [
  {
    title: 'Subscribe to  Community',
    date: 'May 12',
    image: astroCoin,
    reward: 150000,
    isCompleted: false,
  },
  {
    title: 'Stake TON in your Telegram Wallet for 30 days',
    date: 'May 15',
    image: ton,
    reward: 100000,
    isCompleted: false,
  },
  {
    title: 'Create your first TON wallet',
    date: 'May 12',
    image: smthTon,
    reward: 20000,
    isCompleted: false,
  },
];
