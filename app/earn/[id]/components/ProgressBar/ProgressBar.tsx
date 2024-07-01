import { FC } from 'react';
import { IProgressBar } from '@/app/earn/[id]/components/ProgressBar/types';
import Image from 'next/image';
import styles from '@/components/MenuItem/MenuItem.module.css';
import token from '@/public/main-token.svg';

export const ProgressBar: FC<IProgressBar> = ({
  current,
  total,
  className,
}) => {
  return (
    <div className={className}>
      <div
        className={'w-full h-1.5 rounded-[26px] bg-[#F0F0F026] overflow-hidden'}
      >
        <div
          className={'h-full bg-text-accent'}
          style={{ width: `${(current / total) * 100}%` }}
        />
      </div>
      <div className="mt-1.5 flex gap-x-1.5 items-center">
        <Image
          className={styles.icon}
          src={token}
          alt="token"
          width={25}
          height={25}
        />
        <p className="font-termina600 text-sm text-white/75 font-[600]">
          <span className="text-text-accent text-xl">{current}</span>
          &nbsp;/&nbsp;{total}
        </p>
      </div>
    </div>
  );
};
