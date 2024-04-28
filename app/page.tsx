'use client';
import styles from './page.module.css';
import Loading from '@/app/loading';
import { CommunityWidget } from '@/widgets/CommunityWidget';
import alien from '../public/avatars/alien.png';
import { useTelegram } from '@/helpers/TelegramContext/TelegramContext';
import { Character } from '@/widgets/Character';
import { Energy } from '@/widgets/Energy';

export default function Home() {
  const { isLoading } = useTelegram();

  return isLoading ? (
    <Loading />
  ) : (
    <main className={styles.main}>
      <CommunityWidget imageSrc={alien} imageAlt="alien" />
      <Character />
      <Energy currentAmount={564} />
    </main>
  );
}
