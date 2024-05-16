import { Task } from '../TasksList/types';
import Image from 'next/image';
import xsycoin from '@/public/icons/xsycoin.svg';

export const TaskItem = ({ task }: { task: Task }) => {
  const { title, date, image, reward, isCompleted } = task;

  return (
    <div className="flex flex-col items-stretch gap-3 w-full py-3 px-4 rounded-3xl bg-secondary font-bold">
      <div className="flex flex-row gap-3">
        <Image
          src={image}
          alt={title}
          width={44}
          height={44}
          className="min-w-11 h-11 my-auto"
        />
        <div className="flex flex-col items-stretch w-full">
          <div className="flex flex-row justify-between w-full">
            <span className="font-normal opacity-80 text-xs">Task:</span>
            <span className="font-normal opacity-80 text-xs">{date}</span>
          </div>
          <span className="leading-6">{title}</span>
        </div>
      </div>
      <button className="bg-secondary-btn text-text-secondary-btn p-4 flex flex-row justify-center items-center rounded-2xl">
        {isCompleted ? (
          <span>completed</span>
        ) : (
          <div className="flex flex-row items-center gap-2">
            <span>{reward.toLocaleString()}</span>
            <Image src={xsycoin} alt="xsycoin" width={24} height={24} />
          </div>
        )}
      </button>
    </div>
  );
};