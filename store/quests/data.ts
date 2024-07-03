import { QuestType, QuestsSlice } from './types';
import tonColor from '@/public/earn/tasks/ton-color.png';
import astro from '@/public/avatars/community.png';

export const quests: QuestsSlice['quests'] = {
  1: {
    id: 1,
    title: 'What is blockchain?',
    image: tonColor,
    color: '#24A1DEA8',
    reward: 15000,
    isCompleted: false,
    steps: [
      {
        question: 'What is blockchain?',
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
      {
        question: 'How does a blockchain work?',
        description:
          'A blockchain works by recording transactions in a secure and transparent manner. Each transaction is added to a block, and each block is connected to the previous one, forming a chain. This chain is distributed across multiple computers (nodes), and any changes to the blockchain require consensus from the majority of the nodes, ensuring security and integrity.',
        answers: [
          {
            text: 'By centralizing all data in one location',
            isTrue: false,
          },
          {
            text: 'By recording transactions in a secure and transparent manner across a distributed network',
            isTrue: true,
          },
          {
            text: 'By using a single computer to store all transactions',
            isTrue: false,
          },
          {
            text: 'By creating isolated, independent transaction records',
            isTrue: false,
          },
        ],
      },
      {
        question: 'What are the key features of a blockchain?',
        questQuestion: 'Which of these is a key feature of blockchain?',
        description:
          'The main features of blockchain include decentralization, which means there is no need to rely on a central authority to store your data. It also ensures transparency, security, and immutability.',
        answers: [
          {
            text: 'Anonymous transactions',
            isTrue: false,
          },
          {
            text: 'Decentralization',
            isTrue: true,
          },
          {
            text: 'Free transactions',
            isTrue: false,
          },
        ],
      },
      {
        question: 'How to interact with the blockchain?',
        description:
          'Interacting with a blockchain involves using wallets and smart contracts. Wallets allow users to store, send, and receive cryptocurrency. Smart contracts are self-executing contracts with the terms of the agreement directly written into code. They automatically execute transactions when the conditions are met.',
        answers: [
          {
            text: 'By using traditional banking methods',
            isTrue: false,
          },
          {
            text: 'By using wallets to store, send, and receive cryptocurrency, and smart contracts to execute transactions',
            isTrue: true,
          },
          {
            text: 'By manually recording transactions on a ledger',
            isTrue: false,
          },
          {
            text: 'By relying on third-party intermediaries for all interactions',
            isTrue: false,
          },
        ],
      },
    ],
  },
  2: {
    id: 2,
    title: 'What is Astro?',
    image: astro,
    color: '#4B4F58',
    reward: 10000,
    isCompleted: false,
    steps: [
      {
        question: 'What is Astro?',
        description:
          'Astro is a next-level blockchain onboarding platform that allows users to learn about blockchain technology and earn AstroCoins (ASTRO) by completing quizzes and tasks. It is designed to be user-friendly and accessible to beginners, making it an ideal platform for those who are new to blockchain.',
        answers: [
          {
            text: 'A decentralized appllication',
            isTrue: false,
          },
          {
            text: 'A web3 onboarding platform',
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
      {
        question: 'Who is Astro?',
        description:
          'Astro is your alient pet, representing you in the space. Right now it exists off-chain, but soon you will be able to interact with it on-chain',
        answers: [
          {
            text: 'Alien pet with no purpose',
            isTrue: false,
          },
          {
            text: 'Alien pet, representing you in the space',
            isTrue: true,
          },
          {
            text: 'Alien pet, represeting the Astro community',
            isTrue: false,
          },
          {
            text: 'Alien pet, representing the Astro ecosystem',
            isTrue: false,
          },
        ],
      },
      {
        question: 'How will you benefit from Astro?',
        description:
          "First Astro will introduce you to the web3 space, it will teach you on how to do your first transactions, register in a few decentralized applications & interact with them, then we will transfer you and your Astro fully on-chain. Don't worry, you'll be ready for that 😉",
        questQuestion: 'What will Astro show you?',
        answers: [
          {
            text: 'How to create mem-coins and sell them on the market',
            isTrue: false,
          },
          {
            text: "How to create a decentralized application that can't be hacked",
            isTrue: false,
          },
          {
            text: 'How to earn real $ using AstroCoins',
            isTrue: false,
          },
          {
            text: 'How to interact with decentralized applications',
            isTrue: true,
          },
        ],
      },
      {
        question: "What is Astro's favorite blockchain?",
        description:
          "Astro's favorite blockchain is TON, the reason is its close communication with Telegram, allowing us to help millions of people to onboard into web3 ecosystem with ease",
        answers: [
          {
            text: 'Toxi$',
            isTrue: false,
          },
          {
            text: 'Ethereum',
            isTrue: false,
          },
          {
            text: 'TON',
            isTrue: true,
          },
          {
            text: 'Solana',
            isTrue: false,
          },
        ],
      },
    ],
  },
};
