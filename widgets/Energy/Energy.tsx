import { FC } from 'react';
import styles from './Energy.module.css';
import { useBoundStore } from '@/store';

export const Energy: FC = () => {
  const { foodStorage, foodStorageCapacity } = useBoundStore((state) => state);

  return (
    <div className={styles.energyWrapper}>
      <p className={styles.currentEnergy}>{foodStorage.toFixed(2)}</p>
      <div className={styles.totalEnergyWrapper}>
        <span className={styles.totalEnergy}>/ {foodStorageCapacity}</span>
        <span className={styles.currentEnergyText}>Energy</span>
      </div>
      <div className={styles.energyScaleWrapper}>
        <div
          className={styles.energyScale}
          style={{ width: `${(foodStorage / foodStorageCapacity) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};
