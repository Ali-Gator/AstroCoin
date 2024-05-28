import { IHorizontalCard } from '@/app/store/components/HorizontalCard';
import energyDrink from '@/public/icons/energy-drink.png';
import alienFruit from '@/public/icons/alien-fruit-food.png';
import fuel from '@/public/icons/car-fuel.png';
import burger from '@/public/icons/burger-toy.png';
import cat from '@/public/icons/cat.png';

export const horizontalCardDataFoost: IHorizontalCard[] = [
  {
    iconSrc: energyDrink,
    title: 'Food',
    description: 'Boost energy',
    quantity: 5,
    capacity: 5,
    price: 20000,
    boost: {
      type: 'energy',
      value: 500,
      duration: 'once',
    },
  },
  {
    iconSrc: alienFruit,
    title: 'Bluelian-5',
    description: 'Full energy',
    quantity: 2,
    capacity: 3,
    price: 25000,
  },
  {
    iconSrc: fuel,
    title: 'Fuelist',
    description: 'For boost',
    quantity: 1,
    capacity: 3,
    price: null,
  },
  {
    iconSrc: burger,
    title: 'Burgex',
    description: 'When offline',
    quantity: 1,
    capacity: 3,
    price: null,
  },
];

export const horizontalCardDataStore: IHorizontalCard[] = [
  {
    iconSrc: energyDrink,
    title: 'Energy',
    description: 'Upgrade',
    quantity: 5,
    capacity: 5,
    price: 20000,
  },
  {
    iconSrc: cat,
    title: 'Cat supporter',
    description: 'Upgrade',
    quantity: 2,
    capacity: 3,
    price: 25000,
  },
];
