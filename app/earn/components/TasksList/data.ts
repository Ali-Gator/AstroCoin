import { ITask } from './types';
import tonColor from '@/public/earn/tasks/ton-color.png';

export const tasks: ITask[] = [
  {
    id: '1',
    title: 'How to build on TON?',
    image: tonColor,
    color: '#24A1DEA8',
    reward: 150000,
    isCompleted: false,
    steps: [
      {
        question: '1. What is blockchain?',
        description:
          'A blockchain is a decentralized, distributed digital ledger used to record transactions across many computers. It ensures that the recorded transactions cannot be altered retroactively, making it secure and transparent. Each block in the chain contains a number of transactions, and every time a new transaction occurs on the blockchain, a record of that transaction is added to every participant’s ledger.',
        answers: [
          {
            text: 'A type of data base managed by a central authority',
            isTrue: false,
          },
          {
            text: 'A decentralized, distributed digital ledger',
            isTrue: true,
          },
          {
            text: 'A physical chain storing digital transactions',
            isTrue: false,
          },
          {
            text: 'An internet protocol',
            isTrue: false,
          },
        ],
      },
    ],
  },
  // {
  //   title: 'Stake TON in your Telegram Wallet for 30 days',
  //   image: ton,
  //   reward: 100000,
  //   isCompleted: false,
  // },
  // {
  //   title: 'Create your first TON wallet',
  //   image: smthTon,
  //   reward: 20000,
  //   isCompleted: false,
  // },
];
