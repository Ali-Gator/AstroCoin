import { TelegramProvider } from './TelegramContext/TelegramContext';
import { TonConnectProvider } from './TonConnectProvider';

export const ProvidersWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <TonConnectProvider>
      <TelegramProvider>{children}</TelegramProvider>
    </TonConnectProvider>
  );
};
