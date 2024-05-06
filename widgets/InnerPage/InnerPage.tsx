import styles from './InnerPage.module.css';
import { FC } from 'react';
import { IInnerPage } from '@/widgets/InnerPage/types';

export const InnerPage: FC<IInnerPage> = ({ title, subtitle, children }) => {
  return (
    <main className={styles.pageWrapper}>
      <p className={styles.title}>{title}</p>
      <p className={styles.subtitle}>{subtitle}</p>
      {children}
    </main>
  );
};
