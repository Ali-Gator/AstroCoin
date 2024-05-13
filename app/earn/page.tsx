'use client';

import { TonConnectButton } from '@tonconnect/ui-react';

export default function EarnPage() {
  return (
    <div className="p-4 bg-background h-screen w-full">
      <TonConnectButton className="absolute bottom-3 left-1/2 -translate-x-1/2" />
    </div>
  );
}
