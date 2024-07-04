import { FC, useCallback, useState } from 'react';
import { IAnswersProps } from '@/app/earn/[name]/components/Answers/types';
import { Answer } from '@/app/earn/[name]/components/Answer/Answer';
import rightArrow from '@/public/earn/tasks/right-arrow.svg';
import Image from 'next/image';
import correctIcon from '@/public/earn/tasks/correct.svg';
import incorrectIcon from '@/public/earn/tasks/incorrect.svg';
import classNames from 'classnames';

export const Answers: FC<IAnswersProps> = ({
  answers,
  onAnswerClick,
  onContinueClick,
  onBackClick,
}) => {
  const [isAnswerDisabled, setIsAnswerDisabled] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | undefined>(undefined);

  const handleAnswerClick = useCallback(
    (isTrue: boolean) => {
      setIsAnswerDisabled(true);
      setIsCorrect(isTrue);
      onAnswerClick(isTrue);
    },
    [onAnswerClick],
  );

  return (
    <div className="mt-5 flex flex-col justify-between grow">
      <div className=" flex flex-col gap-y-2">
        {answers.map((answer) => (
          <Answer
            key={answer.text}
            answer={answer}
            isDisabled={isAnswerDisabled}
            onClick={handleAnswerClick}
          />
        ))}
      </div>
      <div className="my-2">
        {typeof isCorrect === 'boolean' && (
          <div className="mb-2 flex gap-1.5 items-center">
            {isCorrect ? (
              <>
                <Image src={correctIcon} alt="correct" width={26} height={26} />
                <p className="text-xl text-text-accent">Correct</p>
              </>
            ) : (
              <>
                <Image
                  src={incorrectIcon}
                  alt="incorrect"
                  width={26}
                  height={26}
                />
                <p className="text-xl text-text-danger">Incorrect</p>
              </>
            )}
          </div>
        )}
        <div className="flex flex-row gap-x-2 w-full">
          {isCorrect === undefined && (
            <button
              onClick={onBackClick}
              className="p-4 rounded-full bg-text-accent flex justify-center items-center"
            >
              <Image
                src={rightArrow}
                className="rotate-180"
                alt="rightArrow"
                width={20}
                height={16}
              />
            </button>
          )}
          <button
            className={classNames(
              'block w-full px-4 py-2.5 rounded-[10px] text-xl bg-background-buttons text-text-dark',
              { 'opacity-40': typeof isCorrect === 'undefined' },
            )}
            disabled={typeof isCorrect === 'undefined'}
            onClick={onContinueClick}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
