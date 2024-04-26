import { FC } from 'react';
import styles from './Character.module.css';
import Image from 'next/image';
import token from '@/public/main-token.svg';
import firstPlace from '../../public/icons/first-place.svg';
import { EPlanetType, PlanetItem } from '@/components/PlanetItem';
import alienEgg from '../../public/avatars/new-born-egg.png';

export const Character: FC = () => {

  return (
    <div className={styles.character}>
      <div className={styles.sumWrapper}>
        <Image className={styles.coin} src={token} alt={'main token'} />
        <p className={styles.sum}>2,474</p>
      </div>
      <div className={styles.subtitle}>
        <div className={styles.placeWrapper}>
          <Image className={styles.placeIcon} src={firstPlace} alt="First place" />
          <p className={styles.placeCount}>203,596</p>
        </div>
        <PlanetItem type={EPlanetType.Earth} />
      </div>
      <Image className={styles.mainAvatar} src={alienEgg} alt="New borm alien inside egg" /></div>
  );
};
