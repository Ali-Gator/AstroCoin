'use client';
import { tasks } from '../data';
import { useState } from 'react';
import { ProgressBar } from '@/app/earn/[id]/components/ProgressBar/ProgressBar';
import Image from 'next/image';
import rightArrow from '@/public/earn/tasks/right-arrow.svg';

export default function TaskPage({ params }: { params: { id: string } }) {
  const currTask = tasks.find(({ id }) => id === params.id);

  const [currStep, setCurrStep] = useState<number>(0);

  if (!currTask) {
    return null;
  }

  const { reward, steps } = currTask;
  const { question, description } = steps[currStep];

  return (
    <div className="w-full h-full min-h-[100vh] relative py-4 px-6 bg-gradient-to-b from-[#5F22A0] to[#160C20]">
      <p className="mt-2.5 font-termina700 text-center">
        <span className="text-text-accent">Learn</span> to earn
      </p>
      <ProgressBar className="mt-2.5" current={2000} total={reward} />
      <div className="mt-8 flex font-termina600 text-3xl text-pretty">
        <p>{currStep + 1}.&nbsp;</p>
        <p className="">{question}</p>
      </div>
      <p className="mt-4 text-xl text-pretty">{description}</p>
      <button className="fixed bottom-8 right-8 size-12 rounded-full bg-text-accent flex justify-center items-center">
        <Image src={rightArrow} alt="rightArrow" width={20} height={16} />
      </button>
    </div>
  );
}
