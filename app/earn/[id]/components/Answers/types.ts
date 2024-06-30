import { IAnswer } from '@/app/earn/components/TasksList/types';

export interface IAnswersProps {
  answers: IAnswer[];
  onAnswerClick: (isTrue: boolean) => void;
  onContinueClick: () => void;
  onBackClick: () => void;
}
