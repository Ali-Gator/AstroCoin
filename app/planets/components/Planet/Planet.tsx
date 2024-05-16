'use client';

import { FC } from 'react';
import { IPlanet } from '@/app/planets/components/Planet/types';
import styles from './Planet.module.css';
import { usePlanetData } from '@/helpers/usePlanetData';
import Image from 'next/image';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';

export const Planet: FC<IPlanet> = ({ type, isActive }) => {
  const { imageSrc, imageAlt, planetName } = usePlanetData(type);
  const router = useRouter();

  const onClickHandler = () => {
    router.back();
  };

  return (
    <button
      className={classNames(styles.planetWrapper, {
        [styles.active]: isActive,
      })}
      onClick={onClickHandler}
    >
      <Image className={styles.icon} src={imageSrc} alt={imageAlt} />
      <p className={styles.name}>{planetName}</p>
    </button>
  );
};
