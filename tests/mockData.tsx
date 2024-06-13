import { IHorizontalCard } from '@/app/store/components/HorizontalCard';
import burgerBig from '@/public/icons/burger-big.png';
import lightning from '@/public/icons/lightning.png';
import hummers from '@/public/icons/hummers.png';
import alienSmiling from '@/public/icons/alien-smiling.png';
import rocket from '@/public/icons/rocket.png';

export const horizontalCardDataFoost: IHorizontalCard[] = [
  {
    iconSrc: burgerBig,
    title: 'Food',
    description: 'Full energy',
    price: '500',
  },
  {
    iconSrc: lightning,
    title: 'Energy 0/1',
    description: '+25%',
    price: null,
  },
  {
    iconSrc: hummers,
    title: 'Storage Renovation',
    description: 'Current level:',
    quantity: '1/6',
    price: '1,000',
  },
  {
    iconSrc: alienSmiling,
    title: 'Auto-Feeder 0/3',
    description: 'available offline time: ',
    quantity: '72hr',
    price: '500',
  },
];

export const horizontalCardDataStore: IHorizontalCard[] = [
  {
    iconSrc: rocket,
    title: 'Transfer',
    description: 'Transfer to the next planet',
    price: '500,000',
    isBlurred: true,
  },
];
