'use client';

import { TasksList } from './components/TasksList';
import { TopHeader } from './components/TopHeader';
import { TonConnectButton, useTonAddress } from '@tonconnect/ui-react';

export default function EarnPage() {
  const address = useTonAddress();

  return (
    <div className="w-full flex flex-col items-center gap-8 p-4">
      <TopHeader />
      <TasksList />
      <TonConnectButton />
      {address && <span>{address}</span>}
    </div>
  );
}
