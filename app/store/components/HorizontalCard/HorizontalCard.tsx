import { FC } from 'react';
import Image from 'next/image';
import { IHorizontalCard } from '@/app/store/components/HorizontalCard/types';
import token from '@/public/main-token.svg';
import classNames from 'classnames';

export const HorizontalCard: FC<IHorizontalCard> = ({
  iconSrc,
  title,
  description,
  quantity,
  price,
  isBlurred,
}) => {
  return (
    <div className="rounded-3xl bg-background-cards p-4 flex items-center gap-x-2">
      <div className="flex justify-center items-center size-12 rounded-2xl border border-solid border-background-transparent09 bg-background/60">
        <Image className="" src={iconSrc} alt={title} width={26} height={26} />
      </div>
      <div>
        <p className="text-sm">
          {title}
          {isBlurred && <span className="text-xs opacity-50 ml-1">(soon)</span>}
        </p>
        <p className="text-xs text-white/90">
          {description}
          {quantity && (
            <span className="text-xs font-medium inline-block ml-1">
              {quantity}
            </span>
          )}
        </p>
      </div>
      <button
        className={classNames(
          'rounded-xl bg-black px-4 py-2 text-sm font-bold ml-auto',
          { 'blur-xs': isBlurred },
        )}
      >
        {price ? price : 'USE'}
        {price && (
          <Image className="size-3 ml-2 inline-block" src={token} alt="token" />
        )}
      </button>
    </div>
  );
};
