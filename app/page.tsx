'use client';
import Loading from '@/app/loading';
import { useTelegram } from '@/helpers/providers/TelegramContext/TelegramContext';
import { Character } from '@/widgets/Character';
import { CommunityWidget } from '@/widgets/CommunityWidget';
import { Energy } from '@/widgets/Energy';
import { Menu } from '@/widgets/Menu';
import alien from '../public/avatars/alien.png';
import styles from './page.module.css';

export default function Home() {
  const { isLoading } = useTelegram();

  return isLoading ? (
    <Loading />
  ) : (
    <main className={styles.main}>
      <CommunityWidget imageSrc={alien} imageAlt="alien" />
      <Character />
      <Energy />
      <Menu />
    </main>
  );
}
