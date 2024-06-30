'use client';
import { useCallback, useState } from 'react';
import { tasks } from '../data';
import { ProgressBar } from '@/app/earn/[id]/components/ProgressBar/ProgressBar';
import { Description } from '@/app/earn/[id]/components/Description/Description';
import { Answers } from '@/app/earn/[id]/components/Answers/Answers';
import { EScreenType, ITaskPageProps } from '@/app/earn/[id]/types';
import { Question } from '@/app/earn/[id]/components/Question/Question';
import { Final } from '@/app/earn/[id]/components/Final/Final';
import classNames from 'classnames';

export default function TaskPage({ params }: ITaskPageProps) {
  const currTask = tasks.find(({ id }) => id === params.id);

  const [currStep, setCurrStep] = useState<number>(0);
  const [screenType, setScreenType] = useState<EScreenType>(
    EScreenType.Description,
  );
  const [currReward, setCurrReward] = useState(0);

  const showAnswers = useCallback(() => {
    setScreenType(EScreenType.Answers);
  }, []);

  if (!currTask) {
    return null;
  }

  const { reward, steps } = currTask;
  const { question, description, answers } = steps[currStep];

  const onAnswerClick = (isTrue: boolean) => {
    if (isTrue) {
      setCurrReward((prevReward) => prevReward + reward / steps.length);
    }
  };

  const onContinueClick = () => {
    if (currStep < steps.length - 1) {
      setCurrStep((prevStep) => ++prevStep);
      setScreenType(EScreenType.Description);
    } else {
      setScreenType(EScreenType.Final);
    }
  };

  const onBackClick = () => {
    if (screenType === EScreenType.Answers) {
      setScreenType(EScreenType.Description);
    }
  };

  return (
    <div className="flex flex-col w-full h-full min-h-[100vh] relative py-4 px-6 bg-gradient-to-b from-[#5F22A0] to[#160C20]">
      <p className="mt-2.5 font-termina700 text-center">
        <span
          className={classNames({
            'text-text-accent': screenType === EScreenType.Description,
          })}
        >
          Learn
        </span>{' '}
        to{' '}
        <span
          className={classNames({
            'text-text-accent': screenType === EScreenType.Answers,
          })}
        >
          earn
        </span>
      </p>
      <ProgressBar className="mt-2.5" current={currReward} total={reward} />
      {screenType !== EScreenType.Final && (
        <Question step={currStep + 1} text={question} />
      )}
      {screenType === EScreenType.Description && (
        <Description text={description} onClick={showAnswers} />
      )}
      {screenType === EScreenType.Answers && (
        <Answers
          answers={answers}
          onAnswerClick={onAnswerClick}
          onContinueClick={onContinueClick}
          onBackClick={onBackClick}
        />
      )}
      {screenType === EScreenType.Final && <Final />}
    </div>
  );
}
