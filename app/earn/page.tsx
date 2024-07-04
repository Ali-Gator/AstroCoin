'use client';

import { useBoundStore } from '@/store';
import { TasksList } from './components/TasksList';
import { TopHeader } from './components/TopHeader';
import { TonConnectButton } from '@tonconnect/ui-react';
import { useEffect } from 'react';

export default function EarnPage() {
  const { fetchQuests, isPlaceholder } = useBoundStore();

  useEffect(() => {
    if (isPlaceholder) {
      fetchQuests();
    }
  }, [fetchQuests, isPlaceholder]);
  return (
    <div className="w-full flex flex-col items-center gap-8 p-4">
      <TopHeader />
      <TasksList />
      <div className="fixed bottom-8">
        <TonConnectButton />
      </div>
    </div>
  );
}
