import { ITaskCard } from '@/app/frenx/components/TaskCard/types';
import { AppRoutes } from '@/config/routes';
import arrow from '@/public/icons/arrow-right.svg';
import token from '@/public/main-token.svg';
import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import styles from './TaskCard.module.css';

export const TaskCard: FC<ITaskCard> = ({
  additionalClass,
  title,
  description,
  onClick,
}) => {
  return (
    <div
      className={classNames(additionalClass, styles.taskCardWrapper)}
      onClick={onClick}
    >
      <div
        className={classNames(
          styles.imageWrapper,
          'text-3xl w-[48px] h-[48px] flex items-center justify-center',
        )}
      >
        🧸
      </div>
      <div>
        <p className={styles.title}>{title}</p>
        <div className={styles.descriptionWrapper}>
          <p className={styles.description}>{description}</p>
          <Image className={styles.token} src={token} alt="main token" />
        </div>
      </div>
      <Image className={styles.rightArrow} src={arrow} alt={''} />
    </div>
  );
};
