import { FC } from 'react';
import styles from './Character.module.css';
import Image from 'next/image';
import { EPlanetType, PlanetItem } from '@/components/PlanetItem';
import alienPerEarth from '@/public/avatars/alien-per-earth.png';
import { useBoundStore } from '@/store';
import astroCoin from '@/public/main-token.svg';

export const Character: FC = () => {
  const { currentBalance } = useBoundStore((state) => state);

  return (
    <div className={styles.character}>
      <div className={styles.sumWrapper}>
        <Image width={40} src={astroCoin} alt={'main token'} />
        <p className="font-termina700 text-[32px] leading-10 tracking-[0.03em]">
          {currentBalance.toLocaleString()}
        </p>
      </div>
      <div className={styles.subtitle}>
        <div className={styles.placeWrapper}>
          <p className={styles.placeCount}>(0 🔥) </p>
        </div>
        <PlanetItem type={EPlanetType.Earth} />
      </div>
      <Image
        className={styles.mainAvatar}
        src={alienPerEarth}
        alt="New borm alien inside egg"
        priority
      />
    </div>
  );
};
