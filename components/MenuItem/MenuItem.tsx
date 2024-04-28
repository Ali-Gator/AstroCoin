import { FC } from 'react';
import styles from './MenuItem.module.css';
import { IMenuItem } from '@/components/MenuItem/types';
import Image from 'next/image';

export const MenuItem: FC<IMenuItem> = ({ imageSrc, title }) => {
  return (
    <button className={styles.menuItem}>
      <Image className={styles.icon} src={imageSrc} alt={title} />
      <p className={styles.title}>{title}</p>
    </button>
  );
};
