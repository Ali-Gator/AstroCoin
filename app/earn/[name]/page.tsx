'use client';
import { useCallback, useState } from 'react';
import { ProgressBar } from '@/app/earn/[name]/components/ProgressBar/ProgressBar';
import { Description } from '@/app/earn/[name]/components/Description/Description';
import { Answers } from '@/app/earn/[name]/components/Answers/Answers';
import { EScreenType, ITaskPageProps } from '@/app/earn/[name]/types';
import { Question } from '@/app/earn/[name]/components/Question/Question';
import { Final } from '@/app/earn/[name]/components/Final/Final';
import classNames from 'classnames';
import { useBoundStore } from '@/store';

export default function TaskPage({ params }: ITaskPageProps) {
  const { quests: questsObject, completeQuest } = useBoundStore();
  const currentQuest = questsObject[params.name];

  const [currStep, setCurrStep] = useState<number>(0);
  const [screenType, setScreenType] = useState<EScreenType>(
    EScreenType.Description,
  );
  const [currReward, setCurrReward] = useState(0);

  const showAnswers = useCallback(() => {
    setScreenType(EScreenType.Answers);
  }, []);

  if (!currentQuest) {
    return null;
  }

  const { reward, steps, isCompleted } = currentQuest;
  const { question, questQuestion, description, answers } = steps[currStep];

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
      completeQuest(params.name, currReward);
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
        {isCompleted && (
          <span className="text-xs text-text font-termina300">
            {' '}
            (completed)
          </span>
        )}
      </p>
      <ProgressBar className="mt-2.5" current={currReward} total={reward} />
      {screenType !== EScreenType.Final && (
        <Question
          step={currStep + 1}
          text={
            screenType === EScreenType.Answers
              ? questQuestion || question
              : question
          }
        />
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