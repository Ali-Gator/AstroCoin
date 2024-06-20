'use client';
import Loading from '@/app/loading';
import { useTelegram } from '@/helpers/providers/TelegramContext';
import { Character } from '@/widgets/Character';
import { CommunityWidget } from '@/widgets/CommunityWidget';
import { Energy } from '@/widgets/Energy';
import { Menu } from '@/widgets/Menu';
import classNames from 'classnames';
import community from '../public/avatars/community.png';
import styles from './page.module.css';

export default function Home() {
  const { isLoading } = useTelegram();

  return isLoading ? (
    <Loading />
  ) : (
    <main
      className={classNames(
        styles.main,
        'bg-gradient-to-b from-black from-35% to-background-gradient',
      )}
    >
      <CommunityWidget imageSrc={community} imageAlt="community" />
      <Character />
      <Energy />
      <Menu />
    </main>
  );
}
