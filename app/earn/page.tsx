'use client';

import { TasksList } from './components/TasksList';
import { TopHeader } from './components/TopHeader';
import {
  TonConnectButton,
  useTonAddress,
  useTonWallet,
} from '@tonconnect/ui-react';

export default function EarnPage() {
  const address = useTonAddress();
  const wallet = useTonWallet();

  console.log('wallet: ', wallet);

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
