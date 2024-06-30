import { FC, useCallback, useMemo, useState } from 'react';
import { IAnswerProps } from '@/app/earn/[id]/components/Answer/types';

export const Answer: FC<IAnswerProps> = ({
  answer: { text, isTrue },
  onClick,
  isDisabled,
}) => {
  const [isCorrect, setIsCorrect] = useState<boolean | undefined>(undefined);

  const borderColor = useMemo(() => {
    if (typeof isCorrect !== 'undefined') {
      return isCorrect ? '#EDDF23' : '#FF565E';
    }

    return undefined;
  }, [isCorrect]);

  const handleClick = useCallback(() => {
    if (!isDisabled) {
      setIsCorrect(isTrue);
      onClick(isTrue);
    }
  }, [isTrue, onClick, setIsCorrect, isDisabled]);

  return (
    <button
      className="px-7 py-4 bg-card-background border-solid border-card-border border-2 rounded-[10px] text-xl text-left"
      style={{ borderColor: borderColor }}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};
