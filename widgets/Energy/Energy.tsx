import { FC } from 'react';
import styles from './Energy.module.css';
import { useBoundStore } from '@/store';

export const Energy: FC = () => {
  const { currentEnergyLevel, energyCapacity } = useBoundStore();

  return (
    <div className={styles.energyWrapper}>
      <p className={styles.currentEnergy}>{currentEnergyLevel}</p>
      <div className={styles.totalEnergyWrapper}>
        <span className={styles.totalEnergy}>/ {energyCapacity}</span>
        <span className={styles.currentEnergyText}>Energy</span>
      </div>
      <div className={styles.energyScaleWrapper}>
        <div
          className={styles.energyScale}
          style={{ width: `${(currentEnergyLevel / energyCapacity) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};
