import { FC } from 'react';
import styles from './MenuItem.module.css';
import { IMenuItem } from '@/components/MenuItem/types';
import Image from 'next/image';
import Link from 'next/link';

export const MenuItem: FC<IMenuItem> = ({ imageSrc, title, linkPath }) => {
  return (
    <Link className={styles.menuItem} href={linkPath}>
      <Image className={styles.icon} src={imageSrc} alt={title} />
      <p className={styles.title}>{title}</p>
    </Link>
  );
};
