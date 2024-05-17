'use client';

import { TasksList } from './components/TasksList';
import { TopHeader } from './components/TopHeader';
import { TonConnectButton } from '@tonconnect/ui-react';

export default function EarnPage() {
  return (
    <div className="w-full flex flex-col items-center gap-8 p-4">
      <TopHeader />
      <TasksList />
      <TonConnectButton />
    </div>
  );
}
