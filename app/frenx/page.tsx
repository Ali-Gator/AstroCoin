import styles from './page.module.css';
import Image from 'next/image';
import token from '@/public/main-token.svg';
import { TaskCard } from './components/TaskCard';
import { ITaskCard } from './components/TaskCard/types';
import Link from 'next/link';
import { AppRoutes } from '@/config/routes';

const taskCardData1: ITaskCard = {
  title: 'Invite bonus',
  description: 'up to 100K',
};

const taskCardData2: ITaskCard = {
  title: 'Invite 5 frenx',
  description: '+100,000',
};

export default function Page() {
  return (
    <main className={styles.frenxWrapper}>
      <Image className={styles.tokenImage} src={token} alt="token" />
      <p className={styles.title}>Earn more $XSY</p>
      <p className={styles.subtitle}>Full guide</p>
      <TaskCard additionalClass={styles.taskCard} {...taskCardData1} />
      <section className={styles.onboarding}>
        <p className={styles.heading}>Onboarding</p>
        <div className={styles.advertisement}>
          <p className={styles.subHeading}>Learn about TON blockchain</p>
          <p className={styles.heading}>Exclusive Skin and 200K XSY</p>
          <Link className={styles.link} href={AppRoutes.Home}>
            Learn about TON
          </Link>
        </div>
        <TaskCard additionalClass={styles.taskCard} {...taskCardData2} />
      </section>
    </main>
  );
}
