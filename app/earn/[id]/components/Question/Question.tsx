import { FC } from 'react';

export const Question: FC<IQuestionProps> = ({ text, step }) => {
  return (
    <div className="mt-8 flex font-termina600 text-3xl text-pretty">
      <p>{step}.&nbsp;</p>
      <p className="">{text}</p>
    </div>
  );
};
