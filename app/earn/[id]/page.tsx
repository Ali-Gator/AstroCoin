'use client';
import { tasks } from '../data';
import { useState } from 'react';
import { IStep } from '@/app/earn/components/TasksList/types';
import { ProgressBar } from '@/app/earn/[id]/components/ProgressBar/ProgressBar';

export default function TaskPage({ params }: { params: { id: string } }) {
  const currTask = tasks.find(({ id }) => id === params.id);

  const [currStep, setCurrStep] = useState<IStep | null>(
    currTask?.steps[0] ?? null,
  );

  if (!currTask || !currStep) {
    return null;
  }

  const { reward } = currTask;
  const { question } = currStep;

  return (
    <div className="w-full h-full relative py-4 px-4 bg-gradient-to-b from-[#5F22A0] to[#160C20]">
      <p className="mt-2.5 font-termina700 text-center">
        <span className="text-text-accent">Learn</span> to earn
      </p>
      <ProgressBar className="mt-2.5" current={2000} total={reward} />
      <p className="">{question}</p>
    </div>
  );
}
