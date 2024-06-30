import { IAnswer } from '@/app/earn/components/TasksList/types';

export interface IAnswerProps {
  answer: IAnswer;
  onClick: (isTrue: boolean) => void;
  isDisabled: boolean;
}
