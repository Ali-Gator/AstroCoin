'use client';

import { FC } from 'react';
import Image from 'next/image';
import { IHorizontalCard } from '@/app/store/components/HorizontalCard/types';
import token from '@/public/main-token.svg';
import { useBoundStore } from '@/store';

export const HorizontalCard: FC<IHorizontalCard> = ({
  iconSrc,
  title,
  description,
  quantity,
  capacity,
  price,
  boost,
}) => {
  const { refillEnergy } = useBoundStore((state) => state);

  const handleBoost = () => {
    if (quantity > 0) {
      if (boost?.type === 'energy') {
        refillEnergy();
      }
    }
  };

  return (
    <>
      <div className="flex justify-center items-center size-12 rounded-2xl border border-solid border-background-transparent09 bg-background/60">
        <Image className="" src={iconSrc} alt={title} />
      </div>
      <div>
        {/*<div className="flex justify-between items-center">*/}
        <p className="text-xs font-medium">{title}</p>
        <p className="text-[10px] text-white/90">
          {description}
          <span className="text-xs font-medium inline-block ml-1">
            {quantity}/{capacity}
          </span>
        </p>
      </div>
      {/*  <div className="flex justify-between items-center">*/}
      {/*    <span className="text-[10px]">active for {period} hours</span>*/}
      {/*    <span className="text-xs font-medium text-white/90">{quantity}</span>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <button
        className="rounded-xl bg-black px-2 py-2 text-xs font-bold"
        onClick={handleBoost}
      >
        {price ? price.toLocaleString() : 'FREE'}
        {price && (
          <Image className="size-3 ml-2 inline-block" src={token} alt="token" />
        )}
      </button>
    </>
  );
};
