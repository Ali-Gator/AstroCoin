'use client';

import { FC } from 'react';
import Image from 'next/image';
import token from '@/public/main-token.svg';
import { useBoundStore } from '@/store';
import classNames from 'classnames';
import { BoostInterface } from '@/store/boosts';

export const BoostCard: FC<BoostInterface> = (boost) => {
  const {
    iconSrc,
    title,
    description,
    itemsLeft,
    maxItems,
    price,
    isBlurred,
    type,
  } = boost;
  console.log('🚀 ~ boost:', boost);
  const { utilizeBoost, getPotentialIncome } = useBoundStore((state) => state);

  const handleBoost = () => {
    utilizeBoost(type);
  };

  return (
    <div className="rounded-3xl bg-background-cards p-4 flex items-center gap-x-2">
      <div className="flex justify-center items-center size-12 rounded-2xl border border-solid border-background-transparent09 bg-background/60">
        <Image className="" src={iconSrc} alt={title} width={26} height={26} />
      </div>
      <div>
        <p className="text-md">
          {title}
          {isBlurred && <span className="text-xs opacity-50 ml-1">(soon)</span>}
        </p>
        <p className="text-xs text-white/90">
          {description}
          <span className="text-xs font-medium inline-block ml-1">
            {itemsLeft}/{maxItems}
          </span>
        </p>
      </div>
      <button
        className={classNames(
          'rounded-xl bg-black px-4 py-2 text-sm font-bold ml-auto min-w-[100px]',
          { 'blur-xs': isBlurred },
        )}
        onClick={handleBoost}
      >
        {price === 'free'
          ? 'FREE'
          : (price * getPotentialIncome()).toLocaleString()}
        {price !== 'free' && (
          <Image className="size-3 ml-2 inline-block" src={token} alt="token" />
        )}
      </button>
    </div>
  );
};
