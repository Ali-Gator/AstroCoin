import { PopupProvider } from './PopupProvider';
import { TelegramProvider } from './TelegramContext';
import { TonConnectProvider } from './TonConnectProvider';

export const ProvidersWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <TonConnectProvider>
      <TelegramProvider>
        <PopupProvider>{children}</PopupProvider>
      </TelegramProvider>
    </TonConnectProvider>
  );
};
