'use client';

import Image from 'next/image';
import { createPortal } from 'react-dom';
import { TaskCard } from './components/TaskCard';
import { ITaskCard } from './components/TaskCard/types';
import styles from './page.module.css';
import { useContext } from 'react';
import { PopupContext } from '@/helpers/providers/PopupProvider';
import { useIsMounted } from 'usehooks-ts';
import { InvitePopup } from '@/app/frenx/components/InvitePopup';
import frenx from '@/public/icons/frenx.png';

const taskCardData1: ITaskCard = {
  title: 'Invite frenx',
  description: '100,000',
};

export default function Page() {
  const isMounted = useIsMounted();

  const popupContext = useContext(PopupContext);

  return (
    <main className={styles.frenxWrapper}>
      <Image
        className={styles.tokenImage}
        src={frenx}
        alt="frenx"
        width={50}
        height={50}
      />
      <p className={styles.title}>Your frenx</p>
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
