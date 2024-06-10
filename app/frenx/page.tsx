'use client';

import token from '@/public/main-token.svg';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import { TaskCard } from './components/TaskCard';
import { ITaskCard } from './components/TaskCard/types';
import styles from './page.module.css';
import { useContext } from 'react';
import { PopupContext } from '@/helpers/providers/PopupProvider';
import { Button } from '@/shared/ui/Button';

const taskCardData1: ITaskCard = {
  title: 'Invite 5 frenx',
  description: '100,000+',
};

const renderInvitePopup = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between">
      <div className="flex flex-col items-center gap-20">
        <span className="text-[32px] font-termina600 text-center">
          Invite your friends
        </span>
        <span className="text-2xl font-sf-pro text-center">
          Invite your friends and get 100,000 AstroCoins for each of them!
        </span>
      </div>
      <Button>Invite a friend</Button>
    </div>
  );
};

export default function Page() {
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
      {createPortal(renderInvitePopup(), document.getElementById('popup')!)}
    </main>
  );
}
