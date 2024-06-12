'use client';

import token from '@/public/main-token.svg';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import { TaskCard } from './components/TaskCard';
import { ITaskCard } from './components/TaskCard/types';
import styles from './page.module.css';
import { useContext } from 'react';
import { PopupContext } from '@/helpers/providers/PopupProvider';
import { useIsMounted } from 'usehooks-ts';
import { InvitePopup } from '@/app/frenx/components/InvitePopup';

const taskCardData1: ITaskCard = {
  title: 'Invite 5 frenx',
  description: '100,000+',
};

export default function Page() {
  const isMounted = useIsMounted();

  const popupContext = useContext(PopupContext);

  return (
    <main className={styles.frenxWrapper}>
      <Image className={styles.tokenImage} src={token} alt="token" />
      <p className={styles.title}>Earn more $Astro</p>
      <p className={styles.subtitle}>Full guide</p>
      <TaskCard
        additionalClass={styles.taskCard}
        {...taskCardData1}
        onClick={() => {
          popupContext.toggle?.();
        }}
      />
      {isMounted() &&
        createPortal(<InvitePopup />, document.getElementById('popup')!)}
    </main>
  );
}
