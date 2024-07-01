import { ITask } from '../TasksList/types';
import Image from 'next/image';
import { useBoundStore } from '@/store';
import { FC } from 'react';
import tokenLogo from '@/public/main-token.svg';
import arrow from '@/public/icons/arrow-right.svg';
import Link from 'next/link';

export const TaskItem: FC<ITask> = ({
  id,
  title,
  image,
  color,
  reward,
  isCompleted,
}) => {
  const { addToBalance } = useBoundStore((state) => state);

  const handleBalanceUpdate = () => {
    if (!isCompleted) {
      addToBalance(reward);
    }
  };
  return (
    <Link
      className={'flex items-center w-full py-3 px-4 rounded-3xl font-normal'}
      style={{ backgroundColor: color }}
      href={`/earn/${id}`}
    >
      <Image src={image} alt={title} width={48} height={48} />
      <p className="ml-2">{title}</p>
      <div className="flex ml-auto">
        <span className="text-xs text-white/80">{`up to ${reward}`}</span>
        <Image
          className="ml-1"
          src={tokenLogo}
          alt="token logo"
          width={12}
          height={12}
        />
        <Image className="ml-4" src={arrow} alt={''} width={16} height={16} />
      </div>
    </Link>
  );
};
