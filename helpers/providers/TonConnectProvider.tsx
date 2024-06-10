'use client';

import { TonConnectUIProvider } from '@tonconnect/ui-react';

export function TonConnectProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TonConnectUIProvider manifestUrl="https://astrocoin.vercel.app/tonconnect-manifest.json">
      {children}
    </TonConnectUIProvider>
  );
}
