import { FC } from 'react';
import Image from 'next/image';
import { IPlanetItem } from '@/components/PlanetItem/types';
import styles from './PlanetItem.module.css';
import arrow from '@/public/icons/arrow-right.svg';
import Link from 'next/link';
import { usePlanetData } from '@/helpers/usePlanetData';
import { AppRoutes } from '@/config/routes';

export const PlanetItem: FC<IPlanetItem> = ({ type }) => {
  const { imageSrc, imageAlt, planetName } = usePlanetData(type);

  return (
    <Link className={styles.PlanetItem} href={AppRoutes.Planets}>
      <Image className={styles.planet} src={imageSrc} alt={imageAlt} />
      <p className={styles.title}>{planetName}</p>
      <Image className={styles.rightArrow} src={arrow} alt={''} />
    </Link>
  );
};
