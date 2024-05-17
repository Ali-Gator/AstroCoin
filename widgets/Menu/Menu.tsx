import { FC } from 'react';
import styles from './Menu.module.css';
import { MenuItem } from '@/components/MenuItem';
import potato from '@/public/icons/potato.png';
import token from '@/public/main-token.svg';
import burger from '@/public/icons/burger.png';
import { AppRoutes } from '@/config/routes';

export const Menu: FC = () => {
  return (
    <div className={styles.menuWrapper}>
      <MenuItem imageSrc={potato} title="frenx" linkPath={AppRoutes.Frenx} />
      <MenuItem imageSrc={token} title="earn" linkPath={AppRoutes.Earn} />
      <MenuItem imageSrc={burger} title="foost" linkPath={AppRoutes.Store} />
    </div>
  );
};
