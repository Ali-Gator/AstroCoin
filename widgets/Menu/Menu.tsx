import { FC } from 'react';
import styles from './Menu.module.css';
import { MenuItem } from '@/components/MenuItem';
import bear from '@/public/icons/bear.png';
import token from '@/public/main-token.svg';
import burgerBig from '@/public/icons/burger-big.png';
import { AppRoutes } from '@/config/routes';

export const Menu: FC = () => {
  return (
    <div className={styles.menuWrapper}>
      <MenuItem imageSrc={bear} title="frenx" linkPath={AppRoutes.Frenx} />
      <MenuItem imageSrc={token} title="earn" linkPath={AppRoutes.Earn} />
      <MenuItem imageSrc={burgerBig} title="foost" linkPath={AppRoutes.Store} />
    </div>
  );
};
