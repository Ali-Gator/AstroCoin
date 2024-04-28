import { FC } from 'react';
import styles from './Energy.module.css';
import { IEnergy } from '@/widgets/Energy/types';

export const Energy: FC<IEnergy> = ({ currentAmount }) => {

  return <div className={styles.energyWrapper}>
    <p className={styles.currentEnergy}>{currentAmount}</p>
    <div className={styles.totalEnergyWrapper}>
      <span className={styles.totalEnergy}>/ 1000</span>
      <span className={styles.currentEnergyText}>Energy</span>
    </div>
    <div className={styles.energyScale} style={{ width: `${currentAmount / 10}%` }}></div>
  </div>;
};
