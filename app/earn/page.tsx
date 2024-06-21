'use client';

import { TasksList } from './components/TasksList';
import { TopHeader } from './components/TopHeader';
import { TonConnectButton, useTonAddress } from '@tonconnect/ui-react';
import { useEffect } from 'react';

export default function EarnPage() {
  const address = useTonAddress();
  useEffect(() => {
    fetch('./earn/tasks.json')
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);
  return (
    <div className="w-full flex flex-col items-center gap-8 p-4">
      <TopHeader />
      <TasksList />
      <div className="fixed bottom-8">
        <TonConnectButton />
      </div>
      {address && <span>{address}</span>}
    </div>
  );
}
