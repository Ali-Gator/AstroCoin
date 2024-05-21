'use client';
import Script from 'next/script';
import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export const TelegramContext = createContext<{
  telegramApp?: Telegram;
  isLoading: boolean;
}>({ isLoading: true });

export const TelegramProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [webApp, setWebApp] = useState<Telegram | undefined>(undefined);
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  useEffect(() => {
    const app = window.Telegram;

    if (app) {
      app.WebApp.ready();
      app.WebApp.expand();
      app.WebApp.enableClosingConfirmation();
      app.WebApp.BackButton.onClick(goBack);
      app.WebApp.BackButton.show();
      setWebApp(app);
      setLoading(false);
    }
  }, []);

  return (
    <TelegramContext.Provider value={{ telegramApp: webApp, isLoading }}>
      <Script
        src="https://telegram.org/js/telegram-web-app.js"
        strategy="beforeInteractive"
      />
      {children}
    </TelegramContext.Provider>
  );
};

export const useTelegram = () => useContext(TelegramContext);
