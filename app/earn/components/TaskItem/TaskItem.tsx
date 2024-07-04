import { AppRoutes } from '@/config/routes';
import arrow from '@/public/icons/arrow-right.svg';
import tokenLogo from '@/public/main-token.svg';
import { QuestType } from '@/store/quests';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

export const TaskItem: FC<QuestType> = ({
  name,
  title,
  image,
  color,
  reward,
  isCompleted,
}) => {
  return (
    <Link
      className={'flex items-center w-full py-3 px-4 rounded-3xl font-normal'}
      style={{ backgroundColor: color }}
      href={!isCompleted ? `${AppRoutes.Earn}/${name}` : AppRoutes.Earn}
    >
      <Image src={image} alt={title} width={48} height={48} />
      <p className="ml-2">{title}</p>
      <div className="flex ml-auto">
        {isCompleted ? (
          <span className="text-xs text-white/80">Completed</span>
        ) : (
          <>
            <span className="text-xs text-white/80">{`up to ${reward}`}</span>
            <Image
              className="ml-1"
              src={tokenLogo}
              alt="token logo"
              width={12}
              height={12}
            />
            <Image
              className="ml-4"
              src={arrow}
              alt={''}
              width={16}
              height={16}
            />
          </>
        )}
      </div>
    </Link>
  );
};
