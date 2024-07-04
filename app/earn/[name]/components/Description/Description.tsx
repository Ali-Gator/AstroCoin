import Image from 'next/image';
import rightArrow from '@/public/earn/tasks/right-arrow.svg';
import { IDescriptionProps } from '@/app/earn/[id]/components/Description/types';
import { FC } from 'react';

export const Description: FC<IDescriptionProps> = ({ text, onClick }) => {
  return (
    <div>
      <p className="mt-4 text-xl text-pretty">{text}</p>
      <button
        onClick={onClick}
        className="fixed bottom-8 right-8 size-12 rounded-full bg-text-accent flex justify-center items-center"
      >
        <Image src={rightArrow} alt="rightArrow" width={20} height={16} />
      </button>
    </div>
  );
};
