import { Task } from '../TasksList/types';
import Image from 'next/image';
import astraCoin from '@/public/main-token.svg';

export const TaskItem = ({ task }: { task: Task }) => {
  const { title, date, image, reward, isCompleted } = task;

  return (
    <div className="flex flex-col items-stretch gap-3 w-full py-3 px-4 rounded-3xl font-inter bg-secondary font-bold">
      <div className="flex flex-row gap-3">
        <Image
          src={image}
          alt={title}
          width={44}
          height={44}
          className="min-w-11 h-11 my-auto"
        />
        <div className="flex flex-col items-stretch w-full">
          <div className="flex flex-row justify-between items-end w-full h-6">
            <span className="font-sf-pro font-medium opacity-80 text-xs">
              Task:
            </span>
            <span className="font-sf-pro font-medium opacity-80 text-xs">
              {date}
            </span>
          </div>
          <span className="leading-6 text-md font-sf-pro font-normal tracking-[0.07em]">
            {title}
          </span>
        </div>
      </div>
      <button className="bg-secondary-btn text-text-secondary-btn font-inter font-extrabold py-4 text-xs flex flex-row justify-center items-center rounded-2xl">
        {isCompleted ? (
          <span>completed</span>
        ) : (
          <div className="flex flex-row items-center font-termina600 tracking-[0.03em] gap-2">
            <span>{reward.toLocaleString()}</span>
            <Image src={astraCoin} alt="astraCoin" width={18} height={18} />
          </div>
        )}
      </button>
    </div>
  );
};
