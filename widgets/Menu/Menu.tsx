import { FC } from 'react';
import styles from './Menu.module.css';
import { MenuItem } from '@/components/MenuItem';
import potato from '@/public/icons/potato.png';
import token from '@/public/main-token.svg';
import burger from '@/public/icons/burger.png';

export const Menu: FC = () => {
  return (
    <div className={styles.menuWrapper}>
      <MenuItem imageSrc={potato} title="frenx" />
      <MenuItem imageSrc={token} title="earn" />
      <MenuItem imageSrc={burger} title="foost" linkPath="store" />
    </div>
  );
};
