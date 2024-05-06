import { FC } from 'react';
import { ITaskCard } from '@/app/frenx/components/TaskCard/types';
import classNames from 'classnames';
import styles from './TaskCard.module.css';
import Image from 'next/image';
import taskIcon from '@/public/icons/potato.png';
import token from '@/public/main-token.svg';
import arrow from '@/public/icons/arrow-right.svg';
import Link from 'next/link';

export const TaskCard: FC<ITaskCard> = ({
  additionalClass,
  title,
  description,
}) => {
  return (
    <Link
      className={classNames(additionalClass, styles.taskCardWrapper)}
      href="/"
    >
      <div className={styles.imageWrapper}>
        <Image className={styles.image} src={taskIcon} alt="task icon" />
      </div>
      <div>
        <p className={styles.title}>{title}</p>
        <div className={styles.descriptionWrapper}>
          <p className={styles.description}>{description}</p>
          <Image className={styles.token} src={token} alt="main token" />
        </div>
      </div>
      <Image className={styles.rightArrow} src={arrow} alt={''} />
    </Link>
  );
};
